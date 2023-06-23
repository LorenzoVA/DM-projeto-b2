import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./styles"
import { Link } from "@react-navigation/native";

export default function RegisterPage(){
    return(
        <View style={styles.container}>
            <Image source={require ('../../assets/imgs/logo.png')} style={styles.imgLogo}/>
            <TextInput style={styles.input} placeholder="username" />
            <TextInput style={styles.input} placeholder="email" />
            <TextInput style={styles.input} placeholder="senha" />
            <TouchableOpacity style={styles.btnLogin}>
                <Text>Registrar</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: "LoginPage"}}>Voltar para o login</Link>
                <Link to={{screen: "ForgetPasswordPage"}}>Esqueceu a senha?</Link>
            </View>
        </View>
    )
}