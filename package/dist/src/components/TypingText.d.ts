interface RevealMotionNone {
    revealMotionType: "none";
}
interface RevealMotionFade {
    revealMotionType: "fade";
    fadeDuration: number | null;
}
interface BaseProps {
    text: string;
    numOfWriteChar?: number;
    intervalSec: number;
    shouldRepeat?: boolean;
    shouldRepeatDelayTime?: number;
    showCursor?: boolean;
    cursorChar?: "|" | "_";
}
type RevealMoitionType = RevealMotionNone | RevealMotionFade;
type TypingTextProps = RevealMoitionType & BaseProps;
export declare const TypingText: (props: TypingTextProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TypingText.d.ts.map