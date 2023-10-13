// Usando o sucrase, ferramenta de transpilação que permite utilizar conceitos mais modernos do Js
// Em ambientes que não suporta nativamente esses recursos
// Como o Es6 sendo usado no lado servidor
// Ferramenta que pode substituir o uso do babel em determinados tipos de situações

import app from './app';

const port = 4000;

app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port}`);
});
