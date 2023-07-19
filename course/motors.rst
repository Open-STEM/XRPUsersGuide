Motors
======
Adding motors
-------------
The XRP has two drive motors connected to the ports Motor L and
Motor R on the robot controller board. The board also supports
two additional motors labeled Motor 3 and Motor 4. These motors
can be used to create additional mechanisms for the XRP.

There are three classes associated with motors:

**motor**
    The motor class handles a single motor with a single method
    for setting the effort between -1 and 1.

**encoded_motor**
    Encoded motors are a higher level class that creates an
    advanced motor object out of a motor and an encoder.
    This class not only has effort, like motor, but adds
    position and speed control in addition. There are also methods
    for getting and setting the encoder position.

**motor_group**
    It is often desirable to treat several motors as if they
    were one. For example, in a four wheel drive robot, the
    left side motors usually get the same settings when driving
    the robot. A motor_group is created with multiple motors,
    then when effort is set, it is applied to both motors.

Motor
-----
The motor class handles setting the direction and power to a
motor. It has a single method:

set_effort(effort_value)

The effort value ranges from -1 to +1where 1 and -1 represent
100 percent effort in either direction. 

.. image:: images/Wheel.png
        :width: 300

In either case, the value
0 is no effort, and the motor is stopped.

**-1 to 0**
    The motor will spin in the counterclockwise direction when
    viewing the motor shaft as shown below.

**0 to +1**
    The motor will spin in the clockwise direction when viewing
    the motor shaft as shown below.

There are four motor controllers on the XRP, numbered 1-4. 
1 and 2 are the left and right motors, and 2 and 4 are labeled
on the robot controller board.

.. image:: images/Picture12.png
    :width: 300

.. image:: images/Picture13.png
    :width: 300

The programs shown above set Motor 3 to 80 percent effort for 5
seconds, then back to 0 percent effort (stopped).

Encoder
-------

Encoded motor
-------------

Measuring motor rotations
-------------------------

