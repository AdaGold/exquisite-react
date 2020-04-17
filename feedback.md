# Exquisite React
## What We're Looking For

<!-- The goal is to make this a quick review punch list. Simply filling out the table and having an overall comment at the end should suffice for a review-- no need for in-line comments. -->

### Manual Testing

Workflow | yes /no
--- | ---
Verify: There is no section showing the most recent poetry submission visible |
Fill out the six text inputs with inputs for `Player #1` and submit |
Verify: submitting the form clears the line and updates the form header to `Player #2` |
Verify: a new section showing the most recent poetry submission is now viewable |
Fill out the six text inputs with different inputs for `Player #2` and submit |
Verify: text inputs are light pink when they are blank |
Verify: a new section showing the most recent poetry submission is accurately updated |
Fill out the six text inputs with different inputs for `Player #3` and submit |
Clicking the `Reveal the Poem` button reveals the section with the header "Final Poem" |
Verify: The final poem shown has all 3 submitted lines, in the order submitted |
Verify: The form to submit new lines is hidden |


<!--

Comprehension questions: They are all subjective! Ideally we would see something along the lines of how components are structured (are they nested, siblings, how many layers, etc.)

-->

### Code Review

Area | yes/no
--- | ---
**General** |
Answered comprehension questions |
Small commits with meaningful commit messages |
**Code Requirements** |
Form submissions from `PlayerSubmissionForm` sent data back up to the `Game` component |
Submissions from the `Game` component propagated to the `FinalPoem` component |
Pieces of data sent to `RecentSubmission` are defined, sent, and read in an elegant way |
`propTypes` were defined in all components |

<!-- If there are major problems with the code, it's likely caused by one of the areas covered in "Code Requirements" above here.

"Pieces of data sent to `RecentSubmission` are defined, sent, and read in an elegant way" is intended to ask: Did the student use props? Are they sending in a ridiculous data structure? Do they have to do a bunch of conditionals within the component, rather than just sending in the literal values needed? Are their variable names accurate? This is a "clean code" kind of question.

-->

## Overall Feedback

