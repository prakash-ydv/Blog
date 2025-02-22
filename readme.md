# Simple Blog App

This is a simple social mediablog web application built using **Node.js**, **Express.js**, **MongoDB (Mongoose)**, **EJS**, and **JWT authentication**. Users can register, log in, create posts, and view other users' profiles.

## Features
- User authentication (Register/Login/Logout) with JWT and cookies.
- Secure password hashing using bcrypt.
- Users can create posts.
- View all posts on the homepage.
- View other users' profiles.

## Installation
### Prerequisites
- **Node.js** (>= v14)
- **MongoDB** (Local or Cloud - MongoDB Atlas)

### Setup
1. Clone the repository:
   ```sh
   will update later
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a **.env** file and add:
   ```sh
   SECRET_KEY=your_secret_key
   ```

4. Start the server:
   ```sh
   node index.js
   ```
   or using nodemon (if installed):
   ```sh
   nodemon index.js
   ```

5. Open your browser and go to:
   ```sh
   http://localhost:3000
   ```

## Project Structure
```
/social-media-app
│-- /models
│   ├── userModel.js
│   ├── postModel.js
│-- /public (Static files like CSS, JS, images)
│-- /views (EJS templates)
│-- .env
│-- server.js
│-- package.json
│-- README.md
|-- .gitignore
``` 

## API Endpoints
### Authentication
- `GET /register` → Register page
- `POST /register` → Registers a user
- `GET /login` → Login page
- `POST /login` → Logs in a user
- `GET /logout` → Logs out a user

### Posts
- `POST /addpost` → Creates a post
- `GET /` → Homepage with all posts

### User Profiles
- `GET /profile` → View logged-in user's profile
- `GET /u/:username` → View another user's profile

## Technologies Used
- **Node.js** - Backend runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **EJS** - Templating engine
- **bcrypt** - Password hashing
- **JWT** - Authentication
- **cookie-parser** - Handling cookies

## Future Enhancements
- Add profile pictures
- Like & Comment system
- Follow/Unfollow feature
- Real-time notifications
- end-to-end encrypted texting

## License
This project is open-source and free to use.

