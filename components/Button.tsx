type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
};

export default function Button({
    children,
    onClick,
    disabled=false,
    loading=false,
}:Props){

    return(
        <button
            disabled={disabled || loading}
            onClick={onClick}
            className=" bg-amber-700 p-2 rounded font-bold border cursor-pointer"
        >
            {loading ? "Loading..." : children}
        </button>
    );
}