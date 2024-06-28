import { IoCloseCircle } from "react-icons/io5";
import './ThanksPage.scss';

export const ThanksPage = ({ setInfo }) => {

    return (
        <div className="thanks">
            <h1>
                Дякую
            </h1>

            <IoCloseCircle 
            className="thanks__icon"
            onClick={() => { setInfo(false) }} 
            />
        </div>
    )
}