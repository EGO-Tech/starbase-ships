# Hexxer

[![CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)
[![Version](https://img.shields.io/static/v1?label=Version&message=1.0.1&color=blue)](#changelog)
[![Blueprint](https://img.shields.io/static/v1?label=Blueprint&message=Free%20Download&color=brightgreen)](#download-blueprint)

The Hexxer is a ship for hauling small asteroids, designed to be used in the safe zone. It uses six tractor beams to pull asteroids into six compartments of cargo lock beams in a hex pattern.
It has load automation to approach and load asteroids in the right order to balance the ship as much as possible as well as a material scanner that gives estimated credits for selling the asteroids.
It has similar functions to the [Rocker](../rocker) but loads a little quicker and has one more compartment.

If you like safe zone asteroid hauling, please consider the [Rocker](../rocker) or the [Rocker Duo](../rocker_duo) as well.

The blueprint is provided for [free](#download-blueprint). All [feedback](#providing-feedback) is welcome and in game tips (in-game name Egomaniac) are appreciated. However support will be limited but I will try my best.

[Starbase Ship Shop Page](https://sb-creators.org/makers/Egomaniac/ship/%5BFREE%5D%20Hexxer)

The Hexxer (v1.0.0) is also available to buy in game at Hangar Showroom 1 of Rando 1 Ship Shop at stations with Rando ship shops.

<img src="photos/20211130202523_1.jpg" alt="Hexxer" width="400" /> <img src="photos/20211130202716_1.jpg" alt="Hexxer" width="400" /> <img src="photos/20211130202726_1.jpg" alt="Hexxer" width="400" />
<img src="photos/20211130202735_1.jpg" alt="Hexxer" width="400" /> <img src="photos/20211130202952_1.jpg" alt="Hexxer" width="400" /> <img src="photos/20211130200338_1.jpg" alt="Hexxer" width="400" />
<img src="photos/20211130200911_1.jpg" alt="Hexxer" width="400" /> <img src="photos/20211130203152_1.jpg" alt="Hexxer" width="400" /> <img src="photos/20211130215537_1.jpg" alt="Hexxer" width="400" />

More photos in the [`photos` folder](photos)

## Videos

| Channel | Video |
| --- | --- |
| [CrispyChestnuts](https://www.youtube.com/channel/UCZuFhUb3UwEfSiUvIZJJ55Q) | [Crispy demos the Hexxer by Egomaniac](https://www.youtube.com/watch?v=dbKt1CyBivc) |

## Features

The ship has the following features:

- Standard Cruise function
- Turtle and Sloth function with adjustable rates
- 15 T2 generators with five T2 fuel chambers and 10 spare rods on racks
- Four medium propellant tanks with 16,000,000 units of propellant
- 52 batteries
- 72 T2 triangle thrusters providing forward thrust
- 32 T2 manuever thrusters providing braking thrust
- 48 T2 manuever thrusters
- Six tractors beam which will load asteroids into six compartments with cargo lock beams
- Load automation that will load asteroids into the right container in the right order
- Material scanner that will output the materials in stacks as well as the estimated credits you will get for dropping the asteroid off at Origin stations
- Rangefinder to help judge forward distance and for approach
- Resource bridge for refueling
- 148m/s when empty

## Changelog

### v1.0.1 (Current) - 03/03/2022

- Added `Unload` button which turns off all cargo lock beams
- Removed some thin floor plates on either side of cockpit for easier access to levers
- Painted tractor beam and scanner mounts black
- Painted triangle thrusters' bodies black and nozzles red

### v1.0.0 (Ship Shop Version) - 01/12/2021

- Initial release

## Build Cost

![Ship Build Cost](images/build_cost.png)

TIP: You can craft your own generators (T2), box thruster components (T2) and ship tools to reduce assembly cost.

## Download Blueprint

The blueprint file is available in the `blueprints` folder [here](https://github.com/vinteo/starbase-ships/raw/main/hexxer/blueprints/hexxer.fbe).

## Known Issues

- When asteroids are loaded more on one side, the ship can become unbalanced and appraoch will not work as well. Manual appraoch would probably be better.
- Currently there are no navigation features but will possibly add ISAN and Compass in the future if this ship becomes useful to Endos

## Usage

### Flying the Ship

![Pilot Console](images/pilot_center_console.jpg)

The left lever on the center console controls backwards thrust (braking) and the right lever controls forward thrust.

| Interface | Function |
|---|---|
| `ForwardThrust` | Current forward thrust, maximum of 10,000 units |
| `Cruise` | Activates cruise control, forward thrust will not reset to zero unless turned down. |
| `Turtle`, `TurtleRate` | Activates turtle mode which sets forward thrust to a maximum limit of `TurtleRate` (percent) of full thrust. |
| `Sloth`, `Sensitivity` | Activates sloth mode which sets yaw and pitch thrust to a maximum limit of `Sensitivity` (percent) of full thrust. |
| `Aim` | Reduces the response time of key presses for pitch and yaw. |
| `ID` | Toggle for the transponder. |
| `Distance` & `Range` | Distance for rangefinder. `Range` toggles the rangefinders.|
| `Scan`, `Material`, & `Credits` | Material scanning controls. See [Scanning Asteroids](#scanning-asteroids). |
| `Approach` & `Load` | Cargo loading controls. See [Loading Asteroids](#loading-asteroids). |

### Managing Power and Fuel

![Pilot Right Console](images/pilot_right_console.jpg)

| Interface | Function |
|---|---|
| `Propellant` | Total propellant remaining in propellant tanks, maximum of 10,000,000 units. |
| `Battery` | Shows current battery charge of the 40 batteries, maximum of 10,000 units. |
| `Generator` | Current generator rate, maximum of 100%. |
| `Min Generator Rate` & `Min Gen` | Toggle and sets minimum generator rate. See [Managing Power](#managing-power). |
| `RadiationRate` | Current radiation rate of the radiators, maximum of 100%. If it is hitting 100% your radiators may be damaged. |
| `Fuel Rod 1`, `Fuel Rod 2`, `Fuel Rod 3`, `Fuel Rod 4`, `Fuel Rod 5` | Total fuel remaining on fuel rods, maximum of 300,000 units each. |
| `Shutdown` | Will turn off all fuel chambers thus shutting down generators. |

#### Managing Power

By default the generator will only run and ramp up when the batteries need charging so there is minimum management needed. But you can set a minimum generate rate by setting the `Min Generator Rate` value using the switch for the minimum rate and turning on `Min Gen`.

### Scanning Asteroids

![Scanner](images/scanner.jpg)

`Scan` turns on the material scanner. The beam has a range of 100m.
Point the beam at an asteroid and `Material` will show the materials in the asteroid along with the volume of each in stacks.
`Credits` will show the _estimated_ amount of credits you will get for the asteroid if you drop it off at Origin stations.
The calculation is 158.8% (worked out this with testing) of the cost of ore of the vendor price. **This only has data for safe zone materials.** The total volume of the asteroid in Mv is also shown.

### Loading Asteroids

![Pilot Left Console](images/pilot_left_console.jpg)

| Interface | Function |
|---|---|
| Cargo `Load` & `Toggle` | Individual cargo loading controls. |
| `Unload` | Turns off all cargo lock beams. |
| `StrengthFactor` | Current strength of ship. May fluctuate as ore crates are filled. Anything below 1.0 means ship is damaged. |
| `DurabilityErrors` | Number of durability errors on the ship. If the asteroids are not position correctly it may cause errors |
| `Timer` | See [Timer](#timer). |

Approach an asteroid by pointing the center rangefinder at an asteroid and activating `Approach`. This will guide the ship to around 10m of the asteroid.

To load asteroids, use `Load` on the **specific cargo compartment** to use its beam to load.

Once the asteroid is in place the cargo lock beam should activate itself and the tractor beam will reset. If it does not activate for any reason, you can use `Toggle` to active the cargo lock beam manually and it will also reset the tractor beam.

All these can be done the automated `Load` function on **the pilot center console**. Point the rangefinder at the asteroid you wish to load and activate `Load`. This is activate `Approach` and `Scan` as well as smartly activating the `Load` of the right compartment. So you can just use `Load` each time and it will load the asteroids to the right compartment in the right order.

### Other Stuff

#### Timer

On the pilot left console there is a `Timer` panel which acts as a timer. It will run when the ship is active and show total time in years, weeks, days, hours, minutes and seconds. To reset the timer, use your universal tool (`U` key) and clear the value of the `Timer` field.

## Providing Feedback

I can be found in-game as Egomaniac and on discord as vinteo#4211. Feel free to contact me and provide feedback or if you need help. Pull requests are also welcomed for scripts changes/fixes.

I would also love to see any modifications or improvements you have made, so feel free to share! I hope to learn from the community and may also incorporate your changes into future versions.

Of course in-game tips are greatly appreciated.

## Frequently Asked Questions

### Can I sell ships based on this blueprint?

No.

### How much can I make from hauling safe zone asteroids?

It is not very lucrative, but here is an estimated breakdown of 45Mv asteroids (with a rough breakdown of 35Mv shell and 10Mv core) from the safe zone I got during testing.

| Material | Volume | Credits |
| --- | --- | --- |
| Ice/Vokarium | 45Mv | 36k |
| Ajatite/Charodium | 45Mv | 58k |
| Valkite/Bastium | 45Mv | 27k |
| Ice/Nhurgite | 45Mv | 56k |
