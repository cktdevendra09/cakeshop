import Image from 'next/image'
import myimg from '/public/images/Premium Vector Smiling cute kawaii cartoon of cake character.jpeg'
import styles from './fetures.module.css'
const FeaturesUI = ({title, img }) => {
  return (
    // <div className={styles.card} >
    //   <Image src={img} layout='responsive' width={100} height={100}  alt={img}/>
    // </div>

    // <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{background:'url('+img+')'}} >
    //   <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
    //     <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h2>
    //   </div>
    // </div>

    <div className="card shadow-sm border-0 rounded" >
      <div className="card-body p-0">
        <Image src={img} alt="" className="w-100 card-img-top" layout='responsive' width={100} height={100} />
        <div className="p-4 text-center">
            <h5 className="mb-0">{title}</h5>            
          </div>
      </div>
    </div>

  )
}

export default FeaturesUI