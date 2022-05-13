import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults('');

  const filterResultByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    // <View style={style.container}>
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      ></SearchBar>
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView style={style.containerScroll}>
        <ResultsList
          results={filterResultByPrice('$')}
          title="Cost Efective"
        ></ResultsList>
        <ResultsList
          results={filterResultByPrice('$$')}
          title="Bit Pricier"
        ></ResultsList>
        <ResultsList
          results={filterResultByPrice('$$$')}
          title="Big Spender"
        ></ResultsList>
        <ResultsList
          results={filterResultByPrice('$$$$')}
          title="Bigger Spender"
        ></ResultsList>
      </ScrollView>
    </>
    // </View>
  );
};

const style = StyleSheet.create({});

export default SearchScreen;
