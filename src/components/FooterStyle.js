import styled from "styled-components"
export const Container = styled.div`
width: 100%;
height: 70px;
background-color: rgba(205, 76, 196, 0.4);

`

export const Wrapper = styled.div`
width: 100%;
max-width: 1300px;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: auto;

`
export const LogoContainer = styled.div`
margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 0.2rem;
  font-family: sans-serif;
  &:hover {
    color: #fff;
    background-color: #AA7BC3;
    transition: 0.5s all ease;
  svg{
    margin-right: 0.5rem;
  }
`


export const FaFacebook = styled.div`
    padding: 18px 18px;
`