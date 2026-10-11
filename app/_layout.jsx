import { StyleSheet, Text, View,useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import {Colors} from '../Constant/Colors'
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
  const schema=useColorScheme();
  console.log('schema',schema);
 
    const theme = Colors[schema ?? 'light'];

  
  return (
<>

    
        <Stack screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.iconColorFocus,
            headerTitleStyle: { fontWeight: 'bold' },
        }}>
            <Stack.Screen name='index' options={{ title: 'Home' }} />
            <Stack.Screen name='about' options={{ title: 'About' }} />
        </Stack>
        </>
        
  );
  
};

const styles = StyleSheet.create({

});

export default RootLayout;