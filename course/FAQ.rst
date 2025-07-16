Frequently Asked Questions
==========================

Bluetooth connections
---------------------

Robot often disconnects from XRPCode
++++++++++++++++++++++++++++++++++++
The most frequent cause of Bluetooth disconnects is low batteries. This can cause 
the Bluetooth connection to be unreliable or completely unavailable. Make sure that your 
batteries are fully charged, ideally having 2 sets of rechargable batteries so that
one can always be recharging.

Windows development computers
+++++++++++++++++++++++++++++
The Windows operating system, in particular, often has a 10 to 15 second reconnection 
time. This happens while waiting for an initial connection, or reconnecting after pressing the STOP button.  
This delay can often be avoided by letting the program exit, that is run to 
the end of the file. If, instead, a running program is interripted using the Stop button in XRPCode, 
then the connection has to be reestablished and it might take up to 15 seconds.

Infinite loops
++++++++++++++
A common way to write user control (or teleoperated) programs is to have an infinite loop where 
the game controller buttons and joystick values are read and the motors are set accordingly. The 
problem with this style of program is that the only way to stop this program is with the Stop button 
or resetting the robot, and in either case, restarting will have the long delay.
You can eliminate that long delay by making sure that you program exits when it's finished.

This can easily be done by changing the unconditional loop to one that can be stopped so that the 
program exits and the connection is maintained. This can be done by using a button to trigger 
program termination. A convenient button to use is the User button on the XRP control board, 
although one coule also use a gamepad button as a trigger to stop the program. 

Below are examples of having an infinite loop, and a loop that terminates with the User button.

.. tabs::

    .. tab:: Python

        The following program uses a differential_drive (differential_drive) object 
        and a Gamepad object (gp) and shows how an infinite loop might be used for a 
        teleoperated driving program. Notice that the program doesn't ever exit from 
        the loop and so the only way to end the program is to use the stop button or 
        reset the robot::

            while True:
                differential_drive.set_effort(gp.get_value(Y1), gp.get_value(Y2))
        
        The next program uses a loop that can be ended by using the user button on the
        XRP control board. Upon pressing the button the loop ends, and the the 
        program stops without requiring a lengthly reset::

            while True:
                differential_drive.set_effort(gp.get_value(Y1), gp.get_value(Y2))

    .. tab:: Blockly 

        .. image:: FAQImages/InfiniteLoopExample.png
            :width: 500


XRP not appearing in the Bluetooth pairing window
+++++++++++++++++++++++++++++++++++++++++++++++++
If the name is not showing up in the Bluetooth pairing dialog 
box, then the XRP may need to be reset. You can press the reset on the XRP, or turn the switch off 
and back on. 
When using the switch, make sure the XRP is not connected via a USB cable, as that 
cable provides power and the XRP will not turn off fully by the switch. 
If this does not start the XRP showing its pairing address, then see the Wrong Firmware section.

Refresh page
++++++++++++
There are times when the browser gets confused about the bluetooth connection. XRPCode will 
now pop up a dialog to letting you know to refresh the page when it sees these conditions. 
But, if you get to the point of the XRP spinner is going for more than 20 seconds then 
refreshing the page and resetting the XRP is a good course of action.

Can’t connect 
+++++++++++++
If the XRP bluetooth address is showing up, but it never finishes pairing after hitting the 
Pair button, then try refreshing the web page and resetting the XRP.

Multiple XPRCode pages open
+++++++++++++++++++++++++++
XRPCode is designed to only have one window open at a time. If you have more than one XRPCode 
open, close all them and then re-open one and try again.

Wrong firmware or libraries
+++++++++++++++++++++++++++
For bluetooth to work it must have both the correct version of MicroPython and the correct 
version of the XRPLib libraries. Always let XRPCode update your MicroPython and XRPLib 
to the latest.

XRPCode won’t connect even with a cable
+++++++++++++++++++++++++++++++++++++++
Assuming you have checked that you are using a USB data cable and not just a USB power cable. 
Then check to see if a disk drive shows up when you connect the XRP to the computer with the 
USB cable. The drive name may be something like:
PICODISK
RPI-RP2
RP2350
If you see one of those drives when plugging in the XRP you need to manually put MicroPython 
back onto your XRP. Follow this link on how to do that:
XRP Beta Board
XRP Board
