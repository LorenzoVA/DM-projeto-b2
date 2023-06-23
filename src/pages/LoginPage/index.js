import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./styles"
import { Link } from "@react-navigation/native";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export default function LoginPage(){

    const { signIn } = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <Image source={require ('../../assets/imgs/logo.png')} style={styles.imgLogo}/>
            <TextInput style={styles.input} placeholder="email" />
            <TextInput style={styles.input} placeholder="senha" />
            <TouchableOpacity style={styles.btnLogin} onPress={() => signIn()}>
                <Text>Login</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: "RegisterPage"}}>Registre-se</Link>
                <Link to={{screen: "ForgetPasswordPage"}}>Esqueceu a senha?</Link>
            </View>
        </View>
    )
}