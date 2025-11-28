import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
            justifyContent: "space-between",
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
            }}
          >
            PERFIL
          </Text>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/editarNew.png")}
              style={[
                styles.iconesRodape,
                {
                  opacity: 0.7,
                },
              ]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 95,
          }}
        >
          <Image
            source={require("../../assets/images/userNew.png")}
            style={{
              alignSelf: "center",
              width: 250,
              height: 250,
            }}
            resizeMode="contain"
          />
        </View>

        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={[
              styles.textPerfil,
              {
                fontSize: 30,
                fontWeight: 700,
              },
            ]}
          >
            Izabela da Silva Santos
          </Text>
          <Text style={styles.textPerfil}>
            <Image
              source={require("../../assets/images/marcador.png")}
              style={styles.icons}
              resizeMode="contain"
            />
            Jales - SP
          </Text>
          <Text style={styles.textPerfil}>
            <Image
              source={require("../../assets/images/email.png")}
              style={styles.icons}
              resizeMode="contain"
            />
            iza.santos@gmail.com
          </Text>
          <Text style={styles.textPerfil}>
            <Image
              source={require("../../assets/images/phone.png")}
              style={styles.icons}
              resizeMode="contain"
            />
            (17)99123-4568
          </Text>
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

  textPerfil: {
    opacity: 0.7,
    margin: 10,
    fontSize: 20,
    fontWeight: 600,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  icons: {
    width: 20,
    height: 20,
    margin: 5
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
