import styled from "styled-components"
import { Icon } from "../../components/icon/icon"
import { FlexWrapper } from "../../components/flexWrapper"

export const Footer = ()=> {
    return(
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
            <Name>Wladyslaw</Name>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"linkedin"} width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"}/>
                     </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"telegram"} width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"}/>
                     </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"instagram"} width={"21px"} height= {"21px"} viewBox={"0 0 21px 21px"}/>
                     </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"vk"} width={"21px"} height= {"21px"} viewBox={"0 0 21px 21px"}/>
                     </SocialLink>
                </SocialItem>
               
            </SocialList>
            <Copyright>© 2023 Wladyslaw Rouba, All Rights Reserved.</Copyright>


            </FlexWrapper>
            
        </StyledFooter>

    )
}

const StyledFooter = styled.footer`
background-color: #ffd8a5;
min-height: 20vh;

`
const Name = styled.span`

`
const SocialList = styled.ul`
display: flex;
gap: 30px;

`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
`
const Copyright = styled.small`
`

