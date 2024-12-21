// BirthdateInput.tsx
import React, { useState, ChangeEvent } from 'react';

interface BirthdateInputProps {
    onBirthdateChange: (date: Date | null) => void;
}

const BirthdateInput: React.FC<BirthdateInputProps> = ({ onBirthdateChange }) => {
    const [dateString, setDateString] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDateString(event.target.value);
        const date = new Date(event.target.value);
        if (!isNaN(date.getTime())) {
            onBirthdateChange(date);
        } else {
            onBirthdateChange(null);
        }
    };

    return (
        <div className="mb-8">
            <label htmlFor="birthdate" className="block text-neutral-600 text-sm mb-3">
                Дата рождения
            </label>
            <input
                type="date"
                id="birthdate"
                className="w-full px-4 py-2 text-sm text-neutral-800 border border-neutral-200
                         rounded-none focus:outline-none focus:border-neutral-400
                         transition-colors duration-200 bg-transparent"
                value={dateString}
                onChange={handleChange}
            />
        </div>
    );
};

export default BirthdateInput;