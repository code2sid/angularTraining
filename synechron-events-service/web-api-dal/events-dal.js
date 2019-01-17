const mongojs = require("mongojs");
const db = mongojs("hr-events-db", ["events"]);

class EventsDal {
    getAllEvents() {
        return new Promise((resolve, reject) => {
            db.events.find((err, docs) => {
                if (err) {
                    reject(err);
                }
                resolve(docs);
            });
        });

    }
    getSingleEvent(id) {
        return new Promise((resolve, reject) => {
            db.events.findOne({ "eventId": Number.parseInt(id) }, (err, doc) => {
                if (err) {
                    reject(err);
                }
                resolve(doc);
            });
        });
    }
    insertNewEvent(event) {
        return new Promise((resolve, reject) => {
            db.events.insert(event, (err, doc) => {
                if (err) {
                    reject(err);
                }
                resolve(doc);
            });
        });
    }
}

module.exports = new EventsDal();