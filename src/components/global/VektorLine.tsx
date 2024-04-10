type VektorLineType = {
    style:string;
    path:string;
    alt:string;
}

const VektorLine = ({ style,path,alt }: VektorLineType) => {
    return (
        <img src={path} alt={alt} className={`${style} lg:hidden`} />
    )
}

export default VektorLine;