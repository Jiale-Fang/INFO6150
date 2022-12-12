import '../static/css/css-gg.css'
import '../static/css/ThemeSwitcher.css'
function ThemeSwitcher({theme, toggleTheme}) {
    let themeClass = theme === 'dark' ? 'gg-sun' : 'gg-moon';
    return (
        <div className="theme" aria-label='Change theme button'>
            {/* <div className=""> */}
            <i className={`${themeClass} theme-icon`} onClick={() => {
          toggleTheme()
        }} />
            {/* </div> */}
        </div>
    )
}
export default ThemeSwitcher;