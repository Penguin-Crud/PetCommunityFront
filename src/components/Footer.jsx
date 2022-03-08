import "../styles/index.css";
import AssociationsList from "./dynamics_components/AssociationsList";

function Footer() {
    return (
        <footer className="Footer">
            <div className="associations">
                <AssociationsList />
            </div>
            <div>Information, copyrihght y nuestros githubs</div>
        </footer>
    )
}

export default Footer;