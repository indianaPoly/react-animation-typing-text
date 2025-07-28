import { create } from "zustand";
import { cursorCharType, RevealMoitionType } from "react-animation-typing-text";

type Store = {
  inputText: string;
  submittedText: string;
  numOfWriteChar: number;
  intervalSec: number;
  revealMotionType: RevealMoitionType["revealMotionType"];
  fadeDuration: number | null;
  shouldRepeat: boolean;
  shouldRepeatDelayTime: number;
  showCursor: boolean;
  cursorChar: cursorCharType;

  setInputText: (arg: string) => void;
  setSubmittedText: (arg: string) => void;
  setNumOfWriteChar: (arg: number) => void;
  setIntervalSec: (arg: number) => void;
  setRevealMotionType: (arg: RevealMoitionType["revealMotionType"]) => void;
  setFadeDuration: (arg: number | null) => void;
  setShouldRepeat: (arg: boolean) => void;
  setShouldRepeatDelayTime: (arg: number) => void;
  setShowCursor: (arg: boolean) => void;
  setCursorChar: (arg: cursorCharType) => void;
};

export const useTypingStore = create<Store>()(set => ({
  inputText: "",
  submittedText: "",
  numOfWriteChar: 2,
  intervalSec: 100,
  revealMotionType: "none",
  fadeDuration: 0.1,
  shouldRepeat: false,
  shouldRepeatDelayTime: 1000,
  showCursor: false,
  cursorChar: "|",

  setInputText: text => set({ inputText: text }),
  setSubmittedText: text => set({ submittedText: text }),
  setNumOfWriteChar: n => set({ numOfWriteChar: n }),
  setIntervalSec: n => set({ intervalSec: n }),
  setRevealMotionType: type => set({ revealMotionType: type }),
  setFadeDuration: n => set({ fadeDuration: n }),
  setShouldRepeat: b => set({ shouldRepeat: b }),
  setShouldRepeatDelayTime: n => set({ shouldRepeatDelayTime: n }),
  setShowCursor: b => set({ showCursor: b }),
  setCursorChar: char => set({ cursorChar: char }),
}));
