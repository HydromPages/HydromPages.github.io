# Check calibration status



:::tip
To check the Calibrationstatus you must have access to the user interface. If this is not the case, see here how to do it:[access-to-the-user-interface.md](../getting-started/access-to-the-user-interface.md "mention")
:::

The easiest way to check the calibration status is to place the Hydrom in 25 degree water and access the main screen.

The main screen is accessed by typing http://hydrom001/ into the browser.
The "hydrom001" should be replaced with the device name that was set.
"hydrom001 is the default name.

If the hydrom now shows a value close to 0P at 25 degrees water temperature, then the hydrom is calibrated.

If the value is greater than 15, it is likely that Gravity has been set as the unit.
This can be changed by selecting "Plato" under Tilt-Unit in Settings.

If the hydrom is not calibrated, there are three possibilities.
1. plain water calibration
The Hydrom measures the actual angle in the water and calculates an approximation to the actual calibration formula from the known relationships.
2. reference calibration
The hydrom is placed in a reference liquid and when the density changes, this is measured with a reference meter and entered into the hydrom.
This step must then be repeated 7 times to determine the formula.
Yeast or sugar can be used to change the density.
