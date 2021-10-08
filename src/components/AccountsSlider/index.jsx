import Slider from "react-slick";
import StatusCard from "../StatusCard";

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1.1,
  slidesToScroll: 1,
  swipeToSlide: true,
};

const AccountInfo = [
  {
    account: "simpl",
    status: "Bill overdue",
    spentInfo: "SPENT TILL NOW",
    amount: 1800,
    dueDate: "15 Aug",
    due: 1500,
  },
  {
    account: "PayLater",
    spentInfo: "SPENT TIHIS MONTH",
    amount: 1150,
    notification:
      "Clear last month’s dues with ICICI bank on/before 15th to avoid late payment fees.",
  },
];

const AccountsSlider = () => {
  return (
    <Slider {...settings}>
      {AccountInfo.map((info, index) => (
        <StatusCard {...info} key={info.acount + index} />
      ))}
    </Slider>
  );
};

export default AccountsSlider;
