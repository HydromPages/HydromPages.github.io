# Firmware

Hier finden Sie die neueste Firmware. Wie Sie die Firmware und das Image installieren können, erfahren Sie hier:

{% content-ref url="other-settings/firmware-update.md" %}
[firmware-update.md](other-settings/firmware-update.md)
{% endcontent-ref %}

{% file src=".gitbook/assets/firmware_1.2.16.bin" %}

## Version 1.2.16 - 2022-4-5 <a href="#version-1.2.11-2022-2-10" id="version-1.2.11-2022-2-10"></a>

### &#x20;Behoben

* Die Plainwatercalibration wurde behoben

## Version 1.2.15 - 2022-4-3 <a href="#version-1.2.11-2022-2-10" id="version-1.2.11-2022-2-10"></a>

### &#x20;Behoben

* Stabilisierung der Lagesensormessungen.&#x20;
* Ubidots Schnittstelle \
  Das letzte Update enthielt einen Fehler, der mit diesem Update behoben wurde

## Version 1.2.14 - 2022-3-30 <a href="#version-1.2.11-2022-2-10" id="version-1.2.11-2022-2-10"></a>

### Hinzugefügt

* LED bei Start im Konfigurationsmodus an\
  Sofort wenn im Konfigurationsmodus gestartet wird, werden die beiden LED´s eingeschaltet.
* Wifi-Reset\
  Wenn der Reset-Button länger als 3 Sekunden gedrückt wird, dann wird das Hydrom mit zurückgesetzen Wifi-Einstellungen gestartet.

### &#x20;Behoben

* Brewfather Server\&Port wird jetzt persistent gespeichert.\
  Es wurde der Brewfather Server-Adresse \&Port veränderbar gemacht.
* \


### Geändert

* Default Brewblox-Port wurde von 91 auf 1883 geändert&#x20;



{% file src=".gitbook/assets/firmware_1.2.13 (1).bin" %}

## Version 1.2.13 - 2022-3-11 <a href="#version-1.2.11-2022-2-10" id="version-1.2.11-2022-2-10"></a>





### Hinzugefügt

* Energiesparen: Dynamische WLAN Sendeleistung\
  Das Hydrom versucht erstmal mit einer geringeren Sendeleistung die Nachricht zu versenden und regelt dann langsam hoch, bis die Nachricht versendet wurde.
* Erkennung: Server erreichbar (im Service Menü)\
  Wenn eine Testnachricht abgesetzt wurde, dann wird hinter dem Eingabefenster für die Server-Adresse ein rotes oder grünes Quadrat eingeblendet, je nachdem ob eine verbindung besteht oder nicht.\
  Zum Testen ob eine Internetverbindung besteht kann "google.de" als Server eingeben werden\
  Dieses Feature hilft bei dem Finden von Fehlern.
* Erkennung: Port am Server geöffnet (im Service Menü)\
  Wenn eine Testnachricht abgesetzt wurde, dann wird hinter dem Eingabefenster für den Port ein rotes oder grünes Quadrat eingeblendet, je nachdem ob der Port offen ist oder nicht.\
  Dieses Feature hilft bei dem Finden von Fehlern.

### &#x20;Behoben

* Bluetooth Sendeleistung hatte einen Rechtschreibfehler

### Geändert

* Standardeinstellung Brewbox Username/Passwort ist nun leer
* Bluetooth ist standardmäßig deaktiviert.
* Höhere Auflösung bei der Berechnung des Batterie-Füllstandes

{% file src=".gitbook/assets/firmware_1.2.12.bin" %}

## Version 1.2.12 - 2022-2-18 <a href="#version-1.2.11-2022-2-10" id="version-1.2.11-2022-2-10"></a>

### Behoben

* Falsche Werte bei Grainfather, Brewfather und Ubidots.\
  \
  Hinweis zu Ubidots:\
  Der Anbieter erlaubt nur eine gewisse Anzahl an Variablem pro Gerät\
  Das löschen der nicht benötigten Variablen kann Übertragungsartefakten vorbeugen.







{% file src=".gitbook/assets/firmware_1.2.11.bin" %}

## Version 1.2.11 - 2022-2-10 <a href="#version-1.2.11-2022-2-10" id="version-1.2.11-2022-2-10"></a>

### Behoben

* Vereinzelt kam es bei Kunden zu unstabilen Temperaturwerten. Es wurde ein Mechanismus eingebaut der die Temperatur auf Plausibilität prüft und nur dan aktzeptiert, wenn diese gegebene ist.

{% file src=".gitbook/assets/firmware_1.2.10.bin" %}

## Version 1.2.10 - 2022-1-16

### Hinzugefügt

* Parameterübergabe in der URL wurde eingeführt. \
  Anleitung finden Sie hier:[#url-ersetzungsfunktion](connect-services-1/connect\_to\_http.md#url-ersetzungsfunktion "mention")

### Behoben

* Die Support-Seite wurde überarbeitet
* InfluxDB Name wurde behoben

### Geändert

* Der Default-Pfad für Brewfather wurde angepasst
* Telegram UI wurde gelöscht, da noch nicht im Backend implementiert
* Thimgsspeak UI wurde gelöscht, da noch nicht im Backend implementiert
* SoftwareReset wurde gelöscht, da es zu unbeabsichtigten Resetten kam. Um das Hydrom per Software zu resetten muss die URI "/reset" hinter der IP-Adresse eingegeben werden.

{% file src=".gitbook/assets/firmware_1.2.10.bin" %}

## Version 1.2.9 - 2022-1-10

### Geändert

* Die Werte für Tilt und Plato wurden in den Services vertauscht. Dadurch ist das Hydrom kompatibel zu den iSpindel-Anwendungen.

## Version 1.2.8 - 2022-1-5

### Hinzugefügt

* Plainwatercalibration wird unterstützt

## Version 1.2.7 - 2022-1-1

### Hinzugefügt

* Grainfather wird unterstützt

## Version 1.2.6 - 2021-12-31

### Behoben

* Fehler beim Zurücksetzen auf die Werkseinstellungen wurde behoben

### Geändert

* Die LEDs blinken nun nicht mehr, wenn das Hydrom durch den Timer aufgeweckt wird.
* Vor dem Werksreset werden alle Einstellungen eingelesen, da die Offsets der MPU6050 nicht zurückgesetzt werden.

## Version 1.2.5 - 2021-12-30

### Behoben

* Das Zurücksetzen wurde stabilisiert, so dass ein Zurücksetzen immer noch möglich ist, wenn Einstellungen das Hydrom zu früh zum Absturz bringen.

### Geändert

* Es wird per LED angezeigt, wenn Sie sich auf ein "Zurücksetzen" zubewegen. Die LEDs flackern in 500ms, bis die 8 Sekunden Wartezeit erreicht sind. Dann endet das Flackern mit einer grünen LED.

## Version 1.2.4 - 2021-12-15

### Behoben

* Einige Verbesserungen aus dem Feedback der Tester

### Geändert

* Anpassungen an der UI nach Rückmeldungen der Tester
* Die Grenze des Plato-Berechnungspolynoms wurde von max x^3 auf x^6 angehoben.

{% file src=".gitbook/assets/firmware_1.2.4.bin" %}

## Version 1.2.0 - 2021-11-03

### Hinzugefügt

* Deepsleep so lange wie nötig
* Firmware-Upload über Webinterface
* Kalibrierungsassistent (Zucker- und Referenzmethode)
* BLE-Unterstützung
* Wifi (Standalone und Client-Modus)
* Sichern/Wiederherstellen von Einstellungen
* Ultra niedriger Stromverbrauchsalgorithmus
* Multible Cloud-Services Unterstützung
  * Brewblox
  * Brewfather
  * Craftbeerpi
  * Fhem
  * Http
  * InfluxDB
  * Mqtt
  * Prometheus
  * Tcontrol
  * Tcp
  * Telegram
  * ThingSpeak
  * Ubidots
* MPU ist kalibriert
* Drift Compansation
* Unterstützung mehrerer Einheiten für Temperatur und Plato
  * Plato
  * Spezifische Schwerkraft
  * Schwerkraft (Lage des Hydroms im Raum)
  * Kelvin
  * Fahrenheit
  * Celsius
* Unterstützung von Signal-LEDs zur Erhöhung der Bedienbarkeit.
* Intuitive Weboberfläche
* Glättung der Messwerte
* Unterstützung für eine Reset-Taste
* Konfigurierbarer Name zur Unterstützung mehrerer Geräte parallel.
