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
        location = "",
        gender = "",
        tagStyle = [],
        tagRole = [],
        mediaType = "",
        userData,
    } = props;
    const { mediaKey: key_pp } = urlPP !== "" ? await uploadMedia({ media: urlPP, mediaType: mediaType }) : "";
    const city = location !== "" ? location.structured_formatting.main_text : ""
    const country = location !== "" ? location.structured_formatting.secondary_text : ""
    const { locationId } = location !== "" ? await uploadLocation({ city: city, country: country }) : "";
    const { tagId } = tagStyle !== "" || tagRole !== "" ? await UploadTag({
        tag_styles: tagStyle,
        tag_roles: tagRole,
    }) : "";
    const userId = await getUserId();
    const userDetails = {
        id: userId,
        name: name,
        gender: gender,
        about: about,
        key_pp: key_pp,
        userTagId: tagId,
        userLocationId: locationId,
    };
    if (userDetails.name === "") {
        delete userDetails.name
    }
    if (userDetails.gender === "") {
        delete userDetails.gender
    }
    if (userDetails.about === "") {
        delete userDetails.about
    }
    if (userDetails.key_pp === "") {
        delete userDetails.key_pp
    }

    if (userDetails.userTagId === "") {
        delete userDetails.userTagId
    }
    if (userDetails.userLocationId === "") {
        delete userDetails.userLocationId
    }
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