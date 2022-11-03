# Project 2

** Due: Wed Nov 9 11:59pm (ET) **

## Goal

Provide ( in `public/`) the necessary HTML, CSS, and JS files to create the experience shown in the included images using the skills and best practices taught in class.

- Only the "index.html" and "cats.html" pages are required, the other links must be usable URLs that link to non-existent pages
  - Adding additional pages can net you extra credit, but fulfil the required pages and functionality first

This webpage can be viewed and used by running:
- `npm install` (only required once on any given computer for each project/assignment)
- `node server.js` (starts the server, Ctrl-C to stop running the server)
- Visiting `http://localhost:3000/` in the browser

## Functional Requirements

- Matching the exact text/images of the pages is not required
  - Any replacement text should make sure to demonstrate different line lengths and blocks of different sizes
  - Any replacement Images should be the same sizes
- The same HTML must be used for the main navigational menu, both for the "desktop" horizontal menu and the "mobile" hamburger menu. All adaptive changes in presentation should be done with the same HTML content 
  - Elements can be shown or hidden (such as the hamburger menu icon), but there should not be two different versions of the same content that are in turn shown or hidden. If some content is visible in both adaptive views, the same HTML should be responsible for showing it with only styling differences.
- The logo image is also a link to the "/" page (index.html)
- Activating one of the "Subscribe" buttons (styled to look like links) on the "Famous Cats" page opens a modal window
  - Esc key will close this window
- The form validation is done with JS, not HTML-based
  - The form fields are required
  - The email field must have an "@" in it (not testing for any other email-like trait)
    - Not using type="email"
  - The confirm field must match the email field
  - These fields are tested when their value changes AND when the form attempts to submit
- When validation is passed, the form will submit to "/subscribe"
- When Cancel is pressed the modal closes, regardless of validation

## Responsive/Adaptive Requirements

- Both pages have an Adapative Breakpoint at 44rem
- Both pages are Responsive at sizes other than the Adaptive Breakpoint
  - Grading will review from 360px to 1200px in width at standard text sizes
- Remember to set paddings/margins on elements to maintain some whitespace between text/elements
  - 0.5rem is a good distance for this assignment
- The main navigation menu changes from a horizontal menu in desktop sizes to a click-based hamburger menu at mobile sizes
- The footer navigation menu changes from a horizatal menu in desktop sizes to a vertical menu at mobile sizes
- The Home page panels lose the space between them and around them at mobile sizes
  - There is NOT a double-thick line between them
- The Home page panels have the text around the images at mobile size, but not at desktop size
  - Yes, this is done with float, using float the way it is meant to be used
- 

## Accessibility Requirements

- The pages contain a "skiplink" letting you skip to the main content

- Reasonably resizing text/zooming does not cause your display to become difficult to use

- All forms, menus, buttons, and links must be usable with keyboard as well as mouse
  - The hamburger icon can be reached via keyboard, and is activated with Space/Enter to open the menu
  - Tabbing on the hamburger menu is closed does NOT select (invisibly) one of the menu links. Instead it selects the next visible link on the page

- No information should be conveyed through color differences only

- All form fields should be associated with a `<label>` element that contains useful text
  - And only the label of the element, not additional text like "required" or "This field must..."

- Any form fields that are required should be visibly and textually marked as required

- All images will have descriptive `alt` attributes
  - These alt attributes should describe what the picture is
  - Logo images should be either loaded as a background image or use alt=""

- Any icons are not required to understand and use the page with a screen reader
  - This means there must be aria-label text or visible associated text to explain what the icon is/does

## Appearance Notes

- The colors used on the page are:
  - papayawhip 
  - burlywood
  - #eee or #eeeeee
  - lime
  - lightcoral
  - black (with 0.7 opacity when used as a backdrop)
  - red
  - blue
  - white
- image dimensions:
  - 100x100px (logo)
  - 200x200px (panels and cards)
  - 125x125px (floating in panels)
- line heights:
  - 1.2 (default)
  - 1.4
  - 1.6
- padding/gaps/margins:
  - 0
  - 0.5rem
  - 1rem
  - 2rem
- font-sizes
  - 1rem (default)
  - 1.2 rem (form buttons)

## Demonstrated Skills Requirements

These are skills that I/TA(s) must be able to confirm you have an understanding of based only on seeing you use the skills in the HTML/CSS
- Semantic HTML
- Semantic Class names
- CSS Grid
- CSS Flexbox
- 12 column grid layout
- A non-static position property
- Responsive HTML
- Adaptive HTML
- HTML Forms
- JS-based Form validation and reporting
- A dialog element-based modal window
- A hamburger menu using JS

## Extra Credit

Extra credit points should be worked on only after fulfilling all the other requirements, because the other requirements are more points
- Transitions/animations on state/visibility
  - Remember to include media queries to check prefers-reduced-motion
- Create any additional pages that are linked to on this page and provide content that demonstrates other skills
- Extra credit is based on these criteria:
  - Are you demonstrating skills learned from class
  - Do these demonstrations show sufficiently complex understanding
  - Do these demonstrations provide benefit to the User Experience (UX)

## Additional Requirements
- Follow the best practices from the course
- Do not use HTML-based form validation (including type="email", use type="text" instead)
- Do not use float unless wrapping text around an image
- Do not use tables or table-layouts unless showing a table of data
- Do not use iframes or otherwise load external content except as explicitly allowed/directed by this README
- I/TA(s) must be able to examine and evaluate your understanding of the course lessons
  - Meaning: We have to be able to look at your HTML/CSS and be able to tell if you have learned the lessons based one what we read
- Do not use any CSS preprocessor (SASS/Less/etc)
- Do not use external CSS
  - Exception: You may use icons from css.gg by copying the CSS snippet(s) into your own css file
    - You MUST include a comment in your CSS saying "below CSS adapted from https://css.gg under the MIT License"
    - You MAY modify/adapt/rename the CSS from css.gg.  The comment will still apply
- Any images must be ones you personally own, be from placekitten.com, or be from `http://unsplash.com`  
  - If you are linking directly to outside images, that is fine
  - If you include any images in your repo, you must include a `images.txt` file in your repo (at the same level as package.json, not in `public/`) and list the url of each image you downloaded along with the url of the license allowing you to use those images
  - For any images that you personally own and used, list (in `images.txt`) the filename of that image as you have it in this project, and list your name as the owner.
  - Do NOT download and use random images from the internet/web.  Only use images from the listed sites (or you own) and that you have permission to use

## Submission Instructions

* start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'project2' (`git checkout -b project2`)
* Add the necessary files to have the required features
  - running `npm install` will create a `package-lock.json` file and a `node_modules` directory.  These should NOT be added to your commit.
* add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)


