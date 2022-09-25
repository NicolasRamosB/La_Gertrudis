import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './Form.css'

const Form = () =>{
    return(
        <div className="formSection">
            <div className="formContainer">
            <h3 className="formTitle">Envíanos tu consulta</h3>
            <form className="form">
                <TextField 
                    id="outlined-basic" 
                    label="Nombre y Apellido" 
                    variant="outlined" 
                    className="formInput"
                    color="grey"
                />
                <TextField 
                    id="outlined-basic" 
                    label="Correo electrónico" 
                    variant="outlined" 
                    className="formInput"
                    color="grey"
                />
                <TextField
                    id="outlined-textarea"
                    label="Ingresa tu consulta"
                    multiline
                    rows={8}
                    className="formTxt"
                    color="grey"
                />
                <Button variant="contained" className="btnForm">Enviar</Button>
            </form>
            </div>
        </div>
    )
}
export default Form;