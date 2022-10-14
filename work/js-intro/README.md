# Assignment - JS Intro

**Due: Wed Oct 19, 11:59pm ET** 

# Goal

You will create a webpage that has:
- a horizontal navigation menu with one option
- at least 3 UI cards 
- a distinct visual header and footer

When you click on a menu item, a dropdown menu of links will open
- When you click on the menu item again, the dropdown will close

## Dropdown Menu Requirements

- The various links in your menu should link to urls that could exist (not "#" but do not have to be working links
- The dropdown should NOT use :hover/:focus-within, it should only happen on a click for this assignment
  - That click should be doable with keyboard navigation! (Tab to the menu option, Enter to click)
  - Hint: 
    - Toggle a class on the element that you were looking at :hover/:focus-within on when the button is clicked
    - Have your CSS apply the same changes you did on :hover/:focus-within, but only when that extra class is present
    - Make sure to use a class name that is descriptive and semantic, such as "open"
- The menu HTML can be (likely should be) identical to what we use before, the difference is in how we are opening/closing the menu
- The menu can use a transition/animation to open/close, but it is not required

## Common Questions:
- There are no mobile requirements for this assignment, you are welcome to code a mobile-friendly version anyway
- Any images must have good alt attribute values

## Additional Requirements
- Do not use var
- Use let and const as described in class
- Load your JS as described in class
- Use meaningful and helpful variable names as described in class
- Use consistent indentation and helpful whitespace to make your JS, HTML, and CSS easy to read
- Use semicolons appropriately 
- Add event listener(s) as described in class
- Do not use float
- Do not use tables or table-layouts
- Follow the best practices shared to date in this course

## Submission Instructions

* start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'js-intro' (`git checkout -b js-intro`)
* add the necessary files to have the required features
* add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

