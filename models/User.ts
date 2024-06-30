import mongoose from "mongoose";
export interface IUser extends Document {
  email: string;
}
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      match: /.+\@.+\..+/,
      unique: true,
      min: 2,
      max: 100,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);
// const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
