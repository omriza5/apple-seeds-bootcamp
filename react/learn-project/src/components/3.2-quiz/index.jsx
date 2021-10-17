import React from "react";
import Question from "./question";
import QuizTitle from "./quizTitle";
import QuizInput from "./quizInput";
import "./style.css";

const Quiz = () => {
  return (
    <>
      <div className="quiz">
        <QuizTitle title="How Do You Like Front End?" />
        <div className="q1">
          <Question question="How Much You Love Front End" />
          <QuizInput type="range" />
        </div>
        <div className="q2">
          <Question question="What is your favorite front end feature?" />
          <QuizInput type="text" />
        </div>
      </div>
    </>
  );
};

export default Quiz;
