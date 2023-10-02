import React, { useState, useEffect } from 'react';
import '../styles/CrudUi.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import CrudTable from './CrudTable';

const CrudUi = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAdress] = useState('');
    const [message, setMessage] = useState('');
    const [errfirstName, seterrfirstName] = useState('');
    const [errlastName, seterrlastname] = useState('');
    const [errphone, seterrphone] = useState('');
    const [errage, seterrage] = useState('');
    const [getData, setgetData] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            firstName, lastName, phone, age, email, address, message
        }
        if (firstName === '' || firstName.length < 3) {
            toast.error('Write proper first name ')
        }
        if (lastName === '' || lastName.length < 3) {
            toast.error('Write proper last name')
        }
        if (phone === '' || phone.length < 10 || phone.length > 10) {
            toast.error('write valid phone number')
        }
        if (age === '' || age < 18) {
            toast.error('age is greater than 18')
        }
        if (email === '') {
            toast.error('write valid email address')
        }
        if (address === '') {
            toast.error('write valid email address')
        }
        if (message === '') {
            toast.error('write valid email address')
        }
        else {
            alert('pass')
            axios.post(`http://localhost:7070/users`, data)
                .then(res => {
                    console.log(res);
                    setFirstName('');
                    setLastName('');
                    setAge('');
                    setPhone('');
                    setMessage('');
                    setEmail('');
                    setAdress('');
                    callData();
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    useEffect(() => {
        callData();
    }, [])

    const callData = () => {
        axios.get(`http://localhost:7070/users`)
            .then(res => {
                console.log(res.data)
                setgetData(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }

    const deletdata = (id) => {
        axios.delete(`http://localhost:7070/users/${id}`)
            .then(res => {
                console.log(res);
                callData();
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 mx-auto">
                        <div className="card p-4 m-5">
                            <div className="card-header text-center">
                                Crud With React.Js
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="row py-3">
                                    <div className="col-md-6">
                                        <label htmlFor="">First Name:</label>
                                        <input
                                            type="text"
                                            value={firstName}
                                            onChange={(e) => {
                                                let value = e.target.value;
                                                setFirstName(value);
                                                if (firstName.length < 3) {
                                                    seterrfirstName(true);
                                                } else {
                                                    seterrfirstName(false);
                                                }
                                            }}
                                            className={`form-control ${errfirstName ? 'is-invalid' : ''}`}
                                        />
                                        <div>{errfirstName ? <p style={{ color: "red" }}>First Name is not valid</p> : ""}</div>

                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="">Last Name:</label>
                                        <input value={lastName} onChange={(e) => {
                                            let value = e.target.value;
                                            setLastName(value);
                                            if (lastName.length < 3) {
                                                seterrlastname(true)
                                            } else {
                                                seterrlastname(false)
                                            }
                                        }

                                        } type="text" className={`form-control ${errlastName ? 'is-invalid' : ''}`} />
                                        <div>{errlastName ? <p style={{ color: "red" }}>Last Name is not valid</p> : ""}</div>

                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="">Phone:</label>
                                        <input value={phone} onChange={(e) => {
                                            let value = e.target.value;
                                            setPhone(value);
                                            if (phone.length < 9 || phone.length > 9) {
                                                seterrphone(true)
                                            } else {
                                                seterrphone(false)
                                            }
                                        }} type="number" className={`form-control ${errphone ? 'is-invalid' : ''}`} />
                                        <div>{errphone ? <p style={{ color: "red" }}>Phone number is not valid</p> : ""}</div>
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="">Age:</label>
                                        <input value={age} onChange={(e) => {
                                            let value = e.target.value;
                                            setAge(value);
                                            if (value < 18) {
                                                seterrage(true)
                                            } else {
                                                seterrage(false)
                                            }
                                        }} type="Number" className={`form-control ${errage ? 'is-invalid' : ''}`} />
                                        <div>{errage ? <p style={{ color: "red" }}>age is not valid</p> : ""}</div>
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="">Email:</label>
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className='form-control' />
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="">Address:</label>
                                        <input value={address} onChange={(e) => setAdress(e.target.value)} type="text" className='form-control' />
                                    </div>

                                    <div className="col-md-12">
                                        <label htmlFor="">Message:</label>
                                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} type="text" className='form-control' />
                                    </div>
                                    <div className="col-md-6 py-4">
                                        <button className='btn btn-primary' type='submit'>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <CrudTable apiData={getData} deletdata={deletdata} />
            </div>
        </>
    )
}

export default CrudUi