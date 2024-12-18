describe('reorder tasks', () => {
  beforeEach(() => {
    cy.get('input[placeholder="enter new task"]')
      .click()
      .type('My First Task{enter}')
    cy.get('input[placeholder="enter new task"]')
      .click()
      .type('My Second Task{enter}')
  })

  // TODO: make this work in CI
  // it('swaps order of incomplete tasks', () => {
  //   // Arrange
  //
  //   // Act
  //   cy.get('#incomplete-task-list .task').contains('My Second Task')
  //     .drag('.task', { destination: '#incomplete-task-list .task', position: 'top' })
  //
  //   // Assert
  //   cy.get('#incomplete-task-list .task').first().contains('My Second Task')
  //   cy.get('#incomplete-task-list .task').last().contains('My First Task')
  // })

  // it('keeps new order after page reload', () => {
  //   // Arrange
  //   cy.get('#incomplete-task-list .task').contains('My Second Task')
  //     .drag('.task', { destination: '#incomplete-task-list .task', position: 'top' })
  //
  //   // Act
  //   cy.reload()
  //
  //   // Assert
  //   cy.get('#incomplete-task-list .task').first().contains('My Second Task')
  //   cy.get('#incomplete-task-list .task').last().contains('My First Task')
  // })

  it('keeps completed archived task even after dragging', () => {
    // Arrange
    cy.get('input[placeholder="enter new task"]')
      .click()
      .type('My Archvied Task{enter}')
    cy.get('#selected-task-container input[type="checkbox"][title="Mark task complete"]').click()
    cy.get('button > svg.fa-ellipsis-v').click()
    cy.get('button').contains('Archive').click()

    // Act
    cy.get('#incomplete-task-list .task').contains('My Second Task')
      .drag('.task', { destination: '#incomplete-task-list .task', position: 'top' })

    // Assert
    cy.get('button > svg.fa-caret-down').click()
    cy.contains('label', 'Show archived').click()
    cy.get('#completed-task-list').contains('My Archvied Task').should('exist')
  })

  // it('keeps incomplete archived task even after dragging', () => {
  //   // Arrange
  //   cy.get('input[placeholder="enter new task"]')
  //     .click()
  //     .type('My Archvied Task{enter}')
  //   cy.get('button > svg.fa-ellipsis-v').click()
  //   cy.get('button').contains('Archive').click()
  //
  //   // Act
  //   cy.get('#incomplete-task-list .task').contains('My Second Task')
  //     .drag('.task', { destination: '#incomplete-task-list .task', position: 'top' })
  //
  //   // Assert
  //   cy.get('button > svg.fa-caret-down').click()
  //   cy.contains('label', 'Show archived').click()
  //   cy.get('#incomplete-task-list').contains('My Archvied Task').should('exist')
  // })
})
