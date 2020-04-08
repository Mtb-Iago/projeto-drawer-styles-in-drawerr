import React from 'react';
import { Image, Button, View, TouchableOpacity, Text, Linking, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import styles from './styles';
import { Audio } from 'expo-av';
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';
import logoImg from './assets/img.png';
import radio from './assets/radio.png';
import clube from './assets/HEADER.png';

export default class Dashboards extends React.Component {

    constructor(props) {
        super(props);

        this.playbackObject = new Audio.Sound();

    }
    componentDidMount() {
        Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            staysActiveInBackground: true,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
            playThroughEarpieceAndroid: false
        });
        Audio.setIsEnabledAsync(true)

    }




    btnPlayeClicked = async () => {
        await this.playbackObject.loadAsync({ uri: 'https://app.kshost.com.br/player-ssl/hts01/9994?1585700478626' });
        this.playbackObject.playAsync();




    }
    btnStopPlayeClicked = async () => {
        await this.playbackObject.stopAsync();


    }

    btnReplayPlayeClicked = () => {
        this.playbackObject.replayAsync();


    }



    render() {
        function sendWhatsaap() {
            Linking.openURL(`whatsapp://send?phone=557788224113&text=Olá! estou ligado na programação, `);
        }
        function sendRadio() {
            Linking.openURL('http://app.kshost.com.br/player-barra3/9994/');
        }
        function sendInstagran() {
            Linking.openURL('https://www.instagram.com/invites/contact/?i=zovswgbewddw&utm_content=dh75ony');
        }
        function sendFacebook() {
            Linking.openURL('https://www.facebook.com/rodadesambanaclube');
        }
        function sendClube() {
            Linking.openURL('https://play.google.com/store/apps/details?id=br.com.radiosapp5.clubefm959')
        }
        function sendMail() {
            MailComposer.composeAsync({ //manda para o email
                subject: "Desenvovilmento mobile e/ou web - Nybhinghi Technology",
                recipients: ["iagooliveira09@outlook.com"],
                body: "Olá gostaria de conhecer mais o seu trabalho, estive em um App desenvolvido por você:  ",
            })
        }


        return (

            <View style={styles.container}>
                <StatusBar barStyle="default" />
                <ScrollView>
                    <View style={styles.header}>
                        <Image style={styles.img} source={logoImg} />
                    </View>

                    <View style={[styles.incident, { backgroundColor: 'black', marginTop: 0 }]}>


                        <Text style={[styles.incidentsProperty, { marginTop: 0, textAlign: "center", fontSize: 18 }]}>PROGRAMA RODA DE SAMBA</Text>

                    </View>
                    <View style={[styles.incident, { borderWidth: 15, borderColor: '#fff', marginBottom: 10, backgroundColor: 'black', marginTop: -10 }]}>

                        <View style={[styles.header, { width: "50%", paddingLeft: 5 }]}>
                            <Image style={{ padding: 30, width: '10%', height: '30%' }} source={clube} />
                        </View>

                        <View style={[styles.header, { backgroundColor: "black" }]}>
                            <Image style={[styles.img, { backgroundColor: "black" }]} source={radio} />
                        </View>
                        <View style={[styles.actions, { marginBottom: 20 }]}>

                            <TouchableOpacity style={[styles.action, { height: 90, flexDirection: 'row', width: '30%' }]}
                                onPress={this.btnStopPlayeClicked}>
                                <Feather size={28} color="#fff" name={"pause"} opacity={0.3} >
                                </Feather>

                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.action, { height: 90, flexDirection: 'row', width: '30%' }]}
                                onPress={this.btnPlayeClicked.bind(this)}>
                                <Feather size={28} color="#fff" name={"play"}>
                                </Feather>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.action, { height: 90, flexDirection: 'row', width: '30%' }]}
                                onPress={this.btnReplayPlayeClicked}>
                                <Feather size={28} color="#fff" name={"repeat"}>
                                </Feather>
                            </TouchableOpacity>


                        </View>

                        <Text style={[styles.heroDescription, { textAlign: 'center', marginTop: -10 }]}>Entre em contato:</Text>
                        <View style={styles.actions}>
                            <TouchableOpacity style={[styles.action, { backgroundColor: "#006400", width: '50%', height: 40 }]} onPress={sendWhatsaap}>
                                <Text style={[styles.actionText, { fontSize: 15 }]}>WhatsApp
                                    <Feather name="phone-call" size={15} />
                                </Text>
                            </TouchableOpacity >

                        </View>

                    </View>

                    <View style={styles.contactBox}>

                        <Text style={[styles.heroTitle, { textAlign: 'center' }]}>Todos os sábados!</Text>
                        <Text style={[styles.heroTitle, { textAlign: 'center' }]}>A partir das 10:00</Text>


                    </View>
                    <Text style={[styles.heroTitle, { textAlign: 'center' }]}>Acesse nossas redes sociais</Text>

                    <View style={styles.actions}>
                        <TouchableOpacity //efeito no buttao
                            style={styles.detailsButton}
                            onPress={sendInstagran}>
                            <Feather name="instagram" size={28} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity //efeito no buttao
                            style={styles.detailsButton}
                            onPress={sendFacebook}>
                            <Feather name="facebook" size={28} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity //efeito no buttao
                            style={styles.detailsButton}
                            onPress={sendClube}>
                            <Feather name="music" size={28} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.actions, { paddingHorizontal: 55 }]}>
                        <Text style={[styles.heroTitle, { fontSize: 10, textAlign: 'center', color: '#41403D' }]}>
                            Developed by: </Text>
                        <Text style={[styles.heroTitle, { fontSize: 10, textAlign: 'center', color: '#41403D', textDecorationLine: "underline", fontWeight: 'bold' }]} onPress={sendMail} >Nyabinghi </Text>
                        <Text style={[styles.heroTitle, { fontSize: 10, textAlign: 'center', color: '#41403D' }]}>technology</Text>

                    </View>

                </ScrollView>
            </View>

        );
    }


}

