# ABN AMRO WEBSITE

## Inhoudsopgave: 

## Inleiding

### Doel
Het doel van deze review is om feedback te krijgen op het werk dat is gemaakt, en de opdrachthgever op de hoogte te houden van het werk. 
### Intro
In deze opdracht is het de bedoeling om een pagina toe te voegen voor de nieuwe toegangkelijkheids regeling die in juni 2025 komt. Voornamelijk banken moeten hieraan meedoen.
## Beschrijving
Zoals al verteld, is het van belang om de site van ABN volledig toegangkelijk te maken met de [A11Y richtlijnen](https://www.a11yproject.com/checklist/#color-contrast). Deze richtlijnen volgen wij op de site zelf die uiteindelijk zal vertellen over de 

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

### Lighthouse test

<img width="1228" alt="image" src="https://github.com/user-attachments/assets/eec0ff2b-93f5-4148-862e-75cb6546616d">

### Contrast van site
<img width="1238" alt="image" src="https://github.com/user-attachments/assets/2752af50-6254-44f9-8405-f53b1e89b88c">
<img width="1244" alt="image" src="https://github.com/user-attachments/assets/d5193484-1d2b-43ea-8ca9-c6394771e7e7">
<img width="1236" alt="image" src="https://github.com/user-attachments/assets/f53e93e9-d0b7-4dd5-a683-d684cc7d0527">

Ik had ervoor gekozen om de kleuren van de site te veranderen. Toen ik hem op blauw testte, behaalde hij een slecht contrast. Dus zocht ik naar de kleuren die nog enigsinds in het spectrum zaten van het schema die jullie hadden gestuurd via whatsapp. [Hier nog een korte uitleg](https://github.com/Lutrian1/all-human-accessible-website/wiki/Keuze-voor-kleur-wijzeging-(Tumi-Mundo))
### Contrast Themes Windows
Tegenwoordig bied HTML en CSS een optie voor contrast themes binnen windows. Contrast themes is de vervanging van het oude 'hoog contrast modus'. Deze modus zet eigenlijk alles op een hoog contrast wat er dus voor zorgt dat bij velle kleuren de site niet meer toegangkelijk is. 

<img width="875" alt="image" src="https://github.com/user-attachments/assets/41ae0f7c-4f8e-460c-811b-e0ccfa02b9b5">

In mijn site had ik dit verwerkt door middel van de line: 

<img width="400" alt="image" src="https://github.com/user-attachments/assets/d188ac0a-c6dc-422d-a1ff-4c4a9013ffb0">

Deze line zorgt ervoor dat de tekst wit blijft, maar de achtergrond zich nog aanpast volgens de contrast themas:

<img width="1245" alt="image" src="https://github.com/user-attachments/assets/58d0dfe1-15ce-4a76-9786-b702327be135">

## Kenmerken
* Donkere kleuren zodat het contrast voor iedereen toegangkelijk is.
* Nieuwe media queries dat helpen hierbij
* Aria labels dat helpen met screenreader
* Logische volgorde in HTML

## Bronnen

Figma: https://github.com/fdnd-agency/tumi-mundo

Link naar site: [Site](https://lutrian1.github.io/all-human-accessible-website/)

Gesprek Sprint-Review: 

https://github.com/user-attachments/assets/11ecf845-9c9d-471c-a349-c7e87283cf61




