import { NavLinkStyled } from "./Navigation.styled";

export const Navigation = () => {
    return(
        <nav>
            <ul>
                <li><NavLinkStyled to='/'>Home</NavLinkStyled></li>
                <li><NavLinkStyled to='phonebook'>Phonebook</NavLinkStyled></li>
            </ul>
            <ul>
                <li><NavLinkStyled to='registration'>Registration</NavLinkStyled></li>
                <li><NavLinkStyled to='login'>Login</NavLinkStyled></li>
            </ul>
            <p>Welcom</p>
            <button type='button'>Exit</button>
        </nav>
    )
}