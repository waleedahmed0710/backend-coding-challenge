Data Structures & OOP Coding Test
Welcome to the Data Structures and OOP coding test! This assessment is designed to evaluate your proficiency in fundamental data structures and key object-oriented programming (OOP) principles. You will be presented with four coding challenges, each focusing on a specific aspect of data structures or OOP. You may choose to complete the challenges in Node.js or Python.

Table of Contents
General Instructions

Environment Setup

Challenges

Challenge 1: Array Rotation

Challenge 2: Singly Linked List

Challenge 3: Stack / Queue Operations

Challenge 4: OOP – Class Inheritance & Polymorphism

Submission Guidelines

Evaluation Criteria

General Instructions
You have 1-2 hours to complete this test (adjust based on your requirement).

You can use Node.js (>= 14) or Python (>= 3.7).

You can create separate files for each challenge or group them in a single file/folder structure if you prefer.

Focus on clean, readable, and efficient solutions.

Include comments or docstrings to explain your logic.

Use only standard libraries unless a challenge explicitly states otherwise.

Environment Setup
Node.js
Make sure you have Node.js (version 14 or higher) installed.

Create a new folder for this test and navigate to it in your terminal.

(Optional) Initialize a new project:

bash
Copy
Edit
npm init -y
If you want to use any testing framework (e.g., Jest), install it:

bash
Copy
Edit
npm install --save-dev jest
Run your code with:

bash
Copy
Edit
node filename.js
Or, if using Jest tests:

bash
Copy
Edit
npm run test
Python
Make sure you have Python (version 3.7 or higher) installed.

Create a new folder for this test and navigate to it in your terminal.

(Optional) Create a virtual environment and activate it:

bash
Copy
Edit
python -m venv venv
source venv/bin/activate  # On macOS/Linux
venv\Scripts\activate.bat # On Windows
If you want to use unittest or pytest, install pytest (optional):

bash
Copy
Edit
pip install pytest
Run your code with:

bash
Copy
Edit
python filename.py
Or, if using pytest:

bash
Copy
Edit
pytest
Challenges
Challenge 1: Array Rotation
Goal: Given an array (or list) of integers and a number k, rotate the array to the right by k steps.

Function Signature

Node.js: function rotateArray(arr, k) { ... }

Python: def rotate_array(arr, k): ...

Description

A rotation by 1 step means that the last element of the array becomes the first, and all other elements shift right by one position.

You need to handle cases where k is larger than the array length.

You can modify the array in place or create a new one (your choice).

Sample Input/Output

Input:

arr = [1, 2, 3, 4, 5], k = 2

Expected Output:

Rotated array: [4, 5, 1, 2, 3]

Notes

Consider edge cases: empty array, k = 0, k much larger than array length.

Aim for time efficiency (O(n) solution suggested, but not required).

Challenge 2: Singly Linked List
Goal: Implement a Singly Linked List class with the following methods:

append(value): Append a node to the end of the list.

prepend(value): Insert a node at the beginning of the list.

delete(value): Delete the first node that has the specified value.

(Optional) find(value): Return the first node that has the specified value (or null / None if not found).

Class/Function Signatures

Node.js:

js
Copy
Edit
class LinkedList {
  constructor() { ... }
  append(value) { ... }
  prepend(value) { ... }
  delete(value) { ... }
  find(value) { ... }
}
Python:

python
Copy
Edit
class Node:
    def __init__(self, value):
        ...

class LinkedList:
    def __init__(self):
        ...
    def append(self, value):
        ...
    def prepend(self, value):
        ...
    def delete(self, value):
        ...
    def find(self, value):
        ...
Description

Each node should hold a value and a pointer/reference to the next node.

Ensure you handle edge cases (e.g., deleting from an empty list, prepending to an empty list).

Keep track of the head of the list (you can also track the tail if you’d like, for efficiency).

Sample Usage

plaintext
Copy
Edit
// After these operations:
//   linkedList.append(10)
//   linkedList.append(20)
//   linkedList.prepend(5)
//   linkedList.delete(10)

// The list should look like: [5 -> 20]
// find(20) should return a node/object whose value is 20
Sample Verification

Input:

append(10), append(20), prepend(5), delete(10)

Expected LinkedList: 5 -> 20

Challenge 3: Stack / Queue Operations
Goal: Implement a function or class to demonstrate Stack and Queue behaviors. You only need to choose one structure to implement. (If time permits, you can do both.)

Option A: Stack
Methods: push(value), pop(), peek(), isEmpty()

Behavior: LIFO (Last In, First Out)

Option B: Queue
Methods: enqueue(value), dequeue(), peek(), isEmpty()

Behavior: FIFO (First In, First Out)

Class/Function Signatures

Node.js (Stack example):

js
Copy
Edit
class Stack {
  constructor() { ... }
  push(value) { ... }
  pop() { ... }
  peek() { ... }
  isEmpty() { ... }
}
Python (Queue example):

python
Copy
Edit
class Queue:
    def __init__(self):
        ...
    def enqueue(self, value):
        ...
    def dequeue(self):
        ...
    def peek(self):
        ...
    def is_empty(self):
        ...
Sample Input/Output (Stack)

Input: push(1), push(2), push(3), pop() -> returns 3

Final Stack State: Top is 2 -> 1

Sample Input/Output (Queue)

Input: enqueue(1), enqueue(2), enqueue(3), dequeue() -> returns 1

Final Queue State: Front is 2 -> 3

Challenge 4: OOP – Class Inheritance & Polymorphism
Goal: Design a simple class hierarchy that demonstrates inheritance and polymorphism.

Scenario
You are building a small library to represent different types of employees in a company. Every employee has:

A name (string)

A method to calculate pay (returns a number)

There are two types of employees:

FullTimeEmployee: Calculated pay is baseSalary (e.g., $3000) plus any bonuses.

ContractEmployee: Calculated pay is an hourly rate times the number of hours worked.

Requirements

Create a base class Employee:

Attributes: name

Method: calculatePay() (to be overridden in subclasses)

Create two subclasses:

FullTimeEmployee: Has baseSalary and bonus

ContractEmployee: Has hourlyRate and hoursWorked

Demonstrate polymorphism by calling calculatePay() on different employee objects.

Class/Function Signatures

Node.js (example):

js
Copy
Edit
class Employee {
  constructor(name) {
    this.name = name;
  }

  calculatePay() {
    // To be overridden
    return 0;
  }
}

class FullTimeEmployee extends Employee {
  constructor(name, baseSalary, bonus) {
    super(name);
    this.baseSalary = baseSalary;
    this.bonus = bonus;
  }

  calculatePay() {
    // baseSalary + bonus
  }
}

class ContractEmployee extends Employee {
  constructor(name, hourlyRate, hoursWorked) {
    super(name);
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }

  calculatePay() {
    // hourlyRate * hoursWorked
  }
}
Python (example):

python
Copy
Edit
class Employee:
    def __init__(self, name):
        self.name = name

    def calculate_pay(self):
        # To be overridden
        return 0

class FullTimeEmployee(Employee):
    def __init__(self, name, base_salary, bonus):
        super().__init__(name)
        self.base_salary = base_salary
        self.bonus = bonus

    def calculate_pay(self):
        # base_salary + bonus
        return ...

class ContractEmployee(Employee):
    def __init__(self, name, hourly_rate, hours_worked):
        super().__init__(name)
        self.hourly_rate = hourly_rate
        self.hours_worked = hours_worked

    def calculate_pay(self):
        # hourly_rate * hours_worked
        return ...
Sample Usage

plaintext
Copy
Edit
let alice = new FullTimeEmployee("Alice", 3000, 500);
let bob = new ContractEmployee("Bob", 40, 120); // 40$/hr, 120 hours

console.log(alice.calculatePay()); // Should output 3500
console.log(bob.calculatePay());   // Should output 4800
Submission Guidelines
Folder Structure:
You can create a single folder (e.g., solutions/) containing:

challenge1.js or challenge1.py

challenge2.js or challenge2.py

challenge3.js or challenge3.py

challenge4.js or challenge4.py

Or any other organization you prefer (e.g., one file per solution, or all solutions in one file).

Instructions:

Include a brief README in your folder with instructions on how to run your solutions and any tests.

If you used tests, include instructions for running them.

Delivery:

Provide a GitHub repository link or a zip file of your solutions.

Evaluation Criteria
Your solutions will be evaluated based on:

Correctness

Does the code fulfill the requirements and produce the expected outputs?

Code Organization & Readability

Is the code clean, modular, and well-structured?

Are there meaningful variable/method/class names?

Efficiency

Are you using appropriate data structures and algorithms for the task?

Is your approach optimal or at least reasonable given the time constraints?

Use of OOP Principles (for relevant challenges)

Did you demonstrate inheritance, polymorphism, and appropriate encapsulation where required?

Edge Cases & Error Handling

Did you consider empty inputs, boundary cases, and invalid operations?

Time Limit and Recommendations
A typical guideline is 1-2 hours total for all challenges, but feel free to allocate the time based on your requirement.

If you are pressed for time, you can simplify some implementations (e.g., only partial methods for the linked list) or complete fewer challenges. Make sure to note any incomplete portions in comments.
