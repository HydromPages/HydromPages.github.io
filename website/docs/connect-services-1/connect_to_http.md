---
description: >-
  Hypertext Transfer Protocol (HTTP) is an application-layer protocol for
  transmitting hypermedia documents. It was designed for communication between
  web browsers and web servers.
cover: https://labs.tadigital.com/wp-content/uploads/2019/11/http.jpg
coverY: 0
---

Diesen Anleitung ist auch auf Deutsch verfügbar: [Link](https://anleitung.hydrom.io)

{% hint style="success" %}
**Prerequisite:**

1. Um diese Einstellung vorzunehmen, müssen Sie Zugriff auf die Benutzeroberfläche haben. Wenn dies nicht der Fall ist, sehen Sie hier nach, wie man es macht:[access-to-the-user-interface.md](../getting-started/establish-first-connection-to-the-hydrom/access-to-the-user-interface.md "mention")
2. **Zugang zu einem http-Server**.\
   Es wurde ein http-Server eingerichtet oder es besteht Zugriff auf einen Cloud http-Server.
{% endhint %}

## Sammeln der Informationen von der http-Server-Schnittstelle

* Server
* Port
* URL

### URL-Ersetzungsfunktion

Ein Benutzer des Hydroms hat eine neue Funktion angefordert.

Das Feature wurde implementiert und kann ab der Version 1.2.10 genutzt werden.

Wenn in der in "URL" angegebenen URL Platzhalter verwendet werden, ersetzt das Hydrom diese durch die aktuellen Variablen.

Ein Beispiel wäre: {VALUE\_TILT\_P} --> 15.3\
{VALUE\_TEMPERATURE\_C} --> 25.3

* **{NAME\_DEVICE}** Wenn diese Variable verwendet wird, ersetzt das Hydrom diesen Platzhalter durch den aktuellen Namen des Hydroms. Voreinstellung: "Hydrom001"
* **{VALUE\_TEMPERATURE\_C}** Wenn diese Variable verwendet wird, ersetzt das Hydrom diesen Platzhalter durch die aktuell gemessene Temperatur. Die Einheit dieser Variable ist Celsius
* **{VALUE\_TILT\_P}** Wenn diese Variable verwendet wird, ersetzt das Hydrom diesen Platzhalter durch die aktuell gemessene Temperatur. Die Einheit dieser Variable ist Plato
* **{VALUE\_TILT\_SG}** Wenn diese Variable verwendet wird, ersetzt das Hydrom diesen Platzhalter durch die aktuell gemessene Temperatur. Die Einheit dieser Variable ist Specific Gravity
* **{VALUE\_TILT\_G}** Wenn diese Variable verwendet wird, ersetzt das Hydrom diesen Platzhalter durch die aktuell gemessene Neigung. Die Einheit dieser Variable ist Grad
* **{VALUE\_RSSI}** Wenn diese Variable verwendet wird, ersetzt das Hydrom diesen Platzhalter durch die aktuell gemessene Neigung.
* **{VALUE\_BATTERY\_VOLTAGE}** Wenn diese Variable verwendet wird, ersetzt das Hydrom diesen Platzhalter durch die aktuell gemessene Batteriespannung. Die Einheit dieser Variable ist Volt
* **{VALUE\_BATTERY\_PERCENTAGE}** Wenn diese Variable verwendet wird, ersetzt das Hydrom diesen Platzhalter durch die aktuell gemessene Batteriespannung. Die Einheit dieser Variable ist Volt

# Einrichten des Hydrom

Öffnen Sie nun die Benutzeroberfläche des Hydroms, im besten Fall ist das Hydrom bereits im Netzwerk und kann einfach über http://hydrom001/ erreicht werden.

Ansonsten muss das Hydrom noch gestartet werden.

## Schritt 1: Menüleiste öffnen

Um die Menüleiste aufzurufen, müssen Sie auf die drei Linien in der oberen linken Ecke klicken. (Siehe Pfeil)\
Dann wird die Menüleiste geöffnet.

<figure><img src="../.gitbook/assets/Bilder.png" alt=""><figcaption></figcaption></figure>

## Schritt 2: Tab "Dienste" auswählen

### Activate http-client and change the settings

On the "Service" page, the http-Server service must be activated.

![The settings that are entered here are saved in the Hydrom](../.gitbook/assets/Hydrom\_HTTP.png)

#### Server

#### Port

#### URL

## zusätzliche Einstellungen

Um nicht zu viel Strom zu verbrauchen, würden wir Bluetooth ausschalten, wenn es nicht benötigt wird. Dies wurde hier dokumentiert:

{% content-ref url="../add-bluetooth.md" %}
[add-bluetooth.md](../add-bluetooth.md)
{% endcontent-ref %}

Damit das Hydrom die Daten zuverlässig übertragen kann, muss eine DeepSleep-Zeit eingestellt werden. Dies ist auf dieser Seite dokumentiert:

{% content-ref url="../other-settings/enable-deepsleep.md" %}
[enable-deepsleep.md](../other-settings/enable-deepsleep.md)
{% endcontent-ref %}

### Einstellungen speichern

Das Speichern der Daten ist wichtig, da dies die einzige Möglichkeit ist, nach dem Aufwachen aus dem DeepSleep eine Verbindung zum Dienst herzustellen.

![Durch Drücken der Shaltfläche "SAVE" werden die Einstellungen gespeichert.](../.gitbook/assets/Save.png)

Ob das speichern erfolgreich war kann man überprüfen indem man sich die Einstellungsdatei unter http://hydrom001/settings.json/ anguckt. Diese Datei ist der dauerhafte Speicher des Hydrom.

Ein zweiter Weg das Speichern zu prüfen ist die Seite neuzuladen (bieten alle Browser an). Wenn dann die Eigenschaften wieder geladen werden, hat das Hydrom diese angenommen, sonst werden die alten Einstellungen wieder geladen.

### Testnachricht senden

Durch Aktivieren dieses Buttons kann geprüft werden, ob der Hydrom eine Verbindung zum Dienst und zu den einzelnen Teilen des Dienstes hat. Wenn Sie nun auf "Speichern" klicken, werden die eingestellten Dienste einmalig ausgeführt und die Seite wird neu geladen.
Auf der neugelandenden Seite sehen Sie dann ob die Server erreichbar und die Ports geöffnet sind.

![Das Senden einer Testnachricht kann die Überprüfung der Verbindung stark vereinfachen.](../.gitbook/assets/TestMessage.png)

### DeepSleep aktivieren

Das Aktivieren des DeepSleep ist zwingend erforderlich, damit das Hydrom Daten senden kann.
Ist DeepSleep aktiviert, dann wacht das Hydrom nach der festgelegten Zeit auf und sendet die Daten an den eingestellten Service.
Danach schläft das Hydrom wieder ein und wartet auf den neuen Einsatz.

{% content-ref url="../other-settings/enable-deepsleep.md" %}
[enable-deepsleep.md](../other-settings/enable-deepsleep.md)
{% endcontent-ref %}