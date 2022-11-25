import styled from "styled-components"
export const Container = styled.div`
width: 100%;
height: 70px;
background-color: #DBA8AC;
opacity: 0.5;
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

export const Menu = styled.ul`
height: 100%;
display: flex;
justify-content: space-between;
list-style: none;
@media screen and max-width: 960px{
    position:absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: 90vh;
}
`
export const MenuItem = styled.li`
height: 100%;

`
export const MenuItemLink = styled.a`
display: flex;
justiy-content: center;
height: 100%;
padding: 0.5rem 2.5rem;
font-family: sans-serif;
font-size: 1rem;
font-weight: 300;
cursor: ponter;
transition: 0.5s all ease;
&:hover {
    color: #fff;
    background-color: #AA7BC3;
    transition: 0.5s all ease;
`
export const MobileIcon = styled.div`
display: none;
@media screem and (max-width: 960px)
display: flex;
align-items: center;
cursor: pointer;
svg{
    margin-right: 0.5rem;
  }
`
export const FaFacebook = styled.div`
    padding: 18px 18px;
`