# Jabber by EGOTech

[![CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)
[![Version](https://img.shields.io/static/v1?label=Version&message=1.1.0&color=blue)](#changelog)
[![Blueprint](https://img.shields.io/static/v1?label=Blueprint&message=Free%20Download&color=brightgreen)](#download-blueprint)

The Jabber is a fast light fighter with four lasers. Although it has very light armour, it is very fast and quite maneuverable. The blueprint is provided for [free](#download-blueprint). All [feedback](#providing-feedback) is welcome and in game tips (in-game name Egomaniac) are appreciated. However support will be limited but I will try my best.

## Changelog

View changelog [here](CHANGELOG.md)

## Build Cost

![Ship Build Cost](images/build_cost.png)

> TIP: You can craft your own crates, generators (T2), box and triangle thruster components (T2) and ship weapons to reduce assembly cost.

## Download Blueprint

The blueprint file is available in the `blueprints` folder [here](https://github.com/EGO-Tech/starbase-ships/raw/main/jabber/blueprints/jabber.fbe).

## Usage

To enter the ship, there is a button in front the cockpit that will open the glass `Canopy`. There is also a button for `Hatch` below the ship. Buttons for these are available in the pilot console.

### Flying the Ship

![Pilot Console](images/pilot_center_console.jpg)

The left lever on the center console controls backwards thrust (braking) and the right lever controls forward thrust.

| Interface | Function |
|---|---|
| `ForwardThrust` | Current forward thrust, maximum of 10,000 units |
| `Cruise` | Activates cruise control, forward thrust will not reset to zero unless turned down. |
| `Aim` | Reduces the response time of key presses for pitch and yaw. |
| `Turtle` | Activates turtle mode which sets forward thrust to a maximum limit of `TurtleRate` of full thrust. |
| `Sloth` | (Right Console) Activates the low sensitvity mode of pitch and yaw by limiting thrust. Use the `Sensitivity` switch to set the maximum thrust rate of sloth mode.|
| Transponder `Toggle` & `Ping` | Transponder controls, `Toggle` turns on and off ship transponder while `Ping` will activate transponder for three seconds |
| `Speed` | Current speed of the ship in m/s. |
| `ISAN2`, `Heading`, `Dest`, `DTW`, `Deltas`, `WP`, `Up`, `Down`, `Save` & `Home` | See [ISAN Waypoint System](https://github.com/Archaegeo/Starbase/tree/45a9bb464cb71d7de7a214f8e665111d6b2b5989/ISAN-Waypoint%20System) for more informaton. |
| `Timer` | See [Timer](#timer). |
| `Odometer` | See [Odometer](#odometer). |
| `HeatTransferRate` | Current heat transfer rate of the heat sinks, maximum of 100%. |
| `StoredHeat` | Current stored heat in the heat sinks, maximum of 15,000 units. |
| `Shutdown` | Turns off fuel chambers. |
| `Battery` | Shows current battery charge of the batteries, maximum of 10,000 units. |
| `Generator` | Current generator rate, maximum of 100%. |
| `Min Generator Limit` & `Min Gen` | Toggle and sets minimum generator rate. See [Managing Power](#managing-power). |
| `Fuel Rod Left` & `Fuel Rod Right` | Fuel remaining on fuel rods in individual fuel chambers, maximum of 300,000 units for each. |
| `Propellant` | Total propellant remaining in propellant tanks, maximum of 8,000,000 units. |
| `PropTime` | Time and distance remaining of propellant based on current usage. |
| `FuelTime` | Time and distance remaining of fuel based on current usage. |
| `Flow In` & `Flow Out` | Toggle flow modes of resource bridges. See [Refueling Propellant](#refueling-propellant). |
| `Canopy` | Open and closes the cockpit glass canopy. |
| `Hatch` | Open and closes the hatch below the ship. |
| `Service` | Open and closes the service hatches on either side the ship for access to the fuel rods and ammo magazines. |

### Combat

| Interface | Function |
|---|---|
| `Fire` | Fire lasers, best bound to a key and held down to fire. |
| `Combat` | Activates combat mode which enables lasers and starts charging them. |
| `Crosshair` | Activates beam crosshair. |
| `Laser Ammo Right 1`, `Laser Ammo Right 2`, `Laser Ammo Left 1` & `Laser Ammo Left 2` | Ammo remaining on lasers, maximum of 600 units for each. |
| `Laser Ammo Heat 1`, `Laser Heat Right 2`, `Laser Heat Left 1` & `Laser Heat Left 2` | Heat generated on lasers, maximum of 1,000 units for each. |
| `Laser Ammo Power 1`, `Laser Power Right 2`, `Laser Power Left 1` & `Laser Power Left 2` | Power remaining on lasers, maximum of 5,000 units for each. |
| `Red` lights | Each row of four lights for each laser representing heat. Each light represents 200 units of power. Blinks when heat reaches 600 units. |
| `Blue` lights | Each row of four lights for each laser representing ammo. Each light represents 150 ammo. Blinks when ammo drops below reaches 150. |
| `Green` lights | Each row of four lights for each laser representing power. Each light represents 1,250 units of power. Blinks when power drops below 1,250. |

When entering combat, activate `Combat` to turn on lasers and start charging the lasers. `Crosshair` activates the beam crosshair for target aimming. Use `Fire` to fire the lasers. It is best used bound to a key and then holding down the key to fire. Lasers fire alternating in pairs of one each of each side.

For longer sustained firing, activate `Min Gen` with a `Min Generator Rate` of 100.

Open the `Service` hatches for access to the ammo magazines.

#### Managing Power

By default the generator will only run and ramp up when the batteries need charging so there is minimum management needed. But you can set a minimum generate rate by setting the `Min Generator Limit` value using the switch for the minimum rate and turning on `Min Gen`.

Open the `Service` hatches for access to the fuel rods.

#### Refueling Propellant

The resource bridge below the nose of the ship can be used for refuelling propellant. To refuel from another ship, turn off `Flow Out` on the pilot console and leave `Flow In` turned on. Then connect a resource bridge to the other ship. To refuel another ship, do the opposite, `Flow Out` turned on and `Flow In` turned off.

### Other Stuff

#### Timer

On the pilot center console there is a `Timer` panel which acts as a timer. It will run when the ship is active and show total time in years, weeks, days, hours, minutes and seconds. To reset the timer, use your universal tool (`U` key) and clear the value of the `Timer` field.

#### Odometer

On the pilot right console there is a `Odometer` panel which will keep track of the ship's estimated flight distance based on speed. To reset the trip odometer, use your universal tool (`U` key) and clear the value of the `Odometer` field.

## Providing Feedback

[![EGOTech Discord](https://discordapp.com/api/guilds/1013328685564178472/widget.png?style=banner2)](https://discord.gg/BKwVGvncmN)

I can be found in-game as Egomaniac and on discord as @vinteo81 (vinteo#4211). Feel free to contact me and provide feedback or if you need help. Pull requests are also welcomed for scripts changes/fixes.

I would also love to see any modifications or improvements you have made, so feel free to share! I hope to learn from the community and may also incorporate your changes into future versions.

Of course in-game tips are greatly appreciated.

## Designed by EGOTech

![EGOTech](../others/egotech/logos/egotech_logo_light.png)
