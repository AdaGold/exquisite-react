# Exquisite React

## At a Glance
- Pair, [stage 2](https://github.com/Ada-Developers-Academy/pedagogy/blob/master/rule-of-three.md#stage-2) project
- Due before class, **DATE HERE** (no PR)

## Introduction

[Exquisite corpse](https://en.wikipedia.org/wiki/Exquisite_corpse), also known as exquisite cadaver (from the original French term cadavre exquis), is a method by which a collection of words or images is collectively assembled. Each collaborator adds to a composition in sequence, either by following a rule (e.g. "The adjective noun adverb verb the adjective noun." as in "The green duck sweetly sang the dreadful dirge.") or by being allowed to see only the end of what the previous person contributed.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learning Goals

- Practice using events
- Pass custom information to an event handler function
- Dynamically construct components based on data
- Extend code provided

## Objective

Our goal is to create an implementation of an Exquisite corpse game for poetry in React. We will make a single-page app that will allow users to contribute to a poem one line at a time using a form. Each line of poetry is a piece of data that should propagate correctly from component to component. A user who is filling out the form may only see the most recent line of poetry submitted. When the users are finished submitting lines of poetry, they should be able to see the full poem.

You may reference [the live demo of this project](https://adagold.github.io/exquisite-react/).

## Getting Started


### About the CSS


## Requirements

### Wave 0: Establish the Relationships

1. Make a diagram with all of the components, illustrating which components are nested within each other, and making it clear which components are siblings to each other.
1. For each component, list out what data needs to be referenced within it, and what data type each piece of data is. Particularly, think about:
    - If the `PlayerSubmissionForm` component handles a player's submission of poetry, what should that component do with that data?
    - How should the `FinalPoem` component get all of the parts of the poem?
    - What kind of input elements should `PlayerSubmissionForm` use? What does this mean about the `PoemInput` component?
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

## Optional Enhancement: Refactor to a Dynamically-Generated Form

We started this project with hard-coded forms to comply with our format: "The adjective noun adverb verb the adjective noun". But what if we wanted to make this extensible to any format?

Refactor your project so `PlayerSubmissionForm` dynamically generates the poetry input elements. You are free to use the `const` variable `FIELDS` located in the `components/Game.js`. Your `Game` component should be able to access `FIELDS`, iterate over it, or even... pass it into other components.

`FIELDS` is an array that contains both strings and objects. Iterating over this and using elements in this array should have certain conditions to think about, but it shouldn't feel too tricky.

Feel free to use a different data structure other than what `FIELDS` has if you don't like it, but it's what the deployed version uses.
