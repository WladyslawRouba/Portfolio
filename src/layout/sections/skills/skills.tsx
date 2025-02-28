import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle";
import { Skill } from "./skill/skill";
import { FlexWrapper } from "../../../components/flexWrapper";
export const Skills = () => {
    return(
        <StyledSkills>
            <SectionTitle>figmaSvg</SectionTitle>
        <FlexWrapper wrap={"wrap"} justify={"space-between"}>
            <Skill
             iconId ={"figmaSvg"} 
             title ={"html5"} 
             description ={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus delectus fuga illo! Distinctio, repudiandae nulla ad ex hic in deserunt amet! Voluptatibus dolores quo, veniam labore incidunt dicta quibusdam quae!"}/>
            <Skill 
            iconId ={"cssSvg"} 
            title ={"css3"} 
            description ={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus delectus fuga illo! Distinctio, repudiandae nulla ad ex hic in deserunt amet! Voluptatibus dolores quo, veniam labore incidunt dicta quibusdam quae!"}/>
            <Skill  
            iconId ={"react"} 
            title ={"React"} 
            description ={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus delectus fuga illo! Distinctio, repudiandae nulla ad ex hic in deserunt amet! Voluptatibus dolores quo, veniam labore incidunt dicta quibusdam quae!"}/>
            <Skill  
            iconId ={"typeScript"} 
            title ={"typescript"} 
            description ={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus delectus fuga illo! Distinctio, repudiandae nulla ad ex hic in deserunt amet! Voluptatibus dolores quo, veniam labore incidunt dicta quibusdam quae!"}/>
             <Skill  
            iconId ={"styledCom"} 
            title ={"styled components"} 
            description ={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus delectus fuga illo! Distinctio, repudiandae nulla ad ex hic in deserunt amet! Voluptatibus dolores quo, veniam labore incidunt dicta quibusdam quae!"}/>
             <Skill  
            iconId ={"figmaSvg"} 
            title ={"WEB DESIgN  "} 
            description ={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus delectus fuga illo! Distinctio, repudiandae nulla ad ex hic in deserunt amet! Voluptatibus dolores quo, veniam labore incidunt dicta quibusdam quae!"}/>
        </FlexWrapper>

        </StyledSkills>
    )
}
const StyledSkills = styled.section`
background-color:rgb(245, 189, 187);
min-height: 100vh;

`
