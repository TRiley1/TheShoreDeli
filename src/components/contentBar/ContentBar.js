import Content from "./Content";
import "./ContentBar.css";
import Sandwich from "../splashpage/icons/Sandwich";
import Drink from "../splashpage/icons/Drink";
import Coffee from "../splashpage/icons/Coffee";

const ContentBar = () => {

    const iconParams = {
        fill : "#557474",
        height : "60px",
        width: "60px"
    }


  const icons = {
    content1: {
      icon: <Sandwich fill = {iconParams.fill} height={iconParams.height} width={iconParams.width}/>,
      tag: "Food",
    },
    content2: {
      icon: <Drink fill = {iconParams.fill} height={iconParams.height} width={iconParams.width}/>,
      tag: "Drink",
    },
    content3: {
      icon: <Coffee fill = {iconParams.fill} height={iconParams.height} width={iconParams.width}/>,
      tag: "Relax",
    },
  };

  const getIcons = () => {
    const contentArray = [];
    Object.values(icons).forEach((value) => {
      contentArray.push(
        <Content
          icon={value.icon}
          tag={value.tag}
        />
      );
    });
    return contentArray;
  };

  return (
    <>
      <div class="content-container">{getIcons()}</div>
    </>
  );
};

export default ContentBar;
