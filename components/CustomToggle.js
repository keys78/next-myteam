const CustomToggle = () => {
    
    return (
        <div class="toggle-side">
            <div onClick={() => setIsActiveBurger(!isActiveBurger)} className={`${isActiveBurger ? 'hamburger is-active' : 'hamburger'}`}  id="hamburger-9">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </div>
    );
}
export default CustomToggle;