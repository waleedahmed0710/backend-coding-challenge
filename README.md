# Data Structures & OOP Coding Test

This coding test assesses your proficiency in fundamental data
structures and object-oriented programming (OOP) concepts. The
challenges are intended for developers with **4+ years of experience**
and should be completed within **1-2 hours**. You may choose **Node.js**
or **Python** for your solutions.

------------------------------------------------------------------------

## Table of Contents {#overview}

1.  [Overview](#overview)
2.  [Setup & Requirements](#setup--requirements)
3.  [Challenges](#challenges)
    1.  [Challenge 1: Linked List
        Manipulation](#challenge-1-linked-list-manipulation)
    2.  [Challenge 2: Stack/Queue
        Operations](#challenge-2-stackqueue-operations)
    3.  [Challenge 3: Inheritance &
        Polymorphism](#challenge-3-inheritance--polymorphism)
    4.  [Challenge 4: Encapsulation & Data
        Processing](#challenge-4-encapsulation--data-processing)
4.  [Evaluation Criteria](#evaluation-criteria)
5.  [How to Submit](#how-to-submit)

------------------------------------------------------------------------

## Overview

You will implement solutions to 3 or 4 distinct challenges. Each
challenge focuses on either a key data structure (e.g., linked list,
stack/queue) or an essential OOP principle (inheritance, polymorphism,
encapsulation).

**Estimated Time**: 1-2 hours (depending on your familiarity with the
topics).

**Note**: You are free to use any standard libraries. Keep external
dependencies to a minimum unless otherwise specified.

------------------------------------------------------------------------

## Setup & Requirements {#setup--requirements}

-   **Programming Languages**:
    -   **Node.js** (version 12+)
    -   **Python** (version 3.7+)

-   **Environment Setup**:
    -   For Node.js:
        -   Make sure Node.js is installed (`node --version`).
        -   Use your preferred package manager (npm/yarn) if you choose
            to install external packages.
    -   For Python:
        -   Make sure Python 3.7+ is installed (`python --version`).
        -   A virtual environment is recommended but not required.

-   **Project Structure**:

    Create a folder named `coding-test`. Inside it, create separate
    files for each challenge (e.g., `challenge1.py`, `challenge2.py`,
    etc. or `challenge1.js`, `challenge2.js`, etc.). Include a
    `README.md` (this document) for reference.

-   **Running Your Solutions**:
    -   For Node.js:
        -   `node challenge1.js`
        -   `node challenge2.js`
        -   \...etc.
    -   For Python:
        -   `python challenge1.py`
        -   `python challenge2.py`
        -   \...etc.

------------------------------------------------------------------------

## Challenges

### Challenge 1: Linked List Manipulation

**Objective**: Implement a singly linked list and perform basic
operations.

1.  **Create** a `Node` class with:
    -   A `value` or `data` property.
    -   A `next` pointer or reference to the next node.
2.  **Create** a `LinkedList` class with the following methods:
    -   `insertAtHead(value)`: Insert a new node at the head (start) of
        the list.
    -   `insertAtTail(value)`: Insert a new node at the tail (end) of
        the list.
    -   `delete(value)`: Delete the first node in the list containing
        the given `value`.
    -   `toArray()`: Return an array (or list) of all values in the
        linked list from head to tail.
3.  **Sample Input/Usage**:

```{=html}
    # Python
    ll = LinkedList()
    ll.insertAtHead(10)
    ll.insertAtHead(5)
    ll.insertAtTail(15)
    ll.delete(10)
    print(ll.toArray())  # Expected Output: [5, 15]

    // Node.js
    const ll = new LinkedList();
    ll.insertAtHead(10);
    ll.insertAtHead(5);
    ll.insertAtTail(15);
    ll.delete(10);
    console.log(ll.toArray()); // Expected Output: [5, 15]
```

**Expected Output**:\
After the series of operations above, the method `toArray()` should
return `[5, 15]`.

------------------------------------------------------------------------

### Challenge 2: Stack/Queue Operations

**Objective**: Demonstrate proficiency with stacks or queues (choose
**one**). You will be required to push/enqueue and pop/dequeue items, as
well as retrieve the current size and top/front element.

1.  **Stack Implementation**:

    -   **Methods**:
        -   `push(value)`
        -   `pop()`
        -   `peek()`: returns the top element without removing it
        -   `size()`
    -   **Example**:

    ```{=html}
        # Python
        s = Stack()
        s.push(1)
        s.push(2)
        print(s.peek())  # Expected: 2
        print(s.pop())   # Expected: 2
        print(s.size())  # Expected: 1
    ```

2.  **Queue Implementation**:

    -   **Methods**:
        -   `enqueue(value)`
        -   `dequeue()`
        -   `front()`: returns the front element without removing it
        -   `size()`
    -   **Example**:

    ```{=html}
        // Node.js
        const q = new Queue();
        q.enqueue(1);
        q.enqueue(2);
        console.log(q.front()); // Expected: 1
        console.log(q.dequeue()); // Expected: 1
        console.log(q.size());    // Expected: 1
    ```

3.  **Expected Output**:\
    Must demonstrate correct operation of the chosen data structure
    (stack or queue) using sample operations.

------------------------------------------------------------------------

### Challenge 3: Inheritance & Polymorphism {#challenge-3-inheritance--polymorphism}

**Objective**: Show how you design class hierarchies and leverage
polymorphism.

1.  **Design**:
    -   Create a base class `Shape` with:
        -   A method `area()` that returns `0` or raises a \"Not
            Implemented\" exception.
        -   A method `perimeter()` that returns `0` or raises a \"Not
            Implemented\" exception.
    -   Create two derived classes `Rectangle` and `Circle` that
        **inherit** from `Shape`.
        -   **Rectangle**:
            -   `constructor` or `__init__` takes `width` and `height`.
            -   Implements `area() = width * height`.
            -   Implements `perimeter() = 2 * (width + height)`.
        -   **Circle**:
            -   `constructor` or `__init__` takes `radius`.
            -   Implements `area() = π * radius^2`.
            -   Implements `perimeter() = 2 * π * radius`.
            -   Use either the built-in `Math.PI` (JavaScript) or
                `math.pi` (Python) as needed.
2.  **Example Usage**:

```{=html}
    # Python
    r = Rectangle(4, 5)
    c = Circle(3)
    print(r.area())      # Expected: 20
    print(r.perimeter()) # Expected: 18
    print(c.area())      # Expected: 28.2743338823 (approx)
    print(c.perimeter()) # Expected: 18.8495559215 (approx)

    // Node.js
    const r = new Rectangle(4, 5);
    const c = new Circle(3);
    console.log(r.area());      // Expected: 20
    console.log(r.perimeter()); // Expected: 18
    console.log(c.area());      // Expected: ~28.2743
    console.log(c.perimeter()); // Expected: ~18.8496
```

**Expected Output**: Correct area and perimeter calculations.

------------------------------------------------------------------------

### Challenge 4: Encapsulation & Data Processing {#challenge-4-encapsulation--data-processing}

**Objective**: Demonstrate encapsulation by hiding internal details and
providing a clean API for data processing.

1.  **Design**:
    -   Create a class `DataProcessor` with:
        -   A private or internally-managed collection of **records**
            (array or list).
        -   A method `addRecord(record)` that stores a record in its
            internal collection. A `record` can be any object or
            dictionary.
        -   A method `getAllRecords()` that returns a **shallow copy**
            of the records.
        -   A method `filterRecordsBy(predicate)` that returns only the
            records matching a user-defined condition.\
            For instance, `predicate` could be a function
            `(record) => bool` in JavaScript or a lambda in Python.
2.  **Example Usage**:

```{=html}
    # Python
    processor = DataProcessor()
    processor.addRecord({"name": "Alice", "age": 30})
    processor.addRecord({"name": "Bob", "age": 25})

    all_records = processor.getAllRecords()
    print(all_records)  
    # Expected: [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]

    # Filter for records with age > 26
    filtered = processor.filterRecordsBy(lambda r: r["age"] > 26)
    print(filtered)
    # Expected: [{"name": "Alice", "age": 30}]

    // Node.js
    const processor = new DataProcessor();
    processor.addRecord({ name: "Alice", age: 30 });
    processor.addRecord({ name: "Bob", age: 25 });

    const allRecords = processor.getAllRecords();
    console.log(allRecords);
    // Expected: [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }]

    // Filter for records with age > 26
    const filtered = processor.filterRecordsBy(record => record.age > 26);
    console.log(filtered);
    // Expected: [{ name: "Alice", age: 30 }]
```

**Expected Output**:\
Must correctly store, retrieve, and filter records.

------------------------------------------------------------------------

## Evaluation Criteria

Your submissions will be evaluated on the following:

1.  **Correctness**:
    -   Does the code compile/run without errors?
    -   Does it produce the expected outputs?
2.  **Code Organization & Readability**:
    -   Proper class/method separation.
    -   Meaningful variable and function names.
    -   Comments where needed for clarity (but avoid over-commenting).
3.  **Efficiency**:
    -   Reasonable time complexity.
    -   Appropriate use of data structures (e.g., linked list, stack,
        queue, etc.).
4.  **OOP Practices**:
    -   Proper use of inheritance, polymorphism, and encapsulation in
        the relevant challenges.
    -   Avoid duplication of code where inheritance or composition can
        help.
5.  **Completeness**:
    -   All required methods and classes are implemented.
    -   Edge cases are handled gracefully (e.g., deleting from an empty
        list, popping from an empty stack, etc.).

------------------------------------------------------------------------

## How to Submit

1.  **File Structure**:

    Place your solutions in separate files within the `coding-test`
    directory. Example:

        coding-test/
          |- challenge1.py (or .js)
          |- challenge2.py (or .js)
          |- challenge3.py (or .js)
          |- challenge4.py (or .js)
          |- README.md

2.  **Instructions**:
    -   Include clear instructions on how to run your code.
    -   Provide any assumptions or explanations in comments if you feel
        it necessary.

3.  **Delivery**:
    -   Zip the `coding-test` folder or upload it to a shared repo
        (GitHub, GitLab, etc.).
    -   Send the link or file to the designated reviewer.

**Note**: Please only complete **3** challenges if you're
time-constrained (1 hour). If time permits (2 hours), complete all 4.

Good luck, and happy coding!
