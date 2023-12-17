import { API } from 'aws-amplify';
import uploadLocation from './uploadLocation';
import UploadTag from './uploadTag';
import uploadMedia from './uploadMedia';
import * as mutations from '../../graphql/mutations';
import { getUserId } from '../getUser';
async function UploadUser(props) {
    const {
        name = "",
        about = "",
        urlPP = "",
        urlBack = "",
        location = "",
        gender = "",
        tagStyle = [],
        tagRole = [],
    } = props;
    const { mediaKey: key_pp } = await uploadMedia({ media: urlPP });
    const { mediaKey: key_back } = await uploadMedia({ media: urlBack });
    const { locationId } = await uploadLocation({ location: location });
    const { tagId } = await UploadTag(
        tagStyle,
        tagRole,
    );
    const userId = await getUserId();
    const userDetails = {
        id: userId,
        name: name,
        gender: gender,
        about: about,
        key_pp: key_pp,
        key_back: key_back,
        userTagId: tagId,
        userLocationId: locationId,
    };
    try {
        await API.graphql({
            query: mutations.createUser,
            variables: { input: userDetails },
        });
    } catch (error) {
        console.log(error);
    }
}

export default UploadUser;