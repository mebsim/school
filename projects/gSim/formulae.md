# Explanation for gSim formulae (3D)

There are two main parts of gSim that have a strong basis in physics/math: gravity calculations and momentum calculations during collisions.

## Gravity

There are two main formulae behind gSim:

$$F=ma$$

\([Newton's laws of motion](https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion)\)

$$F=G\frac{m_1m_2}{d^2}$$

\([Newton's law of universal gravitation](https://en.wikipedia.org/wiki/Newton%27s_law_of_universal_gravitation)\)

If we rearrange the equation, then, (and assume \\(m_1=m\\)) we can obtain the following:

$$m_1a = G\frac{m_1m_2}{d^2}$$

$$a = \frac{G\frac{m_1m_2}{d^2}}{m_1}$$

$$a = \frac{Gm_2}{d^2}$$

where \\(d\\) is the distance between the two mass particles, calculated using Pythagoras' formula:

$$d_x = x_1-x_2$$

$$d_y = y_1-y_2$$

$$d_z = z_1-z_2$$

$$d = \sqrt{d_x^2+d_y^2+d_z^2}$$

However, this acceleration is the combined amount. In order to get the individual accelerations for each axis for a given particle (#1), we need to split the vectors:

$$a_x = a\frac{x_1}{d} = \frac{Gm_2}{d^2}\times\frac{d_x}{d} = \frac{Gm_2d_x}{d^3}$$

$$a_y = a\frac{y_1}{d} = \frac{Gm_2}{d^2}\times\frac{d_y}{d} = \frac{Gm_2d_y}{d^3}$$

$$a_x = a\frac{z_1}{d} = \frac{Gm_2}{d^2}\times\frac{d_z}{d} = \frac{Gm_2d_z}{d^3}$$

The algorithm for computing the accelerations of each particle has time complexity `O(n^2)`.

This is because there are two for loops: For each particle, the effect from all the other particles are calculated.

## Collisions

gSim also checks for collisions between particles. When such collisions occur, the particles combine.

The mass is simply added, and the new area is calculated by the natural log of the mass.

To calculate the new speed of this particle, [the law of conservation of momentum](https://en.wikipedia.org/wiki/Momentum#Conservation) is used:

$$P_{new}=P_1+P_1$$

$$m\_{new}v\_{new}=m_1v_1+m_2v_2$$

However, if \\(m_{new}=m_1+m_2\\) then we have:

$$v_{new}=\frac{m_1v_1+m_2v_2}{m_1+m_2}$$
