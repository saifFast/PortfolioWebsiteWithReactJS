import React from "react";

import styles from "./hero.module.css";
import { getImageUrl } from "../../utils";
import heroImage from "../../assets/hero/heroImage.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Saif Khan Hakro</h1>
        <p className={styles.description}>
          I'm a Senior Software Engineer with 5 years of experience in .NET
        </p>
        <a href="mailto:saifkhan666645@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
