'use client'

import FullImage from "./util/FullImage"
import { useState } from "react";

export default function Question({ answer }: { answer: Answer }) {

    const [isOpen, setIsOpen] = useState(false);

    function onQuestionClick() {
        setIsOpen(!isOpen);
    }

    const showAnswer = isOpen ? " block " : " hidden "

    return (
        <div className="border-b border-silver-200 pb-3" onClick={onQuestionClick}>
            <div className="flex justify-between mt-3 hover:font-medium">
                <div className="text-xl ">{answer.question}</div>
                <div className="w-6 flex-shrink-0 ml-3 pt-1">
                    {
                        isOpen ?
                            <FullImage src="/icon-minus.svg" alt="plus" /> :
                            <FullImage src="/icon-plus.svg" alt="plus" />
                    }
                </div>
            </div>

            <div className={showAnswer + " mt-2 text-greyish-purple pl-1"}>{answer.answer}</div>
        </div>
    )
}