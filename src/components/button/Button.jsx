function Button({ link, target='_self', btnText, btnIcon, className, ...props }) {

    let icon = null;

    if (btnIcon === "arrow") {
        icon = 
            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.75 6.77502H0.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.70001 0.75L15.75 6.774L9.70001 12.799" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ;
    } else if (btnIcon === "cart-bag") {
        icon = 
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.81669 6.48336H2.31669L0.650024 15.65H15.65L13.9834 6.48336H11.4834M4.81669 6.48336V3.98336C4.81669 2.14241 6.30907 0.650024 8.15002 0.650024C9.99097 0.650024 11.4834 2.14241 11.4834 3.98336V6.48336M4.81669 6.48336H11.4834M4.81669 6.48336V8.98336M11.4834 6.48336V8.98336" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ;
    } else if (btnIcon) {
        icon = btnIcon;
    }

    let btnContent = (
        <>
            {btnText && <span>{btnText}</span>}
            {icon}
        </>
    );

    return link ? (
        <a href={link} className={className} target={target} {...props}>
            {btnContent}
        </a>
    ) : (
        <button className={className} {...props}>
            {btnContent}
        </button>
    );
}

export default Button;