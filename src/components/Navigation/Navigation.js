import { NavLinkStyled } from "./Navigation.styled";

const styled = {
    navi: {
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: 'lightblue',
        
    },
    list: {
       
        display: 'flex',
        listStyle:'none',
        alignItems: 'center',
    
    },
    item: {
         fontSize: 18,
        textColor: 'green',
        marginRight: 10,
    },
    button: {
        fontSize: 16,
        border: '1px solid black',
        borderRadius: '3px',
        marginLeft: 10,
    }

}

export const Navigation = () => {
    return(
        <nav style={styled.navi}>
            <h2>Phonebook</h2>
            <ul style={styled.list}>
                <li style={styled.item}><NavLinkStyled to='/'>Home</NavLinkStyled></li>
                <li style={styled.item}><NavLinkStyled to='phonebook'>Phonebook</NavLinkStyled></li>
            </ul>
            <ul style={styled.list}>
                <li style={styled.item}><NavLinkStyled to='registration'>Register</NavLinkStyled></li>
                <li style={styled.item}><NavLinkStyled to='login'>Log In</NavLinkStyled></li>
            </ul>
            <div style={styled.list} >
                <p style={styled.item}>Welcome</p>
                <button type='button' style={styled.button}>Exit</button>
            </div>
            
        </nav>
    )
}