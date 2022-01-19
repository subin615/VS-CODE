import { Container, Card, TextField, CardContent, Typography, CardActions, Button, } from '@mui/material';
import React from 'react';
import Input from '../../common/atom/Input';
import './Registration.css';

const Registration: React.FC = () => {
    return (
        <div id="main" className="main-container">
            <form >

                <div className="box">
                    <div>
                        <div className="logo">
                            {/* {currentAppLogo &&
                                    <Image
                                        width="38px"
                                        src={(isWhiteLabel && !dontShowLogo) ? `${currentAppLogo}` : almawizLogo}
                                        roundedCircle />
                                } */}
                        </div>
                        <h2>Registration</h2>
                    </div>
                    <TextField size='small' fullWidth id="fullWidth" label="Name" color='success' variant="filled" />
                    <TextField size='small' fullWidth id="fullWidth" label="Email" color='success' variant="filled" />
                    <TextField size='small' fullWidth id="fullWidth" label="GST number" color='success' variant="filled" />
                    <TextField size='small' fullWidth id="fullWidth" label="Password" color='success' variant="filled" />
                    {/* <Input size='small' fullWidth id="fullWidth" label="Password" color='success' variant="filled" /> */}
                    {/* <div className="input-box">
                            <input className="input-fields" placeholder="Password"  style={{ borderRight: '0px' }} required />
                        </div> */}

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <input id="submit" type="submit" value="Submit" />
                    </div>

                </div>
            </form>
        </div>


    )
}

export default Registration
