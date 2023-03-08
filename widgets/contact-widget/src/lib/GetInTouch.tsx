import { Button } from './Button';
import styles from './GetInTouch.module.scss';

export const GetInTouch = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ctaInner}>
        <h3 className={styles.sectionTitle}>Still not convinced on buying?</h3>
        <div class='cta-cta'>
          <Button>Get in touch</Button>
        </div>
      </div>
    </div>
  );
};
