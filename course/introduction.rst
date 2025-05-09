.. image:: images/XRP.jpg
    :width: 300

Introduction
============

The XRP (Experiential Robotics Platform) [beta], started by WPI and DEKA Research & Development Corp., 
aims to level the STEM playing field globally and create a future generation of STEM innovators 
and technology leaders.

The robot kits you received are designed to operate autonomously and perform 
basic tasks. Its simple, tool-free assembly means robots can be built quickly, 
and replacement parts can be easily 3-D printed. As part of this platform, 
WPI will provide virtual support through online courses and will guide students 
and teachers through the new system, including the ability to scale up using 
the same hardware with free software updates. 

The XRP platform is part of WPI's global STEM education initiative, 
which will bring inspiration and possibility to STEM education in 
ways that make it available to all. 

XRP versions
------------
There are two versions of the XRP in the field or available for purchase:

#. The Beta version of XRP released July 2023
#. Version 1 of XRP released March 14, 2025

.. admonition:: Note abouut XRP versions

    Throughout this document you will see cases where there are differences between the two versions
    and in those cases, information about both versions will be documented. In the next few weeks all
    the documentation will be updated to more fully reflect the differences between the robot kits.


Two robots in one
=================
The XRP can be used for two different applications:

* A **STEM learning platform using Python or Blockly** with custom tools designed 
  to learn and experiment with robotics. Included is a curriculum to help learn
  about robotics and programming. This use of the XRP is described in this document.
* A robot to introduce new **FRC teams and team members to WPILib programming** with
  the same tools, languages, and libraries used in developing competition robots.
  To learn about using the XRP for the *FIRST* Robotics Competition, you should refer
  to the `standard WPILib documentation <https://docs.wpilib.org/en/latest/docs/xrp-robot/index.html>`_.

Software Tools
==============

There are several software tools available to the programmer for the XRP. Some are available, 
especially for the XRP and other general-purpose tools that may also work with the XRP.

Programming Languages
---------------------

The XRP team supports two programming languages for the XRP:

**Blockly**
    A graphical programming system based on Scratch to make
    it easier to start codingyour robot without the need to
    the syntax of Python. Internally, a Blockly program is
    translated to Python and saved on the robot. Users can
    even see the generated Python code to help them learn to
    use the language themselves.


**Python**
    An object-oriented text-based programming language used throughout
    industry and taught in many classrooms.

Other languages include C and C++. There may be other languages that can also work 
with the RP2040 microprocessor in the XRP.

XRPCode
-------


The recommended programming tool for the XRP is `XRPCode <https://xrpcode.wpi.edu>`_. It is a web-based single tool
designed specifically for the XRP to support programming in either Python or Blockly.
It also can check and update firmware and library versions on the robot as new 
software releases become available. XRPCode is a web-based programming system that 
operates inside the Google Chrome or Microsoft Edge browsers, so users will always be running the most 
recent version of the tool. 

.. image:: images/Picture1.png
    :width: 300

.. image:: images/XRPCodeImage.png
    :width: 300

XRPLib
------
`XRPLib <https://open-stem.github.io/XRP_MicroPython/index.html>`_ is a Python-based programming library that provides classes and functions to make
it easy to use all the features of the XRP Robot. XRPLib is completely open source, 
so users can download the software to see how it works. We also encourage community 
involvement through pull requests to the library. However, we recommend contacting us 
before spending too much time to ensure that your ideas are compatible with our plans 
and development for XRPLib. 

Here are some primary features of the XRP:

•	The default drive function to control speed, direction, and power applied to the two motors. It can handle driving and turning, with and without sensors such as the IMU, for making accurate point turns.

•	The sensors on the robot, such as the motor encoders, rangefinder, reflectance sensor, and IMU (Inertial Measurement Unit), which can get the robot heading and accelerations as it is driving.

•	The WiFi connection so that programs can create a web server on the robot that can be used to display a dashboard on a connected phone, tablet, or computer. It is designed for displaying program status, driving controls for teleoperation, and buttons to run user functions when pressed for more control of user robot programs.

•	Utility functions for sensing the user buttons, operating the LED, and robot program timing

•	Several small sample programs to help illustrate how the various components are used to operate.

.. image:: images/Picture3.png
    :width: 300

Other tools and languages
-------------------------

In addition to the supplied languages for the robot, users can program the robot using 
other standard tools such as C, C++ and WPILib using various IDEs like the Arduino IDE and Visual Studio Code. 
VS Code has several plugins specially designed to support Python programming and the 
Raspberry Pi Pico, which is the hardware that powers the XRP.

Where to find the tools
-----------------------

XRPCode IDE: 
https://xrpcode.wpi.edu/

XRP API Documentation:
https://open-stem.github.io/XRP_MicroPython/index.html

XRP Curriculum:
https://introtoroboticsv2.readthedocs.io/en/latest/


Getting help
------------
We have set up a `Discourse server <https://xrp.discourse.group>`_
where you can get help from our team as well as members
of the community using XRP robots.  



