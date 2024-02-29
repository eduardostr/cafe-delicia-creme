import styles from './SocialLinks.module.scss';
import { RiTiktokFill, RiWhatsappFill, RiInstagramLine } from 'react-icons/ri';

const socialLinks = [
  { url: 'https://www.instagram.com/ocafedeliciaof/', component: <RiInstagramLine /> },
  { url: 'https://www.tiktok.com/@cafedcreme', component: <RiTiktokFill /> },
  { url: 'https://wa.link/txefxu', component: <RiWhatsappFill /> },
];

const SocialLinks = () => {
  const renderLinks = socialLinks.map((link, i) => (
    <li key={i}>
      <a href={link.url} target="_blank" rel="noopener noreferrer">{link.component}</a>
    </li>
  ));
  return <ul className={styles.media}>{renderLinks}</ul>;
};

export default SocialLinks;
