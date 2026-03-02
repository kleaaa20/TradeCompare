// api/platforms.js
export default function handler(req, res) {
  const platforms = [
    { name: "Robinhood", fees: "$0", minDeposit: "$0", bestFor: "Beginner Investors", rating: 8.8, url: "#" },
    { name: "Fidelity", fees: "$0", minDeposit: "$0", bestFor: "Retirement Investing", rating: 9.5, url: "#" },
    { name: "Charles Schwab", fees: "$0", minDeposit: "$0", bestFor: "Research Tools", rating: 9.3, url: "#" },
    { name: "E*TRADE", fees: "$0", minDeposit: "$500", bestFor: "Active Traders", rating: 4.5, url: "#" },
    { name: "Webull", fees: "$0", minDeposit: "$0", bestFor: "Advanced Charts", rating: 4.4, url: "#" },
    { name: "Interactive Brokers", fees: "Low", minDeposit: "$0", bestFor: "Professional Traders", rating: 4.6, url: "#" },
    { name: "TD Ameritrade", fees: "$0", minDeposit: "$0", bestFor: "Comprehensive Research", rating: 9, url: "#" },
    { name: "Vanguard", fees: "$0", minDeposit: "$1000", bestFor: "Long-term Investing", rating: 9.2, url: "#" },
    { name: "Merrill Edge", fees: "$0", minDeposit: "$0", bestFor: "Bank Integration", rating: 8.7, url: "#" },
    { name: "SoFi Invest", fees: "$0", minDeposit: "$0", bestFor: "Social Investing & Robo", rating: 8.5, url: "#" }
  ];

  res.status(200).json(platforms);
}
