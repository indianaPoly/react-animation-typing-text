import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export const TypingText = (props) => {
    const { text, numOfWriteChar = 1, intervalSec, shouldRepeat = false, shouldRepeatDelayTime = 1000, revealMotionType, showCursor = false, cursorChar = '|' } = props;
    const [displayText, setDisplayText] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    // 텍스트가 변동이 되었을 때 
    useEffect(() => {
        setDisplayText([]);
        setCurrentIndex(0);
    }, [text]);
    // 실제 글자를 보여주는 로직
    useEffect(() => {
        if (numOfWriteChar < 1) {
            throw Error("The numOfWriteChar prop entered must always be greater than 1.");
        }
        if (intervalSec < 0) {
            throw Error("The intervalSec prop entered must always be greater than 0.");
        }
        if (!revealMotionType) {
            throw Error("reveal motion type은 기본적으로 none을 입력해야합니다.");
        }
        if (currentIndex >= text.length && shouldRepeat) {
            const resetTime = setTimeout(() => {
                setDisplayText([]);
                setCurrentIndex(0);
            }, shouldRepeatDelayTime);
            return () => {
                clearTimeout(resetTime);
            };
        }
        else {
            const timer = setTimeout(() => {
                const charsToAdd = text.slice(currentIndex, currentIndex + numOfWriteChar).split("");
                setDisplayText(prev => [...prev, ...charsToAdd]);
                setCurrentIndex(prev => prev + numOfWriteChar);
            }, intervalSec);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [text, currentIndex, numOfWriteChar, intervalSec, revealMotionType, shouldRepeat, shouldRepeatDelayTime, showCursor, cursorChar]);
    const getMotionProps = (props) => {
        switch (props.revealMotionType) {
            case "fade":
                return {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: props.fadeDuration ? props.fadeDuration : 0.3 },
                };
            case "none":
            default:
                return {};
        }
    };
    const motionProps = getMotionProps(props);
    return (_jsxs("div", { style: { display: "inline" }, children: [displayText.map((char, i) => (_jsx(motion.span, { ...motionProps, children: char }, `${char}-${i}`))), showCursor && (_jsx("span", { className: "blinking-cursor", children: cursorChar ?? "|" }))] }));
};
