import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { RootStackParamList } from "../../app/(tabs)/index";
import { auth, database } from "../services/connectionFirebase";

const { width } = Dimensions.get("window");
type NavProp = StackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
    const navigation = useNavigation<NavProp>();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const isValidEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const showMessage = (msg: string, isErr: boolean = false) => {
        setMessage(msg);
        setIsError(isErr);
        setTimeout(() => setMessage(""), 3000);
    };

    const handleRegister = async () => {
        setMessage("");

        if (!name || !email || !password) {
            showMessage("Preencha todos os campos!", true);
            return;
        }

        if (!isValidEmail(email)) {
            showMessage("Digite um e-mail válido!", true);
            return;
        }

        if (password.length < 6) {
            showMessage("A senha deve ter pelo menos 6 caracteres!", true);
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            if (user) {
                await set(ref(database, 'users/' + user.uid), {
                    uid: user.uid,
                    name: name,
                    email: email,
                    createdAt: new Date().toISOString(),
                }).then(() => {
                    showMessage("Usuário cadastrado com sucesso!", false);

                    setTimeout(() => {
                        navigation.goBack();
                    }, 2000);
                });
            }

        } catch (error: any) {
            showMessage(`Erro ao cadastrar: ${error.message}`, true);
        }
    }

    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/historico.png")}
                style={styles.logo}
                resizeMode="contain"
            />


            <View style={styles.card}>
                <Text
                    style={{
                        color: "rgba(0, 0, 0, 0.8)",
                        fontSize: 40,
                        textAlign: "center",
                        fontFamily: "Arial",
                        fontWeight: 600,
                        marginBottom: 15,
                        opacity: 0.5,
                    }}
                >Cadastro</Text>
                <TextInput
                    style={styles.inputText}
                    editable
                    maxLength={40}
                    placeholder="Nome:"
                    placeholderTextColor={"rgba(0,0,0, 0.5)"}
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.inputText}
                    editable
                    maxLength={40}
                    inputMode="email"
                    placeholder="Email"
                    placeholderTextColor={"rgba(0,0,0, 0.5)"}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.inputText}
                    editable
                    maxLength={40}
                    placeholder="Senha"
                    placeholderTextColor={"rgba(0,0,0, 0.5)"}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />

                {message ? (
                    <View style={[styles.messageBox, isError ? styles.errorBox : styles.successBox]}>
                        <Text style={styles.messageText}>{message}</Text>
                    </View>
                ) : null}

                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        marginTop: 15
                    }}
                >

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleRegister}
                    >
                        <Text style={styles.buttonText}>Cadastro</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEECEC",
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        width: width * 0.845,
        padding: 30,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.5)",
        backgroundColor: "rgba(0, 0, 0,0.2)",
        alignItems: "center",
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    inputText: {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        borderColor: "rgba(0, 0, 0, 0.5)",
        padding: 10,
        margin: 7,
        borderRadius: 12,
        borderWidth: 1,
        width: "90%"
    },
    logo: {
        width: width * 0.3,
        height: width * 0.3,
        marginBottom: 150
    },

        messageBox: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
        marginBottom: 15,
        width: '100%',
        alignItems: 'center',
    },
    errorBox: {
        backgroundColor: '#ff3b3b',
    },
    successBox: {
        backgroundColor: '#4cd964',
    },
    messageText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },


    button: {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        padding: 5,
        margin: 7,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.8)",
        width: "80%"
    },
    buttonText: {
        color: "#rgba(0, 0, 0, 0.5)",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
});