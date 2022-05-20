import React from 'react';
import './App.css';

// Importación de componentes
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

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
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
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
    // Elimina una canción de la lista de playlist
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({ playlistTracks: tracks })
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name })
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
  }

  search(term) {
    // console.log(term)
    Spotify.search(term).then(searchResults => {
      this.setState({ searchResults: searchResults })
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
              onRemove={this.removeTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
              isRemoval={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App