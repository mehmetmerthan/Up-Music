import { API } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
async function updateLocation(props) {
  const { location, oldLocationId = "" } = props;
  if (location === "") {
    const locationId = "";
    return { locationId };
  } else {
    const city = location.structured_formatting.main_text;
    const country = location.structured_formatting.secondary_text;
    const place = "";
    const content = "";

    if (oldLocationId !== "") {
      const locationDetails = {
        id: oldLocationId,
        content: content,
        city: city,
        country: country,
        place: place,
      };
      await API.graphql({
        query: mutations.updateLocation,
        variables: { input: locationDetails },
      });
      const locationId = "";
      return { locationId };
    } else {
      const locationDetails = {
        content: content,
        city: city,
        country: country,
        place: place,
      };
      const newLocation = await API.graphql({
        query: mutations.createLocation,
        variables: { input: locationDetails },
      });
      const locationId = newLocation.data.createLocation.id;
      return { locationId };
    }
  }
}
export default updateLocation;
