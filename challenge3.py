"""
Challenge 3: Inheritance & Polymorphism
"""

from shape import Shape
from rectangle import Rectangle
from circle import Circle


test_mode = False

r = Rectangle(4, 5)
c = Circle(3)
ss = Shape()

if not test_mode:
    '''
        The following code is taken directly from the challenge.
        Set `test_mode = False` to run this code.
    '''
    print(r.area())
    print(r.perimeter())
    print(c.area())
    print(c.perimeter())

else:
    print("Running in test mode...")
    # rr = Rectangle(5, 0)  # Should crash
    # rr = Rectangle(0, 9)  # Should crash
    # rr = Rectangle()  # Should crash
    rr = Rectangle(4, 9)

    # ss.area()  # Should crash
    # ss.perimeter()  # Should crash

    print(rr.area())
    print(rr.perimeter())

    print(c.area())
    print(c.perimeter())
