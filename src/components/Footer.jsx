import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#1C1C1C", color: "white" }} className='container-fluid footer mt-5'>
            <div className="row">
                <div className="col-md-3 m-5">
                    <h4 style={{ borderLeft: "5px solid  #f53f85", paddingLeft: "10px" }}>About Us</h4>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, deserunt id officia
                        suscipit magni facere architecto ratione tenetur alias modi.
                    </p>
                    <div className='footerIcon'>
                        <ul style={{ padding: "0" }}>
                            <li className='icon'>
                                <FontAwesomeIcon className='mt-1' color=' #f53f85' icon={faHouse} />
                                <p style={{ marginLeft: "10px" }}>www.hellowworld.com</p>
                            </li>
                            <li className='icon'>
                                <FontAwesomeIcon className='mt-1' color=' #f53f85' icon={faEnvelope} />
                                <p style={{ marginLeft: "10px" }}>support@hotmail.com</p>
                            </li>
                            <li className='icon'>
                                <FontAwesomeIcon className='mt-1' color=' #f53f85' icon={faPhone} />
                                <p style={{ marginLeft: "10px" }}>www.hellowworld.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 m-5">
                    <h4 style={{ borderLeft: "5px solid #f53f85", paddingLeft: "10px" }}>Our Support</h4>
                    <ul className="mt-4" style={{ padding: "0" }}>
                        <li> <FontAwesomeIcon icon={faAngleRight} /><span style={{ marginLeft: "10px" }}>Our Material</span></li>
                        <hr />
                        <li> <FontAwesomeIcon icon={faAngleRight} /><span style={{ marginLeft: "10px" }}>Our Material</span></li>
                        <hr />
                        <li> <FontAwesomeIcon icon={faAngleRight} /><span style={{ marginLeft: "10px" }}>Our Material</span></li>
                        <hr />
                        <li> <FontAwesomeIcon icon={faAngleRight} /><span style={{ marginLeft: "10px" }}>Our Material</span></li>
                        <hr />
                        <li> <FontAwesomeIcon icon={faAngleRight} /><span style={{ marginLeft: "10px" }}>Our Material</span></li>
                        <hr />
                        <li> <FontAwesomeIcon icon={faAngleRight} /><span style={{ marginLeft: "10px" }}>Our Material</span></li>
                        <hr />
                    </ul>
                </div>
                <div className="class col-md  m-5">
                    <h4 style={{ borderLeft: "5px solid  #f53f85", paddingLeft: "10px" }}>Visit Us</h4>
                    <div className="footerLinks">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/products">Producst</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/contact">Contact</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer