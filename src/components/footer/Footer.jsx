import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image height={50} width={50} src="/logo.jpg" alt="vedant yetekar" />
          <h1 className={styles.logoText}>vedantsays</h1>
        </div>
        <p className={styles.desc}>
          vedantsays is crafted by my hands, this space is a culmination of
          insightful tech discussions and problem-solving journeys tailored
          exclusively for you.
        </p>
        <div className={styles.icons}>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/vedant-yetekar-497949218"
          >
            <Image src="/linkedin.png" alt="linkedin" width={18} height={18} />
          </Link>
          <Link
            style={{ display: "var(--hideLightModeLogo)" }}
            target="_blank"
            href="https://github.com/uuvedant4"
          >
            <Image src="/github.png" alt="github" width={18} height={18} />
          </Link>
          <Link
            style={{ display: "var(--hideDarkModeLogo)" }}
            target="_blank"
            href="https://github.com/uuvedant4"
          >
            <Image src="/github2.png" alt="github" width={18} height={18} />
          </Link>
          <Link target="_blank" href="https://twitter.com/__vedant4">
            <Image src="/twitter.png" alt="twitter" width={18} height={18} />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/vedantsays/">
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
          <Link href="/blog?cat=style">Blog</Link>
          <Link href="/">About</Link>
          <Link href="mailto:uuvedant4@gmail.com">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blog?cat=style">Style</Link>
          <Link href="/blog?cat=fashion">Fashion</Link>
          <Link href="/blog?cat=coding">Coding</Link>
          <Link href="/blog?cat=travel">Travel</Link>
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
          <Link target="_blank" href="https://www.instagram.com/vedantsays/">
            Instagram
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
