# Kalibrierungsstatus prüfen

{% hint style="success" %}
Um den Kalibrierungsstatus zu überprüfen, müssen Sie Zugriff auf die Benutzeroberfläche haben. Falls dies nicht der Fall ist, lesen Sie hier, wie es geht:[access-to-the-user-interface.md](../getting-started/establish-first-connection-to-the-hydrom/access-to-the-user-interface.md "mention")
{% endhint %}

Am einfachsten überprüft man den Kalibrierungsstatus indem man das Hydrom in 25 Grad warmes Wasser legt und den Hauptbildschirm aufruft.

Den Hauptbildschirm ruf man auf, indem man http://hydrom001/ in den Browser eingibt.
Das "hydrom001" sollte dabei durch den Device-Namen ersetzt werden, der gesetzt wurde.
"hydrom001 ist der Default-Name.

Wenn jetzt das Hydrom bei 25Grad Wassertemperatur einen Wert von nahe 0P anzeigt, dann ist das Hydrom kalibiriert.

Sollte der Wert grüßer als 15 sein, liegt die Vermutung nahe, dass Gravity als Einheit eingestellt wurde.
Das lässt sich ändern, indem man unter Settings bei Tilt-Unit "Plato" auswählt.

Ist das Hydrom nicht kalibiriert gibt es drei Möglichkeiten das nachzuholen.
1. PlainWaterKalibrierung
Das Hydrom misst den aktuellen Winkel im Wasser und errechnet aus den bekannten Zusammenhängen eine Näherung an die tatsächlich Kalibrierungsformel.
2. Referenzkalibrierung
Das Hydrom wird in eine Referenzflüssigkeit gelegt und wenn sich die Dichte ändert, dann wird diese mit einem Referenzmessgerät gemessen und in das Hydrom eingetragen.
Dieser Schritt muss dann 7x widerholt werden, damit die Formel bestimmt werden kann.
Zum Verändern der Dichte kann Hefe oder Zucker verwendet werden.