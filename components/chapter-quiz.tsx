'use client';

import React, { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { radiationQuestionsData } from '@/app/[locale]/quiz/radiationQuestionsData';

const NUMBER_OF_CHAPTER_QUESTIONS = 7;

type Props = {
  chapter: number;
};

export default function ChapterQuiz({ chapter }: Props) {
  const locale = useLocale();
  const t = useTranslations('chapterQuiz');

  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<
    { question: string; answers: string[]; correctAnswerIndex: number }[]
  >([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const loadQuiz = () => {
    const moduleData = radiationQuestionsData[chapter];
    const pool = locale === 'el' ? moduleData.el : moduleData.en;
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const chosen = shuffled.slice(0, NUMBER_OF_CHAPTER_QUESTIONS);
    setQuestions(chosen);
    setUserAnswers(Array(NUMBER_OF_CHAPTER_QUESTIONS).fill(null));
    setCurrentIndex(0);
    setSubmitted(false);
    setStarted(true);
  };

  const handleRetake = () => {
    loadQuiz();
  };

  if (!started) {
    return (
      <div className="mt-10 rounded-lg border border-border bg-muted/30 p-6">
        <h2 className="text-xl font-bold mb-2">{t('title')}</h2>
        <p className="text-muted-foreground mb-4">{t('description')}</p>
        <button
          onClick={loadQuiz}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          {t('start')}
        </button>
      </div>
    );
  }

  if (submitted) {
    let correct = 0;
    const wrong: { question: string; correctAnswer: string; yourAnswer: string }[] = [];
    questions.forEach((q, i) => {
      if (userAnswers[i] === q.correctAnswerIndex) {
        correct++;
      } else {
        wrong.push({
          question: q.question,
          correctAnswer: q.answers[q.correctAnswerIndex],
          yourAnswer: userAnswers[i] !== null ? q.answers[userAnswers[i]!] : t('noAnswer'),
        });
      }
    });
    const wrongCount = questions.length - correct;

    return (
      <div className="mt-10 rounded-lg border border-border bg-muted/30 p-6">
        <h2 className="text-xl font-bold mb-2">{t('resultsTitle')}</h2>
        <p className="mb-4">{t('answeredCorrectly', { correct, wrong: wrongCount })}</p>
        {wrong.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold mb-2">{t('reviewIncorrect')}</h3>
            <ul className="space-y-3">
              {wrong.map((item, idx) => (
                <li key={idx} className="text-sm border border-border rounded p-3">
                  <p><strong>{t('questionLabel')}</strong> {item.question}</p>
                  <p className="text-destructive"><strong>{t('yourAnswer')}</strong> {item.yourAnswer}</p>
                  <p className="text-green-600 dark:text-green-400"><strong>{t('correctAnswer')}</strong> {item.correctAnswer}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <button
          onClick={handleRetake}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          {t('retake')}
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const selected = userAnswers[currentIndex];

  return (
    <div className="mt-10 rounded-lg border border-border bg-muted/30 p-6">
      <h2 className="text-xl font-bold mb-1">{t('title')}</h2>
      <p className="text-sm text-muted-foreground mb-4">
        {t('question')} {currentIndex + 1} {t('of')} {questions.length}
      </p>
      <p className="font-semibold mb-4">{currentQuestion.question}</p>
      <div className="space-y-2 mb-6">
        {currentQuestion.answers.map((answer, idx) => (
          <label
            key={idx}
            className={`flex items-center gap-3 p-3 rounded border cursor-pointer transition-colors ${
              selected === idx
                ? 'border-primary bg-primary/10'
                : 'border-border hover:bg-muted/50'
            }`}
          >
            <input
              type="radio"
              name={`chapter-q-${currentIndex}`}
              checked={selected === idx}
              onChange={() => {
                const updated = [...userAnswers];
                updated[currentIndex] = idx;
                setUserAnswers(updated);
              }}
              className="accent-primary"
            />
            {answer}
          </label>
        ))}
      </div>
      <div className="flex justify-between">
        {currentIndex > 0 ? (
          <button
            onClick={() => setCurrentIndex(currentIndex - 1)}
            className="px-4 py-2 border border-border rounded-md hover:bg-muted/50 transition-colors"
          >
            {t('back')}
          </button>
        ) : (
          <div />
        )}
        {currentIndex < questions.length - 1 ? (
          <button
            onClick={() => setCurrentIndex(currentIndex + 1)}
            disabled={selected === null}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {t('next')}
          </button>
        ) : (
          <button
            onClick={() => setSubmitted(true)}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            {t('submit')}
          </button>
        )}
      </div>
    </div>
  );
}
