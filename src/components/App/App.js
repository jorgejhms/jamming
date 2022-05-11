import React from 'react';
import './App.css';

// Importación de componentes
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    // hard-coding valores iniciales de search results
    this.state = {
      searchResults: [
        {
          'name': 'Canción 1',
          'artist': 'Artista 1',
          'album': 'Album 1',
          'id': '001'
        },
        {
          'name': 'Canción 2',
          'artist': 'Artista 2',
          'album': 'Album 2',
          'id': '002'
        },
      ],
      playlistName: 'Mi playlist de prueba',
      playlistTracks: [

        {
          'name': 'Mi Canción 1',
          'artist': 'Artista 1',
          'album': 'Album 1',
          'id': '001'
        },
        {
          'name': 'Mi Canción 2',
          'artist': 'Artista 2',
          'album': 'Album 2',
          'id': '002'
        },
      ]
    }
    // Binding methods
    this.addTrack = this.addTrack.bind(this);
  }

  // Methods
  addTrack(track) {
    // Añade una cacnción a la playlist state
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      this.state.playlistTracks.push(track);
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}
