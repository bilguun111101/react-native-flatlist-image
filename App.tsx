import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Entypo} from '@expo/vector-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Section } from './components';

interface Data {
  brand: string,
  category: string,
  description: string,
  discountPercentage: number,
  id: number,
  images: string[],
  price: number,
  rating: number,
  stock: number,
  thumbnail: string,
  title: string
}

export default function App() {
  const [data, setData] = useState<any[]>();


  useEffect(() => {
    (async() => {
      try {
        const response = await axios.get("https://dummyjson.com/products") 
        setData(response.data.products);
      } catch (error) { console.log(error) }
    })()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        renderItem={({item}) => <Section some_data={item} />}
        keyExtractor={item => item.id}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingTop: 100
  },
  add_section: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});
