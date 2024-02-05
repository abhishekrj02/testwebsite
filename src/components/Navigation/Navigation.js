import './Navigation.css'

function Navigation(){
    return(
        <div className="navigation-wrapper">
            

            <div className="link-wrapper">
                <div className='links'>Home</div>
                <div className='links'>Our Team</div>
                <div className='links'>Projects</div>
                <div className='links'>Our Work</div>
                <div className='links'>Alumni</div>
                <div className='links'>Contact Us</div>

            </div>
            <div>
                <img className='vibhav-logo' src='https://avatars.githubusercontent.com/u/72870287?s=280&v=4' />
            </div>
            
        </div>
    )
}
export default Navigation;