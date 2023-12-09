import { API } from 'aws-amplify';
import uploadLocation from './uploadLocation';
import UploadTag from './uploadTag';
import getUserId from '../getUserId';
import uploadMedia from './uploadMedia';
import * as mutations from '../../graphql/mutations';
async function UploadPost(props) {
    const {
        content = "",
        type = "",
        media = "",
        city = "",
        country = "",
        place = "",
        tag_styles = [],
        tag_roles = [],
        tag_all = [],
        participants = [],
        musician_needed = [],
    } = props;

    const { userID } = await getUserId();
    const { mediaKey } = await uploadMedia({ media: media });
    const { locationId } = await uploadLocation({
        content,
        city,
        country,
        place,
    });
    const { tagId } = await UploadTag(
        tag_styles,
        tag_roles,
        tag_all,
    );
    const postDetails = {
        content: content,
        type: type,
        key_media: mediaKey,
        userPostId: userID,
        postTagId: tagId,
        postLocationId: locationId,
        participants: participants,
        musician_needed: musician_needed,
    };
    await API.graphql({
        query: mutations.createPost,
        variables: { input: postDetails },
    });
}

export default UploadPost;