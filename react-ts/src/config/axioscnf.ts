import axios from "axios";
const axionInstance = axios.create({
    baseURL:`http://localhost:3000`
})
export default axionInstance