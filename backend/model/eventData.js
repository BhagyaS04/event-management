const mongoose=require('mongoose');
const eventSchema=mongoose.Schema({   
    eventName:String,
    eventDates:String,
    eventDesc : String,
    eventLikes : String,
    // eventComments: Array
})

const EventData=mongoose.model('event',eventSchema); 
module.exports=EventData