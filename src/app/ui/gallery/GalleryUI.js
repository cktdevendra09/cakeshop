import Image from 'next/image'
import styles from './gallery.module.css'

const GalleryUI = ({title, img}) => {
    return (
        <>
            <div className="bg-white rounded shadow-sm border" style={{overflow:'hidden'}}>
                <Image src={img} layout='responsive' width={100} height={100}/>
                <div className="p-4">                
                    <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2">
                        <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">{title}</span></p>
                        <div className="badge badge-success fw-bold rounded-pill text-success">
                            <span >&#8360;</span>
                            .150
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default GalleryUI