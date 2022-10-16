# Aendern des Hydrom-Namens

{% hint style="danger" %}
ACHTUNG! Wenn Sie einen falschen Namen für das Hydrom eingegeben haben, können Sie sich nicht über das bestehende Netzwerk mit dem Hydrom verbinden.
Sie müssen dann die Konfiguration-Wifi verwenden.

Wenn die Einstellung falsch ist, können Sie das Hydrom wie hier beschrieben zurücksetzen:

[#reset-by-the-button](factory-reset.md#reset-by-the-button "mention")
{% endhint %}

{% hint style="info" %}
Das Ändern des Hydrom-Namens hat die folgenden Auswirkungen:

1. Der Zugriff auf die Benutzeroberfläche erfolgt nicht mehr über [http://hydrom001/](http://hydrom001), wie im Kapitel [#connect-to-the-hydrom-via-browser](../getting-started/establish-first-connection-to-the-hydrom/access-to-the-user-interface.md#connect-to-the-hydrom-via-browser "mention") beschrieben, sondern nun über http://\<own\_choosen\_name>/.
2.  Einige der im Kapitel [Broken link](broken-reference "mention") beschriebenen Dienste senden nun an eine andere Adresse.

    Dies wird jedoch im jeweiligen Anleitungsartikel gesondert erwähnt.
{% endhint %}

{% hint style="success" %}
Um diese Einstellung vornehmen zu können, müssen Sie Zugriff auf die Benutzeroberfläche haben. Sollte dies nicht der Fall sein, finden Sie hier eine Anleitung dazu:

[access-to-the-user-interface.md](../getting-started/establish-first-connection-to-the-hydrom/access-to-the-user-interface.md "mention")
{% endhint %}

## Schritt 1: Menüleiste öffnen

Um die Menüleiste aufzurufen, müssen Sie auf die drei Linien in der oberen linken Ecke klicken. (Siehe Pfeil)\
Dann wird die Menüleiste geöffnet.

<figure><img src="../.gitbook/assets/Bilder.png" alt=""><figcaption></figcaption></figure>

## Schritt 2: "Einstellungen" auswählen

## Schritt 3: Device Namen ändern

Um den Gerätenamen zu ändern, tragen Sie den neuen Namen unter dem Schriftzug "Devicename" ein. \
Per Default ist der Gerätename "Hydrom001"

![Gerätenamen des Hydromes ändern](../.gitbook/assets/DeviceName.png)

## Schritt 4: Einstellungen speichern

Das Speichern der Daten ist wichtig, da dies die einzige Möglichkeit ist, nach dem Aufwachen aus dem DeepSleep eine Verbindung zum Dienst herzustellen.

![Durch Drücken der Shaltfläche "SAVE" werden die Einstellungen gespeichert.](../.gitbook/assets/Save.png)

Ob das speichern erfolgreich war kann man überprüfen indem man sich die Einstellungsdatei unter http://hydrom001/settings.json/ anguckt. Diese Datei ist der dauerhafte Speicher des Hydrom.

Ein zweiter Weg das Speichern zu prüfen ist die Seite neuzuladen (bieten alle Browser an). Wenn dann die Eigenschaften wieder geladen werden, hat das Hydrom diese angenommen, sonst werden die alten Einstellungen wieder geladen.
