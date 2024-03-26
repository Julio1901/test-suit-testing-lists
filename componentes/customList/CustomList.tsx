import { FlatList, Text, View } from "react-native"
import { styles } from "./styles"
import { CustomListCardItem, CustomListItem } from "../customListCardItem/CustomListCardItem"


interface ICustomListProps {
    data: CustomListItem[]
}

export const CustomList : React.FC<ICustomListProps> = ({data}) => {
    return(
        <View style={styles.mainContainer} testID="custom-list-test-id">
            <Text>My custom list</Text>
            <FlatList data={data}
              renderItem={({ item, index}) => <CustomListCardItem item={item}/>}/>
        </View>
    )
}