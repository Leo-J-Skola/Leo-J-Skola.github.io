# My Portfolio Website
This is my portfolio website and i made it using HTML, CSS, and Javascript. Its a responsive layout that is one page but acts like it has multiple pages. Its using transition animations and javascript. I did not use any react or node.js

## How it works
My site has a profile, about, projects, and contact pages that contains everything relevant within their own page
Im using CDN as a way to use icons instead of SVG and the need of image files stored locally
Navigation buttons in the nav bar use "data-target" attributes to switch between the pages
When you switch pages it uses a slide animation (by changing "transform: translate") and it prevents you from switching page while it is still animating
On mobile ("max-width: 600px") i disabled the page switching animation

## Javascript functions
Buttons in the navbar switch between pages by targeting the .page ids
The project cards use "data-link" to open the project in a new tab when clicked
Im using "mailto:" inside the contact form to send the inputs of subject and message to the users email service (like outlook). It will automatically open when submitting. It also checks if both fields are filled in before you can send, otherwise it alerts the user

## Responsiveness / Mobile
I used a few media queries to fix things like animation issues and just showing nothing if the screen is too small. My default media query is moving a lot of different elements to fit a smaller screen because the desktop version of my portfolio container is not fullscreen, and acts as rows instead of columns
