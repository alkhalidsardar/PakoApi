const ApiModel = require("../model/model");

const product = async (req, res  ) => {
  try {
    // Access data based on the filter
    let myData = await ApiModel.find();



    // Filter projects array based on livelink
    if (req.query.livelink) {
      // Extract the projects array from myData if it has more than one object
      let projects = myData.length > 0 ? myData[0].projects : [];
      //Extract the object where livelink is there and set the value of livelink is equal to in query
      projects = projects.filter(
        (project) => project.livelink === req.query.livelink
      );
      myData = projects
    } 

  

    //header 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
 
  // Send filtered projects as a response
  res.status(200).json({ myData });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = product;
