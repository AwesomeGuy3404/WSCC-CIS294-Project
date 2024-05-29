// navBar.tsx
// This file is a Bootstrap component that sits on the top of the webpage and allows users to navigate between the different pages. 
// Whenever a user clicks a button, the NavBar interacts with the router found in App.tsx to render in the correct page 
// and update the address bar.

// Imports React Router element to interact with the router.
// The Link element tells React Router to go navigate to specific page. 
// A Link is included with every button that navigates to the respective page.
// Example: clicking the Biography page will tell React Router to render the contents of the Biography page and update the address bar.
import { Link } from "react-router-dom";

// This function returns a navigation bar that users can click to navigate between different pages.
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            {/* Main button (directs to home page) */}
            <Link to="/"><a className="navbar-brand" href="#">My Portfolio</a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Secondary buttons (directs to respective pages) */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/"><a className="nav-link" href="#">Home</a></Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/biography"><a className="nav-link" href="#">Biography</a></Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/education&career"><a className="nav-link" href="#">Education & Career</a></Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/contact-info"><a className="nav-link" href="#">Contact Information</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar; // Export function to be used in App.tsx.
