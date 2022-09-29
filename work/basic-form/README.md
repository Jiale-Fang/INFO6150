# Assignment - Basic Form

**Due: Wed Oct 5, 11:59pm ET** 

# Goal

You will create a webpage that contains a registration form as described below.
- This page will be usable with the webserver described below
- This page and the form on the page will be styled as described below

## General Requirements

- You will create a webpage (`index.html`) in the `public/` directory found in this directory
- This webpage can be viewed and used by running:
  - `npm install` (only required once on any given computer)
  - `node server.js` (starts the server, Ctrl-C to exit)
  - Visiting `http://localhost:3000/` in the browser
- The page you create will use semantic HTML and semantic CSS
- Follow the best practices described in this course

## Page Requirements

- The page will have a visually distinct header
  - an `<h1>` header text is required, logo image and/or menu are optional
- The page will have a visually distinct footer
  - A link to a "privacy policy" is required
    - The link does not need to link to an actual page
    - The styling and structure of the footer is up to you
- The main content of the page (including the form) is inside a `<main>` element

## Form Requirements

- The form will submit to `/submit` using POST
  - This server will show the data that is sent so you can confirm it works
    - Do not worry about styling the page of results
- The form will collect the user's name (as field "name")
- The form will collect the users email (as field "email")
- The form will have checkbox for "Do you want us to send you annoying emails?" (as field "annoy_me")
  - The checkbox will default to being checked when the page is loaded
- The form will have a drop down offering the options of "Silver Tier", "Gold Tier", or "Platinum Tier" (the data sent is "1", "2", or "3" respectively, as field name "tier")
  - The form will default to having none of these selected, and instead an option with an empty value and the option of "Please select" will be selected by default
- The form will have a submit button with the text "Register"

The name, email, and dropdown fields are required.  The form should visually indicate the fields are required before any fields are filled in, in a manner that provides good a11y

## Styling Requirements 

- The page will be responsive and adaptive, with a breakpoint of your choice that works well with the content
- The "desktop" version will show a two-column layout for the form
  - You decide how best to show the checkbox/dropdown and their labels, as long as it strives to be clear to the user
- The "mobile" version will have a one-column layout for the form
  - You decide how best to show the checkbox/dropdown and their labels, as long as it strives to be clear to the user

## Accessibility Requirements
- The form can be navigated and used with keyboard (using tab, typing, and space) or mouse
- Required fields are labeled as such in a way that do not require color-sightedness
- The page should have a reasonable layout for a range of widths, from 360px to 1000px (with normal text-size)

## Notes
- You decide if you want to use input elements inside label elements or adjacent to label elements
- You decide how to construct your form HTML, as long as it meets the other requirements
- You can have additional text in/around the form to make it more "realistic" looking, your choice
- You can create any semantic HTML for the page subject to the rest of the requirements

## Additional Requirements
- Every input element should have a functional label with meaningful text
  - Hint: Easy test is to click the label text - it should focus/activate the input
- Do not use any Javascript (JS) (soon!)
- Do not use float
- Do not use tables or table-layouts
- Do not use positioning to manipulate the layout of form elements
- Do not use transforms, transitions, animations, or other effects not yet covered in class. (soon!)
- Follow the best practices shared to date in this course

## Submission Instructions

* start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'basic-form' (`git checkout -b basic-form`)
* add the necessary files to have the required features
  - running `npm install` will create a `package-lock.json` file and a `node_modules` directory.  These should NOT be added to your commit.
* add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

