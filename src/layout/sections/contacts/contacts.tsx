import styled from "styled-components"
import { SectionTitle } from "../../../components/sectionTitle"
import { Button } from "../../../components/button"
export const Contacts = ()=> {
    return (
        <StyledContacts>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <Field placeholder={"name"}/>
                <Field placeholder={"subject"}/>
                <Field placeholder={"message"} as={"textarea"}/>
                <Button type={"submit"}>Send message</Button>

            </StyledForm>
        </StyledContacts>

    )
}

const StyledContacts = styled.section`
min-height: 50px;
background-color: #fffae2;

` 
const StyledForm = styled.form`
max-width: 500px;
width: 100%;
display: flex;
flex-direction: column;
gap: 5px;
margin: 0 auto;

`
const Field = styled.input`

`