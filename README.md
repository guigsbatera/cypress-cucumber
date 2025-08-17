# Projeto de Automação de Testes com Cypress
Este repositório contém um projeto de automação de testes End-to-End (E2E) utilizando a ferramenta de testes Cypress. Ele serve como um exemplo prático para demonstrar a criação, execução e organização de testes automatizados em uma aplicação web.

# Tecnologias Utilizadas

* Node.js: Ambiente de execução JavaScript.
* Cypress: Framework de testes E2E. [Cypress.io](https://www.automationexercise.com/) [Documentação Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)
* Visual Studio Code (recomendado): Editor de código.

# Pré-requisitos

Antes de começar, certifique-se de que você tem o Node.js instalado em sua máquina. Para verificar, execute os seguintes comandos no seu terminal:
* node -v
* npm -v
Se eles retornarem as versões instaladas, você está pronto para prosseguir.

# Instalação

Siga os passos abaixo para clonar o repositório e instalar as dependências do projeto:
* Clone o repositório: 

git clone https://github.com/guigsbatera/cypress.git

* Entre no diretório do projeto:
cd cypress

* Instale as dependências:
npm install
Este comando instalará o Cypress e todas as dependências listadas no arquivo package.json.

# Como Executar os Testes
Existem duas maneiras principais de executar os testes com Cypress:

* Modo Interativo (Cypress Test Runner)
Este modo é ideal para o desenvolvimento e depuração dos testes, pois ele abre uma interface gráfica interativa do Cypress.
npx cypress open

Ao executar este comando, a interface do Cypress será aberta. Nela, você pode selecionar o navegador de sua preferência e rodar os testes clicando nos arquivos de especificação (.cy.js ou .cy.ts).

* Modo Headless (Via Terminal)
Este modo executa os testes diretamente no terminal, sem abrir a interface gráfica. É o método mais comum para uso em ambientes de Integração Contínua (CI).
npx cypress run

* Para rodar os testes em um navegador específico (ex: Chrome), você pode usar o comando:
npx cypress run --browser chrome