import "../../styles/index.css";

function Dashboard() {
    return (
    <div>
        <h1>Dashboard</h1>
        <div className="table">
            <table >
                <colgroup class="columns"></colgroup>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Years</th>
                    <th>Date</th>
                    <th>Species</th>
                    <th>Race</th>
                    <th>Gender</th>
                    <th>Size</th>
                    <th>Vaccines</th>
                    <th>Chip</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>+info</td>
                    <td>USA</td>
                    <td>Washington D.C.</td>
                    <td>309 million</td>
                    <td>English</td>
                </tr>
               
            </table>
        </div>

    </div>
    
    )
}

export default Dashboard;