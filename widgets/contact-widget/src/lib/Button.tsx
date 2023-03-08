import { FunctionalComponent } from 'preact';
import styles from './Button.module.scss';

export const Button: FunctionalComponent = ({ children }) => {
  return (
    <a
      className={styles.buttonPrimary}
      // class='button button-primary button-wide-mobile'
      href='#'
    >
      {children}
    </a>
  );
};
