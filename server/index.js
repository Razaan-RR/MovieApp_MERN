const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())


const uri = "mongodb+srv://razaan_db:2iYm0biMskQfQPOb@clusterpractice.wzcrq6x.mongodb.net/?appName=ClusterPractice";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const db = client.db('model-db')
    const modelCollection = db.collection('models')

    // get method
    //find - find multiple data
    //findOne - find one particular document

    app.get('/models', async (req, res)=>{
        const result = await modelCollection.find().toArray() //promise
        res.send(result)
    })

    // post method
    // insertOne
    // insertMany

    app.post('/models', async (req, res)=>{
      const data = req.body
      // console.log(data)
      const result = await modelCollection.insertOne(data)
      res.send({
        success: true,
        result
      })
    })


    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
