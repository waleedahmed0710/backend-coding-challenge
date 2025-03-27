# Coding Challenge March 2025

Please note, I have not used any external packages for the following challenges.

* Challenge 1 requires the following files:
  * challenge1.py
  * node.py
  * linkedlist.py
* Challenge 2 requires the following files:
  * challenge2.py
  * stack.py
* Challenge 3 requires the following files:
  * challenge3.py
  * shape.py
  * circle.py
  * rectangle.py


### How to run these programs
Each program has a mixture of my 'play' code and the 'live' code. I've kept the play code in place so that it can be
referred back to, or used for further debugging.
Make sure that the variable test_mode is set to False before executing the programs.

As per the challenge documentation each program can be executed from the Command Prompt simply by typing: `python challengeX.py`
(Or maybe: `python3 challengeX.py` depending on the system setup).


### Design Notes
I have tried to keep the code as simple as possible whilst still achieving the end result.
To this end I have added code to raise an exception when an unstable situation arises. In the real world I would much 
rather add code which would explain to the user what is wrong and terminate the program correctly.
However, for simplicity's sake, and speed, I have not done this.

Also, I have not added many comments to the code. By reading these programs it should be fairly obvious what they are 
designed to do. But error messages are used to highlight any unfortunate situations.