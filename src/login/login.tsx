import { NavigationProp, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Alert, Platform, Text, View } from "react-native";
import { Input } from "../../components/Input";
import { getDB } from "../../database/database";
import { themes } from "../../global/themes";
import styles from "./styles";

import { Button } from "@/components/Button";
import { MaterialIcons, Octicons } from "@expo/vector-icons";

export default function Login() {

  const navigation = useNavigation<NavigationProp<any>>();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(true);

  const loginData = {
    email,
    password
  }

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
      const database = await getDB()
      const user = await (database as any).User
        .where('email')
        .equals(email)
        .toArray()

      if (user.length === 0) {
        setLoading(false)
        if (Platform.OS === 'web') {
          window.alert('Atenção: E-mail não encontrado!')
        } else {
          Alert.alert('Atenção', 'E-mail não encontrado!')
        }
        return
      }

      const loggedUser = user[0];

      // Verificar senha
      if (loggedUser.password !== password) {
        setLoading(false)
        if (Platform.OS === 'web') {
          window.alert('Atenção: Senha incorreta!')
        } else {
          Alert.alert('Atenção', 'Senha incorreta!')
        }
        return
      }

      // Login bem-sucedido
      console.log('Login bem-sucedido! Usuário:', loggedUser.name);

      setTimeout(() => {
        if (Platform.OS === 'web') {
          window.alert('Sucesso: Login realizado!')
        } else {
          Alert.alert("Sucesso", "Login realizado!")
        }
        navigation.navigate("BottomRoutes", { data: loggedUser })
        setLoading(false)
      }, 2000)

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
      <Text style={styles.textBottom}>
        Não tem uma conta? <Text style={{ ...styles.textBottom, color: themes.colors.blue }} onPress={() => navigation.navigate("Register")}>Cadastre-se</Text>
      </Text>
    </LinearGradient>
  )
}

