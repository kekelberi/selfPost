import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function AboutScren({ }) {
	return (
		<View style={ styles.center } >
			<Text>AboutScren</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

	}
})
