---
Beschreibung: >-
  Das Hydrom unterstützt mehrere Einheiten für die Neigung und die Temperatur.
  Hier wird erklärt, wie man die Einheit ändert.
---

# Einheiten anpassen

{% hint style="success" %}
**Voraussetzung:** Um diese Einstellung vornehmen zu können, müssen Sie Zugriff auf die Benutzeroberfläche haben. Wenn dies nicht der Fall ist, sehen Sie hier nach, wie man es macht:[access-to-the-user-interface.md](../getting-started/establish-first-connection-to-the-hydrom/access-to-the-user-interface.md "mention")
{% endhint %}

## Schritt 1: Menüleiste öffnen

Um die Menüleiste aufzurufen, müssen Sie auf die drei Linien in der oberen linken Ecke klicken. (Siehe Pfeil)\
Dann wird die Menüleiste geöffnet.

<figure><img src="../.gitbook/assets/Bilder.png" alt=""><figcaption></figcaption></figure>

## Schritt 2: "Einstellungen" auswählen

## Schritt 3: Einheiten ändern

Auf der Seite für die Einstellungen können die Eiheiten der Homepage geändert werden.

![](../.gitbook/assets/Units.png)

### Neigung
* **Plato**
* **Spezifische Dichte**
* **Grad**

### Temperatur"
* **Celsius**
* **Fahrenheit**
* **Kelvin**


{% hint style="info" %}
Die eingestellten Einheiten haben keinen Einfluss auf die Dienste.

Das bedeutet, dass die gesendeten Daten immer konsistent sind, unabhängig davon, welche Einheit eingestellt ist.
{% endhint %}

### Schritt 4: Einstellungen speichern

Das Speichern der Daten ist wichtig, da dies die einzige Möglichkeit ist, nach dem Aufwachen aus dem DeepSleep eine Verbindung zum Dienst herzustellen.

![Durch Drücken der Shaltfläche "SAVE" werden die Einstellungen gespeichert.](../.gitbook/assets/Save.png)

Ob das speichern erfolgreich war kann man überprüfen indem man sich die Einstellungsdatei unter http://hydrom001/settings.json/ anguckt. Diese Datei ist der dauerhafte Speicher des Hydrom.

Ein zweiter Weg das Speichern zu prüfen ist die Seite neuzuladen (bieten alle Browser an). Wenn dann die Eigenschaften wieder geladen werden, hat das Hydrom diese angenommen, sonst werden die alten Einstellungen wieder geladen.
