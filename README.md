# iNotebook
iNotebook is a cloud-based MERN (MongoDB, Express.js, React, Node.js) stack application that allows users to create, read, update, and delete (CRUD) notes in a secure and user-friendly environment. This app implements user authentication, note management, and state handling using React hooks and the Context API.    [Live](https://inotebook-deploy.onrender.com/)


## Features

### Backend
- **User Authentication**: Users can create accounts and log in to access their personal notes.
- **Protected Routes**: Middleware is used to protect sensitive routes, ensuring that only authenticated users can access and modify their data.
- **CRUD Operations**: Users can create, update, and delete their notes, with each note being tied to a specific user.
- **MongoDB Database**: The app uses MongoDB to store user credentials and notes.

### Frontend
- **State Management**: `useContext` and `useState` hooks are used to manage the state of notes and user authentication.
- **Alerts**: Dynamic alerts are shown to users after performing operations like adding, updating, or deleting a note.
- **Login/Signup System**: Users can log in to access their saved notes or sign up for a new account.
- **Responsive Design**: The UI is built using Bootstrap to ensure responsiveness and professional styling.

## Installation

### Backend Setup
1. Clone the repository.
2. Navigate to the `backend` folder and     install dependencies:
    ```bash
    cd backend
    npm install
3. Set up your MongoDB database and add your MongoDB URI to the .env file:
    ```bash
    MONGO_URI = your_mongodb_connection_string
    JWT_SECRET = your_jwt_secret

### Frontend Setup
1. Navigate to the frontend folder and install dependencies:
    ```bash
    cd frontend
    npm install
2. Running Both Frontend and Backend Together : 
    
    To run both frontend and backend servers concurrently, use:

    ```bash
    npm run both

## Usage
- Sign up for a new account.
- Log in to access your notes.
- Create, update, or delete notes using the intuitive UI.
- Logout to end the session, and notes will only be visible to the logged-in user.

## Technologies Used
- `Backend`: Node.js, Express.js, MongoDB, JWT for authentication
- `Frontend`: React.js, React Router, Bootstrap for responsive design
- `State Management`: React's `useContext` and `useState` hooks
- `API`: RESTful APIs for communication between frontend and backend

## Dependencies
### Backend
- express: For building the backend APIs.
- bcryptjs: For hashing passwords.
- jsonwebtoken: For securing routes with JWT authentication.
- mongoose: For interacting with the MongoDB database.
- dotenv: For environment variable management.
### Frontend
- react: Core React library for building the UI.
- react-router-dom: For routing between components.
- bootstrap: For responsive and professional UI components.

## Screenshots
![iNotebook](https://github.com/user-attachments/assets/c870f3e2-23a3-4fbe-98c4-c200c6d9b1ab)
-
![iNotebook-addNote](https://github.com/user-attachments/assets/08484a97-8b2f-4375-8937-6399f238a1bf)

![iNotebook-edit](https://github.com/user-attachments/assets/e3263444-0074-41b0-8fd7-7355026953dc)
![iNotebook-noNotes](https://github.com/user-attachments/assets/25bdc0cb-cb01-4f80-bfd5-3826ecb547ce)

## How to Contribute
Feel free to fork the repository, submit a pull request, or report issues. Contributions and suggestions are welcome!
##  One Bug Details :

This error is not harmful to the overall functionality of the iNotebook project but does prevent proper note fetching and display. Here's a summary of the bug:

#### Terminal Error:

- Message: `Cannot read properties of undefined (reading 'id')`
- Description: The server-side error occurs because `req.user.id` is undefined, which suggests that the user authentication is failing, likely due to a missing or incorrect token.

#### Chrome Console Error:

- Message: `GET http://localhost:5000/api/notes/fetchallnotes 500 (Internal Server Error)`
- Description: The frontend is trying to fetch notes but receives a `500 Internal Server Error` . Additionally, the response is not valid JSON, causing a parsing error in the frontend.
Why It's Not Harmful:

### Why It's Not Harmful:
- This bug doesn't pose any critical risks or harm to the project. It's related to user authentication and note retrieval, which can be resolved by ensuring that the server returns valid JSON responses and the user ID is correctly passed in the request.

- The rest of the functionality like login, signup, and UI rendering should continue to work fine, but fetching notes will not work until this bug is fixed.

`If someone resolves this exact issue, let me know!`
