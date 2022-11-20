import Link from 'next/link'
import EntryHeader from './entry/EntryHeader'

const Header = (props: { uid?: string }) => (
    <div>
        <header>
            <h1>Innoday</h1>
            <Link href="/"> Home </Link>
            <Link href="/day"> Add Activities </Link>
            <Link href="/history"> History </Link>
            <Link href="aboutUs"> About Us </Link>
            {props.uid && <EntryHeader uid={props.uid} />}
        </header>
    </div>
)
export default Header
