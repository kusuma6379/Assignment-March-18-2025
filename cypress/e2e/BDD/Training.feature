Feature:To valiadte the submit functionality
Scenario: User should be  submit the all valid credentials
Given: User Navigate to the submit page
When: User enter the <FirstName>
When: User enter the <LastName> 
When: User have to enter the valid <Email>
When: User enter the <ContactNumber>
And: User enter the <Message> 
Then: User successfully submit the details

Example:
|FirstName|LastName|Email                  |ContactNumber|Message   |
|Madavali |Kusuma  |kusumababu017@gmail.com|7989292662   |HelloMasai|