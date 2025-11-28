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
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: 2,
            marginLeft: 10,
          }}
        >
          <TouchableOpacity>
            <Text
              style={{
                fontWeight: 600,
                color: "rgba(0, 0, 0, 0.6)",
              }}
            >
              &lt;
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: 800,
              color: "rgba(0, 0, 0, 0.6)",
              fontSize: 20,
              marginLeft: 80,
            }}
          >
            CONTROLE DE EVENTOS
          </Text>
        </View>

        <View style={styles.topo}>
          <TextInput style={styles.pesquisa} placeholder="Buscar"></TextInput>
        </View>

        <View style={styles.container}>
          <View>
            <TouchableOpacity>
              <Image
                style={styles.containerImage}
                source={require("../../assets/images/calendarioPreto.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.containerImage}
                source={require("../../assets/images/marcador.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              margin: 15,
            }}
          >
            <Text style={styles.eventText}>Palestra Teatro Municipal</Text>
            <Text style={styles.eventText}>Data: 22/11/2025</Text>
            <Text style={styles.eventText}>Hora: 14:00</Text>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 10,
                marginTop: 45
              }}
            >
              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    backgroundColor: "#49A25D",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                  },
                ]}
              >
                <Image
                    source={require("../../assets/images/correto.png")}
                    style={{
                        width: 30,
                        height: 20
                    }}
                    resizeMode="contain"
                  />
                <Text style={{ color: "#FFFFFF" }}>
                  Check-in
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#4451DD" }]}
              >
                <Text style={{ color: "#FFFFFF" }}>Adicionar Lembrete?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

<View style={styles.container}>
          <View>
            <TouchableOpacity>
              <Image
                style={styles.containerImage}
                source={require("../../assets/images/calendarioPreto.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.containerImage}
                source={require("../../assets/images/marcador.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              margin: 15,
            }}
          >
            <Text style={styles.eventText}>Palestra Teatro Municipal</Text>
            <Text style={styles.eventText}>Data: 22/11/2025</Text>
            <Text style={styles.eventText}>Hora: 14:00</Text>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 10,
                marginTop: 45
              }}
            >
              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    backgroundColor: "#49A25D",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                  },
                ]}
              >
                <Image
                    source={require("../../assets/images/correto.png")}
                    style={{
                        width: 30,
                        height: 20
                    }}
                    resizeMode="contain"
                  />
                <Text style={{ color: "#FFFFFF" }}>
                  Check-in
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#4451DD" }]}
              >
                <Text style={{ color: "#FFFFFF" }}>Adicionar Lembrete?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>

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

        <TouchableOpacity onPress={() => navigation.navigate("Events")}>
          <Image
            source={require("../../assets/images/historico.png")}
            style={styles.iconesRodape}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View style={styles.linhaHorizontal}></View>

        <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
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
    paddingBottom: 140,
  },

  topo: {},

  pesquisa: {
    backgroundColor: "rgba(0,0,0, 0.4)",
    color: "rgba(255, 255, 255, 0.8)",
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },

  container: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    boxSizing: "border-box",
    margin: 10,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    padding: 15,
  },

  containerImage: {
    width: 70,
  },

  eventText: {
    fontSize: 20,
    fontWeight: 800,
    color: "rgba(0, 0, 0, 0.7)",
    margin: 2,
  },

  button: {
    borderRadius: 5,
    padding: 3,
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 140
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
