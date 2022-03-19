import React from 'react'
import Image from 'next/image'
import styles from './index.module.css'

interface FooterProps {
  backgroundColor?: string
}
export const Footer: React.FC<FooterProps> = ({ backgroundColor }) => {
  return (
    <footer className="footer" style={{ backgroundColor }}>
      <a
        href="https://github.com/frilansaresverige/frilansaresverige.se/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bidra till sidan genom vår GitHub 👉
        <span className={styles.logo}>
          <Image
            alt="Github Logo"
            src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg"
            width={20}
            height={20}
          />
        </span>
      </a>
    </footer>
  )
}
