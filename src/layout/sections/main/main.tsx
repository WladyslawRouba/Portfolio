import styled from "styled-components";
import photo from "../../../assets/images/phofo.webp";
import  {FlexWrapper} from "../../../components/flexWrapper";
export const Main = ()=> {
    return(
 <StyledMain>
    <FlexWrapper align={"center"} justify={"space-around"}>
    <div>
        <span>Hi There</span>
        <Name>I am Wladislaw Roubo</Name>
        <MainTitle>A Web Developer. </MainTitle>
    </div>
    <Photo src={photo} alt="" />
    </FlexWrapper>
 </StyledMain>
    )
}
const StyledMain = styled.div`
 max-height: 100vh;
 background-color:rgb(216, 180, 129);
`

const Photo = styled.img `
width: 350px;
height: 430px;
`
const MainTitle = styled.h1`

`
const Name = styled.h2`

`