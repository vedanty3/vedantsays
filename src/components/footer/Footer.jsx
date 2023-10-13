"use client";

import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image height={50} width={50} src="/logo.jpg" alt="vedant yetekar" />
          <h1 className={styles.logoText}>vedantsays</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum alias
          soluta cumque qui atque in et facilis, nobis repellat repudiandae
          excepturi exercitationem corporis labore neque quasi est, ea
          blanditiis minima omnis! Nisi, quibusdam ipsa!
        </p>
        <div className={styles.icons}>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/vedant-yetekar-497949218"
          >
            <Image src="/linkedin.png" alt="linkedin" width={18} height={18} />
          </Link>
          <Link target="_blank" href="https://github.com/uuvedant4">
            <Image
              src={theme === "dark" ? "/github2.png" : "/github.png"}
              alt="github"
              width={18}
              height={18}
            />
          </Link>
          <Link target="_blank" href="https://twitter.com/__vedant4">
            <Image src="/twitter.png" alt="twitter" width={18} height={18} />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/__vedant6/">
            <Image
              src="/instagram.png"
              alt="instagram"
              width={18}
              height={18}
            />
          </Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link target="_blank" href="https://twitter.com/__vedant4">
            Twitter
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/vedant-yetekar-497949218"
          >
            LinkedIn
          </Link>
          <Link target="_blank" href="https://github.com/uuvedant4">
            GitHub
          </Link>
          <Link target="_blank" href="https://www.instagram.com/__vedant6/">
            Instagram
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
