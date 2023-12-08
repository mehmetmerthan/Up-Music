import { API } from 'aws-amplify';
async function uploadLocation(props) {
    const {
        content = "",
        city = "",
        country = "",
        place = "",
    } = props;
    if (content === "" && city === "" && country === "" && place === "") {
        const locationId = "";
        return { locationId }
    } else {
        const locationDetails = {
            content: content,
            city: city,
            country: country,
            place: place,
        };
        const newLocation = await API.graphql({
            query: mutations.createMainPost,
            variables: { input: locationDetails },
        });
        const locationId = newLocation.id;
        return { locationId };
    }
}
export default uploadLocation;