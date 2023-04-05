import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {type: [String], default: [] },
    comments: { type:[String], default: [] },
    createdAt: {
        type: Date,
        default: new Date()
    },
    about: String,
    price: String,
    nonprice: String,
    timing: String,
    morning:String,
    taxes: String,
    advance: String,
    rooms: String,
    cancellation: String,
    alcohol: String,
    other: String,
    local: String,
    mob: String,
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;

