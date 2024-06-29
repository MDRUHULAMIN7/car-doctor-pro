import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
export const POST = async(request)=>{
    const newUser = await request.json();
    console.log(newUser);
    try {
        const db = await connectDB();
        const userCollection = db.collection('users')
        const exit =await userCollection.findOne({email:newUser.email})
        if(exit){
            return Response.json({message:"user already exit"},{status:304})
        }
        const hashedPassword = bcrypt.hashSync(newUser.password, 14);
            const resp = await userCollection.insertOne({...newUser,password:hashedPassword});
            return Response.json({message:"user created"},{status:200})
        
    } catch (error) {
        return Response.json({message:"something wrong",error},{status:500})
        
    }
}

