import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <div>
            <footer className="page-footer font-small blue pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Content</h5>
                            <p>Society Management System (SMS) has been established to remove stress; it is the housing society software or rather online society maintenance software that takes care of the daily affairs of the society. In order to reduce the responsibilities of the society members we have developed cooperative society software in India. It also works as society accounting software, apartment management software and many more that will help the society to carry on its daily affairs online. The people too can be tension free because the accounts of the society will be handled by a trust worthy accounting software which is computerised.</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-md-3 mb-md-0 mb-3">
                         
                        </div> 

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Github</h5>
                            <ul className="list-unstyled">
                                <li><a href="https://github.com/mkunal024">Kunal</a></li>
                                <li><a href="https://github.com/siddhantmalik10">Siddhant</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2023 Copyright:
                    <a href="https://mdbootstrap.com/"> society.in</a>
                </div>

            </footer>
        </div>
    )
}

export default Footer
