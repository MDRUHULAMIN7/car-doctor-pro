 import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next"
 import  CredentialsProvider from "next-auth/providers/credentials"
 import bcrypt from "bcrypt";
 const  handler = NextAuth({
  secret:process.env.NEXT_PUBLIC_AUTH_SECRET,
  session:{
    strategy:'jwt',
    maxAge:30*24*60*60,
  },
  providers:[
    CredentialsProvider({
        credentials:{
            email:{},
            password:{}
        },
        async authorize (credentials){
          const {email,password}=credentials
          if(!email || !password ){
            return null;
          }
          const db=await connectDB()
          const currentUser = await db.collection('users').findOne({email})
            // return true;
            if(!currentUser){
              return null;
            }
            const passwordMatch =bcrypt.compareSync(password,currentUser.password);
            if (!passwordMatch){
              return null
            }
            return currentUser;
        }

    })
  ],
   callback:{},
   pages:{
    signIn:'/signin'
   },
 })

 export {handler as GET,handler as POST}