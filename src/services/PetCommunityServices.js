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
    console.log(endPoint, data)
    return data;
}


//url + port + endPoint + "/create"
export function create(endPoint, data) {
    axios.post(url + port + endPoint, data);
}
//url + port + endPoint + "/delete"
export function deleteById(endPoint, id) {
    id.toString();
    axios.delete(url + port + endPoint + "/" + id);
}