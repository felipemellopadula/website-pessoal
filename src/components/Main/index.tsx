import styles from "./Main.module.scss";
import FelipeBg from "../../assets/felipe-rec6_Prancheta 1.png";

export const Main = () => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.imageTexts}>
        <div className={styles.imageProfile}>
          <img src={FelipeBg} alt="Foto do Felipe" />
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
