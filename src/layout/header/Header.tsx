import styled from "styled-components";
import { Logo } from "../../components/logo/logo"; 
import { Menu } from "../../components/menu/menu";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"];

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItes={items}/>
        </StyledHeader>
    )
};
const StyledHeader = styled.header `
    background-color: #FFEF;
    display: flex;
    justify-content: space-between;
`


