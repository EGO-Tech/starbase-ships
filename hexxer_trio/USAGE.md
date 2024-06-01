# Usage

## Flying the Ship

![Pilot Console](https://github.com/EGO-Tech/starbase-ships/raw/main/hexxer_trio/images/pilot_center_console.jpg)

The left lever on the center console controls backwards thrust (braking) and the right lever controls forward thrust.

<nord-table>

| Interface | Function |
|---|---|
| `ForwardThrust` | Current forward thrust, maximum of 10,000 units |
| `Cruise` | Activates cruise control, forward thrust will not reset to zero unless turned down. |
| `Turtle`, `TurtleRate` | Activates turtle mode which sets forward thrust to a maximum limit of `TurtleRate` (percent) of full thrust. |
| `Sloth`, `Sensitivity` | Activates sloth mode which sets yaw and pitch thrust to a maximum limit of `Sensitivity` (percent) of full thrust. |
| `Profiles` | Adjusts preset flight profiles. See [Flight Profiles](#flight-profiles). |
| `Aim` | Reduces the response time of key presses for pitch and yaw. |
| `Speed` | Current speed in metres per second. |
| `StrengthFactor` | Current strength of ship. May fluctuate as ore crates are filled. Anything below 1.0 means ship is damaged. |
| Transponder `Toggle` & `Ping` | Transponder controls, `Toggle` turns on and off ship transponder while `Ping` will activate transponder for three seconds |
| `Distance` & `Range` | Distance for rangefinder. `Range` toggles the rangefinders.|
| `Scan`, `Material`, & `Credits` | Material scanning controls. See [Scanning Asteroids](#scanning-asteroids). |
| `Approach` & `Load` | Cargo loading controls. See [Loading Asteroids](#loading-asteroids). |
| `Timer` | See [Timer](#timer). |

</nord-table>

<nord-banner variant="warning">

**NOTE:** For safety, firing full braking thrust will deactivate `Cruise`.

</nord-banner>

### Flight Profiles

The flight profiles system allows the saving of four preset profiles consisting of `TurtleRate` and `Sensitivity` values, named `Blue`, `Red`, `Green` and `White`.
Quickly load a particular profile by pressing one of the coloured buttons with its colour matching the profile name.
This is load the `TurtleRate` and `Sensitivity` preset values of the profile into the main flight system.

Adjust the presets of a profile by selecting the profile on the `Profiles` panel using the `Up` and `Down` (blue buttons) and selecting by using the `Select` button (white vertical button).
Once in a profile screen for a profile, use the `Up` and `Down` buttons then `Select` button to select either `Turtle` or `Sens.` and then using the `Up` and `Down` buttons to adjust the values.
Press the `Select` button again to stop adjusting the values. Select `Back` to go back to the profile selection screen.

<nord-banner variant="info">

**TIP:** Save a blueprint for the ship using the U-tool once you have set up your flight profiles to have it persist after repairs.

</nord-banner>

## Managing Power and Fuel

![Pilot Right Console](https://github.com/EGO-Tech/starbase-ships/raw/main/hexxer_trio/images/pilot_right_console.jpg)

<nord-table>

| Interface | Function |
|---|---|
| `Propellant` | Total propellant remaining in propellant tanks, maximum of 10,000,000 units. |
| `Battery` | Shows current battery charge of the batteries, maximum of 10,000 units. |
| `Generator` | Current generator rate, maximum of 100%. |
| `Min Generator Rate` & `Min Gen` | Toggle and sets minimum generator rate. See [Managing Power](#managing-power). |
| `Fuel Rod 1` to `Fuel Rod 10` | Total fuel remaining on fuel rods, maximum of 300,000 units each. |
| `Shutdown` | Will turn off all fuel chambers thus shutting down generators. |

</nord-table>

### Managing Power

By default the generator will only run and ramp up when the batteries need charging so there is minimum management needed. But you can set a minimum generate rate by setting the `Min Generator Rate` value using the switch for the minimum rate and turning on `Min Gen`.

## Scanning Asteroids

![Scanner](https://github.com/EGO-Tech/starbase-ships/raw/main/hexxer_trio/images/scanner.jpg)

`Scan` turns on the material scanner. The beam has a range of 100m.
Point the beam at an asteroid and `Material` will show the materials in the asteroid along with the volume of each in stacks.
`Credits` will show the _estimated_ amount of credits you will get for the asteroid if you drop it off at Origin stations.
The calculation is 158.8% (worked out this with testing) of the cost of ore of the vendor price. **This only has data for safe zone materials.** The total volume of the asteroid in Mv is also shown.

## Loading Asteroids

![Pilot Left Console](https://github.com/EGO-Tech/starbase-ships/raw/main/hexxer_trio/images/pilot_left_console.jpg)

<nord-table>

| Interface | Function |
|---|---|
| Cargo `Load`, `Toggle` & `Distance` | Individual cargo loading controls. |
| Cargo `Scan` & `Reset` | Individual cargo scanning controls. |
| `HoldTop`, `HoldRight` & `HoldLeft` | Individual cargo estimated credits. |
| `Total Credits (k)` | Total estimated credits currently held in all cargo holds. |
| `Unload` | Turns off all cargo lock beams. |

</nord-table>

Approach an asteroid by pointing the one of the cargo rangefinders at an asteroid and activating `Load` on the **specific cargo compartment** to approach.
This will guide the ship to around 6m of the asteroid. Once the asteroid is in place the cargo lock beam should activate itself.

All these can be done with the automated `Load` function on **the pilot center console**. This will load asteroid in the order of top, bottom right and finally bottom left. Point the correct rangefinder at the asteroid you wish to load and activate `Load`. This is activate the `Load` of the correct compartment.

Once the asteroid is locked, the asteroid will be scanned and the estimated credits value of the asteroid will be displayed in the relevant `HoldTop`, `HoldRight` and `HoldLeft`. The `Total Credits` for all hold will also be shown.

`Unload` will turn of all cargo lock beams and also reset all hold scans.

## Other Stuff

### Timer

On the pilot left console there is a `Timer` panel which acts as a timer. It will run when the ship is active and show total time in years, weeks, days, hours, minutes and seconds. To reset the timer, use your universal tool (`U` key) and clear the value of the `Timer` field.
