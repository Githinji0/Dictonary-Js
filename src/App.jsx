/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import getWorldMeaning from "./services/api.js"

function App() {
  const [inputValue, setInputValue] = useState("")
  const [meanings, setMeanings] = useState([])
  const [error, setError] = useState("")

  const handleSearch = async () => {
    try {
      if (inputValue.trim() === "") {
        setError("Please enter a word");
        return;
      }
      const result = await getWorldMeaning(inputValue);
      const extractedData = result.flatMap(item => item.meanings);
      setMeanings(extractedData);
      setError("");
    } catch (error) {
      setError("Word not found");
      setMeanings([]);
    }

    console.log(meanings);
  }



  return (
    <>
      <div className="box">
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="box2">
          <input type="text" name="" id="" placeholder="Enter word here.." onChange={(e) => setInputValue(e.target.value)} />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div>
          {meanings.map((meaning, index) => (
            <div key={index}>
              <h3>Part of Speech: {meaning.partOfSpeech}</h3>
              {meaning.definitions.slice(0, 3).map((def, defIndex) => (
                <div key={defIndex}>Definition: {def.definition}</div>

              ))}
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default App
