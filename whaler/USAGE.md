# Usage

To enter the ship, there is are buttons on each side of the front of the ship that will open a `Door` on either side.

## Flying the Ship

![Pilot Top Console](https://github.com/EGO-Tech/starbase-ships/raw/main/whaler/images/pilot_top_console.jpg)

![Pilot Center Console](https://github.com/EGO-Tech/starbase-ships/raw/main/whaler/images/pilot_center_console.jpg)

Both pilot seats have flight controls. The left lever on the main center console controls backwards thrust (braking) and the right lever controls forward thrust.

<nord-table>

| Interface | Function |
|---|---|
| `Speed` | Current speed in metres per second. |
| `ForwardThrust` | Current forward thrust, maximum of 10,000 units |
| `Plasma` & `Plasma Charge Level` | Activates the plasma thrusters and intitiate charging. Plasma thrusters has to be activated and charge level at 1.0 for it to fire. |
| `Throttle` | Current throttle level, maximum of 100 percent |
| `Cruise` | Activates cruise control, forward thrust will not reset to zero unless turned down. |
| `Turtle` | Activates turtle mode which sets forward thrust to a maximum limit of `TurtleRate` of full thrust. |
| `Sloth` | Activates the low sensitvity mode of pitch and yaw by limiting thrust. Use the `Sensitivity` switch to set the maximum thrust rate of sloth mode.|
| `Aim` | Reduces the response time of key presses for pitch and yaw. |
| `Guides` | Activates rangefinders (except center one which can be activated separately) to be used as guide lasers. |
| `Crosshair` | Activates beam crosshair. |
| `Range` & `Distance` | Activates center rangefinder, with `Distance` showing distance to object. |
| `Scanner` & `Scan` | Turns on the [Ore Scanner](#ore-scanner) and shows results of scan. |
| `Combat`, `Fire`, `Weapon Mode`, `LaserAmmo`, `PlasmaAmmo`, `Launch`, `Missile Volley` & `Lock` | Weapon controls. See [Combat](#combat). |
| `Nav`, `Autopilot`, `Avoidance` & `Target` | Autopilot controls. See [Autopilot](#auto-pilot). |
| `ISAN2` | Current ISAN coordinates of ship. |
| `NavGrid`, `NavP`, `NavC` & `Attitude` | [NavGrid](https://github.com/pcbennion/starbase-navgrid) system, see [Using the Waypoint System](#using-the-waypoint-system). |
| `SafeZone` | Whether current location is in the safe zone. |
| `StrengthFactor` | Current strength of ship. May fluctuate as ore crates are filled. Anything below 1.0 means ship is damaged. |
| Transponder `Toggle` & `Ping` | [Transponder](https://starbase.egotech.space/pages/systems/utility/#transponder) controls, `Toggle` turns on and off ship transponder while `Ping` will activate transponder for three seconds |
| `Timer` | See [Timer](https://starbase.egotech.space/pages/systems/utility/#timer). |
| `Odometer` | See [Odometer](https://starbase.egotech.space/pages/systems/utility/#odometer). |

</nord-table>

<nord-banner variant="warning">

**NOTE:** For safety, firing full braking thrust will deactivate `Cruise`.

</nord-banner>

## Combat

Both pilot seats have weapon controls. Activate `Crosshair` for aim assistance.

`Combat` activates combat mode which charges the laser and plasma guns as well as opening hatches for all weapons including the missile launchers.

Hold `Fire` to fire the laser and plasma guns. Use `Weapon Mode` to switch guns or use both.

Hold `Launch` to launch missiles. Use `Missile Volley` to adjust how many missiles are launched at a time.

<nord-banner variant="info">

**NOTE:** `Fire` and `Launch` buttons should be bound for the top pilot seat as the buttons are not readily available on the top pilot console.

</nord-banner>

`LaserAmmo` & `PlasmaAmmo` shows current ammo for each of the guns. The indicator lights on each side of the consoles show laser gun heat (red) and power (blue) levels. All gun heat and power levels can be seen on the main pilot left console. `Missile Pod 1` to `Missile Pod 4` show the current available missiles in each pod.

<nord-banner variant="info">

**TIP:** Remember to turn off `Combat` after combat to save on fuel.

</nord-banner>

### Gun Turrets

There are separate gun turret seats at the front, top and bottom of the ship and each has it own data network and has two autocannons each with laser sights. The front seat is shared with mining lasers and the bottom seat is shared with the tow beam.

For all seats use `Combat` to activate combat mode which will charge the auto cannons and turn on the laser sights. For the front and bottom seats, this will also deactivate the mining lasers and tow beam respectively. For the top and bottom seats, use `Chair` to change to either face the front or back of the ship.

Press `C` to activate mouse aim mode and press `Fire` to fire the autocannons. The red ligts are indicators that the laser sights have detected an object. For safety, the turrets have limited firing windows.

All turret seats have displays for autocannon heat and power levels.

<nord-banner variant="warning">

**NOTE:** Each seat currently has it own ammo storage on the autocannons as the turrets are bugged (See [Known Issues](./#known-issues)).

</nord-banner>

### Reloading

Access the bottom compartment of the ship using the access hatches inside the ship near the entrance doors. There are ammo storages for the laser guns, plasma guns and auto cannons (unused). From there is also access to swap out the plasma gun magazines (optional).

For the laser guns, access to the magazines is available through small hatches in the cockpit so the magazines can be optionally swapped.

The gun turrets currently can only be reloaded by swapping the magazines on the autocannons (See [Known Issues](./#known-issues)).

Access to the missile launches is available through doors at the front of each side pod from inside the ship, which allows the loading of the missiles onto the launchers. Deactivate `Lock` to rearm the launchers and then reactivate `Lock` once done.

<nord-banner variant="warning">

**NOTE:** For missiles, the `Safety` should always be set to `1` and multipart missiles should also be locked by setting `MissileLock` on the fuel module to `1`.

</nord-banner>

## Using the Waypoint System

![Pilot Left Console](https://github.com/EGO-Tech/starbase-ships/raw/main/whaler/images/pilot_left_console.jpg)

### Viewing and Selecting Waypoints

This uses the [NavGrid](https://github.com/pcbennion/starbase-navgrid) system. Use the `Down` and `Up` waypoints selectors to select waypoint. The selected waypoint information is shown on `NavP` and `NavC` panels.

On the pilot center console, `NavGrid` will show the compass towards the selected waypoint while `Attitude` will show the ship's pitch, heading and roll directions. `NavGrid` is best used while not moving.

### Editing and Saving Waypoints

Use `Set` to save waypoint of current location to the current selected waypoint position.

To edit currently selected waypoint, use your `U` tool to add name, X, Y and Z values to `nName`, `nX`, `nY` and `nZ` respectively. Then use the `Save` button to save.

<nord-banner variant="warning">

**NOTE:** Waypoint 1 to 6 are presets and can not be over written.

</nord-banner>

### Loading Waypoint to Auto Pilot

Use `Load to Auto Pilot` to load curretnly selected waypoint to `Target` to be used with the auto pilot system.

## Auto Pilot

The ship uses a modified version of [NavCas](https://github.com/fixerid/sb-projects/tree/main/NavCas) which uses the 3 in 1 ISAN from Compass. Waypoints are loaded from NavGrid waypoint system.

Use while the ship is stationary. Activating `Nav` will start point the ship towards `Target` waypoint and deactivate itself when done. `Autopilot` will activate `Nav` and fly to within 5km of `Target` waypoint.

<nord-banner variant="warning">

**NOTE:** `Nav` may not be very accurate. I recommend using it in conjunction with the NavGrid compass. The `dd` panel on the pilot left console shows debugging information for NavCas.

</nord-banner>

## Resetting Navigation

If ISAN or NavGrid is not working, it can be reset using the `Reset ISAN` button. Press once to take ISAN offline, then press again to reset.

## Managing Power and Fuel

![Pilot Right Console](https://github.com/EGO-Tech/starbase-ships/raw/main/whaler/images/pilot_right_console.jpg)

<nord-table>

| Interface | Function |
|---|---|
| `Propellant` | Total propellant remaining in propellant tanks, maximum of 144,000,000 units. |
| `PropTime` | Time and distance remaining of propellant based on current usage. Distance is calculated from speed. |
| `FuelTime` | Time and distance remaining of fuel based on current usage. Distance is calculated from speed. |
| `WithBackup` | Same as FuelTime but takes into account backup rods available. Use the switch for `Backup Rods` to set the number of backup rods available. As standard there are 20 extra rods. |
| `Fuel Rod 1` to `Fuel Rod 12` | Fuel remaining on fuel rods in individual fuel chambers, maximum of 300,000 units for each. |
| `Generator` | Current generator rate. |
| `Min Gen` & `Min Generator Rate` | Toggle and sets minimum generator rate. See [Managing Power](#managing-power). |
| `Shutdown` | Will turn off all fuel chambers thus shutting down generators. |
| `Battery` | Shows current battery charge of the batteries, maximum of 10,000 units. |
| `HeatTransferRate` | Current heat transfer rate of the heat sinks, maximum of 100%. |
| `Flow In` & `Flow Out` | Toggle flow modes of resource bridges. See [Refueling Propellant](#refueling-propellant). |
| `Tow`, `Tow Status`, `Tow Mass` & `Auto Gen` | Tow beam controls. See [Towing Ships](#towing-ships). |
| `Right Cargo`, `Right Pod`, `Left Cargo` & `Left Pod` | Cargo frame controls. See [Storing Cargo](#storing-cargo). |
| `Lights` | Turns on and off internal lights. |
| `Door` | Opens or closes ship entry doors. |

</nord-table>

### Managing Power

By default the generator will only run and ramp up when the batteries need charging so there is minimum management needed. But you can set a minimum generate rate by setting the `Min Generator Rate` value using the switch for the minimum rate and turning on `Min Gen`.

### Refueling Propellant

All four resource bridges can be used for refuelling propellant. To refuel from another ship, turn off `Flow Out` on the pilot right side console and leave `Flow In` turned on. Then connect a resource bridge to the other ship. To refuel another ship, do the opposite, `Flow Out` turned on and `Flow In` turned off.

Remember to turn `Flow In` and `Flow Out` back on if you are using the Endo to collect ore via any of the ship's resource bridges.

## Mining

![Mining Console](https://github.com/EGO-Tech/starbase-ships/raw/main/whaler/images/mining_console.jpg)

<nord-table>

| Interface | Function |
|---|---|
| `Scanner` & `Scan` | Turns on the [Ore Scanner](#ore-scanner) and shows results of scan. |
| `Lasers` | Turns on mining lasers. |
| `Collect` | Turns on mining ore collectors. |
| `Laser Convergence` | Adjusts the distance at which the lasers converge. |

</nord-table>

Activate the mining lasers using `Lasers`. Turn on mouse aim by pressing `C` and adjust the `Laser Convergence` using the switch. The higher the `Laser Convergence`, the tighter the convergence will be. `Collect` turns on the two ore collectors.

If batteries start running out of charge while mining, turn on `Min Gen`. Continous use of the lasers and collectors at the same time requires a `Min Generator Limit` of around 20%.

<nord-banner variant="warning">

**NOTE:** For safety, the autocannons will be disabled when the mining lasers are activated.

</nord-banner>

### Ore Scanner

Activate using the `Scanner` button. Scan results will show on the `Scan` panel in number of stacks. It has a maximum range of 100m.

## Storing Cargo

Use `Right Pod` and `Left Pod` on the pilot right console or the exterior buttons on each pod to open the cargo pod doors.

`Right Cargo` and `Left Cargo` on the pilot right console and on each frame activates the cargo lack frames.

<nord-banner variant="warning">

**NOTE:** Make sure the cargo is secure before flying the ship.

</nord-banner>

## Towing Ships

![Tow Beam Console](https://github.com/EGO-Tech/starbase-ships/raw/main/whaler/images/tow_beam_console.jpg)

<nord-table>

| Interface | Function |
|---|---|
| `Tow Status` | Status of tow beam, `0` is off, `1` is on and `2` is locked on. |
| `Tow Mass` | Mass of locked on ship, in kilograms. |
| `Tow` | Activates the tow beam. |
| `Auto Gen` | Activates `Min Gen` with `Min Generator Rate` according to `Tow Mass`. |

</nord-table>

The tow beam faces out the back of the ship so position the ship in front of, with the back facing the ship you wish to tow. From the bottom turret seat, disable `Chair` to face the back of the ship.

Activate `Tow` to turn on the tow beam and press `C` to activate mouse aim. Once the tow beam is locked on the ship, the `Tow Status` will be `2` and the mass of the locked ship will be shown as `Tow Mass` in kilograms.

Activate `Auto Gen` which will then turn on `Min Gen` with a `Min Generator Rate` based off the `Tow Mass`. Wait till the generators reach the targeted rate before flying off.

<nord-banner variant="warning">

**NOTE:** When `Tow` is activated, the bottom turret autocannons will be disabled.

</nord-banner>

The Whaler has enough power generation to tow a ship of a mass of up to 15ktons or 15,000,000 kilograms. For large ships, it is recommended to turn on `Min Gen` to ramp up the generator before locking on and then activating `Auto Gen` once locked on to adjust the `Min Generator Rate` accordingly.

<nord-banner variant="info">

**TIP:** Remember to turn off `Min Gen` after towing to save on fuel.

</nord-banner>

## Large Display Screens

![Large Display](https://github.com/EGO-Tech/starbase-ships/raw/main/whaler/images/large_display.jpg)

There are three large display, one in each pod room on either side and one in the main area in the middle of the ship. These screen can show a title message and a message of the day (MOTD). Each screen can be turned on and off independently but they all show the same information.

The screen messages can be changed using the console in front of the screen in the main area.

![Screen Console](https://github.com/EGO-Tech/starbase-ships/raw/main/whaler/images/screen_console.jpg)

<nord-table>

| Interface | Function |
|---|---|
| `TitleText` | Message to be displayed for the title. |
| `Title Size` | Size of the title text, `L`, `M` and `S`. |
| `Title Style` | Animation style of the title text, `Scroll`, `Static` and `Blink`. |
| `Title Colour` | Colour of the title text, from `0` to `360`. |
| `LoadTitle` | Load the title text onto the screen. |
| `MOTDText` | Message to be displayed for the MOTD. |
| `MOTD Colour` | Colour of the MOTD text, from `0` to `360`. |
| `LoadMOTD` | Load the MOTD text onto the screen. |
| `Screen` | Turn on or off the screen in the main area. |

</nord-table>

### Title Display

Use the universal tool (`U`) to change the value of the `TitleText` and adjust the `Title Size` & `Title Style`. Use `LoadTitle` to apply the changes. `Title Colour` can also be changed at any time.

The title can only display uo to 25 characters on each line. `L` (Large) has 1 line and can display 5 characters without scrolling. `M` (Medium) has 2 lines and can display 10 characters on each line without scrolling. `S` (Small) has 3 lines and can display 25 characters on each line without scrolling.

The title text has three animation modes.

- `Static` mode has no animation and will diplay the message as is.
- `Scroll` mode will scroll the text to the left for longer messages and start again from the start.
- `Blink` mode blinks the title text.

### MOTD Display

Use the universal tool (`U`) to change the value of the `MOTDText`. Use `LoadMOTD` to apply the changes. `MOTD Colour` can also be changed at any time.
