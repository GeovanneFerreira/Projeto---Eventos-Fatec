import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { RootStackParamList } from "../../app/(tabs)/index";

type NavProp = StackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<NavProp>();

  return (
    <View style={styles.all}>
      <View style={styles.main}>
        <View style={styles.topo}>
          <TextInput style={styles.pesquisa} placeholder="Buscar"></TextInput>
        </View>

        <View style={styles.container}>
          <View>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.texto}>Hoje</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.texto}>Programados</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.texto}>Todos</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.texto}>Sinalizados</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.subtitulo}>Minhas Listas</Text>

        <View style={styles.listas}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View style={styles.itemLista}>
              <View style={styles.iconeTexto}>
                <Image
                  source={require("../../assets/images/lista.png")}
                  style={styles.icones}
                  resizeMode="contain"
                />
                <Text style={styles.textoLista}>Lembretes</Text>
              </View>
              <Text style={styles.textoLista}>2</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.linha}></View>

          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View style={styles.itemLista}>
              <View style={styles.iconeTexto}>
                <Image
                  source={require("../../assets/images/estrela.png")}
                  style={styles.icones}
                  resizeMode="contain"
                />
                <Text style={styles.textoLista}>Eventos</Text>
              </View>
              <Text style={styles.textoLista}>3</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.linha}></View>

          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View style={styles.itemLista}>
              <View style={styles.iconeTexto}>
                <Image
                  source={require("../../assets/images/abobora.png")}
                  style={styles.icones}
                  resizeMode="contain"
                />
                <Text style={styles.textoLista}>Halloween</Text>
              </View>
              <Text style={styles.textoLista}>1</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.linha}></View>

          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View style={styles.itemLista}>
              <View style={styles.iconeTexto}>
                <Image
                  source={require("../../assets/images/familia.png")}
                  style={styles.icones}
                  resizeMode="contain"
                />
                <Text style={styles.textoLista}>Família</Text>
              </View>
              <Text style={styles.textoLista}>7</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.linha}></View>

          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View style={styles.itemLista}>
              <View style={styles.iconeTexto}>
                <Image
                  source={require("../../assets/images/lixo.png")}
                  style={styles.icones}
                  resizeMode="contain"
                />
                <Text style={styles.textoLista}>Excluídos</Text>
              </View>
              <Text style={styles.textoLista}>0</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("NewEvent")}
        style={{
          position: "absolute",
          justifyContent: "center",
          right: 15,
          bottom: 13,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          padding: 10,
          borderRadius: 50,
          marginTop: 15,
          elevation: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
      >
        <Image
          source={require("../../assets/images/plus.png")}
          style={styles.iconesRodape}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View style={styles.menuRodape}>
        <TouchableOpacity onPress={() => navigation.navigate("Initial")}>
          <Image
            source={require("../../assets/images/home.png")}
            style={styles.iconesRodape}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View style={styles.linhaHorizontal}></View>

        <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
          <Image
            source={require("../../assets/images/calendario.png")}
            style={styles.iconesRodape}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View style={styles.linhaHorizontal}></View>

        <TouchableOpacity
        onPress={() => navigation.navigate("Events")}
        >
          <Image
            source={require("../../assets/images/historico.png")}
            style={styles.iconesRodape}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View style={styles.linhaHorizontal}></View>

        <TouchableOpacity>
          <Image
            source={require("../../assets/images/perfil.png")}
            style={styles.iconesRodape}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#EEECEC",
    width: "100%",
    height: "100%",
    paddingBottom: 15,
  },

  topo: {},

  pesquisa: {
    backgroundColor: "rgba(0,0,0, 0.4)",
    color: "rgba(255, 255, 255, 0.8)",
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },

  subtitulo: {
    fontWeight: 900,
    fontSize: 20,
    margin: 10,
    color: "rgba(0,0,0, 0.8)",
  },

  listas: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#989393",
  },

  iconeTexto: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  itemLista: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    alignItems: "center",
  },

  linha: {
    backgroundColor: "rgba(0,0,0, 0.2)",
    height: 1,
  },

  texto: {
    color: "rgba(0,0,0, 0.6)",
    fontWeight: 800,
  },

  textoLista: {
    color: "rgba(0,0,0, 0.6)",
    fontSize: 15,
    fontWeight: 800,
  },

  icones: {
    width: 30,
  },

  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#989393",
    justifyContent: "space-around",
    boxSizing: "border-box",
    margin: 10,
    borderRadius: 10,
  },

  card: {
    width: 180,
    height: 80,
    padding: 30,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },

  cardItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  menuRodape: {
    backgroundColor: "#989393",
    display: "flex",
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-around",
    alignContent: "flex-end",
  },

  linhaHorizontal: {
    backgroundColor: "rgba(0,0,0, 0.2)",
    width: 1,
    margin: 2,
  },

  iconesRodape: {
    width: 35,
    height: 35,
  },

  all: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
