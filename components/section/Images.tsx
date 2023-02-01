import { View, Text, StyleSheet, FlatList, Image } from "react-native";

interface Props {
    image: {
        item: string,
    },
}

export const Images = ({ image }: any) => {
    return(
        <>
            <Image style={styles.image} source={{ uri: image.item }} />
        </>
    )
}


const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        flexDirection: 'row',
        gap: 10,
    }
})