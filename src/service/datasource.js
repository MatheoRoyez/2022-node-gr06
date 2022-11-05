const datasourceRepository = require('../repository/datasource');

const getById = async (id) => {
  const data = await datasourceRepository.findById(id);
  return data;
};

module.exports = {
  getById
};