'use client';

import React, { useState } from 'react';
import { radiationQuestionsData } from './radiationQuestionsData';
import { useLocale, useTranslations } from 'next-intl';

const QUESTIONS_PER_CHAPTER = 4;
const ANSWER_LABELS = ['A', 'B', 'C', 'D'];

type Question = {
  question: string;
  answers: string[];
  correctAnswerIndex: number;
};

const Quiz = () => {
  const t = useTranslations('quiz');
  const locale = useLocale();

  const [phase, setPhase] = useState<'welcome' | 'quiz' | 'results'>('welcome');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);

  const loadQuiz = () => {
    const selected: Question[] = [];
    for (let chapter = 1; chapter <= 5; chapter++) {
      const moduleData = radiationQuestionsData[chapter];
      const pool = locale === 'el' ? moduleData.el : moduleData.en;
      const shuffled = [...pool].sort(() => 0.5 - Math.random());
      selected.push(...shuffled.slice(0, QUESTIONS_PER_CHAPTER));
    }
    const final = selected.sort(() => 0.5 - Math.random());
    setQuestions(final);
    setUserAnswers(Array(final.length).fill(null));
    setCurrentIndex(0);
    setPhase('quiz');
  };

  // ── Welcome ─────────────────────────────────────────────────────────────────
  if (phase === 'welcome') {
    return (
      <div className='flex items-center justify-center bg-background px-4 py-6 md:py-12'>
        <div className='w-full max-w-lg'>
          <div className='rounded-2xl border border-border bg-card shadow-sm p-5 md:p-8 text-center'>
            <div className='inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 mb-4'>
              <svg className='w-6 h-6 md:w-8 md:h-8 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
                <path strokeLinecap='round' strokeLinejoin='round' d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z' />
              </svg>
            </div>
            <h1 className='text-xl md:text-2xl font-bold text-foreground mb-2'>
              {t('welcomeTitle')}
            </h1>
            <p className='text-sm text-muted-foreground mb-5 leading-relaxed'>
              {t('welcomeDescription')}
            </p>
            <div className='grid grid-cols-3 gap-2 mb-5'>
              {[
                { value: '20', label: t('statsQuestions') },
                { value: '5', label: t('statsModules') },
                { value: '4', label: t('statsPerModule') },
              ].map(({ value, label }) => (
                <div key={label} className='rounded-xl bg-muted/50 px-2 py-2.5'>
                  <div className='text-xl md:text-2xl font-bold text-primary'>{value}</div>
                  <div className='text-xs text-muted-foreground mt-0.5'>{label}</div>
                </div>
              ))}
            </div>
            <button
              onClick={loadQuiz}
              className='w-full py-2.5 md:py-3 px-6 rounded-xl bg-primary text-primary-foreground font-semibold text-sm md:text-base hover:bg-primary/90 active:scale-[0.98] transition-all'
            >
              {t('startQuiz')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Loading ──────────────────────────────────────────────────────────────────
  if (!questions.length) {
    return (
      <div className='flex items-center justify-center py-10 bg-background'>
        <p className='text-muted-foreground'>{t('loading')}</p>
      </div>
    );
  }

  // ── Results ──────────────────────────────────────────────────────────────────
  if (phase === 'results') {
    let correctCount = 0;
    const wrongAnswersDetail: { question: string; correctAnswer: string; yourAnswer: string }[] = [];

    questions.forEach((q, i) => {
      if (userAnswers[i] === q.correctAnswerIndex) {
        correctCount++;
      } else {
        wrongAnswersDetail.push({
          question: q.question,
          correctAnswer: q.answers[q.correctAnswerIndex],
          yourAnswer: userAnswers[i] !== null ? q.answers[userAnswers[i]!] : t('noAnswer'),
        });
      }
    });

    const pct = Math.round((correctCount / questions.length) * 100);
    const scoreColor = pct >= 70 ? 'text-green-600 dark:text-green-400' : pct >= 50 ? 'text-yellow-600 dark:text-yellow-400' : 'text-destructive';

    return (
      <div className='bg-background px-4 py-4 md:py-10'>
        <div className='max-w-lg mx-auto space-y-4'>
          {/* Score card */}
          <div className='rounded-2xl border border-border bg-card shadow-sm p-6 md:p-8 text-center'>
            <h1 className='text-xl font-bold text-foreground mb-6'>{t('resultsTitle')}</h1>
            <div className={`text-6xl font-bold mb-1 ${scoreColor}`}>{pct}%</div>
            <p className='text-muted-foreground text-sm mb-6'>
              {t('answeredCorrectly', { correct: correctCount, wrong: questions.length - correctCount })}
            </p>
            <div className='w-full bg-muted rounded-full h-2 mb-8'>
              <div
                className={`h-2 rounded-full transition-all ${pct >= 70 ? 'bg-green-500' : pct >= 50 ? 'bg-yellow-500' : 'bg-destructive'}`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <button
              onClick={loadQuiz}
              className='w-full py-3 px-6 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 active:scale-[0.98] transition-all'
            >
              {t('retakeQuiz')}
            </button>
          </div>

          {/* Wrong answers review */}
          {wrongAnswersDetail.length > 0 && (
            <div className='rounded-2xl border border-border bg-card shadow-sm p-6'>
              <h2 className='font-semibold text-foreground mb-4'>{t('reviewIncorrect')}</h2>
              <div className='space-y-4'>
                {wrongAnswersDetail.map((item, index) => (
                  <div key={index} className='rounded-xl border border-border p-4 space-y-2 text-sm'>
                    <p className='font-medium text-foreground'>{item.question}</p>
                    <div className='flex items-start gap-2'>
                      <span className='shrink-0 mt-0.5 w-4 h-4 rounded-full bg-destructive/20 flex items-center justify-center'>
                        <svg className='w-2.5 h-2.5 text-destructive' fill='currentColor' viewBox='0 0 20 20'>
                          <path d='M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z' />
                        </svg>
                      </span>
                      <span className='text-muted-foreground'><strong className='text-foreground'>{t('yourAnswer')}</strong> {item.yourAnswer}</span>
                    </div>
                    <div className='flex items-start gap-2'>
                      <span className='shrink-0 mt-0.5 w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center'>
                        <svg className='w-2.5 h-2.5 text-green-600 dark:text-green-400' fill='currentColor' viewBox='0 0 20 20'>
                          <path fillRule='evenodd' d='M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z' clipRule='evenodd' />
                        </svg>
                      </span>
                      <span className='text-muted-foreground'><strong className='text-foreground'>{t('correctAnswer')}</strong> {item.correctAnswer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── Quiz ─────────────────────────────────────────────────────────────────────
  const currentQuestion = questions[currentIndex];
  const selected = userAnswers[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className='bg-background px-4 pt-4 pb-6 md:pt-8 md:pb-10'>
      <div className='max-w-lg mx-auto'>
        {/* Progress */}
        <div className='mb-4'>
          <div className='flex justify-between items-center mb-2'>
            <span className='text-sm font-medium text-foreground'>
              {t('question')} {currentIndex + 1} <span className='text-muted-foreground font-normal'>{t('of')} {questions.length}</span>
            </span>
            <span className='text-sm text-muted-foreground'>{Math.round(progress)}%</span>
          </div>
          <div className='w-full bg-muted rounded-full h-1.5'>
            <div
              className='bg-primary h-1.5 rounded-full transition-all duration-300'
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className='rounded-2xl border border-border bg-card shadow-sm p-4 md:p-6 mb-3'>
          <p className='text-base font-semibold text-foreground leading-relaxed mb-6'>
            {currentQuestion.question}
          </p>

          <div className='space-y-3'>
            {currentQuestion.answers.map((answer, index) => {
              const isSelected = selected === index;
              return (
                <button
                  key={index}
                  onClick={() => {
                    const updated = [...userAnswers];
                    updated[currentIndex] = index;
                    setUserAnswers(updated);
                  }}
                  className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                    isSelected
                      ? 'border-primary bg-primary/10 text-foreground'
                      : 'border-border bg-background hover:border-primary/50 hover:bg-muted/50 text-foreground'
                  }`}
                >
                  <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border transition-colors ${
                    isSelected
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border text-muted-foreground'
                  }`}>
                    {ANSWER_LABELS[index]}
                  </span>
                  <span className='text-sm leading-snug'>{answer}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className='flex justify-between gap-3'>
          <button
            onClick={() => setCurrentIndex(i => i - 1)}
            disabled={currentIndex === 0}
            className='flex-1 py-3 px-4 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-muted/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all'
          >
            ← {t('back')}
          </button>
          {currentIndex < questions.length - 1 ? (
            <button
              onClick={() => setCurrentIndex(i => i + 1)}
              disabled={selected === null}
              className='flex-1 py-3 px-4 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all'
            >
              {t('next')} →
            </button>
          ) : (
            <button
              onClick={() => setPhase('results')}
              disabled={selected === null}
              className='flex-1 py-3 px-4 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all'
            >
              {t('submit')}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
