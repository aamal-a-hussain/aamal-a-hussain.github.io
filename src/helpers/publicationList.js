
const papers = [
    {
        title: "Equilibria and Convergence of Fictitious Play on Network Aggregative Games",
        authors: "Aamal Hussain, Francesco Belardinelli",
        conference: "idk",
        path: "https://ala2022.github.io/papers/ALA2022_paper_42.pdf",
        year: 2022,
        description: `
            The topic of communication networks has gained recent interest
            in the field of multi-agent learning (MAL) with many players. It
            is known that, in certain classes of games, learning agents can
            converge to an equilibrium. However, with a larger number of
            players, learning can become increasingly unpredictable.
            To make progress on this front, we study the behaviour of learning on Network Aggregative (NA) 
            games, in which each player’s reward depends only on their own strategy and that of their 
            neighbours. In particular, we present a continuous time analysis of the
            Fictitious Play (FP) learning dynamic on NA games. We first show
            that the NA model allows FP to equilibriate when the game is
            zero-sum. We find that this occurs regardless of the existence of
            self-loops in the network and provide conditions under which the
            fixed point corresponds to a Nash equilibrium.
            We then advance recent results in network games by considering FP in arbitrary NA games. Specifically, 
            we show that agents learning through Fictitious Play achieve no-regret, regardless of the
            type of game being played or the number of agents in the system.
            Finally, we present experimental evidence of a family of games for
            which Fictitious Play reaches a limit cycle and evidence that the introduction of noise has the 
            potential to break this cyclic behaviour and allow agents to eventually reach the Nash equilibrium.
        `
    },
    {
        title: "Stability of Multi-Agent Learning: Convergence in Network Games with Many Players",
        authors: "Aamal Hussain, Dan Leonte, Francesco Belardinelli, Georgios Piliouras",
        conference: "Workshop on New Frontiers in Learning, Control, and Dynamical Systems - ICML 2023",
        path: "https://arxiv.org/abs/2307.13922",
        year: 2023,
        description: `
            The behaviour of multi-agent learning in many player games has been shown to display complex dynamics outside of 
            restrictive examples such as network zero-sum games. In addition, it has been shown that convergent behaviour is 
            less likely to occur as the number of players increase. To make progress in resolving this problem, we study 
            Q-Learning dynamics and determine a sufficient condition for the dynamics to converge to a unique equilibrium
            in any network game. We find that this condition depends on the nature of pairwise interactions and on the 
            network structure, but is explicitly independent of the total number of agents in the game. We evaluate this
            result on a number of representative network games and show that, under suitable network conditions, stable
            learning dynamics can be achieved with an arbitrary number of agents.
        `
    },
    {
        title: "The impact of exploration on convergence and performance of multi-agent Q-learning dynamics",
        authors: "Aamal Hussain, Francesco Belardinelli, Dario Paccagnan",
        conference: "International Conference on Machine Learning (ICML) - 2023",
        path: "https://proceedings.mlr.press/v202/hussain23a.html",
        year: 2023,
        description:`
            Understanding the impact of exploration on the behaviour of multi-agent learning has, so far, benefited from the
            restriction to potential, or network zero-sum games in which convergence to an equilibrium can be shown. Outside 
            of these classes, learning dynamics rarely converge and little is known about the effect of exploration in the 
            face of non-convergence. To progress this front, we study the smooth Q- Learning dynamics. We show that, in any 
            network game, exploration by agents results in the convergence of Q-Learning to a neighbourhood of an equilibrium.
            This holds independently of whether the dynamics reach the equilibrium or display complex behaviours. We show that 
            increasing the exploration rate decreases the size of this neighbourhood and also decreases the ability of all agents
            to improve their payoffs. Furthermore, in a broad class of games, the payoff performance of Q-Learning dynamics,
            measured by Social Welfare, decreases when the exploration rate increases. Our experiments show this to be a general
            phenomenon, namely that exploration leads to improved convergence of Q-Learning, at the cost of payoff performance.
        `
    },
    {
        title: "Beyond Strict Competition: Approximate Convergence of Multi Agent Q-Learning Dynamics",
        authors: "Aamal Hussain, Francesco Belardinelli, Georgios Piliouras",
        conference: "International Joint Conference on Artificial Intelligence (IJCAI) - 2023",
        path: "https://arxiv.org/abs/2307.13928",
        year: 2023,
        description:`
            The behaviour of multi-agent learning in competitive settings is often considered under the restrictive assumption 
            of a zero-sum game. Only under this strict requirement is the behaviour of learning well understood; beyond this, 
            learning dynamics can often display non-convergent behaviours which prevent fixed-point analysis. Nonetheless, many 
            relevant competitive games do not satisfy the zero-sum assumption.
            Motivated by this, we study a smooth variant of Q-Learning, a popular reinforcement learning dynamics which balances the 
            agents' tendency to maximise their payoffs with their propensity to explore the state space. We examine this dynamic in 
            games which are 'close' to network zero-sum games and find that Q-Learning converges to a neighbourhood around a unique 
            equilibrium. The size of the neighbourhood is determined by the 'distance' to the zero-sum game, as well as the exploration 
            rates of the agents. We complement these results by providing a method whereby, given an arbitrary network game, the 'nearest' 
            network zero-sum game can be found efficiently. As our experiments show, these guarantees are independent of whether the 
            dynamics ultimately reach an equilibrium, or remain non-convergent.
        `
    },
    {
        title: "Stability of Multi-Agent Learning in Competitive Networks: Delaying the Onset of Chaos",
        authors: "Aamal Hussain, Francesco Belardinelli",
        conference: "Association for the Advancement of Artificial Intelligence (AAAI) - 2024",
        path: "https://arxiv.org/abs/2312.11943",
        year: 2024,
        description:`
            The behaviour of multi-agent learning in competitive network games is often studied within the context of zero-sum 
            games, in which convergence guarantees may be obtained. However, outside of this class the behaviour of learning is
            known to display complex behaviours and convergence cannot be always guaranteed. Nonetheless, in order to develop 
            a complete picture of the behaviour of multi-agent learning in competitive settings, the zero-sum assumption must
            be lifted. Motivated by this we study the Q-Learning dynamics, a popular model of exploration and exploitation in 
            multi-agent learning, in competitive network games. We determine how the degree of competition, exploration rate 
            and network connectivity impact the convergence of Q-Learning. To study generic competitive games, we parameterise
            network games in terms of correlations between agent payoffs and study the average behaviour of the Q-Learning 
            dynamics across all games drawn from a choice of this parameter. This statistical approach establishes choices
            of parameters for which Q-Learning dynamics converge to a stable fixed point. Differently to previous works, 
            we find that the stability of Q-Learning is explicitly dependent only on the network connectivity rather than
            the total number of agents. Our experiments validate these findings and show that, under certain network 
            structures, the total number of agents can be increased without increasing the likelihood of unstable or
            chaotic behaviours.
        `
    },
    {
        title: "Asymptotic Convergence and Performance of Multi-Agent Q-Learning Dynamics",
        authors: "Aamal Hussain, Francesco Belardinelli, Georgios Piliouras",
        conference: "Autonomous Agents and Multi-Agent Systems (AAMAS) - 2023",
        path: "https://arxiv.org/abs/2301.09619",
        year: 2023,
        description:`
            Achieving convergence of multiple learning agents in general N-player games is imperative for the development 
            of safe and reliable machine learning (ML) algorithms and their application to autonomous systems. Yet it is 
            known that, outside the bounds of simple two-player games, convergence cannot be taken for granted.
            To make progress in resolving this problem, we study the dynamics of smooth Q-Learning, a popular reinforcement learning 
            algorithm which quantifies the tendency for learning agents to explore their state space or exploit their payoffs. We show 
            a sufficient condition on the rate of exploration such that the Q-Learning dynamics is guaranteed to converge to a unique 
            equilibrium in any game. We connect this result to games for which Q-Learning is known to converge with arbitrary exploration
            rates, including weighted Potential games and weighted zero sum polymatrix games.
            Finally, we examine the performance of the Q-Learning dynamic as measured by the Time Averaged Social Welfare, and 
            comparing this with the Social Welfare achieved by the equilibrium. We provide a sufficient condition whereby the 
            Q-Learning dynamic will outperform the equilibrium even if the dynamics do not converge.
        `
    }
]

export const publicationList = papers.sort((a, b) => b["year"]-a["year"])