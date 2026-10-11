import { Image, StyleSheet, Text, View,useColorScheme } from 'react-native';
import { Link } from 'expo-router';
import {Colors} from '../Constant/Colors';


const about=()=>{
  const schema=useColorScheme();
  const theme = Colors[schema ?? 'light'];
  return (
    <View style={styles.container,{backgroundColor:theme.background}} >
       
         <Text style={{marginTop:10,fontSize:20 ,}} >Welcome</Text>
      
      <Text style={styles.title}>About Page</Text>
      <Link href="/">Home</Link>
    </View  >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
  },
 title:{
    fontSize:30,
    color:'#eee'    }
  
  
});
export default about;