import api from ".";

export async function getWallet() {
  try {
    const response = await api.get("/wallet"); // No need to repeat the base URL
    return response.data;
  } catch (error) {
    throw new Error("Failed to get wallet");
  }
}
