---
description: >-
  Brewfather (https://brewfather.app/) is a software cloud solution for brewing
  beer. It allows the creation, synchronisation and exchange of recipes. The
  Hydrom helps to track the fermentation process
cover: https://i.ytimg.com/vi/1Sjh_-V1Tg8/maxresdefault.jpg
coverY: 0
---

# Connect the Hydrom to Brewfather



:::tip
**Prerequisite:**

1. **Access to user interface**\
   To make this setting, you must have access to the user interface. If this is not the case, see here how to do it:[access-to-the-user-interface.md](../getting-started/access-to-the-user-interface.md "mention")
2. **Brewfather user account available**.\
   An account has been created with the cloud provider Brewfather.
3. **Brewfather App was downloaded**.\
   https://brewfather.app/
:::

## Add the hydrom to the Brewfather

### Activate "Custom Stream"

Open the Brewfather app and navigate to the settings. There you activate the device "Custom Stream".

![](<../.gitbook/assets/Brewfather\_1 (1).png>) ![](<../.gitbook/assets/Brewfather\_2 (1).png>)

### Copy BrewFather ID

![The marked parameter must be coupled into the hydrom.](../.gitbook/assets/Brewfather\_3.png)

## Insert BrewFather settings in Hydrom

Now open the user interface of the Hydrom, in the best case the Hydrom is already in the network and can be easily accessed via http//hydrom001/.

Otherwise the Hydrom must still be started.

## Step 1: Open the Menue

To access the menu bar you have to click on the three lines in the upper left corner. (See arrow)\
Then the menu bar will open.

<figure><img src="../.gitbook/assets/Bilder.png" alt=""><figcaption></figcaption></figure>

## Step 2: Select "Service" 

### Step 3: Activate Brewfather and change the settings

On the "Service" page, the Brewfather service must be activated.

:::note
It is important that you check if there is another URL in your hydrom. In the firmware up to 1.2.9 the wrong link \[/hydrom?id=xxxxxxxxxx] was used. Please replace the link with the link from the Brewfather UI \[/stream?id=XXXXXXX] as shown in the picture below.
:::

![The settings that are entered here are saved in the Hydrom](<../.gitbook/assets/Brewfather (2).png>)

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
