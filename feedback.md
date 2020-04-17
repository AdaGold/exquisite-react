# Exquisite React

<!-- Instructors: The checkmarks are already there, so just delete them for any line items that aren't met. -->

## Major Learning Goals/Code Review

<!-- Instructors: Feel free to practice creating specific feedback by referencing a line of code if you'd like. For example, you may say something like "nice custom method in `calculator.rb` line 42." This is optional. -->

<!-- Comprehension questions:

  state: An object that React components have. State holds information that influences the output of render. State is managed within a component (not passed between components, like props).

  relationships: App renders Game within itself. Game renders RecentSubmission, PlayerSubmissionForm, and FinalPoem within itself. Please derive nested/sibling relationships from that :)

 -->

| Criteria | yes/no, and optionally any details/lines of code to reference |
| --- | --- |
| Defines state and describes the relationship between components reasonably in the reflection questions | ✔️?
| Form submissions from `PlayerSubmissionForm` are sent data back up to the `Game` component | ✔️?
| Submissions from the `Game` component propagate to the `FinalPoem` component | ✔️?
| `propTypes` were defined in all components | ✔️?
| Practices git with at least 5 small commits and meaningful commit messages | ✔️?

## Functional Requirements/Manual Testing

| Functional Requirement | yes/no |
| --- | --- |
At the beginning, there is no section showing the most recent poetry submission visible | ✔️?
Manual testing step: Fill out the six text inputs with inputs for `Player #1` and submit | -
Verify: submitting the form clears the line and updates the form header to `Player #2` | ✔️?
Verify: a new section showing the most recent poetry submission is now viewable | ✔️?
Manual testing step: Fill out the six text inputs with different inputs for `Player #2` and submit | -
Verify: text inputs are light pink when they are blank | ✔️?
Verify: a new section showing the most recent poetry submission is accurately updated | ✔️?
Manual testing step: Fill out the six text inputs with different inputs for `Player #3` and submit | -
Manual testing step: Clicking the `Reveal the Poem` button reveals the section with the header "Final Poem" | ✔️?
Verify: The final poem shown has all 3 submitted lines, in the order submitted | ✔️?
Verify: The form to submit new lines is hidden | ✔️?

## Overall Feedback

| Overall Feedback | Criteria | yes/no |
| --- | --- | --- |
| Green (Meets/Exceeds Standards) | 4+ in Code Review && 6+ in Functional Requirements | 
| Yellow (Approaches Standards) | 3+ in Code Review && 5+ in Functional Requirements, or the instructor judges that this project needs special attention | 
| Red (Not at Standard) | 0-2 in Code Review or 0-4 in Functional Reqs, or assignment is breaking/doesn’t run with less than 5 minutes of debugging, or the instructor judges that this project needs special attention | 

<!-- ### Additional Feedback -->

<!-- Instructors, feel free to ignore this section if there's nothing else to add. -->

## Code Style Bonus Awards

<!-- Instructors: Please strike a balance between liberal/stingy with these. These are simply built-in pieces of positive feedback; use this to encourage and push students towards a cleaner code style! -->

Was the code particularly impressive in code style for any of these reasons (or more...?)

| Quality | Yes? |
| --- | --- |
| Perfect Indentation | ✅
| Elegant/Clever | ✅
| Descriptive/Readable | ✅
| Concise | ✅
| Logical/Organized | ✅