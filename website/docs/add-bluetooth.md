---
Beschreibung: >-
  Das Hydrom unterstützt die gleichen Bluetooth-Pakete wie die Variante aus den
  den USA. Wir haben also eine Austauschbarkeit für mehr Flexibilität
  geschaffen.
---

# Add Bluetooth

{% hint style="success" %}
**Voraussetzung:**

Um diese Einstellung vornehmen zu können, müssen Sie Zugriff auf die Benutzeroberfläche haben. Wenn dies nicht der Fall ist, sehen Sie hier nach, wie man es macht:[access-to-the-user-interface.md](getting-started/establish-first-connection-to-the-hydrom/access-to-the-user-interface.md "mention")
{% endhint %}

## Aktivieren von Bluetooth

Um die Bluetooth-Schnittstelle zu aktivieren, aktivieren Sie die Bluetooth-Option unter "Service" Das Hydrom sendet nun nach einem Neustart durch DeepSleep die folgenden Messwerte über Bluetooth. Dazu muss DeepSleep ebenfalls aktiviert sein, wie im Bild unten zu sehen ist.

{% hint style="warning" %}
Die Option "Testnachricht" ist für Bluetooth nicht verfügbar. Sie müssen also warten, bis das Hydrom aus dem Tiefschlaf erwacht.
{% endhint %}

![Bluetooth aktiviert](.gitbook/assets/Folie27.png)

{% hint style="warning" %}
Die Option "Testnachricht" ist für Bluetooth nicht verfügbar. Sie müssen also warten, bis das Hydrom aus dem Tiefschlaf erwacht.
{% endhint %}

## UUID wählen

Es können bis zu 8 Hydrom parallel über Bluetooth verbunden werden. Den verschiedenen Geräten werden dann verschiedene Farben zugewiesen Folgende Farben sind verfügbar:

* ROT "A495BB10-C5B1-4B44-B512-1370F02D74DE"
* GRÜN "A495BB20-C5B1-4B44-B512-1370F02D74DE"
* SCHWARZ "A495BB30-C5B1-4B44-B512-1370F02D74DE"
* LILA "A495BB40-C5B1-4B44-B512-1370F02D74DE"
* ORANGE "A495BB50-C5B1-4B44-B512-1370F02D74DE"
* BLAU "A495BB60-C5B1-4B44-B512-1370F02D74DE"
* GELB "A495BB70-C5B1-4B44-B512-1370F02D74DE"
* ROSA "A495BB80-C5B1-4B44-B512-1370F02D74DE"

## Wählen Sie die Sendeleistung

Im Hydrom kann hier die Leistung, mit der Bluetooth übertragen wird, eingestellt werden. Die Reichweite erhöht sich mit höherer Sendeleistung. Aber Achtung, auch die Akkulaufzeit verringert sich mit höherer Sendeleistung.

Die Leistungen mit aufsteigender Sendeleistung:

*   ESP\_PWR\_LVL\_N14

    Entspricht -14dbm
*   ESP\_PWR\_LVL\_N11

    Entspricht -11dbm
*   ESP\_PWR\_LVL\_N8

    Entspricht -8dbm
*   ESP\_PWR\_LVL\_N5

    Entspricht -5dbm
*   ESP\_PWR\_LVL\_N2

    Entspricht -2dbm
*   ESP\_PWR\_LVL\_P1

    Entspricht 1dbm
*   ESP\_PWR\_LVL\_P4

    Entspricht 4dbm
*   ESP\_PWR\_LVL\_P7

    Entspricht 7dbm

### Einstellungen speichern

Das Speichern der Daten ist wichtig, da dies die einzige Möglichkeit ist, nach dem Aufwachen aus dem DeepSleep eine Verbindung zum Dienst herzustellen.

![Durch Drücken der Shaltfläche "SAVE" werden die Einstellungen gespeichert.](../.gitbook/assets/Save.png)

Ob das speichern erfolgreich war kann man überprüfen indem man sich die Einstellungsdatei unter http://hydrom001/settings.json/ anguckt. Diese Datei ist der dauerhafte Speicher des Hydrom.

Ein zweiter Weg das Speichern zu prüfen ist die Seite neuzuladen (bieten alle Browser an). Wenn dann die Eigenschaften wieder geladen werden, hat das Hydrom diese angenommen, sonst werden die alten Einstellungen wieder geladen.

### DeepSleep aktivieren

Das Aktivieren des DeepSleep ist zwingend erforderlich, damit das Hydrom Daten senden kann.
Ist DeepSleep aktiviert, dann wacht das Hydrom nach der festgelegten Zeit auf und sendet die Daten an den eingestellten Service.
Danach schläft das Hydrom wieder ein und wartet auf den neuen Einsatz.

{% content-ref url="../other-settings/enable-deepsleep.md" %}
[enable-deepsleep.md](../other-settings/enable-deepsleep.md)
{% endcontent-ref %}
