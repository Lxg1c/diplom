import { FC, InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Checkbox: FC<CheckboxProps> = ({ label, ...props }) => {
    return (
        <label className="flex items-center cursor-pointer group">
            <input
                type="checkbox"
                className="hidden"
                {...props}
            />

            <div className={`
        w-5 h-5 border-2 rounded mr-2 flex items-center justify-center
        transition-colors duration-200
        group-hover:border-blue-400
        ${props.checked ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}
      `}>
                {props.checked && (
                    <CheckIcon className="w-3 h-3 text-white" />
                )}
            </div>

            <span className="select-none text-gray-700">{label}</span>
        </label>
    );
};

const CheckIcon = ({ className }: { className?: string }) => (
    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.39994 10.2348L0.882739 7.71758L0.317139 8.28318L3.39994 11.366L13.6827 1.08318L13.1171 0.517578L3.39994 10.2348Z" fill="white"/>
    </svg>

);

export default Checkbox;