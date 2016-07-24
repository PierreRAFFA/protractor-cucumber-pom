Feature: Login to the UpWork.com
  As a visitor
  I want to be able to log in

  Scenario Outline: Login the user
    Given I am on the homepage
    When I SignUp
      And I Log in
      And I Log in with <username> and <password>
    Then I Should be logged in

    Examples:
    | username      | password |
    | pierre        |  digpdfigop   |
    |   blabla      |  sddfgdf   |
    |    DFER       |  42422   |
    |    6DFDfDf00  |  fhggh   |

  Scenario: Login the user with a frozen account
    Given I am on the homepage
    When I SignUp
      And I Log in
      And I Log in with "username" and "password"
    Then I Should be logged in
