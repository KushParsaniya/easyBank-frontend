import axios from "axios";
import { api_endpoints } from "../utils/apiInfo";

async function doSignIn(email, password) {
    const item = { email, password };
    const loginApi = process.env.REACT_APP_URL + api_endpoints.signin;

    try {
        const response = await axios.post(
            loginApi,
            item,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );

        if (response.status === 200) {
            const { data, jwt } = response.data;
            localStorage.setItem("token", jwt);
            console.log(data);
            console.log(jwt);
            return data;
        }
        else if (response.status === 404) {
            throw new Error("User not found.");
        }
        else if (response.status === 401) {
            throw new Error("Invalid credentials.");
        }
        else if (response.status === 500) {
            throw new Error("Internal server error.");
        }
    } catch (error) {
        throw new Error("Error found : " + error);
    }
}

export default doSignIn;