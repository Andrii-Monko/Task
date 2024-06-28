import { useState } from 'react';
import './Field.scss';


export const Field = ({ setInfo }) => {

    const [nameField, setNameField] = useState(false);
    const [surnameField, setSurameField] = useState(false);
    const [phoneField, setPhoneField] = useState(false);
    const [mailField, seMailField] = useState(false);
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')

    const fieldFunction = () => {

        if (!name) {
            setNameField(true)
            return
        }
        if (!surname) {
            setSurameField(true)
            return
        }
        if (!phone) {
            setPhoneField(true)
            return
        }
        if (!mail) {
            seMailField(true)
            return
        }

        if (name.length >= 1) {
            setInfo(true)
        }
    }

    return (
        <div className="field" id='field'>
            <form className="field__form">

                <input
                    type="text"
                    placeholder="Ім'я"
                    className="field__input"
                    required
                    value={name}
                    onChange={(event) => { setName(event.target.value) }}

                />

                <input
                    type="text"
                    placeholder="Прізвище"
                    className="field__input"
                    required
                    value={surname}
                    onChange={(event) => { setSurname(event.target.value) }}
                />

                <input
                    type="email"
                    placeholder="E-mail"
                    className="field__input email"
                    required
                    value={mail}
                    onChange={(event) => { setMail(event.target.value) }}
                />

                <input
                    type="phone"
                    placeholder='Номер телефону'
                    className="field__input phone"
                    required
                    value={phone}
                    onChange={(event) => { setPhone(event.target.value) }}
/>

                <button
                    className='field__input button'
                    onClick={() => {
                        fieldFunction()
                    }}
                >
                    Click on me
                </button>
            </form>
        </div>
    )
}