import { MongoClient, ServerApiVersion } from "mongodb";


let db;
export const connectDB = async()=>{
              
              try {
                const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
                console.log(uri);
                const client = new MongoClient(uri,{
                    serverApi:{
                        version:ServerApiVersion.v1,
                        strict:true,
                        deprecationErrors:true,
                    },
                });
                 db = client.db('carDoctorPro')
                 console.log('mongo ready');
                 return db;
                
              } catch (error) {
                console.log(error);
              }
}