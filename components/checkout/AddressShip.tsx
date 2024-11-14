import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Image } from 'expo-image';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
export default function AddressShip() {

  return (
    <View>
      <View style={styles.row}>

        <Feather name="map-pin" size={24} color="black" />
        <Text >AddressShip</Text>
      </View>
      <View style={styles.row}>

        <Text> Rua Gean, 86184
          | Piauí
          | Bianca d'Oeste
          | 40115-545</Text>
        <AntDesign name="rightcircleo" size={24} color="black" />
      </View>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: "https://img.freepik.com/psd-gratuitas/rato-de-computador-isolado-em-fundo-transparente_191095-18067.jpg"
          }}
          contentFit="cover"
        />
        <View style={[styles.column, styles.fixer]}>
          <Text style={styles.mainTitle}>Mouse Para Teclar Com os Amigos</Text>
          <Text style={styles.lightText}>Variacao: Mouse para maos leves</Text>
          <View style={[styles.row, styles.lightText]}>
            <Text> R$20,00</Text>
            <Text>1x</Text>

          </View>
        </View>
      </View>
      <View style={[styles.row, styles.fixer]}>

        <FontAwesome5 name="newspaper" size={24} color="orange" />
        <Text>Cupons da Loja</Text>
        <Text style={styles.lightText}>Selecione ou insira o codigo</Text>
        <AntDesign name="rightcircleo" size={16} color="black" />
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  fixer: {
    width: 180,
  },
  lightText: {
    color: 'grey',
    // margin: 5,
    marginBottom: 5,
    fontSize: 16,
    justifyContent: 'space-between'


  },
  mainTitle: {
    fontWeight: 'bold',
    marginBottom: 5,

  },

  row: {

    flexDirection: "row",
    width: '100%',
    justifyContent: 'flex-start',
    gap: 8
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: '#0553'
  },
  column: {
    flexDirection: "column",
    // width: '100%',
    justifyContent: 'flex-start'
  }
});

