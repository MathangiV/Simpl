import styled from "styled-components";
import Slider from "react-slick";
import Typography from "../Typography";

const StyledImg = styled.img`
  width: 32px;
  height: 32px;
`;
const StyledSlide = styled.div`
  text-align: center;
`;

const StyledImgWrapper = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 44px;
  background-color: #F6F6F6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
const settings = {
    dots: false,
    arrows: false,
    speed: 500,
    infinite: false,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

const MerchantsList = [
  {
    name: 'Bigbasket',
    logo: 'https://assets.getsimpl.com/images/merchant-icons/bigbasket.png',
  },
  {
    name: 'Dunzo',
    logo: 'https://assets.getsimpl.com/images/merchant-icons/dunzo.png',
  },
  {
    name: 'Practo',
    logo: 'https://assets.getsimpl.com/images/merchant-icons/practo.png',
  },
  {
    name: 'Zomato',
    logo: 'https://assets.getsimpl.com/images/merchant-icons/zomato.png',
  },
  {
    name: 'Bigbasket',
    logo: 'https://assets.getsimpl.com/images/merchant-icons/bigbasket.png',
  },
  {
    name: 'Dunzo',
    logo: 'https://assets.getsimpl.com/images/merchant-icons/dunzo.png',
  },
]
  const MerchantSlider = () => {
  
    return (
      <Slider {...settings}>
        {MerchantsList.map((merchant, index) => 
          <StyledSlide key={merchant.name+index}>
              <StyledImgWrapper> <StyledImg src={merchant.logo} /> </StyledImgWrapper>
            <Typography as="span">{merchant.name}</Typography>
          </StyledSlide>
        )}
      </Slider>
    );
  };
  

export default MerchantSlider;
  