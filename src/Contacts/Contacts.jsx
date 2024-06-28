import { FaFacebook } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { FiShare2 } from "react-icons/fi";
import './Contacts.scss';

export const Contacts = () => {

    return (
        <div className="contacts">
            <div className="contacts__container">
                <div className="contacts__box facebook">
                    <FaFacebook className="icon" />
                </div>
                
                <div className="contacts__box whatsapp">
                    <ImWhatsapp className="icon" />
                </div>

                <div className="contacts__box share">
                    <FiShare2 className="icon" />
                </div>
            </div>
        </div>
    )
}