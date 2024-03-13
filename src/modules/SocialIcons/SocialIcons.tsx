import './SocialIcons.css';

function SocialIcons() {
    return (
        <div className="SocialIcons container d-flex justify-content-center mt-3">
            <a href="https://github.com/max-shpungin">
                <img className='icon mx-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
            </a>
            <a href="https://www.linkedin.com/in/maxshpungin/">
                <img className='icon mx-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" />
            </a>
        </div>
    );
}

export default SocialIcons;