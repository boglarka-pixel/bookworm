

const books = [
    {
        id: '1',
        title:
            'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
        url: 'atomic-habits-an-easy-and-proven-way-to-build-good-habits-and-break-bad-ones',
        description:
            "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
        author: {
            name: 'James Clear',
            url: 'james-clear',
            avatar:
                'https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/rec58e62v0epfogin4i1o6mu55._SX450_.jpg',
            bio: 'James Clear is an author and speaker focused on habits, decision-making, and continuous improvement. His work has appeared in the New York Times, Entrepreneur, Time, and on CBS This Morning. His website receives millions of visitors each month and hundreds of thousands subscribe to his popular email newsletter at jamesclear.com.',
        },
        cover:
            'https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg',
    },
    {
        id: '2',
        title: 'American Marxism',
        url: 'american-marxism',
        description:
            'The seven-time #1 New York Times bestselling author, Fox News star, and radio host Mark R. Levin explains how the dangers he warned against in the “timely yet timeless” (David Limbaugh, author of Jesus Is Risen) bestseller Liberty and Tyranny have come to pass.',
        author: {
            name: 'Mark R. Levin',
            url: 'mark-r-levin',
            avatar:
                'https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/iojdjrnpnknfo1qvv7tv6ch2jc._SX450_.jpg',
            bio: "Mark R. Levin is a nationally syndicated talk radio host and president of Landmark Legal Foundation. He has also worked as an attorney in the private sector and as a top adviser and administrator to several members of President Reagan's cabinet. He is the author of the #1 New York Times bestselling book Liberty and Tyranny, as well as New York Times bestselling books Rescuing Sprite and Men in Black: How the Supreme Court Is Destroying America, Mark holds a B.A. from Temple University and a J.D. from Temple University School of Law.",
        },
        cover:
            'https://images-na.ssl-images-amazon.com/images/I/81lsmyMcYNL.jpg',
    },
    {
        id: '3',
        title:
            'The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)',
        url: 'the-four-agreements-a-practical-guide-to-personal-freedom-a-toltec-wisdom-book',
        description:
            'The seven-time #1 New York Times bestselling author, Fox News star, and radio host Mark R. Levin explains how the dangers he warned against in the “timely yet timeless” (David Limbaugh, author of Jesus Is Risen) bestseller Liberty and Tyranny have come to pass.',
        author: {
            name: 'Don Miguel Ruiz',
            url: 'don-miguel-ruiz',
            avatar:
                'https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/3sk93ucf0lsbkra63fqcj9lgud._SX450_.jpg',
            bio: 'Don Miguel Ruiz is a renowned spiritual teacher and internationally bestselling author of the “Toltec Wisdom Series,” including “The Four Agreements,” “The Mastery of Love,” “The Voice of Knowledge,” “The Four Agreements Companion Book,” “The Circle of Fire,” and “The Fifth Agreement.” The Toltec Wisdom books have sold over 12 million copies in the United States, and have been published in 46 languages worldwide.',
        },
        cover:
            'https://images-na.ssl-images-amazon.com/images/I/91lk9FG9xQL.jpg',
    },
    {
        id: '4',
        title:
            'The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma',
        url: 'the-body-keeps-the-score-brain-mind-and-body-in-the-healing-of-trauma',
        description:
            'Trauma is a fact of life. Veterans and their families deal with the painful aftermath of combat; one in five Americans has been molested; one in four grew up with alcoholics; one in three couples have engaged in physical violence. Dr. Bessel van der Kolk, one of the world’s foremost experts on trauma, has spent over three decades working with survivors. In The Body Keeps the Score, he uses recent scientific advances to show how trauma literally reshapes both body and brain, compromising sufferers’ capacities for pleasure, engagement, self-control, and trust. He explores innovative treatments—from neurofeedback and meditation to sports, drama, and yoga—that offer new paths to recovery by activating the brain’s natural neuroplasticity.',
        author: {
            name: 'Bessel van der Kolk',
            url: 'bessel-van-der-kolk',
            avatar:
                'https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/126pafdtmhtn6sn3idroaecn16._SX450_.jpg',
            bio: "Bessel van der Kolk (born 1943) is a Boston based psychiatrist noted for his research in the area of post-traumatic stress since the 1970s. His work focuses on the interaction of attachment, neurobiology, and developmental aspects of trauma’s effects on people. His major publication, the New York Times bestseller, 'The Body keeps the Score', talks about how the role of trauma in psychiatric illness has changed over the past 20 years; what we have learned about the ways the brain is shaped by traumatic experiences; how traumatic stress is a response of the entire organism and how that knowledge needs be integrated into healing practices.",
        },
        cover:
            'https://images-na.ssl-images-amazon.com/images/I/61NdJMwAThS.jpg',
    },
    {
        id: '5',
        title: 'The Boy, the Mole, the Fox and the Horse',
        url: 'the-boy-the-mole-the-fox-and-the-horse',
        description:
            'Charlie Mackesy offers inspiration and hope in uncertain times in this beautiful book, following the tale of a curious boy, a greedy mole, a wary fox and a wise horse who find themselves together in sometimes difficult terrain, sharing their greatest fears and biggest discoveries about vulnerability, kindness, hope, friendship and love. The shared adventures and important conversations between the four friends are full of life lessons that have connected with readers of all ages. ',
        author: {
            name: 'Charlie Mackesy',
            url: 'charlie-mackesy',
            avatar:
                'https://images-na.ssl-images-amazon.com/images/I/71suggXs+FL._SX450_.jpg',
            bio: 'Charlie Mackesy was born during a snowy winter in Northumberland. He has been a cartoonist for The Spectator and a book illustrator for Oxford University Press. He has collaborated with Richard Curtis for Comic Relief, and Nelson Mandela on a lithograph project, “The Unity Series.” He has lived and painted in South Africa, Southern Africa and New Orleans, and co-runs a social enterprise, Mama Buci, in Zambia, which helps families of low and no income to become beekeepers. He lives in London but is often in Suffolk.',
        },
        cover:
            'https://images-na.ssl-images-amazon.com/images/I/81PdkxXJObL.jpg',
    },
    {
        id: '6',
        title: 'The Storyteller: Tales of Life and Music',
        url: 'the-storyteller-tales-of-life-and-music',
        description:
            "Having entertained the idea for years, and even offered a few questionable opportunities (\"It's a piece of cake! Just do 4 hours of interviews, find someone else to write it, put your face on the cover, and voila!\") I have decided to write these stories just as I have always done, in my own hand. The joy that I have felt from chronicling these tales is not unlike listening back to a song that I've recorded and can't wait to share with the world, or reading a primitive journal entry from a stained notebook, or even hearing my voice bounce between the Kiss posters on my wall as a child.",
        author: {
            name: 'Dave Grohl',
            url: 'dave-grohl',
            avatar:
                'https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/mq030g1p5eiut6h6n1rcj4b7ok._SX450_.jpg',
            bio: "Dave Grohl is a 16-time Grammy-winning musician and 2-time Emmy-winning director. Dave Grohl has been one of the most beloved and respected figures on the international music since his recorded debut with Nirvana on 1991's generation-defining Nevermind. Grohl took center stage with Foo Fighters' 1995 self-titled debut, the first album in massive 12-Grammy-winning catalogue that now includes The Colour & The Shape (1997), There Is Nothing Left To Lose (1999), One By One (2002), In Your Honor (2005), Echoes, Silence, Patience & Grace (2007), Wasting Light (2011), Sonic Highways (2014), Concrete and Gold (2017) and, most recently, Medicine at Midnight (2021).",
        },
        cover:
            'https://images-na.ssl-images-amazon.com/images/I/81YHHiNPDNL.jpg',
    },
    {
        id: '7',
        title: 'To Kill a Mockingbird',
        url: 'to-kill-a-mockingbird',
        description:
            'One of the most cherished stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide, served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country. A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father—a crusading local lawyer—risks everything to defend a black man unjustly accused of a terrible crime.',
        author: {
            name: 'Harper Lee',
            url: 'harper-lee',
            avatar:
                'https://images-na.ssl-images-amazon.com/images/I/51gzmhkPBxL._SX450_.jpg',
            bio: 'Harper Lee was born in 1926 in Monroeville, Alabama. She attended Huntingdon College and studied law at the University of Alabama. She is the author of the acclaimed To Kill a Mockingbird, and was awarded the Pulitzer Prize, the Presidential Medal of Freedom and numerous other literary awards and honours. She died on 19 February 2016.',
        },
        cover:
            'https://images-na.ssl-images-amazon.com/images/I/81aY1lxk+9L.jpg',
    },
    {
        id: '8',
        title: 'The Infinite Game',
        url: 'the-infinite-game',
        description:
            'How do we win a game that has no end? Finite games, like football or chess, have known players, fixed rules and a clear endpoint. The winners and losers are easily identified. Infinite games, games with no finish line, like business or politics, or life itself, have players who come and go. The rules of an infinite game are changeable while infinite games have no defined endpoint. There are no winners or losers—only ahead and behind. ',
        author: {
            name: 'Simon Sinek',
            url: 'simon-sinek',
            avatar:
                'https://images-na.ssl-images-amazon.com/images/I/51yMIHz8PSL._SX450_.jpg',
            bio: 'Simon Sinek is an optimist. He teaches leaders and organizations how to inspire people. From members of Congress to foreign ambassadors, from small businesses to corporations like Microsoft and 3M, from Hollywood to the Pentagon, he has presented his ideas about the power of why. He has written two books, Leaders Eat Last and Start With Why and is quoted frequently by national publications. Sinek also regularly shares 140 characters of inspiration on Twitter (@simonsinek).',
        },
        cover:
            'https://images-na.ssl-images-amazon.com/images/I/71Vp4pp2c5L.jpg',
    },
    {
        id: '9',
        title: 'Sapiens',
        url: 'sapiens',
        description:
            'Homo sapiens rules the world because it is the only animal that can believe in things that exist purely in its own imagination, such as gods, states, money and human rights.',
        author: {
            name: 'Yuval Noah Harari',
            url: 'yuval-noah-harari',
            avatar:
                'https://images-na.ssl-images-amazon.com/images/I/51yMIHz8PSL._SX450_.jpg',
            bio: 'Simon Sinek is an optimist. He teaches leaders and organizations how to inspire people. From members of Congress to foreign ambassadors, from small businesses to corporations like Microsoft and 3M, from Hollywood to the Pentagon, he has presented his ideas about the power of why. He has written two books, Leaders Eat Last and Start With Why and is quoted frequently by national publications. Sinek also regularly shares 140 characters of inspiration on Twitter (@simonsinek).',
        },
        cover:
            'https://kara.reviews/media/review/covers/sapiens-a-brief-history-of-humankind.jpg',
    },
]

export default books;