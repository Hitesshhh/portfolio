


export const Navbar = () => {
    return(
        <div>
            <div className="navContainer flex justify-between items-center p-5 border-b-[1px] border-brand">
                <div className="WhoIam flex flex-col">
                    <span className="fulltime text-sm text-brand font-bold">SOFTWARE DEVELOPER</span>
                    <span className="parttime text-xs">CONTENT CREATOR</span>
                </div>
                <div className="availableForWork flex">
                    <span className="isAvailable text-xs">AVAILABLE FOR FREELANCE</span>
                    <div className="additionalBtns"></div>
                </div>
            </div>
        </div>
    )
}