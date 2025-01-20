import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'


type TextBoxProps = {
  IconTitle: React.ComponentType<any>;
  IconName: string;
  title: string;
  placeholder: string;
  size: number;
  value: string;
  onChangeText: (text: string) => void;
};

const TextBox: React.FC<TextBoxProps> = ({ IconTitle, IconName, title, placeholder , size , value , onChangeText }) => {
  return (
    <View style={styles.textBoxContainer}>
      <View style={styles.iconContainer}>
        <IconTitle name={IconName} size={size} color="#000" />
      </View>
      <View style={styles.textArea}>
        <Text>{title}</Text>
        <TextInput 
          style={{ borderBottomWidth: 1, borderBottomColor: '#6b6b6b' }} 
          placeholder={placeholder} 
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  )
}

export default TextBox

const styles = StyleSheet.create({
  textBoxContainer: {
    // backgroundColor: '#f1f1f1',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: '#f1f1f1',
    marginBottom: 20
  },
  iconContainer: {
    width: '20%',
  },
  textArea: {
    width: '80%'
  }
})