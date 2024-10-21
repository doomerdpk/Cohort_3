//Fetch

async function testFetch1() {
  await fetch(
    "https://httpdump.app/dumps/cedf1ec9-8d9f-472a-a1db-85c01751747d",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer 123",
      },
    }
  );
}

async function testFetch2() {
  await fetch(
    "https://httpdump.app/dumps/cedf1ec9-8d9f-472a-a1db-85c01751747d",
    {
      method: "POST",
      headers: {
        Authorization: "Bearer 123",
        "Content-Type": "application/json", // Include content type when sending JSON
      },
      body: JSON.stringify({
        username: "Deepak",
        password: "Deepak123",
      }), // Convert the body object to a JSON string
    }
  );
}

// testFetch2();
const axios = require("axios");
async function testAxios1() {
  await axios({
    url: "https://httpdump.app/dumps/cedf1ec9-8d9f-472a-a1db-85c01751747d",
    method: "GET",
    headers: {
      Authorization: "Bearer 123",
    },
  });
}

async function testAxios2() {
  await axios({
    url: "https://httpdump.app/dumps/cedf1ec9-8d9f-472a-a1db-85c01751747d",
    method: "POST",
    headers: {
      Authorization: "Bearer 123",
      "Content-Type": "application/json", // Include content type when sending JSON
    },
    data: JSON.stringify({
      username: "Deepak",
      password: "Deepak123",
    }), // Convert the body object to a JSON string
  });
}

testAxios2();
