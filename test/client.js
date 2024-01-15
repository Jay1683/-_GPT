const postData = {
  key1: "value1",
  key2: "value2",
};

fetch("http://localhost:3000/your-post-endpoint", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(postData),
})
  .then((response) => response.text())
  .then((data) => {
    console.log("Server response:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
