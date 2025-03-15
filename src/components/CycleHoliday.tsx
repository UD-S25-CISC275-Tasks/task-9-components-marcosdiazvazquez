import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "christmas"
    | "halloween"
    | "thanksgiving"
    | "newYear"
    | "valentines";

const holidayEmojis: Record<Holiday, string> = {
    christmas: "🎄",
    halloween: "🎃",
    thanksgiving: "🦃",
    newYear: "🎆",
    valentines: "❤️",
};

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("newYear");

    const cycleAlphabetically = () => {
        const nextHoliday: Record<Holiday, Holiday> = {
            christmas: "halloween",
            halloween: "newYear",
            newYear: "thanksgiving",
            thanksgiving: "valentines",
            valentines: "christmas",
        };

        setCurrentHoliday(nextHoliday[currentHoliday]);
    };

    const cycleByYear = () => {
        const nextHoliday: Record<Holiday, Holiday> = {
            newYear: "valentines",
            valentines: "halloween",
            halloween: "thanksgiving",
            thanksgiving: "christmas",
            christmas: "newYear",
        };

        setCurrentHoliday(nextHoliday[currentHoliday]);
    };

    return (
        <div>
            <div>Holiday: {holidayEmojis[currentHoliday]}</div>
            <Button onClick={cycleAlphabetically}>
                Advance by Alphabet
            </Button>{" "}
            <Button onClick={cycleByYear}>Advance by Year</Button>
        </div>
    );
}
