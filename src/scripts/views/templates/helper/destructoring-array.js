const destructoringArray = (data) => {
  let dataContainer = '';
  data.forEach((prop) => {
    dataContainer += `${prop.name}, `;
  });
  return dataContainer;
};

export default destructoringArray;
