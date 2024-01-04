// components/NewQuiz.tsx
import React, { useState } from 'react';

interface Answer {
  id: any;
  text: string;
  answer: boolean;
}

interface Question {
  id: any;
  title: string;
  quiz: Answer[];
}

const NewQuiz: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quizData, setQuizData] = useState<Question[]>([
    {
      id: 0,
      title: 'Who is the current President of the United States as of September 2023?',
      quiz: [
        { id: 1, text: 'Joe Biden', answer: true },
        { id: 2, text: 'Donald Trump', answer: false },
        { id: 3, text: 'Hillary Clinton', answer: false },
        { id: 4, text: 'George W. Bush', answer: false },
      ],
    },
    // ... Add initial questions here
  ]);

  const addQuestion = () => {
    const newQuestion: Question = {
      id: quizData.length,
      title: '',
      quiz: [
        { id: 1, text: '', answer: true },
        { id: 2, text: '', answer: false },
        { id: 3, text: '', answer: false },
        { id: 4, text: '', answer: false },
      ],
    };

    setQuizData((prevData) => [...prevData, newQuestion]);
  };

  const handleQuestionChange = (
    questionIndex: number,
    field: 'title',
    value: string
  ) => {
    setQuizData((prevData) => {
      const updatedData = [...prevData];
      updatedData[questionIndex][field] = value;
      return updatedData;
    });
  };

  const handleAnswerChange = (
    questionIndex: number,
    answerIndex: number,
    value: string
  ) => {
    setQuizData((prevData) => {
      const updatedData = [...prevData];
      updatedData[questionIndex].quiz[answerIndex].text = value;

      // Shuffle the quiz answers if the correct answer is set
      if (updatedData[questionIndex].quiz[answerIndex].answer) {
        updatedData[questionIndex].quiz = shuffleArray(updatedData[questionIndex].quiz);
      }

      return updatedData;
    });
  };

  // Function to shuffle an array
  const shuffleArray = (array: Answer[]): Answer[] => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const submitData = () => {
    // e.preventDefault();
    console.log('data', quizData);
    setIsSubmitting(true);

    // Simulate API request or file upload delay
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="bg-gray-100 p-4 mt-0"> 
      <form
        className="w-full px-4 pb-6 grid grid-cols-1 md:grid-cols-2 md:gap-10"
        // onSubmit={submitData}
      >
        {quizData.map((question, questionIndex) => (
          <div key={question.id} className="mb-6 overflow-hidden">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Question {questionIndex + 1}:
            </label>
            <input
              type="text"
              value={question.title}
              onChange={(e) => handleQuestionChange(questionIndex, 'title', e.target.value)}
              className="border p-2 w-full mb-2"
              placeholder="Enter the question"
            />
            {question.quiz.map((answer, answerIndex) => (
              <input
                key={answer.id}
                type="text"
                value={answer.text}
                onChange={(e) => handleAnswerChange(questionIndex, answerIndex, e.target.value)}
                className="border p-2 w-full mb-2 ml-4"
                placeholder={`Enter Answer ${answerIndex + 1}`}
              />
            ))}
          </div>
        ))}


      </form>

      <div className="px-4 pb-6 grid grid-cols-1 md:grid-cols-2 md:gap-4">
          <button
            type="button"
            onClick={addQuestion}
            className="bg-white text-blue-500 p-3 rounded-md w-full"
          >
            Add New Question
          </button>

          <button
          onClick={submitData}
            type="submit"
            className={`bg-gradient-to-r from-${'#FFC400'} to-${'#0D01E5'} bg-blue-500 text-white p-3 rounded-md w-full ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
    </div>
  );
};

export default NewQuiz;
