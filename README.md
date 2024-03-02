

---

# Issue with Filtering Projects Based on 'livelink' Property

## Issue Description
We encountered an issue where the filtering based on the 'livelink' property was not working as expected. We were unable to retrieve filtered data from the database based on the provided 'livelink' query parameter  in the 
## code
  let filter = {}; // Initialize an empty filter object

    // Check if there is a query parameter named 'livelink'
    if (req.query.livelink) {
      // If yes, add it to the filter object
      filter.livelink = req.query.livelink;
    }
    // Access data based on the filter
    let myData = await ApiModel.find(filter);

    // Send filtered data as a response
    res.status(200).json({ myData });

## Solution

 **JavaScript Array Filtering**: we fixed by directly filtering the `projects` array after retrieving the data from the database. We used JavaScript's array `filter` method to achieve this. This approach successfully filtered the projects based on the 'livelink' property and resolved the issue.

 # code
 
    // Filter projects array based on livelink
    if (req.query.livelink) {
      // Extract the projects array from myData
      let projects = myData.length > 0 ? myData[0].projects : [];
      //Extract the object where livelink is there
      projects = projects.filter(
        (project) => project.livelink === req.query.livelink
      );
      myData = projects
    } 

