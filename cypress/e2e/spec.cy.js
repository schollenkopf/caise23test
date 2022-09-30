describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('localhost:8080')
    cy.get('input[type=file]').selectFile('././Data.csv')
    cy.get('button[type=submit]').click()
    
  })
})