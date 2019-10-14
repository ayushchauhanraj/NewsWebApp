const userCollection = require('../models/user');
const newsOperation = {
    add(newsObject, res) {
        userCollection.create(newsObject, (err) => {
            if (err) {
                if (res) {
                    res.send("ERROR");
                }
                console.log("Error in add", err);
            } else {
                if (res) {
                    res.send("success");
                }
                console.log("REcord added successfully....");
            }
        });
    },
    search(day, res) {
        console.log(
            "inside the search"
        )
        userCollection.findOne({ 'day': day }, (err, doc) => {
            if (err) {
                res.send("something went Wrong");
                console.log("The Error ", err);
            } else if (doc) {
                var obj = {
                    'cricket': doc.cricket,
                    'worldNews': doc.worldNews,
                    'entertaiment': doc.entertainmentsNews,
                    'opinion': doc.opinion
                }

                res.send(obj);
            }
        });
    }
}
module.exports = newsOperation;