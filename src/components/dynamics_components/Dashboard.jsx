import "../../styles/index.css";

function Dashboard() {
    return (
    <div className="containerDashboard">
        <h1 className="titleSlider marginTitle">Dashboard</h1>
        <div className="tableContainer">
            <table >
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Date</th>
                        <th>Species</th>
                        <th>Race</th>
                        <th>Gender</th>
                        <th>Size</th>
                        <th>Vaccines</th>
                        <th>Chip</th>
                        <th className="dashboardActions">Actions</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>+info</td>
                        <td>pepe</td>
                        <td>3 years</td>
                        <td>12/02/20</td>
                        <td>Perro</td>
                        <td>Bulldog</td>
                        <td>male</td>
                        <td>little</td>
                        <td>True</td>
                        <td>True</td>
                        <td className="dashboardActions">
                            <button className="actionEdit">E</button>
                            <button className="actionDelete">D</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

    </div>
    
    )
}

export default Dashboard;