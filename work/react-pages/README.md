# React Pages Assignment

** Due Wed Nov 30 11:59pm ET **

## Submission Instructions

* start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'react-pages' (`git checkout -b react-pages`)
* add the necessary files in this directory to have the required features
* add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

## Goal

Create a react project that:
- Is a Single Page Application
- Switches between visual "pages"
  - Without performing extra page loads
- Has a navigation menu that allows the switching of pages
- Has a header/footer that are shared between all pages
- The header, footer, and main content are all different components
  - These components can call additional components

## Setup Requirements

- Create a react project named "pages" using create-react-app inside this directory
- Modify the files in the src/ directory inside pages/ to meet the requirements
- For css, you can add/modify as many css files as you want in /src, including src/index.css that is also applied to the output.
- Remember to meet the initial changes required in class:
  - change your App.js to App.jsx (requires a server restart)
  - change/replace the default css className(s) to be kebab-case

## Functional Requirements

- Your app should show at least 3 different "pages"
  - All pages show the same header and footer
  - Each page has some navigation that allows you to to the other "pages"
  - One "page" will show mostly text content (text of your choice)
  - One "page" will show a set of cards (content of your choice)
    - At least one card should include a link that leads to a different "page"
      - The other cards do not need to have links
  - One "page" should have "panels" (Text and images side-by-side)
- There should be Header and Footer components
- There should be at least one Component for each of the "pages"
  - Those components may use additional Components if you wish

## Visual Requirements

The visual requirements are minimal, but you are encouraged to experiment with using CSS in React so you are prepared for your final project

- The header and footer should be visually distinct from the main content
- Each "page" must be easily recognized 
- Common UI Patterns (such as Cards) must be recognizable as such
  - The Cards should be arranged on a 12-column grid

## Accessibility Requirements

- All links and navigation must be usable by both mouse and keyboard
- All images should have useful alt attributes (INCLUDING logos)
- You should use Semantic HTML and other best practices from class

## Adaptive/Responsive Requirements

- The app should be generally responsive to viewport width changes between 360px and 1000px at standard font-sizes
- The app should have at least one adaptive breakpoint at 44rem
  - The Cards (at least) should change their span in the 12 column grid

## Restrictions

- Do not use table, CSS table-cell, floats, or other related concepts for layout of the page structure (floats for text around images is fine)
- Do not use outside JS or CSS libraries outside of what is installed by create-react-app
  - Exception: CSS from css.gg can be copied into your CSS, but you must add a comment indicating where the CSS came from and under what license.  Make sure any copied/adapted CSS is distinct from CSS that you fully create.
- Follow the methods and best practices used in class or described in this README

