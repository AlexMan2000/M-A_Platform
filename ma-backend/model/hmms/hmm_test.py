from hmm import HMM
import numpy as np

if __name__ == "__main__":
    states = np.array(["hot", "cold"])  # weather
    observations = [1, 2, 3]  # number of ice creams eaten
    initial_probs = [0.8, 0.2]
    transition_probs = [[0.6, 0.4], [0.5, 0.5]]
    emission_probs = [[0.2, 0.4, 0.4], [0.5, 0.4, 0.1]]

    model = HMM(states, observations, transition_probs,
                emission_probs, initial_probs)

    observation_sequence = [3, 1, 3, 2]

    # Task 1: Compute likelihood of observation sequence
    prob, prob_matrix = model.compute_likelihood(observation_sequence)
    print(prob)

    bprob, bprob_matrix = model.backward_likelihood(observation_sequence)
    print(bprob)

    # Task 2: Decoding (find the most likely hidden state sequence for an observation sequence)
    path, prob = model.decode_from_obs(observation_sequence)
    print(path)

