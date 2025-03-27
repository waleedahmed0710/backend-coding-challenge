"""
Challenge 2: Stack/Queue Operations
"""

from stack import Stack


test_mode = False
s = Stack()

if not test_mode:
    '''
        The following code is taken directly from the challenge.
        Set `test_mode = False` to run this code.
    '''
    s.push(1)
    s.push(2)
    print(s.peek())  # Expected: 2
    print(s.pop())   # Expected: 2
    print(s.size())  # Expected: 1

else:
    print("Running in test mode...")
    print(s.size())
    # print(s.peek())  # Should crash
    # s.pop()  # Should crash

    print("Add 'dd'")
    s.push("dd")

    print("Remove 'dd'")
    print(s.pop())

    print("Add 'ee' and 'ff'")
    s.push("ee")
    s.push("ff")
    print(s.size())
    print(s.peek())

    print("Add 'gg'")
    s.push("gg")
    print(s.peek())

    print("Before delete:")
    print(s.data)
    print(s.size())
    print(s.pop())
    print("After delete:")
    print(s.peek())
    print(s.data)
    print(s.size())
