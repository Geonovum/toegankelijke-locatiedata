## De richtlijnen toegelicht voor geo
In dit hoofdstuk beschrijven we de belangrijkste toegankelijkheidseisen en lichten die toe voor geo-informatie. We doen dit aan de hand van de toegankelijkheidseisen zoals beschreven op [digitoegankelijk.nl](https://www.digitoegankelijk.nl/uitleg-van-eisen/geo-informatie). Deze eisen komen voort uit de Web Content Accessibility Guidelines (WCAG) versie 2.1, hierna aangeduid met [[WCAG21]].

Er is ook [een Nederlandse versie van deze richtlijnen](https://www.w3.org/Translations/WCAG21-nl/) beschikbaar.

De eisen van [[WCAG21]] kennen verschillende niveaus van conformiteit: A, AA, AAA. Waarbij A de laagste en AAA de hoogste eisen zijn. Voor overheden is het [verplicht dat websites en mobiele apps van Nederlandse overheidsinstanties voldoen aan de toegankelijkheidseisen](https://www.digitoegankelijk.nl/wetgeving/wat-verplicht). Er dient voldaan te worden aan de eisen van het niveau A en AA uit [[WCAG21]]. Wilt u meer weten over digitale toegankelijkheidseisen? Lees dan Hoofdstuk 5 Wat zijn toegankelijkheidseisen?

Voor geo-informatie / locatiedata gelden echter uitzonderingen. Wij raden desondanks aan om aan de eisen te voldoen, zodat webpagina's en apps met locatiedata te gebruiken zijn voor een zo groot mogelijke groep. We beschrijven de eisen hieronder voor niveau A of AA. Waar niveau AAA relevant is, noemen we dat expliciet.

We hanteren in dit hoofdstuk een indeling op basis van de principes waarneembaar, bedienbaar en begrijpelijk. Van elk principe komen de belangrijkste eisen aan bod. Per eis belichten we aandachtspunten, veelvoorkomende toegankelijkheidskwesties en suggesties voor oplossingen. We hanteren de nummering van eisen zoals in het originele [[WCAG21]] document. Daarnaast zijn er enkele algemene, universele zaken die kunnen helpen bij het toegankelijk aanbieden van geo-informatie. Deze behandelen we eerst.

### Universele zaken
In deze paragraaf worden enkele universele zaken uitgelegd, die kunnen helpen bij het toegankelijk maken van websites en toepassingen met locatiedata. Dit zijn niet direct toegankelijkheidseisen.

#### Gelaagd bouwen
Gelaagd bouwen betekent dat een website zodanig gelaagd is opgebouwd, dat iedereen gegarandeerd
toegang heeft tot de basisinhoud en -functionaliteit van de site, met welk type browser of internetverbinding
dan ook. Een gebruiker met een geavanceerde, moderne browser krijgt zo de optimale gebruikersbeleving, terwijl de
content en functionaliteit ook toegankelijk blijven voor een ‘eenvoudige’ gebruiker. Overigens heeft gelaagd
bouwen niet alleen voordelen voor gebruikers: voor zoekmachines bijvoorbeeld biedt de basislaag de noodzakelijke
informatie om de content succesvol te kunnen indexeren.

Een voorbeeld van gelaagd bouwen met geo-informatie en kaarten is:
1. Zorg voor een duidelijke, tekstuele beschrijving van de informatie in de meest basale vorm.
1. Gebruik een niet-interactieve kaart waarop de informatie van 1 staat gepositioneerd, bijvoorbeeld met behulp van CSS.
1. Beschikt de gebruiker over technieken als JavaScript, en wilt u interactiviteit bieden? Gebruik dan JavaScript om de statische kaart van 2 te vervangen door een interactieve.

In paragraaf 2.2.1 leest u meer over tekstalternatieven voor interactieve kaarten, en in paragraaf 2.2.2 vindt u informatie over alternatieven voor kaartanimaties.

#### Invoer: formulier om locatie in te voeren

Zie de algemene eisen op https://www.digitoegankelijk.nl/uitleg-van-eisen/formulieren.

Voor het zoeken van locaties op adres of plaatsnaam wordt vaak een formulier gebruikt. Daarbij is het
belangrijk om de gebruiker goed naar het gewenste resultaat te begeleiden. Denk bijvoorbeeld aan het
suggereren van andere schrijfwijzen van een plaatsnaam. Of het opnemen van de provincienaam bij een
plaatsnaam, zodat de gebruiker de juiste plaats kan kiezen.

##### Kwestie

Een gebruiker kan een locatie niet altijd tekstueel aanduiden. Bijvoorbeeld bij een plek ergens op straat,
midden in een weiland of op het water. Voor een Melding Openbare Ruimte (MOR) wordt regelmatig gevraagd
om de locatie van de melding aan te geven, en voor bepaalde vergunningaanvragen (bijvoorbeeld een
Watervergunning) is een coördinatenpaar essentieel. Hoe zou de invoer van de locatie dan kunnen, op een
toegankelijke manier?

##### Mogelijke oplossingen

Het is lastig om dit generiek aan te geven. Oplossingen kunnen liggen in gebruik van extra tooling, zoals de
JavaScript Geolocation API in HTML5. Een gebruiker met een apparaat dat GPS ondersteunt, kan hiermee
op de plek zelf een locatie automatisch invoeren. Of de gebruiker voert de locatie bij benadering in: via een
adres met een tekstuele beschrijving (of een straal en/of kaart) om de locatie te corrigeren. Deze manier
van invoeren vraagt iets meer verwerking om tot een exacte locatie te komen. Toch kan het soms nuttig
zijn om het op deze manier te doen.

Probeer in ieder geval te voorkomen dat locaties of gebieden opnieuw gedigitaliseerd worden. Achterhaal
liever de gewenste geometrie uit bestaande registraties door administratieve eigenschappen (zoals adres en
eigenaar) te koppelen. In plaats van het intekenen van een perceel om te bepalen of dit in een
vogelrichtlijngebied ligt, kan de gebruiker ook een perceelnummer invoeren. Daarna kan het systeem de
geometrie van zijn perceel uit de Basisregistratie Kadaster (BRK) ophalen, en de geometrie van het
vogelrichtlijngebied uit Natura 2000. De webapplicatie doet zelf de geografische analyse van de twee
geometrieën, en stelt daarmee de overlap vast. Op deze manier kunt u de vraag van de gebruiker vrij simpel
beantwoorden.

In paragraaf 2.4.2 leest u meer over het bieden van hulp bij het invullen van formulieren om fouten te
vermijden.

#### iFrames en kaarten: opnemen van kaartapplicaties in webpagina's
Geografische webapplicaties worden nog steeds vaak als zelfstandige applicaties ontwikkeld, met eigen tooling en los
van bestaande Content Management Systemen (CMS). Met als gevolg dat een iFrame gebruikt wordt om de
geografische webapplicatie ‘in te lezen’ in het CMS. Met zo’n iFrame reserveert het CMS een vaste plek op
de pagina voor invulling door de geografische webapplicatie. De eindgebruiker merkt hier vrijwel niets van.

##### Kwestie
Over het algemeen raden wij iFrames af. Gebruikers kunnen namelijk vast komen te zitten via een iFrame (bijvoorbeeld bij bediening via het toetsenbord), of ze kunnen informatie niet in de juiste context vinden. (Om dit laatste te omzeilen kunt u een link aanbieden
buiten het iFrame, waarmee de gebruiker de geo-applicatie ook als aparte pagina kan laden. Maar dit is een
noodscenario.)

##### Mogelijke oplossingen
Er zijn ook andere manieren om geo-applicaties in te passen. Online kaartplatformen bieden vaak de
mogelijkheid om via script kaarten in te bouwen in uw eigen systeem. Dat gaat bijvoorbeeld via Map API's
(Javascript-bibliotheken). Of u kunt op het kaartplatform een stukje HTML-code genereren, dat u eenvoudig
kopieert naar uw eigen systeem. Als u via script rechtstreeks een
kaart inbouwt, hebt u bovendien de mogelijkheid om nog eigen wensen door te voeren: u kunt dan
bijvoorbeeld bepalen hoe groot het zoomniveau is, of welke kaartlagen de applicatie laat zien.

#### Leesbaarheid en leesniveau
Hoewel er geen specifieke eisen over leesniveaus onder niveau A of AA vallen van de toegankelijkheidseisen, is het voor toegankelijkheidwel van belang dat de geboden informatie leesbaar en begrijpelijk is.

##### Kwestie
Soms staan in gegevens op de kaart, zoals na aanklikken van een locatie of icoon op de kaart, in de tekstballonnen per ongeluk nog technische informatie, zoals identifiers en codes, afkortingen of Engelstalige termen. Maar het kunnen ook (interne) beschrijvingen zijn, die niet begrijpelijk of relevant zijn voor de eindgebruiker.

##### Mogelijke oplossing
Verwijder overbodige informatie als technische details of beschrijvingen voor intern gebruik.

#### Techniek en code
Gebruikt u WebGIS-frameworks of JavaScript-bibliotheken om interactieve kaartapplicaties te publiceren?
Dan is het goed om te weten dat die veel HTML-, CSS- en JavaScript-code bevatten en/of automatisch
genereren.

Zie [Techniek en code op DigiToegankelijk.nl](https://www.digitoegankelijk.nl/uitleg-van-eisen/techniek-en-code) voor een algemene uitleg.

##### Kwestie
Het komt geregeld voor, dat deze code niet volledig voldoet aan webstandaarden. Daardoor is uw website niet optimaal toegankelijk.

##### Mogelijke oplossing
Het is verstandig om uw website hierop te toetsen, bijvoorbeeld met online validators. In Bijlage 3 vindt u een aantal aanbevolen validators.

### Toegankelijkheidseisen voor geo-informatie
Op [de webpagina over geo-informatie van digitoegankelijk.nl](https://www.digitoegankelijk.nl/uitleg-van-eisen/geo-informatie) staan toegankelijkheidseisen die (extra) aandacht vragen bij toepassingen met locatiedata. De volgende paragrafen behandelen de eisen die specifiek voor geo-informatie exta aandacht (kunnen) vragen. Als eisen een nummer bevatten, is dat het nummer zoals bij [[WCAG21]] gehanteerd wordt. Digitoegankelijk.nl gebruikt deze nummering ook.

### Waarneembaar
In deze paragraaf worden verschillende eisen van het principe waarneembaar toegelicht.

#### Tekstalternatieven

> 1.1.1 Geef niet-tekstuele onderdelen zoals afbeeldingen en filmpjes een tekstuele beschrijving. (niveau A)
> 1.4.5 Gebruik geen afbeeldingen van tekst, tenzij het echt niet anders kan. (niveau AA)

Geografische webapplicaties zijn een middel om locatiegebonden informatie te publiceren. Met een kaart
toont u informatie op een bepaalde locatie. Toegankelijkheid gaat erom, dat die informatie bereikbaar is
voor de gebruiker.

##### Kwestie
Veel locatiegebonden informatie wordt alleen in een afbeelding (een kaartlaag) gepresenteerd. Maar de
boodschap van de informatie moet ook tekstueel beschikbaar te zijn, al dan niet via een zoekingang of
filtermogelijkheid.

##### Mogelijke oplossingen
U kunt dit bijvoorbeeld doen in een statische lijst, of door middel van een formulier dat op te vragen is als
tekst. Hier zijn verschillende oplossingen voor. Welke oplossing u kiest, hangt onder meer af van het soort
informatie en de toepassing. In deze sub paragraaf worden de verschillende oplossingen aangeboden om
tot een tekst alternatief te komen. In Hoofdstuk 3 wordt dieper ingegaan op het bieden van een
tekstalternatief door een andere aanpak voor te stellen, waarbij de gebruikersvraag centraal staat.

##### Wat is de primaire informatie?
Bedenk wat de primaire informatie is, die u wilt overdragen. En presenteer die informatie ook als tekst. U
hoeft namelijk niet alle beschikbare informatie in de geo-applicatie toegankelijk te maken. Bepaalde
secundaire informatie (die wel visueel op de kaart aanwezig is) hoeft niet voor iedereen op elk apparaat
zichtbaar te zijn. Voor de optocht van Sinterklaas zijn bijvoorbeeld alleen de locatie van het officiële onthaal
en de straten van de aansluitende optocht de primaire informatie.

Een groot voordeel van een geografische webapplicatie is dat een gebruiker er zelf aanvullende informatie
uit af kan leiden. Bij de Sinterklaasoptocht kan hij bijvoorbeeld meteen zien waar de dichtstbijzijnde OV-
halte of parkeergelegenheid is.

Presenteert u deze aanvullende (en dus secundaire) informatie als primaire informatie? Dan moet u die ook
toegankelijk aanbieden, bijvoorbeeld in tekst. Doet u dat niet, dan is deze afgeleide informatie ‘decoratief’.

##### Wat de kaart toont is niet altijd logisch
Een kaart op internet laat niet altijd het meest intuïtieve stukje van de omgeving zien. De gebruiker navigeert
altijd vanuit een bepaalde locatie (bijvoorbeeld het thuisadres). Alle apparaten die hij daarvoor kan
gebruiken, hebben een rechthoekig scherm. Daardoor kan het gebeuren dat elementen die dichtbij zijn, niet
op de kaart getoond worden. En dat elementen die verder weg zijn, wel zichtbaar zijn. In Figuur 1 ziet u
hier een voorbeeld van.

![Punt 2 is dichterbij dan punt 3, maar wordt niet getoond op een normaal scherm](media/straal-kaart.png)

Punt 2 is dichterbij dan punt 3, maar wordt niet getoond op een normaal scherm

Bij het maken van een tekstuele variant van een visuele kaart is het goed om hier rekening mee te houden.
Leg dus niet uit wat er op de rechthoekige kaart staat, maar geef de informatie logisch weer, geredeneerd
vanuit de cirkelvormige straal. Dat kan betekenen dat een tekstuele beschrijving andere resultaten geeft
dan de visuele variant.

> Een *rond* radarscherm is het beste om vanuit een locatie te denken.
> Voorbeeld - Radar

TODO: ander voorbeeld? Voorbeeld eruit?

> Bij de GEOZET applicatie werd de functionaliteit in twee lagen aangeboden: een core en enhanced versie. De core is een formulier waarin locatie gevraagd wordt, met zoekresultaten gesorteerd op afstand. Hoe dichterbij het zoekresultaat, hoe hoger het in de lijst staat. De enhanced versie is een volledig interactieve kaart. De functionaliteiten zijn niet hetzelfde, zo kun je in de core zoomen terwijl in de enhanced versie er een straal opgegeven kan worden. Het effect is gelijkwaardig, maar de uitvraag aan de gebruiker verschilt
>
> Geaccepteerde uitgangspunten van GEOZET:
> * Er kan een gering onderscheid zijn tussen de zoekresultaten die – bij opgave van eenzelfde adres - getoond worden in de core-versie en in de enhanced-versie.
> * Bepaalde secundaire informatie, die niet direct bijdraagt aan het beantwoorden van de geformuleerde zoekvraag, kan worden getoond in de enhanced-versie en niet in de core-versie.
> * De enhanced-versie kan secundaire informatie bevatten die niet volledig voldoet aan de toegankelijkheidseisen.
>
> Voorbeeld - Geozet

#### Kaarten met een animatie
Wanneer de toegankelijkheidseisen spreken over tijd gebaseerde media, dan gaat het meestal over online
gepubliceerd videomateriaal. In de context van geo-informatie zijn de toegankelijkheidseisen met betrekking tot tijd
gebaseerde media vooral van belang voor kaartanimaties. Kaartanimaties zijn meestal zonder geluid. In
veel gevallen zijn het ‘vooraf opgenomen’ animaties, zoals de geografische verspreiding van een
griepepidemie door de tijd. Een voorbeeld van een ‘live’ kaartanimatie is weerinformatie, waarbij gebruikers
kunnen zien of er buien aankomen.

Een tekstuele transcriptie van een kaartanimatie geeft, in correcte volgorde, tekstbeschrijvingen van de
visuele informatie. Het is een beproefd en effectief middel om welke kaartanimatie dan ook optimaal
toegankelijk te maken.

Zie [relevante eisen bij Kaarten met animatie op DigiToegankelijk.nl](https://www.digitoegankelijk.nl/uitleg-van-eisen/geo-informatie)

#### Onderscheidbaar

> 1.4.1 Gebruik niet alleen kleur maar ook nog andere visuele middelen om informatie over te dragen. (niveau A)
> 1.4.3 Gebruik voor tekst voldoende contrast tussen voor- en achtergrondkleur. (niveau AA)

Maak het voor gebruikers gemakkelijker om voorgrondinformatie te scheiden van de achtergrond.
Presenteert u visuele informatie boven op een achtergrond? Zorg er dan voor dat die informatie dan
voldoende met de achtergrond contrasteert.

##### Kwestie
Veel kaarten gebruiken kleuren om primaire informatie weer te geven. Maar alleen kleur is niet toegankelijk
genoeg. Een gebruiker die kleurenblind is, kan hier namelijk niet mee uit de voeten.

##### Mogelijke oplossingen

Gebruik naast kleur ook vorm. Bijvoorbeeld bij symbolen op een kaart. Zorg, in plaats van alleen rode en
groene cirkels, ook voor een andere vorm: gebruik rode cirkels en groene vierkantjes. Zorg ervoor dat de
belangrijkste informatie (dus de informatie die door de kaart ontsloten wordt, en niet de kaart zelf) goed
leesbaar is qua contrast.

De eis over kleurcontrast gaat over de primaire content. Voor een achtergrondkaart heeft de contrast-eis
vrijwel geen gevolgen. De meeste kaartachtergronden hebben tussen bijvoorbeeld straatnamen en
straatondergrond al genoeg contrast. Tussen kleurvlakken onderling geldt geen eis.

![Punten, Vorm, Kleur, Gebruik](media/kleur-en-vorm.png)

Figuur – Punten, Vorm, Kleur, Gebruik

Onderscheid maken met alleen kleur, kan zorgen voor problemen bij kleurenblindheid. De voorbeelden in
Figuur 2 laten zien dat het gebruik van vorm (in aanvulling op kleur) kan helpen. Het onderscheid in
categorieën is in deze voorbeelden te maken via kleur en vorm. Links toont wat iemand ziet als alleen kleur
gebruikt wordt voor het onderscheid, rechts als ook vorm gebruikt wordt. De bovenste afbeeldingen zijn de
normale kleurweergaves, de onderste simuleren een bepaald soort kleurenblindheid (zogenaamde
Deuteranopia). De iconen die kleur en vorm gebruiken zijn ook met kleurenblindheid te onderscheiden. Voor
vlak-informatie kan in plaats van alleen kleur ook met arcering en/of symbolen gewerkt worden.

![Kleur en vorm voor vlak-informatie](media/kleur-en-vorm-vlakken.png)

Figuur – Kleur en vorm voor vlak-informatie

De bovenste helft toont onderscheid door kleur en vorm voor vlak-informatie. In de onderste helft is een
bepaald soort kleurenblindheid (zogenaamde Deuteranopia) gesimuleerd. Het onderscheid in kleur is bijna
weggevallen, maar door ook vorm te gebruiken is wel degelijk onderscheid te maken.

### Bedienbaar

In deze paragraaf worden verschillende uitwerkingen van het principe bedienbaar uitgelegd.

#### Toetsenbordbediening

> 2.1.1 Zorg dat alle functies met alleen het toetsenbord te bereiken en gebruiken zijn. (niveau A)
> 2.1.2 Voorkom dat een bezoeker die alleen het toetsenbord gebruikt vast komt te zitten en niet verder kan. (niveau A)
> 2.4.7 Maak zichtbaar welk onderdeel van een pagina de focus heeft bij toetsenbordbediening. (niveau AA)

De muis is een vanzelfsprekend middel voor de bediening van kaartfunctionaliteit. Maar niet iedereen kan
op elk apparaat gebruikmaken van een muis. Voor een goede toegankelijkheid van een website is volledige
toetsenbordbediening essentieel. Daarom vraagt dit onderwerp om extra aandacht.

##### Kwestie
Vaak biedt een website functionaliteit (knoppen), waarmee de gebruiker de applicatie kan besturen en
gegevens kan opvragen. Helaas is deze functionaliteit vaak niet (of niet volledig) te bedienen met het
toetsenbord.

> De [Risicokaart](https://nederland.risicokaart.nl/) is een voorbeeld van een kaart die niet goed te bedienen is met het toetsenbord
> (Risicokaart van Nederland, 2021)
>
> Voorbeeld - Risicokaart

> [Ruimtelijke Plannen](https://www.ruimtelijkeplannen.nl/viewer/) is een voorbeeld van een webapplicatie waarvan het formulier en kaart maar beperkt te bedienen zijn met het toetsenbord (Ruimtelijkeplannen.nl, 2021).

##### Mogelijke oplossingen
Met het toetsenbord moet de gebruiker zowel door de kaart zelf als door alle informatie-elementen kunnen
navigeren. Dus als er informatie in pop-ups staat, dan moeten die pop-ups te openen zijn via het
toetsenbord.

Dat kan via voorgeprogrammeerde access keys: bijvoorbeeld de pijltjestoetsen om de kaart te bewegen, of
de plus- en min-toetsen voor in- en uitzoomen. De navigatietools die vaak linksboven in de kaart staan om
de kaart te verplaatsen en in te zoomen, kunt u hiermee ook bereikbaar maken. Een voorbeeld hiervan is
de kaart Bekendmakingen op Overheid.nl (zie ).

De mogelijkheid van access keys hoeft u overigens niet altijd zelf te implementeren: soms maakt deze
functionaliteit standaard deel uit van softwarebibliotheken.

Besteed dus aandacht aan toetsenbordbediening, ook bij het testen. Laat overbodige functionaliteit weg;
dat scheelt ook werk met het toegankelijk maken.

> De bibliotheken OpenLayers en LeafletJS bieden navigatie via het toetsenbord. Echter, het bekijken van gegevens op een kaart, bijvoorbeeld via informatie-ballonnen, is vaak lastig met alleen het toetsenbord. Ondersteuning hiervoor is slechts in enkele gevallen aanwezig. Bij de keuze voor een toolbox en bij het realiseren verdient toetsenbordbediening daarom extra aandacht.
>
> Voorbeeld - Navigatie via het toetsenbord

#### Genoeg tijd bij animaties

> 2.2.1 Geef bezoekers de mogelijkheid om een tijdslimiet waarna automatisch iets gebeurt te verlengen of uit te zetten. (niveau A)
> 2.2.2 Geef bezoekers de mogelijkheid om bewegende, scrollende, knipperende en automatisch verversende onderdelen te stoppen. (niveau A)

Bij kaartanimaties is het belangrijk, dat de gebruiker de timing kan aanpassen en de animatie kan pauzeren,
stoppen en verbergen. In paragraaf 2.2.2 leest u meer over kaartanimaties.

#### Toevallen

> 2.3.1 Laat elementen niet zodanig flitsen dat bezoekers er een toeval door kunnen krijgen. (niveau A)

Zorg bij het automatisch afspelen van kaartanimaties ervoor dat vlakken niet sneller veranderen dan 3 keer
per seconde. Animeer kleine geografische eenheden en gebruik andere signaalkleuren dan de kleur rood. Over kaartanimaties
staat meer informatie in paragraaf 2.2.2.

### Begrijpelijk
In deze paragraaf worden verschillende uitwerkingen van het principe begrijpelijk uitgelegd.

#### Invoer en foutmeldingen

> 3.3.1 Geef bij een verkeerd ingevuld formulierveld aan waar de fout zit en beschrijf wat er fout is. (niveau A)
> 3.3.2 Geef duidelijke instructies bij invoervelden. (niveau A)
> 3.3.3 Geef bij een verkeerd ingevuld formulierveld waar mogelijk suggesties ter verbetering. (niveau AA)

> `(gui.layers.TilingLayer):Can't find the parent Map component.`
>
> Voorbeeld Foutmelding gepresenteerd aan eindgebruiker door een geo-viewer

Het geven van bruikbare foutmeldingen is niet specifiek voor geo-informatie. Toch is dit ook belangrijk voor
toepassingen die met geo-informatie werken. Denk bijvoorbeeld bij het zoeken van locaties via een formulier
aan het geven van suggesties bij spelfouten (Bedoelde u...?), in plaats van het weergeven van ‘Geen
resultaten’.

Vraagt u een gebruiker om een adres in te voeren? Voorkom dan dat een onjuiste combinatie (van
bijvoorbeeld straatnaam, woonplaats en postcode) een foutmelding oplevert. Als een woonplaats in
meerdere gemeenten valt, dan kan de webapplicatie de gemeentenaam of provincienaam suggereren. Dit
helpt de gebruiker om de juiste woonplaats te identificeren. Zie ook paragraaf 2.1.3.

Ook het afvangen en omzetten van foutmeldingen van eventuele (externe) webservices is zinvol. Dan
begrijpt de gebruiker wat er aan de hand is.
