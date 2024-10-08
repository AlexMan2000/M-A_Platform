import { describe, it, expect, vi, beforeEach } from 'vitest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { concurRequest, processTasks } from '../utils/Concurrent';

let mock: MockAdapter;

// Set up the mock adapter before each test
beforeEach(() => {
  mock = new MockAdapter(axios);
});

describe('concurRequest', () => {
  it('should return responses in the same order as requests', async () => {
    const urls = ['https://api.example.com/1',
      'https://api.example.com/2',
      'https://api.example.com/3',
      'https://api.example.com/4',
      'https://api.example.com/5'];
    const maxNum = 3;

    // Mock the axios GET requests for each URL
    mock.onGet('https://api.example.com/1').reply(200, { data: 'Response 1' });
    mock.onGet('https://api.example.com/2').reply(200, { data: 'Response 2' });
    mock.onGet('https://api.example.com/3').reply(200, { data: 'Response 3' });
    mock.onGet('https://api.example.com/4').reply(200, { data: 'Response 4' });
    mock.onGet('https://api.example.com/5').reply(200, { data: 'Response 5' });

    // Call the concurRequest function
    const result = await concurRequest(urls, maxNum);
    // Assert the expected results
    expect(result).toEqual([
      { data: 'Response 1' },
      { data: 'Response 2' },
      { data: 'Response 3' },
      { data: 'Response 4' },
      { data: 'Response 5' }
    ]);
  });

  it('should handle concurrent requests and resolve the result correctly', async () => {
    const urls = ['https://api.example.com/4', 'https://api.example.com/5', 'https://api.example.com/6'];
    const maxNum = 1; // Set the max number of concurrent requests to 1 to test concurrency control

    // Mocking responses with delays to simulate concurrency
    mock.onGet('https://api.example.com/4').reply(200, { data: 'Response 4' });
    mock.onGet('https://api.example.com/5').reply(200, { data: 'Response 5' });
    mock.onGet('https://api.example.com/6').reply(200, { data: 'Response 6' });

    // Call the concurRequest function
    const result = await concurRequest(urls, maxNum);

    // Assert the expected results
    expect(result).toEqual([
      { data: 'Response 4' },
      { data: 'Response 5' },
      { data: 'Response 6' }
    ]);
  });

  it('should handle an empty URL array', async () => {
    const urls: string[] = [];
    const maxNum = 2;

    // Call the concurRequest function
    const result = await concurRequest(urls, maxNum);

    // Assert that the result is an empty array
    expect(result).toEqual([]);
  });
});



describe('pauseTask', () => {
  const task1 = vi.fn(() => new Promise(resolve => setTimeout(() => resolve('Task 1 completed'), 100)));
  const task2 = vi.fn(() => new Promise(resolve => setTimeout(() => resolve('Task 2 completed'), 200)));
  const task3 = vi.fn(() => new Promise(resolve => setTimeout(() => resolve('Task 3 completed'), 50)));


  it('should execute tasks in sequence and return results', async () => {
    const [start] = processTasks(task1, task2, task3);
    const results = await start();
    expect(results).toEqual(['Task 1 completed', 'Task 2 completed', 'Task 3 completed']);
    expect(task1).toHaveBeenCalled();
    expect(task2).toHaveBeenCalled();
    expect(task3).toHaveBeenCalled();
  });


  it('should handle an empty task list', async () => {
    const [start, pause] = processTasks();
    const results = await start();
    expect(results).toEqual([]);
  });


  it('should pause and resume tasks correctly', async () => {
    const task1 = vi.fn(() => new Promise(resolve => setTimeout(() => resolve('Task 1 completed'), 100)));
    const task2 = vi.fn(() => new Promise(resolve => setTimeout(() => resolve('Task 2 completed'), 200)));
    const task3 = vi.fn(() => new Promise(resolve => setTimeout(() => resolve('Task 3 completed'), 50)));

    const [start, pause] = processTasks(task1, task2, task3);

    // Start the tasks
    const startPromise = start();

    // Pause after starting the first task
    pause();

    // Wait a moment to ensure the first task is still in progress
    await new Promise(resolve => setTimeout(resolve, 100));

    // Check that the first task is still running and second task hasn't started
    expect(task1).toHaveBeenCalled();
    expect(task2).not.toHaveBeenCalled();

    // Resume tasks
    const resumePromise = start();

    // Resolve both promises
    await Promise.all([startPromise, resumePromise]);

    expect(task1).toHaveBeenCalledTimes(1);
    expect(task2).toHaveBeenCalledTimes(1);
    expect(task3).toHaveBeenCalledTimes(1);
  });


  it('should handle task errors correctly', async () => {
    const failingTask = vi.fn(() => new Promise((_, reject) => setTimeout(() => reject('Task failed'), 100)));

    const [start] = processTasks(task1, failingTask, task3);

    const results = await start();

    expect(results).toEqual(['Task 1 completed', 'Task failed', 'Task 3 completed']);
    expect(task1).toHaveBeenCalled();
    expect(failingTask).toHaveBeenCalled();
    expect(task3).toHaveBeenCalled();
  });
});
