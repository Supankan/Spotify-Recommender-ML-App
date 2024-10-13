# Spotify Recommender ML App

This project is a **Spotify Recommender Application** that allows users to receive song recommendations based on various audio features such as *danceability*, *energy*, *acousticness*, and *tempo*. The app uses the **Spotify API** and includes an option to switch between API recommendations and a custom-built **Machine Learning model** (coming soon).

## Features

- **Song Recommendations**: Get song recommendations based on user-selected audio features.
- **Multiple Genres**: Select multiple genres to customize the recommendations.
- **Dynamic Sliders**: Adjust parameters like danceability, energy, valence, acousticness, and tempo for precise recommendations.
- **Expandable Sidebar**: User-friendly control panel in the sidebar for setting preferences.
- **Two Recommendation Modes**:
  - **Spotify API**: Default mode fetching songs from Spotify’s recommendation API.
  - **Custom ML Model**: Coming soon, a custom model trained on Spotify datasets for personalized recommendations.
- **Responsive UI**: The app is built using **React** and **Material UI** for a modern, aesthetic user experience.

## Tech Stack

- **Frontend**: 
  - React with Material UI for the user interface.
  - Axios for handling API requests.
  
- **Backend**: 
  - Flask for the API and ML model integration.
  
- **Spotify API**: 
  - Retrieves recommended songs based on audio features and genres.

## How to Run the Project

### Prerequisites

- Node.js (for frontend)
- Python (for backend)
- Spotify Developer account for API access
- Git

### Setting up the Project

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Supankan/Spotify-Recommender-ML-App.git
   ```

2. **Backend Setup**:
   - Navigate to the backend folder:
     ```bash
     cd backend
     ```
   - Create and activate a virtual environment:
     ```bash
     python -m venv venv
     source venv/bin/activate  # For Mac/Linux
     venv\Scripts\activate     # For Windows
     ```
   - Install dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Add your Spotify API credentials to the `.env` file.
   - Run the Flask server:
     ```bash
     flask run
     ```

3. **Frontend Setup**:
   - Navigate to the frontend folder:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the frontend:
     ```bash
     npm start
     ```

4. **Access the Application**:
   - Open your browser and go to `http://localhost:3000`.

## Future Plans

- **Custom Machine Learning Model**: Implement a custom model trained on a Spotify dataset to offer alternative recommendations.
- **Improved UI/UX**: Continuous updates to improve the user experience.

## Folder Structure

```bash
SpotifyRecommenderMLApp/
├── backend/
│   ├── app.py               # Flask server
│   ├── .env                 # Environment variables for Spotify API keys
│   ├── requirements.txt     # Python dependencies
│   └── models/              # ML model (coming soon)
├── frontend/
│   ├── public/              # Static files
│   ├── src/                 # React components
│   ├── App.js               # Main React app
│   └── package.json         # Node.js dependencies
└── README.md
```
