const randomHexaNumberGenerator = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  
  console.log(randomHexaNumberGenerator());
  console.log(randomHexaNumberGenerator());
  console.log(randomHexaNumberGenerator());