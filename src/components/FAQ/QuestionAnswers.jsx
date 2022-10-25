import React from 'react';
import { useFetch } from 'hooks';
import { useState } from 'react';
import Answer from './Answer';
import { getFaqs } from 'api/api-services';

function QuestionAnswers({
  question = [
    'How many pictures can I store?',
    'How many pictures can I store?',
    'How many pictures can I store?',
    'How many pictures can I store?',
    'How many pictures can I store',
  ],
}) {
  const data = useFetch(getFaqs);

  const [showData, setShowData] = useState(false);
  const [id, setId] = useState();

  const handleClick = (i) => {
    setId((prev) => (prev == i ? null : i));
    setShowData(!showData);
  };
  return (
    <div className="border-b border-border">
      {data?.data?.faqs?.map((item, index) => (
        <>
          <div
            className="flex text-black font-nunito-light pt-20 pb-18 px-19 justify-between border-t  border-border text-base leading-22 link "
            onClick={() => handleClick(index)}
          >
            <div>{item?.question}</div>

            <img
              className={`${id == index && 'transform rotate-180'}`}
              src="/images/table/downArrow.svg"
            />
          </div>
          {id == index && <Answer answer={item?.answer} />}
        </>
      ))}
    </div>
  );
}

export default QuestionAnswers;
