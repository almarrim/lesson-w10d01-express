const express = require('express');
const router = express.Router();


// Dummy Data
let people = [
    {
        firstName: 'Mohammed', lastName: 'Almarri',
    },
    {
        firstName: 'Hamza', lastName: 'Alhamza',
    },
    {
        firstName: 'Usman', lastName: 'Bashir',
    },
    {
        firstName: 'Snoop', lastName: 'Dogg'
    },
];

// Get All People
router.get('/api/people', function (req, res) {
    res.json({ people: people });
});

// Get Person by Record ID
router.get('/api/people/:id', function (req, res) {
    const personID = req.params.id;
    const person = people[personID]

    // use isNaN , is Not A Number, to check if it is a number
    if (!isNaN(personID)) {
        if (person !== undefined) {
            res.json({ person: person });
        } else {
            //404 == Not Found
            res.status(404).json({ error: 'Person Not Found' })
        }
    } else {
        // Invalid ID 406 == Not Acceptable
        res.status(406).json({ error: 'Invalid ID' })
    }

});

//create
router.post('/api/people/', function (req, res) {
    people.push(req.body.person);
    console.log(req.body);
    res.status(201).json({ status: 'ok' });
});

//update
router.put('/api/people/:id', function (req, res) {
    personID = req.params.id
    person = people[personID]
    // use isNaN , is Not A Number, to check if it is a number
    if (!isNaN(personID)) {
        if (person != "undefined") {
            if (req.body.person.firstName) {
                person.firstName = req.body.person.firstName
            }
            if (req.body.person.lastName) {
                person.lastName = req.body.person.lastName
            }
            people[personID] = person
            res.status(201).json({ status: 'ok' });
        }
        else {
            res.status(404).json({ error: "not found" })
        }
    } else {
        res.status(406).json({ error: 'invalid ID' })
    }
});

//delete
router.delete('/api/people/ :id', function (req, res) {
    personID = req.params.id
    // use isNaN , is Not A Number, to check if it is a number
    delete people[personID]
    res.status(201).json({ status: 'ok' })

})



module.exports = router;
// Export the router so we can use it
// in the server.js file