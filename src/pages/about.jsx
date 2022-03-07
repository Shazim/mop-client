import React,{useState, useEffect} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Header from 'components/molecules/header/Header';
import { LinkLabel } from 'components/LinkLabel';
import { DiscoverMore } from 'components/DiscoveMore';
import { ReceiveInsight } from 'components/ReceiveInsight';
import Footer from 'components/molecules/footer/Footer';
import Button from 'components/atoms/buttons/Button';
import { useLocation, useHistory } from 'react-router-dom';
import LoginModal from 'components/molecules/modals/LoginModal';
import SignupModal from 'components/molecules/modals/SignupModal';
import ForgotPassword from 'components/molecules/modals/ForgotPassword';

function About() {
  
  
  const [signUp, setSignUp] = useState()
  const search = useLocation().search
  const [signIn, setSignIn] = useState()
  const [forgot, setForgot] = useState()
  const history = useHistory()
  
  useEffect(() => {
    if(!signIn){
      const login = new URLSearchParams(search).get('login');
      (login) && setSignIn(prv => !prv)
    }
    scrollOff()
  },[signUp, signIn, forgot])

  

  const scrollOff = () => {
    (signUp || signIn || forgot) 
    ? window.document.body.style.overflow = "hidden" 
    : window.document.body.style.overflow = "scroll"
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



  return (
    <>
      <div className="bg-photography bg-no-repeat bg-cover ">
        <Header />
        <div className="max-screen pt-370 pb-116">
          <div className="ml-50 text-primary tracking-wider font-avenir-300 uppercase text-3xl leading-55 w-55%">
            <span className="text-secondary">from the creators of online </span>
            photography classes{' '}
            <span className="text-secondary">that works with the</span> best
            photographers <span className="text-secondary">in the world.</span>
          </div>
          <div className="ml-50  mt-25">
            <LinkLabel label="discover our offers" />
          </div>
        </div>
      </div>
      <div className="flex max-screen justify-between pt-126 pb-156">
        <div className="ml-50 w-40%">
          <div className="tracking-wider uppercase text-2xl font-avenir-reg text-dark leading-38">
            “Great Art in 2021 requires a different type of showcase”
            <span className="text-primary">.</span>
          </div>
          <div className=" font-nunito-light text-lg text-dark leading-32 pt-31">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            viverra pharetra ultricies elementum. Tellus ullamcorper sit in
            scelerisque maecenas elit, viverra eu. Suspendisse ut netus mauris
            gravida viverra vel nunc facilisis scelerisque. Ultrices lobortis
            donec volutpat viverra.{' '}
          </div>
          <div className="pt-30 font-nunito-light text-lg text-dark leading-32">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            viverra pharetra ultricies elementum. Tellus ullamcorper sit in
            scelerisque maecenas elit,
          </div>
        </div>
        <div className='w-40%'>
          <Slider {...settings} >
            <img src="/images/girl.png" alt="" />
            <img src="/images/girl.png" alt="" />
            <img src="/images/girl.png" alt="" />
          </Slider>
        
        </div>
      </div>
      <div className='bg-background-gallery bg-cover bg-no-repeat'>
        <div className='max-screen'>
          <div className='py-131 px-250'>
            <p className='uppercase font-avenir-reg font-black text-center text-2xl leading-38 tracking-wider text-secondary-dark'>using the latest technology to drive artist growth and art exploration<span className='text-primary'>. <br/>view, browse, buy, enjoy, love and own.</span></p>
            <p className='font-reg text-center text-lg leading-38 mt-10 mb-28 text-secondary-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt viverra pharetra ultricies elementum. Tellus ullamcorper sit in scelerisque maecenas elit,</p>
            <Button className="w-251 h-51 mx-auto block">
              Discover Galleries
            </Button>
          </div>
        </div>
      </div>
      <div className="max-screen border-border border-b">
        <DiscoverMore />
      </div>
      <div>
        <ReceiveInsight image="/images/desert.png" />
      </div>
      <LoginModal isOpen={signIn} openHandler={setSignIn} signUpHandler={setSignUp} forgotHandler={setForgot} />
      <SignupModal isOpen={signUp} openHandler={setSignUp} signInHandler={setSignIn} forgotHandler={setForgot}/>
      <ForgotPassword isOpen={forgot} openHandler={setForgot} signInHandler={setSignIn} signUpHandler={setSignUp} />
      <Footer />
    </>
  );
}

export default About;
