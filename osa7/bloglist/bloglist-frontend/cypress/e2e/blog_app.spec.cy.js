describe('Blog app', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'Maija Mustikka',
      username: 'Marja',
      password: 'forrest'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:3000')
  })
  it('Login form is shown', function () {
    cy.contains('Log in to application')
    cy.get('input[id=username]').should('have.attr', 'id', 'username')
    cy.get('input[id=password]').should('have.attr', 'id', 'password')
    cy.get('form').contains('form', 'login').submit()
  })
  describe('Login', function () {
    it('succeeds with correct credentials', function () {
      cy.contains('login')
      cy.get('#username').type('Marja')
      cy.get('#password').type('forrest')
      cy.get('#login-button').click()
      cy.contains('Maija Mustikka logged in')
    })
    it('fails with wrong credentials', function () {
      cy.get('#username').type('Matti')
      cy.get('#password').type('forrest')
      cy.get('#login-button').click()
      cy.get('.error').contains('wrong credentials')
      cy.get('.error')
        .should('have.css', 'border-style', 'solid')
        .and('have.css', 'background-color', 'rgb(225, 212, 212)')
    })
  })
  describe('When logged in', function () {
    beforeEach(function () {
      cy.get('#username').type('Marja')
      cy.get('#password').type('forrest')
      cy.get('#login-button').click()
    })
    it('a new blog can be created', function () {
      cy.contains('create blog').click()
      cy.get('#title').type('Best berries')
      cy.get('#author').type('Varpu Virtanen')
      cy.get('#url').type('www.metsa.fi')
      cy.get('#create').click()

      cy.contains('new blog Best berries by Varpu Virtanen')
      cy.contains('Best berries Varpu Virtanen')
    })
    describe('punch of blogs are created', function () {
      beforeEach(function () {
        cy.contains('create blog').click()
        cy.get('#title').type('First new berries')
        cy.get('#author').type('Marja Eka')
        cy.get('#url').type('www.somea.fi')
        cy.get('#create').click()

        cy.get('#title').type('Second new berries')
        cy.get('#author').type('Maija Toka')
        cy.get('#url').type('www.someb.fi')
        cy.get('#create').click()

        cy.get('#title').type('Third new berries')
        cy.get('#author').type('Matti Kolmas')
        cy.get('#url').type('www.somec.fi')
        cy.get('#create').click()

      })
      it('one of those can be liked', function () {
        cy.contains('Second new berries Maija Toka').contains('Like').click()
        cy.contains('Second new berries by Maija Toka liked')
      })
      it('one of those can be removed', function () {
        cy.contains('Third new berries Matti Kolmas').contains('Delete').click()
        cy.contains('Third new berries Matti Kolmas').should('not.exist')
      })
    })
  })
})


