import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import api from './src/services/api'
import Filmes from './src/Filmes';

export default function App() {

  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function LoadingFilmes() {
      const response = await api.get('/r-api/?api=filmes')
      setFilmes(response.data)
      setLoading(false)
    }

    LoadingFilmes()

  }, [])

  if (loading) {
    return (
      <View style={{backgroundColor: '#000', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color="#FFF" size={45} />
        <Text style={{fontSize: 25, color: '#FFF'}}>Carregando...</Text>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => String(item.id)}
          data={filmes}
          renderItem={({ item }) => <Filmes data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fffd',
  }
});
