# QAIA – Automação E2E com Cypress
Projeto de automação de testes end-to-end utilizando Cypress para validação de fluxo de compra em e-commerce.
O objetivo é validar regras de negócio relacionadas à adição de produtos ao carrinho, disponibilidade de estoque e atualização correta da interface.

📌 Objetivo do Projeto
- Automatizar cenários críticos do fluxo de compra, garantindo:
- Integridade do processo de busca
- Validação da página de produto
- Confirmação de adição ao carrinho
- Tratamento de cenários de falha (estoque esgotado)

🛠 Tecnologias Utilizadas
- Node.js 18+
- npm
- Cypress
- JavaScript
- Pipeline CI (Jenkinsfile)


# Estrutura do Projeto
qaia/
 ├── cypress/
 │   ├── e2e/
 │   ├── fixtures/
 │   ├── support/
 ├── cypress.config.js
 ├── package.json
 ├── Jenkinsfile
 └── README.md


▶ Instalação
Clone o repostiório:
  git clone https://github.com/sameabrazao/qaia.git

Instale as dependências:
  npm install

▶ Execução dos Testes
Execução em modo headless (CI):
  npx cypress run
Execução em modo gráfico:
  npx cypress open

📖 História do Usuário
Título: Adição do livro AI Engineering: Building Applications with Foundation Models ao carrinho.
Como cliente da Amazon
Quero adicionar o livro ao carrinho
Para revisar minha compra posteriormente

✅ Critérios de Aceitação
1- O cliente deve visualizar corretamente a página do produto (título, autor, edição, idioma).
2- O botão "Adicionar ao Carrinho" deve estar visível e acessível.
3- Após o clique, deve ser exibida mensagem de confirmação.
4- O carrinho deve atualizar automaticamente a quantidade de itens.
5- O sistema deve validar disponibilidade em estoque antes da adição.

🧪 Casos de Teste Automatizados
# CT001 – Adição com Sucesso
# Objetivo:
Validar que o livro é adicionado corretamente ao carrinho.
# Pré-condição:
Produto disponível em estoque.
# Fluxo validado:
1. Acessar o site
2. Buscar o livro
3. Navegar até a página do produto
4. Clicar em "Adicionar ao Carrinho"
# 5. Validar:
  . Mensagem de confirmação
  . Atualização do ícone do carrinho
  . Produto listado no carrinho
# Resultado Esperado:
Produto adicionado com sucesso e refletido na interface.

# CT002 – Produto Esgotado
# Objetivo:
Validar o comportamento do sistema quando o produto está sem estoque.
# Pré-condição:
Produto listado como indisponível.
# Fluxo validado:
1. Acessar a página do produto esgotado
2. Tentar adicionar ao carrinho
3. Validações:
  . Exibição de mensagem de erro clara
  . Carrinho não atualizado
   . Botão desabilitado ou bloqueado
# Resultado Esperado:
Sistema impede a adição e informa indisponibilidade.


🔎 Cobertura de Validação
# Este projeto valida:
  . Elementos visíveis em tela
  . Interações do usuário
  . Regras de negócio
  . Estados de sucesso e falha
  . Atualização dinâmica de interface

🚀 Evoluções Futuras
  . Implementação de Page Object Model (POM)
  . Custom Commands no Cypress
  . Integração com GitHub Actions
  . Relatórios automatizados de execução
  . Testes parametrizados

👩‍💻 Autora
# Sâmea Brazão
QA com experiência em automação, validação de APIs, projetos de pagamentos digitais e blockchain.
