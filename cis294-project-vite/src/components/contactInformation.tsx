// contactInformation.tsx
// This is another complex component that uses React interfaces (think classes in C++ or Java), 
// Props (used to define the type of props that a component expects to receive), 
// and a Bootstrap component called a Dropdown to render dropdown buttons to the screen. 

// When a dropdown button is clicked, a user can check out the content underneath the dropdown. 
// Some dropdowns, have plain text that show information like my email, phone number, etc. 
// Others have direct web links to pages like my social medias! 

// In my opinion, this was the most fun page to develop due to my social media pages being linked to the buttons.

// CSS file to style the headers and buttons.
import '../css/contactInfo.css';

// The SVG files used for all the buttons. These files were found at www.svgrepo.com. View the README for more information.
import instagramPhoto from '../assets/svgs/instagram-1-svgrepo-com.svg';
import facebookPhoto from '../assets/svgs/facebook-svgrepo-com.svg';
import discordPhoto from '../assets/svgs/discord-v2-svgrepo-com.svg';
import githubPhoto from '../assets/svgs/github-svgrepo-com.svg';
import phoneNumberPhoto from '../assets/svgs/phone-rounded-svgrepo-com.svg';
import emailPhoto from '../assets/svgs/gmail-svgrepo-com.svg';
import streetAddressPhoto from '../assets/svgs/address-svgrepo-com.svg';

// Interface for information for each contact. Similar to a class in C++ or Java.
interface Contact {
    icon: string;
    title: string;
    subtitle: string[];
    link: string;
}

// Interface Prop. Interface props are used to define the type of props that a component expects to receive. 
interface ContactDropdownProps {
    contact: Contact;
}

// Function that renders the button and dropdown for each social media page (Called on line 79*********** ).
// The function declaration takes in a contact object and the ContactDropDownProps interface ensures type safety.
function ContactDropdown({ contact }: ContactDropdownProps) {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle dropdown-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={contact.icon} className='logo-dropdown' /> {contact.title}
            </button>
            <ul className="dropdown-menu">
                {contact.subtitle.map((item: string, index: number) => (
                    <li key={index}>

                        {/* Conditonal rendering. If a contact has a link included (not an empty string), embed a hyperlink in the dropdown text.
                        If the contact does not have a link (empty string), do not embed a hyperlink in the dropdown text. */}
                        {contact.link !== "" ? (
                            <a className="dropdown-item" target='_blank' rel='noopener noreferrer' href={contact.link}>
                                <strong>{item}</strong>
                            </a>
                        ) : (
                            <span className="dropdown-item"><strong>{item}</strong></span>
                        )}

                    </li>
                ))}
            </ul>
        </div>
    );
}

// Defines an array of Contacts and calls the ContactDropdown function on each Contact object to render them to the screen.
function ContactInformation() {

    // Array of Contacts
    const contacts: Contact[] = [
        { icon: instagramPhoto, title: "Instagram", subtitle: ["@insert_text_here"], link: "https://www.instagram.com" },
        { icon: facebookPhoto, title: "Facebook", subtitle: ["Insert Text Here"], link: "https://www.facebook.com" },
        { icon: discordPhoto, title: "Discord", subtitle: ["Insert Text Here", "Search the name above in the Discord app."], link: "" },
        { icon: githubPhoto, title: "GitHub", subtitle: ["Insert Text Here", "Any projects that I have worked on or contributed to will be hosted here."], link: "https://github.com" },
        { icon: phoneNumberPhoto, title: "Phone", subtitle: ["123-456-7890"], link: "" },
        { icon: emailPhoto, title: "Email", subtitle: ["insert-text-here@example.com"], link: "" },
        { icon: streetAddressPhoto, title: "Address", subtitle: ["Example", "111 Example Road", "Los Angeles, CA 90001"], link: "" }
    ];

    return (
        <>
            {/* Headers */}
            <h1 className="title-contact-info h1"><strong>Contact Information</strong></h1>
            <p className="lead fw-light greeting-contact-info"><em>Want to get in touch? Reach out to me!</em></p>

            {/* Calls the ContactDropdown function, and displays the button in a row for easy viewing. */}
            <div className="row align-items-center">
                {contacts.map((contact: Contact, index: number) => (
                    <div className="col" key={index}>
                        <ContactDropdown contact={contact} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default ContactInformation; // Export function to App.tsx
