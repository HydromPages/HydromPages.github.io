# Manuelle Aenderung der Formel

{% hint style="success" %}
Um diese Einstellung vornehmen zu können, müssen Sie Zugriff auf die Benutzeroberfläche haben. Wenn dies nicht der Fall ist, sehen Sie hier nach, wie man es macht:[access-to-the-user-interface.md](../../getting-started/establish-first-connection-to-the-hydrom/access-to-the-user-interface.md "mention")
{% endhint %}

Es gibt viele Möglichkeiten die Formel des Hydromes zu errechnen.
Wenn eine Formel errechnet wurde, dass kann diese unter ("Calibration" --> "Custom Formular")

![](../../.gitbook/assets/Calibration\_Adjust\_Formular.png)


### Einstellungen speichern

Das Speichern der Daten ist wichtig, da dies die einzige Möglichkeit ist, nach dem Aufwachen aus dem DeepSleep eine Verbindung zum Dienst herzustellen.

[Durch Drücken der Schaltfläche "save" werden die Einstellungen gespeichert](../.gitbook/assets/Save.png)

Ob das speichern erfolgreich war kann man überprüfen indem man sich die Einstellungsdatei unter http://hydrom001/settings.json/ anguckt. Diese Datei ist der dauerhafte Speicher des Hydrom.

Ein zweiter Weg das Speichern zu prüfen ist die Seite neuzuladen (bieten alle Browser an). Wenn dann die Eigenschaften wieder geladen werden, hat das Hydrom diese angenommen, sonst werden die alten Einstellungen wieder geladen.