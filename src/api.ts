export const fetchCovidData = async () => {
  const response = await fetch('https://api.covid19api.com/summary', {
    method: 'GET',
    headers: {
      'X-Access-Token': '5cf9dfd5-3449-485e-b5ae-70a60e997864',
    },
  });

  return await response.json();
};
