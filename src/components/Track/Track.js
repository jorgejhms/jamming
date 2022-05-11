import React from 'react';

export default class Track extends React.Component {

  constructor(props) {
    super(props)

    // Binding methods
    this.addTrack = this.addTrack.bind(this);
  }

  // renderAction() {
  //   if (isRemoval) {
  //     return <button className='Track-action'>-</button>
  //   } else {
  //     return <button className='Track-action'>+</button>
  //   }
  // }

  addTrack() {
    this.props.track = this.props.addTrack;
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <button className="Track-action" onClick={this.addTrack}>

        </button>
      </div>
    )
  }
}
