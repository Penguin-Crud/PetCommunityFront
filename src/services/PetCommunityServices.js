import axios from "axios";

const url = "http://localhost:";
//const port = "3000";  // json-server
const port = "8080";
const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}


export async function dataPetsService(endPoint, id) {
    let data;
    
    // endPoint + "/all"
    if (id === "all") {
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
export async function create(endPoint, formData) {
    return await axios.post(url + port + endPoint, formData, config)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
    
}
//url + port + endPoint + "/delete"
export function deleteById(endPoint, id) {
    id.toString();
    axios.delete(url + port + endPoint + "/" + id);
}
export async function update(endPoint, data) {
    await axios.patch(url + port + endPoint + '/' + data.id , data);
}