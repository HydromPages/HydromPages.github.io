---
Beschreibung: >-
  Brewblox ist ein sich schnell entwickelndes System, das externe Beiträge
  begrüßt.
Abdeckung: https://www.brewblox.com/brewpi-wordmark.svg
description: >-
  Brewblox ist eine moderne, quelloffene Brauereisteuerungsplattform. Sie läuft
  auf einem zentralen Server (vor Ort), an den sich mehrere Temperaturregler und
  Sensoren über eine intuitive Weboberfläche.
cover: https://brewblox.netlify.app/brewpi-wordmark.svg
coverY: 0
---

{% hint style="success" %}
**Voraussetzung:**

1. **Zugriff auf Benutzeroberfläche**\
   Um diese Einstellung vorzunehmen, müssen Sie Zugriff auf die Benutzeroberfläche haben. Wenn dies nicht der Fall ist, sehen Sie hier nach, wie man es macht:[access-to-the-user-interface.md](../getting-started/establish-first-connection-to-the-hydrom/access-to-the-user-interface.md "mention")
2.  **Brewblox-Server wurde eingerichtet**\
    Um das Hydrom mit Brewblox zu verbinden, muss zunächst ein Brewblox-Server eingerichtet werden.

    Brewblox hat eine sehr gute Anleitung bereit gestellt: https://brewblox.netlify.app/user/startup.html#what-you-will-need
{% endhint %}

# Vorbereiten des Dienstes

Das Hydrom wird nativ von Brewblox unterstützt. Das bedeuete, wenn das Hydrom einmal eingerichtet ist, werden die Messwerte automatisch an den Server gesendet und können verwendet werden. Es können auch mehrere Geräte parallel verwendet werden, indem man den Namen des Hydrom anpasst.

Es gibt zwei grundlegende Arten das Hydrom mit Brewblox zu verbinden.

1. Über WLAN\
   Angenommen das Hydrom befindet sich im selben Netzwerk wie der Brewblox-Server dann eignet sich die Einrichtung über WLAN.\
   Wie das geht, wird in dieser Anleitung beschrieben.
2. Über Bluetooth\
   Wenn der Brewblox-Server sich nicht im Wlan befindet und auch kein Zugriff auf ein Wlan besteht, kann das Hydrom nur über Bluetooth angebunden werden.\
   Dafür wurde bisher noch keineAnleitung geschrieben.\
   Prinzipiell kann man sagen, folgt der Anleitung für das Tilt Hydromete:\
   [https://www.brewblox.com/user/services/tilt.html](https://www.brewblox.com/user/services/tilt.html)\
   Diese Anleitung gilt 1:1 auch für das Hydrom.

# Einrichten des Hydrom

Öffnen Sie nun die Benutzeroberfläche des Hydroms, im besten Fall ist das Hydrom bereits im Netzwerk und kann einfach über http://hydrom001/ erreicht werden.

Ansonsten muss das Hydrom noch gestartet werden.

## Schritt 1: Menüleiste öffnen

Um die Menüleiste aufzurufen, müssen Sie auf die drei Linien in der oberen linken Ecke klicken. (Siehe Pfeil)\
Dann wird die Menüleiste geöffnet.

<figure><img src="../.gitbook/assets/Bilder.png" alt=""><figcaption></figcaption></figure>

## Schritt 2: Tab "Dienste" auswählen

## Schritt 3: Brewblox aktivieren

![Ändern der Einstellung des  Hydrom](../.gitbook/assets/Hydrom\_Brewblox\_Settings.png)

**Server Adresse:** Name oder IP des Brewblox/MQTT Brokers

**Server Port:** MQTT-Port, der standardmäßig 1883 ist

**Pfad / URI:** muss auf "brewcast/history" gesetzt werden, welches das Thema für den History-Dienst ist

**Username / Passwort:** Dieses Feld bleibt leer, weil Brewblox noch kein MQTT mit Autentifizierung unterstützt.

Die beiden Indikatoren neben der IP-Adresse des Server und dem Port des Server wird dann grün/rot wenn eine Testnachricht abgesendet wurde.\
Dann prüft das Hydrom ob die Adresse erreichbar ist und wenn ja, ob der Zielport geöffnet ist.

### Testnachricht senden

Durch Aktivieren dieses Buttons kann geprüft werden, ob der Hydrom eine Verbindung zum Dienst und zu den einzelnen Teilen des Dienstes hat. Wenn Sie nun auf "Speichern" klicken, werden die eingestellten Dienste einmalig ausgeführt und die Seite wird neu geladen. Au## zusätzliche Einstellungen

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
{% endcontent-ref %}f der neugelandenden Seite sehen Sie dann ob die Server erreichbar und die Ports geöffnet sind.

![Das Senden einer Testnachricht kann die Überprüfung der Verbindung stark vereinfachen.](../.gitbook/assets/TestMessage.png)

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

## Hydrom-Messwerte auf dem Brewblox-Sever ansehen

### Dashboard hinzufügen

Um sich die Messwerte des Hydrom anzugucken muss, wenn noch keins vorhanden ist, erstmal ein Dashboard angelegt werden.

![Brewblox Dashboard anlegen](../.gitbook/assets/Brewblox\_Server\_Hydrom\_new\_Dashboard.png)

### Widget hinzufügen

Die Messwerte des Hydrom können über einen Graphen visualisiert werden.\
Dazu muss zunächst ein Widget erstellt werden.

![](../.gitbook/assets/Brewblox\_Server\_Hydrom\_Select\_Dashboard\_Content.png)

### Graph hinzufügen

Fügen Sie diesem Widget nun ein Graph hinzu

![Auswahl Graph als Widget um die Messwerte des Hydrom zu visulaisieren](../.gitbook/assets/Brewblox\_Server\_Hydrom\_Widget\_Selection.png)

Mit einem Klick auf "Create" wird dieses Widget erstellt.

![Bestätigen der Auswahl](../.gitbook/assets/Brewblox\_Server\_Hydrom\_Widget\_Graph.png)

### Aktivieren des Hydrom Messgerät

Um sich die Messwerte des Hydrom anzeigen zu lassen, reicht das Hinzufügen des Graph nicht aus.\
Die Messwerte des Hydrom müssen nicht sichtbar geschaltet werden, dafür gehen Sie oben rechts in der Ecke auf die beiden Dreiecke und aktivieren so die Einstellung des Graphen.

![Einstellungen des Graphen vornehmen](../.gitbook/assets/Brewblox\_Server\_Hydrom\_Graph\_Settings.png)

In den Einstellungen des Graphen muss der Filter aktiviert werden.\
Also praktisch, welche Messwerte möchte ich sehen.\
Für die Übersichlichkeit empfiehlt sich hier wirklich nur die benötigten Messwerte zu aktivieren.

![Aktivieren Sie die Filter nach Bedarf](../.gitbook/assets/Brewblox\_Server\_Hydrom\_Filter.png)

Am Ende sieht man mindestens die Testmessage, nach dem das Hydrom schlafengelegt wurde aber aber auch die Messwerte im eingestellten Intervall.​

![Endresultat: Das Hydrom liefert Messwerte an den Graph](../.gitbook/assets/Brewblox\_Server\_Hydrom\_Graph.png)
