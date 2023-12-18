import { Auth } from 'aws-amplify';
async function confirmSignUp(props) {
    const { code,username } = props;
    try {
        await Auth.confirmSignUp(username, code);
        return { error: null };
    } catch (error) {
        console.log('error confirming sign up', error);
        return { error };
    }
}

async function resendSignUp(props) {
    const { username } = props;
    try {
        await Auth.resendSignUp(username);
        return { error: null };
    } catch (error) {
        console.log('error resending code', error);
        return { error };
    }
}

export { confirmSignUp, resendSignUp }