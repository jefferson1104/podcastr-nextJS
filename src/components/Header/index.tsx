import format from 'date-fns/format';
import styles from './styles.module.scss';
import { srLatn } from 'date-fns/locale';

export function Header() {
  const currentDate = format(new Date(), 'EEEEEEE, d MMMM', {locale: srLatn});


  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Palilula Podcast" width={300}/>

      <p>Nove epizode svakog meseca</p>

      <span>{currentDate}</span>
    </header>
  );
}