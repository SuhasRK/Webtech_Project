import react from 'react'

function Team(){
    return(
        <div className="container my-5">
<div className="row justify-content-center">
    <div className="col-lg-6 col-md-10">
        <div className="section-title text-center pb-30">
            <h3 className="title">Meet The Team</h3>
            <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
        </div> 
    </div>
</div> 
<div className="row">
    <div className="col-lg-4 col-sm-6">
        <div className="team-style-eleven text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
            <div className="team-image">
                <img src="assets/images/surya.jpg" style={{height:"auto"}} alt="Team"/>
            </div>
            <div className="team-content">
                <div className="team-social">
                    <ul className="social">
                        <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                        <li><a href="#"><i className="lni lni-twitter-original"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/surya-m-n-a56ab11ab/"><i className="lni lni-linkedin-original"></i></a></li>
                        <li><a href="#"><i className="lni lni-instagram"></i></a></li>
                    </ul>
                </div>
                <h4 className="team-name"><a href="#">Surya MN</a></h4>
                <span className="sub-title">Co-Founder</span>
            </div>
        </div> 
    </div>
    <div className="col-lg-4 col-sm-6">
        <div className="team-style-eleven text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
            <div className="team-image">
                <img src="https://instagram.fblr1-5.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/50554685_116954762720758_5326501051305821702_n.jpg?_nc_ht=instagram.fblr1-5.fna.fbcdn.net&_nc_cat=110&_nc_ohc=ER7GUlf3Ig8AX_9IddW&tp=1&oh=97d85caba458bf4d501a58993d7222bc&oe=5FF90032" alt="Team"/>
            </div>
            <div className="team-content">
                <div className="team-social">
                    <ul className="social">
                        <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                        <li><a href="#"><i className="lni lni-twitter-original"></i></a></li>
                        <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                        <li><a href="https://www.instagram.com/_suhas__rk/"><i className="lni lni-instagram"></i></a></li>
                    </ul>
                </div>
                <h4 className="team-name"><a href="#">Suhas R K</a></h4>
                <span className="sub-title">Co-Founder</span>
            </div>
        </div> 
    </div>
    <div className="col-lg-4 col-sm-6">
        <div className="team-style-eleven text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
            <div className="team-image">
                <img src="assets/images/team-3.jpg" alt="Team"/>
            </div>
            <div className="team-content">
                <div className="team-social">
                    <ul className="social">
                        <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                        <li><a href="#"><i className="lni lni-twitter-original"></i></a></li>
                        <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                        <li><a href="#"><i className="lni lni-instagram"></i></a></li>
                    </ul>
                </div>
                <h4 className="team-name"><a href="#">Sujay S Amberkar</a></h4>
                <span className="sub-title">Web Developer</span>
            </div>
        </div> 
    </div>
</div> 
</div>
    );
}

export default Team;