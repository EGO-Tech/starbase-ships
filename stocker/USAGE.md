# Usage

To enter the ship, there is a button on top of the center of the ship that will open a `Hatch`. Once inside you can also open and close the cockpit glass `Canopy`. The pilot `Chair` can be rotated around for easy access. Buttons for these are available in the pilot side consoles and also on the ceiling above the pilot seat.

## Flying the Ship

![Pilot Center Console](https://github.com/EGO-Tech/starbase-ships/raw/main/stocker/images/pilot_center_console.jpg)

<nord-table>

| Interface | Function |
| --- | --- |
| `Speed` | Current speed in metres per second. |
| `ForwardThrust` | Current forward thrust, maximum of 10,000 units |
| `Cruise` | Activates cruise control, forward thrust will not reset to zero unless turned down. |
| `Turtle` | Activates turtle mode which sets forward thrust to a maximum limit of `TurtleRate` of full thrust. |
| `Sloth` | Activates the low sensitvity mode of pitch and yaw by limiting thrust. Use the `Sensitivity` switch to set the maximum thrust rate of sloth mode.|
| `Profiles` | Adjusts preset flight profiles. See [Flight Profiles](https://starbase.egotech.space/pages/systems/flight/#flight-profiles). |
| `Aim` | Reduces the response time of key presses for pitch and yaw. |
| `Guides` | Activates rangefinders (except center one which can be activated separately). Can be used as guide lasers. `Red` warning lights show location of obstacles (left, right and centre). |
| `Range` & `Distance` | Activates center rangefinder, with `Distance` showing distance to object. |
| `Material Scanner` & `Materials` | Turns on the [Ore Scanner](#ore-scanner) and shows results of scan. |
| `Approach`, `Collect`, `Mine`, `Mining Lasers`, `Eco`, `Laser Sweep Height` & `Laser Sweep Depth` | Mining controls. See [Mining](#mining). |
| `Avoidance` | Activates avoidance. See [Crash Avoidance](#crash-avoidance). |
| `ISAN2` | Current ISAN coordinates of ship. |
| `NavGrid`, `NavP`, `NavC` & `Attitude` | [NavGrid](https://github.com/pcbennion/starbase-navgrid) system, see [Using the Waypoint System](#using-the-waypoint-system). |
| `Warnings`, `SafeZone` & `StrengthFactor` | Warnings for being outside safe zone, ship damage as well as low fuel or propellant. See [Warnings Panel](https://starbase.egotech.space/pages/systems/utility/#warnings). |
| Transponder `Toggle` & `Ping` | [Transponder](https://starbase.egotech.space/pages/systems/utility/#transponder) controls, `Toggle` turns on and off ship transponder while `Ping` will activate transponder for three seconds |
| `Timer` | See [Timer](https://starbase.egotech.space/pages/systems/utility/#timer). |
| `Odometer` | See [Odometer](https://starbase.egotech.space/pages/systems/utility/#odometer). |

</nord-table>

See [Flight Systems](https://starbase.egotech.space/pages/systems/flight/) on how to fly the ship and use its flight systems.

## Using the Waypoint System

![Pilot Left Console](https://github.com/EGO-Tech/starbase-ships/raw/main/stocker/images/pilot_left_console.jpg)

### Viewing and Selecting Waypoints

This uses the [NavGrid](https://github.com/pcbennion/starbase-navgrid) system. Use the `Down` and `Up` waypoints selectors to select waypoint. The selected waypoint information is shown on `NavP` and `NavC` panels.

On the pilot center console, `NavGrid` will show the compass towards the selected waypoint while `Attitude` will show the ship's pitch, heading and roll directions. `NavGrid` is best used while not moving.

### Editing and Saving Waypoints

Use `Set` to save waypoint of current location to the current selected waypoint position.

To edit currently selected waypoint, use your `U` tool to add name, X, Y and Z values to `nName`, `nX`, `nY` and `nZ` respectively. Then use the `Save` button to save.

<nord-banner variant="warning">

**NOTE:** Waypoint 1 to 6 are presets and can not be over written.

</nord-banner>

## Crash Avoidance

`Avoidance` will activate `Guides`. If the guides detect objects it will cut thrust and strafe up or down (will flash either the top or bottom `Blue` warning lights on the pilot center console according to the direction) while sounding an alarm (check game settings if you do not hear the alarm).
It will also flash `Red` warning lights on the pilot center console according to the position of obstacle detected.

`Avoids` will show the counters for number of avoidances. The `Trip` counter can be reset by holding down the `Avoids` `Reset Trips` button.

<nord-banner variant="warning">

**NOTE:** There is very limited coverage of range finders for the crash avoidance system. **Use at your own risk!**

</nord-banner>

## Resetting Navigation

If ISAN or NavGrid is not working, it can be reset using the `Reset ISAN` button. Press once to take ISAN offline, then press again to reset.

For v1.0.2 and below, do this by using your universal tool on the ISAN panel on the pilot console and clearing the value of the `_` field.
The first time will show ISAN as offline, repeat clearing the value again to reset ISAN and NavGrid.

## Mining

To approach an asteroid, point the center range finder at an asteroid and activate `Approach`. Once in range (optimum range is 10 to 14m on `Distance`), activate `Mining Lasers` to turn on the mining lasers.

The lasers have three modes.

- `Fixed` mode will keep all lasers converged to the asteroid detected by the center range finder.
- `Manual` mode allows manual control of the lasers using the pitch and yaw controls (including mouse control, default button `C`) of the ship. **This mode disables flight controls of the ship**
- `Auto` mode will activate laser sweeping. `Laser Sweep Height` and `Laser Sweep Depth` can be adjusted in this mode to change sweeping distances of the lasers.

<nord-banner variant="warning">

**NOTE:** `Manual` mode disables flight controls of the ship.

</nord-banner>

`Eco` mode will only use the top two lasers to conserve power if needed.

`Mine` is a button which will activate automated mining. Point the center range finder at an asteroid and activate. It will activate `Material Scanner` and `Approach`, and once in range it will automatically activate `Lasers`.

`Collect` turns on the two ore collectors. Ore collectors automatically adjust to point towards objects detected by the center range finder.

If batteries start running out of charge while mining, turn on `Min Gen`. Continous use of the lasers and collectors at the same time requires a `Min Generator Rate` of around 90%.

<nord-banner variant="warning">

**NOTE:** For safety, lasers will turn off if the total fuel is less that 2,000 units.

</nord-banner>

### Ore Scanner

Activate using the `Material Scanner` button. The laser will try to adjust to point at the objects detected by the center range finder. Scan results will show on the `Materials` panel in number of stacks. It has a maximum range of 100m.

## Managing Power, Fuel and Propellant

![Pilot Right Console](https://github.com/EGO-Tech/starbase-ships/raw/main/stocker/images/pilot_right_console.jpg)

<nord-table>

| Interface | Function |
| --- | --- |
| `Propellant` | Total propellant remaining in propellant tanks, maximum of 70,000,000 units. |
| `PropTime` | Time and distance remaining of propellant based on current usage. Distance is calculated from speed. |
| `FuelTime` | Time and distance remaining of fuel based on current usage. Distance is calculated from speed. |
| `WithBackup` | Same as FuelTime but takes into account backup rods available. Use the switch for `Backup Rods` to set the number of backup rods available. As standard there are 20 extra rods. |
| `Fuel Rod 1` to `Fuel Rod 12` | Fuel remaining on fuel rods in individual fuel chambers, maximum of 300,000 units for each. |
| `Generator` | Current generator rate. |
| `Min Gen` & `Min Generator Rate` | Toggle and sets minimum generator rate. See [Managing Power and Fuel](#managing-power-and-fuel). |
| `Shutdown` | Will turn off all fuel chambers thus shutting down generators. |
| `Battery` | Shows current battery charge of the batteries, maximum of 10,000 units. |
| `Flow In` & `Flow Out` | Toggle flow modes of resource bridges. See [Refilling Propellant](#refilling-propellant). |
| `Lights` | Turns on and off internal lights. |
| `Canopy` | Opens or closes glass canopy. |
| `Hatch` | Opens or closes ship entry hatch. |
| `Chair` | Rotates pilot chair. |

</nord-table>

### Managing Power and Fuel

See [Power and Fuel Systems](https://starbase.egotech.space/pages/systems/power/) on how to manage ship power and refuel.

### Refilling Propellant

See [Propellant Systems](https://starbase.egotech.space/pages/systems/propellant/) on how to refill propellant.

The two red propellant tanks behind the generators can also be used to refill the ship. Connect the `Red` resource bridge to the `Green` resource bridge to transfer propellant.
You can then unbolt the red tanks and craft refills for the tanks using ice and then bolt the tank back to the support. Rinse and repeat until full. The `Red` and `Green` buttons toggles the respective resource bridges.
