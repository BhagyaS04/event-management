const mongoose=require('mongoose');
const eventSchema=mongoose.Schema({   
    eventName:String,
    eventDates:String,
    eventDesc : String,
    eventLikes : String
})

const EventData=mongoose.model('event',eventSchema); 
module.exports=EventData