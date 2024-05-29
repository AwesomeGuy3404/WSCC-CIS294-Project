// App.tsx
// This file contains the layout of the webpage and sets the proper routing and component configuration.

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Routing features from React Router.
import './App.css'; // CSS file for this file.

// Imported components from respective files.
import MainMenu from './components/mainMenu.tsx';
import PersonalInfo from './components/personalBackground.tsx';
import CareerInfo from './components/career.tsx';
import ContactInformation from './components/contactInformation.tsx';
import Navbar from './components/navBar.tsx';

// This function renders the Navigation bar and the different components depending on the address of the webpage.
function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Displays Navbar */}
        <Routes> {/* Define routes and link components to the routes. */}
          <Route path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/education&career" element={<Career />} />
          <Route path="/contact-info" element={<ContactInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

// Displays the Home page.
const Home = () => (
  <>
    {/* Displays the MainMenu component from ./components/mainMenu.tsx.*/}
    <MainMenu />
  </>
);

// Displays the Biography page.
const Biography = () => (
  <>
    {/* Displays the PersonalInfo component from ./components/personalBackground.tsx. */}
    <PersonalInfo />
  </>
);

// Displays the Career page.
const Career = () => (
  <>
    {/* Displays the CareerInfo page from ./components/career.tsx */}
    <CareerInfo />
  </>
);

// Displays the ContactInfo page.
const ContactInfo = () => (
  <>
    {/* Displays the ContactInformation page from ./components/contactInformation.tsx */}
    <ContactInformation />
  </>
);

export default App; // Exports App function to be used in other files (This function is called in main.tsx.)
