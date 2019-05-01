import React, { Component } from 'react'

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light ">
        <img className="navbar-brand" src="/images/logo.png" alt="brand-logo" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                    Course Library
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <div className="flex-container">
                            <div className="flex-item" >
                                <div className="flex-item1">
                                    <h6 className="dropdown-header"><i class="fa fa-bar-chart"></i>Management & Business</h6>
                                    <a className="dropdown-item" href="#">Bachelor Of Business Administration</a>
                                    <a className="dropdown-item" href="#">Bachelor Of Business Management</a>
                                </div>
                                <div className="flex-item2">
                                    <h6 className="dropdown-header"><i class="fa fa-cog"></i>Engineer</h6>
                                    <a className="dropdown-item" href="#">Agriculture Engineering</a>
                                    <a className="dropdown-item" href="#">Information Technology Engineering</a>
                                    <a className="dropdown-item" href="#">Electronics & Tele-Communication</a>
                                    <a className="dropdown-item" href="#">Chemical Engineering</a>
                                    <a className="dropdown-item" href="#">Biochemical Engineering</a>
                                    <a className="dropdown-item" href="#">Metallurgical Engineering</a>
                                    <a className="dropdown-item" href="#">Electrical Engineering</a>
                                    <a className="dropdown-item" href="#">Mechanical Engineering</a>
                                    <a className="dropdown-item" href="#">Civil Engineering</a>
                                    <a className="dropdown-item" href="#">Aeronautical Engineering</a>
                                    <a className="dropdown-item" href="#">Mining Engineering</a>
                                    <a className="dropdown-item" href="#">Electrical And Instrumentation Engineering</a>
                                    <a className="dropdown-item" href="#">Astronautical Engineering</a>
                                    <a className="dropdown-item" href="#">Aircraft Maintenance Engineering</a>
                                    <a className="dropdown-item" href="#">Computer Science Engineering</a>
                                    <a className="dropdown-item" href="#">Bachelor Of Business Management</a>
                                    <h6 className="dropdown-header"><i class="fa fa-youtube-play"></i>Teaching</h6>
                                    <a className="dropdown-item" href="#">B.Ed</a>
                                </div>
                            </div>
                            <div className="flex-item">
                                <div className="flex-item3">
                                    <h6 className="dropdown-header"><i class="fa fa-file-text"></i>Architecture</h6>
                                    <a className="dropdown-item" href="#">Bachelor Of Architecture</a>
                                    
                                    <h6 className="dropdown-header"><i class="fa fa-youtube-play"></i>Computers & IT</h6>
                                    <a className="dropdown-item" href="#">Bachelor Of Computer Applications</a>
                                </div>
                                <div className="flex-item4">
                                    <h6 className="dropdown-header"><i class="fa fa-stethoscope"></i>Medical & Health Care</h6>
                                    <a className="dropdown-item" href="#">Bachelor Of Medicine & Bachelor Of Surgery</a>
                                    <a className="dropdown-item" href="#">Bachelor Of Ayurveda, Medicine And Surgery</a>
                                    <a className="dropdown-item" href="#">Bachelor Of Homeopathy Medicine<br />
                                                                    And Surgery</a>
                                    <a className="dropdown-item" href="#">Bachelor Of Unani Medicine And Surgery</a>
                                    <a className="dropdown-item" href="#">Bachelor Of Physiotherapy</a>
                                    <a className="dropdown-item" href="#">Bachelor Of Dental Surgery</a>
                                </div>
                                <div className="flex-item5">
                                    <h6 className="dropdown-header"><i class="	fa fa-drupal"></i>Law</h6>
                                    <a className="dropdown-item" href="#">Bachelor Of Laws</a>
                                    <a className="dropdown-item" href="#">Bachelor Of Arts & Law (B.A, LLB)</a>
                                    <a className="dropdown-item" href="#">Bachelor Of Commerce & Law (B.Com, LLB)</a>
                                    <a className="dropdown-item" href="#">Bachelor Of Business Administration<br />
                                                                    & Law (BBA, LLB)</a>
                               
                                
                                    <h6 className="dropdown-header"><i class="fa fa-rupee"></i>Commerce</h6>
                                    <a className="dropdown-item" href="#">Bachelor Of Commerence Chartered<br/>Accountant(CA)</a>
                                </div>
                            </div>
                            <div className="flex-item">
                                <div className="flex-item6">
                                    <h6 className="dropdown-header"><i class="fa fa-scribd"></i>Science</h6>
                                    <a className="dropdown-item" href="#">Bachelor Of Science(Nursing)</a>
                                    
                                    <h6 className="dropdown-header"><i class="fa fa-stumbleupon"></i>Art & Humanities</h6>
                                    <a className="dropdown-item" href="#">Bachelor Of Arts</a>
                                    <a href="#" className="dropdown-item">Bachelor of Fine Arts(BFA)</a>
                                    <a href="#" className="dropdown-item">Diploma In Fine Arts</a>
                                </div>
                                <div className="flex-item7">
                                    <h6 className="dropdown-header"><i class="	fa fa-graduation-cap"></i>Dimploma in Engineering</h6>
                                    <a className="dropdown-item" href="#">Diploma In Civil Engineering</a>
                                    <a className="dropdown-item" href="#">Diploma In Automobile Engineering</a>
                                    <a className="dropdown-item" href="#">Diploma In Compe-playuter Engineering</a>
                                    <a className="dropdown-item" href="#">Diploma In Electrical & Electronics<br />Engineering</a>
                                    <a className="dropdown-item" href="#">Diploma In Electronics & Communication<br />Engineering</a>
                                    <a className="dropdown-item" href="#">Diploma In Mechanical Engineering</a>
                                </div>
                                <div className="flex-item8">
                                    <h6 className="dropdown-header"><i class="	fa fa-graduation-cap"></i>Pharmacy</h6>
                                    <a className="dropdown-item" href="#">Bachelor Of Pharmacy</a>
                                    
                                    <h6 className="dropdown-header"><i class="	fa fa-hotel"></i>Hotel Management</h6>
                                    <a className="dropdown-item" href="#">Bachelor Of Hotel Management</a>
                                </div>
                            </div>
                            <div className="flex-item">
                                <div className="flex-item9">
                                    <h6 className="dropdown-header"><i class="fa fa-random"></i>Fashion & Desing</h6>
                                    <a className="dropdown-item" href="#">Bachelor Of Design Fashion Design<br/>Courses</a>
                                    
                                    <h6 className="dropdown-header">Media & Mass Communication</h6>
                                    <a className="dropdown-item" href="#">Bachelor's In Journalism And Mass<br /> Communication</a>
                                </div>
                                <div className="flex-item10">
                                    <h6 className="dropdown-header"><i class="fa fa-shopping-baske"></i>Agriculture</h6>
                                    <a className="dropdown-item" href="#">Bachelor Of Technology (B.Tech)<br/> In Horticulture</a>
                                    <a className="dropdown-item" href="#">Bachelor Of Science (B.Sc) In Horticulture</a>
                                    <a className="dropdown-item" href="#">Agriculture Business Management</a>
                                    <a className="dropdown-item" href="#">Bachelor Of Science (B.Sc) In Agriculture</a>
                                </div>
                                <div className="flex-item11">
                                    <h6 className="dropdown-header"><i class="fa fa-upload"></i>Aviaiton</h6>
                                    <a className="dropdown-item" href="#">BBA In Airport Management</a>
                                    <a href="#" className="dropdown-item">B.Sc. Aviation</a>
                                </div>
                                <div className="flex-item12">
                                    <h6 className="dropdown-header"><i class="fa fa-university"></i>Diploma And Certificate Courses</h6>
                                    <a className="dropdown-item" href="#">Airfare And Ticketing Management</a>
                                    <a href="#" className="dropdown-item">Aviation Hospitality</a>
                                    
                                    <h6 className="dropdown-header"><i class="fa fa-space-shuttle"></i>Travel And Tourism</h6>
                                    <a className="dropdown-item" href="#">Tourism Management</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Exam Library
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <div className="flex-container">
                            <div className="flex-item" >
                                <div className="flex-item11">
                                    <h6 className="dropdown-header"><i class="fa fa-cog"></i>Engineering</h6>
                                    <a className="dropdown-item" href="#">JEE Mains</a>
                                    <a className="dropdown-item" href="#">JEE Advance</a>
                                    <a className="dropdown-item" href="#">BITSAT</a>
                                    <a className="dropdown-item" href="#">VITEEE</a>
                                    <a className="dropdown-item" href="#">WBJEE</a>
                                    <a className="dropdown-item" href="#">JCECE</a>
                                    <a className="dropdown-item" href="#">UPSEE</a>
                                    <a className="dropdown-item" href="#">OJEE</a>
                                    <a className="dropdown-item" href="#">BCECE</a>
                                    <a className="dropdown-item" href="#">GATE</a>
                                    <a className="dropdown-item" href="#">SRMJEEE</a>
                                    <a className="dropdown-item" href="#">AEEE</a>
                                    <a className="dropdown-item" href="#">NATA</a>
                                    <a className="dropdown-item" href="#">MUOET</a>
                                    <a className="dropdown-item" href="#">CEED</a>
                                    <a className="dropdown-item" href="#">IIITH PGEE</a>    
                                </div>
                            </div>
                            <div className="flex-item" >    
                                <div className="flex-item12">
                                    <h6 className="dropdown-header"><i class="fa fa-cog"></i>Management</h6>
                                    <a className="dropdown-item" href="#">CAT</a>
                                    <a className="dropdown-item" href="#">MAT</a>
                                    <a className="dropdown-item" href="#">XAT</a>
                                    <a className="dropdown-item" href="#">SNAP</a>
                                    <a className="dropdown-item" href="#">NMAT</a>
                                    <a className="dropdown-item" href="#">IBSAT</a>
                                    <a className="dropdown-item" href="#">CMAT</a>
                                    <a className="dropdown-item" href="#">ATMA</a>
                                    <a className="dropdown-item" href="#">IIFT</a>
                                    <a className="dropdown-item" href="#">ANCET</a>
                                    <a className="dropdown-item" href="#">MAH-CET</a>
                                    <a className="dropdown-item" href="#">IRMA</a>
                                    <a className="dropdown-item" href="#">KIITEE MANAGEMENT</a>
                                    <a className="dropdown-item" href="#">KMAT</a>
                                    <a className="dropdown-item" href="#">TSICET</a>
                                    <a className="dropdown-item" href="#">HPU MAT</a>
                                </div>
                            </div>
                            <div className="flex-item">
                                <div className="flex-item13">
                                    <h6 className="dropdown-header"><i class="fa fa-cog"></i>Compitive Exams</h6>
                                    <a className="dropdown-item" href="#">UPSC-IAS
                                    <a className="dropdown-item" href="#"></a>SSC-CGL
                                    <a className="dropdown-item" href="#"></a>CTET
                                    <a className="dropdown-item" href="#"></a>KVPY
                                    <a className="dropdown-item" href="#"></a>IBPS-PO
                                    <a className="dropdown-item" href="#"></a>SBI Clerk
                                    <a className="dropdown-item" href="#"></a>IBPS-Clerk
                                    <a className="dropdown-item" href="#"></a>IES
                                    <a className="dropdown-item" href="#"></a>NTSE
                                    <a className="dropdown-item" href="#"></a>PSU Through GATE
                                    <a className="dropdown-item" href="#"></a>SSC-CHSL
                                    <a className="dropdown-item" href="#"></a>UPTET
                                    <a className="dropdown-item" href="#"></a>ICAR AIEEA
                                    <a className="dropdown-item" href="#"></a>FDDI - AIST</a>
                                </div>
                            </div>
                            <div className="flex-item" >
                                <div className="flex-item14">
                                    <h6 className="dropdown-header"><i class="fa fa-cog"></i>Medical Exams</h6>
                                    <a className="dropdown-item" href="#">AIIMS
                                    <a className="dropdown-item" href="#"></a>NEET
                                    <a className="dropdown-item" href="#"></a>JIPMER
                                    <a className="dropdown-item" href="#"></a>GUJCET
                                    <a className="dropdown-item" href="#"></a>BHU PMT
                                    <a className="dropdown-item" href="#"></a>PMET</a>
                                </div>
                            </div>
                            <div className="flex-item" >
                                <div className="flex-item15">
                                    <h6 className="dropdown-header"><i class="fa fa-cog"></i>Law Exams</h6>
                                    <a className="dropdown-item" href="#">AP LAWCET 2019
                                    <a className="dropdown-item" href="#"></a>CLAT 2019
                                    <a className="dropdown-item" href="#"></a>AILET 2019
                                    <a className="dropdown-item" href="#"></a>LSAT
                                    <a className="dropdown-item" href="#"></a>MH CET</a>
                                </div>
                            </div>
                            <div className="flex-item">
                                <div className="flex-item16">
                                    <h6 className="dropdown-header"><i class="fa fa-cog"></i>Other Exams</h6>
                                    <a className="dropdown-item" href="#">COMEDK-UGET</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Collage
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <div className="flex-container">
                            <div className="flex-item" >
                                <div className="flex-item21">
                                    <h6 className="dropdown-header">Engineering</h6>
                                    <a className="dropdown-item" href="#"><img src="/images/1.png" alt="img" /><br />4636 Colleges</a>
                                
                                    <h6 className="dropdown-header">Management & <br/>Business</h6>
                                    <a className="dropdown-item" href="#"><img src="/images/2.png" alt="img" /><br />6014 Colleges</a>
                                
                                    <h6 className="dropdown-header">Computer Application</h6>
                                    <a className="dropdown-item" href="#"><img src="/images/3.png" alt="img" /><br />3934 Colleges</a>
                                
                                    <h6 className="dropdown-header">Medical & Health Care</h6>
                                    <a className="dropdown-item" href="#"><img src="/images/4.png" alt="img" /><br />1534 Colleges</a>
                                </div>
                            </div>
                            <div className="flex-item" >
                                <div className="flex-item22">
                                    <h6 className="dropdown-header">Law</h6>
                                    <a className="dropdown-item" href="#"><img src="/images/5.png" alt="img" /><br />1052 Colleges</a>
                                
                                    <h6 className="dropdown-header">Commerce</h6>
                                    <a className="dropdown-item" href="#"><img src="/images/6.png" alt="img" /><br />3833 Colleges</a>
                                
                                    <h6 className="dropdown-header">Science</h6>
                                    <a className="dropdown-item" href="#"><img src="/images/7.png" alt="img" /><br />4920 Colleges</a>
                                
                                    <h6 className="dropdown-header">Arts</h6>
                                    <a className="dropdown-item" href="#"><img src="/images/8.png" alt="img" /><br />4222 Colleges</a>
                                </div>
                            </div>
                            <div className="flex-item" >
                                <div className="flex-item23">
                                    <h6 className="dropdown-header">Diploma In <br />Engineering</h6>
                                    <a className="dropdown-item" href="#"><img src="/images/9.png" alt="img" /><br />4576 Colleges</a>
                                
                                    <h6 className="dropdown-header">Pharmacy</h6>
                                    <a className="dropdown-item" href="#"><img src="/images/10.png" alt="img" /><br />4576 Colleges</a>
                                
                                    <h6 className="dropdown-header">Hotel Management</h6>
                                    <a className="dropdown-item" href="#"><img src="/images/11.png" alt="img" /><br />750 Colleges</a>
                                
                                    <h6 className="dropdown-header">Fashion</h6>
                                    <a className="dropdown-item" href="#"><img src="/images/12.png" alt="img" /><br />276 Colleges</a>
                                </div>
                            </div>
                            <div className="flex-item" >
                                <div className="flex-item24">
                                    <h6 className="dropdown-header">Media & Mass<br /> Communication</h6>
                                    <a className="dropdown-item" href="#"><img src="/images/13.png" alt="img" /><br />1229 Colleges</a>
                                
                                    <h6 className="dropdown-header">Agriculture</h6>
                                    <a className="dropdown-item" href="#"><img src="/images/14.png" alt="img" /><br />716 Colleges</a>
                                
                                    <h6 className="dropdown-header">Education</h6>
                                    <a className="dropdown-item" href="#"><img src="/images/15.png" alt="img" /><br />2751 Colleges</a>
                               
                                    <h6 className="dropdown-header">Aviation</h6>
                                    <a className="dropdown-item" href="#"><img src="/images/16.png" alt="img" /><br />144 Colleges</a>
                                </div>
                            </div>
                            <div className="flex-item" >
                                <div className="flex-item25">
                                    <h6 className="dropdown-header">Diploma And <br />Certificate Courses</h6>
                                    <a className="dropdown-item" href="#"><img src="/images/17.png" alt="img" /><br />714 Colleges</a>
                                
                                    <h6 className="dropdown-header">Hotel Management</h6>
                                    <a className="dropdown-item" href="#"><img src="/images/18.png" alt="img" /><br />750 Colleges</a>
                                
                                    <h6 className="dropdown-header">Mnagement</h6>
                                    <a className="dropdown-item" href="#"><img src="/images/19.png" alt="img" /><br />6014 Colleges</a>
                                
                                    <h6 className="dropdown-header">Architecture</h6>
                                    <a className="dropdown-item" href="#"><img src="/images/20.png" alt="img" /><br />516 Colleges</a>
                                </div>
                            </div>
                            <div className="flex-item" >
                                <div className="flex-item26">
                                    <h6 className="dropdown-header">Dental</h6>
                                    <a className="dropdown-item" href="#"><img src="/images/21.png" alt="img" /><br />393 Colleges</a>
                                
                                    <h6 className="dropdown-header">Paramedical</h6>
                                    <a className="dropdown-item" href="#"><img src="/images/22.png" alt="img" /><br />997 Colleges</a>
                                
                                    <h6 className="dropdown-header">Veterinary Science</h6>
                                    <a className="dropdown-item" href="#"><img src="/images/23.png" alt="img" /><br />97 Colleges</a>
                                
                                    <h6 className="dropdown-header">Vocational Course</h6>
                                    <a className="dropdown-item" href="#"><img src="/images/24.png" alt="img" /><br />714 Colleges</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Community</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link sign1" href="#">SignUp</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link sign2" href="#">SignIn</a>
                </li>
        </ul>
    </div>
</nav>
    )
  }
}
export default Navigation
