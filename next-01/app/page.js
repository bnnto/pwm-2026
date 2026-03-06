export default function Home() {
  return <div>
    <a href="http://www.google.com.br" target="_blank">Ir para o Google</a>
    <br />
    <a href="#plantas">Ir para a seção plantas</a>
    <hr />
    <br />
    <img src="penguin.png" alt="Penguins legais" width={320} height={200}></img>
    <img src="imagem.jpg" alt="Penguins legais" width={320} height={400}></img>
    <hr />
    <audio src="horse.mp3" controls autoPlay loop>
      Seu navegador não suporta a tag audio.
    </audio>
    <video src="movie.mp4" controls>
      Seu navegador não suporta a tag vídeo.
    </video>
    <hr />
    <strong>Explore aqui as melhores coxinhas do Brasil</strong>
    <br /><br /><b>Coxinhas Loucas</b>
    <br /><u>Coxinhas Legais</u>
    <br /><i>Coxinhas Itálicas</i>
    <pre>Coxinhas         BEM             Distantes.</pre>
    <hr />
    <h1>Lista de plantas silvestres na Amazônia</h1>
    <p>A lista de plantas silvestres da Amazônia inclui todas as espécies endêmicas da
      vegetação da Amazônia. <br /> Segundo Giacometti (1990), é estimada a existência de 800
      espécies vegetais de valor econômico ou social nesta floresta. Elas foram listadas
      abaixo de acordo com a família à qual pertencem.</p>
    <p>A lista de plantas silvestres da Amazônia inclui todas as espécies endêmicas da
      vegetação da Amazônia. <br /> Segundo Giacometti (1990), é estimada a existência de 800
      espécies vegetais de valor econômico ou social nesta floresta. Elas foram listadas
      abaixo de acordo com a família à qual pertencem.</p>
    <p>A lista de plantas silvestres da Amazônia inclui todas as espécies endêmicas da
      vegetação da Amazônia. <br /> Segundo Giacometti (1990), é estimada a existência de 800
      espécies vegetais de valor econômico ou social nesta floresta. Elas foram listadas
      abaixo de acordo com a família à qual pertencem.</p>
    <h2>Bromeliaceae</h2>
    <hr />
    <p>Bromeliaceae Juss. é uma família de monocotiledôneas, que segundo a
      classificação filogenética AGP III (2009) pertence à ordem dos Poales, com plantas
      terrestres, rupícolas ou, principalmente epífitas, possui 3.172 espécies, distribuídas em
      58 gêneros.</p>
    <hr />
    <p id="plantas">Plantas</p>
    <p>Chrysobalanaceae é uma família de plantas angiospérmicas (plantas com flor -
      divisão Magnoliophyta), pertencente à ordem Malpighiales.</p>
    <hr />
    <form action="buscar.jsp" method="POST">
      <input type="text" name="busca"></input>
      <input type="submit" value="Procurar"></input>
    </form>

    <br /><input type="file" name="arquivo" accept="image/*"></input>

  </div>;
}
