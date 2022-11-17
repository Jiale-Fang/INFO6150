# Final Project

** Due Sun, Dec 11 11:59pm ET **

## Submission Instructions

* start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'final' (`git checkout -b final`)
* Create all necessary files for your project here
* add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself as reviewer(s)

Hint: Because we've already covered most of the content of this project, the scoring is heavily impacted by attention to detail.  Be sure that I can definitively say that you understand the concepts you are using.  A minimal implementation can leave that unclear.  Use this project as a piece to demonstrate not only to me but also to future employers rather than trying to do the minimum required effort.

## Goal

- Create a React-based Single Page Application (SPA) using create-react-app
- This web app will be about a topic of your choice
  - This can be informational, a game, whatever, your choice
- This web app MUST appear "complete"
  - No fake screens/views/pages
  - No lorem ipsum-like text
  - Appropriately complete visuals
- This web app will have certain required and a selection of optional features (see below)
- This web app will demonstrate your your understanding of the best practices and concepts taught in class
- The web app will be tested by running:
  - `npm install` (once per project)
  - `npm run build`
  - `npx -s serve build`
  - Be sure to run this process to test your application! An improperly written app may work with the dev server from `npm start` and NOT with the above flow!

## Fully Required Features

Your web app MUST feature all of the below, in addition to featuring SOME of the "Partially Required Features"

### Additional Submission Requirements

- Do NOT submit the `build/` directory as part of your commit and PR
  - The project will default to correctly excluding the `build/` directory because create-react-app creates a `.gitignore` file, so just don't break that default behavior

### Required Functionality
Your web app MUST contain and demonstrate these features/abilities/style of writing

- Multiple "pages" for the SPA that replace most/all of the main content
  - Navigation and branding can remain between pages, your choice
  - Your app must consist of at least 3 "pages", but I expect most projects will have more pages than 3 in order to demonstrate all features
- A navigation that allows the user to move from one "page" to another in the SPA
  - A user never has to use the browser "Back" button to use your app
  - A user never has to reload/refresh the page to use your app
- At least one form with some sort of validation that conditionally appears
  - All forms that have input limitations must have validation, there just be at least one such form
- A `<title>` that describes your application

### Required Maintainability

- Your CSS classnames must be semantically descriptive
- Your CSS classnames should be kebab-case or BEM-style
- Your `.css` is done following the practices of class and not using CSS Modules, styled-components, or other styles
  - Not because those other practices are bad, but in order to see that you have learned the general lessons from class
- Your CSS must be in more than one file
- Your `.css` files must be organized to make it easy to find the proper file for styling a given element
- Your `.css` within a file must be organized to make it easier to find/modify the rules and properties for a given element
- Your CSS targets classes unless setting app-wide defaults for elements or targeting specifically unique elements (ex: a skiplink or `#root`)
- Your Components are all `.jsx` files
- Your Components are all in files named for the Component
- Any JS files that are not using JSX are `.js` files
- All `.jsx` and `.css` files are consistently indented
- While the app is tested in Chrome for grading, you must not use CSS/JS features that are not supported in all modern major browsers

### Required Legalities

- Outside images or CSS MUST be in your repository, not linked from outside
- Any images that you use MUST be listed in `images.txt` saying where the image is from and what license allows you to use it
  - Only images from `http://unsplash.com`, `http://placekitten.com`, or images you have the rights to are permitted
    - Placekitten images MUST only be used if appropriate to your topic
- Any outside code (only css.gg is permitted as outside code for this project!) MUST be clearly marked with where it came from and what license allows you to use it

### Required Visuals

- You MUST have an identifiable color palette for your site that goes well together
- Different areas of the "pages" of your SPA MUST appear visually distinct and have whitespace and boundaries that are sufficient and helpful for the user
- The app must appear to be "complete"
  - No placeholder text
  - No placeholder images
  - No links to non-existent content
  - Content the user would expect is present

### Required Responsive/Adaptive Behavior

Your web app MUST demonstrate these responsive/adaptive behaviors
- General Responsive behavior that allows the page to be readable and clear at any viewport sizes in between adaptive breakpoints (between 360px and 1200px widths at standard font size)
- At least one Adaptive breakpoint 

### Required Accessibility

Your web app MUST demonstrate these accessibility features

- You must use Semantic HTML when there is a clearly appropriate semantic HTML element for the purpose
- You must use landmark HTML elements where appropriate
  - Ex: `<header>`, `<footer>`, `<main>`
  - `<article>` and `<section>` have subtle semantics and their use is not required for this project but they are recommended when you are confident you are using them properly
- Any heading elements (`<h1>`, `<h2>`, etc) must be properly used, with no levels in between being skipped
- ALL foreground  images must have a useful and accurate `alt` attribute
  - For this project, that includes any "logo" images
- Any image in the background MUST NOT display relevant information to the user
- All font sizes must be in rem units
- Your pages must remain readable/usable when zoomed in up to 200%
- All controls and form fields must be accessible/usable via both keyboard and mouse
  - The skiplink need only be usable by keyboard
- You must have a skiplink that works when the app is loaded
  - Because we are not requiring deeplinking, this link need not work on other "pages"
- You must pass WCAG contrast requirements for AA level
- All form fields must have an appropriate `<label>` element properly associated with the data
- Any controls must have an accessible text description
  - Ex: Button text, an associated `<label>` element, or an `aria-label` attribute
- You do not use color as the only indicator for information to the user
- Nothing automatically rotates/advances
- Any animation or transition CSS MUST be in a media query that blocks the motion for users that have `prefers-reduced-motion`

## Partially Required Features

You must implement at least 5 of these features following the practices from class:

- Drop down navigation menu
- A "hamburger menu"
- Accordions or Tabs 
- Theme selection (switching between a light or a dark theme) that then applies to all "pages" in the SPA
  - The option to change theme can be on all pages or in some "Settings" page, your choice
- Cards or Panels that include an image and text grouped together visually
  - This option must have sufficient styling to be noteworthy
- A Gallery of images
- A "complex" form interaction (Ex: Specific Fields that appear/show or use a different input type based on criteria)
- A Modal form that alters some data shown in the app

Any of these options implemented using techniques NOT based on class will not count towards the requirement

## Extra Credit

Extra credit points should be worked on only after fulfilling all the other requirements, because the other requirements are worth more points than the extra credit is

- You can earn extra credit by including more partially required features than required
- You can earn extra credit by having more UI or UX "complexity" than required
  - Basically, if the app involves additional effort THAT USES SKILLS FROM CLASS to IMPROVE UX, it can earn extra credit
- Extra credit is based on these criteria:
  - Are you demonstrating skills learned from class?
  - Do these demonstrations show sufficiently complex understanding?
  - Do these demonstrations provide benefit to the User Experience (UX)?

## Additional Requirements
- Follow the best practices from the course
- Do not use HTML-based form validation (including type="email", use type="text" instead)
- Do not use float unless wrapping text around an image
- Do not use tables or table-layouts unless showing a table of data
- Do not use iframes or otherwise load external content except as explicitly allowed/directed by this README
- I/TA(s) must be able to examine and evaluate your understanding of the course lessons
  - Meaning: We have to be able to look at your HTML/CSS and be able to tell if you have  learned the lessons based one what we read
- Do not use any CSS preprocessor (SASS/Less/etc)
- Do not use external CSS
  - Exception: You MAY link to outside webfonts 
  - Exception: You MAY use icons from css.gg by copying the CSS snippet(s) into your own css file
    - You MUST include a comment in your CSS saying "below CSS adapted from https://css.gg under the MIT License"
    - You MAY modify/adapt/rename the CSS from css.gg.  The comment will still apply
- Any images must be ones you personally own, be from placekitten.com, or be from `http://unsplash.com`  
  - If you include any images in your repo, you must include a `images.txt` file in your repo (at the same level as package.json, not in `public/`) and list the url of each image you downloaded along with the url of the license allowing you to use those images
  - For any images that you personally own and used, list (in `images.txt`) the filename of that image as you have it in this project, and list your name as the owner.
  - Do NOT download and use random images from the internet/web.  Only use images from the listed sites (or you own) and that you have permission to use
- Do not use any additional JS libraries or external JS
  - NO react-router, NO libraries of components, etc
  - Such libraries are not bad, but this project is to demonstrate YOUR skills
- Do not use alert(), prompt(), or other blocking JS that wasn't introduced in class
- Do not use redirects
- Do not use cookies, localStorage, sessionStorage, or other client-side storage.  Store any data in Component state for this project.
- Do not modify the DOM in any way outside of using React
- Do not read the DOM outside of using the event target to capture values from form fields
