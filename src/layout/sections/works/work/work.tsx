import styled from "styled-components"

type WorkPropsType = {
    Title: string
    Text: string
    src: string

}

export const Work = (props: WorkPropsType)=>{
    return (
    <StyledWork>
        <Image src={props.src} alt=""/>
        <Title>{props.Title}</Title>
        <Text>{props.Text}</Text>
        <Link href="#">demo</Link>
        <Link href="#">code</Link>
    </StyledWork>
)
}

const StyledWork = styled.div`
background-color: yellow;
max-width: 540px;
width: 100%;


`
const Image = styled.img`
width: 100%;
height: 260px;
object-fit: cover;

`
const Title = styled.h2`

`
const Text = styled.p`

`
const Link = styled.a`

`
