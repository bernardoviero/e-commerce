import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import Header from '../../components/Header/CustomHeader';
import CustomInput from '../../components/Input/CustomInput';
import CustomButton from '../../components/Button/CustomButton';
import { colors } from '../../styles/theme/colors'

const App = () => {
  const[email, setEmail] = useState('');
  
  const handleTextChange = (text: string) =>{
    setEmail(text);
    console.log(email);
  }

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Header />
			<View style={styles.container}>
				<Text style={styles.textTitle}>Login</Text>
				<View style={styles.inputContainer}>
					<CustomInput placeHolder="Your email or phone" label="E-mail" type="email-address" onChangeText={handleTextChange}/>
					{/* <CustomInput marginBottom={10} placeHolder="Password" label="Senha" password={true} /> */}
				</View>
				<View style={styles.buttonForgotPassword}>
					<CustomButton fontSize={14} fontColor={colors.primaryColor} title="Forgot Password?" />
				</View>
				<View style={styles.buttonLogin}>
					<CustomButton fontSize={16} fontColor={colors.backgroundScreen} title="LOGIN" backGroundColor={colors.secondaryColor} />
				</View>
				<View style={styles.buttonSignUp}>
					<Text>Don't have an account?</Text>
					<CustomButton fontColor={colors.primaryColor} title="Sign Up" />
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		top: 180,
		padding: 20,
		width: '100%',
	},
	textTitle: {
		fontSize: 38,
		fontFamily: 'IBMPlexSans-SemiBold',
	},
	inputContainer: {
		marginTop: 50,
	},
	buttonForgotPassword: {
		alignItems: 'center',
	},
	buttonLogin: {
		marginTop: 26,
		width: "80%",
		alignSelf: 'center',
	},
	buttonSignUp: {
		marginTop: 30,
		width: "80%",
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
});

export default App;