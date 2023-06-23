import { Link } from "@react-navigation/native";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const baseURL = "https://api.otaviolube.com"

const MAX_WIDTH = Dimensions.get('window').width*0.9;
const MAX_HEIGHT = Dimensions.get('window').height*0.9;

export default function CardFilme({ filme }){
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: baseURL + 
            filme.poster.data.attributes.formats.thumbnail.url}}/>
            <Text style={styles.title}>{filme.titulo}</Text>
            <Text style={styles.sinopse}>{filme.sinopse.length > 200 ? 
            filme.sinopse.substring(0, 200) + "..." : filme.sinopse}</Text>
            <Link to={{screen: "MovieDetailsPage", params: {filme: filme}}}>Saiba mais...</Link>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>Comprar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#87CEFA',
        margin: 15,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: MAX_HEIGHT,
        width: MAX_WIDTH
    },
    image: {
        width: '150px',
        height: '200px',
        borderRadius: 20,
        resizeMode: 'cover',
        marginBottom: 10
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    sinopse: {
        marginBottom: 10,
        fontSize: 14,
        fontStyle: 'italic',
        textAlign : 'justify'
    },
    button: {
        height: 50,
        width: '100%',
        backgroundColor: '#6495ED',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop : 20
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})