const formatDate = (timestamp: string) => {
  const date = timestamp.split("T");
  if (date) {
    const formatted = date[0].replaceAll("-", "/");
  }
  return date;
};

export default formatDate;
