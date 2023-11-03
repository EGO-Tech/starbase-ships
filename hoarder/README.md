# Hoarder by EGOTech

[![CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)
[![Version](https://img.shields.io/static/v1?label=Version&message=1.0.0&color=blue)](#changelog)
[![Blueprint](https://img.shields.io/static/v1?label=Blueprint&message=Free%20Download&color=brightgreen)](#download-blueprint)

The Hoarder is a 1436 crate hauler and is a no frills ship, designed specifically to haul ore between nearby capital ships and/or stations with its short range and low speed.
The blueprint is provided for [free](#download-blueprint). All [feedback](#providing-feedback) is welcome and in game tips (in-game name Egomaniac) are appreciated. However support will be limited but I will try my best.

[Starbase Ship Shop Page](https://sb-creators.org/makers/Egomaniac/ship/%5BFREE%5D%20Hoarder)

<img src="photos/20231103135119_1.jpg" alt="Hoarder" width="400" /> <img src="photos/20231103135048_1.jpg" alt="Hoarder" width="400" /> <img src="photos/20231103134753_1.jpg" alt="Hoarder" width="400" />
<img src="photos/20231103134837_1.jpg" alt="Hoarder" width="400" /> <img src="photos/20231103135106_1.jpg" alt="Hoarder" width="400" /> <img src="photos/20231103134942_1.jpg" alt="Hoarder" width="400" />
<img src="photos/20231103134925_1.jpg" alt="Hoarder" width="400" /> <img src="photos/20231103154937_1.jpg" alt="Hoarder" width="400" /> <img src="photos/20231103154943_1.jpg" alt="Hoarder" width="400" />

More photos in the [`photos` folder](photos)

## Features

The ship has the following features:

- 1436 crates
- Standard Cruise function
- Turtle and Sloth functions with adjustable rates
- Transponder system with ping function
- Auto generator rate script with adjustable minimum rate
- 12 T2 generators enhanced with two T1 enhancers each with 12 T2 fuel chambers
- Radiators that provide more than adequate cooling
- Two large propellant tanks with 24,000,000 units of propellant
- 60 batteries
- Eight T2 box and 112 T2 triangle thrusters providing forward thrust
- 44 T2 triangle thrusters providing braking thrust
- 80 T2 triangle thrusters for maneuvers
- Speedometer
- Timer panel
- Odometer panel
- Many extra slots for YOLOL or memory chips
- Top speed of 75m/s empty

## Changelog

### v1.0.0 (Current) - 03/11/2023

- Initial release

## Build Cost

![Ship Build Cost](images/build_cost.png)

> TIP: You can craft your own crates, generators (T2), box and triangle thruster components (T2) and plasma thrusters to reduce assembly cost.

## Download Blueprint

The blueprint file is available in the `blueprints` folder [here](https://github.com/EGO-Tech/starbase-ships/raw/main/hoarder/blueprints/hoarder.fbe).

## Known Issues

- The ship can run out of power when running at full thrust. Turn on `Min Gen` at 50 to avoid this when running at full thrust.
- The ship is pretty much at its voxel limit so any additions or changes may be difficult without sacrificing crates.

## Usage

To enter the ship, there is a button on right side of the front of the ship that will open the `Door`.

### Flying the Ship

![Pilot Center Console](images/pilot_center_console.jpg)

The left lever on the center console controls backwards thrust (braking) and the right lever controls forward thrust.

| Interface | Function |
|---|---|
| `Speed` | Current speed in metres per second. |
| `ForwardThrust` | Current forward thrust, maximum of 10,000 units |
| `Cruise` | Activates cruise control, forward thrust will not reset to zero unless turned down. |
| `Turtle` | Activates turtle mode which sets forward thrust to a maximum limit of `TurtleRate` of full thrust. |
| `Sloth` | Activates the low sensitvity mode of pitch and yaw by limiting thrust. Use the `Sensitivity` switch to set the maximum thrust rate of sloth mode.|
| `Aim` | Reduces the response time of key presses for pitch and yaw. |
| `Guides` & `Distance` | Activates forward rangefinders, with `Distance` showing distance to object detected by center rangefinder. |
repsective corner shows distance to the ground. |
| `SafeZone` | Whether current location is in the safe zone. |
| `StrengthFactor` | Current strength of ship. May fluctuate as ore crates are filled. Anything below 1.0 means ship is damaged. |
| `Timer` | See [Timer](#timer). |
| `Odometer` | See [Odometer](#odometer). |
| Transponder `Toggle` & `Ping` | Transponder controls, `Toggle` turns on and off ship transponder while `Ping` will activate transponder for three seconds |

**NOTE:** For safety, firing full braking thrust will deactivate `Cruise`.

### Managing Power and Fuel

![Pilot Right Console](images/pilot_right_console.jpg)

| Interface | Function |
|---|---|
| `Propellant` | Total propellant remaining in propellant tanks, maximum of 72,000,000 units. |
| `PropTime` | Time and distance remaining of propellant based on current usage. |
| `FuelTime` | Time and distance remaining of fuel based on current usage. |
| `Fuel Rod 1` to `Fuel Rod 12` | Fuel remaining on fuel rods in individual fuel chambers, maximum of 300,000 units for each. |
| `Generator` | Current generator rate, maximum of `Generator Limit`. |
| `Min Gen` & `Min Generator Limit` | Toggle and sets minimum generator rate. See [Managing Power](#managing-power). |
| `Shutdown` | Will turn off all fuel chambers thus shutting down generators. |
| `Battery` | Shows current battery charge of the batteries, maximum of 10,000 units. |
| `HeatTransferRate` | Current heat transfer rate of the heat sinks, maximum of 100%. |
| `Flow In` & `Flow Out` | Toggle flow modes of resource bridges. See [Refueling Propellant](#refueling-propellant). |
| `Lights` | Turns on and off internal lights. |
| `Door` | Opens or closes ship entry door. |
| `Canopy` | Opens or closes ship entry door. |

#### Managing Power

By default the generator will only run and ramp up when the batteries need charging so there is minimum management needed. But you can set a minimum generate rate by setting the `Min Generator Limit` value using the switch for the minimum rate and turning on `Min Gen`.

#### Refueling Propellant

All five resource bridges can be used for refuelling propellant. To refuel from another ship, turn off `Flow Out` on the pilot right side console and leave `Flow In` turned on. Then connect a resource bridge to the other ship. To refuel another ship, do the opposite, `Flow Out` turned on and `Flow In` turned off.

Remember to turn `Flow In` and `Flow Out` back on if you are using the Endo to collect ore via any of the ship's resource bridges.

The propellant tanks are also easily accessible for swapping or crafting refills.

### Other Stuff

#### Timer

On the pilot center console there is a `Timer` panel which acts as a timer. It will run when the ship is active and show total time in years, weeks, days, hours, minutes and seconds. To reset the timer, hold down the `Timer` of `Hold to reset`` button on the pilot left console.

#### Odometer

On the pilot center console there is a `Odometer` panel which will keep track of the ship's estimated flight distance based on speed. To reset the trip odometer, hold down the `Trip` of `Hold to reset` button on the pilot left console.

## Providing Feedback

[![EGOTech Discord](https://discordapp.com/api/guilds/1013328685564178472/widget.png?style=banner2)](https://discord.gg/BKwVGvncmN)

I can be found in-game as Egomaniac and on discord as @vinteo81 (vinteo#4211). Feel free to contact me and provide feedback or if you need help. Pull requests are also welcomed for scripts changes/fixes.

I would also love to see any modifications or improvements you have made, so feel free to share! I hope to learn from the community and may also incorporate your changes into future versions.

Of course in-game tips are greatly appreciated.

## Frequently Asked Questions

### Can I sell ships based on this blueprint?

No.

## Designed by EGOTech

![EGOTech](../others/egotech/logos/egotech_logo_light.png)
