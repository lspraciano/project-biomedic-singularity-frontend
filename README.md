# project-biomedic-singularity


## ☑️ Andamento do Projeto

- Em Desenvolvimento


## ☄️ Versão Atual

- 0.1.0

## 🎨 Telas

1. Login
2. Contador Diferencial


### Login

Esta tela permite o usuário realizar o login através do seu gmail ou 
email e senha cadastrados. Estas funcionalidades ainda não foram implementadas
então basta clicar no botão "Login" para ser redirecionando para tela
de detecções

### Contador Diferencial

Nesta tela o usuário poderá clicar em "Iniciar" para que o seja estabelecida 
a conexão entre o front e o backend via WebSocket. Após iniciar são habilitados
os botões de "Salvar", "Reiniciar" e o botão "Iniciar" vira "Fechar". O "Salvar"
ainda não foi implementado, o "Reiniciar" zera a contagem e o "Fechar" desliga a
conexão estabelecida, cancelando tudo já feito. Ainda nesta tela podemos os 
campos "Identificador" e o "Limite Contagem", que ainda não foram implementados.

Abaixo temos um vídeo demonstrativo

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/bPPGjMr75gk/0.jpg)](https://www.youtube.com/watch?v=bPPGjMr75gk)

## 🚀 Clonando Projeto

Nesta seção, explicaremos como você pode realizar o download e
rodar o projeto em sua máquina.

### 📋 Pré-requisitos

Antes de iniciar, verifique se você atende aos seguintes pré-requisitos:

- Node 20.7.0

### 🔧 Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

1. Clonando o Repositório

```bash
git clone https://github.com/lspraciano/project-biomedic-singularity-frontend
```

2. No diretório raiz do projeto, instale as dependências com o comando

```bash
RUN npm install
```

3. Rode a Aplicação

```bash
RUN npm run dev
```