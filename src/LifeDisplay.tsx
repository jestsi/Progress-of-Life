import React from 'react';
import {
    FacebookShareButton,
    TwitterShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TelegramShareButton,
    TelegramIcon
} from 'react-share';

interface LifeDisplayProps {
    birthdate: Date;
}

const LifeDisplay: React.FC<LifeDisplayProps> = ({ birthdate }) => {
    const averageLifespanMonths = 90 * 12;
    const now = new Date();
    const birthdateInMonths = birthdate.getFullYear() * 12 + birthdate.getMonth();
    const nowInMonths = now.getFullYear() * 12 + now.getMonth();
    const monthsLived = nowInMonths - birthdateInMonths;

    const progress = Math.min(monthsLived / averageLifespanMonths, 1);

    // Адаптивное количество квадратов в ряду
    const getSquaresPerRow = () => {
        if (window.innerWidth < 640) { // sm:
            return 26;
        } else if (window.innerWidth < 1024) { // lg:
            return 39;
        } else {
            return 52;
        }
    };

    const squaresPerRow = getSquaresPerRow();
    const numRows = Math.ceil(averageLifespanMonths / squaresPerRow);
    const totalSquares = numRows * squaresPerRow;
    const filledSquares = Math.round(progress * totalSquares);

    const squares = [];
    for (let i = 0; i < totalSquares; i++) {
        squares.push(
            <div
                key={i}
                className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-sm transition-colors duration-300 ${
                    i < filledSquares ? 'bg-neutral-800' : 'bg-neutral-300'
                }`}
            />
        );
    }

    const shareUrl = window.location.href;
    const shareMessage = `I have lived ${Math.floor(monthsLived / 12)} years and ${monthsLived % 12} months. My life progress is ${Math.round(progress * 100)}%.`;

    return (
        <div className="max-w-full sm:max-w-2xl mx-auto p-4 sm:p-8 font-light"> {/* Адаптивный padding и max-width */}
            <div className="mb-8">
                <p className="text-neutral-600 text-sm mb-1">
                    {Math.floor(monthsLived / 12)} лет {monthsLived % 12} месяцев
                </p>
                <div className="h-[1px] w-16 bg-neutral-200 mb-4"></div>
                <div
                    className="grid gap-[1px] sm:gap-[2px]" // Адаптивный gap
                    style={{gridTemplateColumns: `repeat(${squaresPerRow}, 1fr)`}}
                >
                    {squares}
                </div>
                <p className="text-neutral-400 text-xs mt-4">
                    {Math.round(progress * 100)}% прожито
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300"> {/* flex-wrap для переноса на новую строку */}
                <FacebookShareButton url={shareUrl}>
                    <FacebookIcon size={32} round bgStyle={{ fill: '#262626' }} />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl} title={shareMessage}>
                    <TwitterIcon size={32} round bgStyle={{ fill: '#262626' }} />
                </TwitterShareButton>
                <WhatsappShareButton url={shareUrl} title={shareMessage}>
                    <WhatsappIcon size={32} round bgStyle={{ fill: '#262626' }} />
                </WhatsappShareButton>
                <TelegramShareButton url={shareUrl} title={shareMessage}>
                    <TelegramIcon size={32} round bgStyle={{ fill: '#262626' }} />
                </TelegramShareButton>
            </div>
        </div>
    );
};

export default LifeDisplay;