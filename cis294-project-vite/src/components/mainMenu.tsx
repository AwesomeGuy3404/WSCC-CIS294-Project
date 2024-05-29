// MainMenu.tsx
// This file was the first component created for my webpage. 
// This file renders a static HTML page welcoming the user and directing them to navigate the website using the Navigation Bar.

// CSS file to style the headers and pictures.
import '../css/mainMenu.css'

// Pictures used for the home page.
import picture1 from '../assets/jpgs/Example.jpg';
import picture2 from '../assets/jpgs/Example.jpg';

// Returns a static HTML page welcoming the user.
function MainMenu() {
  return (
    <>
      {/* Page Headers */}
      <h1 className="title-home h1"><strong>Home</strong></h1>
      <h3 className='greeting-home fs-3 fw-light'><em>Hello, welcome!</em></h3>

      {/* Images */}
      <img src={picture1} alt="Example Picture" className='picture1 rounded' />
      <img src={picture2} alt="Example Picture 2" className='picture2 rounded' />

      {/* Message */}
      <h5 className='h5'>This is the portfolio of "Example". Use the Navigation Bar at the top of the page to navigate this site and its contents.</h5>
    </>
  );
}

export default MainMenu; // Exports function (called in App.tsx).
