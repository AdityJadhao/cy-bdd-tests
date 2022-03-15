Feature: Login to Application
   As a invalid user
   I cannot log into application 
   As a valid user
   I want to log in into Application

   Scenario: Invalid Login
        Given I open login page
        When I fill username with 'InvalidAdmin'
        And I fill password with 'InvalidPass'
        And I click on login button
        Then I should see error message


    @focus   //if we want to execute only this scenario
    Scenario: Valid Login
        Given I open login page
        When I fill username with 'Admin'
        And I fill password with 'admin123'
        And I click on login button
        Then I should see homepage
