const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Pedro Henrique',
        email: 'pedro1@email.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'joao ricardo',
        email: 'joaoricar@email.com',
        password_hash: await bcryptjs.hash('123456g', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Manuela',
        email: 'manuel@email.com',
        password_hash: await bcryptjs.hash('123456gg', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
