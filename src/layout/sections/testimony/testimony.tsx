import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle";
import { Icon } from "../../../components/icon/icon";
import { Slider } from "../../../components/slider/slider";
import { FlexWrapper } from "../../../components/flexWrapper";
  export const Testimony = () => {
    return (
    <StyledTestimony>
    <SectionTitle>StyledTestimony</SectionTitle>
        <FlexWrapper direction= {"column"} align={"center"}>
            <Icon iconId={"quote"}/>
            <Slider/>
        </FlexWrapper>
   

    </StyledTestimony>
    )
}


const StyledTestimony = styled.section`
    
    background-color: pink;
`