import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css'

export const Footer = () => {
    return (
        <div className="footerBox">           
           <a className="icons" href="https://github.com/PawelWalicki/food-recipe"><GitHubIcon fontSize="large"/></a>
           <a className="icons" href="https://www.linkedin.com/in/paweł-walicki-a39b09176/"><LinkedInIcon fontSize="large"/></a>
        </div>
    )
}