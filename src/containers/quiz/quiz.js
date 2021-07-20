import React, {Component} from "react";
import s from './quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        answersState: null, // {id: 'success': 'error'}
        quiz: [
            {
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: 'Черный', id: 1},
                    {text: 'Голубой', id: 2},
                    {text: 'Красный', id: 3},
                    {text: 'Зеленый', id: 4}
                ]
            },
            {
                question: 'В каком году основали Минск?',
                rightAnswerId: 1,
                id: 2,
                answers: [
                    {text: '1067', id: 1},
                    {text: '1234', id: 2},
                    {text: '1380', id: 3},
                    {text: '1410', id: 4}
                ]
            }
        ]
    }
    onAnswerClickHandler = (answerId) => {
        const question = this.state.quiz[this.state.activeQuestion]

        if(question.rightAnswerId === answerId){

            this.setState({
                answersState: {[answerId]: 'success'}
            })
            const timeout = window.setTimeout(() => {
                if(this.isQuizFinished()){
                    console.log('Finished')
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            this.setState({
                answersState: {[answerId]: 'error'}
            })
        }
    }

    isQuizFinished(){
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render(){
        return (
            <div className={s.Quiz}>
                <div className={s.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answersState}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz
