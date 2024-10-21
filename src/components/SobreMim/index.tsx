import styles from "./Sobremim.module.scss";
import imgDesign from "../../assets/line-img.webp";

export const SobreMim: React.FC = () => {
  return (
    <section className={styles.mainSection}>
      <div className={styles.container}>
        <div className={styles.item1}>
          <h2>
            Diretor de Arte, redator e artista 3D. Sou um profissional de
            criação publicitária com mais de 20 anos de experiencia. Sou um
            leitor ávido e um baixista ocasional.
            <span>
              Me interesso por tudo relacionado a artes, música, viagens,
              esportes e gastronomia.
            </span>
          </h2>
        </div>
        <div className={styles.item2}>
          <div>
            <div className={styles.experiencia}>
              <p>+ de 20 Anos de Experiência</p>
            </div>
            <div className={styles.campanhas}>
              <p>Campanhas Publicitárias</p>
            </div>
            <div className={styles.roteiros}>
              <p>Roteiros para Rádio, Tv e Mídias Digitais</p>
            </div>
            <div className={styles.social}>
              <p>Campanhas de Social Media</p>
            </div>
            <div className={styles.web}>
              <p>Websites e 3D</p>
            </div>
          </div>
        </div>
        <div className={styles.item3}>
          <img
            src={imgDesign}
            alt="Desenho de uma Curva e uma Reta. Elementos de Design"
          />
        </div>
        <div className={styles.item4}>
          <p>
            Sempre trabalhei em agências de publicidade e já tive meu próprio
            estúdio, o Hércules 3D Estúdio. Depois de diversas campanhas
            marcantes, percebi que sentia muita falta de estar na criação da
            agência pensando em como resolver o problema dos clientes e tudo
            mais que a profissão envolve.
          </p>
          <button>Baixe meu Currículum</button>
        </div>
      </div>
    </section>
  );
};
