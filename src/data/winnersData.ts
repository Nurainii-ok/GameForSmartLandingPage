export interface Winner {
    id: number;
    name: string;
    amount: string;
    img?: string;
    time: string;
}

export const winnersData: Winner[] = [
    {
        id: 1,
        name: "Cristofer Dorwart",
        amount: "+$220",
        img: "msg-sender1.png",
        time: "2 minutes ago"
    },
    {
        id: 2,
        name: "Sajin Tamang",
        amount: "+$180",
        img: "msg-sender2.png",
        time: "5 minutes ago"
    },
    {
        id: 3,
        name: "Junaid Khan",
        amount: "+$150",
        img: "msg-sender3.png",
        time: "12 minutes ago"
    },
    {
        id: 4,
        name: "Alex Thompson",
        amount: "+$120",
        img: "msg-sender4.png",
        time: "20 minutes ago"
    },
    {
        id: 5,
        name: "Sarah Wilson",
        amount: "+$90",
        img: "msg-sender2.png",
        time: "45 minutes ago"
    },
    {
        id: 6,
        name: "Mike Johnson",
        amount: "+$70",
        img: "msg-sender3.png",
        time: "1 hour ago"
    }
];
