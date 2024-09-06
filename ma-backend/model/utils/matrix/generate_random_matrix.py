import numpy as np

def random_probability_matrix(rows, cols):
    """
    Generates a random probability matrix with the specified number of rows and columns.
    Each row will sum to 1, making it a valid probability distribution.

    Parameters:
    rows (int): Number of rows (e.g., number of states or observations).
    cols (int): Number of columns (e.g., number of states or observations).

    Returns:
    np.ndarray: A matrix of shape (rows, cols) where each row sums to 1.
    """
    matrix = np.random.rand(rows, cols)
    matrix /= matrix.sum(axis=1, keepdims=True)
    return matrix