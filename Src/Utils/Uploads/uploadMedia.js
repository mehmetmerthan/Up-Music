import { Storage } from 'aws-amplify';

export default async function uploadMedia(props) {
    const { media, mediaType } = props;
    if (media === "") {
        return { mediaKey: "" };
    }
    else {
        try {
            const response = await fetch(media);
            const blob = await response.blob();
            const key = `Post/media/${Date.now()}`;
            await Storage.put(key, blob, {
                contentType: mediaType
            });
            return { mediaKey: key };
        } catch (err) {
            console.log('Error uploading file:', err);
            return { mediaKey: "" };
        }
    }
}