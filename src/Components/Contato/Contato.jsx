import React from "react";
import styles from "./Contato.module.css";
import foto from "../../image/contato.jpg";
import Head from "../Head/Head";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato"/>
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>email@example.com</li>
          <li>9999-9999</li>
          <li>Rua Ana da Silva, 999</li>
        </ul>
      </div>
    </section>
  );
};
export default Contato;
