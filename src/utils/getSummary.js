const getSummary = (paragraph) => {
  if (paragraph.length <= 220) {
    return paragraph;
  } else {
    return paragraph.substr(0, 220).trim() + "...";
  }
};

export default getSummary;
