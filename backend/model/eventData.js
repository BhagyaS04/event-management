
const mongoose=require('mongoose');
const eventSchema=mongoose.Schema({   
    eventName:String,
    eventDates:String,
    eventDesc : String,
    eventPoster: String,
    eventLikes : Array,
    eventComments: [{ userId: String, comment: String }],
})

const EventData=mongoose.model('event',eventSchema); 
module.exports=EventData