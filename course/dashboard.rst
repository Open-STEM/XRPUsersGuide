Creating a dashboard
====================
XRPLib will create a web server with WiFi connectivity when the
Webserver class method:

webserver.start_server(id)

is called. This will:
1. Bring up the WiFi interface on the robot using a robot number
   parameter to create a unique SSID. When a device (computer, phone,
   or tablet) connects to that SSID from the network settings, it
   will then be on the robot's local network and no longer on the
   internet.
2. Start listening on port 80 (HTTP) for a connection from a
   browser
3. Dynamically create a web page based on user programming that can 
   have driving controls, buttons corresponding to user functions,
   and display of program data for debugging or robot monitoring.

The user can then connect to the robot web server using a phone,
tablet, or computer to see the web page the robot program generates.
The user should enter the URL: ROBOT_URL.

Using the web server
--------------------
The web server will start using this function:

webserver.start_server(1)

To start a webserver with an SSID of  ROBOT_SSID

Display running program data
----------------------------
# Logging static data to the webserver
# webserver.log_data("test", "test")
# webserver.log_data("List", [1,2,3])
# webserver.log_data("Dict", {"a":1,"b":2,"c":3})
# webserver.log_data("Tuple", (1,2,3))

Teleop driving from the dashboard
---------------------------------
# Binding functions to the arrow buttons
webserver.registerForwardButton(lambda: drivetrain.set_effort(0.5, 0.5))
webserver.registerLeftButton(lambda: drivetrain.set_effort(-0.5, 0.5))
webserver.registerRightButton(lambda: drivetrain.set_effort(0.5, -0.5))
webserver.registerBackwardButton(lambda: drivetrain.set_effort(-0.5, -0.5))
webserver.registerStopButton(lambda: drivetrain.set_effort(0, 0))


Calling functions from the dashboard
------------------------------------
# Binding functions to custom buttons
webserver.add_button("test", lambda: print("test"))
webserver.add_button("blink", lambda: print(led.blink(2)))
webserver.add_button("LED_Off", lambda: led.off())