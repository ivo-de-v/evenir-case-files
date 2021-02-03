export const ItemTypes = {
  TEXT: "text",
  CARD: "card",
};

const worthless = 0;
const useful = 1;
const good_info = 2;
const cornerstone = 3;

export let KingsOfEvenir = [
  { title: "The Kings of Evenir" },
  {
    text:
      "...Then came the saga of the witch Callisto. In 10 YoU, a year after heroically vanquishing a den of infernal wyverns, King Richard found himself dealing with an equally troubling challenge. ",
    score: good_info,
  },
  {
    text:
      "In what is now called the province of Ilsidor, there came rumours of terrible events. Food would cease grow. Fearsome beasts appeared seemingly out of nowhere to wreak devastation. Townsfolk mysteriously vanished in the night, never to return...",
    score: worthless,
  },
  {
    text:
      "After the fall of Symon, King Richard was faced with no choice. The Mage Council was refusing to cooperate, so the King gathered the rest of his knights and travelled to Ilsidor.",
    score: worthless,
  },
  {
    text:
      "Following a strenuous battle, immortalised in a number of epic poems, King Richard was unable to vanquish the witch Callisto. He did, however, succeed in turning her magic against her, and sealing her away, so that she could wreak no further harm on Evenir.",
    score: useful,
  },
];

export let KingdomOfEvenir = [
  { title: "The Kingdom of Evenir, vols. 1-3" },
  {
    text:
      "Evenir was not a name given to it by its inhabitants. Nay, this great Kingdom used to be a collection of smallholdings, run by magnanimous but short-sighted nobility. ",
    score: worthless,
  },
  {
    text:
      "It took the lord of Hesales, Richard the Strong, to point out that the local fiefs held the potential to be something much greater. And so it became, as this book will examine in three volumes. ",
    score: worthless,
  },
  {
    text:
      "Eight years after unification (8 YoU), King Richard the Strong faced his greatest challenge yet: a pack of infernal wyverns. ",
    score: useful,
  },
  {
    text:
      "King Richard summoned the lords and gave a rousing speech. Together, they took their armies and set forth to vanquish the monsters. ",
    score: worthless,
  },
  {
    text:
      "And it was so that King Richard became celebrated as King Richard, the Cleanser.",
    score: worthless,
  },
  {
    text:
      "Just as the Kingdom was beginning to recover from the devastating wyvern incursions, in 11 YoU Evenir was struck by the harshest winter it had experienced yet. ...",
    score: useful,
  },
];

export let Letters = [
  { title: "Extracts from King Richard's Letters" },
  {
    text:
      " 10 YoU The royal families have been acting up lately. There is unrest in their ranks, I can smell it. They look at me like a dog eyeing  an easy prey. ",
    score: good_info,
  },
  {
    text:
      "They question my ability to lead a unified kingdom. It was I who built this kingdom! I shall have to produce a gesture, it is the only way to placate them. May the Gods assist me. ",
    score: useful,
  },
  {
    text:
      "... 11 YoU The deed is done. Be sure to present the sealing of that infernal witch as a great success - everyone must know how valiant our army was, with their King at its helm.",
    score: cornerstone,
  },
];

export let economicReports = [
  { title: "Treasury Reports from 1 YoU - Present" },
  {
    text:
      "The Treasury has determined that the Kingdom's income began to grow in accounting year 1 YoU. ",
    score: useful,
  },
  {
    text:
      "There was a 30 per cent decrease in income in the accounting year 9 YoU. ",
    score: useful,
  },
  {
    text:
      "The Kingdom's income decreased by a further 20 per cent in the accounting year 10 YoU. ",
    score: good_info,
  },
  {
    text: "Income rose by 5 per cent in accounting year 11 YoU.",
    score: useful,
  },
];

export let economicReportsRegional = [
  { title: "Treasury Reports from 1 YoU - Present (Fief Breakdown)" },
  {
    text:
      "The fiefdom of Ilsidor accounted for the greatest increase in Treasury income after 9 YoU. ",
    score: good_info,
  },
  {
    text:
      "The fiefdom of Hesales has accounted for negative net income since 2 YoU",
    score: useful,
  },
];

export let PopulationCensus = [
  { title: "Population Census 1 YoU - Present" },
  {
    text:
      "Treasury accountants estimate that Evenir's population began to increase in 9 YoU and has increased exponentially since",
    score: useful,
  },
];

export let PopulationCensusRegional = [
  { title: "Population Census 1 YoU - Present (Fief Breakdown)" },
  {
    text:
      "Evenir's border fiefdoms have increased their population more rapidly than any other.",
    score: useful,
  },
  {
    text: "The fiefodm of Hesales has lost population after 9 YoU",
    score: useful,
  },
  {
    text:
      "The fiefdom of Ilsidor registered a 15 per cent increase in population in 11 YoU, while the fiefdom of Hesales lost a further 5 per cent",
    score: cornerstone,
  },
];

export let VillageElder = [
  { title: "Speak to the Village Elder" },
  {
    text:
      "Ah yes, the witch Callisto, how could one forget. It was a particularly cold winter the year the witch was sealed.  Everyone was afraid at that point, kids would disappear, and other terrible things like that.",
    score: useful,
  },
  {
    text:
      "What else was happening? Well, I also remember that people from different parts of the kingdom were being moved to the outskirts at that point in time, because the capital had a population problem. King Richard was making a great show of the fact that the kingdom's border fiefs were safe now that he had vanquished the wyverns, and sealed the witch, of course. Oh yes, those were dark days. The people arriving from Hesales weren't used to how life was here in Ilsidor. For a good time you couldn't trust your neighbours.",
    score: cornerstone,
  },
];
