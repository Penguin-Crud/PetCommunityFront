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
            "name":"Juan",
            "age":"4 semanas",
            "date":"24/04/2020",
            "specie":"Dog",
            "race":"Chiguagua",
            "gender":"male",
            "size":"little",
            "vaccines": "true",
            "chip":"true",
            "imgURL":"https://th.bing.com/th/id/OIP.38IFccTnna2Dv_hW8XU6xAHaHa?w=160&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
        }]
    }
    console.log(data)
    return data;
}
