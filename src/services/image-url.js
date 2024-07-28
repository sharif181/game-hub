const getCroppedImageUrl = (url) => {
  if (!url) return "";
  const keyword = "media/";
  const index = url.indexOf(keyword) + keyword.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
