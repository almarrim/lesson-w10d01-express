// Load the Express module on our server
const express = require('express');
const indexRouter = require('./routes/index');
const peopleRouter = require('./routes/people')
// Create a new express server
const app = express();

/*
***** Middleware ******
Parse JSON requests sent by the user
and convert it into JS Object before
a Route uses it. 
app.use(express.jason())
allows us to use data sent by the user from binary to jason to be able to use it
*/
app.use(express.json());

// Tells the server where to listen for request
const port = 3000;

/*** Routes ***/
app.use('/', indexRouter)
app.use(peopleRouter)

// setting the .listen of the server. it needs 2 params
app.listen(port, function () {
    // tells the server where to listen for requests
    // on port 3000, this gets posted in the terminal when
    // the server is running
    console.log(`hello-express is listening on port ${port}`);
});


// commented because they are moved.
// // Dummy Data
// let people = [
//     {
//         firstName: 'Mohammed', lastName: 'Almarri',
//     },
//     {
//         firstName: 'Hamza', lastName: 'Alhamza',
//     },
//     {
//         firstName: 'Usman', lastName: 'Bashir',
//     },
//     {
//         firstName: 'Snoop', lastName: 'Dogg'
//     },
// ];

// // Get All People
// app.get('/api/people', function (req, res) {
//     res.json({ people: people });
// });

// // Get Person by Record ID
// app.get('/api/people/:id', function (req, res) {
//     const personID = req.params.id;
//     const person = people[personID]

//     // use isNaN , is Not A Number, to check if it is a number
//     if (!isNaN(personID)) {
//         if (person !== undefined) {
//             res.json({ person: person });
//         } else {
//             //404 == Not Found
//             res.status(404).json({ error: 'Person Not Found' })
//         }
//     } else {
//         // Invalid ID 406 == Not Acceptable
//         res.status(406).json({ error: 'Invalid ID' })
//     }

// });


// app.post('/api/people/', function (req, res) {
//     people.push(req.body.person);
//     console.log(req.body);
//     res.status(201).json({ status: 'ok' });
// });








// setting the root '/' for the browser. this gets posted
// on localhost:3000 or the specified port

//commented because we used the imported route
// app.get('/', function (req, res) {
//     res.send('Hello SEI!')
// });

app.get('/greeting', function (req, res) {
    res.send('Hey, SEI Eternity!')
});

app.get('/rihanna', function (req, res) {
    res.send("Work work work work work")
});

// params
// /usman
// /:name
/*
http://localhost:3000/users/42/friends/9000

in express:
http://localhost:3000/users/:user_id/firend/:friend_id
*/




app.get('/food/:food', (req, res) => {
    res.send(`I love ${req.params.food}`)
})

// localhost:3000/favorite/car
// localhost:3000/favorite/color
// localhost:3000/favorite/food
// which could be formed into 
// localhost:3000/favorite/:item

/*
   query:
   ?q=foo&a=bar&pageNo=42
   {
       q:'foo',
       a:'bar',
       pageNo:42
   }
*/


//another request
app.get('/sightings', function (req, res) {
    res.send(`How many ufo sightings you think there are in that ${req.query.state}? ${req.query.sights}`)
});//How many ufo sightings you think there are in that New York? 42.

//
app.get('/bigfoot', function (req, res) {
    if (req.query.blurry === 'true') {
        res.send("It's not the photographer's fault. Bigfoot is blurry, and that's extra scary to me. There's a large, out-of-focus monster roaming the countryside. Run! He's fuzzy! Get out of there!")
    }
    else { res.send("A group of researchers have amassed evidence that the legendary Bigfoot is real, ABC News reported, with the scientists presenting reams of evidence.") }
})

// /hello/:name?human=true

app.get('/hello/:name', (req, res) => {
    res.send({
        params: req.params,
        queries: req.query,
    });
});

// lab
app.get('/favorite/:noun', (req, res) => {
    if (req.query[req.params.noun])
        res.send(`I have a favorite ${req.params.noun}, it is ${req.query[req.params.noun]}`)
    else
        res.send(`I have a favorite ${req.params.noun}`)
});

// localhost:3000/Omar?first_name=Mohammed&last_name=Almarri
app.get('/:name', (req, res) => {
    console.log(req.params)
    console.log(req.route)
    console.log(req.query)
    res.send(`Hello, ${req.params.name}. My name is ${req.query.first_name} ${req.query.last_name}`)
});//Hello, Omar. My name is Mohammed Almarri



