import Image from 'next/image'
import styles from './header.module.css'


const HeaderUI = () => {
  return (
    // <div className="container-flude" style={{background :'url(/backgrounds/2.png)'}}>
    //   <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 ">
    //     <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
    //       <h1 className="display-4 fw-bold lh-1">Border hero with cropped image and shadows</h1>
    //       <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
    //       <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
    //         <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
    //         <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
    //       </div>
    //     </div>
    //     <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden">
    //       <Image src={sideimg} layout='responsive' />
    //     </div>
    //   </div>
    // </div>

    <section className={styles.bg+" "+"py-5 bg-light"} style={{background:'url(/backgrounds/15.jpg)'}}>
      <div className="container py-5">
        <div className="row py-lg-5">
          <div className="col-lg-8">
            <h1 className="fw-bold display-2" >Sanket Cake And Sweet Shop</h1>
            <p className="fst-italic text-muted">Customizing lightweight <a className="fw-bold text-dark" href="https://github.com/jshjohnson/Choices" target="_blank">Choices.js</a> JS plugin to create a beautiful Bootstrap autocomplete dropdown menu. Snippet by <a className="text-primary" href="#" target="_blank">Bootstrapious</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeaderUI