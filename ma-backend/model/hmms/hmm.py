from typing import List
import numpy as np

from utils.commons.data_structure import get_length


class HMM():
    """
    A Hidden Markov Model (HMM).

    Attributes
    ----------
    states : array_like or numpy ndarray
        List of states.

    observations : array_like or numpy ndarray
        Observations space array. e.g. [1, 2, 3], which represents 3 possible observation states

    transition : array_like or numpy ndarray
        Transition probability matrix(symmetric) which stores probability of
        moving from state i (row) to state j (col).

    emission : array_like or numpy ndarray
        Emission probability matrix which stores probability of
        seeing observation o (col) from state s (row).

    initial : array_like or numpy ndarray
        Initial state probabilities array.
    """

    def __init__(self, states, observations, A, B, pi):
        self.states = np.array(states)
        self.num_states = get_length(states)
        self.observations = np.array(observations)
        self.transition = np.array(A)
        self.emission = np.array(B)
        self.initial = np.array(pi)

    def compute_likelihood(self, obs):
        """
        Task 1: Compute the likelihood of an observation sequence, P(O|λ) where λ=(A, B)
        :param obs: Array like object or numpy ndarray
        :return: prob, float, the probability of an observation sequence
        """
        return self._forward_likelihood(np.array(obs))

    def decode_from_obs(self, obs):
        """
        Task 2: Decode the observation sequence, computing P(Q|Z, λ) where λ=(A, B)
        :param obs: Array like object or numpy ndarray
        :return: prob, float, the probability of an observation sequence
        """
        return self._forward_viterbi(np.array(obs))

    def learn_from_obs(self, obs):
        """
        Task 3: Train the HMM from data using forward-backward algorithm
        :param obs: Array like object or numpy ndarray
        :return:
        """
        return self._baum_welch_algorithm(np.array(obs))

    def _forward_likelihood(self, obs):
        """

        :param obs: Observation sequence, e.g. [1,2,3,4,5]
        :return: The likelihood of this observation sequence
        """
        N = self.num_states
        T = get_length(obs)

        assert T > 0, "Observation cannot be empty array"

        forward_prob_matrix = np.zeros((N, T))

        # 1. Initialization
        forward_prob_matrix[:, 0] = self.initial * self.emission[:, self._get_observation_idx(obs[0])]

        # 2. Recursion Step: Computes P(O | Q) P(Q) at each time step
        for t in range(1, T):
            forward_prob_matrix[:, t] = (forward_prob_matrix[:, t - 1].dot(self.transition)) \
                                        * self.emission[:, self._get_observation_idx(obs[t])]

        # 3. Termination: P(O) = Σ P(O, Q) = Σ P(O | Q)P(Q)
        forward_prob = forward_prob_matrix[:, T - 1].flatten().sum()

        return forward_prob, forward_prob_matrix

    def _backward_likelihood(self, obs):
        N = self.num_states
        T = get_length(obs)

        assert T > 0, "Observation cannot be empty array"

        backward_prob_matrix = np.zeros((N, T))

        # 1. Initialization: The backward probability at the last time step is set to 1 because,
        # starting from the last observation, the probability of the "empty sequence" (i.e., no future observations)
        # is certain. In other words, there is nothing left to observe, so the probability of correctly observing
        # "nothing" is trivially 1.
        backward_prob_matrix[:, T-1] = 1

        # 2. Recursion Step: Computes P(O | Q) P(Q) at each time step
        for t in range(T - 2, -1, -1):
            backward_prob_matrix[:, t] = (self.transition.dot(backward_prob_matrix[:, t + 1])) \
                                        * self.emission[:, self._get_observation_idx(obs[t + 1])]

        # 3. Termination
        backward_prob = self.initial.dot(backward_prob_matrix[:, 0] * self.emission[:, self._get_observation_idx(obs[0])])

        return backward_prob, backward_prob_matrix

    def _forward_viterbi(self, obs):
        N = self.num_states
        T = get_length(obs)

        assert T > 0, "Observation cannot be empty array"

        forward_viterbi_matrix = np.zeros((N, T))

        # 1. Initialization
        forward_viterbi_matrix[:, 0] = self.initial * self.emission[:, self._get_observation_idx(obs[0])]

        # 2. Recursion Step: Computes max-prob path at each iteration
        for t in range(1, T):
            forward_value = (forward_viterbi_matrix[:, t - 1]
                             .reshape(-1, 1) * self.transition) \
                                .max(axis=0) \
                                * self.emission[:, self._get_observation_idx(obs[t])]
            forward_viterbi_matrix[:, t] = forward_value

        # 3. Termination: Find the max-prob and max-path
        # backtrace
        max_prob_path = self.states[forward_viterbi_matrix.argmax(axis=0)]
        max_prob = forward_viterbi_matrix[:, T - 1].max()

        return max_prob_path, max_prob

    def _baum_welch_algorithm(self, obs, iterations=1):
        for _ in range(iterations):
            T = len(obs)

            # expectation step
            forward_likelihood_prob, alpha = self._forward_likelihood(obs)
            _, beta = self._backward_likelihood(obs)
            gamma = alpha * beta / (alpha * beta).sum(axis=0)
            xi = np.zeros((self.num_states, self.num_states, T - 1))
            for t in range(T - 1):
                o_t1 = self._get_observation_idx(obs[t + 1])
                for i in range(self.num_states):
                    xi[i, :, t] = alpha[i, t] * self.transition[i, :] \
                                  * self.emission[:, o_t1] * beta[:, t + 1]
            xi /= xi.sum(axis=(0, 1))

            # maximization step
            self.initial = gamma[:, 0]
            self.transition = xi.sum(axis=2) / gamma[:, :-1].sum(axis=1).reshape(-1, 1)
            for idx, o in enumerate(self.observations):
                indices = np.argwhere(obs == o).flatten()
                self.emission[:, idx] = gamma[:, indices].sum(axis=1) \
                                  / gamma.sum(axis=1)

    def _get_observation_idx(self, o):
        """
        Get the vocabulary idx of a particular observation
        :param o: The observation
        :return: The idx in the vocabulary of an observation o
        """
        return np.argwhere(self.observations == o).flatten().item()


if __name__ == "__main__":
    pass
