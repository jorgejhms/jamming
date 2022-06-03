import React, { useState } from "react";
import "./SearchBar.css";

export default function App(props) {
  // Definiendo estados
  const [term, setTerm] = useState([]);

  // Métodos
  // const search = () => {
  //   // Busca término ingresado en el input
  //   props.onSearch(term);
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(term);
  };

  const handleTermChange = (event) => {
    // Reacciona al tipeo en el input
    setTerm(event.target.value);
  };

  return (
    <div className="SearchBar">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={handleTermChange}
        />
        <button className="SearchButton">SEARCH</button>
      </form>
    </div>
  );
}
// class SearchBar extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { term: '' }
//     this.search = this.search.bind(this);
//     this.handleTermChange = this.handleTermChange.bind(this);
//   }

//   search() {
//     this.props.onSearch(this.state.term)
//   }

//   handleTermChange(event) {
//     this.setState({ term: event.target.value })
//   }

//   render() {
//     return (
//       <div className="SearchBar">
//         <input
//           placeholder="Enter A Song, Album, or Artist"
//           onChange={this.handleTermChange}
//         />
//         <button className="SearchButton" onClick={this.search}>SEARCH</button>
//       </div>
//     )
//   }
// }

// export default SearchBar
