import { poppins, inter } from "../fonts";
import { TextAlignStart } from "lucide-react";

export default function PublicHeader() {    
    return (
        <header className="navbar bg-base-100 shadow-sm lg:px-16 sticky top-0 z-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-square btn-ghost lg:hidden">
                        <TextAlignStart size={20} />
                    </div>
                    <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        <li>
                            <details>
                                <summary>Jelajahi</summary>
                                <ul className="p-2 bg-base-100 w-40 z-10">
                                    <li><a>Fitur</a></li>
                                    <li><a>Panduan</a></li>
                                    <li><a>Mengapa lumea?</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Tentang</a></li>
                        <li><a>Harga</a></li>
                        <li>
                            <details>
                                <summary>Pengembangan</summary>
                                <ul className="p-2 bg-base-100 w-40 z-10">
                                    <li><a>Pengembangan</a></li>
                                    <li><a>Filosofi</a></li>
                                    <li><a>Tech stack</a></li>
                                    <li><a>Atribusi</a></li>
                                    <li><a>Saran & masukan</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <a className={`${poppins.className} btn btn-ghost text-2xl`}>Lumea</a>
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    <li>
                        <details>
                            <summary>Jelajahi</summary>
                            <ul className="p-2 bg-base-100 w-40 z-10">
                                <li><a>Fitur</a></li>
                                <li><a>Panduan</a></li>
                                <li><a>Mengapa lumea?</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Tentang</a></li>
                    <li><a>Harga</a></li>
                    <li>
                        <details>
                            <summary>Pengembangan</summary>
                            <ul className="p-2 bg-base-100 w-40 z-10">
                                <li><a>Pengembangan</a></li>
                                <li><a>Filosofi</a></li>
                                <li><a>Tech stack</a></li>
                                <li><a>Atribusi</a></li>
                                <li><a>Saran & masukan</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-center">
            </div>
            <div className="navbar-end gap-2">
                <a className="btn btn-outline btn-neutral-content">Sign in</a>
                <a className="btn btn-neutral text-neutral-content">Sign up</a>
            </div>
        </header>
    )
}