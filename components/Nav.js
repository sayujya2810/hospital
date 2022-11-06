import Link from "next/link";
import {auth} from "../utils/firebase"
import {useAuthState} from "react-firebase-hooks/auth"

const Nav = () => {

    const [user, loading] = useAuthState(auth)

    return (
        <nav className="flex justify-between items-center py-10">
            <Link href="/">
                <button className="text-lg font-medium">Hospital</button>
            </Link>
            <ul className="flex items-center gap-10">
                {!user && (
                    <Link href="/auth/login">
                        <a  className="py-2 px-4 text-small bg-cyan-500 rounded-lg text-white font-medium ml-8">Join Now</a>
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