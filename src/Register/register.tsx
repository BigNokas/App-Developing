import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Alert, Platform, Text, View } from "react-native";
import { getDB } from "../../database/database";
import { themes } from "../../global/themes";
import style from "./styles";

export default function Register() {

    const navigation = useNavigation<NavigationProp<any>>();

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordConfirmation, setPasswordConfirmation] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    const registerData = {
        name,
        email,
        password,
        passwordConfirmation
    }

    async function getRegister() {
        try {
            setLoading(true)

            // 1. Validar campos primeiro
            if (!name || !email || !password || !passwordConfirmation) {
                if (Platform.OS === 'web') {
                    window.alert('Atenção, preencha todos os campos!')
                } else {
                    Alert.alert('Atenção', 'Preencha todos os campos!')
                }
                setLoading(false)
                return
            }

            if (password !== passwordConfirmation) {
                if (Platform.OS === 'web') {
                    window.alert('Atenção, as senhas estão diferentes')
                } else {
                    Alert.alert('Atenção', 'As senhas estão diferentes')
                }
                setLoading(false)
                return
            }

            // 2. Verificar se email já existe no banco
            const database = await getDB()
            const existingUser = await (database as any).User
                .where('email')
                .equals(email)
                .toArray()

            if (existingUser.length > 0) {
                if (Platform.OS === 'web') {
                    window.alert('Atenção, e-mail já cadastrado!')
                } else {
                    Alert.alert('Atenção', 'E-mail já cadastrado!')
                }
                setLoading(false)
                return
            }

            // 3. Salvar o usuário no banco de dados Dexie
            await (database as any).User.add({
                name: name,
                email: email,
                password: password,
            });

            console.log('Usuário cadastrado com sucesso no banco de dados!');

            setTimeout(() => {
                if (Platform.OS === 'web') {
                    window.alert('Sucesso: Cadastro realizado!')
                } else {
                    Alert.alert("Sucesso", "Cadastro realizado!")
                }

                navigation.navigate("Login")
                setLoading(false)
            }, 2000)

        } catch (error) {
            console.log('Erro no cadastro:', error)
            setLoading(false)
        }
    }

    return (
        <LinearGradient colors={[themes.colors.darkgray, themes.colors.lightgray]} style={style.container}>
            <View style={style.box1}>
                <Text style={style.text}>Crie a sua conta</Text>
            </View>
            <Input
                value={name}
                onChangeText={setName}
                title="Nome"
                IconRight={MaterialIcons}
                IconRightName="person"
            />
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
            <Input
                value={passwordConfirmation}
                onChangeText={setPasswordConfirmation}
                title="Confirme a Senha"
                secureTextEntry={showPassword}
                IconRight={Octicons}
                IconRightName={showPassword ? "eye-closed" : "eye"}
                OnPressIconRight={() => setShowPassword(!showPassword)}
            />
            <Button
                text="Cadastrar"
                onPress={() => getRegister()}
                loading={loading}
            />
        </LinearGradient>


    )
}
