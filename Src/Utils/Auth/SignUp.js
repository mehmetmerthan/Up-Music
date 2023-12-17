import { Auth } from 'aws-amplify';

async function signUp(props) {
    const { username, password } = props;
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email: username,
            },
            autoSignIn: {
                enabled: true
            }
        });
        console.log(user);
        return { error: null };
    } catch (error) {
        console.log('error signing up:', error);
        return { error };
    }
}

export default signUp;