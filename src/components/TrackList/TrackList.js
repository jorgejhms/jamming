import React from "react";
import Track from "../Track/Track";
import "./TrackList.css";

export default function TrackList(props) {
  return (
    <div className="TrackList">
      {props.tracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          onAdd={props.onAdd}
          onRemove={props.onRemove}
          isRemoval={props.isRemoval}
        />
      ))}
    </div>
  );
}

// class TrackList extends React.Component {
//   render() {
//     return (
//       <div className="TrackList">
//         {this.props.tracks.map(track => (
//           <Track
//             key={track.id}
//             track={track}
//             onAdd={this.props.onAdd}
//             onRemove={this.props.onRemove}
//             isRemoval={this.props.isRemoval}
//           />
//         ))}
//       </div>
//     )
//   }
// }

// export default TrackList
