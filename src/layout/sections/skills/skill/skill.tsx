import styled from "styled-components"
import { Icon } from "../../../../components/icon/icon"
type SkillPropType = {
    iconId: string;
    title: string;
    description: string
}
export const Skill = (props:SkillPropType) => {
    return(
        <StyledSkill>
                <Icon iconId = {props.iconId}/>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </StyledSkill>

    )
}
const StyledSkill = styled.div`
width: 30%;
margin: 10px;
background-color: rgba(255, 255, 255, 0.56);

`
const SkillTitle = styled.h3`
`
const SkillText = styled.p`

`
