import ContainerTemplate from '../common/ui/ContainerTemplate';
import './FaqSection.css';
import Rectangle from '@/assets/graphic-elements/Rectangle 15.png';
import SingleChevron from '@/assets/graphic-elements/single-chevron.svg';
import Chevrons from '@/assets/graphic-elements/chevrons.svg';
import Ellipse from '@/assets/graphic-elements/ellipse.svg';
import { useState } from 'react';
import clsx from 'clsx';

type Question = {
  id: number;
  quest: string;
  answer: string;
};

const faqQuestions: Question[] = [
  {
    id: 1,
    quest:
      'Qu’elles sont les principales technologies maitrisées par jeremie-dev ? ',
    answer: 'VueJS, Typescript, React, NestJS',
  },
  {
    id: 2,
    quest: 'Est ce que jeremie-dev s’intègre facilement dans une équipe tech ?',
    answer:
      "Bien sur ! Il est d'ailleurs possible de consulter les recommandations de ses anciens collègues sur Linkedin",
  },
  {
    id: 3,
    quest: 'Est ce que jeremie-dev peut générer des blagues ?',
    answer:
      "Il en connait quelques unes, surtout celle du canniffe... C'est un petit fien...",
  },
  {
    id: 4,
    quest: "Est ce qu'elles sont drôles ?",
    answer: 'Pas toujours',
  },
];

export default function FaqSection() {
  const [openAnswerId, setOpenAnswerId] = useState<number | null>(null);

  const handleShowAnswer = (questionId: number) => {
    setOpenAnswerId((current) => (current === questionId ? null : questionId));
  };

  return (
    <section id="faq">
      <ContainerTemplate size="large">
        <div className="py-20">
          <div className="graphic-element">
            <div className="flex items-center gap-8 w-fit">
              <img src={SingleChevron} className="rotate-270" />
              <img src={Rectangle} className="mx-auto max-w-48" />
              <img src={SingleChevron} className="rotate-90" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center top-0 gap-72">
              <img src={Ellipse} className="rotate-180 max-w-10 opacity-30" />
              <img src={Chevrons} className="max-w-28 opacity-30" />
            </div>
          </div>
          <div className="faq">
            {faqQuestions.map((question) => (
              <ul>
                <li key={question.id}>
                  <div
                    onClick={() => handleShowAnswer(question.id)}
                    className={clsx('question-content', {
                      'question-content--open': question.id === openAnswerId,
                    })}
                  >
                    <img
                      src={SingleChevron}
                      className={clsx('arrow-open-answer', {
                        'rotate-0!': question.id === openAnswerId,
                      })}
                    />
                    <div className="question">{question.quest}</div>
                    <p
                      className={clsx(
                        'text-lg max-h-0 transition-all duration-300 ease-in-out',
                        {
                          'max-h-42!': question.id === openAnswerId,
                        }
                      )}
                    >
                      {question.answer}
                    </p>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </ContainerTemplate>
    </section>
  );
}
