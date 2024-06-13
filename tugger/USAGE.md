# Usage

To enter the ship, there is a button for `Canopy` on top of the ship. Button for `Canopy` are available in the pilot left side console and above the pilot seat.

## Flying the Ship

![Pilot Console](https://github.com/EGO-Tech/starbase-ships/raw/main/tugger/images/pilot_center_console.jpg)

<nord-table>

| Interface | Function |
|---|---|
| `ForwardThrust` | Current forward thrust, maximum of 10,000 units |
| `Speed` | Current speed in metres per second. |
| `Distance` | Activates forward rangefinder, with `Distance` showing distance to object. |
| `Cruise` | Activates cruise control, forward thrust will not reset to zero unless turned down. |
| `Aim` | Reduces the response time of key presses for pitch and yaw. |
| `Turtle` | Activates turtle mode which sets forward thrust to a maximum limit of `TurtleRate` of full thrust. |
| `Sloth` | (Right Console) Activates the low sensitvity mode of pitch and yaw by limiting thrust. Use the `Sensitivity` switch to set the maximum thrust rate of sloth mode.|
| Transponder `Toggle` & `Ping` | [Transponder](https://starbase.egotech.space/pages/systems/utility/#transponder) controls, `Toggle` turns on and off ship transponder while `Ping` will activate transponder for three seconds |
| `POS`, `k` & `Target` | See [Compass System](https://gitlab.com/Firestar99/yolol/-/tree/master/src/compass) for more information. `Target` shows current target destination. |
| `Tow Status`, `Tow Mass`, `Tow` & `Auto Gen` | Towing controls, see [Towing ships](#towing-ships). |
| `Timer` | See [Timer](https://starbase.egotech.space/pages/systems/utility/#timer). |
| `Odometer` | See [Odometer](https://starbase.egotech.space/pages/systems/utility/#odometer). |
| `SafeZone` | Whether current location is in the safe zone. |
| `StrengthFactor` | Current strength of ship. May fluctuate as ore crates are filled. Anything below 1.0 means ship is damaged. |
| `Canopy` | Open and closes the cockpit glass canopy. |
| `Chair` | Spins the pilot chair between forward facing and backwards facing. |

</nord-table>

See [Flight Systems](https://starbase.egotech.space/pages/systems/flight/) on how to fly the ship and use its flight systems.

### Managing Power and Fuel

![Pilot Right Console](https://github.com/EGO-Tech/starbase-ships/raw/main/tugger/images/pilot_right_console.jpg)

<nord-table>

| Interface | Function |
|---|---|
| `Battery` | Shows current battery charge of the batteries, maximum of 10,000 units. |
| `Generator` | Current generator rate, maximum of 100%. |
| `Min Generator Limit` & `Min Gen` | Toggle and sets minimum generator rate. |
| `Fuel Rod 1` to `Fuel Rod 6` | Fuel remaining on fuel rods in individual fuel chambers, maximum of 300,000 units for each. |
| `Shutdown` | Turns off fuel chambers. |
| `HeatTransferRate` | Current heat transfer rate of the heat sinks, maximum of 100%. |
| `StoredHeat` | Current stored heat in the heat sinks, maximum of 15,000 units. |
| `Propellant` | Total propellant remaining in propellant tanks, maximum of 24,000,000 units. |
| `PropTime` | Time and distance remaining of propellant based on current usage. Distance is calculated from speed. |
| `FuelTime` | Time and distance remaining of fuel based on current usage. Distance is calculated from speed. |
| `WithBackup` | Same as FuelTime but takes into account backup rods available. Use the switch for `Backup Rods` to set the number of backup rods available. As standard there are 12 extra rods. |

</nord-table>

See [Power and Fuel Systems](https://starbase.egotech.space/pages/systems/power/) on how to manage ship power and refuel.

### Refilling Propellant

See [Propellant Systems](https://starbase.egotech.space/pages/systems/propellant/) on how to refill propellant.

### Towing Ships

![Pilot Back Console](https://github.com/EGO-Tech/starbase-ships/raw/main/tugger/images/pilot_back_console.jpg)

<nord-table>

| Interface | Function |
|---|---|
| `Tow Status` | Status of tow beam, `0` is off, `1` is on and `2` is locked on. |
| `Tow Mass` | Mass of locked on ship, in kilograms. |
| `Tow` | Activates the tow beam. |
| `Auto Gen` | Activates `Min Gen` with `Min Generator Rate` according to `Tow Mass`. |
| `BackRange` & `Back Distance` | Activates the back facing rangefinders and displays the distance. |

</nord-table>

The tow beam faces out the back of the ship so position the Tugger in front of, with the back facing the ship you wish to tow. Spin the `Chair` around to look out the back window and activate `Tow` to turn on the tow beam. Once the tow beam is locked on the ship, the `Tow Status` will be `2` and the mass of the locked ship will be shown as `Tow Mass` in kilograms.
Activate `Auto Gen` which will then turn on `Min Gen` with a `Min Generator Rate` based off the `Tow Mass`. Wait till the generators reach the targeted rate before flying off.

The Tugger has enough power generation to tow a ship of a mass of up to 7.5ktons or 7,500,000 kilograms. For large ships, it is recommended to turn on `Min Gen` to ramp up the generator before locking on and then activating `Auto Gen` once locked on to adjust the `Min Generator Rate` accordingly.

<nord-banner variant="warning">

**NOTE:** Remember to turn off `Min Gen` after towing to save on fuel.

</nord-banner>
