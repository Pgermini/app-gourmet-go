import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

interface IProps {
  title: string;
  placeholder: string;
  iconName: string;
  value: string;
  setValue: (value: string) => void;
}

export const InputAuth = ({
  title,
  iconName,
  placeholder,
  setValue,
  value,
}: IProps) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <View style={styles.contentInput}>
        <TextInput
          onChangeText={setValue}
          value={value}
          placeholder={placeholder}
          style={styles.inputStyle}
        />
        <FontAwesome6
          style={{
            position: "absolute",
            left: 12,
          }}
          name={iconName}
          size={24}
          color="black"
        />
      </View>
    </View>
  );
};
