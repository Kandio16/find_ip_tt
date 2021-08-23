export const getIP = async(ip) => {
  const response = await fetch(`https://ipapi.co/${ip}/json/`);
  const peopleAbout = await response.json();

  return peopleAbout;
};
