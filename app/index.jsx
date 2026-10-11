import { Image, StyleSheet, Text, View } from 'react-native';
import icon from '../assets/favicon.png';
import { Link } from 'expo-router';

const index=()=>{
  return (
    <View style={styles.container}>
        <Image source={icon} style={styles.img} />
         <Text style={{marginTop:10,fontSize:20 ,}} >Welcome</Text>
      
      <Text style={styles.title}>Mira jan Najme error</Text>
      <Link href="/about">About Page</Link>
      
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