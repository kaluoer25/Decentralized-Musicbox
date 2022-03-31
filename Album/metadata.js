let fs = require("fs");
let axios = require("axios");

let songs = ["John"];
let durations = ["00:29"];
let ipfsArray = [];

for (let i = 0; i < songs.length; i++) {
  ipfsArray.push({
    path: `metadata/${i}.json`,
    content: {
      image: `ipfs://QmVNuDmh3QTijps5z9ibkNnbjCmv5jmWLJerge1ebaHH9q/media/1`, //xxx = hash
      name: songs[i],
      animation_url: `ipfs://QmVNuDmh3QTijps5z9ibkNnbjCmv5jmWLJerge1ebaHH9q/media/0`, //xxx = hash
      duration: durations[i],
      artist: "Ann",
      year: "1997",
    },
  });
}

axios
  .post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
    headers: {
      "X-API-KEY":
        "8yjAgKl62d3cesYYcTLS3z3w6pN2ZzKCfzpBsOIwmTmSQ3gNREHc7cQjBI7G3kKZ",
      "Content-Type": "application/json",
      accept: "application/json",
    },
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error);
  });
