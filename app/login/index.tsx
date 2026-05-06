import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Alert, Platform, Text, View } from "react-native";
import { Input } from "../../components/Input";
import { themes } from "../../global/themes";
import styles from "./styles";

import { Button } from "@/components/Button";
import { MaterialIcons, Octicons } from "@expo/vector-icons";

export default function Login() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(true);


  async function getLogin() {
    try {
      setLoading(true)
      console.log('Clicou no botão: verificando campos...');

      if (!email || !password) {
        if (Platform.OS === 'web') {
          window.alert('Attention: Please fill in the fields')
        } else {
          Alert.alert('Attention', 'Please fill in the fields')
        }
        setLoading(false)
        return
      }

      console.log('Campos preenchidos. Aguardando 3 segundos...');
      setTimeout(() => {
        console.log('Tempo finalizado. Tentando exibir Alert de Sucesso...');
        if (Platform.OS === 'web') {
          window.alert('Success: Login')
        } else {
          Alert.alert("Success", "Login")
        }
        setLoading(false)
      }, 3000)

    } catch (error) {
      console.log('Error Login', error)
      setLoading(false)
    }
  }

  return (
    <LinearGradient colors={[themes.colors.darkgray, themes.colors.lightgray]} style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}> Login </Text>
      </View>
      <Input
        value={email}
        onChangeText={setEmail}
        title="E-mail"
        IconRight={MaterialIcons}
        IconRightName="email"
      />
      <Input
        value={password}
        onChangeText={setPassword}
        title="Senha"
        secureTextEntry={showPassword}
        IconRight={Octicons}
        IconRightName={showPassword ? "eye-closed" : "eye"}
        OnPressIconRight={() => setShowPassword(!showPassword)}
      />
      <Button
        text="Login"
        onPress={() => getLogin()}
        loading={loading}
      />
    </LinearGradient>
  )
}

