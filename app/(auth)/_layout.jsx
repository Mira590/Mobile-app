import { Stack } from "expo-router";


const AuthLayout=()=>{
    return(

        <Stack screenOptions={{
            headerShown: false,
        }}>
        <Stack.Screen name="(auth)" options={{headerShown: false}} />
        <Stack.Screen name="Login" options={{title:"Login"}} />
        <Stack.Screen name="Register" options={{headerShown: false, title:"Register"}} />
        </Stack>
    );
}

export default AuthLayout;