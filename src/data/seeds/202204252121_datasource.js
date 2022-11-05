const { tables } = require('..');

module.exports = {
  seed: async (knex) => {
    await knex(tables.datasource).delete();

    await knex(tables.datasource).insert([
      {
        soort: 'CsvSource',
        name: 'Donaties lagere scholen',
        source:
          'content\\datasources\\donaties_lagere_scholen.csv',
        content:
          'info,data;schoolnaam,euro;HoGent,654781;HoWest,87632;UGent,32747;KULeuven,687684;VUB,365735'
      },
      {
        soort: 'CsvSource',
        name: 'Donaties middelbare scholen',
        source:
          'content\\datasources\\donaties_middelbare_scholen.csv',
        content:
          'info,data;schoolnaam,euro;HoGent,654781;HoWest,87632;UGent,32747;KULeuven,687684;VUB,365735'
      },
      {
        soort: 'CsvSource',
        name: 'Donaties hogescholen en universiteiten',
        source: 'content\\datasources\\donaties_universiteiten_hogescholen.csv',
        content:
          'info,data;schoolnaam,euro;HoGent,654781;HoWest,87632;UGent,32747;KULeuven,687684;VUB,365735'
      },
      {
        soort: 'CsvSource',
        name: 'Koeling machines',
        source: 'content\\datasources\\koeling_machines.csv',
        content:
          'info,data;schoolnaam,euro;HoGent,654781;HoWest,87632;UGent,32747;KULeuven,687684;VUB,365735'
      },
      {
        soort: 'CsvSource',
        name: 'Onderhoud',
        source: 'content\\datasources\\onderhoud.csv',
        content:
          'info,data;schoolnaam,euro;HoGent,654781;HoWest,87632;UGent,32747;KULeuven,687684;VUB,365735'
      },
      {
        soort: 'CsvSource',
        name: 'Bedrijfsvoertuigen België',
        source: 'content\\datasources\\bedrijfsvoortuigen_be.csv',
        content:
          'info,data;schoolnaam,euro;HoGent,654781;HoWest,87632;UGent,32747;KULeuven,687684;VUB,365735'
      },
      {
        soort: 'CsvSource',
        name: 'Bedrijfsvoertuigen Nederland',
        source: 'content\\datasources\\bedrijfsvoortuigen_nl.csv',
        content:
          'info,data;schoolnaam,euro;HoGent,654781;HoWest,87632;UGent,32747;KULeuven,687684;VUB,365735'
      },
      {
        soort: 'CsvSource',
        name: 'Andere',
        source: 'content\\datasources\\other.csv',
        content:
          'info,data;schoolnaam,euro;HoGent,654781;HoWest,87632;UGent,32747;KULeuven,687684;VUB,365735'
      },
      {
        soort: 'CsvSource',
        name: 'Verwijderbare gegevensbron',
        source: 'content\\datasources\\verwijderbare_bron.csv',
        content: 'content'
      }
    ]);
  }
};
