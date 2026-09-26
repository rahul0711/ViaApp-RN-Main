import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { TitleHeader } from '../../components/Header';
import FastImage from 'react-native-fast-image';
import { images } from '../../assets/images';
import { rootStyles } from '../../styles/rootStyle';
import { styles } from './styles';

const COEDashboardScreen = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={rootStyles.container}>
            <SafeAreaView style={rootStyles.flex}>
                <TitleHeader
                    title={'COE Dashboard'}
                    source={images.back}
                    onPress={() => navigation.goBack()}
                />
                <Image source={images.coeLogo} style={styles.coeLogo} />
                <FastImage source={images.coePhoto} style={styles.coePhoto} />
                <Text style={styles.listTitle}>
                    CENTRE OF EXCELLENCE (COE), Vapi, a Project conceived and set up by Vapi Green Enviro Ltd.,
                    under the IIUS Scheme of Govt. of India. The Centre of Excellence has been conceived to provide state of the art facilities,
                    to our industry, for constant Up gradation of processes and products and for developing new products.
                    It has World Class Analytical Laboratory, Pilot plant, scale up and kilo lab facility for Chemicals,
                    & Knowledge Resource Centre.</Text>
                <TouchableOpacity style={styles.linkButton}
                    onPress={() => Linking.openURL('https://coevapi.com/')}>
                    <Text style={styles.bottomLink}>https://coevapi.com/</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    );
};

export default COEDashboardScreen;