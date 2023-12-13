import axios from "axios";

const url = "http://todo.test/api/users";

// export const getUsers = axios
//   .get(url)
//   .then((res) => {
//     console.log(res);
//     return res.data;
//   })
//   .catch((e) => {
//     console.log(e);
//   });

export const getUsers = async () => {
    try {
      const response = await axios.get(url);
      return response.data; // Assuming your API returns data property with the actual user data
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error; // Re-throw the error so that it can be caught by the caller
    }
  };

