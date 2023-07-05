const getSummary = (paragraph) => {
  // Split the paragraph into an array of words
  const words = paragraph.split(" ");

  // Check if the number of words is less than or equal to 45
  if (words.length <= 30) {
    return paragraph; // Return the original paragraph
  }

  // Truncate the paragraph to 45 words and join them back into a string
  const truncatedWords = words.slice(0, 30);
  const truncatedParagraph = truncatedWords.join(" ");

  // Add "..." at the end of the truncated paragraph
  return truncatedParagraph + "...";
};

export default getSummary;
