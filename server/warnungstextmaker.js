function WarnungsNarchichtErstellen(
    headline,
    description,
    event,
    urgency,
    severity,
    data,
    instruction,
    senderName,
    useNIASradioschem,
    area,
) {
    var Anfang;
    var Einleitung;
    var beschreibung1;
    var beschreibung2;
    var beschreibung3;
    var beschreibung4;
    var beschreibung5;
    var beschreibung6;
    var beschreibung7;
    var beschreibung8;
    var beschreibung9;
    var ende;
    var instructionclean;
    var areaclean;


    if (!description) {
        var descriptionStringFiltered = data.info[0].description
            .replace(/(<br\s*\/?>)+/gi, " ")
            .replace(/\*{3,}/g, "")             // *** oder mehr Sternchen
            .replace(/\s{2,}/g, " ")            // doppelte Leerzeichen
            .replace(/-/g, " ")
            .trim();
    } else {
        var descriptionvarStringFiltered = description.info[0].description
            .replace(/(<br\s*\/?>)+/gi, " ")
            .replace(/\*{3,}/g, "")             // *** oder mehr Sternchen
            .replace(/\s{2,}/g, " ")            // doppelte Leerzeichen
            .replace(/-/g, " ")
            .trim();
    }
    if (instruction) {
        instructionclean = instruction
            .replace(/(<br\s*\/?>)+/gi, " ")
            .replace(/\*{3,}/g, "")             // *** oder mehr Sternchen
            .replace(/\s{2,}/g, " ") // doppelte Leerzeichen
            .replace(/-/g, " ")
            .trim();
    }
    if (area) {
        areaclean = area
            .replace(/(<br\s*\/?>)+/gi, " ")
            .replace(/\*{3,}/g, "")             // *** oder mehr Sternchen
            .replace(/\s{2,}/g, " ")            // doppelte Leerzeichen
            .trim();
    }

    if (useNIASradioschem) {
        Anfang = "Es wurde eine offizielle Warnung erkannt. Bitte warten...";
        Einleitung =
            `Die zust�ndige Stelle ${senderName} warnt vor dem Ereignis. ` +
            headline + ".";

        if (severity === "Moderate") {
            beschreibung1 = ". Die Warnung hat den Schweregrad moderat.";
            beschreibung2 =
                "Eine moderate Warnung bedeutet, dass die Gefahr m��ig und potenziell sch�dlich, aber nicht lebensbedrohlich ist.";
        } else if (severity === "Severe") {
            beschreibung1 = ". Die Warnung hat den Schweregrad schwer.";
            beschreibung2 =
                "Eine schwere Warnung bedeutet, dass die Gefahr sehr ernst ist. Schwere Sch�den oder Verletzungen sind m�glich.";
        } else if (severity === "Extreme") {
            beschreibung1 = ". Die Warnung hat den Schweregrad extrem.";
            beschreibung2 =
                "Eine extreme Warnung bedeutet, dass die Gefahr lebensbedrohlich oder katastrophal ist. Dies ist die h�chste Gefahrenstufe.";
        }

        if (instructionclean) {
            beschreibung3 = `Folgende Ma�nahmen sollen Sie ergreifen. ${instructionclean}.`;
        } else {
            beschreibung3 =
                "Da keine spezifischen Ma�nahmen verf�gbar sind, folgen Sie bitte den allgemeinen Verhaltensempfehlungen.";
            beschreibung4 =
                "Falls Seh-renen der Warnung der Bev�lkerung heulen, welche einen auf- und abschwellenden Heulton erzeugen, befolgen Sie folgende Schritte.";
            beschreibung5 =
                "Suchen Sie ein Geb�ude auf. Schlie�en Sie Fenster und T�ren. Deaktivieren Sie, falls m�glich, alle Klimaanlagen und L�ftungen. Schalten Sie Rundfunkger�te ein. Beachten Sie Meldungen von Warn-Apps. Befolgen Sie Anweisungen der Beh�rden. Informieren Sie Ihre Nachbarn. Bitte benutzen Sie nur Notrufleitungen f�r Notf�lle.";
            beschreibung6 =
                "Falls Seh-renen Entwarnung heulen, welche einen Dauerton von 60 Sekunden erzeugen, ist diese oder eine andere Warnung aufgehoben.";
        }

        if (descriptionStringFiltered) {
            beschreibung8 = `Die Beschreibung der Warnung wird nun vorgelesen.`
        }

        if (areaclean) {
            beschreibung9 = `. Folgende Gebiete sind von der Warnung betroffen. ${areaclean}.`
        }
        ende = ". Diese Angaben sind ohne Gew�hr. Das verwendete Sprach-Modell kann Telefonnummern, Uhrzeiten und Informationen falsch vorlesen. Bitte �berpr�fen Sie diese in der NINA App. Befolgen Sie ausschlie�lich offizielle Anweisungen der Beh�rden.";

    } else {
        Anfang = "Warnung!";
        Einleitung =
            `Die zust�ndige Stelle ${senderName} warnt vor dem Ereignis. ` +
            headline;
        beschreibung1 = [];
        beschreibung2 = [];
        beschreibung3 = "Die Beschreibung von der Warnung wird nun vorgelesen.";
        beschreibung4 =
            ". Falls Seh-renen, Warnung der Bev�lkerung heulen, welcher ein Auf- und Abschwellender heulton ist, befolgen sie folgende Schritte:";
        beschreibung5 =
            ". Suchen sie ein Geb�ude auf. Schlie�en sie Fenster und T�ren. Deaktivieren sie, falls m�glich, alle Klimaanlagen und L�ftungen. Schalten sie Rundfunkger�te ein. Beachten sie Meldungen von Warn-Apps. Befolgen sie Anweisungen der Beh�rden. Informieren sie ihre Nachbarn. Bitte benutzen sie nur Notrufleitungen f�r Notf�lle.";
        ende = ". Diese Angaben sind ohne Gew�hr. Das verwendete Sprach-Modell kann Telefonnummern, Uhrzeiten und Informationen falsch vorlesen. Bitte �berpr�fen Sie diese in der NINA App. Befolgen Sie ausschlie�lich offizielle Anweisungen der Beh�rden.";
        beschreibung6 = "Falls Seh-renen, Entwarnung heulen, welcher ein 60 sek�ndiger Dauerton ist, ist diese oder eine andere Warnung aufgehoben.";

        if (severity === "Moderate") {
            beschreibung1 = ". Die Warnung hat den Schweregrad moderat.";
            beschreibung2 =
                "Eine moderate Warnung bedeutet, dass die Gefahr m��ig und potenziell sch�dlich, aber nicht lebensbedrohlich ist.";
        } else if (severity === "Severe") {
            beschreibung1 = ". Die Warnung hat den Schweregrad schwer.";
            beschreibung2 =
                "Eine schwere Warnung bedeutet, dass die Gefahr sehr ernst ist. Schwere Sch�den oder Verletzungen sind m�glich.";
        } else if (severity === "Extreme") {
            beschreibung1 = ". Die Warnung hat den Schweregrad extrem.";
            beschreibung2 =
                "Eine extreme Warnung bedeutet, dass die Gefahr lebensbedrohlich oder katastrophal ist. Dies ist die h�chste Gefahrenstufe.";
        }

        beschreibung7 = `Falls es weitere zu ergreifende Ma�nahmen bez�glich der Warnung gibt, werden diese nun vorgelesen. ${instructionclean}.`;
    }

    if (!description && !useNIASradioschem) {

        return [
            Anfang,
            Einleitung,
            beschreibung1,
            beschreibung2,
            beschreibung4,
            beschreibung5,
            beschreibung6,
            beschreibung7,
            beschreibung3,
            descriptionStringFiltered,
            ende,
        ].join("\n");
    }  else if (useNIASradioschem) {
        return [
            Anfang,
            Einleitung,
            beschreibung1,
            beschreibung2,
            beschreibung3,
            beschreibung4,
            beschreibung5,
            beschreibung6,
            beschreibung8,
            descriptionStringFiltered,
            beschreibung9,
            ende,
        ]
            .filter(Boolean)
            .join("\n");
    }
    else if (description) {
        return descriptionvarStringFiltered;
    }
}

module.exports = {WarnungsNarchichtErstellen};
