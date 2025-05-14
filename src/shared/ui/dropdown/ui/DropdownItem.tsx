import { ReactNode } from 'react';

export type DropdownItemProps = {
    children: ReactNode;
    onClick?: () => void;
};

const DropdownItem = ({ children, onClick }: DropdownItemProps) => {
    return (
        <button
            onClick={onClick}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
        >
            {children}
        </button>
    );
};

export default DropdownItem;
