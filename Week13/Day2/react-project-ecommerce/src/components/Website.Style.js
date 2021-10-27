import styled from 'styled-components';

// Start of Navbar styles
export const Overlay = styled.div`
position: absolute;
z-index: 1;
top: 0;
left: 0;
height: 100%;
right: 0;
bottom: 0;
padding: 0 !important;
margin: 0 !important;
background-color: rgba(10, 10, 10, 0.3);
`;

export const NavHeader = styled.header`
background-image: url(https://images.unsplash.com/photo-1633464130613-0a9154299ac2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1373&q=80);
background-repeat: no-repeat;
background-size: cover;
height: 150px;
position: relative;
`;

export const Navigation = styled.nav`
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: 2;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 40px 60px 0 60px;
`;

export const Header2 = styled.h2`

`;

export const UnorderedList = styled.ul`

`;

export const ListItems = styled.li`
list-style: none;
display: inline-block;
padding-right: 10px;
padding-left: 10px;
`;

export const Anchor = styled.a`
padding: 5px;
transition: all 0.3s ease-in-out;
background-color: darkgrey;
cursor: pointer;
text-decoration: none;
`;
//
//// end of Navbar styles 

// Start of Item card styling

export const CardContainer = styled.div`
Display: grid;
grid-template-columns: repeat(4, 1fr);
margin-top: 10px;
padding: 60px;
text-align: center;
`;

export const Container = styled.div`

`;

export const CardImage = styled.img`
height: 300px;
width: 150px;
margin-right: 20px;
margin-left: 20px;
position: relative;
overflow: hidden;
`;

export const Header3 = styled.h3`

`;
//// End of Item card styling