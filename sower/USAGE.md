# Usage

## Flying the Ship

![Pilot Console](https://github.com/EGO-Tech/starbase-ships/raw/main/sower/images/pilot_center_console.jpg)

<nord-table style="max-width: 1200px">

The left lever on the center console controls backwards thrust (braking) and the right lever controls forward thrust.

| Interface | Function |
|---|---|
| `ForwardThrust` | Current forward thrust, maximum of 10,000 units |
| `Cruise` | Activates cruise control, forward thrust will not reset to zero unless turned down. |
| `Aim` | Reduces the response time of key presses for pitch and yaw. |
| `Turtle` | Activates turtle mode which sets forward thrust to a maximum limit of `TurtleRate` of full thrust. |
| `Sloth` | (Right Console) Activates the low sensitvity mode of pitch and yaw by limiting thrust. Use the `Sensitivity` switch to set the maximum thrust rate of sloth mode.|
| Transponder `Toggle` & `Ping` | Transponder controls, `Toggle` turns on and off ship transponder while `Ping` will activate transponder for three seconds |
| `ISAN2` | ISAN Mono system. No speed reading as that requires advanced chip which requires non safe zone ore |

</nord-table>

### Managing Power

![Pilot Right Console](https://github.com/EGO-Tech/starbase-ships/raw/main/sower/images/pilot_right_console.jpg)

<nord-table style="max-width: 1200px">

| Interface | Function |
|---|---|
| `Battery` | Shows current battery charge of the batteries, maximum of 10,000 units. |
| `Generator` | Current generator rate, maximum of 100%. |
| `HeatTransferRate` | Current heat transfer rate of the heat sinks, maximum of 100%. |
| `MinEPS` & `Min_Gen` | Toggle and sets minimum generator rate. See [Managing Power](#managing-power). |
| `Fuel1` & `Fuel2` | Fuel remaining on fuel rods in individual fuel chambers, maximum of 300,000 units for each. |
| `Shutdown` | Turns off fuel chambers. |
| `Propellant` | Total propellant remaining in propellant tanks, maximum of 12,000,000 units. |

</nord-table>

By default the generator will only run and ramp up when the batteries need charging so there is minimum management needed. But you can set a minimum generate rate by setting the `MinEPS` value using the switch for the minimum rate and turning on `Min_Gen`.

`Shutdown` will turn off the fuel chambers.
