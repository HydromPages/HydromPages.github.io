---
Beschreibung: >-
  Wenn Sie Ihren ESP32 in den Tiefschlafmodus versetzen, wird der Stromverbrauch
  reduziert und Ihre Batterien halten länger.
---

# DeepSleep einschalten

{% hint style="success" %}
**Voraussetzung:**\
Um diese Einstellung vornehmen zu können, müssen Sie Zugriff auf die Benutzeroberfläche haben. Wenn dies nicht der Fall ist, sehen Sie hier nach, wie es geht:

[access-to-the-user-interface.md](../getting-started/establish-first-connection-to-the-hydrom/access-to-the-user-interface.md "mention")
{% endhint %}

## Schritt 1: Menüleiste öffnen

Um die Menüleiste aufzurufen, müssen Sie auf die drei Linien in der oberen linken Ecke klicken. (Siehe Pfeil)\
Dann wird die Menüleiste geöffnet.

<figure><img src="../.gitbook/assets/Bilder.png" alt=""><figcaption></figcaption></figure>

## Schritt 2: "Einstellungen" auswählen

## Schritt 2: DeepSleep aktivieren

Aktivieren Sie "DeepSleep" und wählen Sie dann die Zeit, die das Hydrom schlafen soll.

![](../.gitbook/assets/DeepSleep.png)

Wenn Sie das Hydrom sofort in den Schlaf versetzen wollen, können Sie in der Navigationsleiste "DeepSleep" auswählen.\
Sonst kann durch das Betätigendes reset Taster in den Schlaf versetzt werden.

{% hint style="info" %}
**Schlafzeitberechnung**

Derzeit benötigt das Hydrom 6 Sekunden, um zu starten, das Netzwerk aufzubauen und die Messwerte zu senden.

Das bedeutet, dass Sie für eine konstante Datenübertragung alle 15 Minuten eine Schlafzeit von 14 Minuten und 54 Sekunden einstellen müssen.
{% endhint %}

### Einstellungen speichern

Das Speichern der Daten ist wichtig, da dies die einzige Möglichkeit ist, nach dem Aufwachen aus dem DeepSleep eine Verbindung zum Dienst herzustellen.

![Durch Drücken der Shaltfläche "SAVE" werden die Einstellungen gespeichert.](../.gitbook/assets/Save.png)

Ob das speichern erfolgreich war kann man überprüfen indem man sich die Einstellungsdatei unter http://hydrom001/settings.json/ anguckt. Diese Datei ist der dauerhafte Speicher des Hydrom.

Ein zweiter Weg das Speichern zu prüfen ist die Seite neuzuladen (bieten alle Browser an). Wenn dann die Eigenschaften wieder geladen werden, hat das Hydrom diese angenommen, sonst werden die alten Einstellungen wieder geladen.