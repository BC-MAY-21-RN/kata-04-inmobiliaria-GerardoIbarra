import React from 'react'
import {View,Text,Image, ImageBackground,ScrollView} from 'react-native';
import {styles} from './stayled'

const Home = ({ home }) => {
    //console.log(home) 
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container2}>  
                <Text style={styles.text}>{home.name}</Text>
                <View>
                    <Image source={{uri:'https://cdn-icons.flaticon.com/png/512/3421/premium/3421853.png?token=exp=1640119671~hmac=49d8b3811b61f69002e81da93f71b4cb'}}></Image>
                    <Text style={styles.titulo}>{home.ubicacion}</Text>
                   <Text style={styles.palabras}>Camas: <Text>{home.camas} 
                   <Text> Baños: <Text>{home.baños}</Text></Text>
                   </Text></Text>
                   <Text style={styles.palabras}>Longitude: <Text>{home.longitude}
                   <Text> Precio: <Text>{home.precio}</Text></Text>
                   </Text></Text>
                   
                </View>
                <View style={styles.Imagen}>
                    <Image source={home.imge}></Image>
                </View>
            </ScrollView>     
        </View>   
    )
}

export default Home;   
