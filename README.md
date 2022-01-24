# Entrega: Kenzie Market

Nesta entrega vamos desenvolver um sistema utilizando todos os conceitos passados nesse submódulo de nodejs.

### Briefing

Marcela é proprietária de um mercado e gostaria de expandir sua operação para o mundo digital e você foi contrato para desenvolver o backend dessa aplicação.

**_A cliente/administrador(a) deseja os seguintes itens_**

- Cadastrar e gerenciar o estoque de produtos
- Vender produtos na plataforma
- Fazer o acompanhamento de vendas\

**_A cliente gostaria que o seus usuários/compradores_**

- Registrar-se na plataforma
- Fazer um carrinho de compra
- Receber um email com os itens e valores comprados
- Recuperar sua senha de acesso
### Requisitos do sistema

- Utilizar banco de dados Postgres
- Utilizar TypeORM para as queries e gerenciamento de tabelas
- Seguir o padrão Routes, Controller, Services e Repository
- Documentação utilizando Swagger
- Disparar email usando nodemailer
- Cobertura de teste
- Fazer deploy no Heroku

### Rotas

<table>
        <tbody><tr>
          <th>Método</th>
          <th>Caminho</th>
          <th>Responsabilidade</th>
          <th>Regras de negócio</th>
        </tr>
        <tr>
          <td>Post</td>
          <td>/user</td>
          <td>Cria um usuário</td>
          <td>
            Um usuário pode ser do tipo cliente ou do tipo administrador. Use
            uma propriedade booleana que faça essa diferenciação.
          </td>
        </tr>
        <tr>
          <td>Get</td>
          <td>/user/:id</td>
          <td>Seleciona um determinado usuário pelo id</td>
          <td>
            Usuários do tipo cliente são restritos as suas próprias informações.
            Ou seja: um cliente não pode selecionar outro usuário além dele
            mesmo, mas um administrador pode selecionar qualquer usuário do
            sistema.
          </td>
        </tr>
        <tr>
          <td>Get</td>
          <td>/user</td>
          <td>Seleciona todos os usuários</td>
          <td>Apenas os administradores podem fazer essa ação</td>
        </tr>
        <tr>
          <td>Post</td>
          <td>/login</td>
          <td>Gera um token de autenticação</td>
          <td>Login via email e password</td>
        </tr>
        <tr>
          <td>Post</td>
          <td>/product</td>
          <td>Cadastra um único produto</td>
          <td>Apenas usuário do tipo administrador pode realizar essa ação</td>
        </tr>
        <tr>
          <td>Get</td>
          <td>/product/:id</td>
          <td>Seleciona um determinado produto pelo id</td>
          <td>Qualquer usuário pode realizar essa ação</td>
        </tr>
        <tr>
          <td>Get</td>
          <td>/product</td>
          <td>Seleciona todos os produtos cadastrados</td>
          <td>Qualquer usuário pode realizar essa ação</td>
        </tr>
        <tr>
          <td>Post</td>
          <td>/cart</td>
          <td>Adiciona um produto no carrinho</td>
          <td>Apenas usuários logados devem adicionar o produto no carrinho</td>
        </tr>
        <tr>
          <td>Get</td>
          <td>/cart/:id</td>
          <td>Seleciona o carrinho do usuário</td>
          <td>
            Usuários do tipo cliente são restritos as suas próprias informações.
            Ou seja: um cliente não pode selecionar o carrinho de outro usuário,
            mas um administrador pode selecionar qualquer carrinho do sistema
          </td>
        </tr>
        <tr>
          <td>Get</td>
          <td>/cart</td>
          <td>Seleciona todos os carrinhos</td>
          <td>Apenas os administradores podem realizar essa ação</td>
        </tr>
        <tr>
          <td>Delete</td>
          <td>/cart/:product_id</td>
          <td>Deleta um produto do carrinho</td>
          <td>
            Apenas o usuário dono do carrinho e o administrador pode realizar
            essa ação
          </td>
        </tr>
        <tr>
          <td>Post</td>
          <td>/buy</td>
          <td>Realiza compra dos produtos do carrinho</td>
          <td>
            Apenas o dono do carrinho pode finalizar uma compra e após a sua
            finalização um email com os dados da compra deve ser disparado para
            o usuário.
          </td>
        </tr>
        <tr>
          <td>Get</td>
          <td>/buy/:id</td>
          <td>Seleciona uma compra já realizada</td>
          <td>
            Apenas o usuário dono da compra e o administrador pode realizar essa
            ação
          </td>
        </tr>
        <tr>
          <td>Get</td>
          <td>/buy</td>
          <td>Seleciona todas as compras já realizada</td>
          <td>Apenas o administrador pode realizar essa ação</td>
        </tr>
        <tr>
          <td>Post</td>
          <td>/email</td>
          <td>Envia um email qualquer para um determinado usuário</td>
          <td>
            Caso o administrador queira mandar alguma mensagem para um usuário
            qualquer. Apenas o administrador pode realizar essa ação
          </td>
        </tr>
        <tr>
          <td>Post</td>
          <td>/recuperar</td>
          <td>Envia um código de validação para o email do usuário</td>
          <td>
            O sistema deverá gerar um código validador qualquer na qual será
            usado para a recuperação de senha
          </td>
        </tr>
        <tr>
          <td>Post</td>
          <td>/alterar_senha</td>
          <td>Altera a senha do usuário</td>
          <td>
            A partir do código validador que o usuário recebe em seu email, o
            usuário pode alterar a senha mandando no body da requisição o
            codigo, a nova senha e sua confirmação.
          </td>
        </tr>
      </tbody></table>
