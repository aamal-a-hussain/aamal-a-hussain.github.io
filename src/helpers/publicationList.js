
const papers = [
    {
        title: "Equilibria and Convergence of Fictitious Play on Network Aggregative Games",
        authors: "Aamal Hussain, Francesco Belardinelli",
        conference: "idk",
        path: "https://ala2022.github.io/papers/ALA2022_paper_42.pdf",
        year: 2022
    },
    {
        title: "Stability of Multi-Agent Learning: Convergence in Network Games with Many Players",
        authors: "Aamal Hussain, Dan Leonte, Francesco Belardinelli, Georgios Piliouras",
        conference: "Workshop on New Frontiers in Learning, Control, and Dynamical Systems - ICML 2023",
        path: "https://arxiv.org/abs/2307.13922",
        year: 2023
    },
    {
        title: "The impact of exploration on convergence and performance of multi-agent Q-learning dynamics",
        authors: "Aamal Hussain, Francesco Belardinelli, Dario Paccagnan",
        conference: "International Conference on Machine Learning (ICML) - 2023",
        path: "https://proceedings.mlr.press/v202/hussain23a.html",
        year: 2023
    },
    {
        title: "Beyond Strict Competition: Approximate Convergence of Multi Agent Q-Learning Dynamics",
        authors: "Aamal Hussain, Francesco Belardinelli, Georgios Piliouras",
        conference: "International Joint Conference on Artificial Intelligence (IJCAI) - 2023",
        path: "https://arxiv.org/abs/2307.13928",
        year: 2023
    },
    {
        title: "Stability of Multi-Agent Learning in Competitive Networks: Delaying the Onset of Chaos",
        authors: "Aamal Hussain, Francesco Belardinelli",
        conference: "Association for the Advancement of Artificial Intelligence (AAAI) - 2024",
        path: "https://arxiv.org/abs/2312.11943",
        year: 2024
    },
    {
        title: "Asymptotic Convergence and Performance of Multi-Agent Q-Learning Dynamics",
        authors: "Aamal Hussain, Francesco Belardinelli, Georgios Piliouras",
        conference: "Autonomous Agents and Multi-Agent Systems (AAMAS) - 2023",
        path: "https://arxiv.org/abs/2301.09619",
        year: 2023
    }
]

export const publicationList = papers.sort((a, b) => b["year"]-a["year"])