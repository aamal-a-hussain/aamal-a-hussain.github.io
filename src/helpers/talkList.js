
const talks = [
    {
        title: "Machine Learning and Dynamical Systems Seminar",
        location: "Alan Turing Institute 2021 - 2023",
        category: "other",
        image_name: "TuringSeminar",
        year: 2023,
        //path: ,
        description: `
           As a member of the Dynamics of Games Group, I lead 7 sessions on the work
           carried out over my PhD. I covered the key aspects of the fields of ... and 
           presented several results.
        `
    },
    {
        title: "Online Learning with Bounded Rationality: Convergence and Optimality",
        location: "Fields Institute 2022",
        category: "other",
        image_name: "FI",
        year: 2022,
        //path: ,
        description: `
            Poster presentation at the Third Symposium on Machine Learning and Dynamical Systems 
        `
    },
    {
        title: "Equilibria and Convergence of Fictitious Play on Network Aggregative Games",
        location: "AAMAS 2022",
        category: "publication",
        image_name: "AAMAS22",
        year: 2022,
        path: "https://ala2022.github.io/papers/ALA2022_paper_42.pdf",
        description: `
            Workshop Presentation
        `
    },
    {
        title: "Stability of Multi-Agent Learning: Convergence in Network Games with Many Players",
        location: "ICML 2023",
        category: "publication",
        image_name: "wICML23",
        year: 2023,
        path: "https://arxiv.org/abs/2307.13922",
        description: `
            Workshop Presentation
        `
    },
    {
        title: "The impact of exploration on convergence and performance of multi-agent Q-learning dynamics",
        location: "ICML 2023",
        category: "publication",
        image_name: "ICML23",
        year: 2023,
        path: "https://proceedings.mlr.press/v202/hussain23a.html",
        description:`
            Paper Presentation & Poster Session
        `
    },
    {
        title: "Beyond Strict Competition: Approximate Convergence of Multi Agent Q-Learning Dynamics",
        location: "IJCAI 2023",
        category: "publication",
        image_name: "IJCAI23",
        year: 2023,
        path: "https://arxiv.org/abs/2307.13928",
        description:`
            Paper Presentation & Poster Session
        `
    },
    {
        title: "Stability of Multi-Agent Learning in Competitive Networks: Delaying the Onset of Chaos",
        location: "AAAI 2024",
        category: "publication",
        image_name: "AAAI24",
        year: 2024,
        path: "https://arxiv.org/abs/2312.11943",
        description:`
            Paper Presentation & Poster Session
        `
    },
    {
        title: "Asymptotic Convergence and Performance of Multi-Agent Q-Learning Dynamics",
        location: "AAMAS 2023",
        category: "publication",
        image_name: "AAMAS23",
        year: 2023,
        path: "https://arxiv.org/abs/2301.09619",
        description:`
            Paper Presentation & Poster Session
        `
    },
    {
        title: "On the Stability of Learning in Network Games with Many Player",
        location: "AAMAS 2024",
        category: "publication",
        image_name: "AAMAS24",
        year: 2024,
        path: "https://arxiv.org/abs/2403.15848",
        description:`
            Paper Presentation & Poster Session
        `
    }
]

export const talkList = talks.sort((a, b) => b["year"] - a["year"])