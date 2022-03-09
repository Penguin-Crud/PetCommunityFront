import axios from "axios";

const url = "http://localhost:";
const port = "3000";

export async function dataPetsService(endPoint) {
    let data;
    try{ 
        data = await axios.get(url + port + endPoint)
        .then(res => res.data)
    } catch {
        console.error("Fetch fallido in dataPetsService o DB no levantada")
        data = [{
            "id": 0,
            "imgURL":"https://i.pinimg.com/236x/6b/22/98/6b2298fec93ad8240f87c8228ab87969.jpg"
        }]
    }
    console.log(data)
    return data;
}

export function create(data, endPoint) {
    axios.post(url + port + endPoint, data);
}