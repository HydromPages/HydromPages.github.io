---
custom_edit_url: null
sidebar_position: 5
description: >-
  The Hydrom is able to send the same Bluetooth packages as the Varriante from
  the USA. So we have created an interchangeability for more flexibility.
---

# Change Bluetooth Settings



{% hint style="success" %}
**Precondition:**

To make this setting you must have access to the user interface. If this is not the case, see here how to do it:[access-to-the-user-interface.md](getting-started/access-to-the-user-interface.md "mention")
{% endhint %}

## Step 1: Open the Menue

To access the menu bar you have to click on the three lines in the upper left corner. (See arrow)\
Then the menu bar will open.

<figure><img src=".gitbook/assets/Bilder.png" alt=""><figcaption></figcaption></figure>

### Step 2: Select "Service"

## Step 3: Enable Bluetooth

The Hydrom will now send the following measured values via bluetooth after a restart by DeepSleep. For this, DeepSleep must also be activated as shown in the picture below.

{% hint style="warning" %}
The "test message" option is not available for Bluetooth. So you have to wait until the Hydrom wakes up from a deep sleep. Hier findest du die Anleitu
{% endhint %}

![Enabled Bluetooth](.gitbook/assets/Folie27.png)

{% hint style="warning" %}
The "test message" option is not available for Bluetooth. So you have to wait until the Hydrom wakes up from a deep sleep.
{% endhint %}

## Choose UUID

Up to 8 Hydrom can be connected in parallel via Bluetooth. The different devices are then assigned different colors.

## Choose the transmission power

In the Hydrom, the power with which Bluetooth is transmitted can be set here. The range increases with higher transmission power. But beware, the battery life will also decrease with higher transmission power.

The powers with ascending transmission power:

*   ESP\_PWR\_LVL\_N14

    Corresponding to -14dbm
*   ESP\_PWR\_LVL\_N11

    Corresponding to -11dbm
*   ESP\_PWR\_LVL\_N8

    Corresponding to -8dbm
*   ESP\_PWR\_LVL\_N5

    Corresponding to -5dbm
*   ESP\_PWR\_LVL\_N2

    Corresponding to -2dbm
*   ESP\_PWR\_LVL\_P1

    Corresponding to 1dbm
*   ESP\_PWR\_LVL\_P4

    Corresponding to 4dbm
*   ESP\_PWR\_LVL\_P7

    Corresponding to 7dbm

### Save Settings

Saving the data is important because it is the only way to connect to the service after waking up from DeepSleep.

![Pressing the "save" button saves the settings.](.gitbook/assets/Save.png)

You can check whether the saving was successful by looking at the settings file at http://hydrom001/settings.json/. to check if the save was successful. This file is the permanent memory of the Hydrom.

A second way to check the saving is to reload the page (all browsers offer this). If the properties are then reloaded, the hydrom has accepted them, otherwise the old settings are reloaded.

### activate DeepSleep

Activating DeepSleep is mandatory for the hydrom to be able to send data. If DeepSleep is activated, the hydrom wakes up after the set time and sends the data to the set service. Afterwards, the hydrom goes back to sleep and waits for the new service.

{% content-ref url="other-settings/enable-deepsleep.md" %}
[enable-deepsleep.md](other-settings/enable-deepsleep.md)
{% endcontent-ref %}
