import Image from 'next/image';
import styles from './Details.module.scss';

const Details = () => {
  return (
    <section className={styles.details}>
      <div className={styles.roast}>
        <h2>Experimente os diferentes tipos de café</h2>
        <div className={styles.types}>
          <span className={styles.light} />
          <span className={styles.medium} />
          <span className={styles.dark} />
        </div>
      </div>
      <Image src='/coffee2.png' alt='café' width={340} height={225} />
      <div className={styles['card-wrapper']}>
        <div className={styles.card}>
          <h2>Café Delícia Creme</h2>
          <div className={styles.info}>
            <h3>Endereço</h3>
            <h4>Rua Dinah Rodrigues, nº 403 / Lauro de Freitas - BA</h4>
          </div>
          <div className={styles.info}>
            <h3>Funcionameto</h3>
            <h4>
              <span>Segunda a sexta: 09:00 às 17:00</span>
              <span>Sábados: 09:00 às 13:00</span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
