'use client'

import { words } from '@/app/projects/typing-test/words'
import '@/app/projects/typing-test/typing-test.css'
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

export function TypingTest() {
    const ONE_MINUTE = 60;
    const [longText, setLongText] = useState('');
    const [totalTyped, setTotalTyped] = useState('');
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [errors, setErrors] = useState(0);
    const [timeLeft, setTimeLeft] = useState(ONE_MINUTE);
    const [typingStarted, setTypingStarted] = useState(false);
    const [finalScore, setFinalScore] = useState<number>(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const textContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      setLongText(generateLongText());
  
      return () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
      };
    }, []);
  
    function generateLongText() {
      const shuffledWords = shuffleArray([...words]);
      return shuffledWords.join(' ');
    };
  
    const shuffleArray = (array: string[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
  
    const startTimer = () => {
      if (!typingStarted) {
        setTypingStarted(true);
        timerRef.current = setInterval(() => {
          setTimeLeft((prevTimeLeft) => {
            if (prevTimeLeft <= 1) {
              if (timerRef.current) {
                clearInterval(timerRef.current);
              }
              return 0;
            }
            return prevTimeLeft - 1;
          });
        }, 1000);
      }
    };

    function calculateWPM() {
        const wordsTyped = totalTyped.trim().split(/\s+/).length;
        debugger;
        const baseWPM = Math.round(wordsTyped / ONE_MINUTE) * 60;
        const adjustedWPM = Math.max(baseWPM - errors, 0);
        return adjustedWPM
    }
  
    const resetTest = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      setTimeLeft(ONE_MINUTE);
      setFinalScore(0);
      setTotalTyped('');
      setCurrentCharIndex(0);
      setErrors(0);
      setTypingStarted(false);
      setLongText(generateLongText());
    };
  
    const handleKeyDown = (e: KeyboardEvent) => {
      if (finalScore !== 0) return;
      startTimer();

      if (e.key === 'Backspace') {
        setTotalTyped((prev) => prev.slice(0, -1));  // Remove last character
        setCurrentCharIndex((prev) => Math.max(prev - 1, 0));  // Move the index back
      } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
        setTotalTyped((prev) => {
            return    prev + e.key
        });

        setCurrentCharIndex((prev) => prev + 1);  // Move the index forward
      }

      updateErrors();
    };
  
    const updateErrors = () => {
      const textArray = longText.split('');
      let newErrors = 0;
      for (let i = 0; i < totalTyped.length; i++) {
        if (totalTyped[i] !== textArray[i]) {
          newErrors++;
        }
      }
      setErrors(newErrors);
    };

    useEffect(() => {
        if (timeLeft === 0 && totalTyped !== '') {
          setFinalScore(calculateWPM());  // Calculate WPM when the timer hits 0 and text is typed
        }
      }, [totalTyped, timeLeft, calculateWPM]);
  
    useEffect(() => {
        const keyDownListener = (e: KeyboardEvent) => handleKeyDown(e);
        if (typeof window !== 'undefined') {
          document.addEventListener('keydown', keyDownListener);
        }

        if (totalTyped.length >= 20 && textContainerRef.current) {
            const textContainer = textContainerRef.current;
            const scrollAmount = (totalTyped.length - 20) * 14; 
            textContainer.scrollLeft = scrollAmount;
          }

        return () => {
          if (typeof window !== 'undefined') {
            document.removeEventListener('keydown', keyDownListener);
          }
        };
      }, [totalTyped]);

    return (
      <div className="typing-test-container">
        <h1>Typing Test</h1>
        {finalScore === 0 ? (
          <>
            <div id="text-container" ref={textContainerRef} >
              {longText.split('').map((char, index) => (
                <span
                  key={index}
                  className={
                    index < currentCharIndex
                      ? totalTyped[index] === char
                        ? 'correct'
                        : 'error'
                      : ''
                  }
                >
                  {char}
                </span>
              ))}
            </div>
            <div id="timer">Time Left: {timeLeft}s</div>
          </>
        ) : (
          <div id="final-score">Final Words Per Minute: {finalScore}</div>
        )}
        {timeLeft === 0 &&<button type="button" id="try-again" onClick={resetTest}>
          Try Again
        </button> }
      </div>
    );
}

export default dynamic(() => Promise.resolve(TypingTest), { ssr: false });
