import styled from "styled-components"
import { SectionTitle } from "../../../components/sectionTitle"
import { Menu } from "../../../components/menu/menu"
import { FlexWrapper } from "../../../components/flexWrapper";
import { Work } from "./work/work";
import socialImage from "./../../../assets/images/proj1.webp";
import timerImage from "./../../../assets/images/proj2-.webp";

const WorkItems = ["All", "landing page", "React", "spa"];

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle> 
            <Menu menuItes={WorkItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work 
                    Title="Social Network" 
                    Text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa rerum saepe deleniti libero! Nihil atque eaque totam natus veniam ex. Facilis natus impedit rerum sint libero et, delectus amet."
                    src={socialImage}
                />
                <Work 
                    Title="Timer" 
                    Text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa rerum saepe deleniti libero! Nihil atque eaque totam natus veniam ex. Facilis natus impedit rerum sint libero et, delectus amet."
                    src={timerImage}
                />
            </FlexWrapper>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #deefff;`