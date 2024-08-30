import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyle } from "../../constants/styles";

function Input({ label, inValid, style, textInputConfig }) {
  const inputStyle = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyle.push(styles.inputMultiline);
  }

  if (inValid) {
    inputStyle.push(styles.inValidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, inValid && styles.inValidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyle} {...textInputConfig} />
    </View>
  );
}
export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
    color: GlobalStyle.colors.primary100,
  },
  input: {
    backgroundColor: GlobalStyle.colors.primary100,
    fontSize: 18,
    padding: 6,
    borderRadius: 6,
    color: GlobalStyle.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  inValidLabel: {
    color: GlobalStyle.colors.error500,
  },
  inValidInput: {
    backgroundColor: GlobalStyle.colors.error50,
  },
});
