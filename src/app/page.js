import Image from "next/image";
import styles from "./page.module.css";
import NavbarUI from "./ui/navbar/NavbarUI";
import HeaderUI from "./ui/header/HeaderUI";
import FeaturesUI from "./ui/features/FeaturesUI";
import TeamUI from "./ui/team/TeamUI";
import GalleryUI from "./ui/gallery/GalleryUI";
import FooterUI from "./ui/footer/FooterUI";

export default function Home() {

  const CakeList = [
    {
      id: 1,
      title: 'Apple Cake',
      img: '/images/Apple-cake.jpg',
    },

    {
      id: 2,
      title: 'Black Forest Cake',
      img: '/images/black-forest-cake.jpg',
    },

    {
      id: 3,
      title: 'Chocolate Cake',
      img: '/images/chocolate-cake.jpg',
    },

    {
      id: 4,
      title: 'Chocolava Cake',
      img: '/images/chocolava-cake.jpg',
    },

    {
      id: 5,
      title: 'Cupcakes',
      img: '/images/chocolate-cake.jpg',
    },

    {
      id: 6,
      title: 'Photo Cake',
      img: '/images/photo-cake.jpg',
    },

    {
      id: 7,
      title: 'Poster Cake',
      img: '/images/Post.jpg',
    },
  ];



  const TeamList = [
    {
      id: 1,
      name: 'Kandhi Lal',
      title: 'CEO',
      img: '/logo/avatar.png',
    },
    {
      id: 2,
      name: 'Kandhi Lal',
      title: 'CEO',
      img: '/logo/avatar.png',
    }, {
      id: 3,
      name: 'Kandhi Lal',
      title: 'CEO',
      img: '/logo/avatar.png',
    },
    {
      id: 4,
      name: 'Kandhi Lal',
      title: 'CEO',
      img: '/logo/avatar.png',
    },


  ];



  const ServicesList = [
    {
      id: 1,    
      title: 'Cakes',
      img: '/logo/f1.jpg',
    },
    {
      id: 2,    
      title: 'Cup Cakes',
      img: '/logo/f2.jpg',
    }, {
      id: 3,      
      title: 'Pastry',
      img: '/logo/f5.jpg',
    },


  ];


  return (
    <main>
      <NavbarUI />
      <HeaderUI />

      {/* FEATURES */}
      <div className="bg container-flude px-4 py-5" style={{ background: 'url(/backgrounds/13.jpg)' }}>
        <div className="row py-5">
          <div className="row mb-8 justify-content-center">
            <div className="col-lg-8 col-md-12 col-12 text-center">
              <h2 className="mb-2 display-4 fw-bold">Services</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-10 mx-auto">
            <div className="row mt-4">
              {ServicesList.map(({ id, title, img }) => (
                <div className="col-xl-4 col-lg-4 col-md-6 mb-4" key={id}>
                  <FeaturesUI title={title} img={img} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* GALLARY */}
      <div className="container-fluid">
        <div className="px-lg-5">
          <div className="row py-5">
            <div className="row mb-8 justify-content-center">
              <div className="col-lg-8 col-md-12 col-12 text-center">
                <h2 className="mb-2 display-4 fw-bold">Tasty  Cakes</h2>
                <p className="lead">Geeks teachers are icons, experts, and industry rock stars excited to
                  share their
                  experience, wisdom, and trusted tools with you.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8 mx-auto">
              <div className="row">
                {CakeList.map(({ id, title, img }) => (
                  <div className="col-xl-4 col-lg-4 col-md-6 mb-4" key={id}>
                    <GalleryUI title={title} img={img} />
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>


      {/* TEAM  */}
      <div className="p-5  bg-light-gradient-top " style={{ background: 'url(/backgrounds/14.jpg)' }} >
        <div className="container">
          <div className="row">

            {TeamList.map(({ id, title, img, name }) => (
              <div className="col-xl-3 col-lg-4 col-md-6 mb-4" key={id}>
                <TeamUI title={title} img={img} name={name} />
              </div>
            ))}
          </div>
        </div>
      </div>


      <FooterUI />

    </main>
  );
}
