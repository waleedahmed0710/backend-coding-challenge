"""
Challenge 1: Linked List Manipulation
"""

from linkedlist import LinkedList
from node import Node


test_mode = False
ll = LinkedList()

if not test_mode:
    '''
        The following code is taken directly from the challenge.
        Set `test_mode = False` to run this code.
    '''
    ll.insertAtHead(10)
    ll.insertAtHead(5)
    ll.insertAtTail(15)
    ll.delete(10)
    print(ll.toArray())  # Expected Output: [5, 15]

else:
    print("Running in Test Mode!")
    print(ll)

    first_node = Node("a")
    ll.head = first_node
    print(f"before delete {ll}")

    ll.insertAtHead("pp")
    print(ll)
    # ll.delete("abc")  # Should crash
    print(f"after delete: {ll}")

    ll.insertAtTail("qq")
    ll.insertAtTail("rr")
    ll.insertAtTail("ss")
    ll.insertAtTail("tt")
    print(ll)

    ll.delete("rr")

    print(ll)
    print("-----")
    print(ll.toArray())
