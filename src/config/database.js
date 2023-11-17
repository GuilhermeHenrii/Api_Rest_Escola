// Aqui também usaremos o commonJs, pois esse arquivo também será usado pelo sequilize cli.

// Arquivo de configuração da base de dados
require('dotenv').config();

module.exports = {
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: { // criando campos que irá fornecer data e hr em que a tabela foi criada ou atualizada
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at', // "forçando" o campo createdAt a ser convertido para created_at
    updatedAt: 'updated_at', // "forçando" o campo updatedAt a ser convertido para updated_at
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
};
