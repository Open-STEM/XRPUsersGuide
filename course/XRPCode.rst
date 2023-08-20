XRPCode Integrated Development Environment
==========================================
XRPCode is an tool designed to allow users to develop and
test Blockly and Python programs for the XRP. It is a
web-based tool that runs in a the Google Chrome or Microsoft
Edge browser.

Running XRPCode
---------------
XRPCode is a web-based development tool that is run in either the Google Chrome or Microsoft Edge browsers.
XRPCode can be used to create either Python or Blockly language programs that run natively on the XRP
control board. Blockly programs are first translated to Python and then run. In fact you can view or
even translate the Blockly program into a Python program.

Run XRPCode by navigating to `XRPCode web site <https://xrpcode.wpi.edu>`_. 

If this is the first time you are gong to the website for XRPCode then a change log window will be displayed.
Read through the change log to learn what is new in the current release of the editor.

Exploring the XRPCode user interface
------------------------------------

There are 3 major window areas for XRPCode. <img>

On the left is the Filesystem window. This will show the files on your XRP whenever an XRP is connected. 

In the middle is the space for editors, this is where you will be working on your programs.

At the bottom is the Shell window. This is where print statement output will be displayed. You can also type in Python code into this window in an interactive way to quickly test out some ideas.

Connecting your XRP to XRPCode
------------------------------
The XRP robot has a micro USB connector on the controller board that is connected to your computers
USB port with a cable.

.. warning:: 
    Many USB cables are for power only and do not transmit data. You will need a USB cable that can transfer data and power. 

Connecting to the XRP
---------------------------
To establish the connection between the XRP robot and the computer, press the CONNECT button. Often the
connection will happen automatically when the XRP is plugged in and XRPCode is started.

<connect button image>

This will bring up a dialog that lets you select the computers serial port XRPCode will connect to. In most cases there will be just one serial device, but if there are more, select the one that is for your XRP
robot. Click on the CONNECT button after selecting the desired serial port.

<img>

When the connection is made, the CONNECT XRP button will change to a green RUN button and the Filesystem
window will show the files on the connected XRP.


If XRPCode does not show your serial connection, or there are other connection issues please refer to
the troubleshooting section at the bottom of this section.

Now that you are connected


Using XRPCode
-------------
Now that the robot is connected let’s write a short program to learn about the editors.

In the editor area there should be a window asking what type of editor to use, either BLOCKLY or MICROYPTHON. (If this is not showing, click on ‘New File’ under the ‘File’ Menu) Select BLOCKLY.

On the left of the Blockly area this is a palette
of all the available blocks. Notice that they are gruped by function.
Click on ‘Control Board’ and then click on the ‘LED on’ block. This will place this block onto your working canvas. You can move the block around and center it if you would like. Now click again on the left, this time on “Text’. Then select the first block that says “print abc” This block is now also on your canvas. You can now move around this block and place it right under the “LED on” block. You will notice that as you get close to the bottom of the “LED on” block that it will show a yellow line indicating that the two fit together. Now when you let go of the “print abc” block it should click together with the “LED on” block. Feel free to change the “abc” to say what you want to print that is useful to the program. Something like “The LED is now on” 

Save this new program to the XRP. Under the ‘File’ menu select ‘Save to XRP’ A dialog will be displayed for you to give this program a name. Change the *untitled* to a name for your program like ‘first program’ and click OK. The program has now been saved to the XRP. You will see the name of your program in the Filesystem window on the left. 

You can now press on the green “RUN” button, to run this program. If the power switch on your XRP is not turned on, then a warning will pop up telling you to turn on the power. Turn on the power switch and then click ‘OK’

You will notice a few things. One the XRP the green LED next to where the USB cable connects to the XRP will go on for a little while and then turn back off. The other is that in the Shell window at the bottom of XRPCode will print out your message from the print statement. You may have also noticed that the green ‘RUN’ button turned to a red ‘STOP’ button while your program was running and then turned back to a ‘RUN’ button. If you end up writing a program that never stops, then the button will stay as the red ‘STOP’ button. Clicking on the ‘STOP’ button will stop the program and bring you back to the ‘RUN’ button and allow you to continue to modify your program.

The reason that the LED goes back off, is that at the end of each program we run some code that prepares your robot for the next time you run a program. This is nice so each time you start a program your XRP will start in the same state each time.

The ‘View’ menu is sensitive to the editor you are using. Right now you are in Blockly, meaning it will give you View options for the a Blockly program. Click on ‘View’ and then on ‘View Python’ this will bring up a view of the Python code that is being generated from your Blockly file. Let’s actually convert this Blockly program program in to a python program. Click on ‘View’ and then on “Convert to Python” 

It will first give you a warning to make sure you wanted to convert the program and information about what it is going to do. Click “OK”. It will do the operation and you should notice two things have happened. 1 - There is a new ‘trash’ directory on your XRP. And 2 that your program name now ends in .py instead of .blocks. 

If you now go to the ‘View’ menu you will notice that the menu items have changed to be specific to the python editor. Fine the print statement in the program, it should be the last line. Change the message that is between the quotes. If you look at the file name tab at the top of the python editor window you will notice a white dot at the end of the name. That means that this file has been modified and has not yet been saved. Now if you click on the ‘RUN’ button it will save your program and run it again. The message in the Shell window should be your new message. 

You can close an editor by clicking on the X next to the file name at the top of the python editor. If you click on the X it will close the window. If you want to open the program again you can double click on the file name in the Filesystem window.

Congratulations you have now learned how to create and run programs in the XRPCode. 

Troubleshooting XRPCode connection issues
-----------------------------------------
**Cannot see the serial port when connecting**

    * Be sure that the USB cable is a data cable and not just a power cable.

    * Unplug the XRP from the computer and check the connection of the cable on the XRP side.

    * Make sure the power button on the XRP is in the off position. It will get power from the USB cable.

**XRP was previously used for some other purpose (maybe for *FIRST* FRC programming)**

    In this case, XRPCode will try to load MicroPython and current firmware on to it, just follow the instructions.

