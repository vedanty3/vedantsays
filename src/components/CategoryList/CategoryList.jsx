import Link from "next/link";
import styles from "./categoryList.module.css";
import Image from "next/image";

const getData = async () => {
  const response = await fetch("${process.env.NEXTAUTH_URL}/api/categories", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed");
  }
  return response.json();
};

async function CategoryList() {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            key={item._id}
            className={`${styles.category} ${styles[item.slug]}`}
            href={`/blog?cat=${item.slug}`}
          >
            {item.img && (
              <Image
                width={32}
                height={32}
                className={styles.image}
                src={item.img}
                alt=""
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
