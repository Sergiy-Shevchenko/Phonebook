
import css from './UserMenu.styles.module.css'

export const UserMenu = () => {
    return (
        <div className={css.list} >
        <p className={css.item}>Welcome</p>
         <button type='button' className={css.button}>Exit</button>
        </div> 
    
    )
}