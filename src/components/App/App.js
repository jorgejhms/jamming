import React, { useState } from 'react';
import './App.css';

// Importación de componentes
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

export default function App() {
  // Definiendo estados
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('Mi playlist de prueba');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  // Métodos
  const addTrack = track => {
    // Añade una canción al playlistState
    let tracks = playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks(prev => [track, ...prev])
  }

  const removeTrack = track => {
    // Elimina una canción de la lista de playlist
    let tracks = playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    setPlaylistTracks(tracks)
  }

  const updatePlaylistName = name => {
    setPlaylistName(name)
  }

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    })
  }

  const search = term => {
    Spotify.search(term).then(searchResults => {
      setSearchResults(searchResults);
    })
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className='App-playlist'>
          <SearchResults
            searchResults={searchResults}
            onAdd={addTrack}
            // onRemove={removeTrack}
          />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
            isRemoval={true}
          />
        </div>
      </div>
    </div>
  )
}
