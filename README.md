# Exquisite React

## At a Glance

- Individual, [stage 2](https://github.com/Ada-Developers-Academy/pedagogy/blob/master/classroom/rule-of-three.md#stage-2) project
- Due before class, **[Enter Date Here]**
- Submit this project with a PR

## Introduction

> Exquisite Corpse is a collaborative poetry game that traces its roots to the Parisian Surrealist Movement. Exquisite Corpse is played by several people, each of whom writes a word on a sheet of paper, folds the paper to conceal it, and passes it on to the next player for [their] contribution.

-- ([Poets.org on how to play Exquisite Corpse](https://www.poets.org/poetsorg/text/play-exquisite-corpse))

[Exquisite corpse](https://en.wikipedia.org/wiki/Exquisite_corpse), also known as exquisite cadaver (from the original French term cadavre exquis), is a method by which a collection of words or images is collectively assembled. Each collaborator adds to a composition in sequence, either by following a rule (e.g. "The adjective noun adverb verb the adjective noun." as in "The green duck sweetly sang the dreadful dirge.") or by being allowed to see only the end of what the previous person contributed.

If you're curious about what the original Exquisite Corpse drawing game looks like, check out [this video](https://www.youtube.com/watch?v=py_xXvJoYcQ).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learning Goals

By the end of this project we will be able to...

- Practice using events
- Pass custom information to an event handler function
- Dynamically construct components based on data
- Extend code provided

## Objective

Our goal is to create an implementation of an Exquisite corpse game for poetry in React. We will make a single-page app that will allow users to contribute to a poem one line at a time using a form. Each line of poetry is a piece of data that should propagate correctly from component to component. A user who is filling out the form may only see the most recent line of poetry submitted. When the users are finished submitting lines of poetry, they should be able to see the full poem.

You may reference [the live demo of this project](https://adagold.github.io/exquisite-react/).

## Getting Started

Besides the `App` component, we've provided the following components and CSS for them:

- `Game`
- `PlayerSubmissionForm`
- `FinalPoem`
- `RecentSubmission`

Each component already has some code in there for rendering. However, everything else is missing: `state`, `props`, any callbacks, event handlers, or helper functions (with the exception of `Game` component). However, not every render function may need to look like that in the end result. In fact, **it is expected that the render functions change** in order to accommodate the requirements (namely the ones about conditional rendering).

After you fork and clone this project, run `npm install` and `npm start`. What do you see? Can you identify what you see and which component it comes from?

### A Note About Styles

We have provided styles for you in `.css` files. Styling is not a major learning goal for this project, so please limit the amount of time you spend on styling.

To ease the use of our styles, the project conforms to a naming methodology/naming convention standard known as [BEM, or Block Element Modifier](http://getbem.com/). Essentially, you can count on the provided styles to conform to the following naming rules:
- There aren't any, or rarely any element/tag selectors or ID selectors, and all styles selectors are on classes. That means there are are a lot more classes to set, but it relies less on assuming a specific HTML structure before understanding how to use it
- Classes are named in [block__element--modifier](http://getbem.com/naming/) format:
  - The first section, `block`, will describe the semantic block that the style applies to
  - The second section, `element` (after two underscores), will describe the specific element within that block that the style applies to
  - The third section `modifier` (after two hyphens), will describe any sort of modifier (ie `enabled`, `success`, `green`) for that block and element that the style applies to

Here's an example:
```css
.new-card-form__header {
  text-align: center;
  ...
}
```

In this case, there is some "block" (section, idea, maybe component) named `new-card-form`, and this style is for the "element" that represents the header by name of `header`. This style makes the header in the new card form `text-align: center;`. Note that this does not dictate what kind of HTML tag this is, or what its parent or children are.

Again, please limit the time you spend on styling, and reach out often and frequently.

### Tests

To help you we have added `propTypes` and tests for each component.  The prop-types should help you identify the props to use in each component, and the tests can be used to verify the components, however there are many ways to implement the solution and your method may not pass all the tests.  

- `RecentSubmission.test.js` - This test suite verifies that `RecentSubmission` renders and displays the text passed through the `submission` prop.
- `PlayerSubmissionForm.test.js` - This suite verifies that the component renders the proper input fields, allows the user to type in them and when the form is submitted the callback prop `sendSubmission` is invoked.
- `FinalPoem.test.js` - this test suite verifies that `FinalPoem` 
  - renders a button with the text "We are finished: Reveal the Poem" when the prop `isSubmitted` is false.
  - calls the callback function when the button is clicked on and the prop `isSubmitted` is false.
  - Displays the lines of the poem when `isSubmitted` prop is true. and the button is hidden. 
- `Game.test.js` - This test suite verifies that the user can enter text in the input fields, add lines to the poem and then reveal the poem.  It selects each item by the placeholder text, and the text in each button.

## Requirements

### Wave 0: Establish the Relationships

1. Make a diagram with all of the components, illustrating which components are nested within each other, and making it clear which components are siblings to each other.
1. For each component, list out what data needs to be referenced within it, and what data type each piece of data is. Particularly, think about:
    - If the `PlayerSubmissionForm` component handles a player's submission of poetry, what should that component do with that data?
    - How should the `FinalPoem` component get all of the parts of the poem?
    - What kind of input elements should `PlayerSubmissionForm` use? (aka checkbox, text, button, submit, etc...)
    - What should the `Game` component represent and be responsible for?
1. For each piece of data in each component, determine if it should be part of that component's `state` or passed in as a `prop`.

The waves are organized in this order:

1. Set up the `PlayerSubmissionForm` component with a hard-coded form and prove that the `Game` component can receive submission data from the form when the form is submitted
1. Set up the `FinalPoem` component so that it shows all of the lines of poetry that the players have previously submitted
1. Work on details that show, hide, or modify different components: showing the most recent submission or conditionally showing the final poem
1. Refactor the hard-coded `PlayerSubmissionForm` so it dynamically generates the form

### Wave 1: Let Players Submit Lines of Poetry

The goal of this wave is to set up the relationship between the `Game` component and the `PlayerSubmissionForm`. The `PlayerSubmissionForm` should render a set of inputs for the given poetry format, and submitting the form should send the form data back up to the `Game` component.

Implement this first iteration of the `PlayerSubmissionForm` with a set of hard-coded inputs: the ones that represent the absolute format "The adjective noun adverb verb the adjective noun" (one for each adjective, noun, adverb, and verb, for six total).

#### User Stories

- As a player, I want to be able to fill out the six text input fields that mimic the poetry format and press a submit button, so that I fill out the line of poetry.
- As a player, I want to be able to see placeholder text in each text input that describes what kind of word I should fill in.
- As a player, I want the `Game` component to have the data of my submission, so that the `Game` component keeps track of all of the submissions.
- As a player who is going after the first player, I want to be able to have a cleared, reset form with no text in the input elements after the first player submitted, so that I can enter in my own submission easily.
- As the third player, I want to see that the header for the submission form is "Player Submission Form for Player #3", so that I know that I am the third player.

#### Hints

- Don't be shy about making all of the pieces of `props` or `state` that you've determined you need!

### Wave 2: Show All of the Submitted Lines of Poetry

The goal of this wave is to establish the relationship between the `Game` component and the `FinalPoem` component. For all of the submissions that the `Game` component is holding, the `FinalPoem` should display them.

#### User Stories

- As players who have submitted one or more lines, I want to see all of the submissions of poetry lines in the section named "Final Poem".
- As a player, I want to see each submission in the final poem section on a different line or paragraph, so that it looks more like a structured poem.

### Wave 3: Conditionally Show, Hide, and Modify Components

The goal of this wave is to add details to show, hide, or modify different components and sections of the app. Namely: there should be a section that shows only the most recent submission, a form/button should be added to the `FinalPoem` component that will finalize the game and show the final poem, and a finalized game should hide the `PlayerSubmissionForm` component.

#### User Stories

1. As a player, I want to see only the most recent submission of poetry in the section "The Most Recent Submission" (`RecentSubmission` component), so that I can be inspired, just like the Dadaists were when they invented the original Exquisite Corpse game.
1. As a player, I only want to see the "The Most Recent Submission" section if there has already been at least one submission.
1. As players playing this game, we want a button to click to finalize our poem and reveal the entire final poem, so that we don't see the previous lines until we are finished.
1. As players playing this game, we want to hide the Player Submission Form after the final poem has been revealed, so that we don't add any more lines after the game is over.
1. As a player, I want the form text inputs to be light pink when they are blank, so I have a visual way of seeing that it's invalid when it's blank.

#### Hints

- Remember, you can have conditionals outside of JSX code
- You'll probably want to make a variable with the JSX code or empty string you want, and then use `{}` (curly brackets) to put it inside of other JSX
- You can actually also do one-line ternaries in JSX...
- Don't be afraid of using conditionals, and making more `props` if needed!
- READ the prop-types as they can be a big hint!

## Optional Enhancement: Refactor to a Dynamically-Generated Form

We started this project with hard-coded forms to comply with our format: "The adjective noun adverb verb the adjective noun". But what if we wanted to make this extensible to any format?

Refactor your project so `PlayerSubmissionForm` dynamically generates the poetry input elements. You are free to use the `const` variable `FIELDS` located in the `components/Game.js`. Your `Game` component should be able to access `FIELDS`, iterate over it, or even... pass it into other components.

`FIELDS` is an array that contains both strings and objects. Iterating over this and using elements in this array should have certain conditions to think about, but it shouldn't feel too tricky.

Feel free to use a different data structure other than what `FIELDS` has if you don't like it, but it's what the deployed version uses.

## What Instructors Are Looking For

Check out the [feedback template](feedback.md) which lists the items instructors will be looking for as they evaluate your project.
