import { StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import { Colors } from "../../styles/colors";
import { Fonts } from "../../styles/fonts";

export const styles = StyleSheet.create({
    listTitle: {
        fontSize: Fonts.size.lx,
        color: Colors.darkPrimaryColor,
        fontFamily: Fonts.family.PoppinsRegular,
        marginVertical: vs(10),
        marginHorizontal: s(17),
    },
    coeLogo: {
        height: s(63),
        width: '70%',
        resizeMode: 'contain',
        alignSelf: 'center',
        marginVertical: vs(10),
    },
    coePhoto: {
        height: s(200),
        resizeMode: 'contain',
        marginHorizontal: s(15),
        borderRadius: 10,
        elevation: 2,
    },
    bottomLink: {
        fontSize: Fonts.size.m,
        fontFamily: Fonts.family.PoppinsSemiBold,
        color: Colors.PrimaryColor,
        textDecorationLine: 'underline',
        marginBottom: vs(10),
    },
    linkButton: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
    }
})