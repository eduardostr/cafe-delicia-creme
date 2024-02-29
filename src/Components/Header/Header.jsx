import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>Café Delícia</h1>
        <div className={styles.line} />
        <p className='dark-bg'>
          Se você é daqueles que aprecia um café de qualidade, lhe convido a conhecer o Café Delicia
          Creme. Descubra aromas intensos, sabores refinados e uma experiência que desperta os
          sentidos a cada gole. Experimente o nosso café delícia e mergulhe em uma experiência
          irresistível.
        </p>
        <a href='#products' className='btn btn-primary'>
          Conheça
        </a>
      </div>
      <Image src='/leaf1.png' alt='folha' width={320} height={460} className={styles.leaf1} />
      <Image
        src='/coffee.png'
        alt='sementes de café'
        width={260}
        height={260}
        className={styles.coffee}
      />
      <Image src='/leaf2.png' alt='folha' width={400} height={520} className={styles.leaf2} />
      <Image src='/flower.png' alt='flor' width={260} height={260} className={styles.flower} />
    </header>
  );
};

export default Header;
