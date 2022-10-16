---
description: >-
  Die kostenlose Brau-App enthält alle Werkzeuge, Kalkulatoren und Bierrezepte, die
  die Sie befähigen, zu Hause fantastisches Bier zu brauen.
cover: https://grainfather.com/wp-content/uploads/2021/06/GF-logo.svg
coverY: 0
---

{% hint style="success" %}
**Voraussetzung:**

1. **Zugang zur Benutzeroberfläche**]
   Um diese Einstellung vorzunehmen, müssen Sie Zugriff auf die Benutzeroberfläche haben. Wenn dies nicht der Fall ist, sehen Sie hier nach, wie man es macht:[access-to-the-user-interface.md](../getting-started/establish-first-connection-to-the-hydrom/access-to-the-user-interface.md "mention")
2. **Grainfather-Benutzerkonto verfügbar**.\
   Es wurde ein Konto beim Cloud-Anbieter Grainfather erstellt.
3. **Grainfather App wurde heruntergeladen**.\
   https://grainfather.com/brewing-app/
{% endhint %}

# Vorbereiten des Dienstes

## Schritt 1: Navigieren Sie zum Ausrüstungsmanager.

Wählen Sie das Symbol am unteren Rand, das wie ein Kessel aussieht, dann öffnet sich der Geräte-Manager

## Schritt 2: Blanko Gerät hinzufügen

Das Hydrom soll als "Blanko Gerät" hinzugefügt werden.

## Schritt 3: Gerätetyp wählen

Der hier gewählte Name wird dann als Gerätename verwendet. Hydrom ist nur ein Beispiel, der Name kann frei gewählt werden.

## Schritt 4: Benutzerdefiniert wählen

Nach dem Hinzufügen des Geräts muss das Gerät geöffnet werden und dann das Token kopiert werden (siehe rote Markierung).

## Schritt 5: Gerätename wählen

## Schritt 6: Das Gerät wurde hinzugefügt

## Schritt 7: Holen Sie sich die Verbindungseinstellung

### Schritt 7.1: Öffnen der Anleitung

### Schritt 7.2: Notieren der URL

Wichtig ist, dass zwischen "IOT" und "custom" der Rest gleich bleibt. Der interessante Teil ist durch "XXXX-XXXX" gekennzeichnet.

# Einrichten des Hydrom

Öffnen Sie nun die Benutzeroberfläche des Hydroms, im besten Fall ist das Hydrom bereits im Netzwerk und kann einfach über http://hydrom001/ erreicht werden.

Ansonsten muss das Hydrom noch gestartet werden.

## Schritt 1: Menüleiste öffnen

Um die Menüleiste aufzurufen, müssen Sie auf die drei Linien in der oberen linken Ecke klicken. (Siehe Pfeil)\
Dann wird die Menüleiste geöffnet.

<figure><img src="../.gitbook/assets/Bilder.png" alt=""><figcaption></figcaption></figure>

## Schritt 2: Tab "Dienste" auswählen

### Aktivieren von Grainfaher

1. Suchen Sie dann in der Liste der Dienste nach "Grainfather" und aktivieren Sie es.
2. Es erscheint eine Auswahl an Einstellungen. 4.
3. die Einstellungen können beibehalten werden. Sie müssen nur den Teil "XXXX-XXXX" durch den Teil aus der GF-App ersetzen. Auf diese Weise weiß GF, dass das Hydrom Daten sendet.


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