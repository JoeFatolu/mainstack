import api from ".";
import { User } from "@/interfaces/User";

export async function getUser(): Promise<User> {
  try {
    const response = await api.get("/user"); // No need to repeat the base URL
    return response.data;
  } catch (error) {
    throw new Error("Failed to get user");
  }
}
