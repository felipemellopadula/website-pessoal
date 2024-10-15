// Header.tsx
import { useState } from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <p className={styles.logo}></p>
          <button className={styles.menuButton} onClick={toggleMenu}>
            <div className={styles.burgerMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <>
          <div className={styles.overlay} onClick={toggleMenu}></div>
          <div
            className={`${styles.sideMenu} ${isMenuOpen ? styles.open : ""}`}
          >
            <div className={styles.menuHeader}>
              <h2>Menu</h2>
              <button className={styles.closeButton} onClick={toggleMenu}>
                ×
              </button>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#quem-e-o-felipe">Quem é o Felipe</a>
                </li>
                <li>
                  <a href="#direcao-de-arte">Direção de Arte</a>
                </li>
                <li>
                  <a href="#redacao">Redação</a>
                </li>
                <li>
                  <a href="#web">Web</a>
                </li>
                <li>
                  <a href="#contato">Contato</a>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
};
