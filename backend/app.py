from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import requests
import json
import base64
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app, resources={r"/recommend": {"origins": "http://localhost:3000"}})

# Load environment variables
load_dotenv()

CLIENT_ID = os.getenv('CLIENT_ID')
CLIENT_SECRET = os.getenv('CLIENT_SECRET')

def get_token():
    auth_str = CLIENT_ID + ':' + CLIENT_SECRET
    auth_bytes = auth_str.encode('utf-8')
    auth_base64 = str(base64.b64encode(auth_bytes), 'utf-8')

    url = "https://accounts.spotify.com/api/token"
    headers = {
        'Authorization': 'Basic ' + auth_base64,
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    data = {'grant_type': 'client_credentials'}
    result = requests.post(url, headers=headers, data=data)
    return result.json()['access_token']

@app.route('/recommend', methods=['POST'])
def recommend():
    features = request.json
    token = get_token()

    url = "https://api.spotify.com/v1/recommendations"
    headers = {'Authorization': 'Bearer ' + token}
    params = {
        'limit': features['num_songs'],
        'seed_genres': ','.join(features['genres']),
        'target_danceability': features['danceability'],
        'target_energy': features['energy'],
        'target_acousticness': features['acousticness'],
        'target_valence': features['valence'],
        'target_tempo': features['tempo']
    }
    response = requests.get(url, headers=headers, params=params)
    tracks = response.json()['tracks']

    recommendations = []
    for track in tracks:
        track_info = {
            'name': track['name'],
            'artist': track['artists'][0]['name'],
            'album': track['album']['name'],
            'image': track['album']['images'][0]['url'],
            'duration_ms': track['duration_ms']
        }
        recommendations.append(track_info)

    return jsonify({'tracks': recommendations})

if __name__ == '__main__':
    app.run(debug=True)
