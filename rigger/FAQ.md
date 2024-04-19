# Frequently Asked Questions

## I just printed the ship, why can't I control the ship (version <= 1.0.1)?

If using version 1.0.1 and earlier, please read the note in the `Flying the Ship` section.

## Why does it need so much Aegisium?

I converted all external plates to Aegisium for weight and armor, you can use other materials like Bastium for these plates by editing the blueprint in the ship designer.

## Why is the compass panel label G?

~~I ran out of single character global variables while both the C and K are used by the ISAN and waypoint system which I was hoping to keep unmodified. I haven't used any digits though, so potentially one of those could be used. Suggestions welcomed.~~

As of version 1.0.1, I managed to free up a lot of global variables, but decided to keep it as it is. In fact with the panel rotated (see below), if you look closely enough the rotated `G` kinda looks like a compass pointing north (up/forward) :P

## Why is the compass panel rotated (version > 1.0.1)?

 The original Compass uses front and right receivers, but this ship uses front and bottom receivers. For ease of future upgrades, I just rotated the panel instead of making changes to the original Compass code.

## Why are there so many extra hardpoints?

I don't know, I went a bit crazy there, but you can use them to add whatever you want, including weapons.
