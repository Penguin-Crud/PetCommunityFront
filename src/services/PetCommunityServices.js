import axios from "axios";
import Logo from "../assets/logo3.png";

// axios.defaults.baseURL = "http://127.0.0.1:8000/";

// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.post['Accept'] = 'application/json';
// axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('authToken');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});


const url = "http://localhost:";
let port = "3000";  // json-server
/* let port = "8080"; */

let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhc28xIiwiaWF0IjoxNjQ4MDI3NzA0LCJleHAiOjE2NDgxMTQxMDR9.hFoXDee9oPHgf0EsUFRixSnTpCJ9lYaGsI2VmJjn_NBcDgudSTQhfopf8BMUePCV9p2yA8KtRh4Dq4thBsZidA';
const config = { headers: { 'content-type': 'multipart/form-data' } }
const config2 = { headers: {'Authorization': 'Bearer ' + token} }
const config3 = { headers: {'content-type': 'multipart/form-data'/*, 'Authorization': 'Bearer ' + token*/} }
const config4 = { headers: {'Content-Type': 'application/json'} }
const config5 = { 
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json' },
    whitCredentials: true
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
                    "imgURL":[{url:"../assets/logo3.png"}]
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
    return await axios.post(url + port + endPoint, formData, config3)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
}
export function deleteById(endPoint, id) {
    id.toString();
    axios.delete(url + port + endPoint + "/" + id, config2);
}
export async function update(endPoint, data) {
    await axios.put(url + port + endPoint, data, config2);
}



export async function signUp(endPoint, data) {
    return await axios.post(url + port + "/auth" + endPoint, data, config4 )
    .then(function (response) {
        console.log(JSON.stringify(response.data.message));
      })
      .catch(function (error) {
        console.log(error);
      });
}
export async function signIn(endPoint, data) {
    return await axios.post(url + port + "/auth" + endPoint, data, config5)
    .then(function (response) {
        console.log(response);
        return response
      })
      .catch(function (error) {
        console.log(error);
      });
}