---
custom_edit_url: null
sidebar_position: 1
description: >-
  MQTT is an OASIS standard messaging protocol for the Internet of Things (IoT).
  Many services can be connected via this open standard.
cover: https://mqtt.org/assets/downloads/mqtt-logo.png
coverY: 0
---

# To set up the Hydrom as an MQTT publisher



:::tip
**Prerequisite:**

1. **Access to user interface**
   To make this setting, you must have access to the user interface. If this is not the case, see here how to do it:[access-to-the-user-interface.md](../docs/Getting%20Started/establish-first-connection-to-the-hydrom/access-to-the-user-interface.mdx "mention")
2. **Access to an MQTT server**
   An MQTT server has been set up or there is access to a cloud MQTT server.
:::

## Collect the information from the MQTT interface

* Server (IP Adress)
* Port
* Username
* Password
* Topiclevel

## Insert MQTT settings in Hydrom

Now open the user interface of the Hydrom, in the best case the Hydrom is already in the network and can be easily accessed via http//hydrom001/.

Otherwise the Hydrom must still be started.

## Step 1: Open the Menue

To access the menu bar you have to click on the three lines in the upper left corner. (See arrow)\
Then the menu bar will open.

![Open Navigation](../../docs/Pics/English_Pic5.png)

## Step 2: Select "Service" 

### Activate MQTT and change the settings

On the "Service" page, the MQTT service must be activated.

![The settings that are entered here are saved in the Hydrom](../../docs/Pics/English_Pic10.png)

**Server Adresse:** Name oder IP des MQTT Brokers

**Server Port:** MQTT-Port, der standardmäßig 1883 ist

**Benutzername:** Den Benutzernamen erhalten Sie von dem MQTT Broker

**Passwort:** Das Passowort erhalten Sie von dem MQTT Broker

**Topiclevel:** wird im nächsten Teilkapitel ausfühlich erklärt

#### Aktivieren Sie MQTT und ändern Sie die Einstellungen

In MQTT, the word Topic refers to a UTF-8 string that the broker uses to filter messages for each connected client. The topic consists of one or more topic levels also called topiclevel. Each topic level is separated by a slash.

https://www.hivemq.com/img/blog/topic\_basics.png

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


## View Hydrom readings on the MQTT broker

### Check if the topic has been published

Here it is recommended to use a MQTT client app. Under IOS I recommend the app MQTTAnalyzer.

With this app you can connect to the broker and subscribe to the topiclevel and get the measured values. This way you can make sure in the first step that the data is sent correctly and received correctly by the broker.

### The further procedure is strongly dependent on the MQTT client.

It is not possible to describe a general procedure here. In the future, sample configurations for the most common clients will appear here, for which I ask for your help. Please send me your working configurations and I will publish them here, anonymized of course.
