# PALOMA

<main image></main>

## Introduction

This is my second Milestone Project, which focuses on mobile first development and also builds upon my previous project by adding in a lot more interactivity into the webpage.

PALOMA is a fictional bar set in Soho, London.

This project was inspired by my friend, who one day plans to open this bar.

Using inspiration from previous projects and lessons I set out to challenge myself and create and create a responsive, interactive, and beautiful website using the 3 languages I am proficient in, HTML5, JavaScript (ES6) and CSS3.

Some outside sources such as JQuery and Bootstrap were implemented for their vast array of tools to help with a multitude of page elements.

## **User Experience**

![Responive Design](https://cae9cbb8-4a5e-4ec7-a3d1-dea4d873da5f.ws-eu01.gitpod.io/mini-browser/workspace/PALOMA/assets/hero-images/Responsive.JPG)


#### User Stories:

# User Goals

* Users of this website will want to find an easy to navigate page, with a consistent colour scheme.

* Users will want a responive website which can be viewed on any screen size.

* Users will want to be presented with a web page which answers all of their questions regarding this new Cocktail Bar.

* Users may want to book a cocktail class using a booking form. They will also want to recieve confirmation of this.

* Users will want a way to help them decide on a drink.

* Users will want to be able to keep up with the company, whether this is an email list, or social medias.

# My website achieves the above goals by;

* The web page has a consistent, industry standard navigation bar, and a colour scheme which is the same on each page.

* The web page has been altered to fit all screen sizes (minus the drink matcher, more on this in testing).

* The web page gives information about the bar location and upcoming offers.

* The web page uses a booking form and a JavaScript function to allow the user to book a day for a cocktail masterclass and they will recievea confirmation email for this.

* The web page uses a complex JavaScript function to match the user to a drink based on their preferences.

* The user can sign up to a rewards program to be kept up-to-date with offers. The footer also holds the social media links for the company.

<hr>

## UXD 

For the design of this website, I used [Figma](https://www.figma.com/file/GE6AOJAJL7A0LS9ZpOiSRD/PALOMA?node-id=0%3A1)
to wireframe my ideas.

#### Colours

I decided to use mostly light and dark contrasting colours for this webite, to give an undergorund, exclusive cocktail bar feeling.

#### Font

* I decided on Reem-Kufi for main headers, and Montserrat for any paragraph content, as these fonts give the feeling of style, and their boldness fits in perfectly with the website's design.

### Layout

The page is laid out to be easily viewed by all. The structure is incredibly recognisable, and can be navigated by all users.

<hr>

## Technologies used

- For this website, I have utilised HTML5, CSS3, Bootstrap, Font Awesome, Google Fonts, and a small amount of JavaScript.

[HTML5](https://en.wikipedia.org/wiki/HTML5)

- This language is used to build the overall body of the page, from text, to page structures.

[CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3)

- CSS3 is used to style the elements on the page. CSS3 is responsible for the colour scheme, and the layout of the page.

[Bootstrap](https://getbootstrap.com/)

- Bootstrap is a powerful tool which gives developers multiple snippets of code to use in their projects, which can then be styled through CSS3.

[Font Awesome](https://fontawesome.com/)

- Font Awesome is a tool used to provide icons which add to the overall aesthetic of the web page.

[Google Fonts](https://fonts.google.com/)

- Google Fonts provides the user with different options for fonts to be used in web pages, further adding to the personalization of each page.

[JavaScript](https://en.wikipedia.org/wiki/JavaScript)

- JavaScript is used to manipulate the logic of the page. I used this extensively for the Drink Matcher page.

[JQuery](https://jquery.com/)

- JQuery is a JavasCript library which allows users to use pre-written code to achieve a JavaScript goal.
<hr>

## Page Features

#### Current Features
 
 * Navbar, used across all pages, set out in an industry standard way, to allow all users to naviagte with ease. This collapses down into a hamburger icon for mobile devices to save on screen space.

 * Footer, this is located at the bottom of every page, this provides the users with inks to the companies social medias.

 * Images, the web page has a hero image on the 3 main pages, and also extensive image gallery on the menu page, these are used to aid the user's experience byt giving them a visua aspect.

 * Drink Matcher, this page lets the user choose their preference of flavour and spirit too mtch them to a cocktail by utilising a JavaScript function.

 * Booking Form, users are able to book a cocktail masterclass, and they will recieve a confirmation emial upon completion.

 * Map, the home page has a map at the bottom of the page to show users the loaction of the bar.

 <hr>


#### Future Features

* I would have liked to have styled the drink matcher quiz a lot more, but due to time restraints, and with my fiance and myself moving house during this project, I was unable to dedicate the necessary time.

* I would have also liked to have used more JavaScript on the menu page, to bring up the drink information, instead of a CSS transition, but just like the above, time was a limiting factor.

<hr>

# Testing


My testing was carried out using HTML, CSS and JavaScript Validators.

Jasmine is possible to use for testing, but my knowledge of this is limited. You can find a small .js file in mt project dedicated to this, however this test is not complete.


## W3C Validator

This validator is used to test your HTML and CSS.

My code passed through both of these tests, on all pages.

The only hiccups were issues with code comments, and a button on the Drink Matcher page being wrapped in an "<a>" tag, but as this was the only way I knew how to prevent the form from restting, I kept this in for a better user experience.

*[W3C Markup Validator](https://validator.w3.org/#validate_by_input)

*[W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)


## JSHint

* I used JSHint for the first time,to check on my JavaScript files.


## Dev Tools

* Google Chrome Dev tools was used constantly throughout the project, to test responsiveness and layout.

This manily revealed issues with padding and margin errors accross all pages.

## User Stories - From friends and fmaily who tested the web page.


* Users of this website will want to find an easy to navigate page, with a consistent colour scheme.
       * "It is easy to navigate around and the links work on all pages"
    

* Users will want a responive website which can be viewed on any screen sizes.
       * " As a mobile user, I found it easy to navigate around the page, and the menu page looks amazing on the small screen"

* Users will want to be presented with a web page which answers all of their questions regarding this new Cocktail Bar.
       * "I found the colours to match the theme perfectly, the contrast in black and white makes this feel proffesional"

* Users may want to book a cocktail class using a booking form. They will also want to recieve confirmation of this.
      * "Using the form was easy and straightforward, and i recieved a confrimtion email with all of my specifications"

* Users will want a way to help them decide on a drink.
      * " The drink matcher was a great idea, as I am always so indecisive. However, the drink matcher didn't look great on smaller screens"

* Users will want to be able to keep up with the company, whether this is an email list, or social medias.
HTML Validator - take out javascript types in scripts for external resources
    * Using the button on the home page, i was able to sign up to rewards, and i recieved a confirmation email straight away"

<hr>

## Deployment

This website was devleoped using GitPod, and is hosted on GitHub in a remote repository.

- To start this project, I had to create a GitHub profile, I then created a new repository using the on-screen instructions. When setting up my repository,
  I utilized the Code Institute template which provides basic boiler text.

- Once my code was written, and pushed to GitHub, I opened up my GitHub profile and navigated to the settings in my repository.

- From the settings, I scrolled down to the GitHub Pages section and selected the _Master Branch_ source.

- With these settings confirmed, the page is now live on GitHub Pages, and free to view by all in a web browser.

- Any users wishing to view this code, or if they would like to use it for inspiration, they can do so on [My GitHub Page](https://github.com/DamSenton/PALOMA)

<hr>

## Credits

#### Content

All content for this website is fictional, and was written by myself for creative and scholastic purposes.

#### Code

All of the code was written by myself, I took inspiration from previosu projects for padding and margin advice.

The JavaScript code was written by myself, with the help from the Slack community and Code Institute Tutors


#### Special Thanks

Special thanks to my family and frineds for helping with testing this website.

Thank you to my fiance for the unlimited morale support during stressful times.

And credit to myself for getting this project over the lines, faults and all.