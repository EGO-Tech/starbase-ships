# Usage

To enter the ship, there is are buttons on either side of the cockpit of the ship that will open `Doors`. Once inside you can also open and close the cockpit glass `Canopy`. Buttons for these are available in the pilot left side console.

## Flying the Ship

![Pilot Center Console](https://github.com/EGO-Tech/starbase-ships/raw/main/trebler/images/pilot_center_console.jpg)

<nord-table>

| Interface | Function |
| --- | --- |
| `Speed` | Current speed in metres per second. |
| `ForwardThrust` | Current forward thrust, maximum of 10,000 units |
| `Throttle` | Current throttle level, maximum of 100 percent |
| `Cruise` | Activates cruise control, forward thrust will not reset to zero unless turned down. |
| `Turtle` | Activates turtle mode which sets forward thrust to a maximum limit of `TurtleRate` of full thrust. |
| `Sloth` | Activates the low sensitvity mode of pitch and yaw by limiting thrust. Use the `Sensitivity` switch to set the maximum thrust rate of sloth mode. |
| `Profiles` | Adjusts preset flight profiles. See [Flight Profiles](https://starbase.egotech.space/pages/systems/flight/#flight-profiles). |
| `Aim` | Reduces the response time of key presses for pitch and yaw. |
| `Guides` | Activates four forward facing rangefinders as guides. |
| `Range` & `Distance` | Activates center rangefinder, with `Distance` showing distance to object. |
| `Scanner` & `Materials` | Turns on the [Ore Scanner](#ore-scanner) and shows results of scan. |
| `Approach`, `Collect`, `Mine`, `Lasers`, `Rotate`, `Eco`, `Drill Mode`, `Drill Pitch` & `Drill Count` | Mining controls. See [Mining](#mining). |
| `Warnings`, `SafeZone` & `StrengthFactor` | Warnings for being outside safe zone, ship damage as well as low fuel or propellant. See [Warnings Panel](https://starbase.egotech.space/pages/systems/utility/#warnings). |
| Transponder `Toggle` & `Ping` | [Transponder](https://starbase.egotech.space/pages/systems/utility/#transponder) controls, `Toggle` turns on and off ship transponder while `Ping` will activate transponder for three seconds |
| `Timer` | See [Timer](https://starbase.egotech.space/pages/systems/utility/#timer). |
| `Odometer` | See [Odometer](https://starbase.egotech.space/pages/systems/utility/#odometer). |

</nord-table>

See [Flight Systems](https://starbase.egotech.space/pages/systems/flight/) on how to fly the ship and use its flight systems.

## Mining

To approach an asteroid, point the center range finder at an asteroid and activate `Approach`. Once in range (optimum range is 16 to 20m on `Distance`), activate `Lasers` to turn on the mining lasers. Activating `Rotate` will rotate the laser drill.

The laser drill has three modes.

- `Fixed` mode will keep all lasers converged to the asteroid detected by the center range finder.
- `Manual` mode allows adjustment of the `Drill Pitch`. The pitch range is from `-15` to `20` degrees.
- `Auto` mode will activate `Rotate` and progressively increase the drill pitch with the rotations

`Drill Pitch` can only be adjusted in `Manual` mode. `Eco` mode will only use two lasers to conserve power. `Drill Count` controls whether one, two or three drills are activated when mining.

`Mine` is a button which will activate automated mining. Point the center range finder at an asteroid and activate. It will activate `Material Scanner` and `Approach`, and once in range it will automatically activate `Lasers`.

`Collect` turns on the six ore collectors.

If batteries start running out of charge while mining, turn on `Min Gen`. Continous use of the lasers and collectors at the same time requires a `Min Generator Rate` of around 90%.

<nord-banner variant="warning">

**NOTE:** For safety, lasers will turn off if the total fuel is less that 2,000 units.

</nord-banner>

### Ore Scanner

Activate using the `Material Scanner` button. The laser will try to adjust to point at the objects detected by the center range finder. Scan results will show on the `Materials` panel in number of stacks. It has a maximum range of 100m.

## Managing Power, Fuel and Propellant

![Pilot Right Console](https://github.com/EGO-Tech/starbase-ships/raw/main/trebler/images/pilot_right_console.jpg)

<nord-table>

| Interface | Function |
| --- | --- |
| `Propellant` | Total propellant remaining in propellant tanks, maximum of 48,000,000 units. |
| `PropTime` | Time and distance remaining of propellant based on current usage. Distance is calculated from speed. |
| `FuelTime` | Time and distance remaining of fuel based on current usage. Distance is calculated from speed. |
| `WithBackup` | Same as FuelTime but takes into account backup rods available. Use the switch for `Backup Rods` to set the number of backup rods available. As standard there are 24 extra rods. |
| `Fuel Rod 1` to `Fuel Rod 12` | Fuel remaining on fuel rods in individual fuel chambers, maximum of 300,000 units for each. |
| `Generator` | Current generator rate, maximum of `Generator Limit`. |
| `Min Gen` & `Min Generator Rate` | Toggle and sets minimum generator rate. See [Managing Power and Fuel](#managing-power-and-fuel). |
| `Shutdown` | Will turn off all fuel chambers thus shutting down generators. |
| `Battery` | Shows current battery charge of the batteries, maximum of 10,000 units. |
| `HeatTransferRate` | Current heat transfer rate of the heat sinks, maximum of 100%. |
| `Flow In` & `Flow Out` | Toggle flow modes of resource bridges. See [Refilling Propellant](#refilling-propellant). |
| `Lights` | Turns on and off internal lights. |
| `Doors` | Opens or closes ship entry doors. |

</nord-table>

### Managing Power and Fuel

See [Power and Fuel Systems](https://starbase.egotech.space/pages/systems/power/) on how to manage ship power and refuel.

### Refilling Propellant

See [Propellant Systems](https://starbase.egotech.space/pages/systems/propellant/) on how to refill propellant.
