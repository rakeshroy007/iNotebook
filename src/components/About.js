import React from 'react';
import '../css/About.css'

const About = () => {
  return (
    <div className="main-container mt-3">
      <h1 className="text-center">About iNotebook</h1>
      <p className="mt-4">
        iNotebook is a cloud-based MERN (MongoDB, Express.js, React, Node.js) application designed to provide users with a secure and user-friendly platform for managing their notes. This application allows users to create, read, update, and delete (CRUD) notes efficiently.
      </p>
      <h3>Features:</h3>
      <ul>
        <li>User Authentication: Secure user login and signup functionalities to protect user data.</li>
        <li>Note Management: Effortlessly add, edit, and delete notes to keep your thoughts organized.</li>
        <li>State Management: Utilizes React's Context API and hooks for efficient state handling and reactivity.</li>
        <li>Alerts: Provides user feedback through alert messages for create, update, and delete operations.</li>
        <li>Responsive Design: A modern and responsive layout ensuring usability across devices.</li>
      </ul>
      <h3>Technologies Used:</h3>
      <ul>
        <li>Frontend: React, React Router, Bootstrap</li>
        <li>Backend: Node.js, Express.js</li>
        <li>Database: MongoDB</li>
      </ul>
      <p className="mt-4">
        iNotebook aims to simplify note-taking and management while ensuring the security and privacy of user information. Join us in making note management effortless and efficient!
      </p>
    </div>
  );
};

export default About;
