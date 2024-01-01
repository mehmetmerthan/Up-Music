import { API } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
async function updateTag(props) {
  const {
    tag_styles = [],
    tag_roles = [],
    tag_all = [],
    oldTagId = "",
  } = props;
  if (
    tag_styles.length === 0 &&
    tag_roles.length === 0 &&
    tag_all.length === 0
  ) {
    const tagId = "";
    return { tagId };
  } else {
    if (oldTagId !== "") {
      const tagDetails = {
        id: oldTagId,
        tag_styles: tag_styles,
        tag_roles: tag_roles,
        tag_all: tag_all,
      };
      if (tag_styles.length === 0) {
        delete tagDetails.tag_styles;
      }
      if (tag_roles.length === 0) {
        delete tagDetails.tag_roles;
      }
      if (tag_all.length === 0) {
        delete tagDetails.tag_all;
      }
      await API.graphql({
        query: mutations.updateTag,
        variables: { input: tagDetails },
      });
      const tagId = "";
      return { tagId };
    } else {
      const tagDetails = {
        tag_styles: tag_styles,
        tag_roles: tag_roles,
        tag_all: tag_all,
      };
      if (tag_styles.length === 0) {
        delete tagDetails.tag_styles;
      }
      if (tag_roles.length === 0) {
        delete tagDetails.tag_roles;
      }
      if (tag_all.length === 0) {
        delete tagDetails.tag_all;
      }
      const newTag = await API.graphql({
        query: mutations.createTag,
        variables: { input: tagDetails },
      });
      const tagId = newTag.data.createTag.id;
      return { tagId };
    }
  }
}
export default updateTag;
