---
custom_edit_url: null
sidebar_position: 2
description: >-
  Ubidots is a cloud service that accepts, stores and visualizes measurement
  data from internet-enabled devices.
cover: >-
  https://files.startupranking.com/startup/thumb/6796_043b01ef967da629abc843eca1f2a477906da07a_ubidots_l.png
coverY: 0
---

# Connect the Hydrom to Ubidots



{% hint style="success" %}
**Prerequisite:**

1. **Access to the user interface**\
   To make this setting you must have access to the user interface. If this is not the case, see here how to do it:[access-to-the-user-interface.md](../getting-started/access-to-the-user-interface.md "mention")
2. **Ubidots user account available**\
   An account was created with the cloud provider ubidots. At the time of writing, there is a free account for non-commercial use.\
   https://industrial.ubidots.com/accounts/signup\_industrial/
{% endhint %}

## Add the hydrom to Ubidots

### Navigate to the Devicemanager

The device management is located at the top center. Here a new device must be added

![](<../.gitbook/assets/Screenshot 2021-08-07 at 22-06-10 Ubidots Devices.png>)

### Add Blank Device

It is really important that you enter the device name here. E.g. "Hydrom001" in the default configuration

![Choose Device Name](<../.gitbook/assets/Screenshot 2021-08-07 at 22-07-42 Ubidots Devices (1).png>)

### Copy the token

After adding the device, the device must be opened and then the token must be copied (see red marking).

![Copy Ubidots Token](<../.gitbook/assets/Screenshot 2021-08-07 at 22-18-04 Ubidots Devices (1).png>)

## Insert Service settings in Hydrom

Now open the user interface of the Hydrom, in the best case the Hydrom is already in the network and can be easily accessed via http//hydrom001/.

Otherwise the Hydrom must still be started.

## Step 1: Open the Menue

To access the menu bar you have to click on the three lines in the upper left corner. (See arrow)\
Then the menu bar will open.

<figure><img src="../.gitbook/assets/Bilder.png" alt=""><figcaption></figcaption></figure>

## Step 2: Select "Service" 

### Step 3: Activate Ubidots and change the settings

On the "Service" page, the Ubidots service must be activated.

![Activating the Ubidots interface and entering the token](<../.gitbook/assets/Screenshot 2021-09-06 at 21-31-15 Service.png>)

### additional settings

In order not to consume too much power, we would turn Bluetooth off when it is not needed. It was documented here:

{% content-ref url="../add-bluetooth.md" %}
[add-bluetooth.md](../add-bluetooth.md)
{% endcontent-ref %}

In order for the Hydrom to transmit the data reliably, a DeepSleep time must be set. This is documented on this page:

{% content-ref url="../other-settings/enable-deepsleep.md" %}
[enable-deepsleep.md](../other-settings/enable-deepsleep.md)
{% endcontent-ref %}

### Save Settings

Saving the data is important because it is the only way to connect to the service after waking up from DeepSleep.

![Pressing the "save" button saves the settings.](../.gitbook/assets/Save.png)

You can check whether the saving was successful by looking at the settings file at http://hydrom001/settings.json/. to check if the save was successful. This file is the permanent memory of the Hydrom.

A second way to check the saving is to reload the page (all modern browsers offer this Feature). If the properties are then reloaded, the hydrom has accepted them, otherwise the old settings are reloaded.

### Send Test-message

By activating this button, you can check whether the Hydrom has a connection to the service and to the individual parts of the service. If you now click on "Save", the set services are executed once and the page is reloaded. On the new page you can see whether the servers are accessible and the ports are open.

![Sending a test message can greatly simplify the process of checking the connection.](../.gitbook/assets/TestMessage.png)

### activate DeepSleep

Activating DeepSleep is mandatory for the hydrom to be able to send data. If DeepSleep is activated, the hydrom wakes up after the set time and sends the data to the set service. Afterwards, the hydrom goes back to sleep and waits for the new service.

{% content-ref url="../other-settings/enable-deepsleep.md" %}
[enable-deepsleep.md](../other-settings/enable-deepsleep.md)
{% endcontent-ref %}
