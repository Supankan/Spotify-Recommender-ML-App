import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './SongsTable.css';

export default function SongsTable({ songs }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="songs table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="left">Image</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Artist</TableCell>
            <TableCell align="left">Album</TableCell>
            <TableCell align="left">Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {songs.map((song, index) => (
            <TableRow key={song.name}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <img src={song.image} alt={song.album} style={{ width: '50px', borderRadius: '8px' }} />
              </TableCell>
              <TableCell>{song.name}</TableCell>
              <TableCell>{song.artist}</TableCell>
              <TableCell>{song.album}</TableCell>
              <TableCell>{(song.duration_ms / 60000).toFixed(2)} mins</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
