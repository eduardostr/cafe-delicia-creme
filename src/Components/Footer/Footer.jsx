import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <Link href='/policy' legacyBehavior>
          <a>Políticas de Privacidade</a>
        </Link>
        <a>Café Delicia Creme © 2024</a>
        <Link href='/term' legacyBehavior>
          <a>Termos de Uso</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
