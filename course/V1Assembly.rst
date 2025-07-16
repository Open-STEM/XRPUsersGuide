
.. _xrp_assembly_guide:

==============================
XRP Assembly and Software Guide
==============================

This document details the assembly process for the Experiential Robotics Platform (XRP) kit and the steps required to set up the programming environment for testing and verification, drawing on the information from the provided video transcript [1].

The kit comes in a box, and you should start by opening it and pulling out all the contents [1]. A sticker sheet and information card about First Robotics are included [1]. A diagram at the bottom shows all intended items [1]. If you have the DIY kit, you will not have the 3D printed plastics and will need to print them yourself [1]. Unpackage all contents [1]. The contents include **3D printed plastics**, the **main control board and battery holder**, **motors and wheel accessories**, **sensors**, and the **servo** [1].

**Important Notes Before Starting:**
*   Ensure you have a clean workspace [1].
*   Control boards may ship with **Kapton tape on the connectors**; this needs to be removed [1].
*   The chassis may have **support material in the back** that needs to be removed [1].
*   Four AA batteries are required but **not included** in the kit [2]. Nickel metal hydrides are recommended as they are rechargeable and sustain higher voltage under load than alkaline batteries [2].
*   A USB cable with a Type-C connector is needed for software setup but is **not included** [9].

Assembly Process
================

Follow these steps to assemble the XRP robot:

1.  Install the Battery Holder
    --------------------------
    *   Start with the chassis and the battery holder [1].
    *   Flip the chassis over [1].
    *   The battery holder goes in a specific compartment and must be oriented correctly [1].
    *   The corner where the wire comes out needs to be in the corner with the small recessed area [1].
    *   The section allowing battery swap-out should face outwards [1].
    *   Feed the **barrel connector** through the hole in the corner next to the arrow [1].
    *   Align one side with the nubs in the compartment, push it in, ensuring the cable is routed correctly, then push the other side to **snap it into place** [1, 2].
    *   Flip the chassis back over and verify the wires are flat against the battery holder and going through the little gap [2]. If not, remove the holder, rearrange wires, and push it back in [2].

2.  Install Batteries and Retention Bar
    -----------------------------------
    *   Install four AA batteries into the battery holder, taking note of the **orientation marked inside** [2].
    *   Add the **battery retention bar** to prevent batteries from falling out [2].
    *   Insert the solid end into one cutout next to the batteries [2].
    *   Pinch the other side and insert it into the recessed area [2].
    *   To remove batteries later, pinch the bar again and pull it out [2].

3.  Install the Control Board
    -------------------------
    *   Flip the robot over [2].
    *   Ensure wires are flat against the battery holder [2]. If bulged, gently push down [2].
    *   The compartment has features to hold the board: notches in the front corners, spring arms in the back, and a spring arm at the front [2].
    *   Take the control board and first insert the top corners into the front notches [2, 3].
    *   Push down on the **USB-C connector** to get it into place [3]. Ensure the spring arms in the back are in their resting position; you may need to push the board slightly forward [3].
    *   To remove the control board, pull the spring arms aside and lift the board up [3].

4.  Perform Initial Power Test (Recommended)
    --------------------------------------
    *   If batteries are installed, plug in the barrel connector to the control board [3].
    *   Slide the **power switch** (bottom right) to the on position [3].
    *   You should see **two red power LEDs** next to the USB connector illuminate [3].
    *   On a new board, the **blue LED** (top right) should blink, and the **RGB LED** (top left) should cycle through rainbow colors [3].
    *   If you see this, everything is working so far [3].
    *   You may see the low voltage LED flash briefly; this is normal [3]. If it stays on, batteries are likely low (early warning indicator) [3].
    *   Turn off power for the rest of the assembly to avoid issues [3].

5.  Install the Caster Wheels
    -------------------------
    *   Flip the chassis back over [3].
    *   The front of the robot has cages for the caster wheels that support the front while driving [3].
    *   Grab the **one-inch diameter caster wheels** [3].
    *   Put them into the front cages [3].
    *   Push straight down to **snap those into place** [3].

6.  Prepare and Install the Drive Motors and Wheels
    -----------------------------------------------
    *   It is easier to install the wheels and cables before inserting the motors into the chassis [3].
    *   You will need the **motors**, the **wheels**, the **rubber O-ring tires**, and the two **motor cables** [3, 4]. Both motors are identical [4].
    *   The wheels attach to the motors with a press fit [4]. Align the **two flat spots** on the motor shafts and wheels [4].
    *   Ensure the **flat side of the wheel** is outwards, away from the motor [4].
    *   Slip the **rubber O-ring tires** over the rims into the grooves [4]. It can be tricky; recommend seating half the tire and then rolling the other half on with thumbs [4].
    *   Motor cables have a big connector and a small connector [4]. The big connector goes into the motor; align the bumps with the cutout (only goes one direction) [4]. Push until fully inserted [4].
    *   Insert the prepared motors into the chassis compartments at the back [4].
    *   Motors must be oriented with the **cables towards the front end** and the **wheels facing outwards** [4].
    *   Insert the wheel side of the motor first, aligning the top of the motor with the little cutout [4].
    *   Push on the front side of the motor to **snap it into place** [4]. Do the same for the other motor [4].

7.  Connect the Motor Cables
    ------------------------
    *   Plug the motor cables into the control board [4].
    *   Use the cable management bars in these areas [4]. Insert cables through the big sections so slack is taken up when flipped [4].
    *   There are four motor connectors [4]. The software libraries assume the **left motor** is plugged into the port labeled **motor L**, and the **right motor** into **motor R** [4].
    *   Connectors only go in one orientation; the **red and black wires go to the pins labeled plus and minus** [4].
    *   **Be very careful to insert the connectors straight** [5]. Inserting at an angle can bend pins inside the connector, preventing full insertion, contact, or causing shorts [5].
    *   If pins are bent, you can try bending them back carefully with tweezers, being cautious not to cause further damage or fatigue [5].
    *   To remove motors, push on them through the cutouts [5].

8.  Prepare and Install the Sensors and Mounts
    ------------------------------------------
    *   It's easier to preassemble sensors and cables [5]. Set the chassis aside [5].
    *   Connect the cables to the sensors first [5]. Plug the loose ends into the headers on the sensor boards [5].
    *   Match pin labels to cable colors: **black to ground**, **red to 3.3 volt or VCC**, **blue and yellow are data pins** [5]. These are standard electronic colors [5].
    *   While data pins could technically be swapped, the software assumes a specific order: **black, yellow, blue, then red** [5]. A mnemonic is black and yellow like honeybee stripes [5].
    *   Put sensors aside and attach the mounts to the chassis [5].
    *   For the normal configuration, place both mounts at the front middle [5].
    *   Attach the **line sensor mount** first: align the nub with the notch in the bottom rail and push to snap [5].
    *   Attach the **ultrasonic sensor mount**: insert the side next to the line sensor first for centering, then push the other side to snap [5].
    *   Now attach the sensors to the mounts [5]. It's easier to start with the line sensor [5].
    *   The line sensor needs to be oriented with the wires on the front side of the robot, facing the top (remember you're upside down) [5].
    *   Insert the back edge into the groove of the line sensor mount, then push the other side to snap [6].
    *   Attach the **ultrasonic sensor**: goes in front of the line sensor wires (pull those back) [6]. Orient pointing forwards with wires towards the top [6].
    *   Insert the bottom edge into its mount, then push on the top to snap [6].

9.  Connect the Sensor Cables
    -------------------------
    *   Plug the sensor cables into the expansion connectors at the top of the control board [6].
    *   These connectors are **not completely interchangeable** [6].
    *   The two quick connectors are intended **only for I²C devices** [6]. Connecting non-I²C devices may cause problems or damage (the IMU connects to quick 1) [6].
    *   The **line sensor connector** has pins for reading analog voltage and **must** be connected there [6].
    *   The **ultrasonic distance sensor** **must** go to the connector labeled **dist** [6].
    *   Do cable management first: insert cables into the slots in the front of the chassis (line sensor on the left, ultrasonic on the right) [6].
    *   Flip the chassis over, insert through adjacent slots (in front of motor connectors) to avoid wrapping [6].
    *   Flip back over and plug each connector into its corresponding spot [6].
    *   Connectors only insert one way; **red and black wires go to 3v3 and ground** [6].
    *   **Be very careful to insert the connectors straight** to avoid bending pins [6, 7]. If pins bend, try straightening with tweezers carefully [7].

10. Install the Servo and Arm
     -----------------------
    *   This is the last assembly part [7].
    *   The **servo mount** can attach anywhere, but the normal configuration is at the back center, slightly left so the arm is centered [7]. You can mount it off-center if it interferes with USB cable access [7].
    *   The mount has a nub that inserts into the top rail; push the bottom end to **snap into place** [7].
    *   Attach the **servo**: orient the output shaft to the right and closer to the front [7]. Push it between the arms of the servo mount and push down until the arms grab it and it's fully snapped back [7].
    *   Prepare the **arm**: need the arm and the single-ended horn from the servo horns bag [7].
    *   Insert the thin end of the horn into the hidden slot on the arm, flat side down, push until it **snaps into place** [7].
    *   Attach the arm to the servo by pushing the horn onto the servo's output shaft [7].
    *   Servos have a limited range of motion [7]. Gently rotate the arm to find the mechanical end stops; **do not push too hard** to avoid breaking small plastic gears [7].
    *   Recommend rotating the arm forwards to find the front end stop [7].
    *   Reattach the arm facing fully forwards, between the control board headers [7]. This gives maximum range and allows storage where headers prevent wiggling [7].
    *   Servos typically come with screws to secure the horn [7]. Adding the screw with a screwdriver is recommended for extra security but **not required** (kit can be assembled with zero tools) [7, 8]. The arm usually stays on well without it unless snagged [8].

11. Connect the Servo Cable
    -----------------------
    *   Plug the servo cable into the control board [8].
    *   There are four servo headers [8]. The software libraries assume it's plugged into the connector labeled **servo one** [8].
    *   For cable management, insert the cable through the rear slot, pull it through when the chassis is flipped [8]. Insert it through the frontmost slot (behind the sensor cable) to avoid tangling [8].
    *   Insert into the servo one header [8].
    *   **Be aware** this connector is less foolproof than others [8]. Ensure correct orientation: **black goes to ground, red to 5 volts, and white to the IO pin** [8].

Assembly is now complete and can be done in a few minutes with zero tools [8]. However, it's recommended to do more tests to verify correctness [8].

Software Setup and Verification
===============================

After assembly, set up the software environment to test functionality [9].

1.  Initial Power Test (Post-Assembly)
    ----------------------------------
    *   Before software, repeat the power test to verify assembly didn't cause problems [8].
    *   Flip the power switch to the on position [8]. You should see the same LEDs illuminate as before (two red power LEDs, blinking blue, cycling RGB) [8].
    *   If not, there is a problem; double check your wiring [8].
    *   To diagnose, unplug all cables except batteries one at a time to see if the problem resolves [8]. If unplugging a cable fixes it, double check wiring for that cable (e.g., bent pins) [8].
    *   If the problem persists with only batteries connected, the control board might be damaged [8].
    *   If only one power LED is on, a pin in a connector might be bent from angled insertion [9].
    *   Once verified, flip the power switch back to off [9].

2.  Connect to a Computer
    ---------------------
    *   You need a computer with any operating system (even a Chromebook works via the browser) [9].
    *   You need a **USB cable with a Type-C connector** (not included) [9]. Connection is also possible over Bluetooth but USB is demonstrated [9].
    *   Plug one end of the USB cable into your computer and the other into the control board [9].
    *   The computer detects the board and LEDs illuminate even with the power switch off, as core system power is always on via USB [9]. **Motors and servos are only powered when the power switch is on** and power comes from the battery or USB [9].

3.  Access the Code Editor
    ----------------------
    *   Open a web browser (Google Chrome is recommended as some browsers may not work) [9].
    *   Go to the URL **XRPCO.wpi.edu** [9]. This is the main code editor page [9].
    *   You may see patch notes for updates [9].
    *   More resources (user guide, API reference, curriculum, support forum) are available under the Help menu (recommended after verification) [9].

4.  Connect to the XRP in the Editor
    --------------------------------
    *   Click the **"connect XRP" button** in the top right corner [9].
    *   Choose **USB** (or Bluetooth if desired) [9].
    *   Select the device to connect to from the list (usually only one option if only the XRP is connected) [10].
    *   If you encounter issues: try a different USB cable (cheap ones might lack data wires), ensure your computer recognizes the board and drivers are updated, or try a different browser (Chrome is known to work) [10].
    *   Select your board and click **connect** [10]. Messages at the bottom indicate connection [10].

5.  Update MicroPython and Libraries (If Needed)
    -------------------------------------------
    *   If your MicroPython version needs updating, a message will appear [10]. Click okay, then follow prompts to select the robot's drive location (it will reconnect as an external drive) [10].
    *   Select the drive/folder and click "select folder" [10].
    *   A browser warning about granting permission to edit files will appear; click **"edit files"** (this is needed for updates) [10].
    *   Wait for the progress bar [10]. The XRP will disconnect and auto-reconnect, or you may need to reconnect manually [10].
    *   If library files need updating, a message will appear [10]. Click okay and wait for the progress bar [10].

6.  Verify MicroPython is Working
    -----------------------------
    *   Use the bottom window (console) in the code editor to verify MicroPython [10].
    *   Type `print(1 + 2)` and press Enter [10].
    *   It should output `3` [10]. This confirms MicroPython is working [10].

7.  Run the Installation Verification Example
    ---------------------------------------
    *   While you can create new files, running the **`installation verification.py`** example is recommended to confirm everything is working correctly [10].
    *   On the left, use the file browser to expand the `XRP examples` folder [11].
    *   Double-click `installation verification.py` to open it [11]. You can read the code to see how it works [11].
    *   Click the **run button** (top right) [11].
    *   If the power switch is off, you'll be prompted to turn it on (motors and servos require power from the switch) [11]. Sensors work with power off, but this example tests everything [11].
    *   Turn the power switch on [11]. The second power LED should illuminate [11]. Click okay to run the code [11].
    *   After a few seconds, text will print at the bottom console [11]. The monochrome LED on the board will flash rapidly [11].
    *   This example runs several tests and requires you to press the **user button** (bottom right) to advance through each test [11].

8.  Perform Sensor, Servo, and Motor Tests
    --------------------------------------
    *   **Line Sensor Test:** Press the user button [11]. Measurements will print [11]. Pick up the robot and **cover each sensing element** to verify values change from 0 to 1 [11]. Verify left and right are correct [11]. If not, double check wiring and check for bent pins [11]. Press user button again to continue [11].
    *   **Ultrasonic Sensor Test:** Press the user button [11]. Measurements will print [11]. **Move your hand in front** to see measured distance in centimeters [11]. If not working, double check wiring and check for bent pins [11]. Press user button to continue [11].
    *   **Servo Test:** Press the user button [11]. The servo will move after a second [11]. **Keep your hands clear** of its motion [11]. Ensure the power switch is on [11]. If it doesn't move, double check the cable connection and power switch [11]. Press user button to continue [11].
    *   **Motor, Encoder, and IMU Test:** Press the user button [11, 12]. The robot will **drive around** [12]. This verifies the motors, encoders, and IMU [12]. It will drive forwards 25 cm, turn left 90°, turn back, and drive back [12].
    *   **Ensure you have clear space** for driving [12]. You can pick up the robot, but you will need to physically rotate it for each step as the drive functions use the IMU for orientation [12]. Watch the drive wheels to see the intended direction [12].
    *   If letting it drive, be careful of the USB cable; you may need to guide it or unplug it if batteries are installed and the power switch is on (the code will continue running) [12].
    *   Once ready, press the user button to start the driving sequence [12].

Upon successful completion of all tests, everything is working [12]. You can now get started on your first project [12]. Additional XRP content and support forums are available if you need further help [12].

Stay safe, be kind, and happy roboting! [12].
