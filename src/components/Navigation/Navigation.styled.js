import styled from "styled-components";
import {NavLink} from 'react-router-dom'

export const NavLinkStyled = styled(NavLink)`
text-decoration: none;
text-color: black;
&.active {
    color: blue;
}`
