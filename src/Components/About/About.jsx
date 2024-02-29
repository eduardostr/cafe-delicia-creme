import Image from 'next/image';
import styles from './About.module.scss';

const About = () => {
  return (
    <section id='about' className={styles.about}>
      <Image src='/about.png' alt='sobre nós' width={500} height={400} />
      <div className={styles.content}>
        <h2 className='title light-bg'>Conheça mais sobre o café delicia</h2>
        <p>
          Descubra a excelência do Café Delícia, uma opção gourmet que cativa os paladares mais
          exigentes, sendo produzido de forma totalmente artesanal, o Café Delícia Creme oferece uma
          experiência única aos apreciadores dessa bebida.
        </p>
        <p>
          Ao optar pelo Café Delícia Creme, os amantes de café podem desfrutar de uma bebida de alta
          qualidade, feita com ingredientes selecionados e processos artesanais que garantem um
          sabor excepcional. Além disso, sua formulação livre de glúten proporciona uma opção segura
          e deliciosa para aqueles que buscam uma experiência sensorial sem preocupações com
          intolerâncias alimentares.
        </p>
      </div>
    </section>
  );
};

export default About;
