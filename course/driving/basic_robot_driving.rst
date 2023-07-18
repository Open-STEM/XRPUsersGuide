Getting the robot moving
========================

Basic driving
-------------

In the last lesson we learned how to set the effort of each of your robot's 
motors individually. Since both of the motors make up the robot's drivetrain,
there's an easier way to write code to move the robot.

.. note:: 

    For this lesson, put your XRP on a flat surface like a table or the floor.

Getting your XRP robot to move is simple! You can use this function to set the 
effort of the left and right wheels of the robot at the same time:

.. code-block:: python

    from XRPLib.defaults import *

    drivetrain.set_effort(left_effort, right_effort)

:code:`left_effort` and :code:`right_effort` are the parameters of the function.
The functions you used before only had one parameter, but functions can have as
few or as many parameters as you want, or even none at all.

.. hint:: 

    Remember that parameters are how you can tell a function how to do its job.


Here is some code you can use to drive both the left and right motors at 50% 
effort.

.. code-block:: python

    from XRPLib.defaults import *
    
    drivetrain.set_effort(0.5, 0.5)

.. admonition:: Try it out
    
    Add the code to your program to see your robot drive.

    Try using different values to make the robot move at different speeds. What 
    happens if you use different values for the left and right wheels?

    Afterward, place the robot on a ramp and run it again. Take notice of how
    the robot moves slower when on the ramp. Why does this happen?

You may notice that your XRP does not drive perfectly straight even though you 
used the same effort value for both motors. This is because the motors on the 
XRP aren't perfect. Every motor is a little bit different. Some of them have 
more friction inside them than others. In the next module we'll learn some ways 
to solve this problem so your robot goes straight every time.

.. youtube:: z6aIVpf3qN0

.. youtube:: Zcr83kcO_Pk

Mini-Challenge: Climbing Slopes
-------------------------------

If your robot drives slower up a ramp, then the natural question would be: how
steep of a slope can the robot climb?

.. admonition:: Try it out

    Have your robot drive on a ramp and then raise the ramp until the robot is
    no longer able to move forwards. Is that angle what you expected? If your
    robot started sliding back down the ramp, think about why that happened.
