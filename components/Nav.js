import Link from "next/link";
import {auth} from "../utils/firebase"
import {useAuthState} from "react-firebase-hooks/auth"

const Nav = () => {

    const [user, loading] = useAuthState(auth)

    return (
        <nav className="flex justify-between items-center py-10">
            <Link href="/">
                <button className="text-4xl font-medium">L'Hospital</button>
            </Link>
            <ul className="flex items-center gap-10">
                {!user && (
                    <Link href="/auth/Login">
                        <a  className="py-2 px-4 ease-in-out duration-300 hover:bg-black hover text-small bg-cyan rounded-lg text-white font-medium ml-8">Join Now</a>
                    </Link>
                )}


                {
                    user && (
                        <div className="flex items-center gap-6">
                            <Link href="/Dashboard">
                                <img className="w-12 rounded-full cursor-pointer" src={user.photoURL} />
                            </Link>
                        </div>

                    )
                }
            </ul>
        </nav>
    );
}

export default Nav;