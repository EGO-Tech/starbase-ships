# Usage

Summary of the ship functions can be found on the YOLOL chips bolted behind the pilot chair. Swipe down on the lock to read each one. More detailed usage instructions are available below.

To enter the ship, there is a button above the cockpit that will open a `Hatch`. Once inside you can also open and close the cockpit glass `Canopy`. Buttons for these are available in the pilot right side console and also on the ceiling next to the hatch.

## Flying the Ship

<nord-banner variant="danger">

~~**IMPORTANT:** Before flying the ship you should bind your keys by using the `V` key while sitting on the pilot chair. You will to bind keys for FWD+/FWD- (for forward thrust, usually SHIFT and CTRL), YAW+/YAW- (for yaw, usually E and Q) and PCH+/PCH- (for pitch, usually S and W).~~ No longer needed as of v1.1.0.

</nord-banner>

![Pilot Center Console](https://github.com/EGO-Tech/starbase-ships/raw/main/rigger/images/pilot_center_console.jpg)

<nord-table>

| Interface | Function |
| --- | --- |
| `ForwardThrust` | Current forward thrust, maximum of 10,000 units |
| `Cruise` | Activates cruise control, forward thrust will not reset to zero unless turned down. |
| `Turtle` | Activates turtle mode which sets forward thrust to a maximum limit of `TurtleRate` of full thrust. |
| `Sloth` | Activates the low sensitvity mode of pitch and yaw by limiting thrust. Use the `Sensitivity` switch to set the maximum thrust rate of sloth mode.|
| `Profiles` | Adjusts preset flight profiles. See [Flight Profiles](https://starbase.egotech.space/pages/systems/flight/#flight-profiles). |
| `Aim` | Reduces the response time of key presses for pitch and yaw. |
| `Guides` & `Guidance` | Activates rangefinders (except center one which can be activated separately). Can be used as guide lasers. `Guidance` shows alerts showing position of objects detected with text and visualisation. For the visualisation, `O` means object is detected by  the particular rangefinder. |
| `Range` & `Distance` | Activates center rangefinder, with `Distance` showing distance to object. |
| `Scanner` & `Scan` | Turns on the [Ore Scanner](#ore-scanner). |
| `Approach`, `Collect`, `Mine`, `Lasers`, `Laser Sweep Height` & `Laser Sweep Depth` | Mining controls. See [Mining](#mining). |
| `Warnings`, `SafeZone` & `StrengthFactor` | Warnings for being outside safe zone, ship damage as well as low fuel or propellant. See [Warnings Panel](https://starbase.egotech.space/pages/systems/utility/#warnings). |
| `Avoidance` | Activates avoidance. See [Crash Avoidance](#crash-avoidance). |
| Transponder `Toggle` & `Ping` | [Transponder](https://starbase.egotech.space/pages/systems/utility/#transponder) controls, `Toggle` turns on and off ship transponder while `Ping` will activate transponder for three seconds |
| `ISAN2`, `Heading`, `Dest`, `DTW` & `Deltas` | See [ISAN Waypoint System](https://github.com/Archaegeo/Starbase/tree/45a9bb464cb71d7de7a214f8e665111d6b2b5989/ISAN-Waypoint%20System) for more informaton. |
| `G` Rotated | Compass display. Shows direction towards `Dest` waypoint, `+` is in front of ship while `O` is behind the ship. Best used when stationary. See [Compass](https://gitlab.com/Firestar99/yolol/-/blob/master/src/compass/README.md) for more informaton. |

</nord-table>

See [Flight Systems](https://starbase.egotech.space/pages/systems/flight/) on how to fly the ship and use its flight systems.

## Using the Waypoint System

![Pilot Left Console](https://github.com/EGO-Tech/starbase-ships/raw/main/rigger/images/pilot_left_console.jpg)

This is a custom interface for the [ISAN Waypoint System](https://github.com/Archaegeo/Starbase/tree/45a9bb464cb71d7de7a214f8e665111d6b2b5989/ISAN-Waypoint%20System).

### Viewing, Loading and Naming Waypoints

View a waypoint (`WP1` to `WP18`) by pressing the individual buttons. The waypoint will be shown on the `WP` panel. Load the waypoint in `WP` to `Dest` using the `Load Dest` button. Once in `Dest`, the waypoint will be used by the compass and ISAN systems.

To give waypoints a name, use your universal tool to change the panel values with the name you want. This is for display purposes and your own reference only, it is not used anywhere else.

### Saving Waypoints

Use `Save Loc` to save waypoint of current location to the waypoint position viewed on the `WP` panel.

To manually save coordinates, use your universal tool to add X, Y and Z values to `NewX`, `NewY` and `NewZ` respectively. Then use the button to save the coordinates to the waypoint position viewed on the `WP` panel.

## Crash Avoidance

`Avoidance` will activate `Guides`. If the guides detect objects it will pitch the ship down and cut forward thrust.

<nord-banner variant="warning">

**NOTE:** There is very limited coverage of range finders for the crash avoidance system. It also hasn't been tested extensively. **Use at your own risk!**

</nord-banner>

## Mining

To approach an asteroid, point the center range finder at an asteroid and activate `Approach`. Once in range (optimum range is 10 to 14m on `Distance`), activate `Lasers` to turn on the mining lasers. `Laser Sweep Height` and `Laser Sweep Depth` will adjust sweeping distances of the lasers.

`Mine` is a button which will activate automated mining. Point the center range finder at an asteroid and activate. It will activate `Scanner` and `Approach`, and once in range it will automatically activate `Lasers`.

`Collect` turns on the two ore collectors. Ore collectors automatically adjust to point towards objects detected by the center range finder.

If batteries start running out of charge while mining, turn on `Min Gen`. Continous use of the lasers and collectors at the same time requires a `Min Generator Rate` of around 90%.

<nord-banner variant="warning">

**NOTE:** For safety, lasers will turn off if the total fuel is less that 2,000 units.

</nord-banner>

### Ore Scanner

Activate using the `Scanner` button. The laser will try to adjust to point at the objects detected by the center range finder. Scan results will show on the `Scan` panel in number of stacks. It has a maximum range of 100m.

## Managing Power, Fuel and Propellant

![Pilot Right Console](https://github.com/EGO-Tech/starbase-ships/raw/main/rigger/images/pilot_right_console.jpg)

<nord-table>

| Interface | Function |
| --- | --- |
| `Battery` | Shows current battery charge of the batteries, maximum of 10,000 units. |
| `Generator` | Current generator rate, maximum of 100%. |
| `Min Generator Rate` & `Min Gen` | Toggle and sets minimum generator rate. See [Managing Power and Fuel](#managing-power-and-fuel). |
| `Fuel Rod 1` to `Fuel Rod 6` | Fuel remaining on fuel rods in individual fuel chambers, maximum of 300,000 units for each. |
| `Propellant` | Total propellant remaining in propellant tanks, maximum of 38,000,000 units. |
| `PropTime` | Time and distance remaining of propellant based on current usage. Distance is calculated from speed. |
| `FuelTime` | Time and distance remaining of fuel based on current usage. Distance is calculated from speed. |
| `WithBackup` | Same as FuelTime but takes into account backup rods available. Use the switch for `BackupRods` to set the number of backup rods available. As standard there are 16 extra rods. |
| `Shutdown` | Will turn off all fuel chambers thus shutting down generators. |
| `FlowIn` & `FlowOut` | Toggle flow modes of resource bridges. See [Refilling Propellant](#refilling-propellant). |
| `Lights` | Turns on and off internal lights. |
| `Headlights` | Turns on and off external light on the nose of the ship. May help with mining asteroids. |
| `Canopy` | Opens or closes glass canopy. |
| `Hatch` | Opens or closes ship entry hatch. |
| `Timer` | See [Timer](https://starbase.egotech.space/pages/systems/utility/#timer). |
| `Odometer` | See [Odometer](https://starbase.egotech.space/pages/systems/utility/#odometer). |

</nord-table>

### Managing Power and Fuel

See [Power and Fuel Systems](https://starbase.egotech.space/pages/systems/power/) on how to manage ship power and refuel.

### Refilling Propellant

See [Propellant Systems](https://starbase.egotech.space/pages/systems/propellant/) on how to refill propellant.

The small propellant tank above the crafting bench can also be used to refill the ship. Turn off `FlowOut` and connect the tank's resource bridge to any of the ship's resource bridges, this will transfer the propellant from the tank to the ship. You can then unbolt the tank and craft refills for the tank using ice and then bolt the tank back to the support. Rinse and repeat until full.
