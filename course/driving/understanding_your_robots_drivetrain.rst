Understanding your robot's drivetrain
=====================================

Introduction
------------

The main body of your XRP is called the *drivetrain*. We call it this because it
holds the two wheels which drive your robot around. Specifically, the XRP has a 
*differential drivetrain*. This is the same kind of drivetrain that you would 
see on a riding lawn mower or a skid-steer loader.

.. error::
    
    TODO: Add pictures of the XRP and a skid steer loader.

.. tip:: 
    
    Don't worry if you've never heard of a *differential drivetrain* before, we
    will learn more about what this means later in the module!

Each wheel of your XRP's drivetrain has a motor attached to it. We can use code 
to tell this motor what we'd like it to do. Before we write any code, though, we
need to learn a little bit about how these motors work.

Effort
------

There are several ways we can tell the motors what to do. The most basic thing 
we can control is the *effort* the motor should be applying.

Imagine you are riding a bike on a flat surface, pedalling at a normal speed. 
Now imagine you encounter a hill. If you keep pedalling at the same speed, you
won't slow down when you go up the hill. However, this is not easy! You'd need 
to pedal *harder* to go the same speed up the hill.

Now instead imagine that when you get to the hill, you keep pedalling as hard as 
you were on the flat section. You'll go up the hill slower, but you won't be as 
tired. This is what we mean by the *effort* of the motor. You're not telling the
motor how fast it should move, but rather how hard it should work. If you tell 
your robot's motors to work at a constant effort, your robot's speed will change
depending on whether it is driving on a flat surface or an inclined one.

.. tip:: 

    Effort is also like the throttle in a car. If you're going up a hill, you 
    need to push the throttle more to maintain the same speed on the hill. If 
    you don't push the throttle more, you'll slow down.

First movements
---------------

.. note:: 

    Put your XRP on top of a box or other object so that the wheels don't touch
    the ground or table.

Before driving the robot around, let's write some simple code to spin one of the
wheels. This will help you get familiar with the XRP programming environment and
check that your XRP itself is working properly.

.. admonition:: Try it out

    Create a new file in the IDE, called :code:`spin_wheels.py`. Add the 
    following code to it:

    .. code-block:: python

        from XRPLib.defaults import *

        left_motor.set_effort(0.5)

    Run the code and see what happens.

Let's break down the code line by line:

:code:`from XRPLib.defaults import *` tells your robot to load code from 
**XRPLib**. Don't worry too much about what all the commands in the line mean 
right now, just know that you'll put this line at the top of most of your robot
programs.

:code:`left_motor.set_effort(0.5)` calls a *function* called :code:`set_effort`
on the left motor. The :code:`0.5` is a *parameter* to this function which tells
it that we'd like the motor to apply 50% effort. On the XRP, we write
percentages as decimal numbers between 0 and 1, with 1 being 100%.

A *function* is a block of code that can be used multiple times in your program
to make complicated tasks easier. For example, the
:code:`left_motor.set_effort()` function tells the left motor to apply an effort
you as the programmer specify.

:code:`left_motor.set_effort` is a function that we provide for you in
**XRPLib**. Later in the course you will see how you can write your own
functions to make it easy to make the robot do complicated sequences of actions.

When you want to use a function, you *call* it by writing its name in your code.
This causes the function's code to start running.

The number you put between the parenthesis is a *parameter* (sometimes also
called called an *argument*) of the function. These allow you to tell the
function how it should do its job. As the programmer, you must provide a *value*
for each *parameter*. If we wanted to make the robot drive forwards at full
speed, we would *call* the function like this:

Now that we've tested the left motor, let's test the right one! How do you think
you would modify the code to spin the right motor? Simply replace
:code:`left_motor` with :code:`right_motor`.

.. admonition:: Try it out

    Modify your code and run it on the robot. Make sure the right wheel spins.
    
    Push an object like a pencil against the wheel to add some resistance.
    Notice how the wheel slows down when you do this, since it would need more
    effort to keep going the same speed.

Going backwards
---------------

We've gotten the wheels spinning forwards, but what if we want to go backwards?
To do this, we simply have to pass in a *negative* number for the effort
parameter. This means that we can use any number between -1 and 1 for the effort
value. -1 will be full effort backwards, 1 will be full effort forwards, and 0 
will stop the motor.

.. admonition:: Try it out

    Try to write code that makes both wheels spin backwards.

This table shows some different effort values and what the wheel would do:

.. list-table::
   :header-rows: 1

   * - Speed value
     - Wheel action
   * - 1
     - Wheel spins forwards at 100% effort
   * - -1
     - Wheel spins backwards at 100% effort
   * - 0.5
     - Wheel spins forwards at 50% effort
   * - -0.25
     - Wheel spins backwards at 25% effort
   * - 0
     - Wheel stops spinning
