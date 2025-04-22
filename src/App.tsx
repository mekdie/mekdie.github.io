import React from "react";
import "./App.css";

interface Link {
  name: string;
  url: string;
  icon: string;
}

const links: Link[] = [
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
];

const Links: React.FC = () => {
  return (
    <>
      <div id="profilePicture">
        <img
          src="https://raw.githubusercontent.com/mekdie/mekdie.github.io/main/public/mekdie.PNG"
          alt="Mekdie Profile"
        />
      </div>

      <div id="userName">
        <h2>Welcome to Mekdie's DevWorld</h2>
        <p>McDony Lee - Mekdie</p>
      </div>
      {/* List all the available links */}
      <div id="links">
        {links.map((link, index) => (
          <a
            key={index}
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

      <div id="hashtag">
        #Mekdie
        <br />
        &nbsp;Stay Tuned!<i className="fas fa-heart"></i>
      </div>
    </>
  );
};

export default Links;
