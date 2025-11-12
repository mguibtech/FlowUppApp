import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";
import { Box } from "../../../components/Box/Box";
import { Button } from "../../../components/Button/Button";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Icon } from "../../../components/Icons/Icon";
import { LoadingScreen } from "../../../components/LoadingScreen/LoadingScreen";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type AuthStackParamList = {
    Login: undefined;
    SignUpScreen: undefined;
    ForgotPassword: undefined;
    SecurityPinScreen: undefined;
    NewPasswordScreen: undefined;
};

type NavigationProp = StackNavigationProp<AuthStackParamList>;

export default function NewPasswordScreen() {
    const navigation = useNavigation<NavigationProp>();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSavePassword = async () => {
        // Validações básicas
        if (!password || !confirmPassword) {
            // Aqui você pode adicionar um alerta de erro
            return;
        }

        if (password !== confirmPassword) {
            // Aqui você pode adicionar um alerta de erro
            return;
        }

        // Mostra o loading
        setIsLoading(true);

        // Simula a chamada da API para salvar a senha
        // Substitua isso pela sua chamada real de API
        setTimeout(() => {
            setIsLoading(false);
            setShowSuccess(true);
        }, 2000); // Simula 2 segundos de loading
    };

    const handleAnimationComplete = () => {
        // Navega para a tela de login após mostrar o sucesso
        navigation.navigate("Login");
    };

    // Se estiver em loading ou sucesso, mostra o LoadingScreen
    if (isLoading) {
        return (
            <LoadingScreen
                status="loading"
                message="Salvando nova senha..."

            />
        );
    }

    if (showSuccess) {
        return (
            <LoadingScreen
                status="success"
                message="Senha salva com sucesso"
                onAnimationComplete={handleAnimationComplete}
            />
        );
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView
                contentContainerStyle={{ flex: 1 }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <Box flex={1} backgroundColor="greenPrimary">
                    <Box alignItems="center" justifyContent="center" paddingVertical="s56">
                        <Text preset="headingMedium" color="primaryContrast">
                            Nova senha
                        </Text>
                    </Box>

                    <Box
                        backgroundColor="greenHoneydew"
                        flex={1}
                        borderTopLeftRadius="s48"
                        borderTopRightRadius="s48"
                        paddingTop="s56"
                        paddingHorizontal="s36"
                    >
                        <Box gap="s24">
                            <TextInput
                                label="Digite sua nova senha"
                                placeholder="********"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPassword}
                                rightComponent={
                                    <Icon
                                        name={showPassword ? "eyeOn" : "eyeOff"}
                                        size={24}
                                        color="primaryContrast"
                                        onPress={() => setShowPassword(!showPassword)}
                                    />
                                }
                            />
                            <TextInput
                                label="Confirme sua nova senha"
                                placeholder="********"
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                secureTextEntry={!showConfirmPassword}
                                rightComponent={
                                    <Icon
                                        name={showConfirmPassword ? "eyeOn" : "eyeOff"}
                                        size={24}
                                        color="primaryContrast"
                                        onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                                    />
                                }
                            />
                        </Box>

                        <Box marginTop="s56" alignItems="center">
                            <Button
                                title="Salvar nova senha"
                                onPress={handleSavePassword}
                                disabled={!password || !confirmPassword}
                                titlePreset={{
                                    preset: "headingSmall",
                                }}
                                width={300}
                            />
                        </Box>
                    </Box>
                </Box>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}