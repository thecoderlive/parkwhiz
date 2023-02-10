import React from 'react'
import { Image, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'


const ParkWhiz = () => (
<ScrollView style={styles.park_whiz} showsVerticalScrollIndicator={false}>
<Text style={styles.turn_on}>{item.turn_on}</Text>
<Text style={styles.notification}>{item.notification}</Text>
<Image
    style={styles.view_image}
    source={{uri: item.view_image}}
    />
<Text style={styles.about_reminders}>{item.about_reminders}</Text>
<Text style={styles.maybe_later}>{item.maybe_later}</Text>
</ScrollView>
)

export default ParkWhiz;

const styles = StyleSheet.create({
    'turn_on': {
        'color': '#050505',
        'fontSize': 38,
        'fontWeight': '400',
        'paddingHorizontal': 15,
        'paddingTop': 5,
        'marginTop': 40
    },
    'notification': {
        'color': '#030202',
        'fontSize': 38,
        'fontWeight': '600',
        'paddingHorizontal': 15,
        'paddingTop': 5
    },
    'view_image': {
        'width': '80vw',
        'height': '60vw',
        'marginTop': 5,
        'alignSelf': 'center',
        'marginVertical': 20
    },
    'about_reminders': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'alignSelf': 'center'
    },
    'maybe_later': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'alignSelf': 'center',
        'textAlign': 'center'
    }
});