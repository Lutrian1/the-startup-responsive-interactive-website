# ABN AMRO WEBSITE

## Inhoudsopgave: 

## Inleiding
Ik heb gewerkt aan een 'Toegangkelijkheids pagina' voor ABN-AMRO. Dit is een site dat beschrijft waarom ABN toegangkelijk is, en wat ze daarvoor hebben gedaan. 
### Doel
Het doel van deze review is om feedback te krijgen op het werk dat is gemaakt, en de opdrachthgever op de hoogte te houden van het werk. 
### Intro
In deze opdracht is het de bedoeling om een pagina toe te voegen voor de nieuwe toegangkelijkheids regeling die in juni 2025 komt. Voornamelijk banken moeten hieraan meedoen.
## Beschrijving
Zoals al verteld, is het van belang om de site van ABN volledig toegangkelijk te maken met de [A11Y richtlijnen](https://www.a11yproject.com/checklist/#color-contrast). Deze richtlijnen volgen wij op de site zelf die uiteindelijk zal vertellen over de 

### Uitwerking

Telefoon (Mobile first)

![image](https://github.com/user-attachments/assets/dba1e541-d2ea-4b1f-93a6-d11a1ecec6e8)

Ik heb gewerkt met een one-column layout. Dit betekent dat alles in 1 column onder elkaar bevind, met korte ademruimtes ertussen en de achtergrond wit, voor leesbaarheid. De site is zo gecodeerd dat de telefoon als eerste werd gedaan. Alle sizing is dus daarna eromheen gebouwd. 

Voorbeeld van Mobile first:

ALGEMEEN:

![image](https://github.com/user-attachments/assets/5a891ed0-e3a2-4d85-b111-b3bed388b6a1)

MEDIA:
![image](https://github
.com/user-attachments/assets/9edc99b9-360a-4f92-989c-c1a9e7473525)

Het belangrijkste daarin is de grid. Deze past dus de layout van de belangrijkste content aan.

Ipad/Desktop:

Ipad heeft 2 verschillende groottes. 1 met een andere footer en de one column layout (Kleine ipads of hele grote phones)

![image](https://github.com/user-attachments/assets/55d1d2ab-1d49-44ae-af4d-13770b5ca390)

of de 2 variant en tevens ook de desktop variant:

![image](https://github.com/user-attachments/assets/2b9d1722-b146-4564-a5fa-4b2d859a2d3f)

EXTRA BELANGRIJK:

in 2024 is er een nieuwe code conventie waarin je in css de tag 'popover' kan gebruiken. Deze zorgt voor toegangkelijkheid (geen geneuzel met java) en heb ik daarom ook gebruikt te zien hier:

Desktop:

![image](https://github.com/user-attachments/assets/c669e089-e112-4958-aa87-02b58731517b)

Phone:

![image](https://github.com/user-attachments/assets/349b98c9-8641-41a6-a54d-fb41682c9d51)

[Code](https://github.com/Lutrian1/the-startup-responsive-interactive-website/blob/920d61b8702e332c8f364ecb1d7ec5072af93c72/style.css#L38-L92)

### Ademruimte en inspringen
In HTML gebruik ik voornamelijk tabs van inline elementen (li in een ul bijvoorbeeld). Ik maak gen gebruik van wit ruimtes in mijn HTML, omdat ik persoonlijk vind dat dit de flow verpest. Daarnaast gebruik ik voornamelijk classes in mijn HTML. Voor styling maar ook voor leesbaarheid van mezelf, zo weet ik welke section waar hoort bijvoorbeeld. 
Aantal voorbeelden:

[Sections](https://github.com/Lutrian1/the-startup-responsive-interactive-website/blob/86d4b41f33bf3db543fcfef2ed10d18cdbf4247b/index.html#L19-L30)

2 sections met een aparte duidelijke naam.

[Tabs op inline elemeten](https://github.com/Lutrian1/the-startup-responsive-interactive-website/blob/86d4b41f33bf3db543fcfef2ed10d18cdbf4247b/index.html#L31-L102)

### Volgorde en nesten van CSS selectors
Sinds dat het mogelijk is om in css te nesten, is dat het geen wat ik gebruik. Daarnaast let ik enorm op de volgorde van de nesting zodat deze klopt met de volgorde van mijn HTML. Daarnaast gebruik ik heel veel comments om het zo voor mezelf op een rijtje te houden.

Aantal voorbeelden.
[Header](https://github.com/Lutrian1/the-startup-responsive-interactive-website/blob/bbb28788424758dac7fcbb0905875704fc130f6f/style.css#L51-L110)
[Main](https://github.com/Lutrian1/the-startup-responsive-interactive-website/blob/bbb28788424758dac7fcbb0905875704fc130f6f/style.css#L113-L148)
[Footer](https://github.com/Lutrian1/the-startup-responsive-interactive-website/blob/bbb28788424758dac7fcbb0905875704fc130f6f/style.css#L158-L162)
[Comments](https://github.com/Lutrian1/the-startup-responsive-interactive-website/blob/bbb28788424758dac7fcbb0905875704fc130f6f/style.css#L50C1-L50C23)

### Nesten van media queries

Sinds commit [be8602](https://github.com/Lutrian1/the-startup-responsive-interactive-website/commit/be86602bd1f25d95282735716a5635451be1a402) maak ik gebruik van geneste media queries. Elk deze media queries veranderd voornamelijk de volgorde of font size, maar niet algemene dingen die bovenaan te vinden zijn.

Voorbeeld:

[Algemeen](https://github.com/Lutrian1/the-startup-responsive-interactive-website/blob/471e524eafe1ccf4c3ed27377349412539a21711/style.css#L113-L135)

[Layout Change](https://github.com/Lutrian1/the-startup-responsive-interactive-website/blob/471e524eafe1ccf4c3ed27377349412539a21711/style.css#L136-L156)

### Naamgeving
Zoals al vermeld is een van de belangrijkste dingen dat ik doe in css en HTML voornamelijk classes te gebruiken en deze goed te vernoemen naar het geen waar het bedoeld voor is. Bijvoorbeeld:

[HTML](https://github.com/Lutrian1/the-startup-responsive-interactive-website/blob/4165c901f4af26c6604af021b2b1f897dc67dafe/index.html#L19-L27)
[CSS](https://github.com/Lutrian1/the-startup-responsive-interactive-website/blob/4165c901f4af26c6604af021b2b1f897dc67dafe/style.css#L56-L95)
### Lighthouse test

<img width="1228" alt="image" src="https://github.com/user-attachments/assets/eec0ff2b-93f5-4148-862e-75cb6546616d">






