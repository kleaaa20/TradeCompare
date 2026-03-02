// api/platforms.js
export default function handler(req, res) {
    // Sample platform data
    const platforms = [
        {
            name: "Robinhood",
            fees: "$0",
            minDeposit: "$0",
            bestFor: "Beginner Investors",
            rating: 8.8,
            url: "https://robinhood.com"
        },
        {
            name: "Fidelity",
            fees: "$0",
            minDeposit: "$0",
            bestFor: "Retirement Investing",
            rating: 9.5,
            url: "https://fidelity.com"
        },
        {
            name: "Charles Schwab",
            fees: "$0",
            minDeposit: "$0",
            bestFor: "Research Tools",
            rating: 9.3,
            url: "https://schwab.com"
        },
        {
            name: "E*TRADE",
            fees: "$0",
            minDeposit: "$500",
            bestFor: "Active Traders",
            rating: 4.5,
            url: "https://etrade.com"
        },
        {
            name: "Webull",
            fees: "$0",
            minDeposit: "$0",
            bestFor: "Advanced Charts",
            rating: 4.4,
            url: "https://webull.com"
        },
        {
            name: "Interactive Brokers",
            fees: "Low",
            minDeposit: "$0",
            bestFor: "Professional Traders",
            rating: 4.6,
            url: "https://interactivebrokers.com"
        },
        {
            name: "TD Ameritrade",
            fees: "$0",
            minDeposit: "$0",
            bestFor: "Comprehensive Research",
            rating: 9,
            url: "https://tdameritrade.com"
        },
        {
            name: "Vanguard",
            fees: "$0",
            minDeposit: "$1000",
            bestFor: "Long-term Investing",
            rating: 9.2,
            url: "https://vanguard.com"
        },
        {
            name: "Merrill Edge",
            fees: "$0",
            minDeposit: "$0",
            bestFor: "Bank Integration",
            rating: 8.7,
            url: "https://merrilledge.com"
        },
        {
            name: "SoFi Invest",
            fees: "$0",
            minDeposit: "$0",
            bestFor: "Social Investing & Robo",
            rating: 8.5,
            url: "https://sofi.com"
        }
    ];

    res.status(200).json(platforms);
<<<<<<< HEAD
}
=======
}
>>>>>>> 0282c2d (Add Vercel API for platforms)
