import type {PropsWithChildren} from 'react';

import { View, Text, StyleSheet } from 'react-native';

type currencyBtnProps = PropsWithChildren<{
     name: string;
     flag: string;
}>;
export function CurrencyButton(props:currencyBtnProps):JSX.Element{
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer : {
        alignItems: 'center'
    },
    flag: {
        fontSize: 28,
        color: "#FFFFFF",
        marginBottom: 4
    },
    country: {
        fontSize: 14,
        color: "#2d3436",
    
    }
})

