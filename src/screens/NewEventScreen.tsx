import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Checkbox } from "expo-checkbox";
import { useState } from "react";
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { RootStackParamList } from "../../app/(tabs)/index";

type NavProp = StackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<NavProp>();
  const [isChecked, setChecked] = useState(false);
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState(new Date());
  const [show, setShow] = useState(true);
  const [mode, setMode] = useState("date");

  const onChange = (e: any, selectedDate: any) => {
    setDate(selectedDate);
    setShow(false);
  };

  const showMode = (modeToShow: any) => {
    setShow(true);
    setMode(modeToShow);
  };

  return (
    <View style={styles.all}>
      <View style={styles.main}>
        <View style={styles.topo}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Initial")}
            style={{ alignSelf: "center" }}
          >
            <Text
              style={{
                fontWeight: 600,
                color: "rgba(0, 0, 0, 0.6)",
              }}
            >
              &lt; Voltar
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: 800,
              color: "rgba(0, 0, 0, 0.6)",
              fontSize: 20,
            }}
          >
            Novo Evento
          </Text>
          <TouchableOpacity style={{ alignSelf: "center" }}>
            <Text
              style={{
                fontWeight: 600,
                color: "rgba(0, 0, 0, 0.6)",
              }}
            >
              Adicionar
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TextInput
            style={{
              borderColor: "rgba(0, 0, 0, 0.2)",
              borderBottomWidth: 1,
              padding: 4,
            }}
            placeholder="Título"
            placeholderTextColor={"rgba(0,0,0, 0.5)"}
          />
          <TextInput
            style={{
              padding: 4,
            }}
            placeholder="Descrição"
            multiline={true}
            numberOfLines={4}
            placeholderTextColor={"rgba(0,0,0, 0.5)"}
            textAlignVertical="top"
          />
        </View>
        {/*  */}

        <View style={styles.dataHora}>
          {Platform.OS === "android" ||
            (Platform.OS === "ios" && show && (
              <TouchableOpacity onPress={() => showMode("date")}>
                <TextInput
                  style={styles.inputDataHora}
                  placeholder="Data"
                  placeholderTextColor={"rgba(0,0,0, 0.5)"}
                  editable={false}
                />
                <DateTimePicker
                  value={date}
                  // mode={mode}
                  is24Hour={true}
                  onChange={onChange}
                />
              </TouchableOpacity>
            ))}

          {Platform.OS === "android" ||
            (Platform.OS === "ios" && show && (
              <TouchableOpacity onPress={() => showMode("time")}>
                <TextInput
                  style={styles.inputDataHora}
                  placeholder="Hora"
                  placeholderTextColor={"rgba(0,0,0, 0.5)"}
                  editable={false}
                />
                <DateTimePicker
                  value={hour}
                  // mode={mode}
                  is24Hour={true}
                  onChange={onChange}
                />
              </TouchableOpacity>
            ))}

          {Platform.OS === "web" && show && (
            <TextInput
              style={styles.inputDataHora}
              placeholder="Data"
              placeholderTextColor={"rgba(0,0,0, 0.5)"}
              editable={false}
            />
          )}

          {Platform.OS === "web" && show && (
            <TextInput
              style={styles.inputDataHora}
              placeholder="Hora"
              placeholderTextColor={"rgba(0,0,0, 0.5)"}
              editable={false}
            />
          )}
        </View>

        {/*  */}
        <TouchableOpacity
          style={[
            styles.inputDataHora,
            {
              margin: 10,
              opacity: 0.5,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            },
          ]}
        >
          <Text>Localização</Text>
          <Text>&gt;</Text>
        </TouchableOpacity>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Checkbox
            style={styles.checkBox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#000000ff" : undefined}
          />
          <Text
            style={{
              opacity: 0.6,
              fontWeight: 600,
            }}
          >
            Notificar?
          </Text>
        </View>

        <View style={styles.container}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Checkbox
              style={styles.checkBox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#000000ff" : undefined}
            />
            <Text
              style={{
                opacity: 0.6,
                fontWeight: 600,
              }}
            >
              Repetir
            </Text>
          </View>
          <View
            style={[
              styles.container,
              {
                backgroundColor: "#FFFFFF",
              },
            ]}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Checkbox
                style={styles.checkBox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#000000ff" : undefined}
              />
              <Text
                style={{
                  opacity: 0.6,
                  fontWeight: 600,
                }}
              >
                Diariamente
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Checkbox
                style={styles.checkBox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#000000ff" : undefined}
              />
              <Text
                style={{
                  opacity: 0.6,
                  fontWeight: 600,
                }}
              >
                Semanalmente
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Checkbox
                style={styles.checkBox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#000000ff" : undefined}
              />
              <Text
                style={{
                  opacity: 0.6,
                  fontWeight: 600,
                }}
              >
                Mensalmente
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginLeft: 13,
              marginRight: 13,
            }}
          >
            <Text
              style={{
                opacity: 0.6,
                fontWeight: 600,
              }}
            >
              Convidados
            </Text>
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/plus.png")}
                style={[
                  styles.iconesRodape,
                  {
                    width: 30,
                  },
                ]}
                resizeMode="contain"
              ></Image>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.container,
              {
                backgroundColor: "#FFFFFF",
              },
            ]}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  opacity: 0.6,
                  fontWeight: 600,
                }}
              >
                Convidado 1
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    opacity: 0.6,
                    fontSize: 20,
                    fontWeight: 600,
                  }}
                >
                  -
                </Text>
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
  topo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 7,
  },
  container: {
    backgroundColor: "#D9D9D9",
    boxSizing: "border-box",
    margin: 10,
    padding: 12,
    borderRadius: 12,
  },
  dataHora: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
  },
  inputDataHora: {
    borderRadius: 12,
    padding: 10,
    margin: 5,
    backgroundColor: "#D9D9D9",
  },
  checkBox: {
    margin: 5,
    marginLeft: 12,
  },

  main: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#EEECEC",
    width: "100%",
    height: "100%",
    fontFamily: "Arial",
    paddingBottom: 57,
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
