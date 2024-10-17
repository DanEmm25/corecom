import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ActivityIndIcator from './Activities/ActivityIndIcator';
import Button from './Activities/Button';
 import FlatList from './Activities/FlatList';
 import Image from './Activities/Image'; 
 import ImageBackground from './Activities/Background'; 
 import KeyboardAvoidingView from './Activities/KeyboardAvoidingView'; 
import Modal from './Activities/Modal';
import Pressable from './Activities/Pressable';
import RefreshControl from './Activities/RefreshControl';
import ScrollView from './Activities/ScrollView';
import SectionList from './Activities/SectionList';
 import StatusBar from './Activities/StatusBar'; 
import Switch from './Activities/Switch';
 import Text from './Activities/Text'; 
import TextInput from './Activities/TextInput';
import TouchableHighlight from './Activities/TouchableHighlight';
import TouchableOpacity from './Activities/TouchableOpacity';
import TouchableWithoutFeedback from './Activities/TouchableWithoutFeedback';
import Views from './Activities/Views';
import VirtualizedList from './Activities/VirtualizedList';


export default function App() {
  return (
    <View style={styles.container}>
    {/*  <ActivityIndIcator/> */}
    {/* <Button/> */}
    {/* <flatList/> */}
    {/* <Image/> */}
    {/* <ImageBackground/> */}
    {/* <KeyboardAvoidingView/> */}
    {/* <Modal/> */}
    {/* <Pressable/> */}
    {/* <RefreshControl/> */}
    {/* <ScrollView/> */}
    {/* <SectionList/> */}
    {/* <StatusBar/> */}
    {/* <Switch/> */}
    {/* <Text/> */}
    {/* <TextInput/> */}
    {/* <TouchableHighlight/> */}
    {/* <TouchableOpacity/> */}
    {/* <TouchableWithoutFeedback/> */}
    {/* <View/> */}
    {/*  */}
    <VirtualizedList/>

    
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});