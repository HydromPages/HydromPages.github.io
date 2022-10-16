---
Beschreibung: >-
  Brewfather (https://brewfather.app/) ist eine Software-Cloud-Lösung für das
  Bierbrauen Bierbrauen. Sie ermöglicht die Erstellung, Synchronisierung und den
  Austausch von Rezepten. Die Hydrom hilft bei der Verfolgung des
  Gärungsprozesses
Abdeckung: https://i.ytimg.com/vi/1Sjh_-V1Tg8/maxresdefault.jpg
AbdeckungY: 0
---

{% hint style="success" %}
**Voraussetzung:**

1. Um diese Einstellung vorzunehmen, müssen Sie Zugriff auf die Benutzeroberfläche haben. Wenn dies nicht der Fall ist, sehen Sie hier nach, wie man es macht:[access-to-the-user-interface.md](../getting-started/establish-first-connection-to-the-hydrom/access-to-the-user-interface.md "mention")
2. **Brewfather-Benutzerkonto verfügbar**.\
   Es wurde ein Konto beim Cloud-Anbieter Brewfather eingerichtet.
3. **Brewfather App wurde heruntergeladen**.\
   https://brewfather.app/
{% endhint %}

# Vorbereiten des Dienstes

## Fügen Sie das Hydrom dem Brewfather hinzu.

### Aktivieren Sie "Custom Stream"

Öffnen Sie die Brewfather-App und navigieren Sie zu den Einstellungen. Dort aktivieren Sie das Gerät "Custom Stream".

![](../.gitbook/assets/Brewfather\_1.png) ![](../.gitbook/assets/Brewfather\_2.png)

### Kopiere die Brewfather ID

![Der markierte Parameter muss in das Hydrom gekoppelt werden.](../.gitbook/assets/Brewfather\_3.png)

# Einrichten des Hydrom

Öffnen Sie nun die Benutzeroberfläche des Hydroms, im besten Fall ist das Hydrom bereits im Netzwerk und kann einfach über http://hydrom001/ erreicht werden.

Ansonsten muss das Hydrom noch gestartet werden.

## Schritt 1: Menüleiste öffnen

Um die Menüleiste aufzurufen, müssen Sie auf die drei Linien in der oberen linken Ecke klicken. (Siehe Pfeil)\
Dann wird die Menüleiste geöffnet.

<figure><img src="../.gitbook/assets/Bilder.png" alt=""><figcaption></figcaption></figure>

## Schritt 2: Tab "Dienste" auswählen

### Aktivieren Sie Brewfather und ändern Sie die Einstellungen

Auf der Seite "Service" muss der Brewfather-Dienst aktiviert werden.

{% hint style="warning" %}
Wichtig hierbei ist, dass Ihr prüft ob in eurem Hydrom noch eine andere URL steht.\
In der Firmware bis 1.2.9 wurde der falsche Link \[/hydrom?id=xxxxxxxxxx] verwendet. Bitte ersetzt den Link durch den Link von der Brewfather UI \[/stream?id=XXXXXXX]\\
{% endhint %}

![Die hier vorgenommenen Einstellungen werden im Hydrom](<../.gitbook/assets/Brewfather (2).png>)

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