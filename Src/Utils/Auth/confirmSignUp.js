import { Auth } from 'aws-amplify';
async function confirmSignUp(props) {
    const { username, code } = props;
    try {
        await Auth.confirmSignUp(username, code);
        return { error: null };
    } catch (error) {
        console.log('error confirming sign up', error);
        return { error };
    }
}

export default confirmSignUp;