import React from 'react';
import { View, TextInput, Button, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
const validationSchema = yup.object().shape({
    email: yup.string().email('Enter a valid email').required('Email is required'),
});
const ForgotPassScreen = () => {
    const navigation = useNavigation();
    function navigateToSignIn() {
        navigation.navigate('SignInScreen');
    }
    const handleRegistration = (values) => {
        console.log(values);
    };
    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.scrollContainer}
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={true}
        >
            <Text style={styles.headerText}>Register</Text>
            <Formik
                initialValues={{  email: '' }}
                onSubmit={handleRegistration}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View>
                        <View style={styles.container}>
                            <Text style={styles.subText}> Email</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                            {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                        </View>
                        <TouchableOpacity onPress={handleSubmit} style={styles.buttonRegister}>
                            <Text style={styles.buttonTextRegister}>Register</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={{}}
                >
                    <Text style={styles.buttonText}>Have an account?</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    errorText: {
        color: '#ff0000c5',
        marginBottom: 8,
        marginLeft: 12,
    },
    button: {
        backgroundColor: '#0000ff00',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        flex: 1,
        marginHorizontal: 100,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    buttonText: {
        color: '#000000',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 26,
    },
    input: {
        height: 40,
        width: "80%",
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: "#ccc",
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 100,
        justifyContent: 'center',
        textAlign: 'center',
    },
    subText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 16,
    },
    buttonRegister: {
        backgroundColor: '#3498db',
        padding: 12,
        borderRadius: 8,
        marginTop: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 50,
    },
    buttonTextRegister: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ForgotPassScreen;
