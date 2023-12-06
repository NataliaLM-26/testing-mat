describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.wait(1000); // Espera 2 segundos antes de buscar el contenido
    cy.visit('/');
  });


it('Should visit the login page', ()=>{
  cy.visit('/');
  cy.get('#loginFormTitle').should ('be.visible');
  cy.get('#loginFormTitle').should ('have.text', 'Login Form');
});

it('Should exist input in the login page', () =>{
  cy.visit('/');
  cy.get('#loginFormTitle').should('be.visible');
  cy.get('#loginFormTitle').should ('have.text', 'Login Form');
  cy.get('#loginFormEmailInput').should('exist');
  cy.get('#contrasena').should ('exist');
});

it('Should enter valid email and password and redirect to the main', () => {
  cy.visit('/');

  // Espera hasta que el elemento #loginFormEmailInput exista en el DOM antes de interactuar con él
  cy.get('#loginFormEmailInput', { timeout: 10000 }).should('exist');

  cy.get('#loginFormEmailInput').type('parth@gmail.com');
  cy.get('#contrasena').type('12345678');

  /* cy.get('#btn').click(); */
  cy.visit('http://localhost:4200/Main');
});

});

describe('1a', () => {

it('Should visit the 1a page', ()=>{
  cy.visit('/1a');
  cy.get('#title').should ('be.visible');
  cy.get('#title').should ('have.text', 'Mean & Standar Desviation');
});

it('Should exist textarea in the login page', () =>{
  cy.visit('/1a');
  cy.get('#media1').should('exist');
  cy.get('#std1').should('exist');
  cy.get('#media2').should('exist');
  cy.get('#std2').should('exist');
});

it('Should return results', () => {
  cy.visit('/1a');
  cy.get('#data1').click();
  /* cy.get('#media1').should ('have.text'); */
  cy.get('#data2').click();
});

});

describe('3a', () => {

  it('Should visit the 1a page', ()=>{
    cy.visit('/3a');
    cy.get('#title').should ('be.visible');
    cy.get('#title').should ('have.text', 'Linear regression & Correlation');
  });
  
  xit('Should exist textarea in the login page', () =>{
    cy.visit('/1a');
    cy.get('#media1').should('exist');
    cy.get('#std1').should('exist');
    cy.get('#media2').should('exist');
    cy.get('#std2').should('exist');
  });
  
  xit('Should return results', () => {
    cy.visit('/1a');
    cy.get('#data1').click();
    /* cy.get('#media1').should ('have.text'); */
    cy.get('#data2').click();
  });
  
  });