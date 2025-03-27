"""
Used by Challenge 3
"""

from shape import Shape


class Rectangle(Shape):
    def __init__(self, width = 0, height = 0):
        # Inherits from `Shape`
        super().__init__()
        self.width = width
        self.height = height

    def area(self):
        # Returns the area of the rectangle
        if self.width < 0 or self.height < 0:
            raise Exception("Negative values for width, or height, are not supported")
        return self.width * self.height

    def perimeter(self):
        # Returns the perimeter length of the rectangle
        if self.width < 0 or self.height < 0:
            raise Exception("Negative values for width, or height, are not supported")
        if self.width == 0 or self.height == 0:
            raise Exception("Zero width, or height, don't make sense")
        return 2 * (self.width + self.height)
