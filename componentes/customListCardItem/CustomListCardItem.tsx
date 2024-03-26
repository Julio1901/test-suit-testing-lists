import { Text, View } from "react-native"
import { styles } from "./styles"

export interface CustomListItem {
    name: string,
    age: number
}

interface ICustomListCardItemProps {
    item: CustomListItem
}

export const CustomListCardItem : React.FC<ICustomListCardItemProps>= ({item}) => {
    return(
        <View style={styles.mainContainer} testID="custom-list-card-item-test-id">
              <Text >{item.name}</Text>
            <Text>{item.age}</Text>
        </View>
    )
}   