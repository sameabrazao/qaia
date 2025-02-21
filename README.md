# Pré requisitos
- Node.js 18.17.0 ou superior (pode ser necessário a instalação do nvm para definir a versão)
- npm (Node Package Manager) - geralmente instalado junto com o Node.js

# Dependências
- npm install

# Execução pelo terminar
- npx cypress run

# Execução com navegador
- npx cypress open

______________________________________________________________________________________________________________________________________________
  # História do usuário:
# Título: Adição de livro AI Engineering: Building Applications with Foundation Models ao Carrinho de Compras da Amazon
Como um cliente da Amazon
Eu quero adicionar o livro AI Engineering: Building Applications with Foundation Models ao meu carrinho de compras,
Para que eu possa revisar o carrinho
# Critérios de Aceitação:
1. O cliente deve ser capaz de visualizar a página do produto com detalhes, como título, autor, edição, e idioma.
2. O cliente deve ter um botão "Adicionar ao Carrinho" visível e acessível na página do produto.
3. Ao clicar no botão "Adicionar ao Carrinho", uma mensagem de confirmação deve aparecer, informando que o produto foi adicionado com sucesso.
4. O carrinho de compras deve ser atualizado automaticamente para refletir a nova adição, mostrando o número total de itens.
# Notas:
- O sistema deve garantir que o produto esteja disponível em estoque antes de permitir a adição ao carrinho.


# Caso de teste: CT001
Descrição: Verificar se o livro AI Engineering: Building Applications with Foundation Models foi adicionado ao carrinho de compras com sucesso.
# Pré-condições:
- O produto desejado deve estar disponível em estoque.
# Passos para Execução:
1. Abra o site da Amazon;
2. Busque pelo livro AI Engineering: Building Applications with Foundation Models;
3. Navegue até a página do produto;
4. Clique no botão "Adicionar ao Carrinho".
6. Aguardar a confirmação de que o produto foi adicionado.
# Resultados Esperados:
- O sistema deve exibir uma mensagem de confirmação informando que o produto foi adicionado ao carrinho.
- O ícone do carrinho de compras deve ser atualizado para refletir a nova quantidade de itens.
- O produto deve aparecer na lista de itens do carrinho de compras.


# Caso de teste CT002
Descrição: Falha na Adição de Livro ao Carrinho de Compras
Objetivo: Verificar se o sistema lida corretamente com a tentativa de adicionar um livro ao carrinho quando o estoque está esgotado.
# Pré-condições:
- O livro que se deseja adicionar ao carrinho deve estar disponível no catálogo, mas com estoque esgotado.
# Passos:
1. Abra o site da Amazon;
2. Navegar até a página do livro que está esgotado.
3. Tentar adicionar o livro ao carrinho de compras clicando no botão "Adicionar ao Carrinho".
# Resultado Esperado:
- O sistema deve exibir uma mensagem de erro informando que o livro não pode ser adicionado ao carrinho porque está esgotado.
- O carrinho de compras não deve ser atualizado com o livro.
# Notas:
- Verificar se a mensagem de erro é clara e compreensível para o usuário.
- Testar se o botão "Adicionar ao Carrinho" está desativado ou oculto quando o estoque está esgotado.

  
