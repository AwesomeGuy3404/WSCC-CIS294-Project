// career.tsx
// This file is the most complex component created for this webpage. 
// This page uses an interesting React concept called State to dynamically render objects to the screen. 

// In this example, whenever a user clicks the "Next" button, 
// a different part of the page that details either my High School, College, or Career experience is displayed on the screen.
// Understanding React state is still difficult for me, but nevertheless I am happy with how this page turned out. 

// Another cool feature is that this page displays different pdf documents including my resume, transcripts, and certifications directly to the user.

// React has different functions that can be called anytime built into the library. These are called "hooks."
// useState is one of those "hooks."
// According to LogRocket Blog, "useState is React Hook that allows you to add state to a functional component. 
// It returns an array with two values: the current state and a function to update it. 
// The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called."
import { useState } from 'react';

// CSS file to style the headers, pdf windows, and text.
import '../css/careerInfo.css';

// PDF assests
import Resume from "../assets/pdfs/ExamplePDF.pdf";
import TestoutCertificate from "../assets/pdfs/ExamplePDF.pdf";
import HSTranscript from "../assets/pdfs/ExamplePDF.pdf";
import WallaceStateSTC from "../assets/pdfs/ExamplePDF.pdf";
import CTranscript from "../assets/pdfs/ExamplePDF.pdf";

// This function calculates the current State of the webpage to and returns the correct objects to the screen.
function EducationAndCareerInfo() {

    // State variable to track current content. 
    // Note the array that contains a value (currentContent) and a function to update the content (setCurrentContent).
    const [currentContent, setCurrentContent] = useState("highSchool");

    // Calculates what needs to be displayed on the screen when a certain condition is met (see line 52 for the condition).
    const handleNextContent = () => {

        // Define, calculate, and update the order of cycled content.
        const contentOrder = ["highSchool", "college", "career"];
        const currentIndex = contentOrder.indexOf(currentContent);
        const nextIndex = (currentIndex + 1) % contentOrder.length;
        setCurrentContent(contentOrder[nextIndex]);
    };

    return (
        <>
            {/* Headers */}
            <h1 className="title-career-info h1"><strong>Education & Career</strong></h1>
            <p className="lead fw-light greeting-career"><em>Click the "Next" button below to see information related to my high school, college, and career experiences.</em></p>

            {/* Button to cycle through content. Whenever the button is pushed, the "handleNextContent" function will execute. */}
            <button className='content-button' onClick={handleNextContent}>Next</button>

            {/* Conditional rendering based on current content (Lines 56-86). */}

            {/* High School Content */}
            {currentContent === "highSchool" && (
                <>
                    <h2 className="h2 content-heading"><strong><em>High School</em></strong></h2>
                    <p className="lead content-body">Insert Text Here</p>
                    <h4 className='pdf-title'>High School Transcript:</h4>
                    <iframe className='pdf rounded' src={HSTranscript}></iframe>
                </>
            )}

            {/* College Content */}
            {currentContent === "college" && (
                <>
                    <h2 className="h2 content-heading"><strong><em>College</em></strong></h2>
                    <p className="lead content-body">Insert Text Here</p>
                    <h4 className='pdf-title'>College Transcript:</h4>
                    <iframe className='pdf rounded' src={CTranscript}></iframe>
                    <h4 className='pdf-title'>STC in Information Technology:</h4>
                    <iframe className='pdf rounded' src={WallaceStateSTC}></iframe>
                </>
            )}

            {/* Career Content */}
            {currentContent === "career" && (
                <>
                    <h2 className="h2 content-heading"><strong><em>Career</em></strong></h2>
                    <p className="lead content-body">Insert Text Here</p>
                    <h4 className='pdf-title'>My Resume:</h4>
                    <iframe className='pdf rounded' src={Resume}></iframe>
                    <h4 className='pdf-title'>Certifications Earned:</h4>
                    <iframe className='pdf rounded' src={TestoutCertificate}></iframe>
                </>
            )}
        </>
    );
}

export default EducationAndCareerInfo; // Export function to be used in App.tsx
