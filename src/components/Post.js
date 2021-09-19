import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export function Post({ post, onOpen }) {
	return (
		<TouchableOpacity
			activeOpacity={ 0.7 }
			onPress={ () => onOpen(post) }
		>
			<View style={ styles.post } >
				<ImageBackground
					style={ styles.img }
					source={ { uri: post.img } }>
					<View style={ styles.text } >
						<Text style={ styles.textTitle } >
							{ new Date(post.date).toLocaleDateString() }
						</Text>
					</View>
				</ImageBackground>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	post: {
		marginBottom: 12,
		overflow: 'hidden',
	},
	img: {
		padding: 5,
		maxHeight: 200,
		minHeight: 200,
		width: '100%',
	},
	text: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		paddingVertical: 5,
		alignItems: 'center',
		width: '100%',

	},
	textTitle: {
		color: '#fff',
		fontFamily: 'OpenSans-Regular'
	}
})
