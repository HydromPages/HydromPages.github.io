---
description: >-
  MQTT is an OASIS standard messaging protocol for the Internet of Things (IoT).
  Many services can be connected via this open standard.
cover: https://mqtt.org/assets/downloads/mqtt-logo.png
coverY: 0
---

# Das Hydrom als MQTT-Publisher einrichten

{% hint style="success" %}
**Voraussetzung:**

1. **Zugriff auf Benutzeroberfläche**\
   Um diese Einstellung vorzunehmen, müssen Sie Zugriff auf die Benutzeroberfläche haben. Wenn dies nicht der Fall ist, sehen Sie hier nach, wie man es macht:[access-to-the-user-interface.md](../getting-started/establish-first-connection-to-the-hydrom/access-to-the-user-interface.md "mention")
2. **Zugang zu einem MQTT-Server**\
   Es wurde ein MQTT-Server eingerichtet oder es besteht Zugang zu einem Cloud-MQTT-Server.
{% endhint %}

# Sammeln der Informationen von der MQTT-Schnittstelle

* Server (IP Adresse)
* Port
* Nutzername
* Passwort
* Topiclevel

# Einrichten des Hydrom

Öffnen Sie nun die Benutzeroberfläche des Hydroms, im besten Fall ist das Hydrom bereits im Netzwerk und kann einfach über http://hydrom001/ erreicht werden.

Ansonsten muss das Hydrom noch gestartet werden.

## Schritt 1: Menüleiste öffnen

Um die Menüleiste aufzurufen, müssen Sie auf die drei Linien in der oberen linken Ecke klicken. (Siehe Pfeil)\
Dann wird die Menüleiste geöffnet.

<figure><img src="../.gitbook/assets/Bilder.png" alt=""><figcaption></figcaption></figure>

## Schritt 2: Tab "Dienste" auswählen

### Aktivieren Sie MQTT und ändern Sie die Einstellungen

![Die hier vorgenommenen Einstellungen werden im Hydrom gespeichert](<../.gitbook/assets/MQTT\_ (2).png>)

**Server Adresse:** Name oder IP des MQTT Brokers

**Server Port:** MQTT-Port, der standardmäßig 1883 ist

**Benutzername:** Den Benutzernamen erhalten Sie von dem MQTT Broker

**Passwort:** Das Passowort erhalten Sie von dem MQTT Broker

#### Topiclevel und Erklärung&#x20;

In MQTT bezieht sich das Wort Topic auf eine UTF-8-Zeichenkette, die der Broker verwendet, um Nachrichten für jeden verbundenen Client zu filtern. Das Topic besteht aus einer oder mehreren Topic-Ebenen auch Topiclevel genannt. Jede Topic-Ebene wird durch einen Schrägstrich getrennt.

<figure><img src="../.gitbook/assets/Topiclevel.png" alt=""><figcaption><p>Erklärung Topiclevel </p></figcaption></figure>

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

## Hydrom-Messwerte auf dem MQTT-Broker ansehen

### Prüfen ob das Topic gepublished wurde

Hier emfiehlt sich eine MQTT Client App zu verwenden. Unter IOS empfehle ich die App MQTTAnalyzer.

Mit der App kan man sich dann mit dem Broker verbinden und auf das Topiclevel subscriben und sich die Messwerte anzeigen lassen. So kann man im ersten Schritt sichergehen, dass die Daten korrekt gesendet werden und vom Broker korrekt empfangen werden.

### Das weitere Vorgehen ist stark von dem MQTT-Client abhängig.

Hier kann man kein allgemeines Vorgehen beschreiben. In Zukunft werden hier Beispielkonfigurationen für die gänigsten Clients auftauchen, dafür bitte ich euch um mithilfe. Bitte sendet mir eure funktionierenden Konfigurationen und ich werde sie hier, selbstverständlich anonymisiert, veröffentlichen.
