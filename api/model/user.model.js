import mongoose from 'mongoose';

const userSchema=new mongoose.Schema ({
    username:{
        type:String,
        require:true,
        unique:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    avatar:{
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fprofile_7915522&psig=AOvVaw0eKk0kiVJLEvdDRC0B8LNo&ust=1742926227743000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIjAjryoo4wDFQAAAAAdAAAAABAE",
    }
},{ timestamps: true});

const User= mongoose.model('User',userSchema);
export default User;