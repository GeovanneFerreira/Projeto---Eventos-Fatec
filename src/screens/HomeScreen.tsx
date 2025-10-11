import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../app/(tabs)/index";

const { width } = Dimensions.get("window");
type NavProp = StackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
    const navigation = useNavigation<NavProp>();

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Bem-vindo!</Text>
                <Text style={styles.subtitle}>Gerencie seus agendamentos de forma simples e rápida</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Initial")}
                >
                    <Text style={styles.buttonText}>Agendar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: "#0f0f0f", 
        justifyContent: "center", 
        alignItems: "center" 
    },
    card: { 
        width: width * 0.845, 
        padding: 30, 
        borderRadius: 25, 
        backgroundColor: "rgba(255,255,255,0.1)", 
        alignItems: "center" 
    },
    logo: { 
        width: width * 0.3, 
        height: width * 0.3, 
        marginBottom: 20 
    },
    title: { 
        fontSize: 32, 
        fontWeight: "700", 
        color: "#fff", 
        marginBottom: 10, 
        textAlign: "center" 
    },
    subtitle: { 
        fontSize: 16, 
        color: "rgba(255,255,255,0.85)", 
        textAlign: "center", 
        marginBottom: 30, 
        lineHeight: 22 
    },
    button: { 
        backgroundColor: "#FF512F", 
        paddingVertical: 16, 
        paddingHorizontal: 60, 
        borderRadius: 20 },
    buttonText: { 
        color: "#fff", 
        fontSize: 18, 
        fontWeight: "bold", 
        textAlign: "center" 
    },
});