document.addEventListener('DOMContentLoaded', () => {
    const logButton = document.querySelector('#error-btns button:nth-child(1)');
    const errorButton = document.querySelector('#error-btns button:nth-child(2)');
    const countButton = document.querySelector('#error-btns button:nth-child(3)');
    const warnButton = document.querySelector('#error-btns button:nth-child(4)');
    const assertButton = document.querySelector('#error-btns button:nth-child(5)');
    const clearButton = document.querySelector('#error-btns button:nth-child(6)');
    const dirButton = document.querySelector('#error-btns button:nth-child(7)');
    const dirxmlButton = document.querySelector('#error-btns button:nth-child(8)');
    const groupStartButton = document.querySelector('#error-btns button:nth-child(9)');
    const groupEndButton = document.querySelector('#error-btns button:nth-child(10)');
    const tableButton = document.querySelector('#error-btns button:nth-child(11)');
    const timeStartButton = document.querySelector('#error-btns button:nth-child(12)');
    const timeEndButton = document.querySelector('#error-btns button:nth-child(13)');
    const traceButton = document.querySelector('#error-btns button:nth-child(14)');
    const globalErrorButton = document.querySelector('#error-btns button:nth-child(15)')
    
    logButton.addEventListener('click', () => {
        console.log("Using console.log now");
    });
    
    errorButton.addEventListener('click', () => {
        console.error("Using console.error now");
    });
    
    countButton.addEventListener('click', () => {
        console.count("Using console.count");
    });
    
    warnButton.addEventListener('click', () => {
        console.warn('warn');
    });
    
    assertButton.addEventListener('click', () => {
        console.assert(5 < 6, {x: 5, y: 6, reason: "x is smaller than y, passes"});
        console.assert(5 > 6, {x: 5, y: 6, reason: "x is not smaller than y, fails"});
    })
    
    clearButton.addEventListener('click', () => {
        console.clear();
    });
    
    dirButton.addEventListener('click', () => {
        console.dir(document.head);
    });
    
    dirxmlButton.addEventListener('click', () => {
        console.dirxml(document);
    });
    
    groupStartButton.addEventListener('click', () => {
        console.group("Start of group");
        console.group("Los Angeles Lakers");
        console.info("Lebron James");
        console.info("Bronny James");
    });

    groupEndButton.addEventListener('click', () => {
        console.groupEnd("Los Angeles Lakers");
        console.info("That's all the important NBA teams");
        console.groupEnd("Start of group");
    });

    const cseUcsdProfs = [
        {
            first: "Bryan",
            last: "Chin",
            classes: ["CSE30", "CSE120"]
        },
        {
            first: "Thomas",
            last: "Powell",
            classes: ["CSE110", "CSE112", "CSE135"]
        },
        {
            first: "Sean",
            last: "Gao",
            classes: ["CSE150B"]
        }
    ];

    tableButton.addEventListener('click', () => {
        console.table(cseUcsdProfs);
        console.log("Oops, can't see arrays");
        console.table(cseUcsdProfs, ['first', 'last']);
    });
    
    timeStartButton.addEventListener('click', () => {
        console.time("My timer");
    });
    
    timeEndButton.addEventListener('click', () => {
        console.timeEnd("My timer");
    });
    
    traceButton.addEventListener('click', () => {
        const first = () => { 
            console.log("first!");
            second(); 
        };
        const second = () => { 
            console.log("second!");
            third(); 
        };
        const third = () => {
            console.log("third!");
            console.trace();
        };
        
        first();
    });

    globalErrorButton.addEventListener('click', () => {
        iDontExist();
    });
})

