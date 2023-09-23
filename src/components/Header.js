import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav className='nav'>
            <Link to='/'>
                <div>People App</div>
            </Link>
            <Link style={{color: 'white'}} to='/people/test'>Test</Link>
        </nav>
    )
}
export default Header