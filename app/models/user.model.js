import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = mongoose.Schema(
  {
      user_id:{
        type: String,
      },
    user_name: {
      type: String,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      unique: [true, "email is already present"],
      lowercase: true,
    },
    password: {
        type: String,
        required:true
      },
    mobile_number: {
      type: String,
      unique: [true, "mobile number is already present"]
    },
    user_role: {
      type: String,
      enum: ["USER", "SELLER"],
      default: "USER",
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timeStamps: true,
  }
);

userSchema.pre("save", async function(next){
    const user = this
    user.user_id = user.user_id;
    user.password = await bcrypt.hash(user.password,10)
    next()
})

const userModel = mongoose.model("users", userSchema);
export default userModel;
