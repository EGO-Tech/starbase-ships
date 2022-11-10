# Bugger by EGOTech

[![CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)
[![Version](https://img.shields.io/static/v1?label=Version&message=1.0.2&color=blue)](#changelog)
[![Blueprint](https://img.shields.io/static/v1?label=Blueprint&message=Free%20Download&color=brightgreen)](#download-blueprint)

The Bugger is a 448 ore crate capacity mining ship with 10 sweeping mining lasers drill for surface mining operations. It is designed to work in conjunction with a moon base and a separate hauler as it is not the quickest ship.
The blueprint is provided for [free](#download-blueprint). All [feedback](#providing-feedback) is welcome and in game tips (in-game name Egomaniac) are appreciated. However support will be limited but I will try my best.

A premium version, the [Bugger X](./premium/) is available for purchase on the [EGOTech Discord server](https://discord.gg/BKwVGvncmN).

[Starbase Ship Shop Page](https://sb-creators.org/makers/Egomaniac/ship/%5BFREE%5D%20Bugger)

<img src="photos/20220924104458_1.jpg" alt="Bugger" width="400" /> <img src="photos/20220924104254_1.jpg" alt="Bugger" width="400" /> <img src="photos/20220924101255_1.jpg" alt="Bugger" width="400" />
<img src="photos/20220924101305_1.jpg" alt="Bugger" width="400" /> <img src="photos/20221002164231_1.jpg" alt="Bugger" width="400" /> <img src="photos/20221002164258_1.jpg" alt="Bugger" width="400" />
<img src="photos/20221002172634_1.jpg" alt="Bugger" width="400" /> <img src="photos/20221002160443_1.jpg" alt="Bugger" width="400" /> <img src="photos/20220924100450_1.jpg" alt="Bugger" width="400" />
<img src="photos/20220924100440_1.jpg" alt="Bugger" width="400" /> <img src="photos/20220924100430_1.jpg" alt="Bugger" width="400" /> <img src="photos/20220924100412_1.jpg" alt="Bugger" width="400" />
<img src="photos/20221003175305_1.jpg" alt="Bugger" width="400" /> <img src="photos/20221003175307_1.jpg" alt="Bugger" width="400" /> <img src="photos/20221003175237_1.jpg" alt="Bugger" width="400" />

More photos in the [`photos` folder](photos)

## Features

The ship has the following features:

- 448 ore crates
- Standard Cruise function
- Turtle and Sloth functions with adjustable rates
- Transponder system with ping function
- Separate mining seat for mining operations with view of lasers and ground
- Row of 10 mining lasers that sweep from side to side
- Auto mine function that auto advances (with adjustable thrust and speed) ship for easy mining
- "Feelers" to keep ship in hover mode while mining
- Four ore collectors
- Auto hover function
- Two external and three internal resource bridges
- Auto generator rate script with adjustable minimum rate
- 36 T3 generators with 36 T2 enhancers fueled by 12 T3 fuel chambers and 24 spare rods on racks
- Radiators and heat sinks that provide more than adequate cooling
- Eight large propellant tanks with 96,000,000 units of propellant
- Propellant time and fuel time panels
- 182 batteries
- 20 T2 box and 80 T2 triangle thrusters providing forward thrust
- 32 T2 triangle thrusters providing braking thrust
- 104 T2 triangle thrusters for maneuvers, with extra thrust upwards
- Basic crafting bench to craft refills plus the tools and advanced bench
- Speedometer
- Timer panel
- Odometer panel
- Many extra slots for YOLOL or memory chips
- Top speed of 100m/s when empty

## Changelog

### v1.0.2 (Current) - 05/11/2022

- Piped six heat sinks that were not piped
- Removed now 12 redundant heat sinks

### v1.0.1 - 08/10/2022

- Added "feelers" to keep ship in hover mode while mining
- Fixed `Shutdown` buttons' button style
- Moved pilot seat slightly forward

### v1.0.0 - 03/10/2022

- Initial release

## Build Cost

![Ship Build Cost](images/build_cost.png)

TIP: You can craft your own crates, generators (T3), box and triangle thruster components (T2) and ship tools to reduce assembly cost.

## Download Blueprint

The blueprint file is available in the `blueprints` folder [here](https://github.com/vinteo/starbase-ships/raw/main/bugger/blueprints/bugger.fbe).

## Known Issues

- Hover doesn't work well if the ground is not flat or the ship is not aligned to the surface of the ground.

## Usage

To enter the ship, there is a button on bottom of the ship that will open `Hatch`. Once inside you can also open and close the cockpit glass `Canopy`. Buttons for these are available in the pilot left side consoles.

### Flying the Ship

![Pilot Center Console](images/pilot_center_console.jpg)

The left lever on the center console controls backwards thrust (braking) and the right lever controls forward thrust.

| Interface | Function |
|---|---|
| `Speed` | Current speed in metres per second. |
| `ForwardThrust` | Current forward thrust, maximum of 10,000 units |
| `Throttle` | Current throttle level, maximum of 100 percent |
| `Cruise` | Activates cruise control, forward thrust will not reset to zero unless turned down. |
| `Turtle` | Activates turtle mode which sets forward thrust to a maximum limit of `TurtleRate` of full thrust. |
| `Sloth` | Activates the low sensitvity mode of pitch and yaw by limiting thrust. Use the `Sensitivity` switch to set the maximum thrust rate of sloth mode.|
| `Aim` | Reduces the response time of key presses for pitch and yaw. |
| `Hover`, `Hover Distance` | `Hover` will move ship up and down towards `Hover Distance`. |
| `Guide`, `FrontRight`, `FrontLeft`, `BackRight` & `BackLeft` | `Guide` activates rangefinders at each corner of the base of the ship. Each repsective corner shows distance to the ground. `Red` warning lights flash when ground is less that `Hover Distance`. |
| `Range` & `Distance` | Activates forward rangefinders, with `Distance` showing distance to object detected by center rangefinder. |
| `Mine`, `Advance`, `Advance Thrust` & `Advance Time` | Mining controls. See [Mining](#mining). |
| `SafeZone` | Whether current location is in the safe zone. |
| `StrengthFactor` | Current strength of ship. May fluctuate as ore crates are filled. Anything below 1.0 means ship is damaged. |
| Transponder `Toggle` & `Ping` | Transponder controls, `Toggle` turns on and off ship transponder while `Ping` will activate transponder for three seconds |
| `Timer` | See [Timer](#timer). |
| `Odometer` | See [Odometer](#odometer). |

### Managing Power and Fuel

![Pilot Right Console](images/pilot_right_console.jpg)

| Interface | Function |
|---|---|
| `Propellant` | Total propellant remaining in propellant tanks, maximum of 96,000,000 units. |
| `PropTime` | Time and distance remaining of propellant based on current usage. Distance is calculated from speed. |
| `FuelTime` | Time and distance remaining of fuel based on current usage. Distance is calculated from speed. |
| `WithBackup` | Same as FuelTime but takes into account backup rods available. Use the switch for `Backup Rods` to set the number of backup rods available. As standard there are 24 extra rods. |
| `Fuel Rod 1` to `Fuel Rod 12` | Fuel remaining on fuel rods in individual fuel chambers, maximum of 300,000 units for each. |
| `Generator` | Current generator rate. |
| `Min Gen` & `Min Generator Limit` | Toggle and sets minimum generator rate. See [Managing Power](#managing-power). |
| `Shutdown` | Will turn off all fuel chambers thus shutting down generators. |
| `Battery` | Shows current battery charge of the batteries, maximum of 10,000 units. |
| `HeatTransferRate` | Current heat transfer rate of the heat sinks, maximum of 100%. |
| `Flow In` & `Flow Out` | Toggle flow modes of resource bridges. See [Refueling Propellant](#refueling-propellant). |
| `Lights` | Turns on and off internal lights. |
| `Canopy` | Opens or closes glass canopy. |
| `Hatch` | Opens or closes ship entry hatch. |

#### Managing Power

By default the generator will only run and ramp up when the batteries need charging so there is minimum management needed. But you can set a minimum generate rate by setting the `Min Generator Limit` value using the switch for the minimum rate and turning on `Min Gen`.

#### Refueling Propellant

All four resource bridges can be used for refuelling propellant. To refuel from another ship, turn off `Flow Out` on the pilot right side console and leave `Flow In` turned on. Then connect a resource bridge to the other ship. To refuel another ship, do the opposite, `Flow Out` turned on and `Flow In` turned off.

Remember to turn `Flow In` and `Flow Out` back on if you are using the Endo to collect ore via any of the ship's resource bridges.

### Mining

![Mining Console](images/mining_console.jpg)

Align the ship to the ground and use `Hover` to automatically move the ship to within the `Hover Distance`.

Activate `Lasers` to turn on the mining lasers which will automatically sweep from side to side. Activating `Advance` will slowly move the ship forward based on `Advance Time` and `Advance Thrust`. Adjust `Advance Time` (period to wait before each advance in seconds) and `Advance Thrust` (amount of forward thrust when advancing) if needed.

> TIP: Increase `Advance Thrust` if needed as the ship gains more mass from filling up.

`Collect` turns on the four ore collectors.

`Mine` will activate automated mining, which will activate `Lasers`, `Advance` and `Collect`.

TIP: Turn on `Min Gen` and allow the generators to ramp up before starting to mine. Continous use of the lasers and collectors at the same time requires a `Min Generator Limit` of around 85%.

### Other Stuff

#### Timer

On the pilot center console there is a `Timer` panel which acts as a timer. It will run when the ship is active and show total time in years, weeks, days, hours, minutes and seconds. To reset the timer, hold down the `Reset Timer` button on the pilot left console.

#### Odometer

On the pilot right console there is a `Odometer` panel which will keep track of the ship's estimated flight distance based on speed. To reset the trip odometer, hold down the `Odometer` `Reset Trips` button on the pilot left console.

## Providing Feedback

[![EGOTech Discord](https://discordapp.com/api/guilds/1013328685564178472/widget.png?style=banner2)](https://discord.gg/BKwVGvncmN)

I can be found in-game as Egomaniac and on discord as vinteo#4211. Feel free to contact me and provide feedback or if you need help. Pull requests are also welcomed for scripts changes/fixes.

I would also love to see any modifications or improvements you have made, so feel free to share! I hope to learn from the community and may also incorporate your changes into future versions.

Of course in-game tips are greatly appreciated.

## Frequently Asked Questions

### Can I sell ships based on this blueprint?

No.

## Designed by EGOTech

![EGOTech](../others/egotech/logos/egotech_logo_light.png)
