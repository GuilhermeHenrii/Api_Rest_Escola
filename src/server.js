// Usando o sucrase, ferramenta de transpilação que permite utilizar conceitos mais modernos do Js
// Em ambientes que não suporta nativamente esses recursos
// Como o Es6 sendo usado no lado servidor
// Ferramenta que pode substituir o uso do babel em determinados tipos de situações

import app from './app';

const port = process.env.APP_PORT;

app.listen(port);
