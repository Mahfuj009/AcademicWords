const words = [
  {
    word: "aberrant",
    definition: "markedly different from an accepted norm",
    aiGenBn: "অস্বাভাবিক, বিপথগামী, নীতিভ্রষ্ট",
    examples: [
      "If my aunt does not take her medication, she will have aberrant mood swings.",
      "The drunken man’s aberrant conduct drew the police officer’s attention."
    ],
    aiGenEx: [
      "The scientific community was puzzled by the aberrant results of the experiment.",
      "Such aberrant weather patterns are becoming more frequent due to climate change."
    ]
  },
  {
    word: "aesthetic",
    definition: "characterized by an appreciation of beauty or good taste",
    aiGenBn: "নান্দনিক, সৌন্দর্যবোধ সংক্রান্ত",
    examples: [
      "The committee did not attempt to make aesthetic judgements, nor did the artists assume expertise in the issues.",
      "Maybe it was time they started paying more attention to the aesthetic value of things."
    ],
    aiGenEx: [
      "The building was designed with a focus on both functionality and aesthetic appeal.",
      "She has a very specific aesthetic when it comes to interior design, favoring minimalism."
    ]
  },
  {
    word: "aggregate",
    definition: "a sum total of many heterogeneous things taken together",
    aiGenBn: "সমষ্টিগত, মোট, পুঞ্জীভূত করা",
    examples: [
      "During the singing competition, the producers will aggregate singers into groups based on gender and age.",
      "The  fire  drill  shows  our  ability  to  aggregate  in  preselected  destinations  during  an emergency."
    ],
    aiGenEx: [
      "The website will aggregate news from various sources into a single, easy-to-read feed.",
      "The aggregate score of the two matches determined the winner of the tournament."
    ]
  },
  {
    word: "amalgamate",
    definition: "bring or combine together or with something else",
    aiGenBn: "মিশ্রিত করা, একীভূত করা",
    examples: [
      "The two companies will amalgamate in a mutually beneficial merger next week.",
      "Because of budget cuts, the two schools were forced to amalgamate into one building."
    ],
    aiGenEx: [
      "The editor decided to amalgamate the two short stories into a single novel.",
      "Different cultures often amalgamate to create unique local traditions."
    ]
  },
  {
    word: "ambiguous",
    definition: "having more than one possible meaning",
    aiGenBn: "অস্পষ্ট, দ্ব্যর্থবোধক",
    examples: [
      "Instead of being ambiguous with your words, be clearer and more specific.",
      "With an ambiguous plot, no one could understand the film's premise."
    ],
    aiGenEx: [
      "The politician gave an ambiguous answer to avoid committing to a specific policy.",
      "The ending of the book was intentionally ambiguous, leaving the reader to decide the hero's fate."
    ]
  },
  {
    word: "ambivalence",
    definition: "mixed feelings or emotions",
    aiGenBn: "দ্বিধা, পরস্পরবিরোধী মানসিক অবস্থা",
    examples: [
      "Even though the new job meant more money, Tad felt a great deal of ambivalence about accepting the position.",
      "While many people love technology, there are just as many who show ambivalence towards it."
    ],
    aiGenEx: [
      "She felt a sense of ambivalence about moving to a new city, excited yet fearful.",
      "The public's ambivalence toward the new law made it difficult for the police to enforce."
    ]
  },
  {
    word: "analogous",
    definition: "similar or equivalent in some respects",
    aiGenBn: "অনুরূপ, সদৃশ",
    examples: [
      "All of the actors reading for the role were analogous to each other in appearance.",
      "We couldn’t decide between the two tiles because they were analogous to one another."
    ],
    aiGenEx: [
      "The wings of a bird are analogous to the fins of a fish in terms of their function.",
      "The relationship between a teacher and a student is often analogous to that of a parent and child."
    ]
  },
  {
    word: "anomalous",
    definition: "deviating from the general or common order or type",
    aiGenBn: "ব্যতিক্রমী, নিয়মবহির্ভূত",
    examples: [
      "He is in an anomalous position as the only part-time worker in the firm.",
      "In fact, the anomalous status gave him greater leeway."
    ],
    aiGenEx: [
      "The satellite detected an anomalous signal coming from the deep ocean.",
      "Researchers are trying to explain the anomalous data found in the recent survey."
    ]
  },
  {
    word: "antipathy",
    definition: "a feeling of intense dislike",
    aiGenBn: "বিদ্বেষ, প্রবল অনীহা",
    examples: [
      "After serving in the war, he developed an antipathy to guns.",
      "After hearing about public antipathy to his programs, the candidate hired a new consultant."
    ],
    aiGenEx: [
      "There is a natural antipathy between the two rival sports teams.",
      "His fundamental antipathy to modern art made the museum visit quite short."
    ]
  },
  {
    word: "apprise",
    definition: "inform somebody of something",
    aiGenBn: "অবগত করা, জানানো",
    examples: [
      "The scouts went back to apprise their commanding officer of the enemy’s location.",
      "Each week, the teachers apprise parents of their students’ progress by emailing grade reports."
    ],
    aiGenEx: [
      "Please apprise me of any changes to the schedule as soon as possible.",
      "The CEO made sure to apprise the board of the potential risks involved in the deal."
    ]
  },
  {
    word: "approbation",
    definition: "official acceptance or agreement",
    aiGenBn: "অনুমোদন, সমর্থন, প্রশংসা",
    examples: [
      "I need to write a powerful resume to gain approbation from an employor.",
      "You cannot take prescription medication without doctor's approbation."
    ],
    aiGenEx: [
      "The opera singer's performance was met with loud shouts of approbation.",
      "The new plan received the formal approbation of the city council."
    ]
  },
  {
    word: "appropriate",
    definition: "suitable for a particular person, place, or situation",
    aiGenBn: "উপযুক্ত, যথাযথ",
    examples: [
      "When someone sends you a gift, the appropriate response is to thank them.",
      "Her speech on retirement was appropriate for her middle-aged audience."
    ],
    aiGenEx: [
      "It is important to wear appropriate clothing for a formal job interview.",
      "The judge decided that a fine was the most appropriate punishment for the minor offense."
    ]
  },
  {
    word: "artless",
    definition: "simple and natural; without cunning or deceit",
    aiGenBn: "অকৃত্রিম, নিস্পাপ, সরল",
    examples: [
      "My artless comment was mistaken for rudeness.",
      "The child asked many artless questions"
    ],
    aiGenEx: [
      "Her artless beauty stood out in a room full of people wearing heavy makeup.",
      "The old man gave an artless account of his life, hiding nothing from his listeners."
    ]
  },
  {
    word: "audacious",
    definition: "disposed to venture or take risks",
    aiGenBn: "দুঃসাহসী, ধৃষ্ট",
    examples: [
      "Your plan of going abroad is an audacious decision.",
      "He described the plan as ambitious and audacious."
    ],
    aiGenEx: [
      "The bank robbery was an audacious crime committed in broad daylight.",
      "She made the audacious move of quitting her stable job to start her own company."
    ]
  },
  {
    word: "autonomous",
    definition: "existing as an independent entity",
    aiGenBn: "স্বায়ত্তশাসিত, স্বাধীন",
    examples: [
      "Teachers aim to help children become autonomous learners.",
      "His philosophy is about becoming aware of oneself as an autonomous individual."
    ],
    aiGenEx: [
      "Many regions in the country are seeking to become more autonomous from the central government.",
      "In the future, autonomous vehicles may completely replace human drivers."
    ]
  },
  {
    word: "aver",
    definition: "declare or affirm solemnly and formally as true",
    aiGenBn: "দৃঢ়ভাবে বলা, নিশ্চিত করে বলা",
    examples: [
      "I aver that I have spoken the truth.",
      "In spite of all you say, I still aver that his report is true."
    ],
    aiGenEx: [
      "The witness was prepared to aver that he saw the defendant at the scene.",
      "The company's lawyers aver that no safety regulations were violated."
    ]
  },
  {
    word: "banal",
    definition: "repeated too often; overfamiliar through overuse",
    aiGenBn: "তুচ্ছ, মামুলি, গতানুগতিক",
    examples: [
      "It was just another banal newspaper story.",
      "Melissa murmured some banal phrases of encouragement and put down the telephone with a feeling of desolation."
    ],
    aiGenEx: [
      "The plot of the movie was so banal that I fell asleep halfway through.",
      "I'm tired of having the same banal conversations about the weather every morning."
    ]
  },
  {
    word: "beneficent",
    definition: "doing or producing good",
    aiGenBn: "উপকারী, দয়ালু, কল্যাণকর",
    examples: [
      "Many beneficent projects have to be foregone if sufficient funds are lacking.",
      "Everything important to the farm was under the care of a  beneficent  power, never conceived of as having a definite shape."
    ],
    aiGenEx: [
      "The billionaire is known for his beneficent contributions to local charities.",
      "The rain had a beneficent effect on the dry, thirsty crops."
    ]
  },
  {
    word: "bombastic",
    definition: "ostentatiously lofty in style",
    aiGenBn: "বাগাড়ম্বরপূর্ণ, আড়ম্বরপূর্ণ",
    examples: [
      "He is best known for three rather bombastic poems.",
      "The candidate spoke in a bombastic way of all that he would do if elected."
    ],
    aiGenEx: [
      "The professor's bombastic lecture style often confused his students rather than teaching them.",
      "Despite his bombastic claims of success, the project was actually a failure."
    ]
  },
  {
    word: "boorish",
    definition: "ill-mannered and coarse in behavior or appearance",
    aiGenBn: "অসভ্য, গেঁয়ো, অভদ্র",
    examples: [
      "I found him rather boorish and aggressive.",
      "He disgusted many with his boorish behaviour."
    ],
    aiGenEx: [
      "It was boorish of him to interrupt the speaker in the middle of a sentence.",
      "His boorish manners at the dinner table embarrassed his host."
    ]
  },
  {
    word: "burnish",
    definition: "polish and make shiny",
    aiGenBn: "পালিশ করা, উজ্জ্বল করা",
    examples: [
      "The company is currently trying to burnish its socially responsible image.",
      "He missed no opportunity to burnish his image."
    ],
    aiGenEx: [
      "You should burnish the silverware before the guests arrive.",
      "The athlete worked hard to burnish his reputation after the scandal."
    ]
  },
  {
    word: "cacophonous",
    definition: "having an unpleasant sound",
    aiGenBn: "শ্রুতিকটু, কর্কশ",
    examples: [
      "They produced the most cacophonous beat of pop music.",
      "It is quite a shock to move from this charming, if slightly aimless stuff back into the original cacophonous maelstrom."
    ],
    aiGenEx: [
      "The orchestra's first rehearsal was a cacophonous mess of out-of-tune instruments.",
      "I was woken up by the cacophonous sound of construction work outside my window."
    ]
  },
  {
    word: "capricious",
    definition: "determined by chance or impulse rather than by necessity",
    aiGenBn: "খামখেয়ালি, অস্থিরমতি",
    examples: [
      "The novelist characterizes his heroine as capricious and passionate.",
      "He was a cruel and capricious tyrant."
    ],
    aiGenEx: [
      "The weather in the mountains is capricious and can change in an instant.",
      "Stock markets can be capricious, reacting wildly to minor pieces of news."
    ]
  },
  {
    word: "castigation",
    definition: "verbal punishment",
    aiGenBn: "তিরস্কার, কঠোর সমালোচনা",
    examples: [
      "Some people believe that work is a better means of order and discipline than chain and castigation.",
      "Ever since its presentation, the Little Women's Prose receives much scold and castigation."
    ],
    aiGenEx: [
      "The director's public castigation of the actor was seen as unprofessional.",
      "She faced severe castigation from the press for her controversial remarks."
    ]
  },
  {
    word: "catalyst",
    definition: "substance that initiates or accelerates a chemical reaction",
    aiGenBn: "অনুঘটক, প্রভাবক",
    examples: [
      "The high suicide rate acted as a catalyst for change in the prison system.",
      "The riots were later seen as the catalyst for the new political developments."
    ],
    aiGenEx: [
      "The new CEO's arrival was the catalyst for a total restructuring of the company.",
      "In chemistry class, we learned how a catalyst can speed up a reaction without being consumed."
    ]
  },
  {
    word: "causality",
    definition: "the relation between reasons and effects",
    aiGenBn: "কার্যকারণ সম্বন্ধ",
    examples: [
      "They do not share our sense of causality, and so tend to view events as discrete and unrelated.",
      "Thus, it is possible to discern three main levels of causality in this model of industrial conflict."
    ],
    aiGenEx: [
      "Scientists are still trying to establish a clear causality between the two variables.",
      "The law of causality suggests that every action has a corresponding reaction."
    ]
  },
  {
    word: "chicanery",
    definition: "the use of tricks to deceive someone",
    aiGenBn: "প্রতারণা, ছলচাতুরি",
    examples: [
      "The investigation revealed political chicanery and corruption at the highest levels.",
      "Clearly there is some chicanery going on."
    ],
    aiGenEx: [
      "The lawyer used legal chicanery to delay the trial for months.",
      "He wasn't above using a bit of chicanery to win the poker game."
    ]
  },
  {
    word: "coagulate",
    definition: "change from a liquid to a thickened or solid state",
    aiGenBn: "জমাট বাঁধা",
    examples: [
      "Blood coagulates when it meets air.",
      "In extreme polarity, dreams coagulate into thought - form that is resonant."
    ],
    aiGenEx: [
      "The sauce began to coagulate as it cooled down in the pan.",
      "Certain chemicals are added to the water to make the impurities coagulate so they can be filtered out."
    ]
  },
  {
    word: "coda",
    definition: "the closing section of a musical composition",
    aiGenBn: "সঙ্গীতের শেষ অংশ, উপসংহার",
    examples: [
      "The coda is often more technically difficult than the rest of the piece.",
      "Still, it was a happy coda to a difficult week for US debt markets."
    ],
    aiGenEx: [
      "The final chapter of the book served as a beautiful coda to the entire series.",
      "The pianist played the coda with such emotion that the audience remained silent for several seconds after he finished."
    ]
  },
  {
    word: "commensurate",
    definition: "corresponding in size or degree or extent",
    aiGenBn: "সমানুপাতিক, সমপরিমাণ",
    examples: [
      "Six yards is commensurate with eighteen feet.",
      "Employees are paid salaries commensurate with those of teachers."
    ],
    aiGenEx: [
      "The level of punishment should be commensurate with the severity of the crime.",
      "Your success in this course will be commensurate with the amount of effort you put into it."
    ]
  },
  {
    word: "conciliatory",
    definition: "making or willing to make concessions",
    aiGenBn: "শান্তিপ্রদায়ক, মিটমাটকারী",
    examples: [
      "Everyone was in a conciliatory mood at the start of the meeting.",
      "Perhaps you should adopt a more conciliatory approach."
    ],
    aiGenEx: [
      "After their argument, he made a conciliatory gesture by buying her flowers.",
      "The president's conciliatory speech helped to ease the tensions between the two nations."
    ]
  },
  {
    word: "confound",
    definition: "be confusing or perplexing to",
    aiGenBn: "বিভ্রান্ত করা, হতবুদ্ধি করা",
    examples: [
      "Don't confound public affairs with private ones.",
      "Use their expectations and then confound them."
    ],
    aiGenEx: [
      "The complicated instructions confounded even the most experienced engineers.",
      "The sudden change in weather confounded our plans for a weekend hike."
    ]
  },
  {
    word: "contention",
    definition: "the act of competing as for profit or a prize",
    aiGenBn: "যুক্তি, বিতর্ক, লড়াই",
    examples: [
      "His contention was that world trade barriers should be canceled.",
      "Her main contention is that doctors should do more to encourage healthy eating."
    ],
    aiGenEx: [
      "The championship is still a matter of contention between the two top teams.",
      "It is my contention that the new law will actually increase crime rates."
    ]
  },
  {
    word: "contentious",
    definition: "showing an inclination to disagree",
    aiGenBn: "বিতর্কিত, ঝগড়াটে",
    examples: [
      "She has some rather contentious views on education.",
      "3. Animal welfare did not become a contentious issue until the late 1970s."
    ],
    aiGenEx: [
      "The proposed tax increase is a highly contentious issue in the local community.",
      "Avoid bringing up contentious topics like politics or religion at the dinner table."
    ]
  },
  {
    word: "conundrum",
    definition: "a difficult problem",
    aiGenBn: "ধাঁধা, জটিল সমস্যা",
    examples: [
      "The administration is facing a familiar conundrum.",
      "Time will doubtless provide the answer to that conundrum."
    ],
    aiGenEx: [
      "How to reduce poverty without increasing the national debt is a major economic conundrum.",
      "The mysterious disappearance of the hiker remains a conundrum for the local police."
    ]
  },
  {
    word: "conventional",
    definition: "following accepted customs and proprieties",
    aiGenBn: "প্রথাগত, গতানুগতিক",
    examples: [
      "She's very conventional in her views.",
      "He made a few conventional remarks about the weather."
    ],
    aiGenEx: [
      "While others used modern technology, he preferred more conventional methods of farming.",
      "The artist decided to break away from conventional styles and create something entirely new."
    ]
  },
  {
    word: "convoluted",
    definition: "highly complex or intricate",
    aiGenBn: "জটিল, পেঁচালো",
    examples: [
      "His grammar explanations are terribly convoluted.",
      "Her book is full of long convoluted sentences."
    ],
    aiGenEx: [
      "I couldn't follow the film's convoluted plot, which involved multiple time-traveling characters.",
      "The legal process for starting a business in this country is incredibly convoluted."
    ]
  },
  {
    word: "craven",
    definition: "lacking even the rudiments of courage; abjectly fearful",
    aiGenBn: "কাপুরুষোচিত, অতিশয় ভীরু",
    examples: [
      "They condemned the deal as a craven surrender.",
      "For a craven moment she was tempted to go back and throw herself on the mercy of the landlady."
    ],
    aiGenEx: [
      "The soldier's craven behavior during the battle led to his court-martial.",
      "Refusing to stand up for his friend was a craven act that he later regretted."
    ]
  },
  {
    word: "decorum",
    definition: "propriety in manners and conduct",
    aiGenBn: "শালীনতা, শিষ্টাচার",
    examples: [
      "I was treated with decorum and respect throughout the investigation.",
      "I hope you will behave with decorum at the funeral."
    ],
    aiGenEx: [
      "The young man behaved with perfect decorum during his first meeting with the queen.",
      "Maintaining a sense of decorum is essential during a serious court trial."
    ]
  },
  {
    word: "deference",
    definition: "courteous regard for people's feelings",
    aiGenBn: "শ্রদ্ধা, মান্যতা",
    examples: [
      "He treats her with such deference.",
      "The actress was accorded all the deference of a visiting celebrity."
    ],
    aiGenEx: [
      "In many cultures, young people are expected to show deference to their elders.",
      "The committee showed deference to the expert's opinion when making their final decision."
    ]
  },
  {
    word: "delineate",
    definition: "represented accurately or precisely",
    aiGenBn: "সুস্পষ্টভাবে বর্ণনা করা, চিত্রিত করা",
    examples: [
      "The  law  and  the  necessary  punishments  delineate  a  bottom  line  for  decent  human interaction.",
      "Delineate the type of data being described by the data name."
    ],
    aiGenEx: [
      "The contract clearly delineates the responsibilities of both the employer and the employee.",
      "The architect used a blue pencil to delineate the boundaries of the new garden."
    ]
  },
  {
    word: "denigrate",
    definition: "charge falsely or with malicious intent",
    aiGenBn: "কলঙ্কিত করা, মানহানি করা, ছোট করা",
    examples: [
      "You shouldn't denigrate people just because they have different beliefs from you.",
      "Ensure they speak well of us rather than denigrate us to their friends."
    ],
    aiGenEx: [
      "The politician's opponents tried to denigrate his character by spreading false rumors.",
      "It is unfair to denigrate the hard work of others simply because you are jealous."
    ]
  },
  {
    word: "derivative",
    definition: "a.   a compound obtained from another compound",
    aiGenBn: "অন্য কিছু থেকে প্রাপ্ত, মৌলিক নয় এমন",
    examples: [
      "I found the novel thin and derivative. I had expected more.",
      "His painting/style is terribly derivative."
    ],
    aiGenEx: [
      "The new pop song sounds very derivative of hits from the 1980s.",
      "In mathematics, the derivative represents the rate of change of a function."
    ]
  },
  {
    word: "dichotomy",
    definition: "a classification into two opposed parts or subclasses",
    aiGenBn: "দ্বিবিভাজন, পরস্পরবিরোধী দুটি ভাগ",
    examples: [
      "There is a dichotomy between the academic world and the industrial world.",
      "The recent trend is to de-emphasize the classical dichotomy."
    ],
    aiGenEx: [
      "The book explores the dichotomy between good and evil in human nature.",
      "There is a clear dichotomy between his public image and his private life."
    ]
  },
  {
    word: "diffidence",
    definition: "lack of self-assurance",
    aiGenBn: "আত্মবিশ্বাসের অভাব, কুণ্ঠা",
    examples: [
      "If I have any suggestions, I shall put them with garrulous hesitation and a suitable air of diffidence.",
      "He has diffidence in expressing his opinions."
    ],
    aiGenEx: [
      "His diffidence made it difficult for him to speak in front of large crowds.",
      "Despite her talent, she often struggled with diffidence during job interviews."
    ]
  },
  {
    word: "diffuse",
    definition: "spread out; not concentrated in one place",
    aiGenBn: "ব্যাপ্ত করা, ছড়িয়ে দেওয়া, শব্দবহুল",
    examples: [
      "Direct light is better for reading than diffuse light.",
      "The problem is how to diffuse power without creating anarchy."
    ],
    aiGenEx: [
      "The fragrance of the flowers began to diffuse throughout the entire room.",
      "His writing style is often too diffuse and would benefit from some editing."
    ]
  },
  {
    word: "digression",
    definition: "a message that departs from the main subject",
    aiGenBn: "মূল প্রসঙ্গের বাইরে যাওয়া, অবান্তর কথা",
    examples: [
      "Talking about money now would be a digression from the main purpose of this meeting.",
      "Please leave the digression, and get down to the business matter."
    ],
    aiGenEx: [
      "The professor's long digression about his cat had nothing to do with the history lesson.",
      "After a brief digression into her personal life, the speaker returned to the main topic."
    ]
  },
  {
    word: "discerning",
    definition: "having or revealing keen insight and good judgment",
    aiGenBn: "সূক্ষ্মদর্শী, বিচক্ষণ",
    examples: [
      "Politicians are good at discerning public opinion.",
      "Today's consumers are sophisticated, discerning and demand quality products with real taste and flavour."
    ],
    aiGenEx: [
      "The discerning art critic immediately noticed that the painting was a fake.",
      "She has a discerning palate and can identify the subtle ingredients in any dish."
    ]
  },
  {
    word: "discordant",
    definition: "not in agreement or harmony",
    aiGenBn: "বেসুরো, অমিল, শ্রুতিকটু",
    examples: [
      "The two experiments gave us discordant results.",
      "The authorities on the issue are discordant."
    ],
    aiGenEx: [
      "The discordant sounds of the city traffic made it hard for him to concentrate.",
      "There were several discordant voices within the group regarding the new proposal."
    ]
  },
  {
    word: "discredit",
    definition: "the state of being held in low esteem",
    aiGenBn: "সুনাম নষ্ট করা, অবিশ্বাস করা",
    examples: [
      "By telling lies he brought discredit upon Parliament.",
      "The company's lawyers tried to discredit her testimony."
    ],
    aiGenEx: [
      "The new evidence served to discredit the witness's previous statement.",
      "The scandal threatened to discredit the entire scientific organization."
    ]
  },
  {
    word: "discrepancy",
    definition: "a difference between conflicting facts or claims or opinions",
    aiGenBn: "অসংগতি, অমিল",
    examples: [
      "A discrepancy in the financial reports is the reason for the audit.",
      "When the store manager noticed a discrepancy in the inventory, he called all of his employees into his office."
    ],
    aiGenEx: [
      "There was a major discrepancy between the two witnesses' accounts of the accident.",
      "The accountant spent hours trying to find the source of the $500 discrepancy in the books."
    ]
  },
  {
    word: "discrete",
    definition: "constituting a separate entity or part",
    aiGenBn: "বিচ্ছিন্ন, আলাদা, স্বতন্ত্র",
    examples: [
      "Brown and white rice are two discrete varieties.",
      "A watch is made up of many discrete gears."
    ],
    aiGenEx: [
      "The toy set consists of several discrete pieces that can be assembled in different ways.",
      "The study looked at three discrete groups of people based on their age."
    ]
  },
  {
    word: "disinterested",
    definition: "unaffected by concern for one's own welfare",
    aiGenBn: "নিরপেক্ষ, স্বার্থহীন",
    examples: [
      "The bowl is full because the dog is disinterested in his new food.",
      "When the professor believed his students were disinterested in his lectures, he would stop talking to see if anyone would notice."
    ],
    aiGenEx: [
      "We need a disinterested third party to help settle this legal dispute.",
      "The judge remained disinterested, focusing only on the facts of the case."
    ]
  },
  {
    word: "disjointed",
    definition: "taken apart at the points of connection90",
    aiGenBn: "অসংলগ্ন, খাপছাড়া",
    examples: [
      "Having just woken up from sleep, whatever words my little brother was trying to say to me was disjointed and impossible to decipher.",
      "Their work plan is entirely unsystematic so far as matter is concerned, chaotic and disjointed in style."
    ],
    aiGenEx: [
      "The novel's plot felt disjointed, jumping between characters and timelines without much explanation.",
      "The patient's speech was disjointed and difficult for the doctor to understand."
    ]
  },
  {
    word: "dismiss",
    definition: "stop associating with",
    aiGenBn: "বরখাস্ত করা, খারিজ করা, পাত্তা না দেওয়া",
    examples: [
      "Don't dismiss any possibility.",
      "Tom was dismissed from his job."
    ],
    aiGenEx: [
      "The judge decided to dismiss the case due to a lack of evidence.",
      "It is easy to dismiss his ideas, but some of them are actually quite clever."
    ]
  },
  {
    word: "disparage",
    definition: "express a negative opinion of",
    aiGenBn: "তুচ্ছজ্ঞান করা, অবজ্ঞা করা",
    examples: [
      "It is never right to disparage people based on their language.",
      "Do not disparage your mother for making you do the chores."
    ],
    aiGenEx: [
      "The critic went out of his way to disparage the director's latest film.",
      "He often uses humor to disparage his rivals and make himself look better."
    ]
  },
  {
    word: "dissemble",
    definition: "behave unnaturally or affectedly",
    aiGenBn: "ছদ্মবেশ ধারণ করা, প্রকৃত উদ্দেশ্য গোপন করা",
    examples: [
      "Although I am willing to help you as much as I can, I will not lie and dissemble the truth about your lousy work history.",
      "While it may be easier to dissemble your true feelings from others, it is always best to be honest with those you love."
    ],
    aiGenEx: [
      "He found it difficult to dissemble his disappointment when he didn't get the promotion.",
      "The spy had to dissemble his true identity to gain the trust of the enemy."
    ]
  },
  {
    word: "disseminate",
    definition: "cause to become widely known",
    aiGenBn: "প্রচার করা, ছড়িয়ে দেওয়া",
    examples: [
      "Once we finalize the agreement, I will disseminate funds into your account.",
      "The news was disseminated broadly."
    ],
    aiGenEx: [
      "The internet makes it very easy to disseminate information to a global audience.",
      "The health department worked hard to disseminate information about the new vaccine."
    ]
  },
  {
    word: "dissolution",
    definition: "separation into component parts",
    aiGenBn: "বিলুপ্তি, অবসান, বিচ্ছেদ",
    examples: [
      "The dissolution of their friendship was caused by nasty gossip.",
      "Extreme conflicting opinions led to the dissolution of the company's executive board."
    ],
    aiGenEx: [
      "The dissolution of the empire led to the creation of several smaller independent nations.",
      "The company's dissolution was the result of years of poor financial management."
    ]
  },
  {
    word: "dissonance",
    definition: "disagreeable sounds",
    aiGenBn: "অনৈক্য, শ্রুতিকটু শব্দ, অসংগতি",
    examples: [
      "There is a great deal of dissonance between what a liar says and does.",
      "Despite the peaceful intentions of the protestors, the dissonance among the groups led to a small riot."
    ],
    aiGenEx: [
      "The musician used dissonance in the song to create a feeling of tension and unease.",
      "Cognitive dissonance occurs when a person's beliefs are in conflict with their actions."
    ]
  },
  {
    word: "dogmatic",
    definition: "pertaining to a code of beliefs accepted as authoritative",
    aiGenBn: "একগুঁয়ে, মতান্ধ",
    examples: [
      "The preacher was a dogmatic individual who was quick to argue with anyone who challenged his opinion.",
      "The government’s dogmatic approach to improving the country’s educational system has not been welcomed by teachers."
    ],
    aiGenEx: [
      "The professor's dogmatic teaching style discouraged students from asking questions.",
      "He is so dogmatic about his political views that he refuses to listen to any other perspective."
    ]
  },
  {
    word: "dupe",
    definition: "fool or hoax",
    aiGenBn: "প্রতারিত করা, ঠকানো",
    examples: [
      "I won't be his dupe any longer.",
      "The perpetrators of the hoax managed to dupe respectable journalists into printing their story."
    ],
    aiGenEx: [
      "The clever salesman managed to dupe several customers into buying the faulty product.",
      "I felt like a dupe when I realized that the email was actually a phishing scam."
    ]
  },
  {
    word: "eclectic",
    definition: "selecting what seems best of various styles or ideas",
    aiGenBn: "উদার, বিভিন্ন উৎস থেকে সংগৃহীত",
    examples: [
      "The restaurant’s menu was eclectic and included foods from a number of ethnic groups and cultures",
      "My friends are an eclectic group of individuals who can rarely agree on a single topic."
    ],
    aiGenEx: [
      "The living room was decorated in an eclectic style, combining modern furniture with antique rugs.",
      "Her taste in music is quite eclectic, ranging from classical opera to heavy metal."
    ]
  },
  {
    word: "efficacy",
    definition: "capacity or power to produce a desired effect",
    aiGenBn: "কার্যকারিতা, ফলপ্রসূতা",
    examples: [
      "Fortunately, the medicine had the efficacy to reduce the amount of pain John was feeling.",
      "In order to test the efficacy of its new security system, the bank staged a fake robbery."
    ],
    aiGenEx: [
      "The efficacy of the new vaccine was proven during the large-scale clinical trials.",
      "Many people doubt the efficacy of home remedies for serious illnesses."
    ]
  },
  {
    word: "elegy",
    definition: "a mournful poem; a lament for the dead",
    aiGenBn: "শোকগাথা, মৃত ব্যক্তির স্মরণে শোককাব্য",
    examples: [
      "During the funeral, Clay played an instrumental elegy for his brother.",
      "When the princess died, one of her favorite songwriters wrote a moving elegy for her."
    ],
    aiGenEx: [
      "The poet wrote a beautiful elegy to honor his late grandmother.",
      "The slow, sad music at the end of the film felt like a musical elegy for the fallen heroes."
    ]
  },
  {
    word: "elicit",
    definition: "call forth, as an emotion, feeling, or response",
    aiGenBn: "বের করে আনা, উদ্রেক করা",
    examples: [
      "The comedian hoped his jokes would elicit a great deal of laughter from the audience.",
      "The police chief hoped to elicit the truth about the missing evidence from the corrupted officer."
    ],
    aiGenEx: [
      "The teacher tried to elicit an answer from the shy student by asking simpler questions.",
      "The charity's video was designed to elicit sympathy and donations from the public."
    ]
  },
  {
    word: "embellish",
    definition: "make more attractive, as by adding ornament or color",
    aiGenBn: "সজ্জিত করা, অতিরঞ্জিত করা",
    examples: [
      "Your narrative would be better if you did not embellish it with so many unnecessary details.",
      "Just tell the truth and don't embellish the story by any means."
    ],
    aiGenEx: [
      "The author decided to embellish the historical events to make the book more exciting.",
      "She used sequins and lace to embellish the plain white dress."
    ]
  },
  {
    word: "empirical",
    definition: "derived from experiment and observation rather than theory",
    aiGenBn: "পরীক্ষামূলক, বাস্তব অভিজ্ঞতানির্ভর",
    examples: [
      "Our data is based on empirical evidence collected in numerous studies.",
      "The judge ordered the lawyer to present the empirical evidence to the court."
    ],
    aiGenEx: [
      "The theory lacks empirical support and is therefore not widely accepted by scientists.",
      "His conclusions were based on empirical observations made during years of field research."
    ]
  },
  {
    word: "endemic",
    definition: "native to or confined to a certain region",
    aiGenBn: "আঞ্চলিক, নির্দিষ্ট স্থানে সীমাবদ্ধ",
    examples: [
      "Many of the birds that were once endemic to Africa are now being bred in the United States.",
      "While malaria is rarely seen in the United States, it is endemic to several tropical countries."
    ],
    aiGenEx: [
      "The kangaroo is a species that is endemic to the continent of Australia.",
      "Corruption was endemic in the local government for many decades."
    ]
  },
  {
    word: "enervate",
    definition: "weaken mentally or morally",
    aiGenBn: "দুর্বল করা, শক্তিহীন করা",
    examples: [
      "The general devised an attack to enervate and conquer his enemy.",
      "The wolf's plan of attack was to enervate the buffalo and kill it."
    ],
    aiGenEx: [
      "The hot, humid weather tended to enervate even the most energetic travelers.",
      "Hours of working in the sun will eventually enervate the strongest of men."
    ]
  },
  {
    word: "erudite",
    definition: "having or showing profound knowledge",
    aiGenBn: "পণ্ডিত, জ্ঞানগর্ভ",
    examples: [
      "The room was full of erudite scholars who made the discussion fun and interesting.",
      "Our erudite instructor was able to answer every question asked by our class."
    ],
    aiGenEx: [
      "The professor's erudite lecture on quantum physics was fascinating but difficult to follow.",
      "She is an erudite scholar who has published dozens of books on ancient history."
    ]
  },
  {
    word: "eulogy",
    definition: "a formal expression of praise for someone who has died",
    aiGenBn: "প্রশংসামূলক বক্তৃতা, শোকস্তুতি",
    examples: [
      "At the funeral service, John used the eulogy to fondly recall his father’s dedication to the homeless.",
      "The minister delivered a long eulogy."
    ],
    aiGenEx: [
      "The best friend's eulogy brought many of the mourners to tears.",
      "Writing a eulogy is a difficult task because you want to capture the person's entire life in a few words."
    ]
  },
  {
    word: "euphemism",
    definition: "an inoffensive expression substituted for an offensive one",
    aiGenBn: "কোমলভাষণ, শ্রুতিমধুর শব্দ",
    examples: [
      "The phrase has become a euphemism for the erosion of workers' basic rights."
    ],
    aiGenEx: [
      "'Passed away' is a common euphemism used to avoid saying that someone has died.",
      "The company used the euphemism 'restructuring' instead of admitting they were firing people."
    ]
  },
  {
    word: "exacerbate",
    definition: "make worse",
    aiGenBn: "অধিকতর খারাপ করা, উত্তেজিত করা",
    examples: [
      "If you do not take your medicine, your condition will exacerbate, and you will feel worse.",
      "If you do not tell the truth in court, you will only exacerbate your situation."
    ],
    aiGenEx: [
      "Scratching a mosquito bite will only exacerbate the itching.",
      "The high winds served to exacerbate the forest fire, making it spread much faster."
    ]
  },
  {
    word: "exigency",
    definition: "a pressing or urgent situation",
    aiGenBn: "জরুরি অবস্থা, বিশেষ প্রয়োজন",
    examples: [
      "Economic exigency obliged the government to act.",
      "Until my attacker is found, I consider having a bodyguard to be an exigency."
    ],
    aiGenEx: [
      "The financial exigency caused by the pandemic forced the business to close permanently.",
      "During a medical exigency, it is important to stay calm and call for help immediately."
    ]
  },
  {
    word: "facilitate",
    definition: "make easier",
    aiGenBn: "সহজতর করা, ত্বরান্বিত করা",
    examples: [
      "The facts will help facilitate group discussion.",
      "Various laws have been passed to facilitate agrarian credit."
    ],
    aiGenEx: [
      "The new software was designed to facilitate better communication between team members.",
      "Having a map will help facilitate our journey through the unfamiliar city."
    ]
  },
  {
    word: "fallacious",
    definition: "containing or based on incorrect reasoning",
    aiGenBn: "ভ্রান্ত, যুক্তিহীন",
    examples: [
      "His argument is based on fallacious reasoning.",
      "Don't be misled by the fallacious advertisement."
    ],
    aiGenEx: [
      "The conclusion was based on fallacious assumptions that turned out to be completely wrong.",
      "It is fallacious to believe that money is the only key to happiness."
    ]
  },
  {
    word: "felicitous",
    definition: "exhibiting an agreeably appropriate manner or style",
    aiGenBn: "সুখকর, যথাযথ, সুন্দর",
    examples: [
      "The felicitous music made me happy.",
      "Since I have plans to go to the beach today, I hope the weather is felicitous."
    ],
    aiGenEx: [
      "The speaker's felicitous choice of words made the complicated topic easy to understand.",
      "It was a felicitous coincidence that we both happened to be in Paris at the same time."
    ]
  },
  {
    word: "flag",
    definition: "a rectangular piece of cloth of distinctive design",
    aiGenBn: "পতাকা, নিশান, ঝুলে পড়া (weakening)",
    examples: [
      "Bare your head when the flag is raised.",
      "Every morning the flag is raised on its pole."
    ],
    aiGenEx: [
      "The pirate ship flew a black flag with a skull and crossbones.",
      "After the first hour of the marathon, her energy began to flag significantly."
    ]
  },
  {
    word: "fledgling",
    definition: "young bird that has just fledged or become capable of flying",
    aiGenBn: "অনভিজ্ঞ, নবীন, কচি পাখি",
    examples: [
      "The fledgling country just declared its independence a few months ago.95",
      "The current economic climate is particularly difficult for fledgling businesses."
    ],
    aiGenEx: [
      "The fledgling actor was nervous about his first big role in a Hollywood movie.",
      "Our fledgling tech startup is finally starting to see some steady profit."
    ]
  },
  {
    word: "flout",
    definition: "treat with contemptuous disregard",
    aiGenBn: "অমান্য করা, উপহাস করা",
    examples: [
      "Safety guidelines exist for a reason, and if you flout them, there could be serious consequences.",
      "No one can flout the rules and get away with it."
    ],
    aiGenEx: [
      "If you continue to flout the company's dress code, you will face disciplinary action.",
      "The rebel leader decided to flout the government's authority by organizing a protest."
    ]
  },
  {
    word: "forestall",
    definition: "keep from happening or arising; make impossible",
    aiGenBn: "প্রতিরোধ করা, আগেভাগে ব্যবস্থা নিয়ে বাধা দেওয়া",
    examples: [
      "We must act now to forestall disaster.",
      "I left the room to forestall involvements."
    ],
    aiGenEx: [
      "The government implemented new laws to forestall a potential economic crisis.",
      "He tried to forestall her questions by changing the subject as quickly as possible."
    ]
  },
  {
    word: "frugality",
    definition: "prudence in avoiding waste",
    aiGenBn: "মিতব্যয়িতা, হিসেবি চলা",
    examples: [
      "The principle of diligence and frugality applies to all undertakings.",
      "We must practice the strictest frugality and economy."
    ],
    aiGenEx: [
      "Her frugality allowed her to save enough money to buy a house in just five years.",
      "Growing your own vegetables is a great way to practice frugality and eat healthy."
    ]
  },
  {
    word: "garrulous",
    definition: "full of trivial conversation",
    aiGenBn: "বাচাল, আড্ডাবাজ",
    examples: [
      "Garrulous people make great talk show hosts.",
      "This man does not speak in a straightforward manner, he is garrulous."
    ],
    aiGenEx: [
      "My garrulous neighbor kept me talking at the fence for over an hour.",
      "The garrulous bus driver shared stories with the passengers for the entire trip."
    ]
  },
  {
    word: "gregarious",
    definition: "temperamentally seeking and enjoying the company of others",
    aiGenBn: "মিশুক, যূথবদ্ধ",
    examples: [
      "If you want to be more approachable, show a gregarious smile.",
      "As gregarious as you are with me, I am sure everyone will admire you."
    ],
    aiGenEx: [
      "Gregarious people often find it very difficult to work from home in isolation.",
      "Dolphins are known to be highly gregarious animals that live in large pods."
    ]
  },
  {
    word: "gullible",
    definition: "naive and easily deceived or tricked96",
    aiGenBn: "অতিসরল, সহজে প্রতারিত করা যায় এমন",
    examples: [
      "The gullible woman gave all her money to a fake charity.",
      "Gullible people tend to believe whatever they are told."
    ],
    aiGenEx: [
      "The internet is full of scams designed to target gullible users.",
      "He was so gullible that he believed his friends when they told him the moon was made of cheese."
    ]
  },
  {
    word: "homogeneous",
    definition: "all of the same or similar kind or nature",
    aiGenBn: "সমজাতীয়, একই প্রকার",
    examples: [
      "The population of the village has remained remarkably homogeneous.",
      "The unemployed are not a homogeneous group."
    ],
    aiGenEx: [
      "Mix the ingredients until they form a smooth, homogeneous paste.",
      "The student body at the small private school was surprisingly homogeneous."
    ]
  },
  {
    word: "hyperbole",
    definition: "extravagant exaggeration",
    aiGenBn: "অত্যুক্তি, অতিরঞ্জন",
    examples: [
      "It was not hyperbole to call Hitler the worst dictator in past one hundred year.",
      "The film is being promoted with all the usual hyperbole."
    ],
    aiGenEx: [
      "Saying 'I've told you a million times' is a common example of hyperbole.",
      "The advertisement was full of hyperbole, claiming the product could solve every problem."
    ]
  },
  {
    word: "idolatry",
    definition: "the worship of idols or images that are not God",
    aiGenBn: "মূর্তিপূজা, অতিভক্তি",
    examples: [
      "It is sad how many people exhibit idolatry towards celebrities.",
      "The queen was adored to the point of idolatry."
    ],
    aiGenEx: [
      "Ancient civilizations often practiced idolatry, building large temples for their gods.",
      "His idolatry of his elder brother made him blind to the man's obvious flaws."
    ]
  },
  {
    word: "immutable",
    definition: "not subject or susceptible to change or variation",
    aiGenBn: "অপরিবর্তনীয়, চিরস্থায়ী",
    examples: [
      "This decision should not be seen as immutable.",
      "My medical condition is immutable and cannot be altered even with medication."
    ],
    aiGenEx: [
      "The laws of physics are considered to be immutable and constant throughout the universe.",
      "Once the contract is signed, the terms and conditions are immutable."
    ]
  },
  {
    word: "impair",
    definition: "make worse or less effective",
    aiGenBn: "ক্ষতিগ্রস্ত করা, কমানো",
    examples: [
      "Loud noise can impair your hearing.",
      "Tiredness can seriously impair your ability to drive."
    ],
    aiGenEx: [
      "Drinking alcohol can significantly impair your judgment and reaction time.",
      "A lack of sleep can impair a student's ability to focus during an exam."
    ]
  },
  {
    word: "impassive",
    definition: "having or revealing little emotion or sensibility",
    aiGenBn: "আবেগহীন, শান্ত",
    examples: [
      "Her impassive face showed no reaction at all.",
      "It is so difficult to remain impassive when you’re faced with a life or death situation."
    ],
    aiGenEx: [
      "The guard remained impassive even as the protestors shouted in his face.",
      "He told the tragic story with an impassive voice, hiding his internal pain."
    ]
  },
  {
    word: "impede",
    definition: "be a hindrance or obstacle to",
    aiGenBn: "বাধা দেওয়া, ব্যাহত করা",
    examples: [
      "If you do not eat while you are sick, the lack of nutrients will impede your recovery.",
      "The government project was impeded by a number of factors."
    ],
    aiGenEx: [
      "The heavy snow began to impede the flow of traffic on the highway.",
      "Constant interruptions will eventually impede your progress on the project."
    ]
  },
  {
    word: "implicit",
    definition: "suggested though not directly expressed",
    aiGenBn: "অন্তর্নিহিত, পরোক্ষ",
    examples: [
      "The handshake between the two men was their implicit agreement to the terms of the contract.",
      "Her words contained an implicit threat."
    ],
    aiGenEx: [
      "There was an implicit understanding between the teammates that they would always support each other.",
      "Although he didn't say it, his approval was implicit in his encouraging smile."
    ]
  },
  {
    word: "inadvertently",
    definition: "without knowledge or intention",
    aiGenBn: "অনিচ্ছাকৃতভাবে, অসাবধানতাবশত",
    examples: [
      "Viruses can be spread inadvertently by email users.",
      "We had inadvertently left without paying the bill."
    ],
    aiGenEx: [
      "I inadvertently deleted the important document while cleaning up my desktop.",
      "She inadvertently offended her friend by making a joke she didn't realize was sensitive."
    ]
  },
  {
    word: "incongruity",
    definition: "the quality of disagreeing",
    aiGenBn: "অসংগতি, বেমানান অবস্থা",
    examples: [
      "The incongruity between the decisions of the parents can ruin a child’s life.",
      "There is a huge sense of incongruity what he says and what he does."
    ],
    aiGenEx: [
      "The incongruity of a clown at a funeral was quite startling to the guests.",
      "The detective noticed an incongruity in the suspect's alibi that didn't match the evidence."
    ]
  },
  {
    word: "inconsequential",
    definition: "lacking worth or importance",
    aiGenBn: "অগুরুত্বপূর্ণ, তুচ্ছ",
    examples: [
      "Worrying about inconsequential tasks will prevent you from doing projects which really matter.",
      "Despite the teacher’s warning, the students would not stop their inconsequential chatter."
    ],
    aiGenEx: [
      "In the grand scheme of things, this minor mistake is completely inconsequential.",
      "Most of the details in the story were inconsequential and didn't affect the main plot."
    ]
  },
  {
    word: "incorporate",
    definition: "make into a whole or make part of a whole",
    aiGenBn: "অন্তর্ভুক্ত করা, একীভূত করা",
    examples: [
      "No definition is complete without incorporating examples.",
      "We can incorporate this information into our report."
    ],
    aiGenEx: [
      "The chef decided to incorporate more fresh herbs into his signature dish.",
      "You should try to incorporate some exercise into your daily routine."
    ]
  },
  {
    word: "indeterminate",
    definition: "not fixed or known in advance",
    aiGenBn: "অনির্দিষ্ট, অস্পষ্ট",
    examples: [
      "Since most people have not responded to the party invitation, we are expecting an indeterminate number of guests.",
      "The judge sentenced the drunk driver to an indeterminate prison stretch of seven to fifteen years."
    ],
    aiGenEx: [
      "The project will take an indeterminate amount of time to complete due to its complexity.",
      "The painting was created by an artist of indeterminate origin."
    ]
  },
  {
    word: "indigence",
    definition: "a state of extreme poverty or destitution",
    aiGenBn: "চরম দারিদ্র্য, নিঃস্বতা",
    examples: [
      "Their indigence appalled him.",
      "The luxury of one class is counterbalanced by the indigence of another."
    ],
    aiGenEx: [
      "The local charity works to provide food and shelter for those living in indigence.",
      "He rose from a childhood of indigence to become one of the wealthiest men in the country."
    ]
  },
  {
    word: "indolent",
    definition: "disinclined to work or exertion",
    aiGenBn: "অলস, কুঁড়ে",
    examples: [
      "The natives were allowed to live the indolent life of the tropics.",
      "Rather than fetch the ball, the indolent dog decided to take a nap."
    ],
    aiGenEx: [
      "The indolent student failed to hand in his assignment on time.",
      "She spent an indolent afternoon lounging by the swimming pool."
    ]
  },
  {
    word: "inert",
    definition: "unable to move or resist motion",
    aiGenBn: "জড়, নিশ্চল, নিষ্ক্রিয়",
    examples: [
      "After being sprayed with the poison, the fly was inert and could not move.",
      "He lay, inert, in his bed."
    ],
    aiGenEx: [
      "Helium is an inert gas, meaning it does not easily react with other chemicals.",
      "The project remained inert for months because of a lack of funding."
    ]
  },
  {
    word: "ingenuous",
    definition: "lacking in sophistication or worldliness",
    aiGenBn: "সরল, নিস্পাপ, অকপট",
    examples: [
      "He seemed too ingenuous for a reporter.",
      "It is ingenuous to suppose that money did not play a part in his decision."
    ],
    aiGenEx: [
      "Her ingenuous nature made her very popular among her classmates.",
      "It was quite ingenuous of him to trust a complete stranger with his life savings."
    ]
  },
  {
    word: "inherent",
    definition: "existing as an essential constituent or characteristic",
    aiGenBn: "সহজাত, মজ্জাগত",
    examples: [
      "Most mothers have an inherent need to protect their children.",
      "There was an inherent weakness in the design."
    ],
    aiGenEx: [
      "There are inherent risks involved in any type of surgery.",
      "The desire for freedom is inherent in every human being."
    ]
  },
  {
    word: "innocuous",
    definition: "not injurious to physical or mental health",
    aiGenBn: "ক্ষতিহীন, নির্দোষ",
    examples: [
      "While you may think bullying is innocuous, it leaves a lasting scar on its victim.",
      "His comment seemed perfectly innocuous."
    ],
    aiGenEx: [
      "The spider looked scary, but the expert assured us it was completely innocuous.",
      "What started as an innocuous joke quickly turned into a serious argument."
    ]
  },
  {
    word: "insensible",
    definition: "barely able to be perceived",
    aiGenBn: "অচেতন, অনুভূতিহীন, অতিসামান্য",
    examples: [
      "We are not insensible of your kindness.",
      "She remained insensible of the dangers that lay ahead."
    ],
    aiGenEx: [
      "The patient was rendered insensible by the anesthesia before the surgery began.",
      "The difference between the two colors was almost insensible to the naked eye."
    ]
  },
  {
    word: "insinuate",
    definition: "suggest in an indirect or covert way; give to understand",
    aiGenBn: "ইঙ্গিত করা, আড়ি পাতা, কৌশলে প্রবেশ করানো",
    examples: [
      "Many dictators use propaganda to insinuate fear among the public.",
      "He tried to insinuate himself into the boss's favor."
    ],
    aiGenEx: [
      "Are you trying to insinuate that I am lying about the incident?",
      "The spy managed to insinuate himself into the high-level meeting."
    ]
  },
  {
    word: "insipid",
    definition: "lacking interest or significance or impact",
    aiGenBn: "বিস্বাদ, নিরস, ম্যাড়ম্যাড়ে",
    examples: [
      "After an hour of insipid conversation, I left.",
      "On the surface she seemed meek, rather insipid."
    ],
    aiGenEx: [
      "The soup was so insipid that I had to add a lot of salt and pepper.",
      "I found the latest romantic comedy to be quite insipid and predictable."
    ]
  },
  {
    word: "insularity",
    definition: "the state of being isolated or detached",
    aiGenBn: "সংকীর্ণতা, বিচ্ছিন্নতা",
    examples: [
      "Part of this is explained by the neighborhood's insularity.",
      "The way they lived then was remarkable for its innocence and its insularity."
    ],
    aiGenEx: [
      "The village's geographic insularity helped to preserve its ancient traditions.",
      "His insularity prevented him from understanding viewpoints different from his own."
    ]
  },
  {
    word: "intractable",
    definition: "difficult to manage or mold",
    aiGenBn: "অদম্য, একগুঁয়ে, দুরারোগ্য",
    examples: [
      "Additional police officers were called to the scene when the crowd became intractable.",
      "We are facing an intractable problem."
    ],
    aiGenEx: [
      "The disease proved to be intractable, resisting all known forms of treatment.",
      "Dealing with an intractable child can be very exhausting for a new teacher."
    ]
  },
  {
    word: "inundate",
    definition: "overwhelm someone with things or people to deal with, or fill or cover with water",
    examples: [
      "We have been inundated with requests for help.",
      "The fields were inundated with flood."
    ],
    aiGenBn: "প্লাবিত করা, অভিভূত করা, ভাসিয়ে দেওয়া",
    aiGenEx: [
      "The customer support center was inundated with calls after the system outage.",
      "During monsoon season, the river often rises to inundate the nearby farmland."
    ]
  },
  {
    word: "inured",
    definition: "made tough by habitual exposure",
    examples: [
      "After living here for years I've become inured to the cold climate.",
      "Doctors become inured to death."
    ],
    aiGenBn: "অভ্যস্ত, সওয়া, সহনশীল হওয়া",
    aiGenEx: [
      "Having worked in the noisy factory for a decade, he was inured to the constant clatter.",
      "Journalists in war zones often become inured to the sight of destruction."
    ]
  },
  {
    word: "invective",
    definition: "abusive language used to express blame or censure",
    examples: [
      "He retorted the invective on her.",
      "A woman had hurled racist invective at the family."
    ],
    aiGenBn: "আক্রমণাত্মক ভাষা, গালিগালাজ, তিরস্কার",
    aiGenEx: [
      "The internet is unfortunately full of anonymous invective directed at public figures.",
      "His speech was devoid of logic and consisted mostly of bitter invective."
    ]
  },
  {
    word: "irresolute",
    definition: "uncertain how to act or proceed",
    examples: [
      "The irresolute spend the most precious moments of life regretting.",
      "He is never irresolute or inactive."
    ],
    aiGenBn: "অস্থিরচিত্ত, দ্বিধাগ্রস্ত, অনিশ্চিত",
    aiGenEx: [
      "Faced with two job offers, she remained irresolute for days, weighing the pros and cons.",
      "An irresolute leader can cause a team to lose momentum during a crisis."
    ]
  },
  {
    word: "laconic",
    definition: "brief and to the point",
    examples: [
      "She had a laconic explanation of the matter.",
      "The manner is laconic yet earnest."
    ],
    aiGenBn: "অল্পকথায় অর্থপূর্ণ, মিতভাষী, সংক্ষিপ্ত",
    aiGenEx: [
      "The cowboy was known for his laconic style, usually answering with just a nod.",
      "In a world of long speeches, his laconic response was refreshing and powerful."
    ]
  },
  {
    word: "lassitude",
    definition: "a feeling of lack of interest or energy",
    examples: [
      "I was overcome by lassitude.",
      "Neither illness nor lassitude prevented him from going on with his work."
    ],
    aiGenBn: "অবসাদ, ক্লান্তি, নিস্তেজ ভাব",
    aiGenEx: [
      "The scorching heat of the desert induced a deep sense of lassitude in the travelers.",
      "After the marathon, she spent the entire Sunday in a state of comfortable lassitude."
    ]
  },
  {
    word: "laud",
    definition: "praise, glorify, or honor",
    examples: [
      "He was lauded for his courage.",
      "They lauded the former president as a hero."
    ],
    aiGenBn: "প্রশংসা করা, গুণগান করা, উচ্চ প্রশংসা",
    aiGenEx: [
      "The breakthrough in cancer research was lauded by scientists worldwide.",
      "The principal gathered the students to laud the prize-winning debate team."
    ]
  },
  {
    word: "lethargic",
    definition: "deficient in alertness or activity",
    examples: [
      "The weather made her listless and lethargic.",
      "He felt too miserable and lethargic to get dressed."
    ],
    aiGenBn: "অলস, অসার, নিস্তেজ",
    aiGenEx: [
      "The flu left him feeling lethargic and unable to concentrate on his studies.",
      "A lethargic market often leads to lower investment and slower economic growth."
    ]
  },
  {
    word: "levee",
    definition: "an embankment built to prevent a river from overflowing",
    examples: [
      "Risks in levee engineering caused by many uncertainty factors are cared about by people.",
      "Look at that long levee of logs."
    ],
    aiGenBn: "নদীর বাঁধ, আল",
    aiGenEx: [
      "The city council approved a plan to reinforce the levee before the rainy season began.",
      "During the flood of 1927, many levees failed, causing catastrophic damage."
    ]
  },
  {
    word: "levity",
    definition: "a manner lacking seriousness",
    examples: [
      "Your levity is unseemly at this time.",
      "His remarks injected a note of levity into the proceedings."
    ],
    aiGenBn: "চপলতা, ছ্যাবলামি, লঘুতা",
    aiGenEx: [
      "He used a bit of levity to lighten the mood during the intense boardroom meeting.",
      "The funeral was a solemn affair, and any sign of levity would have been disrespectful."
    ]
  },
  {
    word: "log",
    definition: "a segment of the trunk of a tree when stripped of branches",
    examples: [
      "He balanced himself on a log.",
      "Tom put another log on the fire."
    ],
    aiGenBn: "কাঠের গুঁড়ি, দিনলিপি বা নথিপত্র",
    aiGenEx: [
      "The woodsman spent the morning chopping logs for the winter fireplace.",
      "Every pilot is required to maintain a detailed flight log for safety audits."
    ]
  },
  {
    word: "loquacious",
    definition: "full of trivial conversation",
    examples: [
      "His loquacious humour infected every one.",
      "Fishes in a public aquarium grow loquacious, oblivious of their lack of privacy."
    ],
    aiGenBn: "বাচাল, বহুভাষী, অতিভাষী",
    aiGenEx: [
      "The loquacious host kept the party-goers entertained with endless anecdotes.",
      "I found myself sitting next to a loquacious passenger who talked for the entire flight."
    ]
  },
  {
    word: "lucid",
    definition: "transparently clear; easily understandable",
    examples: [
      "She gave a clear and lucid account of her plans for the company's future.",
      "You must write in a clear and lucid style."
    ],
    aiGenBn: "স্পষ্ট, সুবোধ্য, স্বচ্ছ",
    aiGenEx: [
      "The instruction manual was so lucid that even a child could assemble the toy.",
      "After the anesthesia wore off, he was finally lucid enough to talk to his family."
    ]
  },
  {
    word: "malleable",
    definition: "capable of being shaped or bent",
    examples: [
      "Knowledge gives you power by making you less malleable to negative influences.",
      "Unfortunately, most teenagers are malleable and give in to peer pressure rather easily."
    ],
    aiGenBn: "নমনীয়, ঘাতসহ, যা পিটিয়ে আকার দেওয়া যায়",
    aiGenEx: [
      "Silver is very malleable, making it a favorite metal for intricate jewelry design.",
      "The clay remained malleable as long as it was kept damp."
    ]
  },
  {
    word: "maverick",
    definition: "someone who exhibits independence in thought and action",
    examples: [
      "My maverick boss has made his fortune by using a selling strategy different from that of his competitors.",
      "He was too much of a maverick ever to hold high office."
    ],
    aiGenBn: "স্বাধীনচেতা, প্রচলিত নিয়ম না মানা ব্যক্তি",
    aiGenEx: [
      "Steve Jobs was often described as a maverick who revolutionized the personal computing industry.",
      "The young maverick refused to follow the traditional party line during the election."
    ]
  },
  {
    word: "mendacious",
    definition: "given to lying",
    examples: [
      "She gave us a mendacious report.",
      "Some of these statements are misleading and some downright mendacious."
    ],
    // Continuing with the pattern...
    aiGenBn: "মিথ্যাবাদী, অসত্য, কাল্পনিক",
    aiGenEx: [
      "The mendacious claims in the advertisement led to a lawsuit for consumer fraud.",
      "He was known for his mendacious nature, so no one believed his excuse for being late."
    ]
  },
  {
    word: "metamorphosis",
    definition: "striking change in appearance or character or circumstances",
    examples: [
      "She had undergone an amazing metamorphosis from awkward schoolgirl to beautiful woman.",
      "The metamorphosis was something to behold."
    ],
    aiGenBn: "রূপান্তর, আমূল পরিবর্তন",
    aiGenEx: [
      "The metamorphosis of a caterpillar into a butterfly is a miracle of nature.",
      "The small startup underwent a metamorphosis, becoming a global tech giant within five years."
    ]
  },
  {
    word: "meticulous",
    definition: "marked by precise accordance with details",
    examples: [
      "This accounting job requires a meticulous person.",
      "The trip involved meticulous planning."
    ],
    aiGenBn: "খুবই সতর্ক, অতি যত্নশীল, খুঁতখুঁতে",
    aiGenEx: [
      "The artist was meticulous, spending hours on a single leaf in her landscape painting.",
      "Meticulous attention to safety protocols is essential in a chemical laboratory."
    ]
  },
  {
    word: "misanthrope",
    definition: "someone who dislikes people in general",
    examples: [
      "After I was kidnapped and held hostage for a week, I became a misanthrope and distrusted everyone.",
      "Living in a crime-filled city will turn anyone into a nervous misanthrope."
    ],
    aiGenBn: "মনুষ্যবিদ্বেষী, মানববিদ্বেষী",
    aiGenEx: [
      "The Scrooge character in 'A Christmas Carol' is a classic example of a bitter misanthrope.",
      "He wasn't antisocial; he was a misanthrope who genuinely believed humans were inherently flawed."
    ]
  },
  {
    word: "mitigate",
    definition: "lessen or to try to lessen the seriousness or extent of",
    examples: [
      "It is unclear how to mitigate the effects of tourism on the island.",
      "Governments should endeavour to mitigate distress."
    ],
    aiGenBn: "উপশম করা, প্রশমিত করা, তীব্রতা কমানো",
    aiGenEx: [
      "The doctor prescribed medicine to mitigate the pain after the surgery.",
      "New laws were introduced to mitigate the environmental impact of industrial waste."
    ]
  },
  {
    word: "mundane",
    definition: "found in the ordinary course of events",
    examples: [
      "It was hard to return to mundane matters after such excitement.",
      "Initially, the work was pretty mundane."
    ],
    aiGenBn: "সাধারণ, জাগতিক, বৈষয়িক",
    aiGenEx: [
      "He escaped the mundane reality of his office job through science fiction novels.",
      "The artist found beauty in mundane objects like rusty spoons and cracked cups."
    ]
  },
  {
    word: "negate",
    definition: "make ineffective by counterbalancing the effect of",
    examples: [
      "They overlook the human ability to negate, which lies at the root of thinking.",
      "These facts negate your theory."
    ],
    aiGenBn: "নাকচ করা, বাতিল করা, অস্বীকার করা",
    aiGenEx: [
      "The high cost of the repairs would negate the profit we made from selling the car.",
      "Her negative attitude tends to negate all the hard work the rest of the team puts in."
    ]
  },
  {
    word: "neophyte",
    definition: "any new participant in some activity",
    examples: [
      "Even the best golfer in the world was once a neophyte at the sport of golf.",
      "The neophyte began to stammer out a reply, but fell silent."
    ],
    aiGenBn: "শিক্ষানবিশ, নবদীক্ষিত",
    aiGenEx: [
      "As a neophyte in the kitchen, he even struggled to boil water properly.",
      "The coding bootcamp is designed to take a neophyte and turn them into a junior developer."
    ]
  },
  {
    word: "officious",
    definition: "intrusive in a meddling or offensive manner",
    examples: [
      "We were tired of being pushed around by officious civil servants.",
      "He's an officious little man and widely disliked in the company."
    ],
    aiGenBn: "অনধিকারচর্চাকারী, গায়ে পড়া, অহেতুক উপদেশদাতা",
    aiGenEx: [
      "The officious security guard insisted on checking everyone's ID twice, even those he knew.",
      "I dislike officious people who try to run other people's lives for them."
    ]
  },
  {
    word: "paragon",
    definition: "a perfect embodiment of a concept",
    examples: [
      "As a paragon of purity, a nun would never dress inappropriately.",
      "It would have taken a paragon of virtue not to feel jealous."
    ],
    aiGenBn: "উৎকর্ষের আদর্শ, শ্রেষ্ঠ উদাহরণ",
    aiGenEx: [
      "The athlete was considered a paragon of discipline and sportsmanship.",
      "This new library is a paragon of sustainable design and modern technology."
    ]
  },
  {
    word: "partisan",
    definition: "prejudiced or in favour of a particular person, cause or thing",
    examples: [
      "The audience was very partisan, and refused to listen to the points she was making in her speech.",
      "He is clearly too partisan to be a referee."
    ],
    aiGenBn: "পক্ষপাতদুষ্ট, অন্ধ সমর্থক, দলকানা",
    aiGenEx: [
      "The newspaper was criticized for its partisan stance on the proposed tax reform.",
      "Partisan politics often prevents meaningful compromise in the legislature."
    ]
  },
  {
    word: "pathological",
    definition: "relating to the study of diseases",
    examples: [
      "My sister is a pathological liar who never tells the truth about anything.",
      "I have got a pathological fear of heights."
    ],
    aiGenBn: "রোগবিদ্যা সংক্রান্ত, অস্বাভাবিক বা অসুস্থ মানসিকতা",
    aiGenEx: [
      "The doctor explained that her constant fatigue had a pathological cause.",
      "He has a pathological obsession with cleanliness that affects his daily life."
    ]
  },
  {
    word: "paucity",
    definition: "an insufficient quantity or number",
    examples: [
      "There is a paucity of information on the ingredients of many cosmetics.",
      "The paucity of fruit was caused by the drought."
    ],
    aiGenBn: "অভাব, সল্পতা, অপ্রতুলতা",
    aiGenEx: [
      "The trial was delayed due to a paucity of evidence against the defendant.",
      "There is a striking paucity of affordable housing in the city center."
    ]
  },
  {
    word: "pedantic",
    definition: "marked by a narrow focus on or display of learning",
    examples: [
      "His lecture was so pedantic and uninteresting.",
      "Some people can be very pedantic about punctuation."
    ],
    aiGenBn: "পাণ্ডিত্য-অভিমানী, অতি-নিয়মনিষ্ঠ, খুঁতখুঁতে",
    aiGenEx: [
      "The professor's pedantic style made it difficult for students to grasp the larger concepts.",
      "He is so pedantic that he will interrupt a conversation just to correct a minor date."
    ]
  },
  {
    word: "penchant",
    definition: "a strong liking",
    examples: [
      "Her penchant for disappearing for days at a time worries her family.",
      "He carried his penchant for secrecy to great lengths."
    ],
    aiGenBn: "বিশেষ রুচি, ঝোঁক, আসক্তি",
    aiGenEx: [
      "She has a penchant for spicy food and adds chili to almost every dish.",
      "His penchant for expensive watches eventually led him into significant debt."
    ]
  },
  {
    word: "penury",
    definition: "a state of extreme poverty or destitution",
    examples: [
      "Hardship and penury wore him out before his time.",
      "He was brought up in penury, without education."
    ],
    aiGenBn: "চরম দারিদ্র্য, নিঃস্ব দশা",
    aiGenEx: [
      "The Great Depression forced many middle-class families into a life of penury.",
      "He rose from childhood penury to become one of the wealthiest men in the country."
    ]
  },
  {
    word: "perennial",
    definition: "lasting an indefinitely long time",
    examples: [
      "I wonder at her perennial youthfulness.",
      "We face the perennial problem of not having enough money."
    ],
    aiGenBn: "চিরস্থায়ী, বহুবর্ষজীবী, নিত্যকালব্যাপী",
    aiGenEx: [
      "The conflict between generation gaps is a perennial theme in family dramas.",
      "Corruption remains a perennial issue that hinders the country's development."
    ]
  },
  {
    word: "perfidious",
    definition: "tending to betray",
    examples: [
      "Your perfidious gossip is malicious and dangerous.",
      "The company was betrayed by its perfidious allies."
    ],
    aiGenBn: "বিশ্বাসঘাতক, বেইমান, প্রবঞ্চক",
    aiGenEx: [
      "In the play, the perfidious villain schemes to steal the kingdom from the rightful king.",
      "She never spoke to him again after his perfidious act of leaking her secrets."
    ]
  },
  {
    word: "perfunctory",
    definition: "hasty and without attention to detail; not thorough",
    examples: [
      "They conducted a perfunctory examination.",
      "He completed the act in a perfunctory manner."
    ],
    aiGenBn: "দায়সারা, অবহেলিতভাবে সম্পন্ন",
    aiGenEx: [
      "He gave the document a perfunctory read and missed the most important clause.",
      "The waitress gave a perfunctory smile as she handed over the bill."
    ]
  },
  {
    word: "permeable",
    definition: "allowing fluids or gases to pass or diffuse through",
    examples: [
      "The thin permeable skin allows moisture to flow into the animal rather than out of it.",
      "The cell membrane is permeable enough to flow necessary fluids in and out of it."
    ],
    aiGenBn: "ভেদ্য, প্রবেশ্য",
    aiGenEx: [
      "Sandy soil is more permeable than clay, allowing water to drain away quickly.",
      "The protective gear is permeable to air but blocks out harmful chemicals."
    ]
  },
  {
    word: "pervasive",
    definition: "spreading or spread throughout",
    examples: [
      "The media’s pervasive coverage of the epidemic has most of the country living in fear.",
      "In many cities, police corruption is a pervasive issue that touches all communities."
    ],
    aiGenBn: "পরিব্যাপ্ত, ব্যাপক, যা সব জায়গায় ছড়িয়ে পড়ে",
    aiGenEx: [
      "The smell of fresh coffee was pervasive throughout the entire house.",
      "Smartphone technology has a pervasive influence on modern social interactions."
    ]
  },
  {
    word: "phlegmatic",
    definition: "showing little emotion",
    examples: [
      "The normally phlegmatic man could not help but yell when he won a gigantic lottery prize.",
      "Even though the clown tried very hard, he could not get the phlegmatic girl to laugh."
    ],
    aiGenBn: "শান্ত, আবেগহীন, নিস্পৃহ",
    aiGenEx: [
      "While others panicked during the earthquake, the phlegmatic captain calmly gave orders.",
      "His phlegmatic response to the insult surprised everyone who expected a fight."
    ]
  },
  {
    word: "piety",
    definition: "righteousness by virtue of being religiously devout",
    examples: [
      "They were drawn to the church not by piety but by curiosity.",
      "In this capacity his sincere piety and amiable character gained him great influence."
    ],
    aiGenBn: "ভক্তি, ধর্মনিষ্ঠা, ধার্মিকতা",
    aiGenEx: [
      "His life was a testament to his piety, spent mostly in prayer and service to the poor.",
      "The monk's quiet piety earned him the respect of the entire village."
    ]
  },
  {
    word: "placate",
    definition: "cause to be more favorably inclined",
    examples: [
      "He never attempts to placate his enemy.",
      "He smiled, trying to placate me."
    ],
    aiGenBn: "শান্ত করা, তুষ্ট করা",
    aiGenEx: [
      "The airline tried to placate the stranded passengers with vouchers for free meals.",
      "She tried to placate her angry father by promising to come home early next time."
    ]
  },
  {
    word: "plasticity",
    definition: "the property of being physically malleable",
    examples: [
      "Nothing better shows the plasticity of her character than the ease with which she adapted herself to this sudden change.",
      "Bending the object into a new shape, the child was surprised by its plasticity."
    ],
    aiGenBn: "নমনীয়তা, গঠনযোগ্যতা",
    aiGenEx: [
      "Neuroplasticity is the brain's remarkable ability to reorganize itself after an injury.",
      "The high plasticity of the heated glass allowed the artist to blow it into a delicate vase."
    ]
  },
  {
    word: "plethora",
    definition: "extreme excess",
    examples: [
      "The plethora of rules and regulations is both contradictory and confusing.",
      "A plethora of new operators will be allowed to enter the market."
    ],
    aiGenBn: "আধিক্য, অতিপ্রাচুর্য",
    aiGenEx: [
      "With a plethora of streaming apps available, it's getting harder to decide what to watch.",
      "The buffet offered a plethora of desserts, from chocolate cakes to fruit tarts."
    ]
  },
  {
    word: "plummet",
    definition: "drop sharply",
    examples: [
      "For some inexplicable reason her spirits seemed to plummet earthwards.",
      "The rope snapped, causing the climber to plummet several hundred feet down the mountain."
    ],
    aiGenBn: "দ্রুত নিচে নামা, খাড়াভাবে পড়ে যাওয়া",
    aiGenEx: [
      "The temperature is expected to plummet to below zero tonight.",
      "Confidence in the government began to plummet after the corruption scandal was revealed."
    ]
  },
  {
    word: "pragmatic",
    definition: "concerned with practical matters",
    examples: [
      "My mother is quite pragmatic in nature and never does anything without rationalizing it first.",
      "We need to adopt a more pragmatic approach."
    ],
    aiGenBn: "বাস্তবধর্মী, বাস্তবসম্মত",
    aiGenEx: [
      "Instead of dreaming about impossible goals, we need a pragmatic plan to save money.",
      "He took a pragmatic view of the situation and decided to compromise for the sake of the project."
    ]
  },
  {
    word: "precarious",
    definition: "not secure; beset with difficulties",
    examples: [
      "It could be a financially precarious solution.",
      "He earned a precarious living as an artist."
    ],
    aiGenBn: "অনিশ্চিত, বিপজ্জনক, ঝুঁকিপূর্ণ",
    aiGenEx: [
      "The ladder felt precarious, shaking every time he took a step upward.",
      "The country's economy is in a precarious state due to the lack of foreign investment."
    ]
  },
  {
    word: "precipitate",
    definition: "bring about abruptly",
    examples: [
      "A slight mistake could precipitate a disaster.",
      "The rising level of unemployment is going to precipitate a huge crowd at the welfare office."
    ],
    aiGenBn: "ত্বরান্বিত করা, হঠাৎ করে ঘটানো",
    aiGenEx: [
      "The assassination of the Archduke helped to precipitate the start of World War I.",
      "Drinking contaminated water can precipitate a sudden outbreak of cholera."
    ]
  },
  {
    word: "precursor",
    definition: "something indicating the approach of something or someone",
    examples: [
      "As I looked up in the sky, I saw a large dark cloud, a precursor of an upcoming storm.",
      "All too often, high blood pressure is a precursor of heart disease."
    ],
    aiGenBn: "অগ্রদূত, পূর্বলক্ষণ",
    aiGenEx: [
      "The invention of the typewriter was a direct precursor to the modern computer keyboard.",
      "A drop in consumer spending is often a precursor to an economic recession."
    ]
  },
  {
    word: "presumptuous",
    definition: "going beyond what is appropriate, permitted, or courteous",
    examples: [
      "It was presumptuous of him to take charge.",
      "It would be presumptuous of me to comment on the matter."
    ],
    aiGenBn: "উদ্ধত, ধৃষ্ট, দুঃসাহসী",
    aiGenEx: [
      "It was presumptuous of the intern to tell the manager how to run the department.",
      "I hope I'm not being presumptuous, but I've already made dinner for us."
    ]
  },
  {
    word: "pristine",
    definition: "immaculately clean and unused",
    examples: [
      "He wasn't about to blemish that pristine record.",
      "The car has been restored to pristine condition."
    ],
    aiGenBn: "আদিম, নিখুঁত, নির্মল",
    aiGenEx: [
      "The snowy mountain peak looked pristine in the morning sunlight.",
      "She takes great pride in keeping her vintage comic book collection in pristine condition."
    ]
  },
  {
    word: "problematic",
    definition: "making great mental demands",
    examples: [
      "Getting everyone there on time might prove problematic.",
      "The future of our business is problematic."
    ],
    aiGenBn: "সন্দেহজনক, সমস্যাসংকুল",
    aiGenEx: [
      "The lack of evidence makes the prosecution's case highly problematic.",
      "The old bridge's structural integrity has become increasingly problematic for heavy traffic."
    ]
  },
  {
    word: "prodigal",
    definition: "recklessly wasteful",
    examples: [
      "If you want to save money for college, you should stop your prodigal spending sprees.",
      "Even when the dictator saw his people dying of hunger, he refused to change his prodigal way of life."
    ],
    aiGenBn: "অপব্যয়ী, অমিতব্যয়ী",
    aiGenEx: [
      "The prodigal heir blew through his entire fortune in less than three years.",
      "Our prodigal consumption of fossil fuels is causing irreversible damage to the planet."
    ]
  },
  {
    word: "propriety",
    definition: "correct behavior",
    examples: [
      "The sensitive matter was handled with great propriety.",
      "She was careful always to behave with propriety."
    ],
    aiGenBn: "শালীনতা, শিষ্টাচার, সঠিকতা",
    aiGenEx: [
      "The judge was concerned about the propriety of the lawyer's relationship with the witness.",
      "He always behaves with the utmost propriety, even in the most casual settings."
    ]
  },
  {
    word: "proscribe",
    definition: "command against",
    examples: [
      "In some cultures surgery is proscribed.",
      "Most states have laws that proscribe texting while driving."
    ],
    aiGenBn: "নিষিদ্ধ করা, সমাজচ্যুত করা",
    aiGenEx: [
      "The law proscribes the use of harmful chemicals in children's toys.",
      "The dictator sought to proscribe any form of political opposition or free press."
    ]
  },
  {
    word: "pungent",
    definition: "strong and sharp to the sense of taste",
    examples: [
      "The taste is bitter and disagreeably pungent.",
      "Her thoughts were interrupted by a pungent odor."
    ],
    aiGenBn: "কটু, তীব্র, ঝাল",
    aiGenEx: [
      "The blue cheese had a very pungent smell that filled the entire kitchen.",
      "His pungent criticism of the government's policy was published in the daily newspaper."
    ]
  },
  {
    word: "qualified",
    definition: "meeting the proper standards and requirements for a task",
    examples: [
      "He qualified as a doctor last year.",
      "She is well qualified but has no relevant work experience."
    ],
    aiGenBn: "যোগ্য, উপযুক্ত, শর্তযুক্ত",
    aiGenEx: [
      "The applicant is highly qualified for the position of senior engineer.",
      "He gave a qualified 'yes' to the proposal, pending the results of the feasibility study."
    ]
  },
  {
    word: "quiescent",
    definition: "being quiet or still or inactive",
    examples: [
      "Ever since the police department hired ten new officers, crime has been rather quiescent in our town.",
      "During the quiescent phase of the lab, we simply observe and note the growth of the cells."
    ],
    aiGenBn: "শান্ত, নিশ্চল, সুপ্ত",
    aiGenEx: [
      "The volcano has been quiescent for centuries, but scientists still monitor it for activity.",
      "In the quiescent hours of the early morning, the city feels like a different world."
    ]
  },
  {
    word: "rarefied",
    definition: "of high moral or intellectual value",
    examples: [
      "Only a couple of audience members were not confused by the scientist’s rarefied concept.",
      "Getting a book published isn't the rarefied literary feat it once was."
    ],
    aiGenBn: "বিরল, উচ্চস্তরের, বিশুদ্ধ",
    aiGenEx: [
      "He lived in the rarefied world of elite academia, far removed from everyday concerns.",
      "At high altitudes, climbers must deal with the challenges of breathing rarefied air."
    ]
  },
  {
    word: "refute",
    definition: "overthrow by argument, evidence, or proof",
    examples: [
      "We can easily refute his argument.",
      "These data do not refute the law of demand."
    ],
    aiGenBn: "খণ্ডন করা, ভুল প্রমাণ করা",
    aiGenEx: [
      "The scientist presented new evidence to refute the long-held theory.",
      "It is difficult to refute the fact that global temperatures are rising."
    ]
  },
  {
    word: "relegate",
    definition: "assign to a lower position",
    examples: [
      "Women tended to be relegated to typing and filing jobs.",
      "He has been relegated to the position of an assistant coach."
    ],
    aiGenBn: "নিম্নপদে নামিয়ে দেওয়া, নির্বাসিত করা",
    aiGenEx: [
      "After the merger, he was relegated to a minor role in the new company.",
      "She felt relegated to the background while her brother received all the attention."
    ]
  },
  {
    word: "reproach",
    definition: "express criticism towards",
    examples: [
      "She is quick to reproach anyone who doesn't live up to her own high standards.",
      "There was mild reproach in his tone."
    ],
    aiGenBn: "তিরস্কার করা, ধিক্কার দেওয়া",
    aiGenEx: [
      "He looked at her with reproach after she forgot his birthday for the third year in a row.",
      "The teacher's reproach was gentle but firm, encouraging the student to try harder."
    ]
  },
  {
    word: "resolution",
    definition: "a decision to do something or to behave in a certain manner",
    examples: [
      "The memory gave her resolution.",
      "The resolution in his face was unmistakable."
    ],
    aiGenBn: "সংকল্প, সমাধান, দৃঢ়তা",
    aiGenEx: [
      "Despite the setbacks, her resolution to finish the project never wavered.",
      "The UN passed a resolution calling for an immediate ceasefire in the region."
    ]
  },
  {
    word: "reticent",
    definition: "reluctant to draw attention to yourself",
    examples: [
      "She is so reticent about her achievements.",
      "Most of the students were reticent about answering questions."
    ],
    aiGenBn: "অল্পভাষী, মিতভাষী, চাপা স্বভাবের",
    aiGenEx: [
      "He is a reticent man who rarely speaks unless he has something important to say.",
      "She was reticent to share her ideas, fearing they would be criticized."
    ]
  },
  {
    word: "reverent",
    definition: "feeling or showing profound respect or veneration",
    examples: [
      "A reverent silence fell over the crowd.",
      "He was brave, reverent, and clean, though perhaps lacking in the trustworthiness department."
    ],
    aiGenBn: "শ্রদ্ধাশীল, ভক্তিপূর্ণ",
    aiGenEx: [
      "The tourists spoke in reverent whispers as they entered the ancient cathedral.",
      "His reverent attitude toward nature was evident in his beautiful landscape paintings."
    ]
  },
  {
    word: "sage",
    definition: "a mentor in spiritual and philosophical topics",
    examples: [
      "When I have questions about my courses, I often seek advice from my sage, my college mentor.",
      "My father was the sage who kept everyone in my family on a straight path by giving us guidance before it was even requested."
    ],
    aiGenBn: "জ্ঞানী ব্যক্তি, মহর্ষি",
    aiGenEx: [
      "The village sage was often consulted on matters of law and morality.",
      "He sought out the advice of a financial sage before making his first major investment."
    ]
  },
  {
    word: "sanction",
    definition: "official permission or approval",
    examples: [
      "The conference gave its official sanction to the change of policy.",
      "We received sanction to proceed with our plans."
    ],
    aiGenBn: "অনুমোদন, দণ্ডাজ্ঞা বা শাস্তি",
    aiGenEx: [
      "The school board refused to sanction the use of the new textbook.",
      "The UN imposed economic sanctions on the country to protest its human rights violations."
    ]
  },
  {
    word: "saturate",
    definition: "infuse or fill completely",
    examples: [
      "Water poured through the hole, saturating the carpet.",
      "Our culture is saturated with television and advertising."
    ],
    aiGenBn: "সম্পৃক্ত করা, সিক্ত করা, কানায় কানায় পূর্ণ করা",
    aiGenEx: [
      "The continuous rain had saturated the soil, making it impossible to plant the garden.",
      "The market is already saturated with similar products, so we need something unique to stand out."
    ]
  },
  {
    word: "secrete",
    definition: "generate and separate from cells or bodily fluids",
    examples: [
      "The pores of your body secrete sweat.",
      "To keep skin moisturized, sebaceous glands secrete oil."
    ],
    aiGenBn: "নিঃসরণ করা, গোপন করে রাখা",
    aiGenEx: [
      "Some insects secrete a sticky substance to trap their prey.",
      "He tried to secrete the stolen money in a hollowed-out book."
    ]
  },
  {
    word: "skeptic",
    definition: "someone who habitually doubts accepted beliefs",
    examples: [
      "She is a skeptic about the dangers of global warming.",
      "I need to see more hard evidence to become less of a skeptic."
    ],
    aiGenBn: "সংশয়বাদী, নাস্তিক",
    aiGenEx: [
      "As a skeptic, he wasn't convinced by the psychic's claims of being able to talk to the dead.",
      "Scientific progress often depends on skeptics who question established theories."
    ]
  },
  {
    word: "solicitous",
    definition: "full of anxiety and concern",
    examples: [
      "He was very solicitous for her safe return.",
      "She was very solicitous for our welfare."
    ],
    aiGenBn: "উদ্বিগ্ন, যত্নবান, অতি আগ্রহী",
    aiGenEx: [
      "The nurse was incredibly solicitous, checking on the patient's comfort every hour.",
      "He was always solicitous about his parents' health, calling them every single day."
    ]
  },
  {
    word: "spectrum",
    definition: "a broad range of related objects, values, or qualities",
    examples: [
      "This is a kind of atomic spectrum.",
      "Beyond the red end of the visible light spectrum is infrared."
    ],
    aiGenBn: "বর্ণালী, পরিসর",
    aiGenEx: [
      "The opinions on the new law range across the entire political spectrum.",
      "A prism breaks white light into its component colors, creating a beautiful spectrum."
    ]
  },
  {
    word: "sporadic",
    definition: "recurring in scattered or unpredictable instances",
    examples: [
      "Her attendance at school was sporadic.",
      "There has been sporadic violence downtown."
    ],
    aiGenBn: "বিক্ষিপ্ত, অনিয়মিত",
    aiGenEx: [
      "The city experienced sporadic power outages throughout the unusually hot summer.",
      "His interest in the hobby was only sporadic, usually lasting for a week and then disappearing for months."
    ]
  },
  {
    word: "stigma",
    definition: "a symbol of disgrace or infamy",
    examples: [
      "There is a social stigma attached to single parenthood.",
      "There is no stigma to being made redundant."
    ],
    aiGenBn: "কলঙ্ক, কলঙ্কচিহ্ন",
    aiGenEx: [
      "We need to work together to remove the social stigma surrounding mental health issues.",
      "In some communities, there is still a heavy stigma attached to vocational training instead of university degrees."
    ]
  },
  {
    word: "substantiate",
    definition: "establish or strengthen as with new evidence or facts",
    examples: [
      "We have evidence to substantiate the allegations against him.",
      "There is little scientific evidence to substantiate the claims."
    ],
    aiGenBn: "প্রমাণ করা, দৃঢ় করা, সপ্রমাণ করা",
    aiGenEx: [
      "The reporter was unable to find any witnesses to substantiate the rumors of government corruption.",
      "Can you substantiate your theory with any experimental data or real-world examples?"
    ]
  },
  {
    word: "supersede",
    definition: "take the place or move into the position of",
    examples: [
      "In time, the features of the smartphone may supersede those of the personal computer.",
      "The federal court decision will supersede the decision of the lower court."
    ],
    aiGenBn: "স্থলাভিষিক্ত করা, রদ করা, সরিয়ে নিজে জায়গা নেওয়া",
    aiGenEx: [
      "Online streaming services have largely superseded traditional cable television in many households.",
      "The new safety regulations will supersede all previous guidelines starting from the first of next month."
    ]
  },
  {
    word: "supposition",
    definition: "the cognitive process of conjecturing",
    examples: [
      "His version of the events is pure supposition.",
      "The police are working on the supposition that he was murdered."
    ],
    aiGenBn: "অনুমান, কল্পনা",
    aiGenEx: [
      "The scientific theory was based on the supposition that light travels at a constant speed in a vacuum.",
      "That he will resign is mere supposition; he hasn't made any official announcement yet."
    ]
  },
  {
    word: "tacit",
    definition: "implied by or inferred from actions or statements",
    examples: [
      "Although no words were spoken, our nods represented our tacit agreement to a cease fire.",
      "In my business, all that is needed for a tacit understanding is a handshake between men."
    ],
    aiGenBn: "মৌন, উহ্য, না বলা সত্য",
    aiGenEx: [
      "By not objecting to the plan, the committee gave its tacit approval to the project's commencement.",
      "There was a tacit agreement among the siblings that they would not discuss their parents' divorce."
    ]
  },
  {
    word: "tangential",
    definition: "of superficial relevance if any",
    examples: [
      "Too much time was spent discussing tangential issues.",
      "The matter you raise is rather tangential to this discussion."
    ],
    aiGenBn: "স্পর্শকীয়, অপ্রাসঙ্গিক",
    aiGenEx: [
      "The professor's lecture was interesting, but he spent too much time on tangential stories that weren't on the exam.",
      "While your point is valid, it is somewhat tangential to the main problem we are trying to solve today."
    ]
  },
  {
    word: "tractable",
    definition: "easily managed",
    examples: [
      "Gold and silver are tractable metals.",
      "This approach helps to make the issues more tractable."
    ],
    aiGenBn: "সহজে বশ করা যায় এমন, নমনীয়, বাধ্য",
    aiGenEx: [
      "The math problem proved much more tractable once the teacher explained the basic formula.",
      "The younger puppies were quite tractable, but the older dog was stubborn and refused to follow commands."
    ]
  },
  {
    word: "transgression",
    definition: "the violation of a law or a duty or moral principle",
    examples: [
      "The judge will decide the penalty for my transgression.",
      "When the banker stole funds from the vault, he made a huge transgression."
    ],
    aiGenBn: "আইন বা নীতি লঙ্ঘন, পাপ",
    aiGenEx: [
      "Forgiveness is possible, but one must first acknowledge their transgression and make amends.",
      "The minor transgression of breaking a school rule led to a weekend of detention for the students."
    ]
  },
  {
    word: "veracious",
    definition: "habitually speaking the truth",
    examples: [
      "He will be veracious only so long as the consequences are not seriously injurious.",
      "After listening to all evidence, the jury found the veracious woman to be truthful and dismissed all charges."
    ],
    aiGenBn: "সত্যবাদী, সঠিক",
    aiGenEx: [
      "We need a veracious account of what happened, not just rumors and secondhand stories.",
      "She is known as a veracious historian who meticulously checks every single fact before publishing her work."
    ]
  },
  {
    word: "verbose",
    definition: "using or containing too many words",
    examples: [
      "His writing is difficult and often verbose.",
      "Legal writing is often unclear and verbose."
    ],
    aiGenBn: "শব্দাড়ম্বরপূর্ণ, বাচাল, শব্দবহুল",
    aiGenEx: [
      "The student's essay was so verbose that it was difficult to find the actual thesis statement hidden among the fluff.",
      "Please try to be less verbose in your emails; our clients prefer brief and direct communication."
    ]
  },
  {
    word: "viable",
    definition: "capable of life or normal growth and development",
    examples: [
      "The committee came forward with one viable solution.",
      "The government wants to encourage viable self-contained rural communities."
    ],
    aiGenBn: "টেকসই, কার্যোপযোগী, জীবনধারণে সক্ষম",
    aiGenEx: [
      "After reviewing the costs, we realized that the expansion project was no longer a viable option for the company.",
      "In the harsh desert environment, only a few species of plants remain viable without regular rainfall."
    ]
  },
  {
    word: "volatile",
    definition: "liable to lead to sudden change or violence",
    examples: [
      "Food and fuel prices are very volatile in a war situation.",
      "Edwards was a dangerously volatile character."
    ],
    aiGenBn: "অস্থির, পরিবর্তনশীল, উবে যায় এমন",
    aiGenEx: [
      "The political situation in the region is highly volatile, with protests breaking out almost every day.",
      "The chemist handled the volatile liquid with extreme care to avoid any accidental explosions."
    ]
  },
  {
    word: "warrant",
    definition: "formal and explicit approval",
    examples: [
      "They issued a warrant for her arrest.",
      "A warrant is out for his arrest/against him."
    ],
    aiGenBn: "গ্রেফতারি পরোয়ানা, ন্যায্যতা প্রতিপন্ন করা, সমর্থন করা",
    aiGenEx: [
      "While the mistake was annoying, it certainly didn't warrant such a furious reaction from the boss.",
      "The police obtained a search warrant before entering the suspect's house to look for evidence."
    ]
  },
  {
    word: "wary",
    definition: "marked by keen caution and watchful prudence",
    examples: [
      "The strange look in his eyes made me wary of accepting his offer.",
      "The police will need to keep awary eye on this area of town."
    ],
    aiGenBn: "সতর্ক, সাবধান",
    aiGenEx: [
      "You should be wary of any emails asking for your bank details or personal passwords.",
      "The cat was wary of the new puppy, watching its every move from the top of the bookshelf."
    ]
  },
  {
    word: "whimsical",
    definition: "determined by chance or impulse rather than by necessity",
    examples: [
      "The whimsical music made me feel like a little kid again.",
      "Much of his writing has a whimsical quality."
    ],
    aiGenBn: "খামখেয়ালী, অদ্ভুত ও মজাদার",
    aiGenEx: [
      "The children's book was filled with whimsical illustrations of flying fish and purple trees.",
      "Her decision to quit her job and move to a remote island seemed whimsical to her more practical friends."
    ]
  }
];




let wordIndex = 0;
const wordShow = document.getElementById("wordShow")
const next = document.getElementById("nextBtn")
const prev = document.getElementById("prevBtn")
const card = document.getElementById("flashCards")
const defin = document.getElementById("dfnShow")
const showSentences = document.getElementById("sentences")
const list = document.getElementById("numberList");
const button = document.querySelector(".dropdown-btn");

for (let i = 1; i <= 194; i += 10) {
    const span = document.createElement("span");
    span.innerText = String(i).padStart(2, "0");
    list.appendChild(span);
  }
list.addEventListener("click", e => {
    if (e.target.tagName === "SPAN") {
      button.innerText = e.target.innerText;
      wordIndex = e.target.innerText -1;
      showE();
    }
  });

showE();

next.addEventListener("click",nextWord)
prev.addEventListener("click",prevWord)
card.addEventListener("click",rotate)


function nextWord(){
    wordIndex ++;
    if (wordIndex>=194){
       wordIndex =194;
    }
    button.innerText = wordIndex + 1;
    showE();
    
}

function prevWord(){
    wordIndex --;
        if(wordIndex <= 0){
        wordIndex = 0;
    }
    button.innerText = wordIndex + 1;
    showE();

}

function rotate(){
    card.classList.toggle("flip");
    console.log("flip added")
}

function showE(){
    wordShow.textContent = `${words[wordIndex].word}`
    defin.innerHTML = `${words[wordIndex].definition}
                          <br>
                          <br>
                          <p class ="aigenbn"> ${words[wordIndex].aiGenBn}</p>`
    showSentences.innerHTML = `
                        <h4>
                        <ul>
                        <li>${words[wordIndex].examples[0]}</li>
                        <li>${words[wordIndex].examples[1]}</li>
                        <br>
                        <li> Ai Generated : 
                        <ol>
                        <li>${words[wordIndex].aiGenEx[0]}</li>
                        <li>${words[wordIndex].aiGenEx[1]}</li>
                        </ol>
                        </ul>
                        `
}


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('Service Worker registered'))
    .catch(err => console.error('Service Worker registration failed:', err));
}

