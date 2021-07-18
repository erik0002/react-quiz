import React from "react";
import s from './ActiveQuiz.module.css';
import AnswerList from "./AnswersLists/AnswerList";

const ActiveQuiz = props => (
    <div className={s.ActiveQuiz}>
        <p className={s.Question}>
            <span>
                <strong>2.</strong>&nbsp;
                Как дела?
            </span>
            <small>4 из 12</small>
        </p>
        <AnswerList
            answers={props.answers}
        />
    </div>
)

export default ActiveQuiz