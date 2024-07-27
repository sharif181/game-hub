const getCroppedImageUrl = (url) => {
  const keyword = "media/";
  const index = url.indexOf(keyword) + keyword.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
