
import MaterialRightIconTextbox from "../../public/components/MaterialRightIconTextbox";
import MaterialRightIconTextbox1 from "../../public/components/MaterialRightIconTextbox1";
import MaterialButtonPink from "../../public/components/MaterialButtonPink";
import styles from "./style.js"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");

    const LoginFirebase = () => {
        firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
            let user = userCredential.user;
            navigation.navigate("Questionario")
        })
            .catch((error) => {
                setErrorLogin(true)
                let errorCode = error.code;
                let errorMessage = error.message;
            });
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                navigation.navigate("Questionario", { idUser: user.uid })
            }
        });
    }, []);


    return (

        <View style={styles.container}>
            <View style={styles.back}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "paddingTop" : "height"}
                    style={styles.container}
                >
                    <ImageBackground
                        source={require("../../../assets/assets/images/img4.jpg")}
                        resizeMode="contain"
                        style={styles.back}
                        imageStyle={styles.back_imageStyle}
                    >
                        <Image
                            source={require("../../../assets/assets/images/logo.png")}
                            resizeMode="contain"
                            style={styles.logo}
                        ></Image>

                        <TextInput
                            style={styles.input}
                            placeholder="EMAIL"
                            type="text"
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                        />
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            placeholder="SENHA"
                            type="text"
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                        />

                        {errorLogin === true
                            ?
                            <View style={styles.contentAlert}>
                                <MaterialCommunityIcons

                                    name="alert-circle"
                                    size={24}
                                    color="#bdbdbd"
                                />
                                <Text style={styles.warningAlert}> Email ou senha invalido</Text>
                            </View>
                            :
                            <View />
                        }

                        {email === "" || password === ""
                            ?
                            <TouchableOpacity
                                disabled={true}
                                style={styles.buttonLogin}
                            >
                                <Text style={styles.textButtomLogin}>Login</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity
                                style={styles.buttonLogin}
                                onPress={LoginFirebase}
                            >
                                <Text style={styles.textButtomLogin}>Login</Text>
                            </TouchableOpacity>
                        }
                        <Text style={styles.registration}>
                            Voce não tem cadastro?
                            <Text
                                style={styles.linkSubscribers}
                                onPress={() => navigation.navigate("cadastro")}
                            >
                                subscribe now
                            </Text>
                        </Text>
                        <View style={{ height: 100 }} />

                    </ImageBackground>
                </KeyboardAvoidingView>
            </View>
        </View>
    );
}


