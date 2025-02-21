describe('Adicionar livro ao carrinho de compras', () => {
  it('Adicionando livro', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('bookData.json').then(bookData=>{
      cy.get("[id=twotabsearchtextbox]").type(bookData.data_seach.title)

      cy.get("[id='nav-search-submit-button']").click()
      cy.contains("a", bookData.data_seach.title).click()

      //validando informações de edição e o autor
      cy.get("[id=bylineInfo]").then(element => {
        expect(element.text()).to.contains(bookData.data_edition.language)
        expect(element.text()).to.contains(bookData.data_edition.author)
      })

      //validando informações de edição
      cy.get("[id=detailBulletsWrapper_feature_div]").then(element =>{
        expect(element.text()).to.contains(bookData.data_edition.edition)
        expect(element.text()).to.contains(bookData.data_edition.pages)
      })

    //validando informação de adição ao carrinho
    //como a única informação sobre o livro na adição que provavelmente não irá mudar facilmente é a imagem decicde colocar essa validação também
    cy.get("[id=add-to-cart-button]").click()
    cy.get("[id=sw-atc-details-single-container]").then(element => {
      expect(element.text()).to.contains(bookData.data_cart.success_message)
      cy.get(element.find("div > a > img")).should("have.attr", "src", "https://m.media-amazon.com/images/I/815KH9GjFTL._AC_AA300_.jpg")
    })
   })
  })
})
