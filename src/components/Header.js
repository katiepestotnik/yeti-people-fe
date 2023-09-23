import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav className='nav'>
            <Link to='/'>
                <div>People App</div>
            </Link>
            <link to='/people/test'>Test</link>
        </nav>
    )
}
export default Header