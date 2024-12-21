import React, { useState } from 'react';
import BirthdateInput from './BirthdayInput';
import LifeDisplay from './LifeDisplay';

type AppProps = object

const App: React.FC<AppProps> = () => {
    const [birthdate, setBirthdate] = useState<Date | null>(null);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white">
            <div className="w-full max-w-xl">
                <h1 className="text-2xl font-light text-neutral-800 mb-12 tracking-wide">
                    Progress of Life
                </h1>
                <div className="space-y-8">
                    <BirthdateInput onBirthdateChange={setBirthdate} />
                    <div className="pt-4">
                        {birthdate && <LifeDisplay birthdate={birthdate} />}
                    </div>
                </div>
                <div className="mt-16 text-center">
                    <p className="text-xs text-neutral-400">
                        Визуализация прожитого времени
                    </p>
                </div>
            </div>
        </div>
    );
};

export default App;