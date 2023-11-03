"use client";

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { data, status } = useSession();

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {status === "unauthenticated" ? (
        <Link className={styles.link} href="/login">
          Login
        </Link>
      ) : (
        <>
          {data?.role === "admin" && (
            <Link className={styles.link} href="/write">
              Write
            </Link>
          )}
          <span className={styles.link} onClick={() => signOut()}>
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link onClick={closeMenu} href="/">
            Homepage
          </Link>
          <Link onClick={closeMenu} href="mailto:uuvedant4@gmail.com">
            Contact
          </Link>
          <Link onClick={closeMenu} href="/">
            About
          </Link>
          {status === "unauthenticated" ? (
            <Link onClick={closeMenu} href="/login">
              Login
            </Link>
          ) : (
            <>
              {data?.role === "admin" && (
                <Link onClick={closeMenu} href="/write">
                  Write
                </Link>
              )}
              <span
                onClick={() => {
                  closeMenu();
                  signOut();
                }}
              >
                Logout
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
