import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import MaterialButtonTransparentHamburger from "../../public/components/MaterialButtonTransparentHamburger";
import MaterialButtonWithVioletText from "../../public/components/MaterialButtonWithVioletText";
import CupertinoButtonDelete from "../../public/components/CupertinoButtonDelete";
import CupertinoButtonDelete1 from "../../public/components/CupertinoButtonDelete1";
import CupertinoButtonDelete3 from "../../public/components/CupertinoButtonDelete3";
import CupertinoButtonDelete2 from "../../public/components/CupertinoButtonDelete2";
import styles from "./style.js"

function sobre(props) {
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
              onPress={() => navigation.navigate("Formulario")}
            ></MaterialButtonWithVioletText>
          </View>
        </View>
      </View>
      <View style={styles.card1}>
        <View style={styles.cardImage1Stack}>
          <ImageBackground
            source={require("../../../assets/assets/images/img1.jpg")}
            resizeMode="contain"
            style={styles.cardImage1}
            imageStyle={styles.cardImage1_imageStyle}
          >
            <Text style={styles.cardText1}>
              Acessando o formulário, você irá se deparar {"\n"}com uma lista de
              itens relacionados ao colégio, {"\n"}onde poderá opinar sua
              satisfação sobre um {"\n"}determinado tópico e se ele é relevante
              para a {"\n"}instituição.
            </Text>
          </ImageBackground>
          <Text style={styles.cardTitle1}>
            Como é feito o {"\n"}formulário?
          </Text>
        </View>
      </View>
      <View style={styles.card2}>
        <View style={styles.cardImage2Stack}>
          <ImageBackground
            source={require("../../../assets/assets/images/img2.jpg")}
            resizeMode="contain"
            style={styles.cardImage2}
            imageStyle={styles.cardImage2_imageStyle}
          >
            <Text style={styles.cardText2}>
              A Pesquisa de Satisfação é utilizada pela {"\n"}instituição para
              se obter uma análise facilitada {"\n"}de como a qualidade de
              ensino e a organização {"\n"}estrutural do colégio é vista pelos
              alunos.
            </Text>
          </ImageBackground>
          <Text style={styles.cardTitle2}>Para que ele serve?</Text>
        </View>
      </View>
      <View style={styles.card3}>
        <View style={styles.cardImage3Stack}>
          <ImageBackground
            source={require("../../../assets/assets/images/img4.jpg")}
            resizeMode="contain"
            style={styles.cardImage3}
            imageStyle={styles.cardImage3_imageStyle}
          >
            <Text style={styles.cardText3}>
              Contate seu professor para mais informações {"\n"}sobre a
              plataforma!
            </Text>
          </ImageBackground>
          <Text style={styles.cardTitle3}>Alguma dúvida?</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.logoStackColumnRow}>
          <View style={styles.logoStackColumn}>
            <View style={styles.logoStack}>
              <Image
                source={require("../../../assets/assets/images/logo.png")}
                resizeMode="contain"
                style={styles.logo}
              ></Image>
              <Text style={styles.textRedes}>
                Nos siga nas redes socias {"\n"}e fique por dentro das {"\n"}
                novidades.
              </Text>
            </View>
            <View style={styles.iconFacebookStackStack}>
              <View style={styles.iconFacebookStack}>
                <CupertinoButtonDelete
                  iconName="ios-trash"
                  icon="logo-facebook"
                  style={styles.iconFacebook}
                ></CupertinoButtonDelete>
                <CupertinoButtonDelete1
                  iconName="ios-trash"
                  icon="logo-instagram"
                  style={styles.iconInstagram}
                ></CupertinoButtonDelete1>
                <CupertinoButtonDelete3
                  iconName="ios-trash"
                  icon="logo-twitter"
                  style={styles.iconTwitter}
                ></CupertinoButtonDelete3>
              </View>
              <CupertinoButtonDelete2
                iconName="ios-trash"
                icon="logo-linkedin"
                style={styles.iconLinkden}
              ></CupertinoButtonDelete2>
            </View>
          </View>
          <View style={styles.titleFoneColumn}>
            <Text style={styles.titleFone}>Fone:</Text>
            <Text style={styles.textFone}>(19) 3655-2494</Text>
            <Text style={styles.titleEmail}>Email:</Text>
            <Text style={styles.textEmail}>secretariaonline@senai.com.br</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default sobre

