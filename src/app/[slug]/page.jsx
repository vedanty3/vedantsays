import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.02.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, minus. Facere iusto sit molestias placeat atque nihil
              ex assumenda, nisi voluptate porro accusantium, dolorem harum
              perspiciatis labore rem laboriosam id. Tenetur accusamus
              voluptates hic quibusdam sit laborum nihil perspiciatis dolores
              magni explicabo vitae repellendus mollitia illum nulla, nemo
              libero consequuntur ullam at enim ipsam, maxime officia dolorum.
            </p>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, minus. Facere iusto sit molestias placeat atque nihil
              ex assumenda, nisi voluptate porro accusantium, dolorem harum
              perspiciatis labore rem laboriosam id. Ts ipsum deleniti aperiam
              consequatur temporibus expedita dicta earum eos tempora, ipsam
              esse quo nesciunt eius blanditiis? Magni ullam repellendus
              explicabo.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, minus. Facere iusto sit molestias placeat atque nihil
              nulla, nemo libero consequuntur ullam at enim ipsam, maxime
              officia dolorum. Delectus odit, cupiditate voluptatum placeat
              atque repellendus aspernatur quam harum cum dolorum, voluptates
              ipsum deleniti aperiam consequatur temporibus expedita dicta earum
              eos tempora, ipsam esse quo nesciunt eius blanditiis? Magni ullam
              repellendus explicabo.
            </p>
          </div>
          <div className={styles.comments}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default SinglePage;
