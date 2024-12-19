"use server";

import { connect, Schema, model, models } from "mongoose";

//create mongodb connection

const connectDB = async () => {
  try {
    await connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log("something happened", error);
  }
};

const userSch = new Schema(
  {
    email: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    useTimeStamps: true,
  }
);

const userModel = models.users || model("users", userSch);

export async function SubmitForm(prevState, formData) {
  try {
    await connectDB();
    const nameVal = formData.get("name");
    const emailVal = formData.get("email");
    const date = new Date();

    if (!nameVal || !emailVal || nameVal === "" || emailVal === "") {
      return {
        error: "All fields are required",
      };
    }
    const user = new userModel({
      email: emailVal.trim(),
      name: nameVal.trim(),
      date,
    });

    await user.save();
    return {
      success: true,
      message: "Thank You for joining our wait list",
    };
  } catch (error) {
    return {
      error: error.message ? error.message : "please try again later",
    };
  }
}
export async function getUsers() {
  try {
    await connectDB();

    const users = await userModel.find();
    return {
      success: true,
      users,
    };
  } catch (error) {
    return {
      error: "All fields are required",
    };
  }
}
