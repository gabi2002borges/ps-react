import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 0,
        borderColor: "#000000",
        borderBottomWidth: 0,
        backgroundColor: "rgba(53,50,56,1)" 
    },
    navbar: {
        width: 400,
        height: 94,
        marginTop: 22,
        marginLeft: 0,
    },
    backNavbar: {
        width: 400,
        height: 94,
        backgroundColor: "rgba(194,42,31,1)",
        flexDirection: "row"
    },
    bTNicon: {
        height: 36,
        width: 36,
        marginLeft:350,
        marginTop: 6
    },
    bTNsobre: {
        height: 36,
        width: 90,
        borderWidth: 0,
   },
    bTNformulario: {
        height: 36,
        width: 128,
        borderWidth: 0,
        borderColor: "rgba(255,255,255,1)",
        borderBottomWidth: 1,
        marginLeft: 40

    },
    bTNsobreRow: {
        height: 36,
        flexDirection: "row",
        flex: 1,
        marginLeft:-320,
        marginTop: 47
    },
    q1: {
        top: 30,
        marginLeft: 35,
        width: 313,
        height: 375,
        position: "absolute",
    },
    textQ1: {
        fontFamily: "roboto-regular",
        color:  "rgba(255,255,255,1)",
        lineHeight: 20,
        marginTop: 4,
        fontSize:16,
    },
    importanciaQ1: {
        width: 124,
        height: 18,
        marginTop: 12
    },
    textImportanciaQ1: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        width:126,
    },
    altaQ1: {
        width: 30,
        height: 29,
        flexDirection: "row",
        marginTop: 5
    },
    rBalta1: {
        height: 29,
        width: 30
    },
    textAlta1: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        marginTop: 6
    },
    rBalta1Row: {
        height: 29,
        flexDirection: "row",
        flex: 1,
        marginRight: -25
    },
    mediaQ1: {
        width: 30,
        height: 29,
        flexDirection: "row",
        marginTop: 1
    },
    rBmedia1: {
        height: 29,
        width: 30
    },
    textMedia1: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        marginTop: 6
    },
    rBmedia1Row: {
        height: 29,
        flexDirection: "row",
        flex: 1,
        marginRight: -39
    },
    baixaQ1: {
        width: 30,
        height: 29,
        flexDirection: "row"
    },
    rBbaixa1: {
        height: 29,
        width: 30
    },
    textBaixa1: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        marginTop: 6
    },
    rBbaixa1Row: {
        height: 29,
        flexDirection: "row",
        flex: 1,
        marginRight: -34
    },
    satisfacaoQ1: {
        width: 150,
        height: 18,
        marginTop: 101
    },
    textSatisfacaoQ1: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize:14,
    },
    otimoQ1: {
        width: 30,
        height: 29,
        flexDirection: "row",
        marginTop: 5
    },
    rBotimo1: {
        height: 29,
        width: 30
    },
    textOtimo1: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        marginTop: 6
    },
    rBotimo1Row: {
        height: 29,
        flexDirection: "row",
        flex: 1,
        marginRight: -38
    },
    bomQ1: {
        width: 30,
        height: 29,
        flexDirection: "row"
    },
    rBbom1: {
        height: 29,
        width: 30
    },
    textBom1: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        marginTop: 6
    },
    rBbom1Row: {
        height: 29,
        flexDirection: "row",
        flex: 1,
        marginRight: -29
    },
    regularQ1: {
        width: 30,
        height: 29,
        flexDirection: "row"
    },
    rBregular1: {
        height: 29,
        width: 30
    },
    textRegular1: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        marginTop: 6
    },
    rBregular1Row: {
        height: 29,
        flexDirection: "row",
        flex: 1,
        marginRight: -48
    },
    ruimQ1: {
        width: 30,
        height: 29,
        flexDirection: "row",
        marginTop: 1
    },
    rBruim1: {
        height: 29,
        width: 30
    },
    textRuim1: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        marginTop: 6
    },
    rBruim1Row: {
        height: 29,
        flexDirection: "row",
        flex: 1,
        marginRight: -33
    },
    aplicaQ1: {
        width: 30,
        height: 29,
        flexDirection: "row"
    },
    rBaplica1: {
        height: 29,
        width: 30
    },
    textAplica1: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        marginTop: 6
    },
    rBaplica1Row: {
        height: 29,
        flexDirection: "row",
        flex: 1,
        marginRight: -84
    },
    
    materialButtonWithShadow: {
        height: 36,
        width: 100,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,1)",
        marginTop: -1
    },
    materialButtonWithShadow1: {
        height: 36,
        width: 100,
        borderRadius: 5,
        marginLeft: 16,
        marginTop: -1
    },
    materialButtonWithShadowRow: {
        height: 36,
        flexDirection: "row",
        marginTop: 23,
        marginLeft: 73,
        marginRight: 71
    },

    buttonProx: {
        width: 150,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#C22A1F",
        borderRadius: 5,
        marginTop:450,
        marginLeft:230,
      },
    
    textButtomProx: {
        color: "#ffffff",
    },
});

export default styles
