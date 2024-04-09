type GradientButtonType = {
    title: string;
}

const GradientButton = ({ title }: GradientButtonType) => {
    return (
     <button  className={`text-secondary transition-all bg-gradient-to-r from-[#000]/0 from-0% to-[#fff]/5 py-2 px-4 rounded-full  text-[12px] border border-secondary`}>
        {title}
     </button>
    )
}

export default GradientButton;