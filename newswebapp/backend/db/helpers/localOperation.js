const localCollection = require('../models/localnews');
const localOperation = {
    add(obj, res) {
        localCollection.create(obj, (err) => {
            if (err) {
                res.send("ERROR");
                console.log("Error while data addition (:<)");
            } else {
                res.send("Success");
                console.log("Data in localNews is successfully added(:>)");
            }
        })
    },
    search(day, res) {
        localCollection.find({ 'day': day }, (err, doc) => {
            if (err) {
                console.log("Error during the load local data");
                res.send(err);
            } else if (doc) {
                console.log("localData successfully send from search function");
                res.send(doc);
            }
        })

    },
    update(obj, res) {
        console.log("local");
        localCollection.updateOne({ id: obj.id, day: obj.day }, { $set: { heading: obj.heading, data: obj.data, url: obj.url } }, (err, doc) => {
            if (err) {
                console.log("some problem in update");
                res.send(err);
            } else if (doc) {
                console.log(doc);
                console.log("Updated");
                res.send(doc);
            }
        })

    },
    delete(id, day, res) {
        localCollection.deleteOne({ id: id, day: day }, (err, doc) => {
            if (err) {
                console.log("deletetion has some problem");
                res.send(err);
            } else if (doc) {
                console.log(doc);
                res.send(doc);
            }
        });
    }
}
module.exports = localOperation;