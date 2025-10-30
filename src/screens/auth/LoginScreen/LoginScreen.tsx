import { Pressable } from "react-native";
import { Box } from "../../../components/Box/Box";
import { Button } from "../../../components/Button/Button";
import { Icon } from "../../../components/Icons/Icon";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";

export function LoginScreen() {
    return (
        <Box flex={1} backgroundColor="greenPrimary">
            <Box alignItems="center" justifyContent="center" paddingVertical="s56">
                <Text preset="headingMedium" color="primaryContrast">Bem Vindo(a)</Text>
            </Box>

            <Box
                backgroundColor="greenHoneydew"
                flex={1}
                borderTopLeftRadius="s48"
                borderTopRightRadius="s48"
                paddingTop="s56"
            >
                <Box marginTop="s20">
                    <TextInput
                        label="Email"
                        placeholder="Digite seu email"
                        boxProps={{
                            marginHorizontal: 's36',
                        }}
                        rightComponent={<Icon name="eyeOff" size={24} color="primaryContrast" />}
                    />

                    <TextInput
                        label="Senha"
                        placeholder="***********"
                        boxProps={{
                            marginHorizontal: 's36',
                            marginTop: 's24',
                        }}
                        rightComponent={<Icon name="eyeOff" size={24} color="primaryContrast" />}
                    />

                    <Box marginTop="s56" alignItems="center">
                        <Button
                            title="Entrar"
                            onPress={() => { }}
                            width={207}
                        />
                        <Pressable onPress={() => { }}>
                            <Text preset="paragraphSmall" color="primaryContrast" marginTop="s16">
                                Esqueceu sua senha?
                            </Text>
                        </Pressable>

                        <Button
                            title="Criar conta"
                            onPress={() => { }}
                            width={227}
                            preset="outline"
                        />

                        <Pressable onPress={() => { }}>
                            <Text preset="paragraphSmall" color="primaryContrast" marginTop="s16">
                                Usar <Text bold color="blueOcean">digital</Text> para acessar
                            </Text>
                        </Pressable>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}