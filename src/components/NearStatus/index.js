import React from 'react'
import { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const NearStatus = (props) => {
	const { color, text } = props
	useEffect(() => {
		
		const fetchData = async () => {
			let promise = new Promise((resolve, reject) => {
				setTimeout(() => resolve("get global"), 200)
			});
			let resultPromise = await promise;
			if (resultPromise && global.nearConnect ) {
			console.log(props);
			const method1Argument = {}
			method1Argument[props.method1Parametr1Key] = props.method1parametr1Value

			try {
				let result1 = props.method1&&global.nearConnect&&global.nearConnect.currentUser !== undefined ? await global.nearConnect.contract[props.method1](method1Argument): 0
				let result2 = props.method2 ? await global.nearConnect.contract[props.method2]() : ""
				let result3 = props.method2 ? await global.nearConnect.contract[props.method3]() : ""
				let result4 = props.method4 ? await global.nearConnect.contract[props.method4]() : ""
				let result5 = props.method5 ? await global.nearConnect.contract[props.method5]() : ""
				props.setResults ? props.setResults(result1, result2, result3, result4, result5): null
			  } catch (err) {
				console.log(err)
				return false
			  }
			}
		}
			fetchData()
	},[global.nearConnect])

	return(
		<View style={styles.wrapper}>
			<Text style={{ color }}>{text}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default NearStatus
