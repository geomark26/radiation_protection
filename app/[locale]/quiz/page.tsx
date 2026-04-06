'use client';

import React, { useState } from 'react';
import { questionsData } from './questionsData';
import { useTranslations } from 'next-intl';
import '@/styles/quiz.css';

const NUMBER_OF_QUESTIONS = 30;

const Quiz = () => {
  const t = useTranslations('quiz');
  const [isWelcome, setIsWelcome] = useState(true);
  const [quizQuestions, setQuizQuestions] = useState<
    { question: string; answers: string[]; correctAnswerIndex: number }[]
  >([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const loadQuiz = () => {
    const shuffled = [...questionsData].sort(() => 0.5 - Math.random());
    const chosen = shuffled.slice(0, NUMBER_OF_QUESTIONS);
    setQuizQuestions(chosen);
    setUserAnswers(Array(NUMBER_OF_QUESTIONS).fill(null));
    setCurrentQuestionIndex(0);
    setIsSubmitted(false);
  };

  const handleStartQuiz = () => { loadQuiz(); setIsWelcome(false); };
  const handleRetakeQuiz = () => { loadQuiz(); setIsWelcome(false); };
  const handleAnswerSelect = (answerIndex: number) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(updatedAnswers);
  };
  const handleNext = () => { if (currentQuestionIndex < quizQuestions.length - 1) setCurrentQuestionIndex(currentQuestionIndex + 1); };
  const handleBack = () => { if (currentQuestionIndex > 0) setCurrentQuestionIndex(currentQuestionIndex - 1); };
  const handleSubmit = () => { setIsSubmitted(true); };

  if (isWelcome) {
    return (
      <div className='container'>
        <div className='welcomeCard bg-background'>
          <h1 className='title'>{t('welcomeTitle')}</h1>
          <p style={{ marginBottom: '20px' }}>{t('welcomeDescription')}</p>
          <button className='button' onClick={handleStartQuiz}>{t('startQuiz')}</button>
        </div>
      </div>
    );
  }

  if (!quizQuestions.length) {
    return <div className='loading'>{t('loading')}</div>;
  }

  let correctCount = 0;
  const wrongAnswersDetail: { question: string; correctAnswer: string; yourAnswer: string; }[] = [];

  if (isSubmitted) {
    quizQuestions.forEach((q, i) => {
      if (userAnswers[i] === q.correctAnswerIndex) {
        correctCount++;
      } else {
        wrongAnswersDetail.push({
          question: q.question,
          correctAnswer: q.answers[q.correctAnswerIndex],
          yourAnswer: userAnswers[i] !== null ? q.answers[userAnswers[i]] : t('noAnswer'),
        });
      }
    });
    const wrongCount = quizQuestions.length - correctCount;

    return (
      <div className='container'>
        <div className='resultsCard bg-background'>
          <h1 className='title'>{t('resultsTitle')}</h1>
          <p>{t('answeredCorrectly', { correct: correctCount, wrong: wrongCount })}</p>
          {wrongAnswersDetail.length > 0 && (
            <div>
              <h2 style={{ marginTop: 16, fontSize: '1.125rem', marginBottom: 8 }}>{t('reviewIncorrect')}</h2>
              <ul>
                {wrongAnswersDetail.map((item, index) => (
                  <li key={index} style={{ marginBottom: '12px' }}>
                    <p><strong>{t('questionLabel')}</strong> {item.question}</p>
                    <p><strong>{t('yourAnswer')}</strong> {item.yourAnswer}</p>
                    <p><strong>{t('correctAnswer')}</strong> {item.correctAnswer}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button onClick={handleRetakeQuiz} className='button'>{t('retakeQuiz')}</button>
        </div>
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className='container '>
      <div className='card bg-background'>
        <h1 className='title'>{t('title')}</h1>
        <div className='questionSection'>
          <h2 className='questionNumber'>{t('question')} {currentQuestionIndex + 1} {t('of')} {quizQuestions.length}</h2>
          <p className='questionText'>{currentQuestion.question}</p>
        </div>
        <div className='answersContainer'>
          {currentQuestion.answers.map((answer, index) => {
            const isSelected = userAnswers[currentQuestionIndex] === index;
            return (
              <label key={index} className={isSelected ? 'answerOption answerSelected bg-background' : 'answerOption bg-background'}>
                <input type='radio' name={`q-${currentQuestionIndex}`} checked={isSelected} onChange={() => handleAnswerSelect(index)} className='radioButton' />
                {answer}
              </label>
            );
          })}
        </div>
        <div className='navButtons'>
          {currentQuestionIndex > 0 ? (
            <button onClick={handleBack} disabled={currentQuestionIndex === 0} className='button'>{t('back')}</button>
          ) : (<div />)}
          {currentQuestionIndex < quizQuestions.length - 1 ? (
            <button onClick={handleNext} className='button' style={userAnswers[currentQuestionIndex] === null ? { opacity: 0.5 } : {}} disabled={userAnswers[currentQuestionIndex] === null}>{t('next')}</button>
          ) : (
            <button onClick={handleSubmit} className='button'>{t('submit')}</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
