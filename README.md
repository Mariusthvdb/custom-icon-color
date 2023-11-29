# What is Custom-ui-icon-color

[![GH-release](https://img.shields.io/github/v/release/Mariusthvdb/custom-ui-icon-color.svg?style=flat-square)](https://github.com/Mariusthvdb/custom-ui-icon-color/releases)
[![GH-downloads](https://img.shields.io/github/downloads/Mariusthvdb/custom-ui-icon-color/total?style=flat-square)](https://github.com/Mariusthvdb/custom-ui-icon-color/releases)
[![GH-last-commit](https://img.shields.io/github/last-commit/Mariusthvdb/custom-ui-icon-color.svg?style=flat-square)](https://github.com/Mariusthvdb/custom-ui-icon-color/commits/master)
[![GH-code-size](https://img.shields.io/github/languages/code-size/Mariusthvdb/custom-ui-icon-color.svg?color=red&style=flat-square)](https://github.com/Mariusthvdb/custom-ui-icon-color)

We can 
[customize entities in core Home Assistant](https://www.home-assistant.io/docs/configuration/customizing-devices/). 

However, there is no core attribute for an **icon_color** attribute. [Custom-ui](https://github.com/Mariusthvdb/custom-ui) can add that, and many other things, like templating any atttribute.
Custom-ui is very powerful and capable of changing our Dashboards. For some this is too much, and not required. That's why we release this
adapted version, that only adds the attribute for icon_color.

You can use it to set the additional attribute in `customize:`, on a single entity, or **globally** in our Home Assistant configuration and thus create extremely powerful yet 
very compact customizations.

You can also use it in [template:](https://www.home-assistant.io/integrations/template/#attributes) entities sensors and  Jinja templates for it to follow the state of, well, just about anything.

<img width="492" alt="icon-color" src="https://user-images.githubusercontent.com/33354141/168234088-ee5a5b11-0e68-49fd-b664-6e5a13c79fb0.png">

Some live action:

![alarm_volume](https://github.com/Mariusthvdb/custom-ui-icon-color/assets/33354141/3f1840b7-9608-4cb6-a127-b07b82cd28af)


## NEWS

**New minimized version for custom attribute icon_color only**
A new custom-ui sibling was released, which can be used only for adding an  [icon_color](https://github.com/Mariusthvdb/custom-ui/blob/master/custom-ui.js) attribute in `customize:` and the attributes configuration options of [template:](https://www.home-assistant.io/integrations/template/#attributes) entities.

No more templates possible with this version, which minimizes impact on the HA system and Frontend if you wish to do so. There was never a huge impact, but this brings it down even further, if you don't need the template options and still want the icon_color attribute in your options.
Configuration is identical to what is already explained in the example section

**Recently discovered....**: custom-ui facilitates setting a [Jinja template on custom attributes](https://github.com/Mariusthvdb/custom-ui/blob/master/EXAMPLES.md#however-experimental-recently-discovered) in core integrations that allow setting a custom attribute.

--- 

## Installation


### Manual Installation

1. Download the [custom-ui-icon-color](http://www.github.com/Mariusthvdb/custom-ui-icon-color/releases/latest/download/custom-ui-icon-color.js)
2. Place the file in your `config/www` folder or any subfolders.
3. Include the card code in your `ui-lovelace-card.yaml`

   ```yaml
   title: Home
   resources:
     - url: /local/custom-ui-icon-color.js
       type: module
   ```
or when using the UI, click 

<a href="https://my.home-assistant.io/redirect/lovelace_resources/" target="_blank"><img src="https://my.home-assistant.io/badges/lovelace_resources.svg" alt="Open your Home Assistant instance and show your Lovelace resources." /></a>


### Other installation methods
See [INSTALLING](https://github.com/Mariusthvdb/custom-ui/blob/master/INSTALLING.md)

## Examples
See [EXAMPLES](https://github.com/Mariusthvdb/custom-ui-icon-color/blob/master/EXAMPLES.md).
For card-mod replacement mods, see [CARD-MOD-EXAMPLES](https://github.com/Mariusthvdb/custom-ui-icon-color/blob/main/CARD-MOD-EXAMPLES.md)

---

## Learn core Home Assistant customization 
It goes without saying that custom-ui-icon-color is an extension of core Home Assistant functionality. As 
such, you should understand what is documented on 
[Homeassisant.io](https://www.home-assistant.io/docs/configuration/customizing-devices/) about the 
subject.

### Caveats
Custom-ui-icon-color can't customize everything. Entities created in python scripts (you need to set the 
customization in the script itself) and entities created by several add-ons can't be touched by 
custom-ui. E.g. Home Assistant Google Drive Backup, and Argon One active cooling. You can work 
around that by creating template sensors for those entities, which you can again customize in HA.

### Not all Lovelace cards are equal
Not all core HA cards use the same icon handling. Because of that custom-ui-icon-color doesn't work with 
* [Entity card](https://www.home-assistant.io/lovelace/entity/)
* [Button card](https://www.home-assistant.io/lovelace/button/)
* [Picture-glance card](https://www.home-assistant.io/lovelace/picture-glance/).

Thomas Loven's [Card-mod](https://github.com/thomasloven/lovelace-card-mod), which is an amazing 
plugin for Lovelace with many features, to the rescue.


### History
I've been a longtime and heavy user of [custom-ui](https://github.com/Mariusthvdb/custom-ui), and this tiny icon_color sibling is the latest adaptation. Minimized, severly cut in functionality, but very useful.
You can read up at 
[history](https://github.com/Mariusthvdb/custom-ui/blob/master/HISTORY.md) how it came to this 
adapted version.

<a href="https://my.home-assistant.io/redirect/hacs_repository/?owner=mariusthvdb&repository=https%3A%2F%2Fgithub.com%2FMariusthvdb%2Fcustom-ui-icon-color%2Ftree%2Fmain&category=Plugin" target="_blank" rel="noreferrer noopener"><img src="https://my.home-assistant.io/badges/hacs_repository.svg" alt="Open your Home Assistant instance and open a repository inside the Home Assistant Community Store." /></a>
