import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./styles"
import { Link } from "@react-navigation/native";

export default function ForgetPasswordPagePage(){
    return(
        <View style={styles.container}>
            <Image source={require ('../../assets/imgs/logo.png')} style={styles.imgLogo}/>
            <TextInput style={styles.input} placeholder="email" />
            <TouchableOpacity style={styles.btnLogin}>
                <Text>Recuperar</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: "RegisterPage"}}>Registre-se</Link>
                <Link to={{screen: "LoginPage"}}>Voltar para o login</Link>
            </View>
        </View>
    )
}