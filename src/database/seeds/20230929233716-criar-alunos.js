module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'alunos',
    [
      {
        nome: 'Enzo',
        sobrenome: 'silva',
        email: 'enzo@gmail.com',
        idade: 10,
        peso: 35.10,
        altura: 1.50,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Eduaro',
        sobrenome: 'lopes',
        email: 'dudu@gmail.com',
        idade: 8,
        peso: 30.50,
        altura: 1.30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Ana',
        sobrenome: 'rodrigues',
        email: 'ana@gmail.com',
        idade: 12,
        peso: 43.30,
        altura: 1.54,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
