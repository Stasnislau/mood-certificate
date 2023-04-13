const API_URL = process.env.API_URL || "http://localhost:3001/api";


export const uploadImage = async (image: Blob) => {
  const formData = new FormData();
  formData.append("image", image);

  const response = await fetch(`${API_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  return response.json();
};
