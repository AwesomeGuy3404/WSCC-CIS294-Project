**READ ME FOR DOCUMENTATION**

_Portfolio Webpage Project for Wallace State Community College, CIS 294.
Created by AwesomeGuy3404._

Hello, this is my project submission for Wallace State Community College CIS 294. I decided to make a basic portfolio webpage detailing a biography, experience, and contact information. 
Implemented in this webpage are some navigation tools and other unique and cool features that are included in React.js and the React Bootstrap plugin.
I decided to do this project using React and JavaScript/TypeScript to learn more about front-end and webpage development. This is actually going to be one of my responsibilities at my current job going forward, so this project has helped me hone in my skills relatively quickly.

As I became more comfortable using React, the components and functionality of my webpage became more complex. Some pages/components have more functionality than others due the time when I developed them. The _File Organization_ section below will have more details about each file used/modified for the project.

**_Outside Sources:_**
This project uses code, packages, and assets from outside sources. Outside sources are listed below:
- This project uses the React.js library: react.dev/.
- This project uses React Router for page navigation and routing: reactrouter.com/.
- This project uses the Node Package Manager (npm) to build, compile, and run the webpage: www.npmjs.com
- Some Bootstrap component features (accordions, carousels, etc.) are referenced by the Boostrap documentation: getbootstrap.com/docs/5.3/.
- All SVG assets (used in the browser thumbnails and for dropdown buttons) are outsourced from www.svgrepo.com. The licenses for these files can be found here: www.svgrepo.com/page/licensing/.

**_Prerequisites:_**
- This application assumes the user knows how to navigate the Internet, command line, and other OS embedded tools.
- The user will have to install command line tools that may not have a GUI included such as git and NPM.
- If the user does not have the proper knowledge on these topics, it is advised to research the topics before continuing.

**_Setup Steps:_**
1. Make sure git is installed/configured on your system. I used git to keep track of version control changes and GitHub to host my code. When git is configured on your system, run in the command line of your OS "git clone https://github.com/AwesomeGuy3404/CIS294.git". This will pull all of the code onto your computer.
2. Make sure Node Package Manager (NPM) is installed on your computer. You can find steps here to do so: https://www.npmjs.com/package/npm
3. Find the CIS294 folder and cd/move into the cis294-project-vite folder.
4. In the command line, run "npm install" to install all dependencies needed, then run "npm run build" to build and compile the project.
5. In the command line, run "npm run dev" to start the webpage.
6. Open a browser, type in "localhost:5173" in the address bar, and click Enter.
7. When finished navigating the webpage, close the browser window and and press Ctl-C or exit the command line to stop the webpage.

**_File Organization and Features:_**
This project has many different files and folders. While most files/folders are for dependencies and file maintence (the dist and node_modules folders, .gitignore, .json files), the other files/folders include source code and assets used in the project. Each file described below is organized by directory structure from outside to inside.

  _/CIS294/cis294-project-vite:_
  - index.html contains the header for the webpage and scripts for the Bootstrap plugins.
  - README.md is this README file.

  _/CIS294/cis294-project-vite/public:_
  - letter-b-svgrepo-com.svg is the browser tab thumbnail for the webpage. 

  _/CIS294/cis294-project-vite/src:_
  - **main.tsx** is the base file for the webpage. All this file does is tell the DOM to render the page and call the App.tsx file.
  - **index.css** is the CSS file for main.tsx and all pages refenced by that file.
  - **App.tsx** contains the layout of the webpage and sets the proper routing and component configuration.z
  - **App.css** is the CSS file for App.tsx and all pages referenced by that file.

  _/CIS294/cis294-project-vite/src/assets/jpgs:_
  - All files referenced here are photos of me that are used in the Home and Biography pages. These are my own photos taken from my phone or another personal camera.
  - This repository is private and I wanted to showcase the implemented functionality, which is why these files are here. These documents would not be available in a public repository.

  _/CIS294/cis294-project-vite/src/assets/pdfs:_
  - All files referenced here are my personal documents. They are in here to showcase my skills, talents, and abilities. Files include my high school and college transcripts, resume, and any certifications I have earned.
  - This repository is private and I wanted to showcase the implemented functionality, which is why these files are here. These documents would not be available in a public repository.

  _/CIS294/cis294-project-vite/src/assets/svgs:_
  - All files here are SVG logos used for the Dropdown buttons on the Contact Information page. As mentioned in the _Outside Sources_ section, these files are from SVG Repo and any license information can be found there.

  _/CIS294/cis294-project-vite/src/components:_
  - **mainMenu.tsx** was the first component created for my webpage. This file renders a static HTML page welcoming the user and directing them to navigate the website using the Navigation Bar.
  - **navBar.tsx** is a Bootstrap component that sits on the top of the webpage and allows users to navigate between the different pages. Whenever a user clicks a button, the NavBar interacts with the router found in App.tsx to render in the correct page and update the address bar.
  - **personalBackground.tsx** is the Biography component of the webpage. This component is similar to mainMenu.tsx in that the page is mostly static. There is a cool feature, though. The picture above the biography is actually a picture carousel! This carousel will cycle between three pictures automatically or manually! To cycle between the pictures manually, move the cursor to either to the left or right whitespace and left-click.This Bootstrap carousel component was added to make the page feel more dynamic without sacrificing the readability of the text.
  - **career.tsx** is the most complex component created for this webpage. This page uses an interesting React concept called _State_ to dynamically render objects to the screen. In this example, whenever a user clicks the "Next" button, a different part of the page that details either my High School, College, or Career experience is displayed on the screen. Understanding React state is still difficult for me, but nevertheless I am happy with how this page turned out. Another cool feature is that this page displays different pdf documents including my resume, transcripts, and certifications directly to the user.
  - **contactInformation.tsx** is another complex component that uses React interfaces (think classes in C++ or Java), Props (used to define the type of props that a component expects to receive), and a Bootstrap component called a Dropdown to render dropdown buttons to the screen. When a dropdown button is clicked, a user can check out the content underneath the dropdown. Some dropdowns, have plain text that show information like my email, phone number, etc. Others have direct web links to pages like my social medias! In my opinion, this was the most fun page to develop due to my social media pages being linked to the buttons.

_/CIS294/cis294-project-vite/src/css:_
  - All of the CSS files in this folder are mapped to the TypeScript file that matches its name. Custom CSS classes are defined here and only used in the TypeScript file that shares the same name as the CSS file.

**_Conclusion:_**
This was a great experience getting out of my comfort zone and going full hands-on with React, JavaScript/TypeScript, HTML, and CSS. It was very tough at times to understand what I was doing, but I kept working, learned more, and had a great time doing it. I hope you enjoy this project!
