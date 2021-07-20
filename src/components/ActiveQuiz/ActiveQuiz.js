import React from "react";
import s from './ActiveQuiz.module.css';
import AnswerList from "./AnswersLists/AnswerList";

const ActiveQuiz = props => (
    <div className={s.ActiveQuiz}>
        <p className={s.Question}>
            <span>
                <strong>{props.answerNumber}</strong>&nbsp;
                {props.question}
            </span>
            <small>{props.answerNumber} из {props.quizLength}</small>
        </p>
        <AnswerList
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
)

export default ActiveQuiz
