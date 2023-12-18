import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { Hub, Auth } from 'aws-amplify';
const Ex = () => {
    const [redirect, setRedirect] = useState(null);
    // async function listenToAutoSignInEvent() {
    //     try {
    //         const user = await Auth.currentAuthenticatedUser();
    //         const { attributes } = user;
    //         const verify = attributes.email_verified;
    //         console.log(verify);
    //     } catch (error) {
    //         console.error('verify error:', error);
    //     }
    // }
    // useEffect(() => {
    //     listenToAutoSignInEvent();
    // }, []);
    async function listen() {
        try {
            const user = await Auth.currentUserInfo();
            //const { attributes } = user;
            //const verify = attributes.email_verified;
            console.log(user);
        } catch (error) {
            console.error('verify error:', error);
        }
    }
    async function x() {
        try {
            await Auth.signOut();
            console.log('signed out');
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
    async function signUp() {
        const username = "mehmetmerthan@hotmail.com"
        const password = "Mert1234"
        try {
            await Auth.signUp({
                username,
                password,
                attributes: {
                    email: username,
                },
                autoSignIn: {
                    enabled: true
                }
            });
            console.log("user signed up");
           
        } catch (error) {
            console.log('error signing up:', error);
           
        }
    }
    return (
        <View>
            <Text>x</Text>
            <Text>x</Text>
            <Text>x</Text>
            <Button title='x' onPress={signUp} />
        </View>
    );

};

export default Ex;
