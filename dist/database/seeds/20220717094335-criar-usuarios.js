"use strict";const bcryptjs = require('bcryptjs');
// eslint-disable-next-line no-unused-vars
// const { QueryInterface } = require('sequelize/types');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'kin',
        email: 'kin222@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
  ),
  down: () => {},
};
// e funcionou depois voltar aqui e ver com o método que ele me deu de exemplo
