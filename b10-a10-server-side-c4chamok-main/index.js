require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5800;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_USERPASS}@cluster-crud1.0ugo3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-CRUD1`;


app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    res.send("This is Server");
})


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {

        const database = client.db("FavFlixDB");
        const movies = database.collection("Movies");
        const favouriteMovies = database.collection("FavouriteMovies");
        const comments = database.collection("Comments");

        app.post("/movies", async (req, res) => {
            const result = await movies.insertOne(req.body);
            res.send(result);
        })

        app.get("/favourite-movies/:email", async (req, res) => {
            const query = { email: req.params.email };
            const cursor = await favouriteMovies.findOne(query);
            if (cursor.movieIDS) {
                const objectIds = cursor.movieIDS.map(id => new ObjectId(id));
                const movieData = await movies.find({ _id: { $in: objectIds } }).toArray();
                res.send(movieData);
            }
        })

        app.get("/movies/:id?", async (req, res) => {
            const { id } = req.params;
            const query = id ? { _id: new ObjectId(id) } : {};
            const options = {};
            const cursor = movies.find(query, options);
            const movieData = await cursor.toArray();
            res.send(movieData);
        })

        app.get("/moviesearch", async (req, res) => {
            const { serachText, category } = req.query;
            if (category) {
                const cursor = movies.find({ genre: { $in: [category] }});
                const movieData = await cursor.toArray();
                return res.send(movieData);
            } else {
                const query = serachText ? { title: { $regex: serachText, $options: 'i' } } : {};
                const cursor = movies.find(query);
                const movieData = await cursor.toArray();
                res.send(movieData);
            }
        })

        app.put("/movies", async (req, res) => {
            const { _id, ...updatedfields } = req.body
            const filter = { _id: new ObjectId(_id) };

            const updateDoc = {
                $set: updatedfields,
            };
            const result = await movies.updateOne(filter, updateDoc);
            res.send(result)
        })

        app.delete("/movies/:id?", async (req, res) => {
            const { id } = req.params;
            const query = id ? { _id: new ObjectId(id) } : {};
            const result = await movies.deleteOne(query);
            res.send(result);
            console.log(query, result);
        })

        app.get("/featured-movies", async (req, res) => {
            const query = {};
            const options = {
                sort: { rating: -1 },
            };
            const cursor = movies.find(query, options);
            const movieData = await cursor.limit(8).toArray();
            res.send(movieData);
        })

        app.post("/favorite-movies/", async (req, res) => {
            const clientData = req.body;
            const query = { email: clientData.email };
            const cursor = await favouriteMovies.findOne(query);


            if (clientData?.movieID) {

                if (cursor) {
                    if (cursor.movieIDS.includes(clientData.movieID)) {
                        console.log("Already Includes");
                    } else {
                        const updateDoc = {
                            $set: {
                                movieIDS: [...cursor.movieIDS, clientData.movieID]
                            },
                        };
                        const result = await favouriteMovies.updateOne(query, updateDoc);
                        res.send(result);
                    }


                } else {
                    const newFavourites = { email: clientData.email, movieIDS: [clientData.movieID] };
                    const result = await favouriteMovies.insertOne(newFavourites);
                    res.send(result);
                }
            } else {
                res.send(cursor || "{}")
            }
        })

        app.delete("/favorite-movies/", async (req, res) => {
            const clientData = req.body;
            const query = { email: clientData.email };
            const cursor = await favouriteMovies.findOne(query);
            if (cursor?.movieIDS.includes(clientData.movieID)) {
                const newMovieIds = cursor?.movieIDS.filter(id => id !== clientData.movieID)
                const updateDoc = {
                    $set: {
                        movieIDS: newMovieIds
                    },
                };
                const result = await favouriteMovies.updateOne(query, updateDoc);
                res.send(result);
            }
        })

        app.post("/comments", async (req, res) => {

            const { email, comment } = req.body;

            const newComment = {
                email,
                comment,
                timestamp: new Date(),
            };
            const result = await comments.insertOne(newComment);
            res.send(result);

        });

        app.get("/comments", async (req, res) => {

            const results = await comments.find({}).sort({ timestamp: -1 })
                .limit(5).toArray();

            res.send(results)
        });



    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);





app.listen(port, () => {
    console.log(`server is runnning at http://localhost:${port}`);
})
