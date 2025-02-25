import "./style.scss";
import { useState, useEffect } from "react";
import Footer from "../../componentes/footer/Footer";

function Cards({pertence}) {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    const produtosJson = async () => {
      try {
        const response = await fetch("produtos.json");
        const dados = await response.json();
        setProdutos(dados);
      } catch (error) {
        console.log(error);
      }
    };
    produtosJson();
  });

  const separacaoDeProdutos = [];
  for (let classeProduto of produtos) {
    if (`${pertence}` === classeProduto.classe) {
      separacaoDeProdutos.push(classeProduto);
    }
    if (`${pertence}` === '') {
      separacaoDeProdutos.push(classeProduto);

    }
  }

  return (
    <>
    <div className="container">
      {separacaoDeProdutos.map((post, index) => (
        <div key={index} className="container-imagem">
          <img src={post.imagem} alt={post.textoAlternativo} />
          <h2>{post.nome}</h2>
          <a href={post.link} target="_blank">
            comprar
          </a>
        </div>
      ))}
    </div>
     <Footer />
     </>
  );
}
export default Cards;
