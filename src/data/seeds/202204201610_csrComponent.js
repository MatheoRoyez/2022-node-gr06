const { tables } = require('..');

module.exports = {
  seed: async (knex) => {
    await knex(tables.csr).delete();

    await knex(tables.csr).insert([
      {
        DTYPE: 'CSR_Objective',
        icon: '#577590', // blauw
        name: 'Donaties onderwijs',
        csrAggregationBehaviorId: 1,
        sdgId: 31,
        thresholdId: 1,
        parentId: null,
        unit: 'Euro'
      },
      {
        DTYPE: 'CSR_Objective',
        icon: '#277DA1', //blauw
        name: 'Waterverbruik',
        csrAggregationBehaviorId: 2,
        sdgId: 56,
        thresholdId: 2,
        parentId: null,
        unit: 'hL'
      },
      {
        DTYPE: 'CSR_Objective',
        icon: '#F9C74F', //geel
        name: 'Geluidspollutie',
        csrAggregationBehaviorId: 3,
        sdgId: 136,
        thresholdId: 3,
        parentId: null,
        unit: 'dB'
      },
      {
        DTYPE: 'CSR_Objective',
        icon: '#AD8B73', // Bruin.
        name: 'Grondstofgebruik',
        csrAggregationBehaviorId: 4,
        sdgId: 130,
        thresholdId: 4,
        parentId: null,
        unit: 'kg'
      },
      {
        DTYPE: 'CSR_Objective',
        icon: '#D18CE0', // Paars
        name: 'Bedrijfsvoertuigen',
        csrAggregationBehaviorId: 5,
        sdgId: 119,
        thresholdId: 5,
        parentId: null,
        unit: 'kWh'
      },
      {
        DTYPE: 'CSR_Objective',
        icon: '#577590', // blauw
        name: 'Leasingvloot',
        csrAggregationBehaviorId: 6,
        sdgId: 125,
        thresholdId: 6,
        parentId: null,
        unit: 'ton CO2'
      },
      {
        DTYPE: 'CSR_Objective',
        icon: '#E8ADDE', //fusha
        name: 'Netverliezen',
        csrAggregationBehaviorId: 7,
        sdgId: 121,
        thresholdId: 7,
        parentId: null,
        unit: 'kWh'
      },
      {
        DTYPE: 'CSR_Composite',
        icon: '#AD8B73', // Bruin.
        name: 'CO2 Uitstoot',
        csrAggregationBehaviorId: 8,
        sdgId: 119,
        thresholdId: 8,
        parentId: null,
        unit: 'ppm'
      }
    ]);

    await knex(tables.csr).where('csrComponentId', '=', 5).update({
      parentId: 8
    });
    await knex(tables.csr).where('csrComponentId', '=', 7).update({
      parentId: 8
    });
  }
};
