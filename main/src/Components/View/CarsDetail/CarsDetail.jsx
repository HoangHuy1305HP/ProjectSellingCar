import React, { useState } from "react";
import "./CarsDetail.css";
import Header from "../../Header/Header";
import Navbar from "../../NavBar";
import c1 from "../../../img/detail1.png";
import c2 from "../../../img/detail2.png";
import c3 from "../../../img/detail3.png";
import c4 from "../../../img/detail4.png";
import c5 from "../../../img/detail5.png";
import c6 from "../../../img/detail6.png";
import c8 from "../../../img/image 13.png";
import Content from "../Content/Content";
import Checkbox from "../../Checkbox.jsx";
import Divider from "../../Devider";
import c7 from "../../../img/dealer.png";
import ContactForm from "../../ContactForm";
import ContactInfo from "../../ContactInfor";
import EditableContactInfo from "../../EditableContactInfo";
import MapComponent from "../../Map";
import CreditSimulation from "../../CreditSimulation";
import ButtonComponent from "./PriceButton/Price";
import CarInformation from "./CarInformation/CarInformation";
import ImageGallery from "./ImageGallery/ImageGallery";
import FeatureComponent from "./Feature/Feature";
import Dealer from "./Dealer/Dealer";
import Footer from "../../../componentOfThanh/Footer.jsx";

const CarsDetail = () => {
  const [currentImage, setCurrentImage] = useState(c8); // Set the initial main image
  const [showContactForm, setShowContactForm] = useState(true);
  const thumbnails = [c1, c2, c3, c4, c5, c6]; // Array of thumbnail images

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };
  const handleFormSave = () => {
    setShowContactForm(false);
  };
  const features = [
    { label: "Autopilot", isChecked: true },
    { label: "Summon", isChecked: true },
    { label: "Autopark", isChecked: true },
    { label: "Auto Lane Change", isChecked: true },
    { label: "15 inch Touchscreen Display", isChecked: true },
    { label: "360° Camera", isChecked: true },
    { label: "12 Ultrasonic Sensor", isChecked: true },
  ];

  return (
    <div>
      <Header />

      <Content
        title="Tesla Model 3 Standard Range Plus"
        description="Homepage - New Car List - Car Detail"
      />
      <main style={{ background: "black" }}>
        <ImageGallery></ImageGallery>
        <div className="row1">
          <div className="description">
            <h3 style={{ color: "white" }}>Description</h3>
            <div className="MoreDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              diam nam eu nulla a. Vestibulum aliquet facilisi interdum nibh
              blandit. Leo amet ultricies cum cras sit sed curabitur ultrices
              faucibus. Ultrices pellentesque ultricies semper leo maecenas.
              Amet, et sagittis consectetur at euismod iaculis. Id non velit
              auctor praesent a amet risus facilisis. Lobortis nisl placerat
              orci, eu nisl ornare. Eu vitae pellentesque rhoncus eros vivamus
              est purus enim dui. Leo ac pharetra massa tristique. Libero
              aliquam pellentesque laoreet dui pulvinar facilisis. Id lectus
              mauris senectus sodales porta malesuada tincidunt et. Quam dui
              nulla venenatis suscipit nulla lectus volutpat, augue purus. Sed
              condimentum parturient maecenas viverra pulvinar leo augue nunc.
            </div>
            <div className="readmore1">Read more</div>
          </div>
          <ButtonComponent price="$56,690"></ButtonComponent>
        </div>
        <div className="row2">
          <div>
            <FeatureComponent></FeatureComponent>
            <div className="dealer">
              <h3>Dealer</h3>
              <Dealer></Dealer>
            </div>
            <div className="contact">
              <ContactForm></ContactForm>
            </div>
            <div className='last-infor'>
            <div className="location">
              <h3 style={{ color: "white" }}>Location</h3>
              <MapComponent></MapComponent>
            </div>
            <div className="CreditSimulation">
              <h3 style={{ color: "white" }}>Credit Simulation</h3>
              <CreditSimulation></CreditSimulation>
            </div>
            </div>
          </div>

          <CarInformation></CarInformation>
        </div>
        <div className="row3"></div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default CarsDetail;
