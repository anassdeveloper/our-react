import "./Home.scss";
import  profil  from "./profil.jpg";
function Home({}){
    return(
        <div className="home">
            <div className="container">
               <div className="px-4 py-5  text-center">
                 <img className="d-block mx-auto mb-4" src={profil} alt="" width="112" height="127" style={{borderRadius: "50%"}} />
                 <h1 className="display-5 fw-bold">Hello, welcome </h1>
               <div className="container_content col-lg-6 mx-auto">
                  <p className="lead mb-4">
                  بعد مشوار طويل من الصبر و الكفاح
                   و الإستمرار في التعلم
                   و المحاولة ثم أخيرا
                   و بفضل الله أولا من قيام بتحميل أول مشروع لي ب 
                   React،، أريد أن أقدم الشكر لزوجتي و حبيبتي الغالية
                    التي ساندتني طوال الطريق
                    و لازالت تقف بجانبي و صابرة معي
                    إلى الآن أريد أن أخبرها بأني أحبها و سأظل </p>
                  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3">
                     <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                     <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                   </div>
                </div>
            </div>
           </div>
        </div>

    )
}
export default Home;