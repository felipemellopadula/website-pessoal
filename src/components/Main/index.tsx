import React, { useState, useEffect, useRef } from "react";
import styles from "./Main.module.scss";
import FelipeBg from "../../assets/felipe-rec6_Prancheta 1.png";

export const Main = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } =
        imageRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const moveX = (clientX - centerX) / 25;
      const moveY = (clientY - centerY) / 25;
      setMousePosition({ x: moveX, y: moveY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className={styles.mainContainer}>
      <div className={styles.imageTexts}>
        <div className={styles.imageProfile} ref={imageRef}>
          <img
            src={FelipeBg}
            alt="Foto do Felipe"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 0.2s ease-out",
            }}
          />
        </div>
        <div className={styles.textBtn}>
          <div className={styles.texts}>
            <h4>Olá! Sou o</h4>
            <h1>Felipe Mello Padula.</h1>
            <br />
            <p>Diretor de arte, redator</p>
          </div>
          <div className={styles.btn}>
            <button>Trabalhos</button>
            <button>Contato</button>
          </div>
        </div>
      </div>
    </main>
  );
};
