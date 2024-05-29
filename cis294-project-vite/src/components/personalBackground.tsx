// personalBackground.tsx
// This file is the Biography component of the webpage. This component is similar to mainMenu.tsx in that the page is mostly static. 
// There is a cool feature, though. The picture above the biography is actually a picture carousel! 
// This carousel will cycle between three pictures automatically or manually! 
// To cycle between the pictures manually, move the cursor to either to the left or right whitespace and left-click.
// This Bootstrap carousel component was added to make the page feel more dynamic without sacrificing the readability of the text.

// Pictures for the Boostrap carousel component.
import picture1 from '../assets/jpgs/Example.jpg';
import picture2 from '../assets/jpgs/Example.jpg';
import picture3 from '../assets/jpgs/Example.jpg';

// CSS file to style the headers, text, and pictures.
import '../css/personalBackground.css'

function PersonalInfo() {
    return (
        <>
            {/* Headers */}
            <h1 className='title-personal-background h1'><strong>Biography</strong></h1>
            <h3 className='greeting-personal-background fs-3 fw-light'><em>About Me</em></h3>

            {/* Carousel of Pictures */}
            <div id="personalBackgroundCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={picture1} alt="Example Picture" className='personal-background-photo1 rounded' />
                    </div>
                    <div className="carousel-item">
                        <img src={picture2} alt="Example Picture" className='personal-background-photo2 rounded' />
                    </div>
                    <div className="carousel-item">
                        <img src={picture3} alt="Example Picture" className='personal-background-photo3 rounded' />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#personalBackgroundCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#personalBackgroundCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Biography Information */}
            <h3 className='full-name text-start'>
                <strong>Name: </strong>
                <small className='text-muted'>Example Name</small>
            </h3>
            <h3 className='birthday text-start'>
                <strong>Birthday:</strong> <small className='text-muted'>January 1, 1970</small>
            </h3>
            <h3 className='current-age text-start'>
                <strong>Current Age:</strong> <small className='text-muted'>Insert Text Here</small>
            </h3>
            <h3 className='hometown text-start'>
                <strong>Hometown:</strong> <small className='text-muted'>Los Angeles, California</small>
            </h3>
            <h3 className='hobbies text-start'>
                <strong>Hobbies:</strong> <small className='text-muted'>Insert Text Here</small>
            </h3>
            <h3 className='aspirations text-start'>
                <strong>Aspirations:</strong> <small className='text-muted'>Insert Text Here</small>
            </h3>

        </>
    )
}

export default PersonalInfo; // Export function to be used in App.tsx.