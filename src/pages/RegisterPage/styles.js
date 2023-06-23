import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#87CEFA'
    },
    imgLogo: {
        height: '150px',
        width: '150px',
        marginBottom: 15
    },
    input: {
        border: '1px solid black',
        width: '70%',
        height: 40,
        padding: 5,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#DCDCDC'
    },
    btnLogin: {
        border: '2px solid black',
        width: '70%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#6495ED'
    },
    viewLinks: {
        marginTop: 10,
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-between'
    }
});

export default styles;