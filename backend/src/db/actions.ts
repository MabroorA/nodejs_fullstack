import { UserModel } from "./user";

export const createUser = async (values: Record<string, any>) => {
  try {
    const user = new UserModel(values);
    await user.save();
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Error creating user");
  }
};

export const getUsers = async () => {
  try {
    return await UserModel.find();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Error fetching users");
  }
};
export const getUserByEmail = async (email: string) => {
  try {
    return await UserModel.findOne({ email });
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw new Error("Error fetching user by email");
  }
};
