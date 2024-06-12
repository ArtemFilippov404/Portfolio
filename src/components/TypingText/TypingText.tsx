import { useEffect, useState } from "react";
export default function TypingText({ text }: { text: string }) {
    const [typingText, setTypingText] = useState('');
    const textLenght = text.length;
    let index = 1;
    let description = true;
    useEffect(() => {
        const typing = setInterval(() => {
            if (description && index < textLenght) {
                setTypingText(current => current + text[current.length]);
                index++;
            } 
            else if (!description && index > 1) {
                setTypingText(current => current.slice(0, -1));
                index--;
            }
            if (index === textLenght) {
                setTimeout(() => {
                    description = false;
                }, 5000);
            }
            if (index === 1) {
                description = true;
            }
        }, 100);
        
        
        return () => {
            clearInterval(typing);
        }
    }, [text]);
    return (
        <p className="typingText">
            {typingText}
        </p>
    )
}