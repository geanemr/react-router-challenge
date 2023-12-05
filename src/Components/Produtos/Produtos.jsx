import React from "react";
import styles from "./Produtos.module.css";

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
    <div className={styles.produtos}>
      {produtos.map((produto) => (
        <div key={produto.id}>
          <h1>{produto.nome}</h1>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
        </div>
      ))}
    </div>
  );
};
export default Produtos;
