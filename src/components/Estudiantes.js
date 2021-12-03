import axios from "axios";
import React, { Component } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from "reactstrap";


const url = 'https://miniback.herokuapp.com/lista'

export default class Estudiantes extends Component {

    constructor (){
        super();
        this.state = {
            data : []
        }
    }

    componentDidMount(){
       this.peticiionGet();
    }
    deleteData(id) {
        axios.delete(url + id)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    peticiionGet(){
        axios.get(url)
        .then(response => {
            this.setState({data: response.data})
            console.log(response.data)
        })
        .catch(error =>{
            console.log(error)
        })
 
     }

     


    render() {
        return (
            <div className="container">
             <Navbar/>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Documento</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Teléfono</th>
                            <th>Celular</th>
                            <th>Dirección</th>
                            <th>Imagen</th>
                            <th>Operaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           this.state.data.map(est =>(
                               <tr>
                                     <td>{est.id}</td>
                                   <td>{est.documento}</td>
                                   <td>{est.nombres}</td>
                                   <td>{est.apellidos}</td>
                                   <td>{est.telefono}</td>
                                   <td>{est.celular}</td>
                                   <td>{est.direccion}</td>
                                   <td><img src={est.imagen} width="50" height="50"/></td>
                                   <td><button onClick= {()=>
                                this.deleteData}>Eliminar</button></td>



                               </tr>
                           ))
                       }
                    </tbody>
                </table>

                <Modal>
                    <ModalBody>
                        Está seguro de eliminar el estudiante
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-danger"
                      >Sí</button>
                        <button className="btn btn-secundary"
                      >No</button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
