import { Storage } from 'aws-amplify';

export default async function uploadMedia(props) {
    const { media } = props;
    try {
        const response = await fetch(media);
        const blob = await response.blob();
        const key = `Post/media/${Date.now()}`;
        await Storage.put(key, blob);
        return { mediaKey: key };
    } catch (err) {
        console.log('Error uploading file:', err);
    }
 
}