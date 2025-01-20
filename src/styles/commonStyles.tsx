import { StyleSheet } from "react-native";
import { Colors } from "@/utils/Constants";



export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
        padding: 0,
        margin: 0
    },
    center:{
        textAlign:'center'
    }
})