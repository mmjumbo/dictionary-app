import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <div className="definition">{props.meaning.definition}</div>
        <br />

        {props.meaning.example && (
          <div className="example"> {props.meaning.example}</div>
        )}
        <br />
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
