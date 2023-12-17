# Api Rest Escola
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/GuilhermeHenrii/Api_Rest/blob/main/LICENSE)

# Sobre o projeto

https://api.devgui.tech/

Essa Api Rest foi constuída com o intuíto de simular uma gerência de alunos em uma escola. Nela temos rotas para um crud de usuários, com nome, email e senha. Implementei o JWT para a criação de um token para o usuário logado.

Nas rotas do cadastro dos alunos, também teremos um crud no qual eu recebo campos como nome, sobrenome, email, idade, peso e altura.

Usei o Sequelize para fazer a modelagem dos dados e conexão com o banco de dados mariaDB. Em meu servidor, usei o docker para conteinerização do mariaDB, facilitando a manutenção e migração do mesmo.

Posso testacar também a rota para as imagens dos alunos cadastrados, onde usei a biblioteca Multer para o tratamento, configuração de nome, tipo da imagem que será recebida, onde essas imagens serão armazenadas etc.


# Tecnologias utilizadas
## Back end
- NodeJs
- Express
- JWT
- Sequelize
- Multer
- MariaDB
## Devops
- Google Cloud Platform
- Docker

# Autor

Guilherme Henrique Da Silva Lopes

https://www.linkedin.com/in/guilherme-henrique-7aab6b229/
