import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Typography, Slider, FormControl, InputLabel, Select, MenuItem, Grid, OutlinedInput, Chip } from '@mui/material';
import SongsTable from './SongsTable'; // Import SongsTable component
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './App.css';

const genres = ['pop', 'rock', 'jazz', 'hip-hop', 'electronic', 'classical', 'blues', 'country', 'reggae', 'metal']; // Add more genres as needed

function App() {
  const [danceability, setDanceability] = useState(0.5);
  const [energy, setEnergy] = useState(0.5);
  const [acousticness, setAcousticness] = useState(0.5);
  const [valence, setValence] = useState(0.5);
  const [tempo, setTempo] = useState(100);
  const [selectedGenres, setSelectedGenres] = useState([]); // Change to support multiple genres
  const [numSongs, setNumSongs] = useState(10); // Change to slider

  const [songs, setSongs] = useState([]);

  const handleRecommendation = async () => {
    try {
      const response = await axios.post('http://localhost:5000/recommend', {
        danceability,
        energy,
        acousticness,
        valence,
        tempo,
        genres: selectedGenres, // Send multiple genres
        num_songs: numSongs, // Use slider value for number of songs
      });
      setSongs(response.data.tracks);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Box className="sidebar" sx={{ width: 300, padding: 2 }}>
        <Accordion>
          <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
            <Typography>Adjust Features</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="body2">Danceability</Typography>
                  <Slider
                    value={danceability}
                    onChange={(e, value) => setDanceability(value)}
                    min={0}
                    max={1}
                    step={0.01}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">Energy</Typography>
                  <Slider
                    value={energy}
                    onChange={(e, value) => setEnergy(value)}
                    min={0}
                    max={1}
                    step={0.01}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">Acousticness</Typography>
                  <Slider
                    value={acousticness}
                    onChange={(e, value) => setAcousticness(value)}
                    min={0}
                    max={1}
                    step={0.01}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">Valence</Typography>
                  <Slider
                    value={valence}
                    onChange={(e, value) => setValence(value)}
                    min={0}
                    max={1}
                    step={0.01}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">Tempo</Typography>
                  <Slider
                    value={tempo}
                    onChange={(e, value) => setTempo(value)}
                    min={50}
                    max={200}
                    step={1}
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* Multiple Genres Select */}
                  <FormControl fullWidth>
                    <InputLabel>Genres</InputLabel>
                    <Select
                      multiple
                      value={selectedGenres}
                      onChange={(e) => setSelectedGenres(e.target.value)}
                      input={<OutlinedInput label="Genres" />}
                      renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                    >
                      {genres.map((genre) => (
                        <MenuItem key={genre} value={genre}>
                          {genre}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  {/* Slider for Number of Songs */}
                  <Typography variant="body2">Number of Songs</Typography>
                  <Slider
                    value={numSongs}
                    onChange={(e, value) => setNumSongs(value)}
                    min={1}
                    max={20}
                    step={1}
                    marks
                    valueLabelDisplay="auto"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" onClick={handleRecommendation}>Get Recommendations</Button>
                </Grid>
              </Grid>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Songs Table */}
      <Box className="main-content" sx={{ flexGrow: 1, padding: 2 }}>
        {songs.length > 0 ? <SongsTable songs={songs} /> : <Typography>No songs to display</Typography>}
      </Box>
    </Box>
  );
}

export default App;
