# Usage

To enter the ship, there is a button on top the ship that will open `Hatch`.

## Flying the Ship

![Pilot Top Console](https://github.com/EGO-Tech/starbase-ships/raw/main/clunker/images/pilot_top_console.jpg)
![Pilot Left Console](https://github.com/EGO-Tech/starbase-ships/raw/main/clunker/images/pilot_left_console.jpg)

The left lever on the center console controls backwards thrust (braking) and the right lever controls forward thrust.

<nord-table>

| Interface | Function |
|---|---|
| `Speed` | Current speed in metres per second. |
| `ForwardThrust` | Current forward thrust, maximum of 10,000 units |
| `Plasma` & `Plasma Charge Level` | Activates the plasma thrusters and intitiate charging. Plasma thrusters has to be activated and charge level at 1.0 for it to fire. |
| `Cruise` | Activates cruise control, forward thrust will not reset to zero unless turned down. |
| `Turtle` | Activates turtle mode which sets forward thrust to a maximum limit of `TurtleRate` of full thrust. |
| `Sloth` | Activates the low sensitvity mode of pitch and yaw by limiting thrust. Use the `Sensitivity` switch to set the maximum thrust rate of sloth mode.|
| `Aim` | Reduces the response time of key presses for pitch and yaw. |
| `Range` & `Distance` | Activates forward rangefinders, with `Distance` showing distance to object detected by center rangefinder. |
| `Guide`, `FrontRight`, `FrontLeft`, `BackRight` & `BackLeft` | `Guide` activates rangefinders at each corner of the base of the ship. Each repsective corner shows distance to the ground. |
| `SafeZone` | Whether current location is in the safe zone. |
| `StrengthFactor` | Current strength of ship. May fluctuate as ore crates are filled. Anything below 1.0 means ship is damaged. |
| Transponder `Toggle` & `Ping` | [Transponder](https://starbase.egotech.space/pages/systems/utility/#transponder) controls, `Toggle` turns on and off ship transponder while `Ping` will activate transponder for three seconds |

</nord-table>

<nord-banner variant="warning">

**NOTE:** For safety, firing full braking thrust will deactivate `Cruise`.

</nord-banner>

## Managing Power, Fuel and Propellant

![Pilot Right Console](https://github.com/EGO-Tech/starbase-ships/raw/main/clunker/images/pilot_right_console.jpg)

<nord-table>

| Interface | Function |
|---|---|
| `Propellant` | Total propellant remaining in propellant tanks, maximum of 72,000,000 units. |
| `Fuel` | Fuel remaining on fuel tank, maximum of 10,000,000 units. |
| `Generator` | Current generator rate, maximum of `Generator Limit`. |
| `Min Gen` & `Min Generator Limit` | Toggle and sets minimum generator rate. See [Managing Power and Fuel](#managing-power-and-fuel). |
| `Shutdown` | Will turn off all fuel chambers thus shutting down generators. |
| `Battery` | Shows current battery charge of the batteries, maximum of 10,000 units. |
| `HeatTransferRate` | Current heat transfer rate of the heat sinks, maximum of 100%. |
| `Flow In` & `Flow Out` | Toggle flow modes of resource bridges. See [Refilling Propellant](#refilling-propellant). |

</nord-table>

### Managing Power and Fuel

See [Power and Fuel Systems](https://starbase.egotech.space/pages/systems/power/) on how to manage ship power and refuel.

### Refilling Propellant

See [Propellant Systems](https://starbase.egotech.space/pages/systems/propellant/) on how to refill propellant.
