const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));

// Platforms data JSON
const platforms = [
    { name: "Robinhood", fees: "$0", minDeposit: "$0", bestFor: "Beginner Investors", rating: 8.8, url: "https://robinhood.com" },
    { name: "Fidelity", fees: "$0", minDeposit: "$0", bestFor: "Retirement Investing", rating: 9.5, url: "https://www.fidelity.com" },
    { name: "Charles Schwab", fees: "$0", minDeposit: "$0", bestFor: "Research Tools", rating: 9.3, url: "https://www.schwab.com" },
    { name: "E*TRADE", fees: "$0", minDeposit: "$500", bestFor: "Active Traders", rating: 4.5, url: "https://us.etrade.com" },
    { name: "Webull", fees: "$0", minDeposit: "$0", bestFor: "Advanced Charts", rating: 4.4, url: "https://www.webull.com" },
    { name: "Interactive Brokers", fees: "Low", minDeposit: "$0", bestFor: "Professional Traders", rating: 4.6, url: "https://www.interactivebrokers.com" },
    { name: "TD Ameritrade", fees: "$0", minDeposit: "$0", bestFor: "Comprehensive Research", rating: 9.0, url: "https://www.tdameritrade.com" },
    { name: "Vanguard", fees: "$0", minDeposit: "$1000", bestFor: "Long-term Investing", rating: 9.2, url: "https://investor.vanguard.com" },
    { name: "Merrill Edge", fees: "$0", minDeposit: "$0", bestFor: "Bank Integration", rating: 8.7, url: "https://www.merrilledge.com" },
    { name: "SoFi Invest", fees: "$0", minDeposit: "$0", bestFor: "Social Investing & Robo", rating: 8.5, url: "https://www.sofi.com/invest" }
];

// API route
app.get('/api/platforms', (req, res) => {
    res.json(platforms);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));