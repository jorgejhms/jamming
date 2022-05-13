import React from 'react';
import './Track.css';

class Track extends React.Component {

  constructor(props) {
    super(props)

    // Binding methods
    this.addTrack = this.addTrack.bind(this);
  }

  renderAction() {
    // Dependiendo de la propiedad del track renderiza boton + o -
    if (this.props.isRemoval) {
      return <button className='Track-action'>-</button>
    } else {
      return <button className='Track-action'>+</button>
    }
  }

  addTrack() {
    this.props.track = this.props.addTrack;
  }

  removeTrack() {

  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.renderAction()}
        {/* <button className="Track-action" onClick={this.addTrack}>        </button> */}
      </div>
    )
  }
}

export default Track;