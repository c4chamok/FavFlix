# FavFlix Experiences

**FavFlix** is a user-friendly movie portal designed to make exploring, managing, and sharing movies effortless and enjoyable. Discover new movies, view detailed information, and build your personalized favorites list — all in one place.

## Live Demo
[View the Live Website](https://favflix-85165.web.app/)

## Server URL
[API URL](https://favflix-server.vercel.app/)

---

## Key Features
1. **Explore Featured Movies**: A homepage showcasing six hand-picked movies to spark your interest.
2. **Personalized Favorites**: Add, view, and manage your favorite movies with a seamless experience.
3. **Dynamic UI**: Light and dark theme support for a personalized browsing experience.
4. **Trailer Watch Section**: View movie trailers directly in a modal window for an immersive preview.
5. **Commenting System**: Interact with the community by leaving comments by signing in.

### Frontend:
- **React Components**: Utilized components like Navbar, Footer, Movie Cards, and Movie Details for modular and reusable UI.
- **React Context API**: Used to manage user authentication and profile data without prop drilling across the application.
- **React Hooks**: React hooks like `useState`, `useEffect`, `useContext`, `useLocation`, and `useNavigate` for efficient state and navigation management.

### Backend:
- **Node.js**: A runtime environment for running JavaScript applications on the server-side efficiently.
- **Express.js**: A minimalist web framework for Node.js that simplifies building robust APIs and web servers.
- **MongoDB**: A NoSQL database for storing and managing data in a flexible, JSON-like document format.

### Packages Used:
- **React Router**: For implementing multi-page navigation and route protection.
- **Tailwind CSS**: Utility-first CSS framework for rapid styling.
- **DaisyUI**: Tailwind-based component library for pre-styled components.
- **Toastify**: For displaying toast notifications for success and error messages.
- **React Icons**: For integrating customizable icons across the application.
- **Swiper**: For creating responsive and interactive sliders.
- **React Stars**: For rendering star ratings dynamically.
- **Firebase**: Backend service for user authentication and profile management.

---

## Running FavFlix Locally

### Prerequisites
1. **Node.js**: Ensure you have Node.js installed on your system. Download it [here](https://nodejs.org/).
2. **Git**: Make sure Git is installed for cloning the repository. Download it [here](https://git-scm.com/).
3. **Firebase Project**: You need to create a Firebase project to set up authentication.
4. **MongoDB Atlas**: Create a MongoDB Atlas cluster and get your database credentials.

---

### Folder Structure
1. **FavFlix-Client-Side-Main**: Contains the frontend code built with Vite.
2. **FavFlix-Server-Side-Main**: Contains the backend code built with Node.js and Express.js.

---

### Step 1: Clone the Repository
```bash
git clone https://github.com/c4chamok/FavFlix.git
cd favflix
```

---

### Step 2: Setup Client-Side
1. Navigate to the client folder:
   ```bash
   cd FavFlix-Client-Side-Main
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a file named `.env.local` in the `FavFlix-Client-Side-Main` directory.
4. Add the Firebase configuration to the `.env.local` file:
   ```env
   VITE_apiKey=your_api_key
   VITE_authDomain=your_auth_domain
   VITE_projectId=your_project_id
   VITE_storageBucket=your_storage_bucket
   VITE_messagingSenderId=your_messaging_sender_id
   VITE_appId=your_app_id
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

---

### Step 3: Setup Server-Side
1. Navigate to the server folder:
   ```bash
   cd FavFlix-Server-Side-Main
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `FavFlix-Server-Side-Main` directory.
4. Add MongoDB Atlas credentials to the `.env` file:
   ```env
   DB_USERNAME=your_db_username
   DB_USERPASS=your_db_password
   ```
5. Start the server:
   ```bash
   npm start
   ```

---

### Step 4: Update API URL in Client-Side
1. Ensure the API URL in the client-side code points to the running server. Update the API base URL in the appropriate configuration file.

---

### Additional Notes
- **Environment Variables**: Ensure `.env.local` and `.env` files are added to `.gitignore` to prevent accidental uploads of sensitive credentials.
- **Firebase Rules**: Update Firebase Firestore and Realtime Database rules (if used) to match your project's requirements.

Enjoy exploring **FavFlix Experiences** locally! 🍿🚀
