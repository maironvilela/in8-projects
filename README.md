# SOBRE O PROJETO

O projeto tem como função o cadastro e listagem de usuários
# Principais Tecnologias Utilizadas
  - Vite
  - NodeJS
  - MongoDB
  - Axios
  - Typescript
  - Express
  - ReactJS
  - React-Hook-Form
  - Docker
  - Husky
  - Lint-Staged

# Instruções Execução do Projeto Backend
 
  > 1 - Realize o Clone do projeto
  ```  
  git clone https://github.com/maironvilela/in8-projects.git
  ```

  > 2 - Acesse o diretório backend
   ```  
   cd backend
  ```

  > 3 - Instale as dependências utilizando um gerenciador de pacotes
  ```
   yarn
  ```

  > 4 - Inicie a instância do MongoDB em um container docker através do docker-compose
  ```
  docker-compose up -d
  ```

  > 5 - Renomeie o arquivo 'env.example' para '.env' e adicione o endereço do da instância do Mongo DB
  ```
  MONGO_URL=mongodb://root:example@localhost:27017/admin

  ```

  > 6 - Execute o servidor 
  ```
  yarn dev
  ```


  # Instruções Execução do Projeto Backend
 
  > 1 - Realize o Clone do projeto
  ```  
  git clone https://github.com/maironvilela/in8-projects.git
  ```

  > 2 - Acesse o diretório frontend
   ```  
   cd frontend
  ```

  > 3 - Instale as dependências utilizando um gerenciador de pacotes
  ```
   yarn
  ```

  > Rode a aplicação
  ```
  yarn dev
  ```

# Template

https://www.figma.com/file/dVW1Rcbb7nGn6w1yDWZ9iR/Untitled?node-id=12%3A60