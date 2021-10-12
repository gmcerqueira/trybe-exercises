"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "Rollie Rowswell",
          author: "Star Wars Uncut: Director's Cut",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Suellen Basford",
          author: "Is Anybody There?",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Sharyl Scathard",
          author: "Alvin and the Chipmunks: The Squeakquel",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Eimile Wrixon",
          author: "Sometimes They Come Back... Again",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Solly Dunks",
          author: "Life is a Bed of Roses (Vie est un roman, La)",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Ken Watkin",
          author: "Last American Virgin, The",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Dollie Piddlehinton",
          author: "Mickey's The Prince and the Pauper",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Mareah Pfertner",
          author: "Dark Victory",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Karel Boshers",
          author: "Monkey Business",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Toinette Heiss",
          author: "Cucaracha, La",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Flss Binney",
          author: "12 Angry Men",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Florette Askey",
          author: "Alien Nation: The Udara Legacy",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Averyl Trassler",
          author: "Sister Helen ",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Morgan Rizzolo",
          author: "Panda! Go Panda! Rainy Day Circus",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Philippine Rabb",
          author: "Lookin' to Get Out",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Lenette Boxhall",
          author: "Big, Large and Verdone",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Ronny Ros",
          author: "Vera Cruz",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Teri Osbourne",
          author: "Without a Paddle",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Bobby Atkinson",
          author: "Watch, The",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Roslyn Belliard",
          author: "Cage aux Folles, La",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Husain Rubica",
          author: "America's Most Haunted Inns",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Renie MacCarter",
          author: "Conflagration (Enjô)",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Giraldo Kaesmans",
          author: "Sirocco",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Ferdinanda Kennedy",
          author: "Bicentennial Man",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Arlinda Jouannin",
          author: "20,000 Years in Sing Sing",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Loy Poinsett",
          author: "Grateful Dead",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Broddy Hackworth",
          author: "Blue Bird, The",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Brenn Fillingham",
          author: "Nokas",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Georgine Raffin",
          author: "Another Me",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Rora Cragell",
          author: "Jolson Sings Again",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Caria Cockill",
          author: "Rumble in Hong Kong (Nu jing cha) (Heroine, The)",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Rey Grissett",
          author: "De Dana Dan",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Timmi Lavell",
          author: "Saga of Gosta Berling, The (Gösta Berlings saga)",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Krystle Bussens",
          author: "Sticky Fingers of Time, The",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Charline Ungerechts",
          author: "Houdini",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Mela Argent",
          author: "Save the Last Dance 2",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Britteny Denness",
          author: "Life and Nothing But (Vie et rien d'autre, La)",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Belvia Greenstreet",
          author:
            "Ivan the Terrible, Part Two (Ivan Groznyy II: Boyarsky zagovor)",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Robinson Matczak",
          author: "Observe and Report",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Jefferson Pfeifer",
          author: "College Road Trip",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Marnia Ballay",
          author: "Tartuffe (Herr Tartüff)",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Bartolemo Petrov",
          author: "Random Harvest",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Lottie Irnis",
          author: "Young One, The",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Carlyn Dryburgh",
          author: "Riders",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Mirabelle Burree",
          author: "Machine Gun Preacher",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Ilse Jordin",
          author: "Day Watch (Dnevnoy dozor)",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Taddeo Sparkwill",
          author: "Simple Life of Noah Dearborn, The",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Fraze Hovel",
          author: "Cage aux Folles, La",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Brock Bulled",
          author: "Linda Linda Linda",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Gloriana Keuning",
          author: "Ghost Goes West, The",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Gert Skeates",
          author: "Chapter Two",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Dody McLagain",
          author: "Demolition Man",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Christie Hugett",
          author: "To Die Like a Man (Morrer Como Um Homem)",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Merrilee Rydeard",
          author: "Tinker, Tailor, Soldier, Spy",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Corri Heinig",
          author: "Radio Flyer",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Ruth Giovannoni",
          author: "Son in Law",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Lewiss Brimman",
          author: "Kingdom, The (Riget)",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Jake Derobert",
          author: "Johnny Mad Dog",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Danice Harkess",
          author: "Exists",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Leelah Kordova",
          author: "Rage",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Colby Siney",
          author: "Silence, The (Tystnaden)",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Guillemette Yetton",
          author: "Chasing Ice",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Pierson Isgate",
          author: "John Huston: The Man, the Movies, the Maverick",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Kort Joiris",
          author: "Kickboxer 4: The Aggressor",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Bogey Hayfield",
          author: "Deadfall",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Holly-anne Bellenger",
          author: "Lisztomania",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Stephana Boice",
          author: "Begin Again",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Arch Rodenburgh",
          author: "Age of Stupid, The",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Demott Gentery",
          author: "In My Country (a.k.a. Country of My Skull)",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Grace Kenwyn",
          author: "Angels Crest",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Jae Pacheco",
          author: "Kiss of the Dragon",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Kennedy Messruther",
          author:
            "Let Sleeping Corpses Lie (Non si deve profanare il sonno dei morti)",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Agretha Tomczynski",
          author: "Death at a Funeral",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Hercules Goadsby",
          author: "Shanghai Express",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Auroora Fawley",
          author: "Ice Cream Man",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Tomaso Steadman",
          author: "Appropriate Adult",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Rurik Barbary",
          author: "Undefeated",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Cathrine Chattey",
          author: "Carne de gallina (Chicken Skin)",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Hinda Benkhe",
          author: "Movie Movie",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Desirae Dumblton",
          author: "Frozen Land (Paha maa)",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Kaila Nias",
          author: "Bringing Up Bobby",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Marlow Goulding",
          author: "Prison of the Dead",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Feliks Brecknall",
          author: "How to Get Ahead in Advertising",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Miriam Kneesha",
          author: "Jail Bait",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Elwin Fairey",
          author: "The Hornet's Nest",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Rebecca Pietsma",
          author: "Mirrors",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Korry Cona",
          author: "She's the Man",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Darice Mendel",
          author: "Chicken Little",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Hedvige Pennell",
          author: "Komodo",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Noam Pickford",
          author: "Prairie Love",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Tanya Richens",
          author: "Nun's Story, The",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Nanon Bartlam",
          author: "Nude Nuns with Big Guns",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Huntley Cowterd",
          author:
            "Don't Eat the Pictures: Sesame Street at the Metropolitan Museum of Art",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Warde Ravenshaw",
          author: "I, Robot",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Bunnie Ewles",
          author: "Sommer der Gaukler, Der",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Candra Valencia",
          author: "Topper Takes a Trip",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Staffard Isakov",
          author: "Nine Miles Down",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Anica Raff",
          author: "Bad Company",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Prescott Steele",
          author: "The Land Before Time VII: The Stone of Cold Fire",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "Elnora Newcomb",
          author: "Close-Up (Nema-ye Nazdik)",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      ]
    ),

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
