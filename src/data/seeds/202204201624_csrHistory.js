const { tables } = require('..');

module.exports = {
  seed: async (knex) => {
    await knex(tables.csrhistory).delete();

    await knex(tables.csrhistory).insert([
      {
        aggregateType: 'CSR_Sum',
        date: '2022-01-01',
        thresholdValue: 50000,
        thresholdType: 'higherthan',
        value: 12500,
        csrId: 1
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2022-02-01',
        thresholdValue: 50000,
        thresholdType: 'higherthan',
        value: 17000,
        csrId: 1
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2022-03-01',
        thresholdValue: 50000,
        thresholdType: 'higherthan',
        value: 25500,
        csrId: 1
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2022-04-01',
        thresholdValue: 50000,
        thresholdType: 'higherthan',
        value: 45000,
        csrId: 1
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2022-05-01',
        thresholdValue: 50000,
        thresholdType: 'higherthan',
        value: 65000,
        csrId: 1
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2018-01-01',
        thresholdValue: 2000,
        thresholdType: 'smallerthan',
        value: 20000,
        csrId: 2
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2019-01-01',
        thresholdValue: 2000,
        thresholdType: 'smallerthan',
        value: 1000,
        csrId: 2
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2020-01-01',
        thresholdValue: 2000,
        thresholdType: 'smallerthan',
        value: 8000,
        csrId: 2
      },
      {
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
        aggregateType: 'CSR_Average',
        date: '2020-01-01',
        thresholdValue: 200,
        thresholdType: 'smallerthan',
        value: 300,
        csrId: 3
      },
      {
        aggregateType: 'CSR_Average',
        date: '2020-02-01',
        thresholdValue: 200,
        thresholdType: 'smallerthan',
        value: 250,
        csrId: 3
      },
      {
        aggregateType: 'CSR_Average',
        date: '2020-03-01',
        thresholdValue: 200,
        thresholdType: 'smallerthan',
        value: 190,
        csrId: 3
      },
      {
        aggregateType: 'CSR_Average',
        date: '2020-04-01',
        thresholdValue: 200,
        thresholdType: 'smallerthan',
        value: 200,
        csrId: 3
      },
      {
        aggregateType: 'CSR_Average',
        date: '2020-05-01',
        thresholdValue: 200,
        thresholdType: 'smallerthan',
        value: 180,
        csrId: 3
      },
      {
        aggregateType: 'CSR_Average',
        date: '2017-01-01',
        thresholdValue: 600,
        thresholdType: 'smallerthan',
        value: 1000,
        csrId: 4
      },
      {
        aggregateType: 'CSR_Average',
        date: '2018-01-01',
        thresholdValue: 600,
        thresholdType: 'smallerthan',
        value: 750,
        csrId: 4
      },
      {
        aggregateType: 'CSR_Average',
        date: '2019-01-01',
        thresholdValue: 600,
        thresholdType: 'smallerthan',
        value: 700,
        csrId: 4
      },
      {
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
        aggregateType: 'CSR_Average',
        date: '2022-01-01',
        thresholdValue: 500,
        thresholdType: 'smallerthan',
        value: 430,
        csrId: 4
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2017-01-01',
        thresholdValue: 5000,
        thresholdType: 'smallerthan',
        value: 1000,
        csrId: 5
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2018-01-01',
        thresholdValue: 5000,
        thresholdType: 'smallerthan',
        value: 3500,
        csrId: 5
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2019-01-01',
        thresholdValue: 5000,
        thresholdType: 'smallerthan',
        value: 5600,
        csrId: 5
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2020-01-01',
        thresholdValue: 10000,
        thresholdType: 'smallerthan',
        value: 8000,
        csrId: 5
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2021-01-01',
        thresholdValue: 10000,
        thresholdType: 'smallerthan',
        value: 11500,
        csrId: 5
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2022-01-01',
        thresholdValue: 10000,
        thresholdType: 'smallerthan',
        value: 12000,
        csrId: 5
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2017-01-01',
        thresholdValue: 1200,
        thresholdType: 'smallerthan',
        value: 100,
        csrId: 6
      },
      {
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
        aggregateType: 'CSR_Sum',
        date: '2020-01-01',
        thresholdValue: 1500,
        thresholdType: 'smallerthan',
        value: 650,
        csrId: 6
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2021-01-01',
        thresholdValue: 1500,
        thresholdType: 'smallerthan',
        value: 800,
        csrId: 6
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2022-01-01',
        thresholdValue: 1500,
        thresholdType: 'smallerthan',
        value: 850,
        csrId: 6
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2017-01-01',
        thresholdValue: 20000,
        thresholdType: 'smallerthan',
        value: 10000,
        csrId: 7
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2018-01-01',
        thresholdValue: 20000,
        thresholdType: 'smallerthan',
        value: 12000,
        csrId: 7
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2019-01-01',
        thresholdValue: 20000,
        thresholdType: 'smallerthan',
        value: 12500,
        csrId: 7
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2020-01-01',
        thresholdValue: 20000,
        thresholdType: 'smallerthan',
        value: 12800,
        csrId: 7
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2021-01-01',
        thresholdValue: 20000,
        thresholdType: 'smallerthan',
        value: 15000,
        csrId: 7
      },
      {
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
        aggregateType: 'CSR_Sum',
        date: '2018-01-01',
        thresholdValue: 35000,
        thresholdType: 'smallerthan',
        value: 15500,
        csrId: 8
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2019-01-01',
        thresholdValue: 35000,
        thresholdType: 'smallerthan',
        value: 18100,
        csrId: 8
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2020-01-01',
        thresholdValue: 35000,
        thresholdType: 'smallerthan',
        value: 20800,
        csrId: 8
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2021-01-01',
        thresholdValue: 35000,
        thresholdType: 'smallerthan',
        value: 26500,
        csrId: 8
      },
      {
        aggregateType: 'CSR_Sum',
        date: '2022-01-01',
        thresholdValue: 35000,
        thresholdType: 'smallerthan',
        value: 29000,
        csrId: 8
      }
    ]);
  }
};
