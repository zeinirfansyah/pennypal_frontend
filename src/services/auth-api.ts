import axios from "@/config/axios/public-instance";
import { IUserType } from "@/types/user.types";

export const register = async (
  userData: Omit<IUserType, "id" | "avatar">
) => {
  const response = await axios.post("/auth/register", userData);
  return response.data;
};
