---
custom_edit_url: null
sidebar_position: 6
description: >-
  Hypertext Transfer Protocol (HTTP) is an application-layer protocol for
  transmitting hypermedia documents. It was designed for communication between
  web browsers and web servers.
cover: https://labs.tadigital.com/wp-content/uploads/2019/11/http.jpg
coverY: 0
---

# Send Measurements via Webhook



:::tip
**Prerequisite:**

1. **Access to user interface**  
   To make this setting, you must have access to the user interface. If this is not the case, see here how to do it:[access-to-the-user-interface.md](../docs/Getting%20Started/establish-first-connection-to-the-hydrom/access-to-the-user-interface.mdx "mention")
2. **Access to an http-Server server/Cloud Service**  
   An http-Server server has been set up or there is access to a cloud http-Server.
:::

## Datatransfer

### Via URL

If placeholders are used in the URL specified in the "URL", the hydrom will replace them with the current variables.

An example would be: {VALUE\_TILT\_P} --> 15.3
{VALUE\_TEMPERATURE\_C} --> 25.3

* **{NAME\_DEVICE}** If this variable is used, the hydrom replaces this placeholder with the current name of the hydrom. Default: "Hydrom001
* **{VALUE\_TEMPERATURE\_C}** If this variable is used, the Hydrom replaces this placeholder with the currently measured temperature. The unit of this variable is Celsius
* **{VALUE\_TILT\_P}** If this variable is used, the Hydrom replaces this placeholder with the currently measured temperature. The unit of this variable is Plato
* **{VALUE\_TILT\_SG}** If this variable is used, the Hydrom replaces this placeholder with the currently measured tilt. The unit of this variable is specific Gravity
* **{VALUE\_TILT\_G}** If this variable is used, the Hydrom replaces this placeholder with the currently measured tilt. The unit of this variable is Gravity
* **{VALUE\_RSSI}** If this variable is used, the Hydrom replaces this placeholder with the currently measured tilt.
* **{VALUE\_BATTERY\_VOLTAGE}** If this variable is used, the Hydrom replaces this placeholder with the currently measured Batteryvoltage. The unit of this variable is Volt
* **{VALUE\_BATTERY\_PERCENTAGE}** If this variable is used, the Hydrom replaces this placeholder with the current battery level. The unit of this variable is Percent.

#### Example URL

```url
https://maker.ifttt.com/trigger/hydrom/with/key/clLb9jfjgngkdovIx?value1={VALUE_TILT_G}&value2={VALUE_TEMPERATURE_C}&value3={VALUE_BATTERY_PERCENTAGE}
```

![Webhook](../../docs/Pics/English_Pic15.png)

### via JSON

The hydrom sends, if you have activated "http", then the hydrom sends a JSON file to the path specified in the "URL". 
How the file looks like and what the parameters contain you can read here.

* **name**  
  Each device has the name "Hydrom001" by default. This name can be changed at any time to distinguish several devices from each other  
  [changing-the-hydrom-name.md](../other-settings/changing-the-hydrom-name.md "mention")

* **angle**  
  This reading is the raw reading of the slope of the hydrom without any processing  

* **temperature**  
  This value is the measured temperature in degrees Celsius  

* **temp\_units**  
  A "C" for Celsius is sent here  

* **battery**  
  Battery voltage in V

* **gravity**  
  If this variable is used, the Hydrom replaces this placeholder with the current battery level. The unit of this variable is Percent

* **interval**  
  The interval during which the measured values are sent (+ approx. 23s)  

* **RSSI**  
  Wifi transmit power



Sample content of the JSON:

```json
{
"name":"Hydrom001",
"ID":3,
"angle":65.54,
"temperature":26.43,
"temp_units":"C",
"battery":3.9,
"gravity":9.34,
"interval":900,
"RSSI":63.5
}
```

## Step 1: Open the Menue

To access the menu bar you have to click on the three lines in the upper left corner. (See arrow)
Then the menu bar will open.

![Open Navigation](../../docs/Pics/English_Pic5.png)

## Step 2: Select "Service" 

### Activate http-client and change the settings

On the "Service" page, the http-Server service must be activated.

![Enabled Bluetooth](../../docs/Pics/English_Pic15.png)

### additional settings

:::info
In order not to consume too much power, we would turn Bluetooth off when it is not needed. It was documented here:  
[add-bluetooth.md](../add-bluetooth.md)
:::



:::info
### activate DeepSleep

Activating DeepSleep is mandatory for the hydrom to be able to send data. If DeepSleep is activated, the hydrom wakes up after the set time and sends the data to the set service. Afterwards, the hydrom goes back to sleep and waits for the new service.
[enable-deepsleep.md](../other-settings/enable-deepsleep.md)
:::


:::info
### Save Settings

Saving the data is important because it is the only way to connect to the service after waking up from DeepSleep.

![Pressing the "save" button saves the settings.](../../docs/Pics/English_Pic6.png)

You can check whether the saving was successful by looking at the settings file at http://hydrom001/settings.json/. to check if the save was successful. This file is the permanent memory of the Hydrom.

A second way to check the saving is to reload the page (all modern browsers offer this Feature). If the properties are then reloaded, the hydrom has accepted them, otherwise the old settings are reloaded.

:::

:::info
### Send Test-message

By activating this button, you can check whether the Hydrom has a connection to the service and to the individual parts of the service. If you now click on "Save", the set services are executed once and the page is reloaded. On the new page you can see whether the servers are accessible and the ports are open.

![Sending a test message can greatly simplify the process of checking the connection.](../../docs/Pics/English_Pic7.png)
:::

:::info
### Put Hydrom to DeepSleep

To ensure that the device sends measured values to the Service in the set interval as intended, the Hydrom must be put into deep sleep.

There are two ways to put the Hydrom into deep sleep.
Turning the ***power switch off and on***  is the easiest way to put the Hydrom into deep sleep.
The alternative way is to put it to sleep ***via the UI***.
To do this, open the navigation bar and go to the "DeepSleep" tab.
:::



