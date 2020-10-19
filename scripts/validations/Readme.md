 # About:
* The script is to check if the user has provided all the required fields and if they match their value.

## Assumptions:
* Form fields cannot be empty
* Each field of the form must have the correct data type (email, number, string)
* Missing required field (information for the user with an error message about missing required form field when trying to send the form).
* Wrong field value given (information for the user with an error message about wrong form field value, when trying to send the form).
* A message is sent with correct fields.
* GDPR acceptance
* After sending, the user will receive a reply message e.g. (Thank you for the message)

## Tests: 
1). User sending messages

* The user does not enter any of the required fields - a message appears that there are no required fields, the message is not sent
* The user incorrectly enters (email) - a message appears about an incorrectly entered field (email), the message is not sent
* The user incorrectly enters (number) - a message appears about an incorrectly entered (number) field, the message is not sent
* The user fills in all the fields correctly, omits the button from the GDPR (message not sent, message about GDPR acceptance)
* The user fills in all the fields correctly, accepts the button from the GDPR (the message sent to the user receives a message with a reply message)