# Usage

To enter the ship, there are buttons at the back of the ship that will open `Door`.

## Flying the Ship

![Pilot Center Console](https://github.com/EGO-Tech/starbase-ships/raw/main/roamer/images/pilot_center_console.jpg)

<nord-table>

| Interface | Function |
| --- | --- |
| `Speed` | Current speed in metres per second.|
| `ForwardThrust` | Current forward thrust, maximum of 10,000 units |
| `Cruise` | Activates cruise control, forward thrust will not reset to zero unless turned down. |
| `Turtle` | Activates turtle mode which sets forward thrust to a maximum limit of `TurtleRate` of full thrust. |
| `Sloth` | Activates the low sensitvity mode of pitch and yaw by limiting thrust. Use the `Sensitivity` switch to set the maximum thrust rate of sloth mode.|
| `Aim` | Reduces the response time of key presses for pitch and yaw. |
| `Guides` | Activates rangefinders (except center one which can be activated separately). Can be used as guide lasers. `Red` warning lights show location of obstacles (left, right and centre). |
| `ISAN2` | Current ISAN coordinates of ship. |
| `Warnings`, `SafeZone` & `StrengthFactor` | Warnings for being outside safe zone, ship damage as well as low fuel or propellant. See [Warnings Panel](https://starbase.egotech.space/pages/systems/utility/#warnings). |
| Transponder `Toggle` & `Ping` | [Transponder](https://starbase.egotech.space/pages/systems/utility/#transponder) controls, `Toggle` turns on and off ship transponder while `Ping` will activate transponder for three seconds |
| `Timer` | See [Timer](https://starbase.egotech.space/pages/systems/utility/#timer). |
| `Odometer` | See [Odometer](https://starbase.egotech.space/pages/systems/utility/#odometer). |

</nord-table>

See [Flight Systems](https://starbase.egotech.space/pages/systems/flight/) on how to fly the ship and use its flight systems.

## Managing Power, Fuel and Propellant

![Pilot Right Console](https://github.com/EGO-Tech/starbase-ships/raw/main/roamer/images/pilot_right_console.jpg)

<nord-table>

| Interface | Function |
| --- | --- |
| `Propellant` | Total propellant remaining in propellant tanks, maximum of 96,000,000 units. |
| `PropTime` | Time and distance remaining of propellant based on current usage. |
| `FuelTime` | Time and distance remaining of fuel based on current usage. |
| `WithBackup` | Same as FuelTime but takes into account backup rods available. Use the switch for `Backup Rods` to set the number of backup rods available. As standard there are 12 extra rods. |
| `Fuel Rod 1` to `Fuel Rod 6` | Fuel remaining on fuel rods in individual fuel chambers, maximum of 300,000 units for each. |
| `Generator` | Current generator rate, maximum of 100%. |
| `Min Gen` & `Min Generator Rate` | Toggle and sets minimum generator rate. See [Managing Power and Fuel](#managing-power-and-fuel). |
| `Shutdown` | Will turn off all fuel chambers thus shutting down generators. |
| `Battery` | Shows current battery charge of the batteries, maximum of 10,000 units. |
| `Flow In` & `Flow Out` | Toggle flow modes of resource bridges. See [Refilling Propellant](#refilling-propellant). |
| `Lights` | Turns on and off internal lights. |
| `Door` | Opens or closes ship entry door at the back of the ship. |
| `Service` | Opens or closes ship service door to the machinery room. |

</nord-table>

### Managing Power and Fuel

See [Power and Fuel Systems](https://starbase.egotech.space/pages/systems/power/) on how to manage ship power and refuel.

### Refilling Propellant

Also see [Propellant Systems](https://starbase.egotech.space/pages/systems/propellant/) on how to refill propellant.
