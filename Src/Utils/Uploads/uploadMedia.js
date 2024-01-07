import { Storage } from "aws-amplify";

export default async function uploadMedia(props) {
  const { media = "", mediaType = "", oldKey = "" } = props;
  if (media === "") {
    return { mediaKey: "" };
  } else {
    if (oldKey !== "" && oldKey !== undefined && oldKey !== null) {
      try {
        await Storage.remove(oldKey);
      } catch (error) {
        console.log("Error removing file: ", error);
      }
    }
    try {
      const response = await fetch(media);
      const blob = await response.blob();
      const key = `media/${Date.now()}`;
      await Storage.put(key, blob, {
        contentType: mediaType,
      });
      return { mediaKey: key };
    } catch (err) {
      console.log("Error uploading file:", err);
      return { mediaKey: "" };
    }
  }
}
