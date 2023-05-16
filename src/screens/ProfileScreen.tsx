import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CircleIcon from '../components/CircleIcon';
import SettingsButton from '../components/buttons/SettingsButton';
import KittenList from '../components/KittenList';
import s from '../assets/styles/globalStyles';
import QuickInfoBoard from '../components/QuickInfoBoard';
import DangerButton from '../components/buttons/DangerButton';

const data = [
    { id: 1, title: 'Element 1' },
    { id: 2, title: 'Element 2' },
    { id: 3, title: 'Element 3' },
    { id: 4, title: 'Element 4' },
    { id: 5, title: 'Element 5' },
    { id: 6, title: 'Element 6' },
    { id: 7, title: 'Element 7' },
    { id: 8, title: 'Element 8' },
    { id: 9, title: 'Element 9' },
    { id: 10, title: 'Element 10' },
    { id: 11, title: 'Element 11' }, 
    { id: 12, title: 'Element 12' },
    { id: 13, title: 'Element 13' },    
  ];
  
  const renderItem = ({ item }) => (
    <ListItem title={item.title} description={`Element ${item.id}`} />
  );

const ProfileScreen = () => {
        return (
            <View style={s.backgroundColor}>
                {/* <HeaderApp /> */}
                <View style={{backgroundColor: "#5db0cd"}}>
                                   
                    <Text style={[s.whiteColor, s.fs36, s.p4]}>Hi John Doe !</Text>
                    {/* <Ionicons name="person-circle-outline" size={100} color="#fff" /> */}
                    <CircleIcon></CircleIcon> { /* mettre en paramètre la couleur #eedbdb */}
                    <SettingsButton></SettingsButton> 
                    {/* <List data={data} renderItem={renderItem} /> */}
                </View>
                <View>
                <QuickInfoBoard credits='1342' activities='1865123' color="#18206F"></QuickInfoBoard>
                    <View style={{ margin: 40 }}>
                        <KittenList data={data} />
                        <DangerButton title="Éditer mes favoris" />
                    </View>
                </View>
            </View>
        );
    }
;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});


export default ProfileScreen;
