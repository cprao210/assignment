export const pricingApi = async () => {
  const url = `https://api.coinstats.app/public/v1/coins?skip=0`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
