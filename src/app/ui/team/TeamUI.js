import React from 'react'
import CEO from '/public/images/Premium Vector Smiling cute kawaii cartoon of cake character.jpeg'
import Image from 'next/image'
const TeamUI = ({ title, img, name }) => {
    return (

        <div className="card rounded shadow-sm border-0" style={{background:'url(/backgrounds/bgframe.jpg)'}}>
            <div className="card-body p-0">
                <div className="px-5 py-4 text-center card-img-top" >
                    <Image src={img} className="rounded-circle mb-2 img-thumbnail d-block mx-auto" height={100} width={100} layout='responsive'/>
                    <h5 className=" mb-0">{name}</h5>
                    <p className="small mb-0">{title}</p>
                </div>
            </div>
        </div>
    )
}

export default TeamUI