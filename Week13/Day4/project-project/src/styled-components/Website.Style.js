import styled from 'styled-components';

export const Navigation = styled.nav`
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: 2;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 22px 40px 0 40px;
`;

export const UnOrderedList  = styled.ul`

`;

export const Linked  = styled.link`
padding: 5px;
transition: all 0.3s ease-in-out;
background-color: darkgrey;
cursor: pointer;
text-decoration: none;
color: white;
font-size: 25px;
`;


export const Navlist  = styled.li`
list-style: none;
display: inline-block;
padding-right: 10px;
padding-left: 10px;
`;

export const NavContainer  = styled.div`
height: 75px;
width: 100%;
background-color: darkgrey;
display: flex;
flex-direction: row;

`;

export const Container = styled.div`

`;

export const Anchor  = styled.a`
padding: 5px;
transition: all 0.3s ease-in-out;
background-color: darkgrey;
cursor: pointer;
text-decoration: none;
color: white;
font-size: 25px;
`;

export const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, 1fr);
margin: 15px;
`;