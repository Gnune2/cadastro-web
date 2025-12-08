# cadastro-web
cadastro web feito com js (node), html, css e uns frameworks (prisma, express, bootstrap, cors, bcrypt)
<br>
para rodar é necessário ter o node.js instalado
## 🚀 Funcionalidades

* **Cadastro de Usuários:** Os usuários podem se cadastrar.
* **Login de Usuários:** Os usuários podem logar com seu login feito no cadastro, que leva para o index do site.

1.  **Clone o Repositório:**
    ```bash
    git clone https://github.com/Gnune2/cadastro-web
    ```
    ```bash
    cd cadastro-web
    ```

2.  **Instale as Dependências e inicie o prisma:**
    ```bash
    npm install express  @prisma/client@6.19 bcrypt
    ```
    ```bash
    npm install -D prisma@6.19 nodemon
    ```
    ```bash
    npx prisma init
    ```

3.  **Configure a Chave da API (API Key):**
    * Crie um arquivo chamado **`.env`** na raiz do projeto.
    * Adicione sua chave da API de geração de imagens (ex: API Key do Gemini) neste arquivo. **Isso é crucial para o funcionamento da IA.**
    ```env
    DATABASE_URL="link do banco mongoDB"
    ```
    
4.  **Prisma generate**
    ```bash
     npx prisma generate
    ```
    
5.  **Inicie o Servidor:**
   Utilize o comando configurado para iniciar o Node.js
    ```bash
    npm start 
    ```
---
