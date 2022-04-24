const {MongoClient} = require('mongodb');

async function main(){

    const uri = "mongodb+srv://davinfortune:root@cluster0.tth1f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try{
        await client.connect();

        // await createListing(client,
        //     {
        //     username : "davinfortune",
        //     email : "davinfortune@gmail.com",
        //     password : "tester123",
        //     country : "Ireland",
        //     telephone : 0830501771
        //     })

        await findOneListingByName(client, "davinfortune@gmail.com");

    } catch(e){
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function createListing(client, newListing) {
    const result = await client.db("klepto").collection("users").insertOne(newListing);

    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
}

async function findOneListingByName(client, emailOfListing){
    const result = await client.db("klepto").collection("users").findOne({email: emailOfListing});

    if (result) {
        console.log(`Found a lisiting in the collection with the email: ${emailOfListing}`);
        console.log(result);
    } else {
        console.log('no listing found');
    }
}

//https://www.youtube.com/watch?v=fbYExfeFsI0&ab_channel=MongoDB

