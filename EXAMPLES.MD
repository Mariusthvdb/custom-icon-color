# Some examples using custom-ui-icon-color.
(using custom-ui with templating is explained [here](https://github.com/Mariusthvdb/custom-ui/blob/master/EXAMPLES.md)

# Icon color

Setting a color for an icon is not possible in core HA. There is no attribute `icon_color` out of the box.

Personally, I can't live without the `icon_color` attribute. Fully aware of the modern days custom card-mod, with which you can set a style on any card and entity, this still doesn't come close to the ease of custom-ui. 
Keeping as many styling issues out of the Lovelace cards makes for much better readable configs (imho) and, last but not least: using custom-ui we can set colors and do soglobally. 

Declare once, use everywhere. 

The color in the custom-ui-icon-color can take any CSS color value. For example: #FFACAC, red, rgba(10, 20, 30, 0.5) etc.
Note that the color will be applied as-is and it won't be affected by the brightness attribute.

# Templates
Core HA customizing is straightforward and can't use templates based on states or attributes. This plugin can not do that either. 

# However...

Several integrations in core Home Assistant allow to set additional attributes. Like [Template](https://www.home-assistant.io/integrations/template/#attributes).
Use a regular Jinja template on the custom attribute, and even use the `this` variable.
 
The templates are rendered completely in sync with state changes, taking into account the idiocyncrasies of working with the `this` variable, and trigger based templates.
 
Example:

```yaml
template:

  - sensor:

    - unique_id: doors
      name: Doors
      state: >
        {%- set count = expand('binary_sensor.deuren')
                               |selectattr('state','==','on')
                               |list|count %}
        {{count}}
      icon: >
        {{'mdi:door-open' if this.state|int(default=0) > 0 else 'mdi:door-closed'}}
      attributes:
        icon_color: >
          {{'var(--alert-color)' if this.state|int(default=0) > 0 else 'var(--primary-color)'}}
```
Note: this is functionality provided by *Custom-ui-icon-color* so yes, that still needs to be correctly installed for the template above to work.


```yaml
##########################################################################################
# Domain
# this is by far the most powerful option. Set and forget, and never have to set any Style
# in a Lovelace card. Do remember that customizing an individual entity overrides domain
# or global customizations.
# If customizing an entity belonging to one these domains, you have to customize it
# completely
##########################################################################################

homeassistant:
  customize_domain:
    geolocation:
      icon_color: orange

##########################################################################################
# Glob
# second powerful option used in Homeassistant, profits enormously of custom-ui.
##########################################################################################

  customize_glob:

    geo_location.lightning_strike*:
      icon_color: orange

##########################################################################################
# Entities
# We all have some individually customized entities
##########################################################################################

  customize:

    script.play_radio:
      icon_color: green

    script.stop_radio:
      icon_color: red
```
