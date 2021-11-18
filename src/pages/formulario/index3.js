import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialButtonTransparentHamburger from "../../public/components/MaterialButtonTransparentHamburger";
import MaterialButtonWithVioletText from "../../public/components/MaterialButtonWithVioletText";
import MaterialRadio from "../../public/components/MaterialRadio";
import MaterialToast3 from "../../public/components/MaterialToast3";
import MaterialButtonWithShadow from "../../public/components/MaterialButtonWithShadow";
import MaterialButtonWithShadow1 from "../../public/components/MaterialButtonWithShadow1";
import styles from "./style.js"


function Questionario(props) {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.backNavbar}>
          <MaterialButtonTransparentHamburger
            style={styles.bTNicon}
          ></MaterialButtonTransparentHamburger>
          <View style={styles.bTNsobreRow}>
            <MaterialButtonWithVioletText
              caption="Sobre"
              style={styles.bTNsobre}
            ></MaterialButtonWithVioletText>
            <MaterialButtonWithVioletText
              caption="Formulário"
              style={styles.bTNformulario}
            ></MaterialButtonWithVioletText>
          </View>
        </View>
      </View>
      <View style={styles.q1Stack}>
        <View style={styles.q1}>
          <Text style={styles.textQ1}>
          3. Qualidade de apostilas, livros e textos, quanto a impressão e adequação da informação
          </Text>
          <View style={styles.importanciaQ1}>
            <Text style={styles.textImportanciaQ1}>Nível de Impotância</Text>
            <View style={styles.altaQ1}>
              <View style={styles.rBalta1Row}>
                <MaterialRadio style={styles.rBalta1}></MaterialRadio>
                <Text style={styles.textAlta1}>Alta</Text>
              </View>
            </View>
            <View style={styles.mediaQ1}>
              <View style={styles.rBmedia1Row}>
                <MaterialRadio style={styles.rBmedia1}></MaterialRadio>
                <Text style={styles.textMedia1}>Média</Text>
              </View>
            </View>
            <View style={styles.baixaQ1}>
              <View style={styles.rBbaixa1Row}>
                <MaterialRadio style={styles.rBbaixa1}></MaterialRadio>
                <Text style={styles.textBaixa1}>Baixa</Text>
              </View>
            </View>
          </View>
          <View style={styles.satisfacaoQ1}>
            <Text style={styles.textSatisfacaoQ1}>Nível de Satisfação</Text>
            <View style={styles.otimoQ1}>
              <View style={styles.rBotimo1Row}>
                <MaterialRadio style={styles.rBotimo1}></MaterialRadio>
                <Text style={styles.textOtimo1}>Ótimo</Text>
              </View>
            </View>
            <View style={styles.bomQ1}>
              <View style={styles.rBbom1Row}>
                <MaterialRadio style={styles.rBbom1}></MaterialRadio>
                <Text style={styles.textBom1}>Bom</Text>
              </View>
            </View>
            <View style={styles.regularQ1}>
              <View style={styles.rBregular1Row}>
                <MaterialRadio style={styles.rBregular1}></MaterialRadio>
                <Text style={styles.textRegular1}>Regular</Text>
              </View>
            </View>
            <View style={styles.ruimQ1}>
              <View style={styles.rBruim1Row}>
                <MaterialRadio style={styles.rBruim1}></MaterialRadio>
                <Text style={styles.textRuim1}>Ruim</Text>
              </View>
            </View>
            <View style={styles.aplicaQ1}>
              <View style={styles.rBaplica1Row}>
                <MaterialRadio style={styles.rBaplica1}></MaterialRadio>
                <Text style={styles.textAplica1}>Não se aplica</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonProx}
          // onPress={}
        >
          <Text style={styles.textButtomProx}>Proximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default Questionario;
