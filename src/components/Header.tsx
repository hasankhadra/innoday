import Link from 'next/link'
import Entry from './entry/Entry'

const Header = () => (
    <div>
        <header>
            <h1>Innoday</h1>
            <Link href="/"> Home </Link>
            <Link href="/day"> Day </Link>
            <Link href="/history"> History </Link>
            <Link href="aboutUs"> About Us </Link>
            <Entry />
        </header>

    </div>
)

export default Header
