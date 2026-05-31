export const getBucketList = () => {
  return JSON.parse(localStorage.getItem("bucketList")) || [];
};

export const saveBucketList = (countries) => {
  localStorage.setItem(
    "bucketList",
    JSON.stringify(countries)
  );
};

export const getVisitedCountries = () => {
  return JSON.parse(localStorage.getItem("visited")) || [];
};

export const saveVisitedCountries = (countries) => {
  localStorage.setItem(
    "visited",
    JSON.stringify(countries)
  );
};