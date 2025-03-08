import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState([]);

  function handleDictionaryResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiKey = "oa224383a3fb04434bf1df50f107516t";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

  let imageApiKey = "oa224383a3fb04434bf1df50f107516t";
  let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;
  axios.get(imageApiUrl).then(handleImageResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

function load() {
  setLoaded(true);
  search();
}

 if (loaded) {
  return (
    <div className="Dictionary">
      <section>
        <h2>What word do you want to look up?</h2>
      <form className="Search" onSubmit={handleSubmit}>
        <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}autoFocus={true} />
      </form>
      <div className="hint">
suggested words: sunset, tea, happy, beach ...
      </div>
      </section>
      <Results results={results}/>
      <Photos photos={photos}/>
    </div>
  );
 } else {
  load();
  return "Loading";
 }
  
}
