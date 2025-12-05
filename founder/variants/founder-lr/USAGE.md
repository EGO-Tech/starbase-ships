# Usage

## Flying the Ship

![Pilot Center Console](https://github.com/EGO-Tech/starbase-ships/raw/main/founder/variants/founder-lr/images/pilot_center_console.jpg)

<nord-table>

| Interface | Function |
| --- | --- |
| `Speed` | Current speed in metres per second.|
| `ForwardThrust` | Current forward thrust, maximum of 10,000 units |
| `Cruise` | Activates cruise control, forward thrust will not reset to zero unless turned down. |
| `Turtle` | Activates turtle mode which sets forward thrust to a maximum limit of `TurtleRate` of full thrust. |
| `Sloth` | Activates the low sensitvity mode of pitch and yaw by limiting thrust. Use the `Sensitivity` switch to set the maximum thrust rate of sloth mode.|
| `Aim` | Reduces the response time of key presses for pitch and yaw. |
| `ISAN2` | Current ISAN coordinates of ship. |
| `Range`, `Distance` & `Approach` | Activates forward rangefinders, with `Distance` showing distance to object detected by center rangefinder. `Approach` will guide the ship to 10m of the object |
| `Warnings`, `SafeZone` & `StrengthFactor` | Warnings for being outside safe zone, ship damage as well as low fuel or propellant. See [Warnings Panel](https://starbase.egotech.space/pages/systems/utility/#warnings). |
| Transponder `Toggle` & `Ping` | [Transponder](https://starbase.egotech.space/pages/systems/utility/#transponder) controls, `Toggle` turns on and off ship transponder while `Ping` will activate transponder for three seconds |

</nord-table>

See [Flight Systems](https://starbase.egotech.space/pages/systems/flight/) on how to fly the ship and use its flight systems.

## Managing Power, Fuel and Propellant

![Pilot Right Console](https://github.com/EGO-Tech/starbase-ships/raw/main/founder/variants/founder-lr/images/pilot_right_console.jpg)

<nord-table>

| Interface | Function |
| --- | --- |
| `Propellant` | Total propellant remaining in propellant tanks. |
| `Fuel Rod 1` to `Fuel Rod 4` | Fuel remaining on fuel rods in individual fuel chambers, maximum of 300,000 units for each. |
| `Generator` | Current generator rate, maximum of 100%. |
| `Min Gen` & `Min Generator Rate` | Toggle and sets minimum generator rate. See [Managing Power and Fuel](#managing-power-and-fuel). |
| `Shutdown` | Will turn off all fuel chambers thus shutting down generators. |
| `Battery` | Shows current battery charge of the batteries, maximum of 10,000 units. |
| `Flow In` & `Flow Out` | Toggle flow modes of resource bridges. See [Refilling Propellant](#refilling-propellant). |

</nord-table>

### Managing Power and Fuel

See [Power and Fuel Systems](https://starbase.egotech.space/pages/systems/power/) on how to manage ship power and refuel.

### Refilling Propellant

Also see [Propellant Systems](https://starbase.egotech.space/pages/systems/propellant/) on how to refill propellant.
