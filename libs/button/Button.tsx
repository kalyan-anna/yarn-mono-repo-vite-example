import React, { PropsWithChildren, useState } from 'react';
import styles from './Button.module.scss';

export const Button: React.FC<PropsWithChildren> = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((counter) => ++counter);
  };

  return (
    <button className={styles.buttonPrimary} onClick={handleClick}>
      {children} {counter}
    </button>
  );
};
