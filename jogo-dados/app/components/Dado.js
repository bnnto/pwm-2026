const imagemDado = [
  'um.svg',
  'dois.svg', 
  'tres.svg', 
  'quatro.svg', 
  'cinco.svg', 
  'seis.svg',
];

export default function Dado({ valor }) {
  return <img src={imagemDado[valor - 1]} />;
}