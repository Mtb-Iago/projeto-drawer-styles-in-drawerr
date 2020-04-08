import React from 'react'

import { View, Text, Linking, ScrollView, Image } from 'react-native';
import styles from './styles';
import * as MailComposer from 'expo-mail-composer';
import { Feather } from '@expo/vector-icons';
import arvore from './assets/arvore.png';


function sendWhatsaap() {
    Linking.openURL(`whatsapp://send?phone=557788162530&text=Vi o App que você desenvolveu, gostaria de entrar em contato para... `);
}
function sendMail() {
    MailComposer.composeAsync({ //manda para o email
        subject: "Desenvovilmento mobile e/ou web - Nybhinghi Technology",
        recipients: ["iagooliveira09@outlook.com"],
        body: "Olá gostaria de conhecer mais o seu trabalho, estive em um App desenvolvido por você:  ",
    })
}
function sendGit() {
    Linking.openURL('http://www.github.com/mtb-iago')
}
function sendLinkedin() {
    Linking.openURL('https://br.linkedin.com/')
}



const Contact = () => {
    return (
        <View style={[styles.container]}>
            <ScrollView>
                <View style={[styles.incident,
                { borderColor: "white", borderWidth: 10, borderRadius: 80 }]}>
                    <Text style={[styles.actionText, { fontSize: 30, textAlign: "center" }]}>Sobre o App</Text>
                    <Text style={{
                        textAlign: "center",
                        padding: "10%",
                        fontWeight: 'bold',
                        color: "white",
                        fontSize: 13,

                    }}>APLICATIVO DESENVOLVIDO POR NYBINGHI TECHNOLOGY.
                </Text>
                    <View style={[styles.header, { width: "50%", paddingLeft: 100, marginBottom: 20, marginTop: -25 }]}>
                        <Image style={{ padding: 20, width: '10%', height: '20%' }} source={arvore} />
                    </View>
                    <Text style={[styles.actionText, { fontSize: 10, textAlign: "center", marginBottom: 50, marginTop: 20 }]}>TERMOS E CONDIÇÕES</Text>
                    <Text style={[styles.actionText, { marginLeft: 20 }]}>Contatos do desenvolvedor:</Text>

                    <Text style={[styles.actionText, { margin: 5, marginLeft: 30 }]} onPress={sendMail}>
                        <Feather size={15} color="#fff" name={"mail"}>
                        </Feather> Email </Text>

                    <Text style={[styles.actionText, { margin: 5, marginLeft: 30 }]} onPress={sendWhatsaap}>
                        <Feather size={15} color="#fff" name={"phone-call"}>
                        </Feather> WhatsApp </Text>

                    <Text style={[styles.actionText, { margin: 5, marginLeft: 30 }]} onPress={sendGit}>
                        <Feather size={15} color="#fff" name={"github"}>
                        </Feather> Github </Text>

                    <Text style={[styles.actionText, { margin: 5, marginLeft: 30 }]} onPress={sendLinkedin}>
                        <Feather size={15} color="#fff" name={"linkedin"}>
                        </Feather> linkedin </Text>



                    <Text style={{ fontSize: 10, textAlign: "center" }}>copyright © 2020 todos os direitos reservados</Text>
                </View>
            </ScrollView>
        </View >
    )
}

export default Contact;
