import { Image, StyleSheet, Text, View,TextInput } from 'react-native';
import icon from '../assets/favicon.png';
import { Link } from 'expo-router';
import ThemedView from '../Component/ThemedView';
import ThemedText from '../Component/ThemedText';


const index=()=>{
  return (
    <ThemedView style={styles.container}>
        <Image source={icon} style={styles.img} />
         <ThemedText style={{marginTop:10,fontSize:20 ,marginBottom:10}} >Welcome</ThemedText>
      
         
      
     
      
      <Link href="/Login">
        <ThemedText>Login</ThemedText>
      </Link>
      
    </ThemedView>
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
    color:'#eee'
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  img:{

  }
  
});
export default index;