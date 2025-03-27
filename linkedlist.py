"""
Used by Challenge 1
"""

from node import Node


class LinkedList:
    def __init__(self):
        self.head = None

    def insertAtHead(self, value):
        # Insert a new node at the head (start) of the list.
        node = self.head
        insert_node = Node(value)
        self.head = insert_node
        insert_node.next = node

    def insertAtTail(self, value):
        # Insert a new node at the tail (end) of the list.
        append_node = Node(value)
        if self.head is None:
            # An empty list has been supplied
            self.head = append_node
            return
        for current_node in self:
            pass
        current_node.next = append_node

    def delete(self, value):
        # Delete the first node in the list containing the given value.
        if self.head is None:
            raise Exception("List is empty")
        # Check for single entry in list
        if self.head.data == value:
            # Matched with first entry
            self.head = self.head.next
            return
        # Start scan
        match_found = False
        previous_node = self.head
        for current_node in self:
            if current_node.data == value:
                # Got it
                previous_node.next = current_node.next
                match_found = True
                break
                # return
            previous_node = current_node
        if not match_found:
            raise Exception("Element to remove not found!")

    def toArray(self):
        data_list = []
        # if self.head is None:
        #     raise Exception("List is empty")
        # for current_node in self:
        #     # This could be done more efficiently using ??
        #     data_list.append(current_node.data)

        node = self.head
        while node is not None:
            data_list.append(node.data)
            node = node.next
        return data_list

    # Make the linked list iterable - so that the toArray() `while` works correctly
    def __iter__(self):
        node = self.head
        while node is not None:
            yield node
            node = node.next

    # Used only in test_mode to make a tidy representation of the linked list object
    def __repr__(self):
        node = self.head
        nodes = []
        while node is not None:
            nodes.append(node.data)
            node = node.next
        nodes.append("None")
        return " -> ".join(nodes)
