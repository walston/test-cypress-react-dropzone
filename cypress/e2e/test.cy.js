describe("The only test", () => {
  it("the only test", () => {
    cy.visit("/");
    cy.contains("Choose Files").selectFile("cypress/fixtures/biostats.csv");
    cy.contains("biostats.csv");
  });
});
