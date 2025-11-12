import { Pressable } from "react-native";
import { EyeOffComponent } from "../../assets/icons/EyeOffComponent";
import { EyeOnComponent } from "../../assets/icons/EyeOnComponent";
import { useAppTheme } from "../../hooks/useAppTheme";
import { ThemeColors } from "../../theme/theme";
import { FacebookIcon } from "../../assets/icons/FacebookIcon";
import { GoogleIcon } from "../../assets/icons/GoogleIcon";


export interface IconProps {
    name: IconName;
    color?: ThemeColors;
    size?: number;
    onPress?: () => void;
}


export function Icon({ name, color = 'backgroundContrast', size, onPress }: IconProps) {

    const { colors } = useAppTheme()
    const SVGIcon = iconRegistry[name]

    if (onPress) {
        return (
            <Pressable onPress={onPress}>
                <SVGIcon color={colors[color]} size={size} />
            </Pressable>
        )
    }
    return (
        <SVGIcon color={colors[color]} size={size} />
    )
}


const iconRegistry = {
    eyeOff: EyeOffComponent,
    eyeOn: EyeOnComponent,
    facebook: FacebookIcon,
    google: GoogleIcon,
};

type IconType = typeof iconRegistry;


type IconName = keyof IconType;