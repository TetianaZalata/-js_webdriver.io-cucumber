Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can type text in search input
    Given I am on the webdriverio page
    When I click on search
    Then I type text <text> on search

    Examples: 
      | text        |
      | webdriverio |
