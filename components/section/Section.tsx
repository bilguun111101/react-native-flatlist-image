import { View, Text, StyleSheet, FlatList, Image } from "react-native";

interface Props {
    some_data: {
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
}

export const Section = ({ some_data }: Props) => {
    const { category, images } = some_data;
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{ category }</Text>
            <FlatList 
                horizontal
                data={images}
                style={styles.imagesContainer}
                renderItem={(item) => <Image style={styles.image} source={{ uri: item.item }} />}
                keyExtractor={item => item}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
        flexDirection: 'column',
        gap: 10, 
        marginTop: 30
    },
    image: {
        width: 150,
        height: 150,
        flexDirection: 'row',
        gap: 10,
        marginRight: 20
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        paddingHorizontal: 5,
        color: '#FFF',
    },
    imagesContainer: {
        marginTop: 10
    }
})