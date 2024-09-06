import numpy as np
def get_length(obj):
    """
    Returns the length of an array-like object if it is a Python list or a NumPy array.

    Parameters:
    obj : Object to check and measure.

    Returns:
    int : Length of the object if it is a list or a NumPy array.
    """
    if isinstance(obj, (list, np.ndarray)):
        return len(obj)
    else:
        raise TypeError("Object is neither a Python list nor a NumPy array")


