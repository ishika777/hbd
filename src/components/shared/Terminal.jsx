import logs from "@/logs";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Terminal() {
    const navigate = useNavigate();
    const terminalRef = useRef(null);
    const hasInsertedPasscode = useRef(false); 
    const [log, setLog] = useState([]);
    const [passcode, setPasscode] = useState("");
    const [showUnlock, setShowUnlock] = useState(false);

    function generatePasscode() {
        const nameParts = ["RAMANSH", "Raman24Sh", "Rmn$24!", "RaM@24Sh!", "R@M@NSH24", "R4M@N24", "Ra24mAnSh"];
        const numberParts = ["24", "2401", "24*!", "24$RAM", "R24M", "Rmn24!", "2402"];
    
        const randomName = nameParts[Math.floor(Math.random() * nameParts.length)];
        const randomNumber = numberParts[Math.floor(Math.random() * numberParts.length)];
    
        return `${randomName}${randomNumber}`;
    }

    // Store passcode in useRef so it remains constant across re-renders
    const passRef = useRef(generatePasscode());
    const chkpass = passRef.current;

    const secretPasscode = `<span class="text-green-300 italic font-[10px]">${chkpass}</span>`;
    const hackingLogs = useRef([...logs]); // Prevent re-renders affecting logs

    useEffect(() => {
        if (!hasInsertedPasscode.current) {
            const randomIndex = Math.floor(Math.random() * (hackingLogs.current.length - 2)) + 1;
            const embedPositions = ["start", "middle", "end"];
            const position = embedPositions[Math.floor(Math.random() * embedPositions.length)];

            let chosenLog = hackingLogs.current[randomIndex];

            if (position === "start") {
                chosenLog = `${secretPasscode} ${chosenLog}`;
            } else if (position === "middle") {
                const midPoint = Math.floor(chosenLog.length / 2);
                chosenLog = chosenLog.slice(0, midPoint) + ` ${secretPasscode} ` + chosenLog.slice(midPoint);
            } else if (position === "end") {
                chosenLog = `${chosenLog} ${secretPasscode}`;
            }

            hackingLogs.current[randomIndex] = chosenLog;
            hasInsertedPasscode.current = true;
        }

        let i = 0;
        const interval = setInterval(() => {
            setLog((prevLog) => [...prevLog, hackingLogs.current[i]]);
            i++;
            if (i === hackingLogs.current.length) {
                clearInterval(interval);
                setShowUnlock(true);
            }
            scrollToBottom();
        }, 250);

        return () => clearInterval(interval);
    }, []);

    const scrollToBottom = () => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    };

    const handleUnlock = () => {
        console.log(chkpass);
        if (passcode === chkpass) {
            navigate("/birthday-wish");
        } else {
            setLog((prevLog) => [...prevLog, `<span class="text-red-500">🚨 Incorrect Passcode! Try Again...</span>`]);
            setPasscode("");
        }
    };

    // Handle "Enter" key press
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleUnlock();
        }
    };

    return (
        <div className="max-h-screen h-screen  w-screen bg-black text-green-300 font-mono p-6 flex flex-col justify-center">
            <div
                ref={terminalRef}
                className="terminal h-[50vh] overflow-hidden border border-green-500 p-4 bg-gray-900 overflow-y-auto shadow-lg rounded-md"
                style={{ fontFamily: `"Fira Code", "Courier New", monospace` }} // Real terminal font
            >
                {log.map((line, index) => (
                    <p key={index} className="animate-fade-in" dangerouslySetInnerHTML={{ __html: line }} />
                ))}
            </div>

            {showUnlock && (
                <div className="mt-6 flex flex-col gap-4">
                    <p className="text-yellow-400">🔒 Enter Passcode to Continue:</p>
                    <Input
                        type="text"
                        className="bg-black text-green-300 border border-green-400 px-2 py-1"
                        placeholder="Enter passcode..."
                        value={passcode}
                        onChange={(e) => setPasscode(e.target.value)}
                        onKeyDown={handleKeyPress} // Handle Enter key press
                    />
                    <Button onClick={handleUnlock} className="bg-green-600 text-black hover:bg-green-700">
                        Unlock 🚀
                    </Button>
                </div>
            )}
        </div>
    );
}
