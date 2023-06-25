import React from "react";
import "./App.css";

const links = [
    {
        name: "GitHub",
        url: "https://github.com/mekdie",
        icon: "fab fa-github",
    },
    {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/mcdony-lee-angkasa-7a9b81187",
        icon: "fab fa-linkedin",
    },
    {
        name: "YouTube",
        url: "https://www.youtube.com/mcdonylee",
        icon: "fab fa-youtube",
    },
    {
        name: "Spotify",
        url: "https://open.spotify.com/artist/06nYD1xAvTuwFt2rmnhK8b?si=_e-fSvtFSQiKZWPqcO7gGQ",
        icon: "fab fa-spotify",
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/mcdonylee",
        icon: "fab fa-instagram",
    },
];
const Links = () => {
    return (
        <>
            <div id="profilePicture">
                <img
                    src="https://raw.githubusercontent.com/mekdie/mekdie.github.io/main/public/mekdie.png"
                    alt="Mekdie Profile"
                />
            </div>

            <div id="userName">
                <h2>Welcome to World of Mekdie</h2>
                <p>McDony Lee - Mekdie</p>
            </div>
            {/* List all the available links */}
            <div id="links">
                {links.map((link) => (
                    <a
                        key={link.id}
                        className="link"
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className={link.icon}>&nbsp;</i>
                        {link.name}
                    </a>
                ))}
            </div>

            <div id="hashtag">#Mekdie</div>
        </>
    );
};

export default Links;
