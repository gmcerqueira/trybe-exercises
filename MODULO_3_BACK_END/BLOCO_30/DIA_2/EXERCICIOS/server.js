/* Importando o pacote NET, responsável pela implementação dos sockets no Node. */
const net = require("net");

/* Criando o servidor com o método 'createServer', onde recebe uma conexao na qual são expostos os eventos que podemos manipular no nosso servidor. */
const server = net.createServer((connection) => {
  console.log("\r\nCliente conectado");

  /* Assim como um evento normal do Node.js, o método ".on()" escuta um evento em específico e, quando ele é ativado, nossa função de callback é chamada. */
  connection.on("end", () => {
    console.log("Cliente desconectado");
  });

  connection.on("data", (data) => {
    console.log(`Cliente conectado na porta: ${data}`);
  });

  /* Nessa conexão que foi aberta, podemos fazer várias coisas. Uma delas é escrever/devolver uma mensagem para o cliente. */
  connection.write("Mensagem do servidor!\r\n");
  connection.pipe(connection);

  server.getConnections((_err, count) => {
    console.log(`Conexões simultâneas: ${count}`);
  });
});

server.getConnections((_err, count) => {
  console.log(`Conexões simultâneas: ${count}`);
});

/* Após termos programado o servidor, é só colocá-lo de pé */
server.listen(8080, () => {
  console.log("Servidor escutando na porta 8080");
});
