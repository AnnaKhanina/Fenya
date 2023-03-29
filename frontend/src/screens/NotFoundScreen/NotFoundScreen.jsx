import { NotFoundMain, NotFoundTitle, NotFoundText } from "../NotFoundScreen/NotFoundScreen.styled";

const NotFound = () => {
    return ( 
        <NotFoundMain>
            <NotFoundTitle>404</NotFoundTitle>
                <NotFoundText>Sorry, we couldn't find that page</NotFoundText>
        </NotFoundMain>
    );
};

export default NotFound;