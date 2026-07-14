import { useState } from "react";
import axios from "axios";

const Dictionary = () => {
  const [word, setWord] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [wordData, setWordData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const searchWord = async () => {
    try {
      if (word.trim().length === 0) {
        setError("Please Enter a Word..");
        return;
      }
      setLoading(true);
      setError("");
      let res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      );
      console.log(res);
      setWordData(res.data[0]);
    } catch (error) {
      console.log(error);
      setError("Word Not found");
    } finally {
      setLoading(false);
    }
  };
  const synonyms = wordData
    ? wordData.meanings.flatMap((meaning) => meaning.synonyms || [])
    : [];

  const antonyms = wordData
    ? wordData.meanings.flatMap((meaning) => meaning.antonyms || [])
    : [];

  return (
    <div
      className={`min-h-screen flex justify-center items-center p-5 transition-all duration-500 ${
        darkMode
          ? "bg-gray-900"
          : "bg-gradient-to-r from-indigo-100 via-sky-100 to-cyan-100"
      }`}
    >
      <div
        className={`w-full max-w-2xl rounded-3xl p-8 shadow-2xl transition-all duration-500 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white/60"
        }`}
      >
        <h1
          className={`text-4xl text-center font-bold mb-8 ${
            darkMode ? "text-white" : "text-indigo-600"
          }`}
        >
          {" "}
          📕Dictionary App{" "}
        </h1>
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium shadow-lg transition-all duration-300 ${
              darkMode
                ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            <span className="text-lg">{darkMode ? "☀️" : "🌙"}</span>

            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter Any Word"
            className="flex-1 border-2 border-indigo-300 rounded-xl px-4 py-3 outline-none focus:border-indigo-600"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />

          <button
            className="bg-indigo-600 text-white px-10 font-medium text-lg rounded-e-xl "
            onClick={searchWord}
          >
            Search
          </button>
        </div>

        {loading && (
          <h2 className="text-center mt-6 text-lg text-indigo-400 font-semibold animate-pulse">
            Searching...
          </h2>
        )}

        {error && (
          <h2 className="text-center mt-6 text-lg text-red-800 font-semibold">
            {error}
          </h2>
        )}

        {wordData && (
          <div className="mt-8 bg-indigo-50 rounded-2xl p-6">
            <h2 className="text-3xl font-bold text-indigo-700">
              {wordData.word}
            </h2>
            <p className="text-gray-700 mt-1">
              {wordData.phonetic || "Phonetic not Found"}{" "}
            </p>

            <div className="mt-5 space-y-3">
              <div className="bh-white/70 rounded-xl p-3 flex justify-between">
                <span className="font-semibold"> Part Of Speach:</span>
                <span>{wordData.meanings[0].partOfSpeach}</span>
              </div>

              <div className="bg-white/70 rounded-xl p-3">
                <h3 className="font-semibold mb-2">Meaning:</h3>
                <p>{wordData.meanings[0].definitions[0].definition}</p>
              </div>

              <div className="bg-white/70 rounded-x1 p-3">
                <h3 className="font-semibold mb-2"> Example</h3>
                <p>
                  {wordData.meanings[0].definitions[0].example ||
                    "No Example Availabel"}
                </p>
              </div>

              <div className="bg-white/70 rounded-xl p-3 mt-4">
                <h3 className="font-semibold text-green-600 mb-2">
                  ✅ Synonyms
                </h3>

                {synonyms.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {synonyms.slice(0, 8).map((item, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No Synonyms Available</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dictionary;
