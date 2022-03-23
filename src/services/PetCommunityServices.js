import axios from "axios";

const url = "http://localhost:";
let port = "3000";  // json-server
//let port = "8080";
const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}


export async function isOnline() {
    try {
        return await axios.get(url + port + "/pets", config)
        .then(res => { console.warn("Status Back-End: ",res.status)})
    } catch {
        return console.warn("#Back-End is offline \n or port != 8080. \n #Actual port for Back-End => ",port ,"\n\n Also can you run json-server putting this command: \n\n\t json-server --watch ./data/db.json \n PD: Remember change port in PetCommunityServices.js" )
    }
}


export async function dataPetsService(endPoint, id) {
    let data;

    if (id === "all") {
        try{ 
            data = await axios.get(url + port + endPoint)
            .then(res => res.data)
        } catch {
            console.warn("Fetch failed in dataPetsService, deployment auxiliar data.")
            endPoint === "/pets" ? 
                data = [{
                    "id": 0,
                    "imgURL":[{url: "https://i.pinimg.com/236x/6b/22/98/6b2298fec93ad8240f87c8228ab87969.jpg"}]
                }]
                :
                data = [{
                    "id": 0,
                    "logo": "https://i.pinimg.com/236x/6b/22/98/6b2298fec93ad8240f87c8228ab87969.jpg"
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
        console.warn("Fetch failed in dataPetsService, deployment auxiliar data.")
        endPoint === "/pets" ? 
            data = [{
                "id": 0,
                "imgURL":[{url: "https://i.pinimg.com/236x/6b/22/98/6b2298fec93ad8240f87c8228ab87969.jpg"}]
            }]
            :
            data = [{
                "id": 0,
                "logo": "https://i.pinimg.com/236x/6b/22/98/6b2298fec93ad8240f87c8228ab87969.jpg"
            }]
    }
    console.log(endPoint, data)
    return data;
}


export async function create(endPoint, formData) {
    return await axios.post(url + port + endPoint, formData, config)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
}

export function deleteById(endPoint, id) {
    id.toString();
    axios.delete(url + port + endPoint + "/" + id);
}
export async function update(endPoint, data) {
    await axios.patch(url + port + endPoint + '/' + data.id , data);
}