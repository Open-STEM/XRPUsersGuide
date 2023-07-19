Using the arm
=============

Setting up the arm on the servo
-------------------------------
The servo motor used to attach the arm on the XRP has about 200
degrees of rotation and can move to a desired position using
internal sensors. When attaching the arm to the servo, it is
important that one end of its range is with the arm relatively
horizontal inside the robot chassis and the other end of the
rotation outside the back of the robot for picking up objects.
The full range of arm rotation is shown in the two images below.

To position the arm correctly, install it in any position and use
it to rotate the servo to the full clockwise direction, as seen in
the top photo. Then reinstall the arm so that it is in the shown
position. Then the software will be able to move it to any position
in between the two photos above.

Moving the arm under program control
------------------------------------
Use the servo class to move the servo motor to the desired position.
The method set_angle() sets the servo position to the desired angle.
Below is an example program that moves the servo position from one
end of its motion to the other.

When the servo is controlled from the program, it is held in the
position it was last set to. To free it, that is to allow it to be
moved by hand, the free() function may be called, and the program
will stop sending the position signal to the servo.
