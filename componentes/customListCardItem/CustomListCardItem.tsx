import { Text, View } from "react-native"
import { styles } from "./styles"

export const CustomListCardItem = () => {
    return(
        <View style={styles.mainContainer} testID="custom-list-card-item-test-id">
            <Text>This is a card</Text>
        </View>
    )
}   