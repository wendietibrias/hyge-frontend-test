type PrimaryButtonType = {
    title: string;
}

const PrimaryButton = ({ title }: PrimaryButtonType) => {
    return (
        <button className="py-3 px-5 rounded-full text-white bg-secondary">{title}</button>
    )
}

export default PrimaryButton;