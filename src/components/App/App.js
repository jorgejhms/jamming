import React from 'react';
import './App.css';

// Importación de componentes
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {

  constructor(props) {
    super(props);
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
          'id': 'A01'
        },
        {
          'name': 'Mi Canción 2',
          'artist': 'Artista 2',
          'album': 'Album 2',
          'id': 'A02'
        },
      ]
    };
    // Binding methods
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  // Methods
  addTrack(track) {
    // Añade una canción a la playlist state
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks })
  }

  removeTrack(track) {
    // Elimina una cacnción de la lista de playlist
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      this.state.playlistTracks = this.state.playlistTracks.filter(track.id)
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
              onRemove={this.removeTrack}
            />
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

export default App