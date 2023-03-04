import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { COLORS } from '../../components/Colors'



const Method = ({ navigation, route }) => {
    const data = [
        {
            image: require('../../assets/DrEmile.png'),
            title: 'Dr.Emile',
            subtitle: 'Automated consultation generated by system. that is accurate 98% depend on honesty',
            price: '3 500',
            name: 'Aiconsultation'


        },
        {
            image: require('../../assets/doctor.png'),
            title: 'Real-Time',
            subtitle: 'talk with doctor immediately by phone call, text and scheduled',
            price: '7 500',
            name: 'consultation'
        },
        {
            image: require('../../assets/appointment.png'),
            title: 'Physical Appointment',
            subtitle: 'Our doctors can schedule appointment with you, how you',
            price: '10 500',
            name: 'consultation'

        },
    ]

    return (
        <View >
            <Header />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: COLORS.white, height: '80%', margin: 18, borderRadius: 30, padding: 6, alignSelf: 'center' }}>
                    <Text style={{ fontSize: 21, fontWeight: 'bold', margin: 12 }}>Consultation</Text>
                    <Text style={{ marginLeft: 12, color: COLORS.paragraph, fontWeight: '700' }}>Please choose your Consultation option</Text>
                    <FlatList
                        data={data}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 8, alignItems: 'center' }} onPress={() => navigation.navigate(item.name)}>
                                <View style={{ backgroundColor: COLORS.primary, width: '20%', height: 70, borderRadius: 10, marginRight: 7 }}>
                                    <Image source={item.image} style={{ padding: 20, alignSelf: 'center', justifyContent: 'center', marginTop: '20%' }} />
                                </View>
                                <View>
                                    <Text style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 4 }}>{item.title} </Text>
                                    <Text style={{ maxWidth: 250 }}>{item.subtitle}</Text>
                                    <Text style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 4 }}>{item.price} Rwf</Text>
                                </View>
                            </TouchableOpacity>}
                    />
                </View>
            </View>


        </View>
    )
}

export default Method