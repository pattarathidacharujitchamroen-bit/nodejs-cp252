const tags = [];
let tagsArray = [];

const getTags = (req, res) => {
  tagsArray.push(tagsArray.length);
  res.json({ "tags" :tagsArray });
};

// Implement other controllers related to tags

module.exports = {
  getTags,
  // Export other tag controllers
};
