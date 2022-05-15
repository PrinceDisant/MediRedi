import Link from 'next/link';

const AboutArea = ({ about_pt = '' }) => {
   return (
      <>
         <section className={`about__area pb-120 p-relative ${about_pt && about_pt}`}>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-7 col-xl-7 col-lg-7">
                     <div className="about__thumb-wrapper d-sm-flex mr-20 p-relative">
                        <div className="about__shape">
                           <img className="about__shape-1 d-none d-sm-block" src="assets/img/about/about-shape-1.png" alt="" />
                           <img className="about__shape-2 d-none d-sm-block" src="assets/img/about/about-shape-2.png" alt="" />
                           <img className="about__shape-3" src="assets/img/about/about-shape-3.png" alt="" />
                        </div>
                        <div className="about__thumb-left mr-10">
                           <div className="about__thumb-1 mb-10">
                              <img src="assets/img/about/about-1.jpg" alt="" />
                           </div>
                           <div className="about__thumb-1 mb-10 text-end">
                              <img src="assets/img/about/about-3.jpg" alt="" />
                           </div>
                        </div>
                        <div className="about__thumb-2 mb-10">
                           <img src="assets/img/about/about-2.jpg" alt="" />
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-5 col-xl-5 col-lg-5">
                     <div className="about__content pl-70 pr-25">
                        <div className="section__title-wrapper mb-15">
                           <span className="section__title-pre">About MediRedi</span>
                           <h2 className="section__title">Career Accelerator program that helps you get certified to treat Patients in Canada!</h2>
                        </div>
                        <p>Payback within six months of certification</p>

                        <div className="about__list mb-40">
                           <ul>
                              <li><i className="fa-solid fa-check"></i> Access to all our courses</li>
                              <li><i className="fa-solid fa-check"></i> Language courses on English and French</li>
                              <li><i className="fa-solid fa-check"></i> Get Started on getting certified to become a virtual Physician</li>
                           </ul>
                        </div>

                        <div className="about__btn">
                           <Link href="/about">
                              <a className="tp-btn tp-btn-2">Read more</a>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default AboutArea;