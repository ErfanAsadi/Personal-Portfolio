const generateCMSImageUrl = (url: string) => {
  if (url.includes("http")) {
    return url;
  }
  return `${process.env.CMS_ADDRESS}${url}`;
};

export default generateCMSImageUrl;
