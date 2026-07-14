const WordCard = ({ wordData }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 mt-8">

      <h2 className="text-3xl font-bold text-indigo-700">
        {wordData.word}
      </h2>

      <p className="text-gray-500 mt-2">
        {wordData.phonetic || "No phonetic"}
      </p>

      <div className="mt-5 space-y-4">

        <div className="bg-indigo-50 rounded-xl p-4">
          <h3 className="font-bold">
            Part Of Speech
          </h3>

          <p>
            {wordData.meanings[0].partOfSpeech}
          </p>
        </div>

        <div className="bg-indigo-50 rounded-xl p-4">
          <h3 className="font-bold">
            Meaning
          </h3>

          <p>
            {wordData.meanings[0].definitions[0].definition}
          </p>
        </div>

        <div className="bg-indigo-50 rounded-xl p-4">
          <h3 className="font-bold">
            Example
          </h3>

          <p>
            {wordData.meanings[0].definitions[0].example ||
              "No Example Available"}
          </p>
        </div>

      </div>
    </div>
  );
};

export default WordCard;