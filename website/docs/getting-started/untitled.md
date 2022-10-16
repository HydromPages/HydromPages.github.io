# Aendern der Netzwerkeinstellungen

{% hint style="danger" %}
ACHTUNG! Wenn Sie falsche Informationen eingegeben haben (falsche SSID, falsche Passwörter etc.), können Sie sich nicht mehr mit dem Hydrom verbinden und müssen das Gerät zurücksetzen.

Wenn die Einstellung falsch ist, können Sie das Hydrom wie hier beschrieben zurücksetzen:

[#reset-mit-der-taste](../other-settings/factory-reset.md#reset-mit-der-taste "mention")
{% endhint %}

Um die Netzwerkeinstellungen zu ändern, öffnen Sie die Navigationsleiste auf der linken Seite und wählen Sie die Option "Wifi" aus

1.  Access-Point

    ermöglicht es dem Gerät, als WiFi-Access-Point zu arbeiten.

    Der Benutzer kann den Namen (SSID) und das Passwort für den Zugriff auf den AP ändern. Nachdem Sie die gewünschten Einstellungen eingegeben haben, drücken Sie auf "Save".
2.  Netzwerk-Client

    ermöglicht es dem Gerät, sich mit einem verfügbaren WiFi-Netzwerk zu verbinden.

    Um in diesen Modus zu wechseln, muss der Benutzer den Namen (SSID) und das Passwort für die Verbindung mit einem lokalen WiFi-Netzwerk eingeben.

###  HYDROM als Client
Um den Hydrom als Client in einem bestehenden Netzwerk einzurichten, geben Sie den Namen des bestehenden Netzwerks in das Feld unter "SSID" ein.

In das Feld unter "Passwort" geben Sie das Passwort des bestehenden Netzwerks ein.

![Beispiel der Einstellung "Hydrom im Client-Modus"](../.gitbook/assets/Network\_Settings\_Client\_Mode.png)

### HYDROM als Server
Um den Hydrom als Accesspoint einzurichten, geben Sie in das Feld unter "SSID" einen Namen für den Accesspoint ein.

In das Feld unter "Passwort" geben Sie das Passwort des Accesspoints ein.

![](../.gitbook/assets/Network\_Settings\_Accesspoint\_Mode.png)


### Einstellungen speichern

Das Speichern der Daten ist wichtig, da dies die einzige Möglichkeit ist, nach dem Aufwachen aus dem DeepSleep eine Verbindung zum Dienst herzustellen.

![Durch Drücken der Shaltfläche "SAVE" werden die Einstellungen gespeichert.](../.gitbook/assets/Save.png)

Ob das speichern erfolgreich war kann man überprüfen indem man sich die Einstellungsdatei unter http://hydrom001/settings.json/ anguckt. Diese Datei ist der dauerhafte Speicher des Hydrom.

Ein zweiter Weg das Speichern zu prüfen ist die Seite neuzuladen (bieten alle Browser an). Wenn dann die Eigenschaften wieder geladen werden, hat das Hydrom diese angenommen, sonst werden die alten Einstellungen wieder geladen.
