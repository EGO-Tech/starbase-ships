# Usage

To enter the ship, there is a button on top of the ship that will open `Hatch`. Once inside you can also open and close the cockpit glass `Canopy`. Buttons for these are available in the pilot left side console.

## Flying the Ship

![Pilot Console](https://github.com/EGO-Tech/starbase-ships/raw/main/fisher/images/pilot_center_console.jpg)

<nord-table>

| Interface | Function |
| --- | --- |
| `ForwardThrust` | Current forward thrust, maximum of 10,000 units |
| `Speed` | Current speed in metres per second. |
| `Range` & `Distance` | Activates center rangefinder, with `Distance` showing distance to object. |
| `Cruise` | Activates cruise control, forward thrust will not reset to zero unless turned down. |
| `Aim` | Reduces the response time of key presses for pitch and yaw. |
| `Turtle` | Activates turtle mode which sets forward thrust to a maximum limit of `TurtleRate` of full thrust. |
| `Sloth` | (Right Console) Activates the low sensitvity mode of pitch and yaw by limiting thrust. Use the `Sensitivity` switch to set the maximum thrust rate of sloth mode. |
| Transponder `Toggle` & `Ping` | [Transponder](https://starbase.egotech.space/pages/systems/utility/#transponder) controls, `Toggle` turns on and off ship transponder while `Ping` will activate transponder for three seconds |
| `Nav`, `Autopilot`, `Avoidance` & `Target` | Autopilot controls. See [Autopilot and Crash Avoidance](#auto-pilot-and-crash-avoidance). |
| `ISAN2` | Current ISAN coordinates of ship. |
| `NavGrid`, `NavP`, `NavC` & `Attitude` | [NavGrid](https://github.com/pcbennion/starbase-navgrid) system, see [Using the Waypoint System](#using-the-waypoint-system). |
| `Tow Status`, `Tow Mass`, `Tow` & `Auto Gen` | Towing controls, see [Towing ships](#towing-ships). |
| `Timer` | See [Timer](https://starbase.egotech.space/pages/systems/utility/#timer). |
| `Odometer` | See [Odometer](https://starbase.egotech.space/pages/systems/utility/#odometer). |
| `SafeZone` | Whether current location is in the safe zone. |
| `StrengthFactor` | Current strength of ship. May fluctuate as ore crates are filled. Anything below 1.0 means ship is damaged. |
| `Canopy` | Open and closes the cockpit glass canopy. |
| `Hatch` | Open and closes the hatch on top of the ship. |
| `Chair` | Spins the pilot chair between forward facing and backwards facing. |

</nord-table>

See [Flight Systems](https://starbase.egotech.space/pages/systems/flight/) on how to fly the ship and use its flight systems.

## Using the Waypoint System

![Pilot Left Console](https://github.com/EGO-Tech/starbase-ships/raw/main/fisher/images/pilot_left_console.jpg)

### Viewing and Selecting Waypoints

This uses the [NavGrid](https://github.com/pcbennion/starbase-navgrid) system. Use the `Down` and `Up` waypoints selectors to select waypoint. The selected waypoint information is shown on `NavP` and `NavC` panels.

On the pilot center console, `NavGrid` will show the compass towards the selected waypoint while `Attitude` will show the ship's pitch, heading and roll directions. `NavGrid` is best used while not moving.

### Editing and Saving Waypoints

Use `Set` to save waypoint of current location to the current selected waypoint position.

To edit currently selected waypoint, use your `U` tool to add name, X, Y and Z values to `nName`, `nX`, `nY` and `nZ` respectively. Then use the `Save` button to save.

<nord-banner variant="warning">

**NOTE:** Waypoint 1 to 6 are presets and can not be over written.

</nord-banner>

### Loading Waypoint to Auto Pilot

Use `Load to Auto Pilot` to load curretnly selected waypoint to `Target` to be used with the auto pilot system.

## Auto Pilot and Crash Avoidance

The ship uses a modified version of [NavCas](https://github.com/fixerid/sb-projects/tree/main/NavCas) which uses the 3 in 1 ISAN from Compass. Waypoints are loaded from NavGrid waypoint system.

Use while the ship is stationary. Activating `Nav` will start point the ship towards `Target` waypoint and deactivate itself when done. `Autopilot` will activate `Nav` and fly to within 5km of `Target` waypoint with `Avoidance` activated.

<nord-banner variant="warning">

**NOTE:** `Nav` may not be very accurate. I recommend using it in conjunction with the NavGrid compass. The `dd` panel on the pilot left console shows debugging information for NavCas.

</nord-banner>

`Avoidance` will activate `Guides`. If the guides detect objects it will cut thrust and strafe up or down (will flash either the top or bottom `Blue` warning lights on the pilot center console according to the direction) while sounding an alarm (check game settings if you do not hear the alarm).
It will also flash `Red` warning lights on the pilot center console according to the position of obstacle detected. If `Autopilot` is activated, it will readjust and continue its flight.

`Avoids` will show the counters for number of avoidances. The `Trip` counter can be reset by holding down the `Avoids` `Reset Trips` button.

<nord-banner variant="warning">

**NOTE:** There is very limited coverage of range finders for the crash avoidance system. **Use at your own risk!**

</nord-banner>

## Resetting Navigation

If ISAN or NavGrid is not working, it can be reset using the `Reset ISAN` button. Press once to take ISAN offline, then press again to reset.

### Managing Power and Fuel

![Pilot Right Console](https://github.com/EGO-Tech/starbase-ships/raw/main/fisher/images/pilot_right_console.jpg)

<nord-table>

| Interface | Function |
| --- | --- |
| `Battery` | Shows current battery charge of the batteries, maximum of 10,000 units. |
| `Generator` | Current generator rate, maximum of 100%. |
| `Min Generator Limit` & `Min Gen` | Toggle and sets minimum generator rate. |
| `Fuel Rod 1` to `Fuel Rod 20` | Fuel remaining on fuel rods in individual fuel chambers, maximum of 300,000 units for each. |
| `Shutdown` | Turns off fuel chambers. |
| `HeatTransferRate` | Current heat transfer rate of the heat sinks, maximum of 100%. |
| `Propellant` | Total propellant remaining in propellant tanks, maximum of 144,000,000 units. |
| `PropTime` | Time and distance remaining of propellant based on current usage. Distance is calculated from speed. |
| `FuelTime` | Time and distance remaining of fuel based on current usage. Distance is calculated from speed. |
| `WithBackup` | Same as FuelTime but takes into account backup rods available. Use the switch for `Backup Rods` to set the number of backup rods available. As standard there are 12 extra rods. |

</nord-table>

See [Power and Fuel Systems](https://starbase.egotech.space/pages/systems/power/) on how to manage ship power and refuel.

`Shutdown` will turn off the fuel chambers.

### Refilling Propellant

See [Propellant Systems](https://starbase.egotech.space/pages/systems/propellant/) on how to refill propellant.

### Towing Ships

![Pilot Back Console](https://github.com/EGO-Tech/starbase-ships/raw/main/fisher/images/pilot_back_console.jpg)

<nord-table>

| Interface | Function |
| --- | --- |
| `Tow Status` | Status of tow beam, `0` is off, `1` is on and `2` is locked on. |
| `Tow Mass` | Mass of locked on ship, in kilograms. |
| `Tow` | Activates the tow beam. |
| `Tow Lights` | Activates the red flashing lights at the bottom of the ship. |
| `Auto Gen` | Activates `Min Gen` with `Min Generator Rate` according to `Tow Mass`. |
| `BackRange` & `Back Distance` | Activates the back facing rangefinders and displays the distance. |

</nord-table>

The tow beam faces out the back of the ship so position the Fisher in front of, with the back facing the ship you wish to tow. Spin the `Chair` around to look out the back window and activate `Tow` to turn on the tow beam. Once the tow beam is locked on the ship, the `Tow Status` will be `2` and the mass of the locked ship will be shown as `Tow Mass` in kilograms.
Activate `Auto Gen` which will then turn on `Min Gen` with a `Min Generator Rate` based off the `Tow Mass`. Wait till the generators reach the targeted rate before flying off.

The Fisher has enough power generation to tow a ship of a mass of up to 20ktons or 20,000,000 kilograms. For large ships, it is recommended to turn on `Min Gen` to ramp up the generator before locking on and then activating `Auto Gen` once locked on to adjust the `Min Generator Rate` accordingly.

<nord-banner variant="info">

**TIP:** Remember to turn off `Min Gen` after towing to save on fuel.

</nord-banner>
