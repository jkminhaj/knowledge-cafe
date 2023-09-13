import profile from '../../assets/images/profile.png';
const Header = () =>{
    return(
        <section className='md:mt-5 md:px-5 max-w-6xl m-auto'>
            <div className='flex justify-between items-center align-middle font-bold'>
            <h1 className="text-4xl">Knowledge Cafe</h1>
            <img src={profile} className='w-12'></img>
            </div>
            <hr className='mt-4'/>
        </section>
    )
}
export default Header ;