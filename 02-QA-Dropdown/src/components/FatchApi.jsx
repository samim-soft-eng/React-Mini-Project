
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FatchApi() {
  const [question, setquestion] = useState([]);

  const api = async () => {
    try {
      const result = await axios.get(
        "https://opentdb.com/api.php?amount=10&type=multiple"
      );

      console.log(result.data.results);
      setquestion(result.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div>
      <h1>All Questions And Answers</h1>

      {question.map((q, index) => (
        <div key={index}>
          <h3>{q.question}</h3>
          <p>Correct Answer: {q.correct_answer}</p>

          <ul>
            {q.incorrect_answers.map((answer, i) => (
              <li key={i}>{answer}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FatchApi;
