import axios from "axios";

const port = "3000";

export async function dataPetsService() {
    let data;
    try{ 
        data = await axios.get("http://localhost:"+ port +"/pets")
        .then(res => res.data)
    } catch {
        console.error("Fetch fallido in dataPetsService ")
    }
    return data;
}