import React from 'react'
import { Image } from 'react-native';
import { Block, Text, Button } from 'expo-ui-kit';
import { createStackNavigator } from '@react-navigation/stack';
import {
    DrawerItem,
    createDrawerNavigator,
    DrawerContentScrollView

} from '@react-navigation/drawer';
import { Feather, AntDesign } from '@expo/vector-icons';

//import dos screens
import Dashboards from './screens/Dashboards';
import Messages from './screens/Messages';
import Contact from './screens/Contact';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={{
            headerTransparent: true,
            headerTitle: null,
            headerLeft: () => (
                <Button
                    transparent
                    marginHorizontal
                    padding onPress={() => navigation.openDrawer()}>
                    {/*ADD BOTAO MENU*/}
                    <Feather name="menu" size={30} color="red" />
                </Button>
            )
        }}>
            <Stack.Screen name="Dashboards" component={Dashboards} />
            <Stack.Screen name="Messages" component={Messages} />
            <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
    );
};

// Custom drawer menu

const DrawerContent = props => {
    return (
        <DrawerContentScrollView {...props}>
            <Block>
                {/* add avatar*/}
                <Block flex={0.4} margin={90} button>


                    <Image

                        source={require('./assets/menu.png')}

                        resizeMode="center"
                        style={{ borderRadius: 30, height: 60, width: 90 }}
                    />
                    <Text title resizeMode="center"> Menu de opções</Text>
                    <Text size={9}> Nybinghi Technology</Text>
                </Block>
                {/* <DrawerItemList {...props} /> */}
                <DrawerItem
                    label="Home"
                    labelStyle={{ marginLeft: -25, fontSize: 15, fontWeight: 'bold' }}
                    onPress={() => props.navigation.navigate("Dashboards")}
                    icon={() => <AntDesign name="home" color="red" size={25} />}
                />
                <DrawerItem
                    label="Contato do programa"
                    labelStyle={{ marginLeft: -25, fontSize: 15, fontWeight: 'bold' }}
                    onPress={() => props.navigation.navigate("Messages")}
                    icon={() => <AntDesign name="message1" color="red" size={25} />}
                />

                <DrawerItem
                    label="Sobre o App"
                    labelStyle={{ marginLeft: -25, fontSize: 15, fontWeight: 'bold' }}
                    onPress={() => props.navigation.navigate("Contact")}
                    icon={() => <AntDesign name="info" color="red" size={25} />}
                />
            </Block>
        </DrawerContentScrollView>
    );
}

export default () => {
    return (

        <Drawer.Navigator
            drawerType="slide"
            overlayColor="transparent"
            initialRouteName="Dashboards"
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Screens" component={Screens} />


        </Drawer.Navigator>

    )
};



