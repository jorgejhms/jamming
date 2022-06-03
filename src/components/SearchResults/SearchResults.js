import React from "react";
import TrackList from "../TrackList/TrackList";
import "./SearchResults.css";

export default function SearchResults(props) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList
        tracks={props.searchResults}
        onAdd={props.onAdd}
        onRemove={props.onRemove}
        isRemoval={false}
      />
    </div>
  );
}
