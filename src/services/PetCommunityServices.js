import axios from "axios";

const url = "http://localhost:";
const port = "3000";

export async function dataPetsService(endPoint, id) {
    let data;
    
    // endPoint + "/all"
    if (id == "all") {
        try{ 
            data = await axios.get(url + port + endPoint)
            .then(res => res.data)
        } catch {
            console.error("Fetch failed in dataPetsService or DB no Initialized")
            data = [{
                "id": 0,
                "imgURL":"https://i.pinimg.com/236x/6b/22/98/6b2298fec93ad8240f87c8228ab87969.jpg"
            }]
        }
        console.log(endPoint, data)
        return data;
    }

    try{ 
        id.toString();
        data = await axios.get(url + port + endPoint + "/" + id)
        .then(res => res.data)
    } catch {
        console.error("Fetch failed in dataPetsService or DB no Initialized")
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

export function update(endPoint, data) {
    axios.put(url + port + endPoint, data);
}