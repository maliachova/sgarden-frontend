describe('login', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3002')
	})

	it('Try to login', () => {
		cy.get('#username').type('karanikio')
		cy.get('#password').type('12345678')
		cy.get('#submit').click()
		cy.url().should('include', '/dashboard')
	})

	it('Try to login with wrong credentials', () => {
		cy.get('#username').type('karanikio')
		cy.get('#password').type('123456789')
		cy.get('#submit').click()
		cy.url().should('not.include', '/dashboard')
		cy.contains('Authentication Error')
	})

	it('Try to login with empty fields', () => {
		cy.get('#submit').click()
		cy.url().should('not.include', '/dashboard')
		cy.contains('Username is required')
		cy.contains('Password is required')
	})
})

describe('home page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3002')
		cy.get('#username').type('karanikio')
		cy.get('#password').type('12345678')
		cy.get('#submit').click()
	})

	it('Check if the page is displayed correctly', () => {
		cy.contains('Dashboard')
	})

	it('Check if the menu contains three items', () => {
		cy.url().should('include', '/dashboard')
		cy.get('#header+div+main > div > div > span').should('have.length', 3)
	})
})