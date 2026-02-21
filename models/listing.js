const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema= new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        filename:{
            type:String,
        default:"listingimage"
    },
        url:{
            type:String,
            required:true
        }        // default:"https://unsplash.com/photos/gondolas-on-water-with-historic-buildings-and-seagull-omDeUOEuYcc",
        // set:(v)=> v==="" ? "https://unsplash.com/photos/gondolas-on-water-with-historic-buildings-and-seagull-omDeUOEuYcc": v,   
    },
    price:Number,
    location:String,
    country:String,

});

const Listing=mongoose.model("Listing",listingSchema);
module.exports =Listing;