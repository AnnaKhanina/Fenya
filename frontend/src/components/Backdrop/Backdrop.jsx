import { BackdropWrapper } from "../Backdrop/Backdrop.styled";

const Backdrop = ({show, click}) => {
    return show && <BackdropWrapper onClick={click}></BackdropWrapper>    
};

export default Backdrop;