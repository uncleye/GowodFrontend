import React, {FC, ReactElement} from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import colors from '../config/colors'

type Props = {
    title: string;

  }

const ListItemSeparator: FC<Props> = ({title}) : ReactElement => {   
    return(
        <View style = {styles.separator}>
        </View>
    )
}

const styles = StyleSheet.create({
    separator: {
        width: "100%",
        height: 1,
        backgroundColor: 'white'
    },
    detailsContainer: {
        padding :20
    },
    title: {
        marginBottom : 7
    }

})

export default ListItemSeparator 
