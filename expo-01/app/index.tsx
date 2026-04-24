import { Image, Text, View, StyleSheet} from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "beige"
      }}
    >
      <Text>Oi! Meu nome é Bento, tenho 21 anos e atualmente curso Ciência da Computação na UNICAP. 
        Gosto de jogar diversos tipos de jogos, especialmente com minha namorada Lorenna, 
        amo ver filmes, séries e amo meus gatinhos, Timbó e Tata.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

})