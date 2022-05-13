import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={style.backgroundStyle}>
      <Feather name="search" style={style.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={style.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
      ></TextInput>
    </View>
  );
};

const style = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    marginHorizontal: 15,
    borderRadius: 5,
    flexDirection: 'row',
    marginBottom: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
