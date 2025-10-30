import { Box } from "../../../components/Box/Box";
import { HeaderAuth } from "../../../components/HeaderAuth/HeaderAuth";
import { Icon } from "../../../components/Icons/Icon";
import { TextInput } from "../../../components/TextInput/TextInput";

export function LoginScreen() {
    return (
        <Box>
            <HeaderAuth title="Login" />

            <TextInput
                label="Email"
                placeholder="Digite seu email"
                // errorMessage="Email inválido"
                boxProps={{
                    marginHorizontal: 's20',
                }}
                rightComponent={<Icon name="eyeOff" size={24} color="primaryContrast" />}
            />

            <TextInput
                label="Senha"
                placeholder="***********"
                boxProps={{
                    marginHorizontal: 's20',
                }}
                rightComponent={<Icon name="eyeOff" size={24} color="primaryContrast" />}
            />
        </Box>
    )
}