import {Text,  View, useColorScheme} from "react-native";
import {Colors} from '../Constant/Colors'

const ThemedText = ({ style,title=false, ...props }) => {
  const colorSchema = useColorScheme();
  const theme = Colors[colorSchema ?? 'light'];

  const textColor = title ? theme.title : theme.text;

 

  return (
    <Text style={[{ color: textColor }, style]} {...props} />
  );
};

export default ThemedText;
