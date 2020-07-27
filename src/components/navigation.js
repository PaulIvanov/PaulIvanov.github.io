import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <div className={styles.column}>
        <li className={styles.navigationItem}>
          <Link to="/">Paul Ivanov</Link>
        </li>
      </div>
      <div className={styles.column}>
        <li className={styles.navigationItem}>
          <Link to="/about/">About</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/contact/">Contact</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/">Blog</Link>
        </li>
      </div>
    </ul>
  </nav>
)
