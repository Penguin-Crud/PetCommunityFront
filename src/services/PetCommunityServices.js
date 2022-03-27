import axios from "axios";

const url = "http://localhost:";
//let port = "3000";  // json-server
let port = "8080";

const config_Crud = { baseUrl: url + port, headers: {'content-type': 'multipart/form-data'}}
const config_crUD = { baseUrl: url + port}
const config_sigIn = { baseUrl: url + port + "/auth", headers: {'Content-Type': 'application/json'} }
const config_signUp = { baseUrl: url + port + "/auth", headers: {'Content-Type': 'application/json', 'Accept': 'application/json' }, whitCredentials: true}
const auxiliar_data_pets = [{"id": 0, "petImg":[{url:"https://i.pinimg.com/236x/6b/22/98/6b2298fec93ad8240f87c8228ab87969.jpg"}]}]
const auxiliar_data_association = [{"id": 0, "logo": "https://i.pinimg.com/236x/6b/22/98/6b2298fec93ad8240f87c8228ab87969.jpg"}]
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('authToken');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export async function isOnline() {
    try {
        return await axios.get(url + port + "/pets", { headers: { 'content-type': 'multipart/form-data' } })
        .then(res => { console.warn("Status Back-End: ", res.status)})
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
                data = auxiliar_data_pets
                :
                data = auxiliar_data_association
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
            data = auxiliar_data_pets
            :
            data = auxiliar_data_association
    }
    console.log(endPoint, data)
    return data;
}


export async function create(endPoint, formData) {
    return await axios.post(
            config_Crud.baseUrl + endPoint, 
            formData, 
            config_Crud.headers
        )
        .then(res => { console.log(res) })
        .catch(error => { console.log(error) });
}
export async function update(endPoint, data) {
    await axios.put(
        config_crUD.baseUrl + endPoint, 
        data, 
        config_crUD.headers
    );
}
export function deleteById(endPoint, id) {
    id.toString();
    axios.delete(
        config_crUD.baseUrl + endPoint + "/" + id, 
        config_crUD.headers
    );
}
export async function updateUser(endPoint, data){
    return await axios.put(
        config_Crud.baseUrl + endPoint, 
        data, 
        config_Crud.headers
    );
}



export async function signUp(endPoint, data) {
    return await axios.post(
            config_sigIn.baseUrl + endPoint, 
            data, 
            config_sigIn.headers 
        )
        .then( res => { console.log(JSON.stringify(res.data.message)) })
        .catch( error => { console.log(error) });
}
export async function signIn(endPoint, data) {
    return await axios.post(
            config_signUp.baseUrl + endPoint, 
            data, 
            {headers: config_signUp.headers, whitCredentials: config_signUp.whitCredentials}
        )
        .then( res => { console.log(res); return res })
        .catch(error => { console.log(error); });
}
