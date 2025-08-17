# Projeto de Automação de Testes com Cypress
Este repositório contém um projeto de automação de testes End-to-End (E2E) utilizando a ferramenta de testes Cypress. Ele serve como um exemplo prático para demonstrar a criação, execução e organização de testes automatizados em uma aplicação web.

## Tecnologias Utilizadas

**[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript.
**[Cypress](https://www.cypress.io/)**: Framework de testes E2E.
**[Visual Studio Code](https://code.visualstudio.com/)** (recomendado): Editor de código.

## Pré-requisitos

Antes de começar, certifique-se de que você tem o Node.js instalado em sua máquina. Para verificar, execute os seguintes comandos no seu terminal:
```bash
node -v
npm -v
```
Se eles retornarem as versões instaladas, você está pronto para prosseguir.

## Instalação

Siga os passos abaixo para clonar o repositório e instalar as dependências do projeto:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/guigsbatera/cypress.git](https://github.com/guigsbatera/cypress.git)
    ```

2.  **Entre no diretório do projeto:**
    ```bash
    cd cypress
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```
    Este comando instalará o Cypress e todas as dependências listadas no arquivo `package.json`.

---

## Como Executar os Testes

Existem duas maneiras principais de executar os testes com Cypress:

### 1. Modo Interativo (Cypress Test Runner)

Este modo é ideal para o desenvolvimento e depuração dos testes, pois ele abre uma interface gráfica interativa do Cypress.

```bash
npx cypress open