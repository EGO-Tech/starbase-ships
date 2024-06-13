# Usage

To enter the ship, there are buttons on top of the ship that will open `Hatch`.

## Flying the Ship

![Pilot Center Console](https://github.com/EGO-Tech/starbase-ships/raw/main/mapper/images/pilot_center_console.jpg)

The left lever on the center console controls backwards thrust (braking) and the right lever controls forward thrust.

<nord-table>

| Interface | Function |
|---|---|
| `Speed` | Current speed in metres per second.|
| `ForwardThrust` | Current forward thrust, maximum of 10,000 units |
| `Cruise` | Activates cruise control, forward thrust will not reset to zero unless turned down. |
| `Turtle` | Activates turtle mode which sets forward thrust to a maximum limit of `TurtleRate` of full thrust. |
| `Sloth` | Activates the low sensitvity mode of pitch and yaw by limiting thrust. Use the `Sensitivity` switch to set the maximum thrust rate of sloth mode.|
| `Aim` | Reduces the response time of key presses for pitch and yaw. |
| `Guides` | Activates rangefinders (except center one which can be activated separately). Can be used as guide lasers. `Red` warning lights show location of obstacles (left, right and centre). |
| `Nav`, `Autopilot`, `Avoidance` & `Target` | Autopilot controls. See [Autopilot and Crash Avoidance](#auto-pilot-and-crash-avoidance). |
| `ISAN2` | Current ISAN coordinates of ship. |
| `NavGrid`, `NavP`, `NavC` & `Attitude` | [NavGrid](https://github.com/pcbennion/starbase-navgrid) system, see [Using the Waypoint System](#using-the-waypoint-system). |
| `SafeZone` | Whether current location is in the safe zone. |
| `StrengthFactor` | Current strength of ship. May fluctuate as ore crates are filled. Anything below 1.0 means ship is damaged. |
| Transponder `Toggle` & `Ping` | [Transponder](https://starbase.egotech.space/pages/systems/utility/#transponder) controls, `Toggle` turns on and off ship transponder while `Ping` will activate transponder for three seconds |
| `Lights` | Turns on and off internal lights. |
| `Hatch` | Opens or closes ship entry hatch on top of the ship. |
| `Timer` | See [Timer](https://starbase.egotech.space/pages/systems/utility/#timer). |
| `Odometer` | See [Odometer](https://starbase.egotech.space/pages/systems/utility/#odometer). |

</nord-table>

<nord-banner variant="warning">

**NOTE:** For safety, firing full braking thrust will deactivate `Cruise`.

</nord-banner>

## Using the Waypoint System

![Pilot Left Console](https://github.com/EGO-Tech/starbase-ships/raw/main/mapper/images/pilot_left_console.jpg)

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

## Managing Power, Fuel and Propellant

![Pilot Right Console](https://github.com/EGO-Tech/starbase-ships/raw/main/mapper/images/pilot_right_console.jpg)

<nord-table>

| Interface | Function |
|---|---|
| `Propellant` | Total propellant remaining in propellant tanks, maximum of 264,000,000 units. |
| `PropTime` | Time and distance remaining of propellant based on current usage. |
| `FuelTime` | Time and distance remaining of fuel based on current usage. |
| `WithBackup` | Same as FuelTime but takes into account backup rods available. Use the switch for `Backup Rods` to set the number of backup rods available. As standard there are 12 extra rods. |
| `Fuel Rod 1` to `Fuel Rod 6` | Fuel remaining on fuel rods in individual fuel chambers, maximum of 300,000 units for each. |
| `Generator` | Current generator rate, maximum of 100%. |
| `Min Gen` & `Min Generator Rate` | Toggle and sets minimum generator rate. See [Managing Power and Fuel](#managing-power-and-fuel). |
| `Shutdown` | Will turn off all fuel chambers thus shutting down generators. |
| `Battery` | Shows current battery charge of the batteries, maximum of 10,000 units. |
| `HeatTransferRate` | Current heat transfer rate of the heat sinks, maximum of 100%. |
| `Flow In` & `Flow Out` | Toggle flow modes of resource bridges. See [Refilling Propellant](#refilling-propellant). |
| `Service` | Opens or closes access to propellant tanks from the top and bottom of the ship. |

</nord-table>

### Managing Power and Fuel

See [Power and Fuel Systems](https://starbase.egotech.space/pages/systems/power/) on how to manage ship power and refuel.

### Refilling Propellant

The `Service` button gives access to the propellant tanks.

See [Propellant Systems](https://starbase.egotech.space/pages/systems/propellant/) on how to refill propellant.
