import React from 'react'

const FooterUI = () => {
    return (

        <footer className="pt-5 pb-3">
            <div className="container">
                <div className="row  justify-content-center text-center  align-items-center ">
                    <div className="col-12 col-md-12 col-xxl-6 px-0 ">
                        {/* <div className="mb-4">                            
                            <p className="lead">Geek is feature rich components and beautifully Bootstrap 5 template for
                                developers,
                                built with bootstrap responsive framework.</p>
                        </div> */}
                    </div>
                </div>

                <hr className="mt-6 mb-3" />
                <div className="row align-items-center">
                    <div className="col-md-12 ">
                        <span>© <span id="copyright4">
                        </span> Devendra Kumar, All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default FooterUI