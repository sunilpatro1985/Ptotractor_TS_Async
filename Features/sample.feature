Feature: welcome to profile database

# Scenario Outline: Multiple profile entry from examples
# Given Profile entry screen
# Then Enter Name <Name>
# And Enter Tool <Tool>
# And Enter Exp <Exp>
# Then validate profiles saved with out error
# Examples:
#     | Name | Tool | Exp | 
#     | PQR | Protractor | 5 |
#     | GHI | Appium | 6 |

Scenario: Validate Profiles with DataTable
Given Profiles report screen
When Fetch the profiles
Then Validate profiles
    | Name | Tool | Exp | 
    | ABC  | Selenium | 7 |
    | DEF  | Jenkins | 3 |
    | PQR | Protractor | 5 |
    | GHI | Appium | 6 |
    
    # | Key | Value|
    # | UserName | "qavbox"|
    # | Password | "qavbox123" |
   