import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function App() {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('./assets/fundo.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Log into{'\n'}Traveling arround the world.</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.roundedInput]}
              placeholder="exemplodeemail@gmail.com"
              keyboardType="email-address"
              placeholderTextColor="#FFF"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.roundedInput]}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#FFF"
            />
          </View>
          <TouchableOpacity style={styles.whiteButton}>
            <Text style={[styles.buttonText, { color: 'black' }]}>Log In</Text>
          </TouchableOpacity>
          <View style={styles.bottomTextContainer}>
            <TouchableOpacity onPress={() => console.log("Create Account")}>
              <Text style={styles.bottomText}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Forgot Password")}>
              <Text style={styles.bottomText}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: 'white', 
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 150,
    marginLeft: 20, 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#326872',
    borderWidth: 1,
    paddingLeft: 10,
    color: '#FFF',
  },
  roundedInput: {
    borderRadius: 20, 
    backgroundColor: '#326872', 
  },
  whiteButton: {
    backgroundColor: 'white',
    borderColor: 'black',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 2, 
    elevation: 3, 
  },
  buttonText: {
    fontSize: 16,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  bottomText: {
    color: 'white', 
    fontSize: 12,
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
