import { inter, poppins } from "../fonts";
import { PanelLeft, Plus } from "lucide-react";

export default function Header() {
    return (
        <div className="drawer drawer-open">
            <input id="global-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <header className="navbar bg-base-100 shadow-sm">
                    <section className={`navbar-start ${poppins.className}`}>
                        <label htmlFor="global-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <PanelLeft size={20} />
                        </label>
                        <a className="btn btn-ghost text-xl">Lumea</a>
                    </section>
                    <section className="navbar-center">

                    </section>
                    <section className="navbar-end">
                        <button className="btn btn-neutral font-bold">LOGIN</button>
                    </section>
                </header>
                <div className="p-4">

                </div>
            </div>

            <div className="drawer-side">
                <label htmlFor="global-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex flex-col items-start min-h-full px-4 bg-base-200 is-drawer-close:w-0 is-drawer-close:p-0 is-drawer-open:w-64">
                    <div className="navbar">
                        <div className="navbar-start">
                            <h3 className="text-xl">Portofolio</h3>
                        </div>
                        <div className="navbar-end">
                            <label htmlFor="global-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <PanelLeft size={20} />
                            </label>
                        </div>
                        
                    </div>
                    <div className="w-full is-drawer-close:hidden">
                        <a href="" className="w-full hover-3d">
                            <div className="card bg-neutral text-neutral-content w-full">
                                <div className="card-body">
                                    <h2 className={`${poppins.className} card-title text-sm`}>Nama akun Disini</h2>
                                    <p className={`${inter.className}`}>Hello World!</p>
                                </div>
                            </div>

                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </a>
                        <div className="divider"></div>

                        <ul className="menu w-full grow">
                            <button className="btn bg-base-300 text-base-content"><Plus size={20} /> Portofolio Baru</button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}