import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.css';
import {Container,Button,Form,FormGroup,Label,Input,Card,CardBody,CardHeader,FormFeedback,} from "reactstrap";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Field, Formik, MySelect  } from "formik";

import * as Yup from 'yup';
function App() {
  
  
  
  return (

  

    <Container className="p-5">
      <Card>
        
        <CardBody>
          <Formik
            initialValues={{
              nombre: "",
              correo: "",
              telefono: "",
              estatura: "",
              fecha: "",
             
            }}
            validate={(values) => {
              const errors = {};

              if (!values.nombre ) errors.nombre = "Nombre es obligatorio";
             
              if (!values.correo) errors.correo = "Correo es  Obligatorio";
              if (!values.fecha) errors.fecha = "Fecha de nacimiento Obligatoria";
              if (!values.estatura) errors.estatura = "Estatura obligatoria";

              if (!values.telefono) errors.telefono = "Telefono obligatorio";
                else if (`${values.telefono}`.length <10 ) errors.telefono="Numero debe contener 10 digitos"
              
            //  if (!values.foto) errors.foto = "Selecciona un imagen";




              console.log({ values, errors });

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
             //   alert(JSON.stringify(values, null, 2));

                fetch('http://localhost:2000/formulario/guardar', {
                  method: 'POST', // or 'PUT'
                  body: JSON.stringify(values), // data can be `string` or {object}!
                  headers:{
                    'Content-Type': 'application/json'
                  }
                }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => console.log('Success:', response))


                setSubmitting(false);
              }, 250);
            }}
          

            
          >
            {(props) => {
              const {
               values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                
              } = props;
              return (
                <Form onSubmit={handleSubmit}>
               <center> <h1>Fromulario No Me Truenes XFA</h1></center>   
                  <FormGroup>
                      <Label for="Nombre">Nombre</Label>
                     <Input type="text" name="nombre" id="idnombre"  invalid={errors.nombre && touched.nombre}  onChange={handleChange} onBlur={handleBlur}  value={values.nombre}/>
                      <FormFeedback>{errors.nombre}</FormFeedback>
                      </FormGroup>
                      < FormGroup>
                      <Label for="telefono">Telefono</Label>
                       <Input type="number" name="telefono" id="idtelefono" invalid={errors.telefono && touched.telefono}  onChange={handleChange} onBlur={handleBlur}  value={values.telefono} />
                       <FormFeedback>{errors.telefono}</FormFeedback>
                      </FormGroup>
                      < FormGroup>
                      <Label for="telefono">Estatura</Label>
                       <Input type="text" name="estatura" id="idestatura" invalid={errors.estatura && touched.estatura}  onChange={handleChange} onBlur={handleBlur}  value={values.estatura} />
                       <FormFeedback>{errors.estatura}</FormFeedback>
                      </FormGroup>
                      <FormGroup>
                      <Label for="Correo">Correo</Label>
                     <Input type="email" name="correo" id="idCorreo"  invalid={errors.correo && touched.correo}  onChange={handleChange} onBlur={handleBlur}  value={values.correo}/>
                     <FormFeedback>{errors.correo}</FormFeedback>
                      </FormGroup>
                 
                      <FormGroup>
                      <Label for="FN">Fecha de nacimiento</Label>
                      <Input type="date" name="fecha" id="idfecha"  min="1930-01-01" max="2022-02-01"  invalid={errors.fecha && touched.fecha}  onChange={handleChange} onBlur={handleBlur}  value={values.fecha}/>
                      <FormFeedback>{errors.fecha}</FormFeedback>
                      </FormGroup>
                     <center>
                       
                     <Button type="submit" class="btn btn-primary btn-lg btn-block" disabled={isSubmitting}>
                    {isSubmitting ? `Cargando` : `Enviar`} 
                  </Button>
                        </center>
                  
                </Form>
              );
            }}
          </Formik>
        </CardBody>
      </Card>
    </Container>
    
  );
}


const registro = () =>{
  return{
    nombre: "Abisai",
    telefono: "777418981",
    correo: "nulsiona500@gmail.com",
    estatura: "1.m",
    fecha: "2021-05-03"
     
} }



const options = [
  { value: 'Masculino', label: 'Masculino' },
  { value: 'Femenino', label: 'Femenino' },
];

export default App;


