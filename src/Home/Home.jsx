import { useState } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MainContent } from "../MainContent/Main";
import { Field } from "../TextField/Field";
import { Top } from "../Top/Top";
import { ThanksPage } from "../ThaksPage/ThanksPage";

export const Home = () => {
    const [info, setInfo] = useState(false)
    
    return (
        <div>
            <Top />
            <Header />
            {info === false ?
                <div>
                    <MainContent />
                    <Field info={info} setInfo={setInfo} />
                </div>
                :
                <div>
                    <ThanksPage setInfo={setInfo} />
                </div>
            }
            <Footer />
        </div >
    )
}