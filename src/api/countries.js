export const getAllCountries = async () => {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,cca3"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }

  return await response.json();
};

export const getCountryByCode = async (code) => {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch country");
  }

  const data = await response.json();

  return data[0];
};