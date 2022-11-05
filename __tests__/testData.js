const {
  director_template,
  coordinator_template,
  stakeholder_template
} = require('../src/data/template_examples');

const data = {
  categories: [
    {
      categoryId: 1,
      icon: '#F9C74F',
      name: 'Energie'
    },
    {
      categoryId: 2,
      icon: '#43AA8B',
      name: 'Economie'
    },
    {
      categoryId: 3,
      icon: '#90BE6D',
      name: 'Milieu'
    },
    {
      categoryId: 4,
      icon: '#F94144',
      name: 'Sociaal'
    }
  ],
  roles: [
    {
      roleId: 1,
      name: 'stakeholder',
      template: null,
      customizable: false
    },
    {
      roleId: 2,
      name: 'director',
      template: JSON.stringify(director_template),
      customizable: true
    },
    {
      roleId: 3,
      name: 'mvo_coordinator',
      template: null,
      customizable: true
    },
    {
      roleId: 4,
      name: 'management',
      template: null,
      customizable: true
    },
    {
      roleId: 5,
      name: 'disable_customizable_role_template',
      template: JSON.stringify(stakeholder_template),
      customizable: false
    },
    {
      roleId: 6,
      name: 'disable_customizable_visible_categories',
      template: null,
      customizable: false
    }
  ],
  users: [
    {
      userId: '1',
      passwordHash:
        '73f66aa72f141a6e8e7e31f3707a4fd54e7ebaeb50a248234f6ff6b0b51a0308facf6aaf6c8d147b12f77ceaea0e0eb0a41eec54fe461d2c5adc25209128acf3',
      salt: 'rAnd0m',
      username: 'f',
      ROLE_roleId: 3, // MVO coordinator.
      template: JSON.stringify(coordinator_template)
    },
    {
      userId: '2',
      passwordHash:
        '1f4440e1f0742bdf3ee23698f03f2f8a42c445e3a69f6473d309c4ebf7e3cfe41b55d7ebb543b86397577c729e5134ea4f82d1e4a35ee85cb4d530f0490ce431',
      salt: 'rAnd0m',
      username: 'Bob',
      ROLE_roleId: 2, // Director.
      template: null
    },
    {
      userId: '3',
      passwordHash:
        'a7f3cfff3627f91d99dab0c135992644a8a05b037e37e3a591ade4671b331ff0830302a0dc92fbb93b104ce6c6e37ef8abaf8d9773dd082c08ba58301f1d834d',
      salt: 'rAnd0m',
      username: 'Bart',
      ROLE_roleId: 4, // Manager.
      template: null
    },
    {
      userId: '4',
      passwordHash:
        'a7f3cfff3627f91d99dab0c135992644a8a05b037e37e3a591ade4671b331ff0830302a0dc92fbb93b104ce6c6e37ef8abaf8d9773dd082c08ba58301f1d834d',
      salt: 'rAnd0m',
      username: 'Ben',
      ROLE_roleId: 1, // Stakeholder.
      template: null
    },
    {
      userId: '5',
      passwordHash:
        'a7f3cfff3627f91d99dab0c135992644a8a05b037e37e3a591ade4671b331ff0830302a0dc92fbb93b104ce6c6e37ef8abaf8d9773dd082c08ba58301f1d834d',
      salt: 'rAnd0m',
      username: 'accountBlocked',
      ROLE_roleId: 2,
      template: null
    },
    {
      userId: '6',
      passwordHash:
        '73f66aa72f141a6e8e7e31f3707a4fd54e7ebaeb50a248234f6ff6b0b51a0308facf6aaf6c8d147b12f77ceaea0e0eb0a41eec54fe461d2c5adc25209128acf3',
      salt: 'rAnd0m', //f
      username: 'userWithNonCustomizableTemplate',
      ROLE_roleId: 5,
      template: JSON.stringify(coordinator_template)
    },
    {
      userId: '7',
      passwordHash:
        '73f66aa72f141a6e8e7e31f3707a4fd54e7ebaeb50a248234f6ff6b0b51a0308facf6aaf6c8d147b12f77ceaea0e0eb0a41eec54fe461d2c5adc25209128acf3',
      salt: 'rAnd0m', //f
      username: 'userWithNonCustomizableTemplateAndNoRoleTemplate',
      ROLE_roleId: 6,
      template: JSON.stringify(coordinator_template)
    }
  ],
  category_role: [
    {
      Category_categoryId: 1,
      roles_roleId: 1
    },
    {
      Category_categoryId: 2,
      roles_roleId: 1
    },
    {
      Category_categoryId: 3,
      roles_roleId: 1
    },
    {
      Category_categoryId: 4,
      roles_roleId: 1
    },
    {
      Category_categoryId: 1,
      roles_roleId: 2
    },
    {
      Category_categoryId: 2,
      roles_roleId: 2
    },
    {
      Category_categoryId: 3,
      roles_roleId: 2
    },
    {
      Category_categoryId: 4,
      roles_roleId: 2
    },
    {
      Category_categoryId: 1,
      roles_roleId: 3
    },
    {
      Category_categoryId: 3,
      roles_roleId: 3
    },
    {
      Category_categoryId: 4,
      roles_roleId: 3
    },
    {
      Category_categoryId: 1,
      roles_roleId: 4
    },
    {
      Category_categoryId: 2,
      roles_roleId: 4
    },
    {
      Category_categoryId: 3,
      roles_roleId: 4
    },
    {
      Category_categoryId: 4,
      roles_roleId: 4
    },
    {
      Category_categoryId: 1,
      roles_roleId: 6
    },
    {
      Category_categoryId: 2,
      roles_roleId: 6
    }
  ],
  sdgs: [
    {
      description: 'Beëindig armoede overal en in al haar vormen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-01.jpg',
      name: 'Geen armoede',
      number: '1',
      categoryId: 4,
      parentId: null,
      color: '#dda63a',
      sdgId: 1
    },
    {
      description:
        'Tegen 2030 het aandeel mannen, vrouwen en kinderen van alle leeftijden die volgens de nationale definities in armoede leven in al haar dimensies, minstens tot de helft terugbrengen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-01.jpg',
      name: 'Geen armoede',
      number: '1.2',
      categoryId: 4,
      parentId: 1,
      color: '#dda63a',
      sdgId: 2
    },
    {
      description:
        'Zorgen voor een aanzienlijke mobilisatie van middelen afkomstig uit verschillende bronnen, ook via versterkte ontwikkelingssamenwerking, om adequate en voorspelbare middelen te voorzien voor ontwikkelingslanden, in het bijzonder de minst ontwikkelde landen, om programma\'s en beleidslijnen te implementeren die een einde moeten maken aan armoede in al haar vormen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-01.jpg',
      name: 'Geen armoede',
      number: '1.a',
      categoryId: 4,
      parentId: 1,
      color: '#dda63a',
      sdgId: 3
    },
    {
      description:
        'Solide beleidskaders creëren op nationaal, regionaal en internationaal niveau, die zijn gebaseerd op ontwikkelingsstrategieën ten gunste van de armen en het genderbeleid, om de versnelde investering te ondersteunen in acties die gericht zijn op het uitroeien van de armoede.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-01.jpg',
      name: 'Geen armoede',
      number: '1.b',
      categoryId: 4,
      parentId: 1,
      color: '#dda63a',
      sdgId: 4
    },
    {
      description:
        'Er tegen 2030 voor zorgen dat alle mannen en vrouwen, in het bijzonder de armen en de kwetsbaren, gelijke rechten hebben op economische middelen, alsook toegang tot basisdiensten, eigenaarschap en controle over land en andere vormen van eigendom, nalatenschap, natuurlijke hulpbronnen, gepaste nieuwe technologie en financiële diensten, met inbegrip van microfinanciering.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-01.jpg',
      name: 'Geen armoede',
      number: '1.4',
      categoryId: 4,
      parentId: 1,
      color: '#dda63a',
      sdgId: 5
    },
    {
      description:
        'Tegen 2030 extreme armoede uitroeien voor alle mensen wereldwijd, die met minder dan $ 1,25 per dag moeten rondkomen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-01.jpg',
      name: 'Geen armoede',
      number: '1.1',
      categoryId: 4,
      parentId: 1,
      color: '#dda63a',
      sdgId: 6
    },
    {
      description:
        'Tegen 2030 de weerbaarheid opbouwen van de armen en van zij die zich in kwetsbare situaties bevinden en hun blootstelling aan en kwetsbaarheid voor met klimaatgerelateerde extreme gebeurtenissen en andere economische, sociale en ecologische schokken en rampen beperken.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-01.jpg',
      name: 'Geen armoede',
      number: '1.5',
      categoryId: 4,
      parentId: 1,
      color: '#dda63a',
      sdgId: 7
    },
    {
      description:
        'Nationaal toepasbare sociale beschermingssystemen en maatregelen implementeren voor iedereen, met inbegrip van sociale beschermingsvloeren, en tegen 2030 een aanzienlijke dekkingsgraad realiseren van de armen en de kwetsbaren.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-01.jpg',
      name: 'Geen armoede',
      number: '1.3',
      categoryId: 4,
      parentId: 1,
      color: '#dda63a',
      sdgId: 8
    },
    {
      description: 'Verzeker een goede gezondheid en promoot welzijn voor alle leeftijden.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-03.jpg',
      name: 'Goede gezondeheid en welzijn',
      number: '3',
      categoryId: 4,
      parentId: null,
      color: '#4c9f38',
      sdgId: 18
    },
    {
      sdgId: 20,
      description:
        'Tegen 2030 universele toegang tot seksuele en reproductieve gezondheidszorgdiensten garanderen, met inbegrip van diensten voor gezinsplanning, informatie en opvoeding, en voor de integratie van reproductieve gezondheid in nationale strategieën en programma\'s.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-03.jpg',
      name: 'Goede gezondeheid en welzijn',
      number: '3.7',
      categoryId: 4,
      parentId: 18,
      color: '#4c9f38'
    },
    {
      description:
        'Tegen 2030 de globale moedersterfte terugdringen tot minder dan 70 per 100.000 levendgeborenen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-03.jpg',
      name: 'Goede gezondeheid en welzijn',
      number: '3.6',
      categoryId: 4,
      parentId: 18,
      color: '#4c9f38',
      sdgId: 24
    },
    {
      description:
        'Tegen 2030 in aanzienlijke mate het aantal sterfgevallen en ziekten verminderen als gevolg van gevaarlijke chemicaliën en de vervuiling en besmetting van lucht, water en bodem.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-03.jpg',
      name: 'Goede gezondeheid en welzijn',
      number: '3.9',
      categoryId: 4,
      parentId: 18,
      color: '#4c9f38',
      sdgId: 25
    },
    {
      description:
        'Verzeker gelijke toegang tot kwaliteitsvol onderwijs en bevorder levenslang leren voor iedereen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-04.jpg',
      name: 'Kwaliteitsonderwijs',
      number: '4',
      categoryId: 4,
      parentId: null,
      color: '#c5192d',
      sdgId: 31
    },
    {
      description:
        'Er tegen 2030 voor zorgen dat alle leerlingen kennis en vaardigheden verwerven die nodig zijn om duurzame ontwikkeling te bevorderen, onder andere via vorming omtrent duurzame ontwikkeling en duurzame levenswijzen, mensenrechten, gendergelijkheid, de bevordering van een cultuur van vrede en geweldloosheid, wereldburgerschap en de waardering van culturele diversiteit en van de bijdrage van de cultuur tot de duurzame ontwikkeling.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-04.jpg',
      name: 'Kwaliteitsonderwijs',
      number: '4.7',
      categoryId: 4,
      parentId: 31,
      color: '#c5192d',
      sdgId: 33
    },
    {
      description:
        'Tegen 2020 het aantal studiebeurzen wereldwijd en substantieel verhogen dat beschikbaar is voor ontwikkelingslanden, in het bijzonder de minst ontwikkelde landen, de kleine eilandstaten in ontwikkeling en de Afrikaanse landen, voor toegang tot het hoger onderwijs, met inbegrip van beroepsopleiding en programmaës omtrent informatie en communicatietechnologie, techniek, ingenieurswezen en wetenschappen, in ontwikkelde landen en andere ontwikkelingslanden.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-04.jpg',
      name: 'Kwaliteitsonderwijs',
      number: '4.b',
      categoryId: 4,
      parentId: 31,
      color: '#c5192d',
      sdgId: 35
    },
    {
      description:
        'Tegen 2030 op aanzienlijke wijze de toevloed verhogen van gekwalificeerde leraren, ook via internationale samenwerking voor lerarenopleidingen in ontwikkelingslanden, in het bijzonder in de minst ontwikkelde landen en de kleine eilandstaten in ontwikkeling.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-04.jpg',
      name: 'Kwaliteitsonderwijs',
      number: '4.c',
      categoryId: 4,
      parentId: 31,
      color: '#c5192d',
      sdgId: 36
    },
    {
      description:
        'Er tegen 2030 voor zorgen dat alle jongeren en een groot aantal volwassenen, zowel mannen als vrouwen, geletterd en rekenvaardig zijn.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-04.jpg',
      name: 'Kwaliteitsonderwijs',
      number: '4.6',
      categoryId: 4,
      parentId: 31,
      color: '#c5192d',
      sdgId: 37
    },
    {
      description:
        'Bouwen en verbeteren van onderwijsfaciliteiten die aandacht hebben voor kinderen, mensen met een beperking en gendergelijkheid en die een veilige, geweldloze, inclusieve en doeltreffende leeromgeving bieden voor iedereen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-04.jpg',
      name: 'Kwaliteitsonderwijs',
      number: '4.a',
      categoryId: 4,
      parentId: 31,
      color: '#c5192d',
      sdgId: 38
    },
    {
      description: 'Verzeker toegang tot duurzaam beheer van water en sanitatie voor iedereen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-06.jpg',
      name: 'Schoon water en sanitair',
      number: '6',
      categoryId: 3,
      parentId: null,
      color: '#26bde2',
      sdgId: 52
    },
    {
      description:
        'Tegen 2020 de op water gebaseerde ecosystemen beschermen en herstellen, met inbegrip van bergen, bossen, moerassen, rivieren, grondwaterlagen en meren.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-06.jpg',
      name: 'Schoon water en sanitair',
      number: '6.6',
      categoryId: 3,
      parentId: 52,
      color: '#26bde2',
      sdgId: 53
    },
    {
      description:
        'Tegen 2030 komen tot een universele en gelijke toegang tot veilig en betaalbaar drinkwater voor iedereen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-06.jpg',
      name: 'Schoon water en sanitair',
      number: '6.1',
      categoryId: 3,
      parentId: 52,
      color: '#26bde2',
      sdgId: 54
    },
    {
      description:
        'Tegen 2030 in aanzienlijke mate de efficiëntie van het watergebruik verhogen in alle sectoren en het duurzaam winnen en verschaffen van zoetwater garanderen om een antwoord te bieden op de waterschaarste en om het aantal mensen dat af te rekenen heeft met waterschaarste, aanzienlijk te verminderen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-06.jpg',
      name: 'Schoon water en sanitair',
      number: '6.4',
      categoryId: 3,
      parentId: 52,
      color: '#26bde2',
      sdgId: 55
    },
    {
      description:
        'Tegen 2030 komen tot toegang tot gepaste en degelijke sanitaire voorzieningen en hygiëne voor iedereen en een einde maken aan openbare ontlasting, waarbij speciale aandacht wordt besteed aan de behoeften van vrouwen en meisjes en mensen in kwetsbare situaties.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-06.jpg',
      name: 'Schoon water en sanitair',
      number: '6.2',
      categoryId: 3,
      parentId: 52,
      color: '#26bde2',
      sdgId: 56
    },
    {
      description:
        'Tegen 2030 de internationale samenwerking en de capaciteitsopbouwende ondersteuning uitbreiden voor de ontwikkelingslanden voor activiteiten die betrekking hebben op water en sanitaire voorzieningen en programma\'s, met inbegrip van technologieën voor waterwinning, ontzilting, waterefficiëntie, afvalwaterzuivering, recyclage en hergebruik.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-06.jpg',
      name: 'Schoon water en sanitair',
      number: '6.a',
      categoryId: 3,
      parentId: 52,
      color: '#26bde2',
      sdgId: 57
    },
    {
      description:
        'Tegen 2030 het geïntegreerde beheer van de waterhulpbronnen implementeren op alle niveaus, ook via gerichte grensoverschrijdende samenwerking.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-06.jpg',
      name: 'Schoon water en sanitair',
      number: '6.5',
      categoryId: 3,
      parentId: 52,
      color: '#26bde2',
      sdgId: 58
    },
    {
      description:
        'Tegen 2030 de waterkwaliteit verbeteren door verontreiniging te beperken, de lozing van gevaarlijke chemicaliën en materialen een halt toe te roepen en de uitstoot ervan tot een minimum te beperken waarbij ook het aandeel van onbehandeld afvalwater wordt gehalveerd en recyclage en veilige hergebruik wereldwijd aanzienlijk worden verhoogd.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-06.jpg',
      name: 'Schoon water en sanitair',
      number: '6.3',
      categoryId: 3,
      parentId: 52,
      color: '#26bde2',
      sdgId: 59
    },
    {
      sdgId: 60,
      description:
        'De deelname versterken en ondersteunen van plaatselijke gemeenschappen bij de verbetering van het waterbeheer en van de sanitaire voorzieningen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-06.jpg',
      name: 'Schoon water en sanitair',
      number: '6.b',
      categoryId: 3,
      parentId: 52,
      color: '#26bde2'
    },
    {
      description:
        'Verzeker toegang tot betaalbare, betrouwbare, duurzame en moderne energie voor iedereen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-07.jpg',
      name: 'Betaalbare en duurzame energie',
      number: '7',
      categoryId: 1,
      parentId: null,
      color: '#fcc30b',
      sdgId: 61
    },
    {
      description:
        'Tegen 2030 universele toegang tot betaalbare, betrouwbare en moderne energiediensten garanderen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-07.jpg',
      name: 'Betaalbare en duurzame energie',
      number: '7.1',
      categoryId: 1,
      parentId: 61,
      color: '#fcc30b',
      sdgId: 62
    },
    {
      description:
        'Tegen 2030 in aanzienlijke mate het aandeel hernieuwbare energie in de globale energiemix verhogen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-07.jpg',
      name: 'Betaalbare en duurzame energie',
      number: '7.2',
      categoryId: 1,
      parentId: 61,
      color: '#fcc30b',
      sdgId: 63
    },
    {
      description:
        'Tegen 2030 de infrastructuur uitbreiden en de technologie upgraden om moderne en duurzame energiediensten te kunnen aanbieden aan alle ontwikkelingslanden, in het bijzonder de minst ontwikkelde landen, de kleine eilandstaten in ontwikkeling en door land ingesloten ontwikkelingslanden, in overeenstemming met hun respectieve steunprogramma\'s.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-07.jpg',
      name: 'Betaalbare en duurzame energie',
      number: '7.b',
      categoryId: 1,
      parentId: 61,
      color: '#fcc30b',
      sdgId: 64
    },
    {
      description:
        'Tegen 2030 de globale snelheid van verbetering in energie-efficiëntie verdubbelen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-07.jpg',
      name: 'Betaalbare en duurzame energie',
      number: '7.3',
      categoryId: 1,
      parentId: 61,
      color: '#fcc30b',
      sdgId: 65
    },
    {
      description:
        'Tegen 2030 de internationale samenwerking verhogen om toegang te vergemakkelijken tot onderzoek en technologie inzake schone energie, met inbegrip van de hernieuwbare energie, de energiedoeltreffendheid en de geavanceerde en schonere fossiele brandstoffentechnologie, en de investering promoten in energie-infrastructuur en schone energietechnologie.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-07.jpg',
      name: 'Betaalbare en duurzame energie',
      number: '7.a',
      categoryId: 1,
      parentId: 61,
      color: '#fcc30b',
      sdgId: 66
    },
    {
      description:
        'Bevorder aanhoudende, inclusieve en duurzame economische groei, volledige en productieve tewerkstelling en waardig werk voor iedereen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-08.png',
      name: 'Eerlijk werk en economische groei',
      number: '8',
      categoryId: 2,
      parentId: null,
      color: '#a21942',
      sdgId: 67
    },
    {
      description:
        'Tot meer economische productiviteit komen door diversificatie, technologische modernisatie en innovatie, ook door de klemtoon te leggen op sectoren met hoge toegevoegde waarde en arbeidsintensieve sectoren.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-08.png',
      name: 'Eerlijk werk en economische groei',
      number: '8.2',
      categoryId: 2,
      parentId: 67,
      color: '#a21942',
      sdgId: 68
    },
    {
      description:
        'Versterken van de mogelijkheden van de plaatselijke financiële instellingen om toegang tot het bankwezen, de verzekeringen en financiële diensten voor allen aan te moedigen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-08.png',
      name: 'Eerlijk werk en economische groei',
      number: '8.10',
      categoryId: 2,
      parentId: 67,
      color: '#a21942',
      sdgId: 69
    },
    {
      sdgId: 70,
      description:
        'De arbeidsrechten beschermen en veilige en gezonde werkomgevingen bevorderen voor alle werknemers, met inbegrip van migrerende werknemers, in het bijzonder vrouwelijke migranten, en zij die zich in precaire werkomstandigheden bevinden.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-08.png',
      name: 'Eerlijk werk en economische groei',
      number: '8.8',
      categoryId: 2,
      parentId: 67,
      color: '#a21942'
    },
    {
      description:
        'Verhogen van de Aid for Trade voor ontwikkelingslanden, in het bijzonder de minst ontwikkelde landen, ook via het verbeterde geïntegreerde kader voor handelsgerelateerde bijstand aan de minst ontwikkelde landen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-08.png',
      name: 'Eerlijk werk en economische groei',
      number: '8.a',
      categoryId: 2,
      parentId: 67,
      color: '#a21942',
      sdgId: 71
    },
    {
      description:
        'Onmiddellijke en effectieve maatregelen nemen om gedwongen arbeid uit de wereld te helpen, een einde te maken aan moderne slavernij en mensensmokkel en het verbod en de afschaffing van de ergste vormen van kinderarbeid veiligstellen, met inbegrip van het rekruteren en inzetten van kindsoldaten, en tegen 2025 een einde stellen aan kinderarbeid in al haar vormen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-08.png',
      name: 'Eerlijk werk en economische groei',
      number: '8.7',
      categoryId: 2,
      parentId: 67,
      color: '#a21942',
      sdgId: 72
    },
    {
      description:
        'Tegen 2030 geleidelijk aan de wereldwijde efficiëntie, productie en consumptie van hulpbronnen verbeteren en streven naar de ontkoppeling van economische groei en achteruitgang van het milieu, volgens het 10-jarig Programmakader voor Duurzame Consumptie en Productie, waarbij de ontwikkelde landen de leiding nemen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-08.png',
      name: 'Eerlijk werk en economische groei',
      number: '8.4',
      categoryId: 2,
      parentId: 67,
      color: '#a21942',
      sdgId: 73
    },
    {
      description:
        'Tegen 2020 het aandeel aanzienlijk terugschroeven van jongeren die niet aan het werk zijn, geen onderwijs volgen en niet met een opleiding bezig zijn.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-08.png',
      name: 'Eerlijk werk en economische groei',
      number: '8.6',
      categoryId: 2,
      parentId: 67,
      color: '#a21942',
      sdgId: 74
    },
    {
      description:
        'Tegen 2020 een globale strategie voor jongerentewerkstelling ontwikkelen en die operationeel maken en het Globale Jobspact van de Internationale Arbeidsorganisatie implementeren.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-08.png',
      name: 'Eerlijk werk en economische groei',
      number: '8.b',
      categoryId: 2,
      parentId: 67,
      color: '#a21942',
      sdgId: 75
    },
    {
      description:
        'Tegen 2030 komen tot een volledige en productieve tewerkstelling en waardig werk voor alle vrouwen en mannen, ook voor jonge mensen en personen met een handicap, alsook een gelijk loon voor werk van gelijke waarde.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-08.png',
      name: 'Eerlijk werk en economische groei',
      number: '8.5',
      categoryId: 2,
      parentId: 67,
      color: '#a21942',
      sdgId: 76
    },
    {
      description:
        'Tegen 2030 beleidslijnen uitwerken en implementeren ter ondersteuning van het duurzaam toerisme dat jobs creëert en plaatselijke cultuur en producten bevordert.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-08.png',
      name: 'Eerlijk werk en economische groei',
      number: '8.9',
      categoryId: 2,
      parentId: 67,
      color: '#a21942',
      sdgId: 77
    },
    {
      description:
        'Bevorderen van op ontwikkeling toegespitste beleidslijnen die productieve activiteiten ondersteunen, alsook de creatie van waardige jobs, ondernemerschap, creativiteit en innovatie, en de formalisering en de groei aanmoedigen van micro-, kleine en middelgrote ondernemingen, ook via toegang tot financiële diensten.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-08.png',
      name: 'Eerlijk werk en economische groei',
      number: '8.3',
      categoryId: 2,
      parentId: 67,
      color: '#a21942',
      sdgId: 78
    },
    {
      description:
        'De economische groei per capita in stand houden in overeenstemming met de nationale omstandigheden en, in het bijzonder, minstens 7% aangroei van het bruto binnenlands product per jaar in de minst ontwikkelde landen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-08.png',
      name: 'Eerlijk werk en economische groei',
      number: '8.1',
      categoryId: 2,
      parentId: 67,
      color: '#a21942',
      sdgId: 79
    },
    {
      sdgId: 80,
      description:
        'Bouw veerkrachtige infrastructuur, bevorder inclusieve en duurzame industrialisering en stimuleer innovatie.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-09.jpg',
      name: 'Industrie, innovatie en infrastructuur',
      number: '9',
      categoryId: 1,
      parentId: null,
      color: '#fd6925'
    },
    {
      description:
        'Tegen 2030 de infrastructuur moderniseren en industrieën aanpassen om hen duurzaam te maken, waarbij de focus ligt op een grotere doeltreffendheid bij het gebruik van hulpbronnen en van schonere en milieuvriendelijke technologieën en industriële processen, waarbij alle landen de nodige actie ondernemen volgens hun eigen respectieve mogelijkheden.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-09.jpg',
      name: 'Industrie, innovatie en infrastructuur',
      number: '9.4',
      categoryId: 1,
      parentId: 80,
      color: '#fd6925',
      sdgId: 81
    },
    {
      description:
        'Ontwikkelen van kwalitatieve, betrouwbare, duurzame en veerkrachtige infrastructuur, met inbegrip van regionale en grensoverschrijdende infrastructuur, ter ondersteuning van de economische ontwikkeling en het menselijk welzijn, met klemtoon op een betaalbare en billijke toegang voor iedereen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-09.jpg',
      name: 'Industrie, innovatie en infrastructuur',
      number: '9.1',
      categoryId: 1,
      parentId: 80,
      color: '#fd6925',
      sdgId: 82
    },
    {
      description:
        'Verbeteren van het wetenschappelijk onderzoek, moderniseren van de technologische capaciteiten van industriesectoren in alle landen, in het bijzonder in ontwikkelingslanden, waarbij ook tegen 2030 innovatie wordt aangemoedigd en op aanzienlijke wijze het aantal onderzoeks- en ontwikkelingswerkers per miljoen inwoners wordt verhoogd en waarbij ook meer wordt uitgegeven aan publiek en privaat onderzoek en ontwikkeling.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-09.jpg',
      name: 'Industrie, innovatie en infrastructuur',
      number: '9.5',
      categoryId: 1,
      parentId: 80,
      color: '#fd6925',
      sdgId: 83
    },
    {
      description:
        'Ondersteunen van de binnenlandse technologische ontwikkeling, onderzoek en innovatie in ontwikkelingslanden, ook door een gunstig beleidsklimaat te garanderen voor, onder andere, industriële diversificatie en waardetoevoeging aan handelsproducten.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-09.jpg',
      name: 'Industrie, innovatie en infrastructuur',
      number: '9.b',
      categoryId: 1,
      parentId: 80,
      color: '#fd6925',
      sdgId: 84
    },
    {
      description:
        'De duurzame en veerkrachtige ontwikkeling van infrastructuur mogelijk maken in ontwikkelingslanden aan de hand van extra financiële, technologische en technische steun aan Afrikaanse landen, de minst ontwikkelde landen, de door land ingesloten ontwikkelingslanden en de kleine eilandstaten in ontwikkeling.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-09.jpg',
      name: 'Industrie, innovatie en infrastructuur',
      number: '9.a',
      categoryId: 1,
      parentId: 80,
      color: '#fd6925',
      sdgId: 85
    },
    {
      description:
        'Bevorderen van inclusieve en duurzame industrialisering en, tegen 2030, het aandeel in de werkgelegenheid en het bruto binnenlands product van de industrie aanzienlijk doen toenemen, in overeenstemming met de nationale omstandigheden, en dat aandeel verdubbelen in de minst ontwikkelde landen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-09.jpg',
      name: 'Industrie, innovatie en infrastructuur',
      number: '9.2',
      categoryId: 1,
      parentId: 80,
      color: '#fd6925',
      sdgId: 86
    },
    {
      description:
        'De toegang vergroten van kleinschalige industriële en andere ondernemingen, in het bijzonder in de ontwikkelingslanden, tot financiële diensten, inclusief betaalbare kredietverlening, alsook hun integratie in waardeketens en markten.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-09.jpg',
      name: 'Industrie, innovatie en infrastructuur',
      number: '9.3',
      categoryId: 1,
      parentId: 80,
      color: '#fd6925',
      sdgId: 87
    },
    {
      description: 'Dring ongelijkheid in en tussen landen terug.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-10.jpg',
      name: 'Ongelijkheid verminderen',
      number: '10',
      categoryId: 4,
      parentId: null,
      color: '#dd1367',
      sdgId: 88
    },
    {
      description:
        'Officiële ontwikkelingsbijstand en financiële stromen aanmoedigen, met inbegrip van directe buitenlandse investeringen, voor staten waar de behoefte het grootst is, in het bijzonder in de minst ontwikkelde landen, de Afrikaanse landen, de kleine eilandstaten in ontwikkeling en de door land ingesloten ontwikkelingslanden, in overeenstemming met hun nationale plannen en programma\'s.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-10.jpg',
      name: 'Ongelijkheid verminderen',
      number: '10.b',
      categoryId: 4,
      parentId: 88,
      color: '#dd1367',
      sdgId: 89
    },
    {
      sdgId: 90,
      description:
        'Tegen 2030 de sociale, economische en politieke inclusie van iedereen mogelijk maken en bevorderen, ongeacht leeftijd, geslacht, handicap, ras, etniciteit, herkomst, godsdienst of economische of andere status.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-10.jpg',
      name: 'Ongelijkheid verminderen',
      number: '10.2',
      categoryId: 4,
      parentId: 88,
      color: '#dd1367'
    },
    {
      description:
        'Tegen 2030 de transactiekosten van overschrijvingen van migranten reduceren tot minder dan 3% en transfer vanuit landen met kosten hoger dan 5% elimineren.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-10.jpg',
      name: 'Ongelijkheid verminderen',
      number: '10.c',
      categoryId: 4,
      parentId: 88,
      color: '#dd1367',
      sdgId: 91
    },
    {
      description:
        'De regulering en monitoring verbeteren van de globale financiële markten en instellingen en de implementatie versterken van dergelijke reguleringen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-10.jpg',
      name: 'Ongelijkheid verminderen',
      number: '10.5',
      categoryId: 4,
      parentId: 88,
      color: '#dd1367',
      sdgId: 92
    },
    {
      description:
        'Beleid voeren dat geleidelijk tot een grotere gelijkheid leidt, in het bijzonder inzake fiscaliteit, lonen en sociale bescherming.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-10.jpg',
      name: 'Ongelijkheid verminderen',
      number: '10.4',
      categoryId: 4,
      parentId: 88,
      color: '#dd1367',
      sdgId: 93
    },
    {
      description:
        'Een ordelijke, veilige, regelmatige en verantwoordelijke migratie en mobiliteit van mensen mogelijk maken, ook via de implementatie van geplande en degelijk beheerde migratiebeleidslijnen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-10.jpg',
      name: 'Ongelijkheid verminderen',
      number: '10.7',
      categoryId: 4,
      parentId: 88,
      color: '#dd1367',
      sdgId: 94
    },
    {
      description:
        'Het beginsel implementeren van speciale en gedifferentieerde behandeling voor ontwikkelingslanden, in het bijzonder de minst ontwikkelde landen, in overeenstemming met de overeenkomsten van de Wereldhandelsorganisatie.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-10.jpg',
      name: 'Ongelijkheid verminderen',
      number: '10.a',
      categoryId: 4,
      parentId: 88,
      color: '#dd1367',
      sdgId: 95
    },
    {
      description:
        'Tegen 2030 geleidelijk tot een inkomenstoename van de onderste 40% van de bevolking komen tegen een ritme dat hoger ligt dan het nationale gemiddelde, en die toename ook in stand houden.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-10.jpg',
      name: 'Ongelijkheid verminderen',
      number: '10.1',
      categoryId: 4,
      parentId: 88,
      color: '#dd1367',
      sdgId: 96
    },
    {
      description:
        'Gelijke kansen verzekeren en ongelijkheden wegwerken, ook door het afvoeren van discriminerende wetten, beleidslijnen en praktijken en door het bevorderen van de geschikte wetgeving, beleidslijnen en acties in dit opzicht.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-10.jpg',
      name: 'Ongelijkheid verminderen',
      number: '10.3',
      categoryId: 4,
      parentId: 88,
      color: '#dd1367',
      sdgId: 97
    },
    {
      description:
        'Een verbeterde vertegenwoordiging verzekeren en een beter gehoor geven aan de ontwikkelingslanden bij de besluitvorming in mondiale, internationale economische en financiële instellingen om te komen tot meer doeltreffende, geloofwaardige, verantwoordelijke en legitieme instellingen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-10.jpg',
      name: 'Ongelijkheid verminderen',
      number: '10.6',
      categoryId: 4,
      parentId: 88,
      color: '#dd1367',
      sdgId: 98
    },
    {
      description:
        'Maak steden en menselijke nederzettingen inclusief, veilig, veerkrachtig en duurzaam.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-11.jpg',
      name: 'Duurzame steden en gemeenschappen',
      number: '11',
      categoryId: 1,
      parentId: null,
      color: '#fd9d24',
      sdgId: 99
    },
    {
      sdgId: 100,
      description:
        'Tegen 2030 voor iedereen toegang voorzien tot adequate, veilige en betaalbare huisvesting en basisdiensten, en sloppenwijken verbeteren.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-11.jpg',
      name: 'Duurzame steden en gemeenschappen',
      number: '11.1',
      categoryId: 1,
      parentId: 99,
      color: '#fd9d24'
    },
    {
      sdgId: 102,
      description:
        'Tegen 2030 inclusieve en duurzame stadsontwikkeling en capaciteit opbouwen voor participatieve, geïntegreerde en duurzame planning en beheer van menselijke nederzettingen in alle landen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-11.jpg',
      name: 'Duurzame steden en gemeenschappen',
      number: '11.3',
      categoryId: 1,
      parentId: 99,
      color: '#fd9d24'
    },
    {
      sdgId: 103,
      description:
        'De inspanningen verhogen om het culturele en natuurlijke erfgoed van de wereld te beschermen en veilig te stellen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-11.jpg',
      name: 'Duurzame steden en gemeenschappen',
      number: '11.4',
      categoryId: 1,
      parentId: 99,
      color: '#fd9d24'
    },
    {
      sdgId: 106,
      description:
        'Tegen 2030 toegang voorzien tot veilige, betaalbare, toegankelijke en duurzame vervoerssystemen voor iedereen, waarbij de verkeersveiligheid verbeterd wordt, met name door het openbaar vervoer uit te breiden, met aandacht voor de behoeften van mensen in kwetsbare situaties, vrouwen, kinderen, personen met een handicap en ouderen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-11.jpg',
      name: 'Duurzame steden en gemeenschappen',
      number: '11.2',
      categoryId: 1,
      parentId: 99,
      color: '#fd9d24'
    },
    {
      sdgId: 107,
      description: 'Verzeker duurzame consumptie- en productiepatronen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-12.jpg',
      name: 'Verantwoorde comsumptie en productie',
      number: '12',
      categoryId: 2,
      parentId: null,
      color: '#bf8b2e'
    },
    {
      sdgId: 108,
      description:
        'Ontwikkelen en implementeren van instrumenten om de impact te monitoren van duurzame ontwikkeling op duurzaam toerisme dat werkgelegenheid creëert en de plaatselijke cultuur en producten promoot.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-12.jpg',
      name: 'Verantwoorde comsumptie en productie',
      number: '12.b',
      categoryId: 2,
      parentId: 107,
      color: '#bf8b2e'
    },
    {
      sdgId: 109,
      description:
        'Tegen 2020 komen tot een milieuvriendelijk beheer van chemicaliën en van alle afval gedurende hun hele levenscyclus, in overeenstemming met afgesproken internationale kaderovereenkomsten, en de uitstoot aanzienlijk beperken in lucht, water en bodem om hun negatieve invloeden op de menselijke gezondheid en het milieu zoveel mogelijk te beperken.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-12.jpg',
      name: 'Verantwoorde comsumptie en productie',
      number: '12.4',
      categoryId: 2,
      parentId: 107,
      color: '#bf8b2e'
    },
    {
      sdgId: 110,
      description:
        'Tegen 2030 het duurzame beheer en het efficiënte gebruik van natuurlijke hulpbronnen realiseren.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-12.jpg',
      name: 'Verantwoorde comsumptie en productie',
      number: '12.2',
      categoryId: 2,
      parentId: 107,
      color: '#bf8b2e'
    },
    {
      description:
        'Inefficiënte subsidies voor fossiele brandstoffen die afvalproducerende consumptie aanmoedigen rationaliseren, door storende marktinvloeden uit de wereld te helpen, in overeenstemming met de nationale omstandigheden, ook door het belastingsysteem te herstructureren en deze schadelijke subsidies te laten uitdoven, waar deze bestaan, waarbij rekening wordt gehouden met de specifieke noden en omstandigheden in de ontwikkelingslanden en waarbij de mogelijke negatieve invloeden worden geminimaliseerd op hun ontwikkeling op een manier die de armen en de getroffen gemeenschappen beschermt.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-12.jpg',
      name: 'Verantwoorde comsumptie en productie',
      number: '12.c',
      categoryId: 2,
      parentId: 107,
      color: '#bf8b2e',
      sdgId: 111
    },
    {
      description:
        'Bedrijven aanmoedigen, in het bijzonder grote en transnationale bedrijven, om duurzame praktijken aan te nemen en duurzaamheidsinformatie te integreren in hun rapporteringscyclus.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-12.jpg',
      name: 'Verantwoorde comsumptie en productie',
      number: '12.6',
      categoryId: 2,
      parentId: 107,
      color: '#bf8b2e',
      sdgId: 112
    },
    {
      description:
        'Tegen 2030 de voedselverspilling in winkels en bij consumenten per capita halveren en voedselverlies reduceren in de productie- en bevoorradingsketens, met inbegrip van verliezen na de oogst.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-12.jpg',
      name: 'Verantwoorde comsumptie en productie',
      number: '12.3',
      categoryId: 2,
      parentId: 107,
      color: '#bf8b2e',
      sdgId: 113
    },
    {
      description:
        'Tegen 2030 garanderen dat mensen overal beschikken over relevantie informatie over en zich bewust zijn van duurzame ontwikkeling en levensstijlen die in harmonie zijn met de natuur.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-12.jpg',
      name: 'Verantwoorde comsumptie en productie',
      number: '12.8',
      categoryId: 2,
      parentId: 107,
      color: '#bf8b2e',
      sdgId: 114
    },
    {
      description:
        'Tegen 2030 de afvalproductie aanzienlijk beperken via preventie, vermindering, recyclage en hergebruik.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-12.jpg',
      name: 'Verantwoorde comsumptie en productie',
      number: '12.5',
      categoryId: 2,
      parentId: 107,
      color: '#bf8b2e',
      sdgId: 115
    },
    {
      description:
        'Duurzame praktijken bij overheidsopdrachten bevorderen in overeenstemming met nationale beleidslijnen en prioriteiten.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-12.jpg',
      name: 'Verantwoorde comsumptie en productie',
      number: '12.7',
      categoryId: 2,
      parentId: 107,
      color: '#bf8b2e',
      sdgId: 116
    },
    {
      description:
        'Ondersteunen van ontwikkelingslanden ter versterking van hun wetenschappelijke en technologische mogelijkheden om de richting uit te gaan van meer duurzame consumptie- en productiepatronen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-12.jpg',
      name: 'Verantwoorde comsumptie en productie',
      number: '12.a',
      categoryId: 2,
      parentId: 107,
      color: '#bf8b2e',
      sdgId: 117
    },
    {
      description:
        'Het 10-jarig Programmakader inzake Duurzame Consumptie- en Productiepatronen implementeren, waarbij alle landen actie ondernemen, en waarbij de ontwikkelde landen de leiding nemen, rekening houdend met de ontwikkeling en de mogelijkheden van de ontwikkelingslanden.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-12.jpg',
      name: 'Verantwoorde comsumptie en productie',
      number: '12.1',
      categoryId: 2,
      parentId: 107,
      color: '#bf8b2e',
      sdgId: 118
    },
    {
      description: 'Neem dringend actie om klimaatverandering en haar impact te bestrijden.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-13.jpg',
      name: 'Klimaatactie',
      number: '13',
      categoryId: 3,
      parentId: null,
      color: '#3f7e44',
      sdgId: 119
    },
    {
      description:
        'De opvoeding, bewustwording en de menselijke en institutionele capaciteit verbeteren met betrekking tot mitigatie, adaptatie, impactvermindering en vroegtijdige waarschuwing inzake klimaatverandering.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-13.jpg',
      name: 'Klimaatactie',
      number: '13.3',
      categoryId: 3,
      parentId: 119,
      color: '#3f7e44',
      sdgId: 121
    },
    {
      description:
        'Mechanismen promoten om de capaciteit te vergroten in het kader van doeltreffende aan klimaatverandering gekoppelde planning en beheer in de minst ontwikkelde landen en de kleine eilandstaten in ontwikkeling, waarbij ook wordt gefocust op vrouwen, jongeren en lokale en gemarginaliseerde gemeenschappen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-13.jpg',
      name: 'Klimaatactie',
      number: '13.b',
      categoryId: 3,
      parentId: 119,
      color: '#3f7e44',
      sdgId: 122
    },
    {
      description:
        'De verbintenis  uitvoeren die door de ontwikkelde landen in het kader van het Raamverdrag van de Verenigde Naties inzake Klimaatverandering genomen werd omtrent de doelstelling om tegen 2020 gezamenlijk jaarlijks $ 100 miljard bijeen te brengen uit allerlei bronnen, om tegemoet te komen aan de behoeften van de ontwikkelingslanden in de context van aanzienlijke mitigatieacties en van transparantie inzake implementatie, en om door deze kapitalisatie het Groene Klimaatfonds zo snel mogelijk volledig operationeel te maken.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-13.jpg',
      name: 'Klimaatactie',
      number: '13.a',
      categoryId: 3,
      parentId: 119,
      color: '#3f7e44',
      sdgId: 123
    },
    {
      description: 'Behoud en maak duurzaam gebruik van oceanen, zeeën en maritieme hulpbronnen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-14.jpg',
      name: 'Leven in het water',
      number: '14',
      categoryId: 3,
      parentId: null,
      color: '#0a97d9',
      sdgId: 125
    },
    {
      description:
        'Tegen 2020 bepaalde vormen van visserijsubsidies afschaffen die bijdragen tot overcapaciteit en overbevissing, een einde maken aan subsidies die bijdragen tot illegale, niet-aangegeven en ongereguleerde visserij en geen nieuwe vergelijkbare subsidies invoeren, erkennen dat een passende en doeltreffende speciale en gedifferentieerde behandeling van de ontwikkelingslanden en van de minst ontwikkelde landen integraal deel zou moeten uitmaken van de onderhandelingen inzake visserijsubsidies van de Wereldhandelsorganisatie.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-14.jpg',
      name: 'Leven in het water',
      number: '14.6',
      categoryId: 3,
      parentId: 125,
      color: '#0a97d9',
      sdgId: 126
    },
    {
      description:
        'Tegen 2030 de economische voordelen vergroten voor kleine eilandstaten in ontwikkeling en voor de minst ontwikkelde landen van het duurzaam gebruik van mariene rijkdommen, ook via het duurzaam beheer van visserij, aquacultuur en toerisme.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-14.jpg',
      name: 'Leven in het water',
      number: '14.7',
      categoryId: 3,
      parentId: 125,
      color: '#0a97d9',
      sdgId: 127
    },
    {
      sdgId: 130,
      description:
        'Tegen 2020 minstens 10% van de kust- en zeegebieden behouden, in overeenstemming met het nationale en internationale recht en gebaseerd op de beste beschikbare wetenschappelijke informatie.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-14.jpg',
      name: 'Leven in het water',
      number: '14.5',
      categoryId: 3,
      parentId: 125,
      color: '#0a97d9'
    },
    {
      description:
        'Tegen 2020 op een doeltreffende manier de visvangst reguleren en een einde maken aan overbevissing, aan illegale, niet-aangegeven en ongereguleerde visserij en aan destructieve visserijpraktijken, en op wetenschap gebaseerde beheerplannen implementeren, om de visvoorraden zo snel mogelijk te herstellen, op zijn minst op niveaus die een maximale duurzame opbrengst kunnen garanderen zoals bepaald door hun biologische kenmerken.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-14.jpg',
      name: 'Leven in het water',
      number: '14.4',
      categoryId: 3,
      parentId: 125,
      color: '#0a97d9',
      sdgId: 133
    },
    {
      description:
        'De wetenschappelijke kennis vergroten, onderzoekscapaciteit ontwikkelen en mariene technologie overdragen, waarbij rekening wordt gehouden met de criteria en richtlijnen van de Intergouvernementele Oceanografische Commissie inzake de overdracht van mariene technologie, om de gezondheid van de oceaan te verbeteren en de bijdrage te verruimen van de mariene biodiversiteit tot de ontwikkeling van ontwikkelingslanden, in het bijzonder kleine eilandstaten in ontwikkeling en de minst ontwikkelde landen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-14.jpg',
      name: 'Leven in het water',
      number: '14.a',
      categoryId: 3,
      parentId: 125,
      color: '#0a97d9',
      sdgId: 134
    },
    {
      description:
        'Bescherm, herstel en bevorder het duurzaam gebruik van ecosystemen op het vasteland, beheer bossen en wouden duurzaam, bestrijd woestijnvorming, stop landdegradatie en draai het terug en roep het verlies aan biodiversiteit een halt toe.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-15.jpg',
      name: 'Leven op het land',
      number: '15',
      categoryId: 3,
      parentId: null,
      color: '#56c02b',
      sdgId: 136
    },
    {
      description:
        'Aanzienlijke middelen mobiliseren vanuit allerlei bronnen en op alle niveaus om duurzaam bosbeheer te financieren en gepaste stimuli te verschaffen aan ontwikkelingslanden om een dergelijk beheer te organiseren, ook voor behoud en herbebossing.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-15.jpg',
      name: 'Leven op het land',
      number: '15.b',
      categoryId: 3,
      parentId: 136,
      color: '#56c02b',
      sdgId: 138
    },
    {
      description:
        'Bevorderen van het eerlijk en billijk verdelen van de voordelen die voortvloeien uit het gebruik van genetische hulpbronnen en bevorderen van gepaste toegang tot dergelijke hulpbronnen, zoals internationaal overeengekomen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-15.jpg',
      name: 'Leven op het land',
      number: '15.6',
      categoryId: 3,
      parentId: 136,
      color: '#56c02b',
      sdgId: 139
    },
    {
      description:
        'Dringend actie ondernemen om een einde te maken aan stroperij en de handel in beschermde planten- en diersoorten en zowel de vraag naar als het aanbod van illegale producten afkomstig van deze planten- en diersoorten aan te pakken.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-15.jpg',
      name: 'Leven op het land',
      number: '15.7',
      categoryId: 3,
      parentId: 136,
      color: '#56c02b',
      sdgId: 143
    },
    {
      description:
        'Bevorder vreedzame en inclusieve samenlevingen met het oog op duurzame ontwikkeling, verzeker toegang tot justitie voor iedereen en bouw op alle niveaus doeltreffende, verantwoordelijke en toegankelijke instellingen uit.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-16.jpg',
      name: 'Vrede, justitie en sterke publieke diensten',
      number: '16',
      categoryId: 4,
      parentId: null,
      color: '#00689d',
      sdgId: 149
    },
    {
      description:
        'Verruimen en versterken van de participatie van de ontwikkelingslanden in de instellingen van mondiaal bestuur.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-16.jpg',
      name: 'Vrede, justitie en sterke publieke diensten',
      number: '16.8',
      categoryId: 4,
      parentId: 149,
      color: '#00689d',
      sdgId: 151
    },
    {
      description:
        'Ontvankelijke, inclusieve, participatieve en representatieve besluitvorming op alle niveaus garanderen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-16.jpg',
      name: 'Vrede, justitie en sterke publieke diensten',
      number: '16.7',
      categoryId: 4,
      parentId: 149,
      color: '#00689d',
      sdgId: 152
    },
    {
      description:
        'Tegen 2030 een wettelijke identiteit voorzien voor iedereen, met inbegrip van geboorteregistratie.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-16.jpg',
      name: 'Vrede, justitie en sterke publieke diensten',
      number: '16.9',
      categoryId: 4,
      parentId: 149,
      color: '#00689d',
      sdgId: 153
    },
    {
      description:
        'Doeltreffende, verantwoordelijke en transparante instellingen ontwikkelen op alle niveaus.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-16.jpg',
      name: 'Vrede, justitie en sterke publieke diensten',
      number: '16.6',
      categoryId: 4,
      parentId: 149,
      color: '#00689d',
      sdgId: 157
    },
    {
      description: 'Op duurzame wijze een einde maken aan corruptie en omkoperij in al hun vormen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-16.jpg',
      name: 'Vrede, justitie en sterke publieke diensten',
      number: '16.5',
      categoryId: 4,
      parentId: 149,
      color: '#00689d',
      sdgId: 158
    },
    {
      sdgId: 160,
      description:
        'Versterk de implementatiemiddelen en revitaliseer het wereldwijd partnerschap voor duurzame ontwikkeling.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-17.jpg',
      name: 'Partnerschap om doelstellingen te bereiken',
      number: '17',
      categoryId: 4,
      parentId: null,
      color: '#19486a'
    },
    {
      description:
        'Tegen 2030 voortbouwen op bestaande initiatieven om metingen te ontwikkelen met betrekking tot de vooruitgang van duurzame ontwikkeling die kunnen dienen als aanvulling op het bruto binnenlands product, en de statistische capaciteitsopbouw ondersteunen in ontwikkelingslanden.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-17.jpg',
      name: 'Partnerschap om doelstellingen te bereiken',
      number: '17.19',
      categoryId: 4,
      parentId: 160,
      color: '#19486a',
      sdgId: 161
    },
    {
      description:
        'De globale macro-economische stabiliteit versterken, ook via beleidscoördinatie en beleidscoherentie.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-17.jpg',
      name: 'Partnerschap om doelstellingen te bereiken',
      number: '17.13',
      categoryId: 4,
      parentId: 160,
      color: '#19486a',
      sdgId: 162
    },
    {
      description:
        'Tijdig de implementatie realiseren van belasting- en quotavrije markttoegang op blijvende wijze voor alle minst ontwikkelde landen, in overeenstemming met de beslissingen van de Wereldhandelsorganisatie, ook door ervoor te zorgen dat de voorkeursregels die van oorsprong van toepassing zijn op import van de minst ontwikkelde landen, transparant en eenvoudig zijn, en bijdragen tot het vergemakkelijken van markttoegang.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-17.jpg',
      name: 'Partnerschap om doelstellingen te bereiken',
      number: '17.12',
      categoryId: 4,
      parentId: 160,
      color: '#19486a',
      sdgId: 163
    },
    {
      description:
        'Tegen 2020 de steun voor capaciteitsopbouw verhogen aan ontwikkelingslanden, inclusief de minst ontwikkelde landen en de kleine eilandstaten in ontwikkeling, om de beschikbaarheid van hoogwaardige, actuele en betrouwbare gegevens opgedeeld naar inkomen, gender, leeftijd, ras, etnische afkomst, migratiestatus, handicap, geografische locatie en andere kenmerken relevant in een nationale context, aanzienlijk op te drijven.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-17.jpg',
      name: 'Partnerschap om doelstellingen te bereiken',
      number: '17.18',
      categoryId: 4,
      parentId: 160,
      color: '#19486a',
      sdgId: 164
    },
    {
      description:
        'Bijkomende financiële middelen voor ontwikkelingslanden mobiliseren vanuit verschillende bronnen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-17.jpg',
      name: 'Partnerschap om doelstellingen te bereiken',
      number: '17.3',
      categoryId: 4,
      parentId: 160,
      color: '#19486a',
      sdgId: 165
    },
    {
      description:
        'De export van ontwikkelingslanden aanzienlijk doen toenemen, in het bijzonder met de bedoeling om het aandeel van de minst ontwikkelde landen in de mondiale export tegen 2020 te verdubbelen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-17.jpg',
      name: 'Partnerschap om doelstellingen te bereiken',
      number: '17.11',
      categoryId: 4,
      parentId: 160,
      color: '#19486a',
      sdgId: 166
    },
    {
      description:
        'De technologiebank en het mechanisme voor het opbouwen van wetenschappelijke, technologische en innoverende capaciteit voor de minst ontwikkelde landen volledig operationeel maken tegen 2017 en het gebruik opdrijven van de technologie die dit mogelijk moet maken, in het bijzonder de informatie- en communicatietechnologie.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-17.jpg',
      name: 'Partnerschap om doelstellingen te bereiken',
      number: '17.8',
      categoryId: 4,
      parentId: 160,
      color: '#19486a',
      sdgId: 167
    },
    {
      description: 'Beleidscoherentie voor duurzame ontwikkeling versterken.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-17.jpg',
      name: 'Partnerschap om doelstellingen te bereiken',
      number: '17.14',
      categoryId: 4,
      parentId: 160,
      color: '#19486a',
      sdgId: 168
    },
    {
      description:
        'Versterken van de binnenlandse middelenmobilisatie (DRM), ook via internationale steun aan ontwikkelingslanden, om de binnenlandse capaciteit te verbeteren voor het innen van belastingen en andere inkomsten.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-17.jpg',
      name: 'Partnerschap om doelstellingen te bereiken',
      number: '17.1',
      categoryId: 4,
      parentId: 160,
      color: '#19486a',
      sdgId: 169
    },
    {
      sdgId: 170,
      description:
        'De internationale steun verhogen voor het implementeren van doeltreffende en doelgerichte capaciteitsopbouw in ontwikkelingslanden ter ondersteuning van nationale plannen die erop gericht zijn om alle Duurzame Ontwikkelingsdoelstellingen te implementeren, ook via de Noord-Zuid-, Zuid-Zuid- en trilaterale samenwerking.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-17.jpg',
      name: 'Partnerschap om doelstellingen te bereiken',
      number: '17.9',
      categoryId: 4,
      parentId: 160,
      color: '#19486a'
    },
    {
      description:
        'Versterken van de Noord-Zuid-, de Zuid-Zuid- en de regionale en internationale trilaterale samenwerking inzake wetenschap, technologie en innovatie en vergemakkelijken van de toegang daartoe',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-17.jpg',
      name: 'Partnerschap om doelstellingen te bereiken',
      number: '17.6',
      categoryId: 4,
      parentId: 160,
      color: '#19486a',
      sdgId: 171
    },
    {
      description:
        'De ontwikkeling, overdracht, verspreiding en verdeling van ecologische technologieën aan ontwikkelingslanden volgens gunstige voorwaarden, ook inzake gunstige en preferentiële bepalingen, zoals wederzijds overeengekomen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-17.jpg',
      name: 'Partnerschap om doelstellingen te bereiken',
      number: '17.7',
      categoryId: 4,
      parentId: 160,
      color: '#19486a',
      sdgId: 172
    },
    {
      description:
        'Doeltreffende openbare, publiek-private en maatschappelijke partnerschappen aanmoedigen en bevorderen, voortbouwend op de ervaring en het netwerk van partnerschappen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-17.jpg',
      name: 'Partnerschap om doelstellingen te bereiken',
      number: '17.17',
      categoryId: 4,
      parentId: 160,
      color: '#19486a',
      sdgId: 173
    },
    {
      description:
        'Een universeel, op regels gebaseerd, open, niet-discriminerend en billijk multilateraal handelssysteem bevorderen onder de Wereldhandelsorganisatie, ook via het volbrengen van de onderhandelingen onder de Ontwikkelingsagenda van Doha van deze organisatie.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-17.jpg',
      name: 'Partnerschap om doelstellingen te bereiken',
      number: '17.10',
      categoryId: 4,
      parentId: 160,
      color: '#19486a',
      sdgId: 174
    },
    {
      description:
        'Ontwikkelde landen dienen ten volle hun verbintenissen aangaande officiële ontwikkelingshulp te implementeren, waaronder ook de verbintenis van vele ontwikkelde landen om 0,7% van het bruto nationaal inkomen te besteden aan officiële ontwikkelingshulp voor ontwikkelingslanden (ODA/GNI) en 0,15% tot 0,20% ontwikkelingshulp aan de minst ontwikkelde landen',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-17.jpg',
      name: 'Partnerschap om doelstellingen te bereiken',
      number: '17.2',
      categoryId: 4,
      parentId: 160,
      color: '#19486a',
      sdgId: 175
    },
    {
      description:
        'Regelingen goedkeuren en uitvoeren die investeringen in de minst ontwikkelde landen moeten bevorderen.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-17.jpg',
      name: 'Partnerschap om doelstellingen te bereiken',
      number: '17.5',
      categoryId: 4,
      parentId: 160,
      color: '#19486a',
      sdgId: 176
    },
    {
      description:
        'Ontwikkelingslanden bijstaan in hun streven naar schuldhoudbaarheid op lange termijn via gecoördineerde beleidslijnen waarbij aandacht wordt besteed aan het aanmoedigen van de schuldfinanciering, de schuldverlichting en de schuldherstructurering, indien van toepassing, en de externe schuld aanpakken van arme landen met een grote schuldenlast om hun schuldencrisis in te perken.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-17.jpg',
      name: 'Partnerschap om doelstellingen te bereiken',
      number: '17.4',
      categoryId: 4,
      parentId: 160,
      color: '#19486a',
      sdgId: 177
    },
    {
      description:
        'Het Globaal Partnerschap voor duurzame ontwikkeling versterken, aangevuld door partnerschappen met meerdere belanghebbenden (multi-stakeholderpartnerschappen) en kennis, expertise, technologie en financiële hulpmiddelen mobiliseren en delen met het oog op het bereiken van de Duurzame Ontwikkelingsdoelstellingen in alle landen, in het bijzonder in de ontwikkelingslanden.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-17.jpg',
      name: 'Partnerschap om doelstellingen te bereiken',
      number: '17.16',
      categoryId: 4,
      parentId: 160,
      color: '#19486a',
      sdgId: 178
    },
    {
      description:
        'De beleidsruimte en het leiderschap van elke land respecteren om beleidslijnen uit te werken en om duurzame ontwikkeling te implementeren om een einde te maken aan armoede.',
      icon: '/content/images/SDG/SDG-icon-NL-RGB-17.jpg',
      name: 'Partnerschap om doelstellingen te bereiken',
      number: '17.15',
      categoryId: 4,
      parentId: 160,
      color: '#19486a',
      sdgId: 179
    }
  ],
  threshold: [
    {
      thresholdId: 1,
      behaviour: 'higherThanValue',
      value: 50000
    },
    {
      thresholdId: 2,
      behaviour: 'lowerThanValue',
      value: 2000
    },
    {
      thresholdId: 3,
      behaviour: 'lowerThanValue',
      value: 200
    },
    {
      thresholdId: 4,
      behaviour: 'lowerThanValue',
      value: 500
    },
    {
      thresholdId: 5,
      behaviour: 'lowerThanValue',
      value: 10000
    },
    {
      thresholdId: 6,
      behaviour: 'lowerThanValue',
      value: 1500
    },
    {
      thresholdId: 7,
      behaviour: 'lowerThanValue',
      value: 20000
    },
    {
      thresholdId: 8,
      behaviour: 'lowerThanValue',
      value: 35000
    }
  ],
  csrBehaviours: [
    {
      csrAggregateBehaviourId: 1,
      behaviour: 'sum'
    },
    {
      csrAggregateBehaviourId: 2,
      behaviour: 'sum'
    },
    {
      csrAggregateBehaviourId: 3,
      behaviour: 'average'
    },
    {
      csrAggregateBehaviourId: 4,
      behaviour: 'average'
    },
    {
      csrAggregateBehaviourId: 5,
      behaviour: 'sum'
    },
    {
      csrAggregateBehaviourId: 6,
      behaviour: 'sum'
    },
    {
      csrAggregateBehaviourId: 7,
      behaviour: 'sum'
    },
    {
      csrAggregateBehaviourId: 8,
      behaviour: 'sum'
    }
  ],
  csrComposites: [
    {
      csrComponentId: 8,
      DTYPE: 'CSR_Composite',
      icon: '#90BE6D',
      name: 'CO2 Uitstoot',
      csrAggregationBehaviorId: 8,
      sdgId: 119,
      thresholdId: 8,
      parentId: null,
      unit: 'ppm'
    }
  ],
  csrObjectives: [
    {
      csrComponentId: 1,
      DTYPE: 'CSR_Objective',
      icon: '#F8961E',
      name: 'Donaties onderwijs',
      csrAggregationBehaviorId: 1,
      sdgId: 31,
      thresholdId: 1,
      parentId: null,
      unit: 'Euro'
    },
    {
      csrComponentId: 2,
      DTYPE: 'CSR_Objective',
      icon: '#277DA1',
      name: 'Waterverbruik',
      csrAggregationBehaviorId: 2,
      sdgId: 56,
      thresholdId: 2,
      parentId: null,
      unit: 'm³'
    },
    {
      csrComponentId: 3,
      DTYPE: 'CSR_Objective',
      icon: '#F9C74F',
      name: 'Geluidspollutie',
      csrAggregationBehaviorId: 3,
      sdgId: 136,
      thresholdId: 3,
      parentId: null,
      unit: 'dB'
    },
    {
      csrComponentId: 4,
      DTYPE: 'CSR_Objective',
      icon: '#4D908E',
      name: 'Grondstofgebruik',
      csrAggregationBehaviorId: 4,
      sdgId: 130,
      thresholdId: 4,
      parentId: null,
      unit: 'kg'
    },
    {
      csrComponentId: 5,
      DTYPE: 'CSR_Objective',
      icon: '#F94144',
      name: 'Bedrijfsvoortuigen',
      csrAggregationBehaviorId: 5,
      sdgId: 119,
      thresholdId: 5,
      parentId: 8,
      unit: ''
    },
    {
      csrComponentId: 6,
      DTYPE: 'CSR_Objective',
      icon: '#577590',
      name: 'Leasingvloot',
      csrAggregationBehaviorId: 6,
      sdgId: 125,
      thresholdId: 6,
      parentId: null,
      unit: ''
    },
    {
      csrComponentId: 7,
      DTYPE: 'CSR_Objective',
      icon: '#F9C74F',
      name: 'Netverliezen',
      csrAggregationBehaviorId: 7,
      sdgId: 121,
      thresholdId: 7,
      parentId: 8,
      unit: '%'
    }
  ],
  csrhistory: [
    {
      csrHistoryId: 1,
      aggregateType: 'CSR_Sum',
      date: '2022-01-01',
      thresholdValue: 50000,
      thresholdType: 'higherthan',
      value: 12500,
      csrId: 1
    },
    {
      csrHistoryId: 2,
      aggregateType: 'CSR_Sum',
      date: '2022-02-01',
      thresholdValue: 50000,
      thresholdType: 'higherthan',
      value: 17000,
      csrId: 1
    },
    {
      csrHistoryId: 3,
      aggregateType: 'CSR_Sum',
      date: '2022-03-01',
      thresholdValue: 50000,
      thresholdType: 'higherthan',
      value: 25500,
      csrId: 1
    },
    {
      csrHistoryId: 4,
      aggregateType: 'CSR_Sum',
      date: '2022-04-01',
      thresholdValue: 50000,
      thresholdType: 'higherthan',
      value: 45000,
      csrId: 1
    },
    {
      csrHistoryId: 5,
      aggregateType: 'CSR_Sum',
      date: '2022-05-01',
      thresholdValue: 50000,
      thresholdType: 'higherthan',
      value: 65000,
      csrId: 1
    },
    {
      csrHistoryId: 6,
      aggregateType: 'CSR_Sum',
      date: '2018-01-01',
      thresholdValue: 2000,
      thresholdType: 'smallerthan',
      value: 20000,
      csrId: 2
    },
    {
      csrHistoryId: 7,
      aggregateType: 'CSR_Sum',
      date: '2019-01-01',
      thresholdValue: 2000,
      thresholdType: 'smallerthan',
      value: 1000,
      csrId: 2
    },
    {
      csrHistoryId: 8,
      aggregateType: 'CSR_Sum',
      date: '2020-01-01',
      thresholdValue: 2000,
      thresholdType: 'smallerthan',
      value: 8000,
      csrId: 2
    },
    {
      csrHistoryId: 9,
      aggregateType: 'CSR_Sum',
      date: '2021-01-01',
      thresholdValue: 2000,
      thresholdType: 'smallerthan',
      value: 6500,
      csrId: 2
    },
    {
      csrHistoryId: 10,
      aggregateType: 'CSR_Sum',
      date: '2022-01-01',
      thresholdValue: 2000,
      thresholdType: 'smallerthan',
      value: 3000,
      csrId: 2
    },
    {
      csrHistoryId: 11,
      aggregateType: 'CSR_Average',
      date: '2020-01-01',
      thresholdValue: 200,
      thresholdType: 'smallerthan',
      value: 300,
      csrId: 3
    },
    {
      csrHistoryId: 12,
      aggregateType: 'CSR_Average',
      date: '2020-02-01',
      thresholdValue: 200,
      thresholdType: 'smallerthan',
      value: 250,
      csrId: 3
    },
    {
      csrHistoryId: 13,
      aggregateType: 'CSR_Average',
      date: '2020-03-01',
      thresholdValue: 200,
      thresholdType: 'smallerthan',
      value: 190,
      csrId: 3
    },
    {
      csrHistoryId: 14,
      aggregateType: 'CSR_Average',
      date: '2020-04-01',
      thresholdValue: 200,
      thresholdType: 'smallerthan',
      value: 200,
      csrId: 3
    },
    {
      csrHistoryId: 15,
      aggregateType: 'CSR_Average',
      date: '2020-05-01',
      thresholdValue: 200,
      thresholdType: 'smallerthan',
      value: 180,
      csrId: 3
    },
    {
      csrHistoryId: 16,
      aggregateType: 'CSR_Average',
      date: '2017-01-01',
      thresholdValue: 600,
      thresholdType: 'smallerthan',
      value: 1000,
      csrId: 4
    },
    {
      csrHistoryId: 17,
      aggregateType: 'CSR_Average',
      date: '2018-01-01',
      thresholdValue: 600,
      thresholdType: 'smallerthan',
      value: 750,
      csrId: 4
    },
    {
      csrHistoryId: 18,
      aggregateType: 'CSR_Average',
      date: '2019-01-01',
      thresholdValue: 600,
      thresholdType: 'smallerthan',
      value: 700,
      csrId: 4
    },
    {
      csrHistoryId: 19,
      aggregateType: 'CSR_Average',
      date: '2020-01-01',
      thresholdValue: 500,
      thresholdType: 'smallerthan',
      value: 550,
      csrId: 4
    },
    {
      csrHistoryId: 20,
      aggregateType: 'CSR_Average',
      date: '2021-01-01',
      thresholdValue: 500,
      thresholdType: 'smallerthan',
      value: 500,
      csrId: 4
    },
    {
      csrHistoryId: 21,
      aggregateType: 'CSR_Average',
      date: '2022-01-01',
      thresholdValue: 500,
      thresholdType: 'smallerthan',
      value: 430,
      csrId: 4
    },
    {
      csrHistoryId: 22,
      aggregateType: 'CSR_Sum',
      date: '2017-01-01',
      thresholdValue: 5000,
      thresholdType: 'smallerthan',
      value: 1000,
      csrId: 5
    },
    {
      csrHistoryId: 23,
      aggregateType: 'CSR_Sum',
      date: '2018-01-01',
      thresholdValue: 5000,
      thresholdType: 'smallerthan',
      value: 3500,
      csrId: 5
    },
    {
      csrHistoryId: 24,
      aggregateType: 'CSR_Sum',
      date: '2019-01-01',
      thresholdValue: 5000,
      thresholdType: 'smallerthan',
      value: 5600,
      csrId: 5
    },
    {
      csrHistoryId: 25,
      aggregateType: 'CSR_Sum',
      date: '2020-01-01',
      thresholdValue: 10000,
      thresholdType: 'smallerthan',
      value: 8000,
      csrId: 5
    },
    {
      csrHistoryId: 26,
      aggregateType: 'CSR_Sum',
      date: '2021-01-01',
      thresholdValue: 10000,
      thresholdType: 'smallerthan',
      value: 11500,
      csrId: 5
    },
    {
      csrHistoryId: 27,
      aggregateType: 'CSR_Sum',
      date: '2022-01-01',
      thresholdValue: 10000,
      thresholdType: 'smallerthan',
      value: 12000,
      csrId: 5
    },
    {
      csrHistoryId: 28,
      aggregateType: 'CSR_Sum',
      date: '2017-01-01',
      thresholdValue: 1200,
      thresholdType: 'smallerthan',
      value: 100,
      csrId: 6
    },
    {
      csrHistoryId: 29,
      aggregateType: 'CSR_Sum',
      date: '2018-01-01',
      thresholdValue: 1250,
      thresholdType: 'smallerthan',
      value: 250,
      csrId: 6
    },
    {
      csrHistoryId: 30,
      aggregateType: 'CSR_Sum',
      date: '2019-01-01',
      thresholdValue: 1500,
      thresholdType: 'smallerthan',
      value: 750,
      csrId: 6
    },
    {
      csrHistoryId: 31,
      aggregateType: 'CSR_Sum',
      date: '2020-01-01',
      thresholdValue: 1500,
      thresholdType: 'smallerthan',
      value: 650,
      csrId: 6
    },
    {
      csrHistoryId: 32,
      aggregateType: 'CSR_Sum',
      date: '2021-01-01',
      thresholdValue: 1500,
      thresholdType: 'smallerthan',
      value: 800,
      csrId: 6
    },
    {
      csrHistoryId: 33,
      aggregateType: 'CSR_Sum',
      date: '2022-01-01',
      thresholdValue: 1500,
      thresholdType: 'smallerthan',
      value: 850,
      csrId: 6
    },
    {
      csrHistoryId: 34,
      aggregateType: 'CSR_Sum',
      date: '2017-01-01',
      thresholdValue: 20000,
      thresholdType: 'smallerthan',
      value: 10000,
      csrId: 7
    },
    {
      csrHistoryId: 35,
      aggregateType: 'CSR_Sum',
      date: '2018-01-01',
      thresholdValue: 20000,
      thresholdType: 'smallerthan',
      value: 12000,
      csrId: 7
    },
    {
      csrHistoryId: 36,
      aggregateType: 'CSR_Sum',
      date: '2019-01-01',
      thresholdValue: 20000,
      thresholdType: 'smallerthan',
      value: 12500,
      csrId: 7
    },
    {
      csrHistoryId: 37,
      aggregateType: 'CSR_Sum',
      date: '2020-01-01',
      thresholdValue: 20000,
      thresholdType: 'smallerthan',
      value: 12800,
      csrId: 7
    },
    {
      csrHistoryId: 38,
      aggregateType: 'CSR_Sum',
      date: '2021-01-01',
      thresholdValue: 20000,
      thresholdType: 'smallerthan',
      value: 15000,
      csrId: 7
    },
    {
      csrHistoryId: 39,
      aggregateType: 'CSR_Sum',
      date: '2022-01-01',
      thresholdValue: 20000,
      thresholdType: 'smallerthan',
      value: 17000,
      csrId: 7
    },
    {
      csrHistoryId: 40,
      aggregateType: 'CSR_Sum',
      date: '2017-01-01',
      thresholdValue: 35000,
      thresholdType: 'smallerthan',
      value: 11000,
      csrId: 8
    },
    {
      csrHistoryId: 41,
      aggregateType: 'CSR_Sum',
      date: '2018-01-01',
      thresholdValue: 35000,
      thresholdType: 'smallerthan',
      value: 15500,
      csrId: 8
    },
    {
      csrHistoryId: 42,
      aggregateType: 'CSR_Sum',
      date: '2019-01-01',
      thresholdValue: 35000,
      thresholdType: 'smallerthan',
      value: 18100,
      csrId: 8
    },
    {
      csrHistoryId: 43,
      aggregateType: 'CSR_Sum',
      date: '2020-01-01',
      thresholdValue: 35000,
      thresholdType: 'smallerthan',
      value: 20800,
      csrId: 8
    },
    {
      csrHistoryId: 44,
      aggregateType: 'CSR_Sum',
      date: '2021-01-01',
      thresholdValue: 35000,
      thresholdType: 'smallerthan',
      value: 26500,
      csrId: 8
    },
    {
      csrHistoryId: 45,
      aggregateType: 'CSR_Sum',
      date: '2022-01-01',
      thresholdValue: 35000,
      thresholdType: 'smallerthan',
      value: 29000,
      csrId: 8
    }
  ],
  csrRoles: [
    { CSR_Component_csrComponentId: 1, roles_roleId: 1 },
    { CSR_Component_csrComponentId: 2, roles_roleId: 1 },
    { CSR_Component_csrComponentId: 3, roles_roleId: 1 },
    { CSR_Component_csrComponentId: 4, roles_roleId: 1 },
    { CSR_Component_csrComponentId: 5, roles_roleId: 1 },
    { CSR_Component_csrComponentId: 6, roles_roleId: 1 },
    { CSR_Component_csrComponentId: 7, roles_roleId: 1 },
    { CSR_Component_csrComponentId: 8, roles_roleId: 1 },
    { CSR_Component_csrComponentId: 1, roles_roleId: 2 },
    { CSR_Component_csrComponentId: 2, roles_roleId: 2 },
    { CSR_Component_csrComponentId: 3, roles_roleId: 2 },
    { CSR_Component_csrComponentId: 4, roles_roleId: 2 },
    { CSR_Component_csrComponentId: 5, roles_roleId: 2 },
    { CSR_Component_csrComponentId: 6, roles_roleId: 2 },
    { CSR_Component_csrComponentId: 7, roles_roleId: 2 },
    { CSR_Component_csrComponentId: 8, roles_roleId: 2 },
    { CSR_Component_csrComponentId: 1, roles_roleId: 3 },
    { CSR_Component_csrComponentId: 2, roles_roleId: 3 },
    { CSR_Component_csrComponentId: 3, roles_roleId: 3 },
    { CSR_Component_csrComponentId: 4, roles_roleId: 3 },
    { CSR_Component_csrComponentId: 7, roles_roleId: 3 },
    { CSR_Component_csrComponentId: 8, roles_roleId: 3 },
    { CSR_Component_csrComponentId: 1, roles_roleId: 4 },
    { CSR_Component_csrComponentId: 2, roles_roleId: 4 },
    { CSR_Component_csrComponentId: 3, roles_roleId: 4 },
    { CSR_Component_csrComponentId: 4, roles_roleId: 4 },
    { CSR_Component_csrComponentId: 5, roles_roleId: 4 },
    { CSR_Component_csrComponentId: 6, roles_roleId: 4 },
    { CSR_Component_csrComponentId: 7, roles_roleId: 4 },
    { CSR_Component_csrComponentId: 8, roles_roleId: 4 }
  ],
  datasources: [
    {
      datasourceId: 1,
      soort: 'CsvSource',
      name: 'Donaties lagere scholen',
      source: 'donaties_lagere_scholen.csv',
      content:
        'info,data;schoolnaam,euro;HoGent,654781;HoWest,87632;UGent,32747;KULeuven,687684;VUB,365735'
    },
    {
      datasourceId: 2,
      soort: 'CsvSource',
      name: 'Donaties middelbare scholen',
      source: 'donaties_middelbare_scholen.csv',
      content:
        'info,data;schoolnaam,euro;HoGent,654781;HoWest,87632;UGent,32747;KULeuven,687684;VUB,365735'
    },
    {
      datasourceId: 3,
      soort: 'CsvSource',
      name: 'Donaties hogescholen en universiteiten',
      source: 'donaties_universiteiten_hogescholen.csv',
      content:
        'info,data;schoolnaam,euro;HoGent,654781;HoWest,87632;UGent,32747;KULeuven,687684;VUB,365735'
    },
    {
      datasourceId: 4,
      soort: 'CsvSource',
      name: 'Koeling machines',
      source: 'koeling_machines.csv'
    },
    {
      datasourceId: 5,
      soort: 'CsvSource',
      name: 'Onderhoud',
      source: 'onderhoud.csv'
    },
    {
      datasourceId: 6,
      soort: 'CsvSource',
      name: 'Bedrijfsvoortuigen België',
      source: 'bedrijfsvoortuigen_be.csv'
    },
    {
      datasourceId: 7,
      soort: 'CsvSource',
      name: 'Bedrijfsvoertuigen Nederland',
      source: 'bedrijfsvoortuigen_nl.csv'
    },
    {
      datasourceId: 8,
      soort: 'CsvSource',
      name: 'Andere',
      source: 'other.csv'
    }
  ],
  sourceAggregateBehaviour: [
    {
      sourceAggregateBehaviourId: 1,
      behaviour: 'sum'
    },
    {
      sourceAggregateBehaviourId: 2,
      behaviour: 'sum'
    },
    {
      sourceAggregateBehaviourId: 3,
      behaviour: 'average'
    },
    {
      sourceAggregateBehaviourId: 4,
      behaviour: 'average'
    },
    {
      sourceAggregateBehaviourId: 5,
      behaviour: 'sum'
    },
    {
      sourceAggregateBehaviourId: 6,
      behaviour: 'sum'
    },
    {
      sourceAggregateBehaviourId: 7,
      behaviour: 'sum'
    },
    {
      sourceAggregateBehaviourId: 8,
      behaviour: 'sum'
    }
  ],
  csrSourceBehaviour: [
    {
      CSR_Objective_csrComponentId: 1,
      datasources_sourceAggregateBehaviourId: 1,
      datasources_KEY: 1
    },
    {
      CSR_Objective_csrComponentId: 1,
      datasources_sourceAggregateBehaviourId: 3,
      datasources_KEY: 2
    },
    {
      CSR_Objective_csrComponentId: 1,
      datasources_sourceAggregateBehaviourId: 2,
      datasources_KEY: 3
    },
    {
      CSR_Objective_csrComponentId: 2,
      datasources_sourceAggregateBehaviourId: 5,
      datasources_KEY: 4
    },
    {
      CSR_Objective_csrComponentId: 2,
      datasources_sourceAggregateBehaviourId: 4,
      datasources_KEY: 5
    },
    {
      CSR_Objective_csrComponentId: 5,
      datasources_sourceAggregateBehaviourId: 8,
      datasources_KEY: 6
    },
    {
      CSR_Objective_csrComponentId: 5,
      datasources_sourceAggregateBehaviourId: 8,
      datasources_KEY: 7
    },
    {
      CSR_Objective_csrComponentId: 3,
      datasources_sourceAggregateBehaviourId: 6,
      datasources_KEY: 8
    },
    {
      CSR_Objective_csrComponentId: 4,
      datasources_sourceAggregateBehaviourId: 7,
      datasources_KEY: 8
    },
    {
      CSR_Objective_csrComponentId: 6,
      datasources_sourceAggregateBehaviourId: 8,
      datasources_KEY: 8
    },
    {
      CSR_Objective_csrComponentId: 7,
      datasources_sourceAggregateBehaviourId: 8,
      datasources_KEY: 8
    }
  ],
  loginlog: [
    {
      consecutive_failed_tries: 0,
      status: 'ACTIVE',
      user_id: 4
    },
    {
      consecutive_failed_tries: 0,
      status: 'ACTIVE',
      user_id: 2
    },
    {
      consecutive_failed_tries: 0,
      status: 'ACTIVE',
      user_id: 1
    },
    {
      consecutive_failed_tries: 0,
      status: 'ACTIVE',
      user_id: 3
    },
    {
      consecutive_failed_tries: 2,
      status: 'ACTIVE',
      user_id: 5
    },
    {
      consecutive_failed_tries: 0,
      status: 'ACTIVE',
      user_id: 6
    },
    {
      consecutive_failed_tries: 0,
      status: 'ACTIVE',
      user_id: 7
    }
  ],
  csr_role: [
    { CSR_Component_csrComponentId: 7, roles_roleId: 1 },
    { CSR_Component_csrComponentId: 8, roles_roleId: 1 },
    { CSR_Component_csrComponentId: 1, roles_roleId: 2 },
    { CSR_Component_csrComponentId: 2, roles_roleId: 2 },
    { CSR_Component_csrComponentId: 3, roles_roleId: 2 },
    { CSR_Component_csrComponentId: 4, roles_roleId: 2 },
    { CSR_Component_csrComponentId: 5, roles_roleId: 2 },
    { CSR_Component_csrComponentId: 6, roles_roleId: 2 },
    { CSR_Component_csrComponentId: 7, roles_roleId: 2 },
    { CSR_Component_csrComponentId: 8, roles_roleId: 2 },
    { CSR_Component_csrComponentId: 1, roles_roleId: 3 },
    { CSR_Component_csrComponentId: 2, roles_roleId: 3 },
    { CSR_Component_csrComponentId: 3, roles_roleId: 3 },
    { CSR_Component_csrComponentId: 1, roles_roleId: 4 },
    { CSR_Component_csrComponentId: 2, roles_roleId: 4 },
    { CSR_Component_csrComponentId: 3, roles_roleId: 4 },
    { CSR_Component_csrComponentId: 4, roles_roleId: 4 },
    { CSR_Component_csrComponentId: 5, roles_roleId: 4 }
  ]
};

const dataToDelete = {
  categories: [1, 2, 3, 4],
  roles: [1, 2, 3, 4, 5, 6],
  users: [1, 2, 3, 4, 5, 6, 7],
  category_role: [1, 2, 3, 4],
  parentSdg: [1, 18, 31, 52, 61, 67, 80, 88, 99, 107, 119, 125, 136, 149, 160],
  subSdg: [
    2, 3, 4, 5, 6, 7, 8, 20, 24, 25, 33, 35, 36, 37, 38, 53, 54, 55, 56, 57, 58, 59, 60, 62, 63, 64,
    65, 66, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 81, 82, 83, 84, 85, 86, 87, 89, 90, 91,
    92, 93, 94, 95, 96, 97, 98, 100, 102, 103, 106, 108, 109, 110, 111, 112, 113, 114, 115, 116,
    117, 118, 121, 122, 123, 126, 127, 130, 133, 134, 138, 139, 143, 151, 152, 153, 157, 158, 161,
    162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179
  ],
  csrComposites: [8],
  csrObjectives: [1, 2, 3, 4, 5, 6, 7],
  csrs: [1, 2, 3, 4, 5, 6, 7, 8],
  csr_role: [1, 2, 3, 4, 5, 6, 7, 8],
  threshold: [1, 2, 3, 4, 5, 6, 7, 8],
  csrBehaviour: [1, 2, 3, 4, 5, 6, 7, 8],
  sourceAggregateBehaviour: [1, 2, 3, 4, 5, 6, 7, 8],
  csrhistory: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45
  ],
  datasources: [1, 2, 3, 4, 5, 6, 7, 8]
};

module.exports = {
  data,
  dataToDelete
};
