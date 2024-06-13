# Usage

## Flying the Ship

![Pilot Console](https://github.com/EGO-Tech/starbase-ships/raw/main/flipper/images/pilot_center_console_1.jpg)
![Pilot Console](https://github.com/EGO-Tech/starbase-ships/raw/main/flipper/images/pilot_center_console_2.jpg)

The left lever on the center console controls backwards thrust (braking) and the right lever controls forward thrust.

<nord-table>

| Interface | Function |
|---|---|
| `ForwardThrust`, `Thrust` | Current forward thrust, maximum of 10,000 units |
| `Cruise` | Activates cruise control, forward thrust will not reset to zero unless turned down. |
| `Turtle`, `TurtleRate` | Activates turtle mode which sets forward thrust to a maximum limit of `TurtleRate` (percent) of full thrust. |
| `Sloth`, `Sensitivity` | Activates sloth mode which sets yaw and pitch thrust to a maximum limit of `Sensitivity` (percent) of full thrust. |
| `Aim` | Reduces the response time of key presses for pitch and yaw. |
| `Distance`, `Reach` & `Range` | `Distance` & `Reach` are distances for center rangefinders. `Guide` or the green button toggles the rangefinders. The warning lights blink red when the surronding guide lasers detect an object. |
| `Scan`, `Material`, & `Credits` | Material scanning controls. See [Scanning Asteroids](#scanning-asteroids). |
| `Approach`, `Load` & `Cargo` | Cargo loading controls. See [Loading Asteroids](#loading-asteroids). |
| `Timer` | See [Timer](https://starbase.egotech.space/pages/systems/utility/#timer). |

</nord-table>

<nord-banner variant="warning">

**NOTE:** For safety, firing full braking thrust will deactivate `Cruise`.

</nord-banner>

## Managing Power, Fuel and Propellant

![Pilot Right Console](https://github.com/EGO-Tech/starbase-ships/raw/main/flipper/images/pilot_right_console.jpg)

<nord-table>

| Interface | Function |
|---|---|
| `Propellant` | Total propellant remaining in propellant tanks, maximum of 10,000,000 units. |
| `Battery` | Shows current battery charge of the batteries, maximum of 10,000 units. |
| `Generator` | Current generator rate, maximum of 100%. |
| `Min Generator Limit` & `Min Gen` | Toggle and sets minimum generator rate. See [Managing Power and Fuel](#managing-power-and-fuel). |
| `HeatTransferRate` | Current heat transfer rate of the heat sinks, maximum of 100%. |
| `Fuel Rod 1`, `Fuel Rod 2`, `Fuel Rod 3`, `Fuel Rod 4`, `Fuel Rod 5`, `Fuel Rod 6` , `Fuel Rod 7` , `Fuel Rod 8` | Total fuel remaining on fuel rods, maximum of 300,000 units each. |
| `Shutdown` | Will turn off all fuel chambers thus shutting down generators. |
| `StrengthFactor` | Current strength of ship. May fluctuate as asteroid is loaded. Anything below 1.0 means ship is damaged. |
| `ID` | Toggle for the transponder. |

</nord-table>

### Managing Power and Fuel

See [Power and Fuel Systems](https://starbase.egotech.space/pages/systems/power/) on how to manage ship power and refuel.

### Refilling Propellant

See [Propellant Systems](https://starbase.egotech.space/pages/systems/propellant/) on how to refill propellant.

## Scanning Asteroids

![Scanner](https://github.com/EGO-Tech/starbase-ships/raw/main/flipper/images/scanner.jpg)

`Scan` turns on the material scanner. The beam has a range of 100m.
Point the beam at an asteroid and `Material` will show the materials in the asteroid along with the volume of each in stacks.
`Credits` will show the _estimated_ amount of credits you will get for the asteroid if you drop it off at Origin stations.
The calculation is 158.8% (worked out this with testing) of the cost of ore of the vendor price. **This only has data for safe zone materials.** The total volume of the asteroid in Mv is also shown.

## Loading Asteroids

Approach an asteroid by pointing the center rangefinder at an asteroid and activating `Approach`. This will guide the ship to around 2m of the asteroid. `Cargo` will activate the cargo lock beams.

All these can be done the automated `Load` function on **the pilot center console**. Point the rangefinder at the asteroid you wish to load and activate `Load`. This is activate `Approach` and `Scan` as well as smartly activating the `Cargo` when the asteroid is in place.
