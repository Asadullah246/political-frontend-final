
import { createFaq } from '@/components/shared/apis/api';
import React, { useState } from 'react';

interface Faq {
  id: number;
  question: string;
  answer: string;
}

const NewFaq: React.FC = () => {
  const [faqData, setFaqData] = useState<Faq[]>([
    {
      id: 0,
      question: 'What is your return policy?',
      answer: 'Our return policy allows for returns within 30 days of purchase.',
    },
    // ... Add initial FAQs here
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const addFaq = () => {
    const newFaq: Faq = {
      id: faqData.length,
      question: '',
      answer: '',
    };

    setFaqData((prevData) => [...prevData, newFaq]);
  };

  const handleQuestionChange = (faqIndex: number, value: string) => {
    setFaqData((prevData) => {
      const updatedData = [...prevData];
      updatedData[faqIndex].question = value;
      return updatedData;
    });
  };

  const handleAnswerChange = (faqIndex: number, value: string) => {
    setFaqData((prevData) => {
      const updatedData = [...prevData];
      updatedData[faqIndex].answer = value;
      return updatedData;
    });
  };

  const submitData = () => {
    console.log('faq data', faqData);
    setIsSubmitting(true);
    const res =createFaq(faqData)
    console.log('red', res )

    // if (res?.status === "success") {
    //   ToastSuccess("Successfully updated");
    //   setIsSubmitting(false);
    // } else {
    //   ToastError(res?.message || "Something error");
    //   setIsSubmitting(false);
    // }

    // Simulate API request or file upload delay

      setIsSubmitting(false);

  };

  return (
    <div className="max-w-lg  bg-gray-100 mt-0 p-4">
      <div className="w-full px-4 pb-6">
        {faqData.map((faq, faqIndex) => (
          <div key={faq.id} className="mb-6 overflow-hidden">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Question {faqIndex + 1}:
            </label>
            <input
              type="text"
              value={faq.question}
              onChange={(e) => handleQuestionChange(faqIndex, e.target.value)}
              className="border p-2 w-full mb-2"
              placeholder="Enter the question"
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Answer {faqIndex + 1}:
            </label>
            <textarea
              value={faq.answer}
              onChange={(e) => handleAnswerChange(faqIndex, e.target.value)}
              className="border p-2 w-full mb-2 h-24"
              placeholder="Enter the answer"
            />
          </div>
        ))}
      </div>

      <div className="px-4 pb-6">
        <button
          type="button"
          onClick={addFaq}
          className="bg-white text-blue-500 p-3 rounded-md w-full"
        >
          Add New FAQ
        </button>


        <button
          onClick={submitData}
            type="submit"
            className={` mt-3 bg-blue-500 text-white p-3 rounded-md w-full ${
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

export default NewFaq;
