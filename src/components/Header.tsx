import Link from 'next/link'
import EntryHeader from './entry/EntryHeader'

const Header = () => (
    <div>
        <header>
            <h1>Innoday</h1>
            <Link href="/"> Home </Link>
            <Link href="/day"> Day </Link>
            <Link href="/history"> History </Link>
            <Link href="aboutUs"> About Us </Link>
            <EntryHeader />
        </header>
    </div>
)

export default Header
