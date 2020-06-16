Feature: welcome to profile database

Scenario Outline: Multiple profile entry from examples
Given Profile entry screen
Then Enter Name <Name>
And Enter Tool <Tool>
And Enter Exp <Exp>
Then validate profiles saved with out error
Examples:
    | Name | Tool | Exp | 
    | PQR | Protractor | 5 |
    | GHI | Appium | 6 |