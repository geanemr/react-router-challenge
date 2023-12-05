import React from "react";
import styles from "./Produtos.module.css";
import { Link } from "react-router-dom";
import Head from "../Head/Head";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((r) => r.json())
      .then((json) => setProdutos(json));
  }, []);
  console.log(produtos);
  if (produtos === null) {
    return null;
  }
  return (
    <section className={styles.produtos + ' animeLeft'}>
      <Head 
       title="Ranek"
       description="Descrição do site Ranek"
      />
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <h1 className={styles.nome}>{produto.nome}</h1>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
        </Link>
      ))}
    </section>
  );
};
export default Produtos;
