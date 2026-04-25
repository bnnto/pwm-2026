import { Image, Text, View, StyleSheet} from "react-native";
import { useFonts, Poppins_400Regular, Poppins_500Medium} from '@expo-google-fonts/poppins';

export default function MinhaBio() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if(!fontsLoaded){
    return null;
  }

  return (
    <View style={styles.div}>
      <View style={styles.divQuadrado}>
        <Image source={require('../assets/images/foto.jpeg')} style={styles.imagem} />

        <Text style={styles.titulo}>Bento Guilherme Gomes Oliveira</Text>

        <Text style={styles.texto}>Oi! Meu nome é Bento, tenho 21 anos e atualmente curso Ciência da Computação na UNICAP. 
          Gosto de jogar diversos tipos de jogos, especialmente com minha namorada Lorenna, 
          amo ver filmes, séries e amo meus gatinhos, Timbó e Tata.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  div: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f1729"
  },
  divQuadrado: {
    backgroundColor: "#1a2540",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 15,
    margin: 15
  },
  imagem: {
    width: 250,
    height: 200,
    borderRadius: 20,
    overflow: "hidden",
  },
  titulo: {
    color: "#E2E8F0",
    fontFamily: "Poppins_500Medium",
    fontSize: 17
  },
  texto: {
    color: "#E2E8F0",
    fontFamily: "Poppins_400Regular",
    textAlign: "center"
  },
});