import Image from "next/image";

export default function Home() {
  return (
    <body>
      <div className="quadrado">
        <img src="foto.jpeg" alt="Foto de Bento"></img>
      
        <div className="texto">  
          <h1>Bento Guilherme Gomes Oliveira</h1>

          <p>Oi! Meu nome é Bento, tenho 21 anos e atualmente curso Ciência da Computação na UNICAP. Gosto de jogar diversos tipos de jogos, especialmente com minha namorada Lorenna, amo ver filmes, séries e amo meus gatinhos, Timbó e Tata.</p>
        </div>
      </div>
    </body>
  );
}
