const formatDate = (timestamp: string) => {
  const date = timestamp.split("T");
  if (Array.isArray(date)) {
    return date[0].replaceAll("-", "/");
  }

  return timestamp;
};

export default formatDate;
