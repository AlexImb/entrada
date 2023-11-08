

export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
    children?: React.ReactNode;
    disabled?: boolean;
  };

export const ButtonPrimary = ({ children, onClick, disabled }: ButtonProps) => {
    return (<button 
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={onClick}
        disabled={disabled}>
        {children}
    </button>);
};

export const ButtonSecondary = ({ children, onClick, disabled }: ButtonProps) => {
    return (<button 
        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700"
        onClick={onClick}
        disabled={disabled}>
        {children}
    </button>);
}


