const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // Escolha uma porta adequada

// Configuração do middleware para processar dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));

// Rota para lidar com o formulário
app.post('/upload', (req, res) => {
  const mensagem = req.body.mensagem;

  // Faça algo com os dados do formulário, como salvá-los em um banco de dados
  // Neste exemplo, apenas exibimos a mensagem no console
  console.log('Mensagem recebida:', mensagem);

  // Redirecionar o usuário de volta para a página do formulário
  res.redirect('/'); // Você pode definir a página de redirecionamento desejada

  // Ou você pode enviar uma resposta personalizada
  // res.send('Mensagem recebida com sucesso!');

});

// Rota para exibir o formulário
app.get('/', (req, res) => {
  res.send(`
    <form action="/upload" method="POST">
      <label for="mensagem"><p>Mensagem:</p></label>
      <textarea name="mensagem" id="mensagem" cols="30" rows="10" required minlength="10" maxlength="100"></textarea>
      <input type="submit" value="Enviar">
    </form>
  `);
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
