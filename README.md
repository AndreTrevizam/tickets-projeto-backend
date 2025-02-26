
# Support Tickets

Esta é uma API simples para gerenciamento de tickets, desenvolvida em Node.js. A API permite que os usuários criem, visualizem, atualizem e excluam tickets. Um ticket pode ser aberto, por exemplo, para reportar um problema com um computador ou qualquer outro tipo de suporte necessário.

## Funcionalidades

- Criar um novo ticket (POST /tickets)
- Listar todos os tickets (GET /tickets)
- Atualizar um ticket para "closed" (PUT /tickets/:id/close)
- Atualizar um ticket (PUT /tickets/:id)
- Excluir um ticket (DELETE /tickets/:id)


## Stack utilizada

- **Back-end:** JavaScript (NodeJS)
- **Outras Ferramentas**: Git


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/AndreTrevizam/tickets-projeto-backend
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

Use o Insomnia ou Postman para fazer as requisições
```bash
  http://localhost:3333/tickets
```

JSON para POST
```bash
  {
	"equipment": "Computador",
	"description": "Computador está dando tela azul",
	"user_name": "Vinicius"
  }
```

Parâmetros para GET
```bash
  http://localhost:3333/tickets?status=closed
  http://localhost:3333/tickets?status=open
```

