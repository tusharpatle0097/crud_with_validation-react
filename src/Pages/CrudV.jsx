import * as React from 'react';
import Card from '@mui/material/Card';
import '../styles/CrudV.css'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import Button from '@mui/material/Button';


export default function CardV() {
    const params = useParams();
    const Navigate = useNavigate();
    const [fetchdata, setfetchdata] = React.useState(null)

    React.useEffect(() => {
        getdata();
    }, [])

    const getdata = () => {
        axios.get(`http://localhost:7070/users/${params.id}`)
            .then(res => {
                console.log(res.data)
                setfetchdata(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    console.log(fetchdata, 'kk')
    return (
        <div className="container">
            <div className="row">
                <div className="offset-3 col-lg-6">
                    <div className="row">
                        <div className="col-lg-12 ">
                            <Card sx={{ minWidth: 275 }}>
                                <div className='commonClass'>
                                    <span className='heading'>First Name: </span>
                                    <span className='ans'>{fetchdata ? fetchdata.firstName : "Loading.."}</span>
                                </div>

                                <div className='commonClass'>
                                    <span className='heading'>Last Name: </span>
                                    <span className='ans'>{fetchdata ? fetchdata.lastName : "Loading.."}</span>
                                </div>

                                <div className='commonClass'>
                                    <span className='heading'>Phone: </span>
                                    <span className='ans'>{fetchdata ? fetchdata.phone : "Loading.."}</span>
                                </div>

                                <div className='commonClass'>
                                    <span className='heading'>Age: </span>
                                    <span className='ans'>{fetchdata ? fetchdata.age : "Loading.."}</span>
                                </div>

                                
                                <div className='commonClass'>
                                    <span className='heading'>Email: </span>
                                    <span className='ans'>{fetchdata ? fetchdata.email : "Loading.."}</span>
                                </div>

                                
                                <div className='commonClass'>
                                    <span className='heading'>Address: </span>
                                    <span className='ans'>{fetchdata ? fetchdata.address : "Loading.."}</span>
                                </div>

                                
                                <div className='commonClass'>
                                    <span className='heading'>Message: </span>
                                    <span className='ans'>{fetchdata ? fetchdata.message : "Loading.."}</span>
                                </div>
           
                                <div>
                                    <Button  variant="contained" color="error" onClick={()=>Navigate('/')}>Back</Button>
                                </div>

                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}