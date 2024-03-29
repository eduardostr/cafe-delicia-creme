import Stars from '@/UI/Stars';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './Reviews.module.scss';

const reviews = [
  {
    avatar: '/avatar1.png',
    name: 'Clara Barbosa',
    role: 'Fotógrafa',
    stars: 5,
    comment:
      'Eu simplesmente amei o café! A embalagem chegou em ótimo estado e os funcionários são super atenciosos.',
  },
  {
    avatar: '/avatar2.png',
    name: 'João Lucas',
    role: 'Arquiteto',
    stars: 5,
    comment: 'Café de excelência! Sem sombra de dúvidas é o melhor café creme que experimentei.',
  },
  {
    avatar: '/avatar3.png',
    name: 'Heloisa Pimentel',
    role: 'Engenheira Civil',
    stars: 5,
    comment:
      'Adorei esse café! Estou muito satisfeita com o atendimento e show de profissionalismo.',
  },
];

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () =>
    setCurrentReview(
      currentReview === reviews.length - 1 ? 0 : currentReview + 1
    );
  const previousReview = () =>
    setCurrentReview(
      currentReview === 0 ? reviews.length - 1 : currentReview - 1
    );

  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, [currentReview]);

  const { avatar, name, role, stars, comment } = reviews[currentReview];

  return (
    <section id='reviews' className={styles.reviews}>
      <Image
        className={styles.image}
        src='/graos.png'
        alt='graos de cafe'
        width={425}
        height={250}
      />
      <h2 className='title light-bg'>O que falam da gente</h2>
      <div className={styles.review}>
        <button className={styles.previous} onClick={previousReview}>
          &larr;
        </button>
        <Image
          className={styles.avatar}
          src={avatar}
          alt='avatar'
          width={120}
          height={120}
        />
        <h3>{name}</h3>
        <h4>{role}</h4>
        <Stars stars={stars} />
        <p>{comment}</p>
        <button className={styles.next} onClick={nextReview}>
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default Reviews;