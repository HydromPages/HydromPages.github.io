# Zugang zur Benutzeroberfläche

{% hint style="success" %}
**Voraussetzung:**

1. Das Hydrom muss eingeschaltet sein\
   Wie Sie das Hydrom einschalten können, finden Sie hier:\
   [turn-on-the-hydrom.md](turn-on-the-hydrom.md "mention")
2.  Das Hydrom muss sich im Konfigurationsmodus befinden\
    Im Normalbetrieb wird keine Benutzeroberfläche geladen, um die Batterie nicht zu verschwenden. Daher muss das Hydrom in den Konfigurationsmodus versetzt werden.

    Ob sich das Hydrom im Deepsleep befindet, erkennen Sie daran, dass die grüne LED wie hier beschrieben leuchtet: [#1-status-led-of-the-hydrom-logic](../indicator-leds.md#1-status-led-of-the-hydrom-logic "mention")

    Wenn sich das Hydrom im Tiefschlaf befindet, kann es gemäß den Anweisungen auf dieser Seite aufgeweckt werden:\
    [wakeup-the-hydrom.md](wakeup-the-hydrom.md "mention")
{% endhint %}

## Verbinden Sie sich mit dem Hydrom über den Browser

### Accesspoint Mode
1. Verbinden Sie sich mit dem Netzwerk des Hydrom, indem Sie das Wifi "hydrom\_XXXXX" auswählen.
2. Das anfängliche Passwort für das Hydrom lautet "123456789".
3. Greifen Sie in einem beliebigen Browser auf die WebUI zu, indem Sie die folgende Adresse aufrufen [http://192.168.2.1](http://192.168.2.1)

### Client Mode
Greifen Sie in einem beliebigen Browser auf die WebUI zu, indem Sie die folgende Adresse erreichen [http://hydrom001/](http://hydrom001)

![Scan me to Access the WebFrontend](../../.gitbook/assets/QR\_hydrom001.png)

Wenn der Name des Hydroms geändert wurde, muss das Hydrom unter dem neu gewählten Namen erreicht werden.

{% hint style="warning" %}
Es kann sein, dass Ihre Netzwerkinfrastruktur das Setzen eigener Namen verbietet. In diesem Fall müssen Sie die unten genannte Alternative verwenden
{% endhint %}

Eine andere Möglichkeit für fortgeschrittene Benutzer ist die folgende:

1. Verbinden Sie sich mit Ihrem Router
2. Finden Sie heraus, welche IP dem Hydrom zugewiesen wurde.
3. Öffnen Sie im Browser die Adresse: http://<IP-Adresse>

