import React, { useState } from "react";
import { useFetchInitClassrooms } from "../../hooks/classrooms/index";
import { useFetchInitDataReports } from "../../hooks/dataReports/index";

import TabPanel from '@mui/lab/TabPanel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import Modal from '../modal/Modal.js'

import axios from "axios";

const ClassroomsCards = () => {
    const { FetchClassrooms } = useFetchInitClassrooms();
    const { classrooms } = FetchClassrooms;

    const { FetchDataReports } = useFetchInitDataReports();
    const { reportsData } = FetchDataReports;

    const [stateModal, setStateModal] = useState({
        open: false,
        title: ' ',
        component: '',
        params: {}
    });

    const toggle = (_, title, component, params) => {
        setStateModal({
            ...stateModal,
            open: !stateModal.open,
            title,
            component,
            params
        })
    }

    const [state, setState] = useState({
        titulo: "",
        descripcion: "",
        id_estado_incidencia: 1,
        id_aula: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            titulo: state.titulo,
            descripcion: state.descripcion,
            id_estado_incidencia: state.id_estado_incidencia,
            id_aula: state.id_aula
        };
        axios.post("http://localhost:3050/reporte/reportes", userData).then((response) => {
            console.log(response.status);
            console.log(response.data);
            setStateModal(false)
        });
    };

    return (
        <div className='MapClass'>
            {
                classrooms.map((item) => {
                    const { id_aula, aula, tipo_aula, id_planta } = item
                    return (
                        <>
                            <TabPanel value={String(id_planta)} key={id_aula}>
                                <Card className='cards' key={id_aula}>

                                    <div className={`status-${reportsData.filter(e => e.estado === 'abierto' && e.id_aula === id_aula).length > 0 ? 'problem' : 'success'}`} />

                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {tipo_aula} {aula}
                                        </Typography>
                                    </CardContent>
                                    <CardActions key={id_aula}>
                                        <Button
                                            size="small"
                                            onClick={() => toggle(null, id_aula + tipo_aula + aula, 'create-incidence', item)}
                                        >Añadir Incidencia</Button>
                                    </CardActions>
                                </Card>
                            </TabPanel>
                        </>
                    )
                })
            }

            <Modal
                state={stateModal.open}
                statusChange={toggle}
                title={stateModal.title}
            >
                <div className='content' >
                    <div className="incident-form">
                        <form onSubmit={handleSubmit}>
                            <p>
                                <label form="titulo">Titulo</label>
                                <input
                                    type='text'
                                    name='titulo'
                                    value={state.titulo}
                                    onChange={handleChange}
                                />
                            </p>
                            <p>
                                <label>Descripcion</label>
                                <textarea
                                    name='descripcion'
                                    rows='5'
                                    value={state.descripcion}
                                    onChange={handleChange}
                                ></textarea>
                            </p>
                            {/* <p>
                                <label>ID Estado Incidencia</label>
                                <input
                                    type="text"
                                    name="id_estado_incidencia"
                                    value={state.id_estado_incidencia}
                                    onChange={handleChange}
                                ></input>
                            </p> */}
                            <p>
                                <label>ID Aula</label>
                                <input
                                    type="text"
                                    name="id_aula"
                                    value={state.id_aula}
                                    onChange={handleChange}
                                ></input>
                            </p>
                            <button
                            type="submit" 
                            className='rightButtonAccept'

                            >Crear</button>
                            <button
                                className='leftButtonCancel'
                                onClick={toggle}
                            >Cancelar</button>
                        </form>
                    </div>
                    {/* <button type="button" onClick={() => console.log(stateModal)}>Ver state</button> */}
                </div>
            </Modal>
        </div>
    )
}

export default ClassroomsCards