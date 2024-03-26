import Link from "next/link"

export default function NavBar(){
    return(
        <div className="container bg-center">
            <div className ="flex flex-row flex-nowrap items-center space-x-1 text-base shadow-xl">
        <h4 className="font-semibold text-slate-900"><br/>
        <span className="rounded-full bg-blue-400 px-2 py-2 text-xl">allaboutAI</span><br/><br/>
        </h4>
        
            <nav className="container bg-center flex justify-center space-x-4">
            <Link href="/">
            <div className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</div></Link>
            <Link href="/NVidia">
            <div className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">NVidia</div></Link>
            <Link href="/OpenAI">
            <div className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">OpenAI</div></Link>
            <Link href="/Google">
            <div className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Google</div></Link>
            <Link href="/Microsoft">
            <div className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Microsoft</div></Link>
            </nav>
            </div>      
        </div>
    )
}