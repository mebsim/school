# Explanation for gSim formulae

The fundamental formula behind gSim is based on two formulae:

$$F=ma$$

$$F=G\frac{m_1m_2}{d^2}$$

Naturally, then, it is given that:

$$m_1a = G\frac{m_1m_2}{d^2}$$

$$a = \frac{G\frac{m_1m_2}{d^2}}{m_1}$$

$$a = \frac{Gm_2}{d^2}$$

where $d$ is the distance between the two mass particles, calculated using Pythagoras' formula:

$$d = \sqrt{(x_1-x_2)^2+(y_1-y_2)^2}$$

The algorithm for computing the accelerations of each particle has time complexity `O(n^2)`.

This is because there are two for loops: For each particle, the effect from all the other particles are calculated.

As well, the algorithm checks for collisions between particles. When such collisions occur, the particle combine.

To calculate the new speed of this particle, the law of conservation of momentum is used.

$$P_new=P_1+P_1$$

$$m_newv_new=m_1v_1+m_2v_2$$

However, if $m_new=m_1+m_2$ then we have

$$v_new=\frac{m_1v_1+m_2v_2}{m_1+m_2}$$
