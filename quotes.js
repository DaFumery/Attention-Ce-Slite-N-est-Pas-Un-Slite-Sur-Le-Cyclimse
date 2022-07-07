const localQuotes = [
  {
    text: "Attention, ce flim n’est pas un flim sur le cyclimse.",
    author: "- La voix Off",
  },
  {
    text: "Aah… Monde de merde.",
    author: "George Abitbol",
  },
  {
    text: "Écoute-moi bien, mon petit José. Tu baises les ménagères, bien, tu dois avoir le cul qui brille. Mais c’est pas ça qu’on appelle la classe.",
    author: "George Abitbol",
  },
  {
    text: "Excuse-moi de te dire ça, mon pauvre José, mais tu confonds un peu tout. Tu fais un amalgame entre la coquetterie et la classe. Tu es fou.",
    author: "George Abitbol",
  },
  {
    text: "Tu dépenses tout ton argent dans les habits et accessoires de mode mais tu es ridicule. Enfin si ça te plaît. C’est toi qui les portes. Mais moi, si tu veux mon opinion, ça fait un peu… has been.",
    author: "George Abitbol",
  },
  {
    text: "Le train de tes injures roule sur le rail de mon indifférence. Je préfère partir plutôt que d'entendre ça plutôt que d'être sourd.",
    author: "George Abitbol",
  },
  {
    text: "Tu n'es vraiment pas très sympa.",
    author: "George Abitbol",
  },
  {
    text: "Si tu veux me parler, envoie-moi un... fax !",
    author: "George Abitbol",
  },
  {
    text: "En tout cas s’il cherchait pour du trouble, il est venu à la bonne place.",
    author: "George Abitbol",
  },
  {
    text: "Hop hop hop ! Et notre répétition de scie musicale ?",
    author: "George Abitbol",
  },
  {
    text: "C’est ça, la puissance intellectuelle. Bac + 2, les enfants.",
    author: "George Abitbol",
  },
  {
    text: "Va te faire branler, trotskard.",
    author: "George Abitbol",
  },
  {
    text: "Blablabla, j’ai les bonbons qui collent au papier.",
    author: "George Abitbol",
  },
  {
    text: "On va manger... des chips ! T'entends ?!? Des chips !",
    author: "L'Indien",
  },
  {
    text: "C'est tout ce que ça te fait quand je te dis qu'on va manger des chips ?",
    author: "L'Indien",
  },
  {
    text: "Mais qu'est-ce qui t'arrive? Pourquoi tu dis rien, tu fais la tronche ou quoi?",
    author: "L'Indien",
  },
  {
    text: "J’ai connu un mec de droite une fois, il avait dix fois plus de classe.",
    author: "Hugues",
  },
  {
    text: "Je refuse de manger des ravioles. Mais par contre, je peux vous parler de madame Felipe. Elle s’est fait refaire les nichons, elle.",
    author: "Hugues",
  },
  {
    text: "Ça commence à être pesant cette histoire de pédés. Tout le monde s’acharne sur nous alors qu’on n’est même pas pédés.",
    author: "Hugues",
  },
  {
    text: "Où ça nous mène, la folie des hommes. On court tout droit à notre perte.",
    author: "Hugues",
  },
  {
    text: "Mettez des capotes.",
    author: "Dave",
  },
  {
    text: "Alors les bouseux, qui va me parler de George ? Qui c’est qui va tout dire à Dave ? Bon, toi tu dis rien, c’est normal tu es une croix en bois, tu as qu’à te taire",
    author: "Dave",
  },
  {
    text: "Sheraf. Tu connais pas Sheraf ? C’est un groupe, ils étaient number one.",
    author: "Dino",
  },
  {
    text: "Regarde mes mains, saloperie ! Regarde, je me suis niqué les mains, moi, avec cette saloperie de collec’ de pin’s à la con.",
    author: "Dino",
  },
  {
    text: "J’arrivais d’Italie, de Turin. À l’époque j’étais supporter de la Juventus.",
    author: "Dino",
  },
  {
    text: "Avec George, je me souviens, on passait des après-midi entières à rester dans notre chambre à se chamailler gentiment, à se raconter des souvenirs...",
    author: "Dino",
  },
  {
    text: "Ah voilà enfin le roi de la classe l'homme trop bien sapé, Abitbol ",
    author: "José",
  },
  {
    text: "Style le grand play-boy des fonds marins, genre qui fait rêver les ménagères. Sauf que moi je les baise, moi, les ménagères.",
    author: "José",
  },
  {
    text: "Eh, je t’arrête tout de suite. La classe, c’est d’être chic dans sa manière de s’habiller. Rien de tel que d’aller chez Azzedine Alaia ou même de s’acheter des sous-pulls chez Yohji Yamamoto !",
    author: "José",
  },
  {
    text: "La vache ! Moi, j’ai l’air has been ? J’en ai pour plus d’une barre de fringues sur moi. Alors, va te faire mettre !",
    author: "José",
  },
  {
    text: "Bien ! Considère qu'on est plus amis, Abitbol !",
    author: "José",
  },
  {
    text: "Il commence vraiment à me faire chier, Dave.",
    author: "Steven",
  },
  {
    text: "J'ai bien dit gentil, pas homosexuel !",
    author: "Steven",
  },
  {
    text: "À quoi vous pensez si je vous dis « monde de merde » ?",
    author: "Steven",
  },
  {
    text: "Moi je veux être connu. Tu sais pourquoi ? Pour niquer les gonzesses. Quand tu es célèbre, tu niques plein de gonzesses.",
    author: "Steven",
  },
  {
    text: "Alors d'abord, tu poses mon bouquin d’exercices isométriques tout de suite !",
    author: "Steven",
  },
  {
    text: "Mon cher Peter, me voici en Alaska, malgré le froid, malgré une mule impotente, malgré ma fausse barbe qui me gratte, je continue à croire en mon aventure.",
    author: "Steven",
  },
  {
    text: "Attendez, faut que je me souvienne de tout. Chez vous, vers cinq heures... Bon, je vais essayer de m’en rappeler, hein.",
    author: "Steven",
  },
  {
    text: "On va bientôt niquer, on va bientôt niquer !",
    author: "Steven",
  },
  {
    text: "Oui, on en a chié pour trouver cette idée, on était charrette",
    author: "Peter",
  },
  {
    text: "Moi ce qui me fait chier c’est les effets spéciaux minables. Je supporte plus.",
    author: "Peter",
  },
  {
    text: "On dit une ouiche lorraine.",
    author: "Peter",
  },
  {
    text: "Attention ! Quels connards ces piétons !",
    author: "Peter",
  },
  {
    text: "Ah, un restaurant mexican food",
    author: "Peter",
  },
  {
    text: "C’est du journalisme total.",
    author: "Peter",
  },
  {
    text: "Très bien. Puisque vous ne voulez pas m’aider, allez vous faire enculer.",
    author: "Peter",
  },
  {
    text: "Eh, oh, ça va, hein. Il y a pas le feu, on n’est pas aux pièces.",
    author: "Peter",
  },
  {
    text: "Sexe plus histoire de cul égalent meurtre",
    author: "Peter",
  },
  {
    text: "Vous voulez niquer avec mon ami et moi ?",
    author: "Peter",
  },
  {
    text: "Bonjour. C'est moi Orson Welles. Ceci est ma maison que vous voyez derrière là, pas mal non ? C'est français.",
    author: "Orson Welles",
  },
  {
    text: "Je me permets d'interrompre ce flim parce qu'on se fout un peu de ma gueule : c'est du vol et du plagiat. J'aime pas trop les voleurs et les fils de pute.",
    author: "Orson Welles",
  },
  {
    text: "Aaargh... Rosebud...",
    author: "Orson Welles",
  },
  {
    text: "C’est vous qui m’avez traitée de connasse ?",
    author: "La bonne d’Hugues",
  },
  {
    text: "Vous dites que j’aille me faire foutre ? Euh OK, j’y vais.",
    author: "Le policio",
  },
  {
    text: "Mêle-toi de tes affaires, toi. Tu sais bien que madame Felipe, la patronne se coupe les morceaux de nichon pour en faire des ravioles.",
    author: "George",
  },
  {
    text: "Ah, encore une chose. Je vous conseille d’éviter la mousse au chocolat du patron.",
    author: "George",
  },
  {
    text: "Mais aujourd’hui, il a fini de frimer. On l’a retrouvé assassiné un jour. Il en est mort.",
    author: "Hugues",
  },
  {
    text: "Sur mon front il y a pas marqué radio-réveil.",
    author: "George",
  },
  {
    text: "Ah la ferme ta gueule toi, ducon, espèce de crétin. Qu’est-ce que tu veux, nous prendre la tête, là ? Pauvre con. Oui je l’ai connu à la ferme. On était des cowboys. On vivait à la ferme, ça a rien d’étonnant !",
    author: "Dino",
  },
  {
    text: "Oh oui je suis juif! Et si tu veux tout savoir, j'suis même juif arabe.",
    author: "Dino",
  },
  {
    text: "Juif arabe ? Humm. Je préfère les séfarades, tu sais. À mon avis, juif et arabe, c'est bizarre. Moi j'aime pas les gens bizarres.",
    author: "Frankie",
  },
  {
    text: "Oh merde, j'peux pas encadrer les nazis, mais laisse tomber.",
    author: "Dino",
  },
  {
    text: "Je pense que t'es un ouf toi ! un ouf malade. En plus, c'est du racisme.",
    author: "Dino",
  },
  {
    text: "Ça c'est ton opinion personnelle, que je suis raciste. Si tu veux mon avis, si y a un raciste ici, c'est oit !",
    author: "Frankie",
  },
  {
    text: "Si ça sert de discuter ! C'est toi qui as toujours raison.",
    author: "Frankie",
  },
  {
    text: "Et tu crois que tu m’impressionnes ? Moi je sais dire « allons à la plage, monsieur renard » : « vamos a la playa, señor zorro ». Est-ce que tu aimerais te bâfrer un chili con carne ?",
    author: "José",
  },
  {
    text: "Un bon chili con carne, d’habitude, je suis partant. Mais là, je… je fais un régime, à base de... à base de ouiches lorraines.",
    author: "Peter",
  },
  {
    text: "La fromagerie en bas de chez moi, elle vendait trois choses : du fromage, des ouiches lorraines et de la bouffe chinoise. Alors toi, mec, avec tes régimes à la con, tu me fais bien marrer. Tu as devant toi le spécialiste de la ouiche lorraine. Le spécialiste des travers de porc sel-poivre. À vingt-trois ans j’ai gagné le concours du meilleur cuisinier asiatique en leur préparant un... un méchoui.",
    author: "José",
  },
  {
    text: "Abitbol. George Abitbol. Classe, man ! Top of the pop. A disparu... poil au cul ! Au large du port de Valparaiso...",
    author: "Steven",
  },
  {
    text: "Steven, arrête s’il te plaît, j’ai jamais pu encadrer Michel Legrand.",
    author: "Dave",
  },
  {
    text: "Regarde, c’est lui, là. Qui, le jus de tomate ?",
    author: "Peter et Steven",
  },
  {
    text: "Hé ! Votre encyclopédie Larousse !",
    author: "Julien Lepers",
  },
  {
    text: "Je déteste les animaux préhistoriques partouzeurs de droite, bordel ! C’est de la merde. Mélanger comme ça partouze et politique...",
    author: "Joël",
  },
  {
    text: "Appelez-moi Christelle. Mon mari est absent. Vous voulez voir mes fesses ? Et ensuite, je vous roulerai une pelle ?",
    author: "Christelle",
  },
  {
    text: "Gorge Profonde ? Gorge Profonde ? Gorge Profonde, vous avez demandé à me voir ? Vous avez des révélations ?",
    author: "Steven",
  },
  {
    text: "Eh bien puisque t’es si malin, tu vas te démerder tout seul. Et moi, ma gorge profonde, je m’en vais la remplir derechef.",
    author: "Gorge Profonde",
  },
  {
    text: "Qu’est-ce que c’est ? Il y a des voitures dans les parkings maintenant ?",
    author: "Gorge Profonde",
  },
  {
    text: "C’est pas une raison, parce que je donne à tout le monde des bons tuyaux, que je mérite pas un peu d’amour.",
    author: "Huggy les bons tuyaux",
  },
  {
    text: " Rentre, fouille-merde. Je vais t’en filer, moi, du biscuit sur George pour ta feuille de chou.",
    author: "Le témoin professionnel",
  },
  {
    text: "Moi je pense qu’il avait pas plus de classe que de beurre au cul.",
    author: "Jacqueline",
  },
  {
    text: "J’aime vos seins. Vos loches.",
    author: "George",
  },
  {
    text: "Un méchoui ? Tu pipeautes pas un peu, toi ?",
    author: "Peter",
  },
  {
    text: "Bon, on arrête les déguisements, hein. C’est que des emmerdes. Le journalisme total, c’est totalement con.",
    author: "Peter",
  },
  {
    text: "Est-ce que vous voulez être ma femme, et après on boira un café ?",
    author: "Dave",
  },
  {
    text: "Purée ! Ah, ah, ça, j’aime ! Ah ah ah, vous arrivez, vous êtes même pas chez vous... Vous vous pointez avec trois quarts d’heure de retard, pas bonjour, pas merci, vous filez tout droit au frigo, vous prenez la dernière bière... Ah ah, vous, vous êtes un sacré sans-gêne !",
    author: "Professeur Hammond",
  },
  {
    text: "Vive la révolution d’octobre ! Il paraît qu’on a repéré des animaux préhistoriques partouzeurs de droite dans les parages.",
    author: "Le communiste",
  },
  {
    text: "Ça te défrise, vieux réac ? Parce que j’ai les cheveux longs, tu flippes pour ton confort bourgeois. Tu as un mauvais karma, frère, si tu supportes pas les cheveux. Désolé papy, mais j’ai ma liberté d’expression capillaire.",
    author: "Gaël",
  },
  {
    text: "Pardon mon doux seigneur.",
    author: "George",
  },
  {
    text: "Pardon mon doux seigneur.",
    author: "Yves",
  },
  {
    text: "Merci pour la clope, grosse vache.",
    author: "Peter",
  },
  {
    text: "Tu te réveilles à 35 ans pour te demander ce que ça veut dire « monde de merde » ? C'est pas que tu es indiscret, c'est juste que tu es un con.",
    author: "George",
  },
  {
    text: "En disant « monde de merde », j'ai voulu dire que le monde allait mal. C'est un cri de révolte que j'ai lancé à mes frères opprimés.",
    author: "George",
  },
  {
    text: "Tu as déjà entendu parler de l’hégémonie du grand capital ?",
    author: "George",
  },
];
