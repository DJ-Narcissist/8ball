import React from "react";

const choice = (arr) => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  
  export { choice };

export default { choice };