import { FC } from "react";
import Image from "next/image";
import FooterLogo from '../../public/images/footer-logo.png'
import PhoneIcon from '../../public/images/phone-icon.png'
import EmailIcon from '../../public/images/email-icon.png'
import LocationIcon from '../../public/images/location-icon.png'
import LinkedinIcon from '../../public/images/linkedin-icon.png'
import FacebookIcon from '../../public/images/facebook-icon.png'
import InstagramIcon from '../../public/images/instagram-icon.png'
import TwitterIcon from '../../public/images/twitter-icon.png'
import YoutubeIcon from '../../public/images/youtube-icon.png'

const Footer:FC = ()=> {
  return (
    <>
      <div className="footer-container pt-[100px] px-[18px] pb-14 ">
        <div className="footer-logo-container pb-[30px]">
          <Image src={FooterLogo} alt="footer-logo"/>
        </div>

        <div className="footer-subtitle-container pb-8">
          <p className="text-[18px]">
            Expertly trained, battle-tested, elite software developers on demand
          </p>
        </div>

        <div className="contact-info-container flex flex-col gap-7 text-[18px] pb-[37px]">
          <div className="contact-item flex gap-5">
            <div className="contact-item-icon">
              <Image src={PhoneIcon} alt="phone-icon" />
            </div>
            <div className="contact-item-text">
              <p>+94 713249222</p>
            </div>
          </div>
          <div className="contact-item flex gap-5">
            <div className="contact-item-icon">
              <Image src={EmailIcon} alt="phone-icon" />
            </div>
            <div className="contact-item-text">
              <p>hello@courtney.lk</p>
            </div>
          </div>
          <div className="contact-item flex gap-5">
            <div className="contact-item-icon">
              <Image src={LocationIcon} alt="phone-icon" />
            </div>
            <div className="contact-item-text">
              <p>Courtney Lanka (Private) Limited</p>
              <p>Level 35</p>
              <p>World Trade Center</p>
              <p>Colombo 01</p>
            </div>
          </div>
        </div>

        <div className="footer-company-info pb-[62px]">
          <div className="footer-company-heading pb-7">
            <h4>Company</h4>
          </div>
          <div className="footer-company-paragraph flex flex-col gap-[25px]">
            <p>About Us</p>
            <p>Success Stories</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Contact Us</p>
          </div>
        </div>

        <div className="footer-services-info pb-[62px]">
          <div className="footer-services-heading pb-7">
            <h4>Services</h4>
          </div>
          <div className="footer-services-paragraph flex flex-col gap-[25px]">
            <p>Hire Permanent Staff</p>
            <p>Staff Augmentation</p>
            <p>Software Outsourcing</p>
            <p>Build Remote Office</p>
          </div>
        </div>

        <div className="footer-start-info pb-[62px]">
          <div className="footer-start-heading pb-7">
            <h4>How to Start</h4>
          </div>
          <div className="footer-start-paragraph flex flex-col gap-[25px]">
            <p>You Asked</p>
            <p>We Proceed</p>
            <p>Negotiate</p>
            <p>You Get</p>
          </div>
        </div>

        <div className="social-media-container">
          <div className="social-media-heading pb-6">
            <p className="text-[18px] font-bold">Follow us</p>
          </div>
          <div className="social-media-icon-container flex gap-[37px] justify-center pb-6">
            <div className="social-media-icon">
              <Image src={LinkedinIcon} alt="linkedin-icon"/>
            </div>
            <div className="social-media-icon">
              <Image src={FacebookIcon} alt="facebook-icon"/>
            </div>
            <div className="social-media-icon">
              <Image src={InstagramIcon} alt="instagram-icon"/>
            </div>
            <div className="social-media-icon">
              <Image src={TwitterIcon} alt="twitter-icon"/>
            </div>
            <div className="social-media-icon">
              <Image src={YoutubeIcon} alt="youtube-icon"/>
            </div>
          </div>
        </div>

        <div className="footer-copyright-container py-6">
          <p>&copy; 2022 courtney</p>
        </div>

      </div>
    </>
  )
}
export default Footer;