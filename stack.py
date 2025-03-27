"""
Used by Challenge 2
"""

class Stack:
    def __init__(self):
        self.data = []

    def size(self):
        return len(self.data)

    def push(self, value):
        self.data.append(value)

    def pop(self):
        data_size = self.size()
        if data_size > 0:
            del_element = self.data.pop()
            return del_element
        raise Exception("No data to pop")

    def peek(self):
        if not self.size():
            raise Exception("Stack is empty")
        return self.data[-1]
