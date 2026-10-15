import {  View, useColorScheme} from "react-native";
import {Colors} from '../Constant/Colors'

const ThemedView = ({ style, ...props }) => {
  const colorSchema = useColorScheme();

 const theme = Colors[colorSchema ?? 'light'];

  return (
    <View style={[{ backgroundColor: theme.background},style]}  {...props} />
  );
};

export default ThemedView;
