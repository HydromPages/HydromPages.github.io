---
description: >-
  Ubidots ist ein Cloud-Service, der Messdaten von internetfähigen Geräten
  annimmt, speichert und visualisiert.
cover: >-
  https://files.startupranking.com/startup/thumb/6796_043b01ef967da629abc843eca1f2a477906da07a_ubidots_l.png
coverY: 0
---

# Mit Ubidots verbinden

{% hint style="success" %}
**Voraussetzung:**

1. **Zugriff auf Benutzeroberfläche** \
   Um diese Einstellung vorzunehmen, müssen Sie Zugriff auf die Benutzeroberfläche haben. Wenn dies nicht der Fall ist, sehen Sie hier nach, wie man es macht:[access-to-the-user-interface.md](../getting-started/establish-first-connection-to-the-hydrom/access-to-the-user-interface.md "mention")
2. **Ubidots Benutzerkonto vorhanden**\
   Es wurde ein Konto bei dem Cloud-Anbieter ubidots erstellt. Zum Zeitpunkt des Schreibens gibt es einen kostenlosen Account für die nicht-kommerzielle Nutzung.
{% endhint %}

# Vorbereiten des Dienstes

## Schritt 1: Navigieren Sie zum Devicemanager

Oben in der Mitte befindet sich die Geräteverwaltung. Hier muss ein neues Gerät hinzugefügt werden

![](<../.gitbook/assets/Screenshot 2021-08-07 at 22-06-10 Ubidots Devices.png>)

## Schritt 2: Hinzufügen von " Blank Device"

Das Hydrom soll als "Blank Device" hinzugefügt werden.

![Add New Device](<../.gitbook/assets/Screenshot 2021-08-07 at 22-07-19 Ubidots Devices.png>)

## Schritt 3: Tragen Sie den Gerätenamen  ein

Es ist wirklich wichtig, dass ihr hier den Gerätenamen eintragt. Z.B. "Hydrom001" in der Defaultkonfiguration

![Choose Device Name](<../.gitbook/assets/Screenshot 2021-08-07 at 22-07-42 Ubidots Devices (1).png>)

## Schritt 4: Kopieren Sie den Token

Nach dem Hinzufügen des Geräts muss das Gerät geöffnet werden und dann das Token kopiert werden (siehe rote Markierung).

![Copy Ubidots Token](<../.gitbook/assets/Screenshot 2021-08-07 at 22-18-04 Ubidots Devices (1).png>)

# Einrichten des Hydrom

Öffnen Sie nun die Benutzeroberfläche des Hydroms, im besten Fall ist das Hydrom bereits im Netzwerk und kann einfach über http://hydrom001/ erreicht werden.

Ansonsten muss das Hydrom noch gestartet werden.

## Schritt 1: Menüleiste öffnen

Um die Menüleiste aufzurufen, müssen Sie auf die drei Linien in der oberen linken Ecke klicken. (Siehe Pfeil)\
Dann wird die Menüleiste geöffnet.

<figure><img src="../.gitbook/assets/Bilder.png" alt=""><figcaption></figcaption></figure>

## Schritt 2: Tab "Dienste" auswählen

### Aktivieren der Ubidots-Schnittstelle

![Activating the Ubidots interface and entering the token](<../.gitbook/assets/Screenshot 2021-09-06 at 21-31-15 Service.png>)


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