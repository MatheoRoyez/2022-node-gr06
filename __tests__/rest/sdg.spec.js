const each = require('jest-each').default;

const { withServer, loginMvoCoordinator } = require('../supertest.setup');
const { tables } = require('../../src/data');
const { supplyData, deleteData } = require('../globalFunctions');

describe('sdgs', () => {
  let request;
  let knex;
  let loginheader;

  withServer(({ request: r, knex: k }) => {
    request = r;
    knex = k;
  });
  beforeAll(async () => {
    loginheader = await loginMvoCoordinator(request);
  });

  const url = '/api/sdgs';

  describe('GET /api/sdgs/category/:id', () => {
    beforeAll(async () => {
      await supplyData(knex, { category: tables.category, sdg: tables.sdg });
    });

    afterAll(async () => {
      await deleteData(knex, { category: tables.category, sdg: tables.sdg });
    });

    test('should 200 and return the requested sdgs by categoryId', async () => {
      const categoryId = 3;
      const response = await request
        .get(`${url}/category/${categoryId}`)
        .set('Authorization', loginheader);

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        data: [
          {
            id: 119,
            description: 'Neem dringend actie om klimaatverandering en haar impact te bestrijden.',
            icon: '/content/images/SDG/SDG-icon-NL-RGB-13.jpg',
            name: 'Klimaatactie',
            number: '13',
            color: '#3f7e44',
            children: [
              {
                id: 121,
                description:
                  'De opvoeding, bewustwording en de menselijke en institutionele capaciteit verbeteren met betrekking tot mitigatie, adaptatie, impactvermindering en vroegtijdige waarschuwing inzake klimaatverandering.',
                number: '13.3'
              },
              {
                id: 123,
                description:
                  'De verbintenis  uitvoeren die door de ontwikkelde landen in het kader van het Raamverdrag van de Verenigde Naties inzake Klimaatverandering genomen werd omtrent de doelstelling om tegen 2020 gezamenlijk jaarlijks $ 100 miljard bijeen te brengen uit allerlei bronnen, om tegemoet te komen aan de behoeften van de ontwikkelingslanden in de context van aanzienlijke mitigatieacties en van transparantie inzake implementatie, en om door deze kapitalisatie het Groene Klimaatfonds zo snel mogelijk volledig operationeel te maken.',
                number: '13.a'
              },
              {
                id: 122,
                description:
                  'Mechanismen promoten om de capaciteit te vergroten in het kader van doeltreffende aan klimaatverandering gekoppelde planning en beheer in de minst ontwikkelde landen en de kleine eilandstaten in ontwikkeling, waarbij ook wordt gefocust op vrouwen, jongeren en lokale en gemarginaliseerde gemeenschappen.',
                number: '13.b'
              }
            ]
          },
          {
            id: 125,
            description:
              'Behoud en maak duurzaam gebruik van oceanen, zeeën en maritieme hulpbronnen.',
            icon: '/content/images/SDG/SDG-icon-NL-RGB-14.jpg',
            name: 'Leven in het water',
            number: '14',
            color: '#0a97d9',
            children: [
              {
                id: 133,
                description:
                  'Tegen 2020 op een doeltreffende manier de visvangst reguleren en een einde maken aan overbevissing, aan illegale, niet-aangegeven en ongereguleerde visserij en aan destructieve visserijpraktijken, en op wetenschap gebaseerde beheerplannen implementeren, om de visvoorraden zo snel mogelijk te herstellen, op zijn minst op niveaus die een maximale duurzame opbrengst kunnen garanderen zoals bepaald door hun biologische kenmerken.',
                number: '14.4'
              },
              {
                id: 130,
                description:
                  'Tegen 2020 minstens 10% van de kust- en zeegebieden behouden, in overeenstemming met het nationale en internationale recht en gebaseerd op de beste beschikbare wetenschappelijke informatie.',
                number: '14.5'
              },
              {
                id: 126,
                description:
                  'Tegen 2020 bepaalde vormen van visserijsubsidies afschaffen die bijdragen tot overcapaciteit en overbevissing, een einde maken aan subsidies die bijdragen tot illegale, niet-aangegeven en ongereguleerde visserij en geen nieuwe vergelijkbare subsidies invoeren, erkennen dat een passende en doeltreffende speciale en gedifferentieerde behandeling van de ontwikkelingslanden en van de minst ontwikkelde landen integraal deel zou moeten uitmaken van de onderhandelingen inzake visserijsubsidies van de Wereldhandelsorganisatie.',
                number: '14.6'
              },
              {
                id: 127,
                description:
                  'Tegen 2030 de economische voordelen vergroten voor kleine eilandstaten in ontwikkeling en voor de minst ontwikkelde landen van het duurzaam gebruik van mariene rijkdommen, ook via het duurzaam beheer van visserij, aquacultuur en toerisme.',
                number: '14.7'
              },
              {
                id: 134,
                description:
                  'De wetenschappelijke kennis vergroten, onderzoekscapaciteit ontwikkelen en mariene technologie overdragen, waarbij rekening wordt gehouden met de criteria en richtlijnen van de Intergouvernementele Oceanografische Commissie inzake de overdracht van mariene technologie, om de gezondheid van de oceaan te verbeteren en de bijdrage te verruimen van de mariene biodiversiteit tot de ontwikkeling van ontwikkelingslanden, in het bijzonder kleine eilandstaten in ontwikkeling en de minst ontwikkelde landen.',
                number: '14.a'
              }
            ]
          },
          {
            id: 136,
            description:
              'Bescherm, herstel en bevorder het duurzaam gebruik van ecosystemen op het vasteland, beheer bossen en wouden duurzaam, bestrijd woestijnvorming, stop landdegradatie en draai het terug en roep het verlies aan biodiversiteit een halt toe.',
            icon: '/content/images/SDG/SDG-icon-NL-RGB-15.jpg',
            name: 'Leven op het land',
            number: '15',
            color: '#56c02b',
            children: [
              {
                id: 139,
                description:
                  'Bevorderen van het eerlijk en billijk verdelen van de voordelen die voortvloeien uit het gebruik van genetische hulpbronnen en bevorderen van gepaste toegang tot dergelijke hulpbronnen, zoals internationaal overeengekomen.',
                number: '15.6'
              },
              {
                id: 143,
                description:
                  'Dringend actie ondernemen om een einde te maken aan stroperij en de handel in beschermde planten- en diersoorten en zowel de vraag naar als het aanbod van illegale producten afkomstig van deze planten- en diersoorten aan te pakken.',
                number: '15.7'
              },
              {
                id: 138,
                description:
                  'Aanzienlijke middelen mobiliseren vanuit allerlei bronnen en op alle niveaus om duurzaam bosbeheer te financieren en gepaste stimuli te verschaffen aan ontwikkelingslanden om een dergelijk beheer te organiseren, ook voor behoud en herbebossing.',
                number: '15.b'
              }
            ]
          },
          {
            id: 52,
            description:
              'Verzeker toegang tot duurzaam beheer van water en sanitatie voor iedereen.',
            icon: '/content/images/SDG/SDG-icon-NL-RGB-06.jpg',
            name: 'Schoon water en sanitair',
            number: '6',
            color: '#26bde2',
            children: [
              {
                id: 54,
                description:
                  'Tegen 2030 komen tot een universele en gelijke toegang tot veilig en betaalbaar drinkwater voor iedereen.',
                number: '6.1'
              },
              {
                id: 56,
                description:
                  'Tegen 2030 komen tot toegang tot gepaste en degelijke sanitaire voorzieningen en hygiëne voor iedereen en een einde maken aan openbare ontlasting, waarbij speciale aandacht wordt besteed aan de behoeften van vrouwen en meisjes en mensen in kwetsbare situaties.',
                number: '6.2'
              },
              {
                id: 59,
                description:
                  'Tegen 2030 de waterkwaliteit verbeteren door verontreiniging te beperken, de lozing van gevaarlijke chemicaliën en materialen een halt toe te roepen en de uitstoot ervan tot een minimum te beperken waarbij ook het aandeel van onbehandeld afvalwater wordt gehalveerd en recyclage en veilige hergebruik wereldwijd aanzienlijk worden verhoogd.',
                number: '6.3'
              },
              {
                id: 55,
                description:
                  'Tegen 2030 in aanzienlijke mate de efficiëntie van het watergebruik verhogen in alle sectoren en het duurzaam winnen en verschaffen van zoetwater garanderen om een antwoord te bieden op de waterschaarste en om het aantal mensen dat af te rekenen heeft met waterschaarste, aanzienlijk te verminderen.',
                number: '6.4'
              },
              {
                id: 58,
                description:
                  'Tegen 2030 het geïntegreerde beheer van de waterhulpbronnen implementeren op alle niveaus, ook via gerichte grensoverschrijdende samenwerking.',
                number: '6.5'
              },
              {
                id: 53,
                description:
                  'Tegen 2020 de op water gebaseerde ecosystemen beschermen en herstellen, met inbegrip van bergen, bossen, moerassen, rivieren, grondwaterlagen en meren.',
                number: '6.6'
              },
              {
                id: 57,
                description:
                  'Tegen 2030 de internationale samenwerking en de capaciteitsopbouwende ondersteuning uitbreiden voor de ontwikkelingslanden voor activiteiten die betrekking hebben op water en sanitaire voorzieningen en programma\'s, met inbegrip van technologieën voor waterwinning, ontzilting, waterefficiëntie, afvalwaterzuivering, recyclage en hergebruik.',
                number: '6.a'
              },
              {
                id: 60,
                description:
                  'De deelname versterken en ondersteunen van plaatselijke gemeenschappen bij de verbetering van het waterbeheer en van de sanitaire voorzieningen.',
                number: '6.b'
              }
            ]
          }
        ],
        count: 4
      });
    });

    it('should 404 for an unknown category', async () => {
      const unknownCategoryId = 99;
      const response = await request
        .get(`${url}/category/${unknownCategoryId}`)
        .set('Authorization', loginheader);
      expect(response.status).toBe(404);
    });

    each([[0], [-1], ['abc']]).it('should 400 for invalid category id', async (invalidId) => {
      const response = await request
        .get(`${url}/category/${invalidId}`)
        .set('Authorization', loginheader);
      expect(response.status).toBe(400);
    });

    it('should 401 for request without authentication', async () => {
      const response = await request.get(`${url}/category/3`);
      expect(response.status).toBe(401);
    });
  });
});
