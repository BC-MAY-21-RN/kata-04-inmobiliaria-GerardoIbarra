import React,{useState} from 'react'
import {View,Text,Image, ImageBackground,ScrollView, Button, TouchableHighlight} from 'react-native';
import TextWithStyles from './TextWithStyles'
import {styles} from './stayled'

const TOKEN_IMAGE = 'exp=1640119671~hmac=49d8b3811b61f69002e81da93f71b4cb'
const BASE_URI_IMAGE = 'https://cdn-icons.flaticon.com/png/512/3421/premium/3421853.png'
const uriImage = `${BASE_URI_IMAGE}?token=${TOKEN_IMAGE}`
const Imagebed = 'https://cdn-icons-png.flaticon.com/512/2286/2286105.png'
const TOKEN_IMAGEBAT = 'exp=1640822030~hmac=5f1f04754ab679908997106faeed2ff7'
const BASE_URI_IMAGEBAT = 'https://cdn-icons.flaticon.com/png/512/3130/premium/3130213.png'
const uriImagebat = `${BASE_URI_IMAGEBAT}?token=${TOKEN_IMAGEBAT}`
const TOKEN_IMAGELON = 'exp=1640822578~hmac=53657b16bbca4af31d1ab05b98abab10'
const BASE_URI_IMAGELON = 'https://cdn-icons.flaticon.com/png/512/4955/premium/4955923.png'
const uriImagelon = `${BASE_URI_IMAGELON}?token=${TOKEN_IMAGELON}`
const TOKEN_IMAGECOST = 'exp=1640824438~hmac=89ed6b0fb9d052e680c7972c07814ac8'
const BASE_URI_IMAGECOST = 'https://cdn-icons.flaticon.com/png/512/3147/premium/3147479.png'
const uriImagecost = `${BASE_URI_IMAGECOST}?token=${TOKEN_IMAGECOST}`
const TOKEN_IMAGELIKE = 'exp=1640824759~hmac=46fc2d02e956d32246ee0958660dae64'
const BASE_URI_IMAGELIKE = 'https://cdn-icons.flaticon.com/png/512/5736/premium/5736366.png'
const uriImagelike = `${BASE_URI_IMAGELIKE}?token=${TOKEN_IMAGELIKE}`
const uriImagelikecool = 'https://cdn-icons-png.flaticon.com/512/833/833386.png'

const Home = ({ home }) => {
    //console.log(home)                    
    const [stateview, setstateview] = useState(false);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.container2}>
                <Text style={styles.text}>{home.name}</Text>
                
                <View>
                        <Image style={styles.Imagen} source={{uri: uriImage}} />
                        <Image style={styles.Imagenbed} source={{uri: Imagebed}} />
                        <Text style={styles.titulo}>{home.location}</Text>
                        <Image style={styles.Imagenbat} source={{uri: uriImagebat}} />
                        <Image style={styles.Imagenlon} source={{uri: uriImagelon}} />
                        <Image style={styles.ImagenCost} source={{uri: uriImagecost}} />
                </View>
                <TouchableHighlight onPress={()=> setstateview(!stateview)}>
                           <View>
                           {
                            /*here show image when is true */
                                }{stateview?(
                                        <Image style={styles.Imagenlike} source={{uri: uriImagelikecool}} />
                                    ):null
                                }
                                <Image style={styles.Imagenlike} source={{uri: uriImagelike}} />
                           </View>
                </TouchableHighlight>

                <View>
                    <Text style={styles.containerbed}>
                     <TextWithStyles name="Beds"  value={home.beds} />
                    </Text>

                    <Text style={styles.containerbat}>
                    <TextWithStyles name="Bathroom" value={home.bathrom} />
                    </Text>

                    <Text style={styles.containerlon}>
                    <TextWithStyles name="Longitude"  value={home.longitude} />
                    </Text>

                    <Text style={styles.containercost}>
                    <TextWithStyles name="Cost"  value={home.cost} />
                    </Text>
                </View>

                <View>
                <Image style={styles.Imagenhouse} source={{uri: home.image}}></Image>
                </View>
            </ScrollView>     
        </View>   
    )
}

export default Home;   
