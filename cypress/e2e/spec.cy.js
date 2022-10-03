var sleep = 1000

describe('T1', () => {
  it('An analyst wants to find the cases the throughput time between activities T2_Kitchen and T7_Closet is longer than 15 mins and those in which it is shorter', () => {
    cy.visit('localhost:8080')
    cy.get('input[type=file]').selectFile('././datalog100.csv')
    cy.get('button[type=submit]').click()
    cy.get('button[id=filterView]').click()
    
    cy.wait(sleep)
    cy.get('input[type=text]').type('Q;H')
    cy.wait(sleep)
    cy.contains('flowSelection').click()
    cy.wait(sleep)
    cy.get('input[type=text]').type('Q;H;900;longer')
    cy.contains('throughPut').click()
    cy.wait(sleep)
    cy.get('button[id=graphView]').click()
    cy.get('button[id=historyView]').click()
    cy.wait(sleep)
    cy.get('circle[id=1]').click(0, 20,{force : true})
    cy.get('button[id=filterView]').click()
    cy.wait(sleep)
    cy.get('input[type=text]').type('Q;H;900;shorter')
    cy.contains('throughPut').click()
    cy.wait(sleep)
    cy.get('button[id=graphView]').click()
    cy.get('button[id=historyView]').click()
    cy.wait(sleep)
  })
})

describe('T2', () => {
  it('An analyst wants to keep the cases that do not contain T2_Kitchen and T11_Bed.', () => {
    cy.visit('localhost:8080')
    
    cy.get('input[type=file]').selectFile('././datalog100.csv')
    cy.get('button[type=submit]').click()
    cy.wait(200)
    cy.get('button[id=filterView]').click()
    cy.wait(500)

    cy.get('input[type=text]').type('Q')

    cy.contains('filterOut').click()
    cy.wait(200)
    cy.get('input[type=text]').type('D')
    cy.contains('filterOut').click()
    cy.wait(200)
    cy.get('input[type=text]').type('Q;D')

    cy.contains('filterOut').click()
    cy.wait(200)
    cy.get('button[id=graphView]').click()
    cy.get('button[id=historyView]').click()
    cy.wait(200)
  })
})

describe('T3', () => {
  it('An analyst wants to keep the cases that do not contain T2_Kitchen and T11_Bed', () => {
    cy.visit('localhost:8080')

    cy.get('input[type=file]').selectFile('././datalog100.csv')
    cy.get('button[type=submit]').click()
    cy.get('button[id=filterView]').click()


    cy.get('input[type=text]').type('Q;D')

    cy.contains('filterOut').click()
    cy.wait(200)
    cy.get('input[type=text]').type('Q')
    cy.contains('filterOut').click()
    cy.wait(200)
    cy.get('input[type=text]').type('D')

    cy.contains('filterOut').click()
    cy.wait(200)
    cy.get('button[id=graphView]').click()
    cy.get('button[id=historyView]').click()
    cy.wait(200)
  })
})

describe('T4', () => {
  it('Filter for something that doesnt exist', () => {
    cy.visit('localhost:8080')

    cy.get('input[type=file]').selectFile('././datalog100.csv')
    cy.get('button[type=submit]').click()
    cy.get('button[id=filterView]').click()


    cy.get('input[type=text]').type('QD')

    cy.contains('filterOut').click()
    
 
    cy.get('button[id=graphView]').click()
    cy.get('button[id=historyView]').click()
    cy.wait(200)
  })
})

describe('T5', () => {
  it('Filter twice for the same thing', () => {
    cy.visit('localhost:8080')

    cy.get('input[type=file]').selectFile('././datalog100.csv')
    cy.get('button[type=submit]').click()
    cy.get('button[id=filterView]').click()


    cy.get('input[type=text]').type('Q')

    cy.contains('filterOut').click()
    cy.wait(200)
    cy.get('input[type=text]').type('Q')

    cy.contains('filterOut').click()
    cy.wait(200)
 
    cy.get('button[id=graphView]').click()
    cy.get('button[id=historyView]').click()
  })
})

describe('T6', () => {
  it('An analyst wants to focus on the cases that account for 80% of the behavior at every analysis step.', () => {
    cy.visit('localhost:8080')

    cy.get('input[type=file]').selectFile('././datalog100.csv')
    cy.get('button[type=submit]').click()
    cy.get('button[id=filterView]').click()


    cy.get('input[type=text]').type('Q')

    cy.contains('filterOut').click()
    cy.wait(200)
    cy.get('input[type=text]').type('0.8')
    cy.contains('removeBehavior').click()
    cy.wait(599)
    cy.get('input[type=text]').type('Q')

    cy.contains('filterOut').click()
    cy.wait(200)
    cy.get('input[type=text]').type('0.8')
    cy.contains('removeBehavior').click()
 
    cy.get('button[id=graphView]').click()
    cy.get('button[id=historyView]').click()
  })
})

describe('T7', () => {
  it('An analyst wants to focus on the cases that account for 80% of the behavior at every analysis step.', () => {
    cy.visit('localhost:8080')

    cy.get('input[type=file]').selectFile('././datalog100.csv')
    cy.get('button[type=submit]').click()
    cy.get('button[id=filterView]').click()


    cy.get('input[type=text]').type('Q;D')

    cy.contains('filterOut').click()
    cy.wait(200)
    cy.get('input[type=text]').type('Q')
    cy.contains('filterOut').click()
    cy.wait(200)
    cy.get('input[type=text]').type('D')

    cy.contains('filterOut').click()
    cy.wait(200)
    cy.get('button[id=graphView]').click()
    cy.get('button[id=historyView]').click()

    cy.get('circle[id=0]').click(0, 20,{force : true})
    cy.get('button[id=filterView]').click()

    cy.get('input[type=text]').type('Q')

    cy.contains('filterOut').click()
    cy.wait(200)
    cy.get('input[type=text]').type('D')
    cy.contains('filterOut').click()
    cy.wait(200)
    cy.get('input[type=text]').type('Q;D')

    cy.contains('filterOut').click()
    cy.wait(200)
    cy.get('button[id=graphView]').click()
    cy.get('button[id=historyView]').click()
  })
})