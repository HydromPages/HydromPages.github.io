---
custom_edit_url: null
sidebar_position: 2
description: >-
  The Hydrom supports several units for the tilt and the temperature. Here is
  explained how to change the unit.
---

# Customize units



:::tip
**Precondiion:**
To make this setting you must have access to the user interface. If this is not the case, see here how to do it:[access-to-the-user-interface.md](../docs/Getting%20Started/establish-first-connection-to-the-hydrom/access-to-the-user-interface.mdx "mention")
:::

## Step 1: Open the Menue

To access the menu bar you have to click on the three lines in the upper left corner. (See arrow)\
Then the menu bar will open.

![Open Navigation](../../docs/Pics/English_Pic5.png)

## Step 2: Select "Settings"

## Step 3: Change Units

![](../../docs/Pics/English_Pic17.png)

### Tilt

* **Plato**
* **Specific Gravity**
* **Degree**

### Temperature

* **Celsius**
* **Fahrenheit**
* **Kelvin**

{% hint style="info" %}
The set units do not affect the services.

This means that the data sent will always be consistent, no matter what unit is set.
:::

:::info
### Save Settings

Saving the data is important because it is the only way to connect to the service after waking up from DeepSleep.

![Pressing the "save" button saves the settings.](../../docs/Pics/English_Pic6.png)

You can check whether the saving was successful by looking at the settings file at http://hydrom001/settings.json/. to check if the save was successful. This file is the permanent memory of the Hydrom.

A second way to check the saving is to reload the page (all modern browsers offer this Feature). If the properties are then reloaded, the hydrom has accepted them, otherwise the old settings are reloaded.

:::
