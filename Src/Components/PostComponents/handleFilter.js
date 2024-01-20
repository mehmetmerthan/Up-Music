export default async function handleFilter({ propItems, filterItems }) {
  if (propItems?.length === 0) return [];
  if (
    !filterItems?.city &&
    !filterItems?.country &&
    !filterItems?.tags_styles &&
    !filterItems?.tags_roles
  )
    return propItems;
  let filteredItems = [];
  if (filterItems?.city) {
    filteredItems = propItems.filter((item) => {
      return item.city === filterItems.city;
    });
  }
  if (filterItems?.country) {
    filteredItems = propItems.filter((item) => {
      return item.country === filterItems.country;
    });
  }
  if (filterItems?.tags_styles) {
    filteredItems = propItems.filter((item) => {
      return item.tags_styles.includes(filterItems.tags_styles);
    });
  }
  if (filterItems?.tags_roles) {
    filteredItems = propItems.filter((item) => {
      return item.tags_roles.includes(filterItems.tags_roles);
    });
  }

  return filteredItems;
}
/*
    selectedCountry === "" &&
    selectedCity === "" &&
    styleTags.length === 0 &&
    roleTags.length === 0
  )
    return propItems;
  const filteredItems = propItems?.filter((item) => {
    const hasCountry = selectedCountry
      ? item.country === selectedCountry
      : true;
    const hasCity = selectedCity ? item.city === selectedCity : true;
    const hasRoles =
      roleTags.length > 0
        ? roleTags.some((role) => item?.tag_roles?.includes(role))
        : true;
    const hasStyles =
      styleTags.length > 0
        ? styleTags.some((style) => item?.tag_styles?.includes(style))
        : true;
    return hasCountry && hasCity && hasRoles && hasStyles;
  });
*/
