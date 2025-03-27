"""
Used by Challenge 3
"""

import math
from shape import Shape


class Circle(Shape):
    def __init__(self, radius = 0):
        # Inherits from `Shape`
        super().__init__()
        self.radius = radius

    def area(self):
        # Returns the area of the circle
        if self.radius < 0 :
            raise Exception("Negative values for radius are not supported")
        return math.pi * math.pow(self.radius, 2)

    def perimeter(self):
        # Returns the perimeter length of the circle
        if self.radius < 0 :
            raise Exception("Negative values for radius are not supported")
        return 2 * math.pi * self.radius
