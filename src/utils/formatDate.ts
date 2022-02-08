const formatDate = (timestamp: string) => {
  const date = timestamp.split("T");
  const formatted = date[0].replaceAll("-", "/");
  return formatted;
};

export default formatDate;
