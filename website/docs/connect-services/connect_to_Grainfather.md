---
custom_edit_url: null
sidebar_position: 5
description: >-
  The free brewing app has all the tools, calculators and beer recipes that
  empower you to create amazing beer at home.
cover: https://grainfather.com/wp-content/uploads/2021/06/GF-logo.svg
coverY: 0
---

# Connect the Hydrom to Grainfather



:::tip
**Prerequisite:**

1. **Access to user interface**\
   To make this setting, you must have access to the user interface. If this is not the case, see here how to do it:[access-to-the-user-interface.md](../docs/Getting%20Started/establish-first-connection-to-the-hydrom/access-to-the-user-interface.mdx "mention")
2. **Grainfather user account available**.\
   An account has been created with the cloud provider Grainfather.
3. **Grainfather App was downloaded**.\
   https://grainfather.com/brewing-app/
:::

## Step 1: Navigate to the Equipmentmanager

Select the icon at the bottom that looks like a fermenter, then the Equipment Manager will open

## Step 2: Add Blank Device

The hydrom is to be added as a "Blank Device".

## Step 3: Choose device type

The name selected here will then be used as the device name. Hydrom is only an example, the name can be chosen freely.

## Step 4: Choose Custom

After adding the device, the device must be opened and then the token must be copied (see red marking).

## Step 5: Choose Device Name

## Step 6: The device was added

## Step 7: get the connection setting

### Step 7.1: Opening the Instructions

### Step 7.2: Note the URL

Important is that between "IOT" and "custom", the rest remains the same. The interesting part is marked by "XXXX-XXXX".

## Step 8: Setting up the Hydrom


## Step 1: Open the Menue

To access the menu bar you have to click on the three lines in the upper left corner. (See arrow)\
Then the menu bar will open.

![Open Navigation](../../docs/Pics/English_Pic5.png)

## Step 2: Select "Service" 

### Setting Up Grainfather

1. Then search for "Grainfather" in the list of services and activate it.
2. A selection of settings will appear. 4.
3. the settings can be kept. You just need to replace the "XXXX-XXXX" part with the part from the GF app. This way, GF will know that the Hydrom is sending data.

### additional settings

In order not to consume too much power, we would turn Bluetooth off when it is not needed. It was documented here:


[add-bluetooth.md](../add-bluetooth.md)


In order for the Hydrom to transmit the data reliably, a DeepSleep time must be set. This is documented on this page:


[enable-deepsleep.md](../other-settings/enable-deepsleep.md)


### Save Settings

Saving the data is important because it is the only way to connect to the service after waking up from DeepSleep.

![Pressing the "save" button saves the settings.](../../docs/Pics/English_Pic6.png)

You can check whether the saving was successful by looking at the settings file at http://hydrom001/settings.json/. to check if the save was successful. This file is the permanent memory of the Hydrom.

A second way to check the saving is to reload the page (all modern browsers offer this Feature). If the properties are then reloaded, the hydrom has accepted them, otherwise the old settings are reloaded.

### Send Test-message

By activating this button, you can check whether the Hydrom has a connection to the service and to the individual parts of the service. If you now click on "Save", the set services are executed once and the page is reloaded. On the new page you can see whether the servers are accessible and the ports are open.

![Sending a test message can greatly simplify the process of checking the connection.](../../docs/Pics/English_Pic7.png)

### activate DeepSleep

Activating DeepSleep is mandatory for the hydrom to be able to send data. If DeepSleep is activated, the hydrom wakes up after the set time and sends the data to the set service. Afterwards, the hydrom goes back to sleep and waits for the new service.


[enable-deepsleep.md](../other-settings/enable-deepsleep.md)

