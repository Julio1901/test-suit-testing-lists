import { FlatList, Text, View } from "react-native"
import { styles } from "./styles"
import { CustomListCardItem } from "../customListCardItem/CustomListCardItem"

export const CustomList : React.FC = () => {


    const listData = [
        {        
            name: 'Julio',
            age: 27
        },
        {        
            name: 'Stark',
            age: 42
        },
        {        
            name: 'Samuel',
            age: 32
        },
] 
    return(
        <View style={styles.mainContainer}>
            <Text>My custom list</Text>
            <FlatList data={listData} renderItem={ e => <CustomListCardItem/>}/>
        </View>
    )
}