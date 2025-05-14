'use client';
import { useState, useRef, useEffect, ReactNode } from 'react';

type DropdownProps = {
    trigger: ReactNode;
    children: ReactNode;
};

const Dropdown = ({ trigger, children }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Закрытие при клике вне компонента
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            <div onClick={() => setIsOpen(prev => !prev)} className="cursor-pointer">
                {trigger}
            </div>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded shadow-lg z-10">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
