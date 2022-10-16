


## Schritt 1: Menüleiste öffnen

Um die Menüleiste aufzurufen, müssen Sie auf die drei Linien in der oberen linken Ecke klicken. (Siehe Pfeil)\
Dann wird die Menüleiste geöffnet.

<figure><img src="../.gitbook/assets/Bilder.png" alt=""><figcaption></figcaption></figure>

---

1. **Access to the user interface**\
   To make this setting you must have access to the user interface. If this is not the case, see here how to do it:[access-to-the-user-interface.md](../getting-started/access-to-the-user-interface.md "mention")

--- 

## Insert Service settings in Hydrom

Now open the user interface of the Hydrom, in the best case the Hydrom is already in the network and can be easily accessed via http//hydrom001/.

Otherwise the Hydrom must still be started.



---

### zusätzliche Einstellungen

Um nicht zu viel Strom zu verbrauchen, würden wir Bluetooth ausschalten, wenn es nicht benötigt wird. Dies wurde hier dokumentiert:

{% content-ref url="../add-bluetooth.md" %}
[add-bluetooth.md](../add-bluetooth.md)
{% endcontent-ref %}

Damit das Hydrom die Daten zuverlässig übertragen kann, muss eine DeepSleep-Zeit eingestellt werden. Dies ist auf dieser Seite dokumentiert:

{% content-ref url="../other-settings/enable-deepsleep.md" %}
[enable-deepsleep.md](../other-settings/enable-deepsleep.md)
{% endcontent-ref %}

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

---

# Einrichten des Hydrom

Öffnen Sie nun die Benutzeroberfläche des Hydroms, im besten Fall ist das Hydrom bereits im Netzwerk und kann einfach über http://hydrom001/ erreicht werden.

Ansonsten muss das Hydrom noch gestartet werden.