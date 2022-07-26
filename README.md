![](https://i.imgur.com/xG74tOh.png)

# Desafio Técnico | Front-end 


##  Agenda de contatos pessoal :busts_in_silhouette: 


Desafio proposto pela [Cubos Academy](http://cubos.academy/sucesso) tem como objetivo criar uma agenda pessoal, onde você pode fazer um cadastro de e autenticar-se. Após se autenticar, o usuário pode adicionar, editar, remover e listar contatos em sua agenda.


Projeto baseado no arquivo figma disponivel nesse [link](https://www.figma.com/file/yN40UvrQmv4i8V4uHs94Yn/Aula-Prática?node-id=0%3A1).

### Tecnologias utilizadas:
- React JS
- React Hooks 
    - useState
    - useEffect
    - hooks personalizados
- Axios 
- JSX e CSS
- Context API

### Como executar:
```cmd
cd site-kontacts-agenda-pessoal
npm i
npm start
```

----


## Instruções para uso da API

Você pode importar a `collection` no seu insominia para testar a `api`, basta importar para o seu insominia o arquivo ` Insomnia_2021-10-14.json` que está na pasta `collection` nesse repositório.

Essa `API` possui uma rotas para `login` e `contatos`, veja no exemplo abaixo o uso de cada rota.

URL : https://contacts-api-cubos.herokuapp.com


#### 1. `POST` (Autenticação) URL/login
Nesse endpoint você pode fazer a autenticação de um usuário existe, para isso você passar no `body` as propriedades de `email` e `senha`.


#### 2. `POST` (Aberta)  URL/usuarios
Nesse endpoint você pode fazer o cadastro de um novo usuário no seu sistema,
para cadastrar um usuário você deve enviar o `body` com o `email`, o `nome` e a `senha`.


#### 3. `GET` (Autenticada) URL/contatos
Esse endpoint irá listar um array contendo todos os contatos cadastrados


#### 4. `GET` (Autenticada) URL/contatos/:id
Esse endpoint listará apenas um contato (quando ela existir), o retorno inicial será um objeto contendo id do contato, id do usuario logado, `nome`, `email` e `telefone`.


#### 5. `POST` (Autenticada) URL/contatos
Nesse endpoint você pode cadastrar outros contatos, o `body` para o cadastro precisa enviar o `nome`, `email` e `telefone`.

#### 6. `DELETE` (Autenticada) URL/contatos/:id
Esse endpoint permite fazer a deleção de um contato, como bem sabemos, ele não possui `body`, só é necessário passarmos o `id` do contato na rota.


#### 7. `PUT` (Autenticada) URL/contatos/:id
Esse endpoint permite que você faça a atualização de um contato, para atualizar basta você passar o `id` do contato na rota e enviar o `body` completo contendo `nome`, `telefone` e `email`.

---