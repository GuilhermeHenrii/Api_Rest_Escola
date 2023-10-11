"use strict";module.exports = { // migrando tabela - foto
  up: (queryInterface, Sequelize) => queryInterface.createTable('foto', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    originalname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    filename: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    aluno_id: { // aqui temes a foreign key, essa coluna será a coluna que faz a relação da tabela foto com a tabela alunos, pelo id de alunos
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { // aquie estamos passando as referencias, tabela alunos pela cheve id
        model: 'alunos',
        key: 'id',
      },
      onDelete: 'SET NULL', // quando um aluno (registro pai) for apagado, a foto (registro filho) será setado para null
      onUpdate: 'CASCADE', // quando um id de um aluno for atualizado, isso será refletido na foto
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('foto'),
};
