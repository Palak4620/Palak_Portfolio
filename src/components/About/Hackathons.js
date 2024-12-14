import React from "react";
import "./Hackathons.css";
import img1 from '../../Assets/wittyhacks.jpg';
import img2 from '../../Assets/Hackhive.jpg';

const Hackathons = () => {
  const hackathons = [
    {
      name: "Wittyhacks 4.0",
      description: "One among the top 60 teams selected from over 1200+ teams.",
      image: img1, // Replace with actual image URL
    },
    {
      name: "HackHive",
      description: "Top 60 teams selected out of 1300+ registrations.",
      image: img2, // Replace with actual image URL
    },
  ];

  return (
    <div className="hackathons-container">
      <h2 className="hackathons-title purple">Hackathons</h2>
      <div className="hackathons-grid">
        {hackathons.map((hackathon, index) => (
          <div key={index} className="hackathon-card">
            <img
              src={hackathon.image}
              alt={hackathon.name}
              className="hackathon-image"
            />
            <h3 className="hackathon-name">{hackathon.name}</h3>
            <p className="hackathon-description">{hackathon.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hackathons;
