# ☕ A Pausa Doce

> Um projeto de front-end que simula uma interface de e-commerce e carrinho de compras para uma cafeteria. O foco principal é o gerenciamento de estado do lado do cliente (client-side) usando **JavaScript puro**.

-----

## 📖 Sobre o Projeto

Este projeto foi criado para demonstrar habilidades fundamentais de front-end, especialmente o gerenciamento de estado sem o uso de frameworks (como React ou Vue). É uma aplicação de página única (SPA) leve que simula a experiência de adicionar e remover itens de um carrinho de compras em uma cafeteria sofisticada.

## ✨ Funcionalidades Principais

  * **Renderização Dinâmica:** Os produtos são carregados a partir de um array de objetos.
  * **Adicionar ao Carrinho:** Adiciona itens ao carrinho. Se um item já existe, sua quantidade é incrementada.
  * **Remover do Carrinho:** Remove itens diretamente do painel lateral.
  * **Painel Lateral Deslizante:** O carrinho é um painel que desliza da direita para a esquerda, sem recarregar a página.
  * **Cálculo em Tempo Real:** O total de itens no ícone do cabeçalho e o preço total no carrinho são atualizados instantaneamente.
  * **Persistência de Dados:** O carrinho é salvo no `localStorage`, mantendo os itens do usuário mesmo se ele fechar ou recarregar a página.
  * **Modal de Confirmação:** Ao clicar em "Finalizar Pedido", um modal de sucesso é exibido e o carrinho é limpo.
  * **Design Responsivo:** A interface é limpa e se adapta a telas de dispositivos móveis.

-----

## 🛠️ Tecnologias Utilizadas

  * **HTML5:** Estrutura semântica e acessível.
  * **CSS3:** Estilização moderna com:
      * Variáveis CSS (para o tema de cores)
      * Flexbox e CSS Grid (para layout)
      * Transitions e Transforms (para animações)
  * **JavaScript (ES6+):**
      * Manipulação do DOM
      * Event Listeners e Delegação de Eventos
      * `localStorage` API
      * Métodos de Array (veja abaixo)

-----

## 💡 O que foi Praticado

O foco principal foi a lógica de JavaScript. Este projeto foi um ótimo exercício para:

  * **Manipulação do DOM:** Criar, ler, atualizar e deletar elementos HTML dinamicamente.
  * **Gerenciamento de Estado Puro:** Controlar o estado do carrinho (um array de objetos) em uma variável JS.
  * **Métodos de Array (ES6+):**
      * `.map()`: Para renderizar a lista de produtos.
      * `.find()`: Para verificar se um item já existia no carrinho.
      * `.filter()`: Para remover um item do carrinho.
      * `.reduce()`: Para calcular o preço e a quantidade total de itens.
  * **JSON:** Uso de `JSON.stringify()` e `JSON.parse()` para salvar e ler dados do `localStorage`.
  * **Componentização (Simulada):** Estruturar o código em funções claras e com responsabilidade única (`updateCartUI`, `addToCart`, `saveCartToLocalStorage`, etc.).

-----

## 🏁 Como Executar Localmente

Este projeto não requer nenhuma instalação ou *build*.

1.  **Clone o repositório:**

    ```sh
    git clone https://github.com/seu-usuario/a-pausa-doce.git
    cd a-pausa-doce
    ```

2.  **Crie a pasta `assets`:**

      * Na raiz do projeto, crie uma pasta chamada `assets`.
      * Adicione suas imagens de produtos (ex: `cappuccino.jpg`, `croissant.jpg`, `affogato.jpg`, etc.) dentro desta pasta.

3.  **Abra o `index.html`:**

      * Basta dar um duplo clique no arquivo `index.html` para abri-lo diretamente no seu navegador.
