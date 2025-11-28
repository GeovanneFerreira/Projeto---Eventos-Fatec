import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { RootStackParamList } from "../../app/(tabs)/index";
import { auth } from "../services/connectionFirebase";

const { width } = Dimensions.get("window");
type NavProp = StackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
    const navigation = useNavigation<NavProp>();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const showMessage = (msg: string, isErr: boolean = false) => {
        setMessage(msg);
        setIsError(isErr);
        setTimeout(() => setMessage(""), 3000);
    };

    const isValidEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleLogin = async () => {
        showMessage("");

        if (!email || !password) {
            showMessage("Preencha todos os campos!", true);
            return;
        }

        if (!isValidEmail(email)) {
            showMessage("Digite um e-mail válido!", true);
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);

            navigation.navigate("Initial");
        } catch (error: any) {
            console.error("Erro Firebase:", error.code, error.message);
            let errorMessage = "Erro ao fazer login. Tente novamente.";
            if (error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password') {
                errorMessage = "E-mail ou senha inválidos.";
            } else if (error.code === 'auth/user-not-found') {
                errorMessage = "Nenhum usuário encontrado com este e-mail.";
            }
            showMessage(errorMessage, true);
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/Logo.png")}
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
                        marginBottom: 30,
                        opacity: 0.5,
                    }}
                >Login</Text>
                <TextInput
                    style={styles.inputText}
                    editable
                    maxLength={40}
                    inputMode="email"
                    placeholder="Email"
                    placeholderTextColor={"rgba(0,0,0, 0.5)"}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.inputText}
                    placeholder="Senha"
                    placeholderTextColor={"rgba(0,0,0, 0.5)"}
                    secureTextEntry={true}
                    editable
                    maxLength={40}
                    value={password}
                    onChangeText={setPassword}
                />

                {message ? (
                    <View style={[styles.messageBox, isError ? styles.errorBox : styles.successBox]}>
                        <Text style={styles.messageText}>{message}</Text>
                    </View>
                ) : null}

                <TouchableOpacity
                    onPress={() => navigation.navigate("Cadastro")}
                    style={{
                        left: -98,
                    }}>
                    <Text
                        style={{
                            color: "#0004FF",
                            marginLeft: 20,
                            fontFamily: "Arial",
                            opacity: 0.5,
                            fontWeight: 600,
                        }}
                    >Cadastrar-se?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
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
        padding: 10,
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