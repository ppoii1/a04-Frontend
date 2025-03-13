import React from 'react';
import styles from './banner.module.css';
import Image from 'next/image';

const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <Image fill={true} 
        src={"/img/sth.jpg"}
        alt="Event Banner" 
        objectFit='cover'
        priority
      />
      <div className={styles.overlay}>
        <h1 className={styles.heading}>where every event finds its venue</h1>
        <p className={styles.text}>Your perfect venue for events, celebrations, and gatherings.</p>
      </div>
    </div>
  );
};

export default Banner;
