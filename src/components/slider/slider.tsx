import styled from "styled-components"
import { FlexWrapper } from "../flexWrapper"

export const Slider = () => {
    return (
    <StyledSlider>
        <FlexWrapper>
        <Slide>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
            <Name>@ivan ivanov</Name>
        </Slide>
        </FlexWrapper>
        <Pagination>
            <span> </span>
            <span> </span>
            <span> </span>
        </Pagination>
        

    </StyledSlider>
    )
}

const StyledSlider = styled.div`
border: 1px solid red;
max-width: 500px;
`
const Slide = styled.div`
text-iling: center;

`
const Text = styled.p`

`
const Name = styled.span`

`
const Pagination = styled.div`
span {
display: inline-block;
width: 15px;
height: 15px;
margin: 5px;
background-color: yellow;
}
`
