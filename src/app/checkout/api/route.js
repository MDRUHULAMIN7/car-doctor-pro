import { connectDB } from "@/lib/connectDB"


export const POST=async(request,)=>{
    const newBooking=request.json()
    const db=await connectDB();
    const bookingsCollection = db.collection('bookings')
    try {

       const booking= await bookingsCollection.findOne(newBooking)
       return Response.json({message:"service booked successfully",booking}) 
    } catch (error) {
        console.log(error);
    }
}