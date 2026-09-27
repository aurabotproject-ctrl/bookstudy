/* ============================================================
   WONDER BOOK CLUB — BOOK CLUB APP DATA (PRINT ENGINE)
   Content data only, in the schema shared by every book-study app's
   printable Student Workbook / Teacher Pack engine (book.js + book.css).
   Source content: wonder-data.js + wonder-content.js (the app's own data),
   restructured here into the workbook/teacher-pack pagination schema.
   ============================================================ */

const MARKING_GUIDE = [
  {
    "code": "R1",
    "label": "Ideas",
    "strand": "Listening, Reading & Viewing",
    "curriculum": "Show a developing understanding of ideas within, across, and beyond texts.",
    "expect": "Explains a character's feelings and the story's big ideas (ordinary vs. extraordinary, kindness, belonging) and supports them with events from the book, making links beyond the text to self or the world.",
    "kid": "I can explain a big idea from the story and back it up with something that happened in the book.",
    "ask": "Does the student explain WHY something matters to a character — not just WHAT happened?",
    "na": "Retells events from the story but cannot yet explain what they mean. Answers are mostly “what happened”.",
    "wt": "Names a feeling or idea (e.g. ‘August feels nervous’) with a general reason, but the link to the text is vague or missing.",
    "ach": "Explains a character's feelings or a big idea and supports it with a specific event from the book. Makes a link beyond the text (to self or the world).",
    "wtSample": "August feels ordinary because he says so at the start of the book.",
    "exemplar": "August says he's “not an ordinary kid” but feels ordinary inside — that shows how people can judge you by how you look before they know how you actually feel. It's like when my little cousin was scared of my uncle's wheelchair, until she got to know him and forgot all about it.",
    "evidence": "Comprehension & inference answers, Friday quizzes, go-away reflections"
  },
  {
    "code": "R2",
    "label": "Structure & Language",
    "strand": "Listening, Reading & Viewing",
    "curriculum": "Show a developing understanding of how texts are shaped for different purposes and audiences, and how language features are used for effect.",
    "expect": "Notices the author's choices — multiple narrators, chapter titles, the “summer table” and precepts as symbols — and explains how they affect the reader.",
    "kid": "I can notice how the author wrote the book and explain how it makes the reader think or feel.",
    "ask": "Does the student name a writer's choice AND say what effect it has on the reader?",
    "na": "Comments only on the plot; does not yet notice how the book is written.",
    "wt": "Notices a feature (e.g. ‘the book has different narrators’) but cannot explain its effect.",
    "ach": "Names a writer's choice and explains its effect on the reader, using an example from the book.",
    "wtSample": "The book changes from August to Via and it's a bit confusing.",
    "exemplar": "When Via starts narrating, we suddenly see things August can't see — like how much of the family's attention goes to him. If the whole book stayed in August's voice we'd never know Via felt like a “peephole” in her own family, so switching narrators makes the reader feel for everyone, not just August.",
    "evidence": "Narrator-change discussions (Weeks 3, 4, 6, 7, 8), inference answers, class discussion"
  },
  {
    "code": "R3",
    "label": "Processes & Strategies",
    "strand": "Listening, Reading & Viewing",
    "curriculum": "Integrate sources of information, processes, and strategies with developing confidence to identify, form, and express ideas.",
    "expect": "Uses reading strategies — predicting, questioning, making connections, summarising — and links earlier chapters to later ones (cause and effect across the book).",
    "kid": "I can use reading strategies and link what happened earlier in the book to what happens later.",
    "ask": "Can the student connect an earlier event to a later one without being told?",
    "na": "Relies on the teacher to explain the story; does not yet connect chapters or parts.",
    "wt": "Uses a strategy when prompted (e.g. predicts when asked) and makes simple links between parts of the book.",
    "ach": "Independently uses strategies and explains how an earlier event causes or sets up a later one.",
    "wtSample": "Miranda lied and then she felt bad about it.",
    "exemplar": "In Part Seven, Miranda's camp lie makes her feel more alone, not less — that's why she finally comes clean at Via's play. I predicted she'd have to tell the truth eventually, because keeping a secret that big never seems to work out for anyone in this book, like when Jack tried to hide how he really felt about August.",
    "evidence": "Predictions, cause-and-effect questions, weekly quizzes (review questions)"
  },
  {
    "code": "R4",
    "label": "Ideas",
    "strand": "Speaking, Writing & Presenting",
    "curriculum": "Select, form, and communicate ideas on a range of topics.",
    "expect": "Writes and shares clear, developed ideas about the book — opinions, explanations and reflections — with supporting detail.",
    "kid": "I can share a clear idea or opinion and give reasons to support it.",
    "ask": "Is there a clear idea PLUS at least two reasons or details?",
    "na": "Answers are one word or unclear; ideas are not explained.",
    "wt": "Shares a clear idea but gives little detail or only one reason.",
    "ach": "Communicates a clear opinion or idea and develops it with at least two reasons or pieces of evidence.",
    "wtSample": "I think Jack did the right thing because he said sorry.",
    "exemplar": "I think Jack did the right thing switching tables. First, it showed August that Jack actually meant his apology, not just said it. Second, Jack knew he'd lose his old friend group over it, and did it anyway — that's what makes an apology real instead of just words.",
    "evidence": "Go-away reflections, journal projects, Week 9 whole-book reflection"
  },
  {
    "code": "R5",
    "label": "Structure & Language",
    "strand": "Speaking, Writing & Presenting",
    "curriculum": "Use language features appropriately, showing a developing understanding of their effects; organise texts using a range of structures.",
    "expect": "Chooses the right structure and language for the task — a diary entry in a character's voice, a persuasive poster, a comic, a script.",
    "kid": "I can choose the right kind of writing and words for the job (like a diary, a poster or a script).",
    "ask": "Does the writing look and sound like the form it's meant to be, in that character's voice?",
    "na": "Writing does not match the task; little attempt at structure or voice.",
    "wt": "Attempts the right form (e.g. writes a diary entry) but the voice or structure is inconsistent.",
    "ach": "Uses a suitable structure and language features for the purpose and audience (e.g. a nervous, hopeful voice for August's diary; persuasive language for a Choose Kind poster).",
    "wtSample": "Dear diary, tomorrow is my first day and I am scared and nervous about school.",
    "exemplar": "DIARY — THE NIGHT BEFORE. My hands won't stop fidgeting with this stupid lock. Everyone at Beecher Prep is going to see my face before they hear one word I say. Dad made his joke about Mr Tushman again. I laughed, but only because if I didn't, I might cry instead.",
    "evidence": "Poster, comic, drama & journal projects; Week 10 campaign / anthology"
  },
  {
    "code": "R6",
    "label": "Processes & Strategies",
    "strand": "Speaking, Writing & Presenting",
    "curriculum": "Integrate sources of information, processes, and strategies with developing confidence to identify, form, and express ideas.",
    "expect": "Plans, drafts, revises and shares work, using feedback to improve it, including completing tasks confidently under quiz/assessment conditions.",
    "kid": "I can plan my work, improve it using feedback, and complete tasks confidently.",
    "ach": "Independently plans, drafts and revises, uses feedback (e.g. Glow & Grow) to improve the work, and completes quizzes/tasks with confidence.",
    "ask": "Can you see a plan AND a change made because of feedback?",
    "na": "Needs step-by-step support to start; work is not planned or revised; struggles to complete quizzes independently.",
    "wt": "Plans and drafts with support; makes small changes when prompted; completes most quiz questions with some support.",
    "wtSample": "I finished my poster. My partner said to add more colour so I did.",
    "exemplar": "My precept poster had three drafts. My partner's ‘grow’ said my slogan was hard to read from far away, so I made it bigger and changed the colour to gold on navy. Now you can read it from the back of the room.",
    "evidence": "Project plans, Week 10 planning lesson, Glow & Grow feedback, Friday quizzes"
  },
  {
    "code": "R7",
    "label": "Relating to Others",
    "strand": "Key Competency",
    "curriculum": "Relating to others: listen actively, recognise different points of view, negotiate and share ideas.",
    "expect": "Listens to and builds on others' ideas during group reading and projects, and takes turns fairly.",
    "kid": "I can listen to my group, take turns, and build on other people's ideas.",
    "ask": "Does the student respond to what others say, not just wait for their own turn?",
    "na": "Rarely listens or takes part in group reading; may interrupt or opt out.",
    "wt": "Takes part and takes turns when reminded; sometimes responds to others' ideas.",
    "ach": "Listens actively, takes turns, and builds on or respectfully challenges others' ideas.",
    "wtSample": "(Observed) Reads their turn when reminded; agrees with others but doesn't add anything new.",
    "exemplar": "(Observed) “I don't think Julian's actually mean, I think he just doesn't know what to say to August” — she then asked a quieter group member what they thought, and changed her mind a little after hearing their answer.",
    "evidence": "Tuesday & Thursday group reads (turn tracker), drama projects — teacher observation"
  },
  {
    "code": "R8",
    "label": "Thinking",
    "strand": "Key Competency",
    "curriculum": "Thinking: use creative, critical and metacognitive processes to make sense of information, experiences and ideas.",
    "expect": "Makes inferences — works out what characters feel and why — using clues from the text, and reasons about characters' motives and choices.",
    "kid": "I can use clues in the story to work out things the author doesn't tell me directly.",
    "ask": "Has the student worked something out AND pointed to the clue?",
    "na": "Only answers questions where the answer is stated directly in the text.",
    "wt": "Makes an inference with prompting but struggles to explain the clue.",
    "ach": "Independently infers feelings or motives and points to the clue in the text that shows it.",
    "wtSample": "August is scared about Halloween because everyone might see his face.",
    "exemplar": "The book doesn't say August is happiest on Halloween, but he wears a costume that hides his face completely — that's the clue that this is the one day he gets to feel unnoticed, which shows me how much he wants to just be seen as ordinary the rest of the year.",
    "evidence": "Inference questions (Question 2 every day), quizzes, predictions"
  },
  {
    "code": "R9",
    "label": "Participating & Contributing",
    "strand": "Key Competency",
    "curriculum": "Participating and contributing: be actively involved in groups and communities, contributing and taking responsibility.",
    "expect": "Contributes ideas in class discussions and projects, writes a genuine class precept, and takes responsibility for a role in group work.",
    "kid": "I can share my ideas and do my part in group work.",
    "ask": "Does the student offer ideas and take on a job without being asked?",
    "na": "Rarely contributes to discussions, precept-writing or group projects.",
    "wt": "Contributes when asked; completes their part of a group task with support.",
    "ach": "Offers ideas without being asked, takes responsibility for a role, and encourages others.",
    "wtSample": "(Observed) Shares a precept idea when called on; completes their part of the poster.",
    "exemplar": "(Observed) In the Week 10 drama group, Aroha volunteered to write the script, made sure the shy group member got a speaking line, and offered her own precept in the reflection circle without being asked.",
    "evidence": "Class discussions, precept-writing, project work, Week 10 group project & gallery walk"
  },
  {
    "code": "R10",
    "label": "Choose Kind: Diversity, Inclusion, Empathy & Respect",
    "strand": "Values",
    "curriculum": "Values: diversity, community and participation, respect, and care for others and the environment.",
    "expect": "Connects the book's values — choosing kind over being right, seeing past appearances, standing up for others — to their own life and actions.",
    "kid": "I can connect the book's message about choosing kind to my own life.",
    "ask": "Has the student linked a value from the book to something real in their own life?",
    "na": "Cannot yet name the book's values or connect them to themselves.",
    "wt": "Names a value (e.g. ‘be kind’) when asked, with a simple or general link.",
    "ach": "Explains a value from the book and connects it to a real experience or action of their own.",
    "wtSample": "The book teaches us to be nice to everyone.",
    "exemplar": "Jack learned that choosing kind sometimes costs you something — he lost his old friend group when he switched tables. When a new kid joined our class and nobody sat with her, I remembered Jack and sat with her at lunch, even though my friends were at a different table.",
    "evidence": "Go-away reflections, precept-writing, Week 10 “Precepts for Our Class” page, reflection circle"
  }
];

const CURRICULUM = {
  "heading": "Curriculum Alignment — Level 3–4 English, Years 5–6, NZ Curriculum",
  "lrv": [
    "Ideas — Show understanding of ideas within, across, and beyond texts.",
    "Structure and Language — Show understanding of how texts are shaped for different purposes and audiences.",
    "Processes and Strategies — Integrate sources of information, processes, and strategies confidently to identify, form, and express ideas."
  ],
  "swp": [
    "Ideas — Select, form, and communicate ideas on a range of topics.",
    "Structure and Language — Show understanding of language features, using them appropriately.",
    "Processes and Strategies — Select and use processes and strategies to communicate confidently."
  ],
  "keyCompetencies": "Relating to Others, Thinking, Managing Self, Participating & Contributing",
  "values": "Diversity, inclusion, empathy, respect — supporting the NZC vision of confident, connected, actively involved, lifelong learners.",
  "crossCurricular": "Health & PE — Relationships and Hauora (wellbeing), especially around the “Choose Kind” theme."
};

const WEEKS = [
  {
    "num": 1,
    "title": "Meeting Auggie",
    "chapters": "Ordinary → Locks",
    "LI": "We can identify how a character's perspective shapes how a story is told, and infer a character's feelings from what they say and don't say.",
    "SC": "I can describe August's feelings about starting school and give evidence from the text; I can make a prediction based on clues in the story.",
    "rubricTags": [
      "R1",
      "R7",
      "R8"
    ],
    "days": {
      "mon": {
        "chapters": "Ordinary → Christopher's House",
        "subtitle": "August introduces himself; “ordinary” vs. extraordinary",
        "leadIn": "If a genie granted you one wish, what would it be — and why? Do you think everyone's answer would be different?",
        "comp1": "Why does August say he's “not an ordinary kid” but also feels ordinary inside?",
        "comp2": "What does this tell us about the difference between how people see us and how we see ourselves?",
        "goAway": "Write 3 sentences about something people might misjudge about you before they get to know you."
      },
      "tue": {
        "chapters": "Driving → Nice Mrs. Garcia",
        "subtitle": "The school tour is arranged; Mum's nerves",
        "leadIn": "How would you feel meeting a brand-new school and brand-new people for the very first time, aged 10?",
        "comp1": "Why is August's mum being so protective before the school tour?",
        "comp2": "What clues tell us Mr. Tushman is trying to make August feel comfortable?",
        "goAway": "Describe one adult in your life who makes you feel safe when you're nervous, and how they do it."
      },
      "wed": {
        "chapters": "Jack Will, Julian, and Charlotte → The Deal",
        "subtitle": "Meeting Jack, Julian and Charlotte; “the deal”",
        "leadIn": "If you had to show a new student around your school, what three things would you point out first?",
        "comp1": "What is “the deal” Mr. Tushman makes, and why might that be a smart plan — or an unfair one?",
        "comp2": "Compare Jack, Julian, and Charlotte's first reactions to August — what's different about each?",
        "goAway": "Predict which of the three kids will become August's real friend. Give one clue from the text to back up your guess."
      },
      "thu": {
        "chapters": "Home → Locks",
        "subtitle": "The night before school; the combination lock",
        "leadIn": "Think of your own first day at a new place (school, club, team). What worried you most?",
        "comp1": "Why might August feel both excited and terrified on the night before school?",
        "comp2": "What does the “combination lock” scene reveal about how nervous he is?",
        "goAway": "Write a short diary entry as August, the night before his first day."
      }
    },
    "projects": [
      {
        "type": "poster",
        "title": "Poster",
        "brief": "Design a “Welcome to Beecher Prep” poster from Mr. Tushman's office, including at least 3 things a new student should know."
      },
      {
        "type": "comic",
        "title": "Comic strip",
        "brief": "6-panel comic showing August's morning routine before his first day of school."
      },
      {
        "type": "drama",
        "title": "Drama scene",
        "brief": "Act out the car ride to school (Driving) in groups of 3 — August, Mum, Dad — showing the mixed emotions."
      },
      {
        "type": "journal",
        "title": "Journal reflection",
        "brief": "Write a letter from August to his future self, to be read on his last day of Year 5."
      }
    ],
    "quiz": [
      {
        "q": "What does August say makes him “ordinary”?",
        "answer": "He does ordinary kid things: eats ice cream, rides his bike, plays video games",
        "type": "short"
      },
      {
        "q": "How many surgeries has August had by the story's start?",
        "answer": "27",
        "type": "short"
      },
      {
        "q": "Why has August never been to a real school before?",
        "answer": "His surgeries and his parents' choice to homeschool him",
        "type": "short"
      },
      {
        "q": "Who is Christopher?",
        "answer": "August's childhood best friend, who moved away",
        "type": "short"
      },
      {
        "q": "What game did August and Christopher love playing together?",
        "answer": "Star Wars, with action figures/lightsabers",
        "type": "short"
      },
      {
        "q": "What school is August about to start at?",
        "answer": "Beecher Prep",
        "type": "short"
      },
      {
        "q": "What joke does August's dad make before the school visit?",
        "answer": "About Mr. Tushman's funny surname over the loudspeaker.",
        "type": "short"
      },
      {
        "q": "Who works the front desk and everyone calls “Mrs. G”?",
        "answer": "Mrs. Garcia",
        "type": "short"
      },
      {
        "q": "Name the three students Mr. Tushman picks to show August around.",
        "answer": "Jack Will, Julian, and Charlotte.",
        "type": "short"
      },
      {
        "q": "What is “the deal” Mr. Tushman makes with the three students?",
        "answer": "He asks them to be welcoming, show August around, and be kind to him.",
        "type": "short"
      },
      {
        "q": "Which of the three seems most reluctant or awkward about meeting August?",
        "answer": "Accept reasoned answers — e.g. Julian seems standoffish.",
        "type": "short"
      },
      {
        "q": "What does August worry about most on the night before school starts?",
        "answer": "Fitting in, being stared at, whether kids will be nice.",
        "type": "short"
      },
      {
        "q": "What object does August struggle with the night before school (mentioned in “Locks”)?",
        "answer": "His combination lock",
        "type": "short"
      },
      {
        "q": "Inference: Why might August's parents have waited until Year 5 (age 10) to send him to school?",
        "answer": "Accept reasoned answers: enough surgeries were done, they wanted to protect him, they felt he was ready.",
        "type": "short"
      },
      {
        "q": "Inference: What does it suggest about August's character that he still makes jokes with his dad despite being nervous?",
        "answer": "Accept reasoned answers: good sense of humour, resilience, close family bond.",
        "type": "short"
      },
      {
        "q": "Vocabulary: What does “petrified” mean, as August uses it about starting school?",
        "answer": "Extremely frightened",
        "type": "short"
      },
      {
        "q": "True or False: August has an older sister named Via.",
        "answer": "True",
        "type": "tf"
      },
      {
        "q": "Why do you think the author chose to start the book from August's own point of view?",
        "answer": "Accept reasoned answers: to build empathy, to show his inner ordinary self before others judge his appearance.",
        "type": "short"
      },
      {
        "q": "In your own words, what is “The Deal” really asking the three students to do, and why might that be hard for a Year 5 student?",
        "answer": "Open answer — mark for understanding of peer pressure and social risk.",
        "type": "short"
      },
      {
        "q": "Reflection: In your own words, describe how August might be feeling as he walks into Beecher Prep for the very first time.",
        "answer": "Open answer — mark for empathy and use of textual evidence.",
        "type": "short"
      }
    ]
  },
  {
    "num": 2,
    "title": "Choose Kind",
    "chapters": "First-Day Jitters → Jack Will",
    "LI": "We can infer how setting and social dynamics (like seating at lunch) reveal character relationships.",
    "SC": "I can explain why August finds lunchtime difficult and identify the message behind Mr. Browne's precepts.",
    "rubricTags": [
      "R2",
      "R9",
      "R10"
    ],
    "days": {
      "mon": {
        "chapters": "First-Day Jitters → Around the Room",
        "subtitle": "First day; the classroom stares",
        "leadIn": "Describe a time you walked into a room and felt like everyone was looking at you.",
        "comp1": "What does August notice first when he walks into the classroom?",
        "comp2": "Why do you think the author includes so much detail about people's reactions/stares?",
        "goAway": "Write about a rule you'd want a whole school to follow, and why."
      },
      "tue": {
        "chapters": "Lamb to the Slaughter → Choose Kind",
        "subtitle": "Mr Browne's precepts; “choose kind”",
        "leadIn": "What do you think the saying “choose kind” means in your own words?",
        "comp1": "What is Mr. Browne's “precept,” and why does he ask the class to write their own each month?",
        "comp2": "Why might “Lamb to the Slaughter” be a scary chapter title for August's first day?",
        "goAway": "Write your own class precept for this month — a short saying about how to treat others."
      },
      "wed": {
        "chapters": "Lunch → The Summer Table",
        "subtitle": "Lunch; choosing a table to sit at",
        "leadIn": "Think about your own school's lunchroom. How do people usually choose where to sit?",
        "comp1": "Why is choosing where to sit at lunch such a big deal for August?",
        "comp2": "What does “The Summer Table” symbolise?",
        "goAway": "Describe a time you sat somewhere new (a table, a bus seat, a mat spot) and how it felt."
      },
      "thu": {
        "chapters": "One to Ten → Jack Will (the chapter)",
        "subtitle": "Rating the day 1–10; Jack Will becomes a friend",
        "leadIn": "On a scale of 1–10, how “bad” do you think a day can really get before it's actually okay again?",
        "comp1": "Why does August rate his days on a scale of 1 to 10?",
        "comp2": "What does his friendship with Jack Will seem to be turning into?",
        "goAway": "Rate your best and worst school day ever (1–10) and explain why."
      }
    },
    "projects": [
      {
        "type": "poster",
        "title": "Poster",
        "brief": "Design an illustrated poster of Mr. Browne's precepts wall — include the “Choose Kind” precept plus 2 more the class invents."
      },
      {
        "type": "comic",
        "title": "Comic strip",
        "brief": "Show August's 1–10 rating system as a comic, with one panel for a “1” day and one for a “10” day."
      },
      {
        "type": "drama",
        "title": "Drama scene",
        "brief": "Role-play the lunchroom scene — practise showing “unspoken rules” through body language, no dialogue needed."
      },
      {
        "type": "journal",
        "title": "Journal reflection",
        "brief": "Write about a time you chose to be kind even though it was hard, or a time you wish you had."
      }
    ],
    "quiz": [
      {
        "q": "What does August notice as he first enters his classroom?",
        "answer": "People staring/reacting to his appearance",
        "type": "short"
      },
      {
        "q": "Who is the English teacher who introduces “precepts”?",
        "answer": "Mr. Browne",
        "type": "short"
      },
      {
        "q": "What is a “precept,” according to Mr. Browne?",
        "answer": "A rule or motto to live by; a guiding thought.",
        "type": "short"
      },
      {
        "q": "What is the class's September precept?",
        "answer": "“When given the choice between being right or being kind, choose kind.” (accept close paraphrase)",
        "type": "short"
      },
      {
        "q": "Where does August end up sitting at lunch on his first day?",
        "answer": "Alone, or near “the summer table”",
        "type": "short"
      },
      {
        "q": "What is “the summer table”?",
        "answer": "A table of kids August met/knew from a summer program, where he feels safer sitting.",
        "type": "short"
      },
      {
        "q": "What rating system does August use to describe his days?",
        "answer": "A scale from 1 to 10",
        "type": "short"
      },
      {
        "q": "Which student does August start to become real friends with?",
        "answer": "Jack Will",
        "type": "short"
      },
      {
        "q": "How does Jack behave differently towards August compared to Julian?",
        "answer": "Jack is friendlier and more genuine; Julian is colder and more awkward.",
        "type": "short"
      },
      {
        "q": "Inference: Why might August avoid sitting in the middle of the lunchroom?",
        "answer": "Accept reasoned answers: fear of stares, wants to feel less exposed/safe.",
        "type": "short"
      },
      {
        "q": "Inference: What does the precept “choose kind” suggest about the difference between being right and being kind?",
        "answer": "Accept reasoned answers: sometimes kindness matters more than winning an argument.",
        "type": "short"
      },
      {
        "q": "Vocabulary: What does “lamb to the slaughter” mean as an expression?",
        "answer": "Someone going innocently into a dangerous or difficult situation.",
        "type": "short"
      },
      {
        "q": "True or False: August immediately makes lots of friends on his first day.",
        "answer": "False",
        "type": "tf"
      },
      {
        "q": "Why do you think the author includes Mr. Browne's precepts throughout the whole book?",
        "answer": "Accept reasoned answers: to reinforce the book's kindness theme across every part/narrator.",
        "type": "short"
      },
      {
        "q": "What does it mean that August “rates” his days like a diary?",
        "answer": "He reflects on and processes how each day felt overall.",
        "type": "short"
      },
      {
        "q": "Short answer: Why might starting the term with “Choose Kind” as a class rule set the tone for the whole year?",
        "answer": "Open answer.",
        "type": "short"
      },
      {
        "q": "What small kindness does Jack Will show August that stands out this week?",
        "answer": "Accept reasoned answers, e.g. sitting with him, chatting normally, treating him like any other kid.",
        "type": "short"
      },
      {
        "q": "Inference: Why might August feel it's safer to “rate” his day than to talk about his feelings directly?",
        "answer": "Accept reasoned answer: easier/safer way to process emotion indirectly.",
        "type": "short"
      },
      {
        "q": "What is one thing that makes August's first day a “good” moment despite the hard parts?",
        "answer": "Accept reasoned answers: Jack being friendly, a positive interaction.",
        "type": "short"
      },
      {
        "q": "In your own words, describe the “unwritten rules” of a school lunchroom that August has to learn fast.",
        "answer": "Open answer — mark for insight into social dynamics.",
        "type": "short"
      }
    ]
  },
  {
    "num": 3,
    "title": "Halloween",
    "chapters": "Wake Me Up When September Ends → A Tour of the Galaxy",
    "LI": "We can compare how the same events look different depending on whose point of view we're reading from.",
    "SC": "I can explain why the author switches narrators to Via, and identify at least one new fact we learn about August from her perspective.",
    "rubricTags": [
      "R1",
      "R2",
      "R8"
    ],
    "days": {
      "mon": {
        "chapters": "Wake Me Up when September Ends → Mr. Browne's October Precept",
        "subtitle": "Halloween approaches; the perfect hiding costume",
        "leadIn": "What's your favourite thing about Halloween, and why do you think people love dressing up?",
        "comp1": "Why might Halloween be extra complicated for August compared to other kids?",
        "comp2": "Why might Halloween be extra complicated for August compared to other kids?",
        "goAway": "If you designed the “perfect” Halloween costume for yourself, what would it be and why?"
      },
      "tue": {
        "chapters": "Apples → Halloween",
        "subtitle": "The Bleeding Scream costume; overhearing Jack",
        "leadIn": "Have you ever overheard something you weren't meant to hear? How did it make you feel?",
        "comp1": "What does August overhear on Halloween, and how does it change how he feels about Jack Will?",
        "comp2": "Why is this such a turning point in the story?",
        "goAway": "Write about a time someone said something (kindly or unkindly) that you weren't meant to hear."
      },
      "wed": {
        "chapters": "School Pictures → The Bleeding Scream",
        "subtitle": "Coping after Halloween; trust is broken",
        "leadIn": "How do you think it feels to see your own photo when you're not happy with how you look?",
        "comp1": "How does August cope after what happened on Halloween?",
        "comp2": "What does “The Bleeding Scream” costume incident reveal about how people react to August when they don't realise he's nearby?",
        "goAway": "Write a short message of encouragement you'd send August after this tough week."
      },
      "thu": {
        "chapters": "Names (end Part One) → A Tour of the Galaxy (start Part Two: Via)",
        "subtitle": "Part One ends; Via begins narrating",
        "leadIn": "Whose voice do you think we'll hear from next, now that Part One is over? Why might the author want to tell part of the story through someone else's eyes?",
        "comp1": "What new information do we learn about August's family from Via's opening chapter?",
        "comp2": "How does Via describe her relationship with her brother?",
        "goAway": "Write 3 things you think Via might find hard about being August's older sister — things August might not even notice."
      }
    },
    "projects": [
      {
        "type": "poster",
        "title": "Poster",
        "brief": "Design a “Wanted: Kindness” Halloween-themed poster warning against the kind of unkindness Jack's friends showed."
      },
      {
        "type": "comic",
        "title": "Comic strip",
        "brief": "Illustrate the moment August overhears the conversation on Halloween — show his costume, the setting, and his changing expression."
      },
      {
        "type": "drama",
        "title": "Drama scene",
        "brief": "Perform a short scene from Via's point of view, showing a moment where she has to explain her brother to someone new."
      },
      {
        "type": "journal",
        "title": "Journal reflection",
        "brief": "Write a diary entry as Via, describing what it's like to be “the sister of the kid everyone stares at.”"
      }
    ],
    "quiz": [
      {
        "q": "What does August wear for Halloween that lets him feel “invisible”?",
        "answer": "A costume/mask (e.g. the Bleeding Scream costume) that hides his face.",
        "type": "short"
      },
      {
        "q": "What does August overhear on Halloween that upsets him deeply?",
        "answer": "Jack Will saying unkind things about him/his appearance to Julian's group, not realising August could hear.",
        "type": "short"
      },
      {
        "q": "Who is August upset with after Halloween?",
        "answer": "Jack Will",
        "type": "short"
      },
      {
        "q": "What happens to August and Jack's friendship after this?",
        "answer": "It breaks down — August stops trusting/talking to Jack.",
        "type": "short"
      },
      {
        "q": "What is Mr. Browne's October precept about?",
        "answer": "Accept reasoned paraphrase relating to attitude/effort/how you treat others.",
        "type": "short"
      },
      {
        "q": "Who narrates Part Two of the book?",
        "answer": "Via (August's older sister)",
        "type": "short"
      },
      {
        "q": "What is the title of Via's opening chapter?",
        "answer": "“A Tour of the Galaxy.”",
        "type": "short"
      },
      {
        "q": "According to Via, how has her family's attention often been focused?",
        "answer": "Mostly on August/his medical needs.",
        "type": "short"
      },
      {
        "q": "What does Via say she sometimes feels compared to August?",
        "answer": "Overlooked/invisible/less important (accept reasoned answer).",
        "type": "short"
      },
      {
        "q": "Inference: Why might August choose a costume that completely hides his face for Halloween?",
        "answer": "Accept reasoned answers: wants to feel normal/unnoticed for once.",
        "type": "short"
      },
      {
        "q": "Inference: What does the timing of the Halloween conversation (August in costume, unrecognised) reveal about how differently Jack acts around August vs. when he thinks August can't hear?",
        "answer": "Accept reasoned answer: possible discomfort/pressure to fit in with the “cool” group.",
        "type": "short"
      },
      {
        "q": "Vocabulary: What does it mean to feel “invisible,” as August does in his costume?",
        "answer": "Unnoticed/unseen, not stared at.",
        "type": "short"
      },
      {
        "q": "True or False: August enjoys Halloween because it's one of the only days people don't react to his face.",
        "answer": "True",
        "type": "tf"
      },
      {
        "q": "Why might the author choose to reveal Jack's unkind comment right after a rare “good” day for August?",
        "answer": "Accept reasoned answer: heightens the emotional impact/contrast.",
        "type": "short"
      },
      {
        "q": "What new perspective on family life do we get once Via starts narrating?",
        "answer": "Accept reasoned answers: her own struggles, jealousy, love for August.",
        "type": "short"
      },
      {
        "q": "Short answer: Why do you think Via hasn't told her parents how she really feels about always coming second?",
        "answer": "Open answer.",
        "type": "short"
      },
      {
        "q": "What is the “Punnett Square” she later studies in science hinting at, thematically?",
        "answer": "Genetics — why August looks the way he does (can be flagged as coming up).",
        "type": "short"
      },
      {
        "q": "Inference: How might August's trust in people change after the Halloween incident?",
        "answer": "Accept reasoned answers: more guarded, less likely to trust new friendships easily.",
        "type": "short"
      },
      {
        "q": "What does it show about August's character that he still goes trick-or-treating despite what happened?",
        "answer": "Accept reasoned answers: resilience, still wants to be a normal kid.",
        "type": "short"
      },
      {
        "q": "In your own words, compare August's and Via's biggest worries this week.",
        "answer": "Open answer — mark for comparison quality.",
        "type": "short"
      }
    ]
  },
  {
    "num": 4,
    "title": "Via's World",
    "chapters": "Before August → Weird Kids",
    "LI": "We can identify cause and effect in a story, and explain how a character's actions affect others around them.",
    "SC": "I can explain what “The Plague” refers to and why it affects how other kids treat August's friends.",
    "rubricTags": [
      "R4",
      "R7",
      "R10"
    ],
    "days": {
      "mon": {
        "chapters": "Before August → August Through the Peephole",
        "subtitle": "Via's “peephole” memory of before August",
        "leadIn": "Do you think it's possible to love someone and still sometimes feel frustrated by how much attention they get? Why?",
        "comp1": "What do we learn about Via's feelings before August was born?",
        "comp2": "How does the “peephole” image work as a metaphor for how Via sees her family?",
        "goAway": "Write about someone in your life who takes up “a lot of space” in a good way, and how that makes you feel."
      },
      "tue": {
        "chapters": "High School → After School",
        "subtitle": "Via starts high school; a fresh start",
        "leadIn": "What are you most looking forward to (or nervous about) when you eventually go to high school/intermediate?",
        "comp1": "How is Via's high school experience different from August's at Beecher?",
        "comp2": "Why might Via choose to keep her old friendships from before secret in some ways?",
        "goAway": "Write about a “fresh start” you'd like to have and what you'd do differently."
      },
      "wed": {
        "chapters": "The Padawan Bites the Dust → Breakfast",
        "subtitle": "The Padawan nickname; breakfast tension",
        "leadIn": "What's a nickname you have (or would want) and what does it mean?",
        "comp1": "Why is the “Padawan” nickname significant to August and Jack's friendship?",
        "comp2": "What tension is building at the family breakfast table?",
        "goAway": "Write about a nickname that means something special to you or a friend."
      },
      "thu": {
        "chapters": "Genetics 101 → Out with the Old (end Part Two) + Weird Kids (start Part Three: Summer)",
        "subtitle": "Genetics class; Summer chooses to sit with August",
        "leadIn": "We are about to meet a brand-new narrator called Summer. What do you predict her connection to August might be?",
        "comp1": "What does Via learn in science class that connects to her own family?",
        "comp2": "Why does Summer choose to sit with August — what does this tell us about her character?",
        "goAway": "Write about a time you chose to sit/stand with someone who was on their own, or a time someone did that for you."
      }
    },
    "projects": [
      {
        "type": "poster",
        "title": "Poster",
        "brief": "Create a “Meet the Narrators” poster mapping every narrator so far (August, Via, Summer) with one fact and one feeling for each."
      },
      {
        "type": "comic",
        "title": "Comic strip",
        "brief": "Illustrate Via's “peephole” memory of watching her family focus on August as a baby."
      },
      {
        "type": "drama",
        "title": "Drama scene",
        "brief": "Act out the breakfast table scene, showing the difference between how August and Via each want to talk about their day."
      },
      {
        "type": "journal",
        "title": "Journal reflection",
        "brief": "Write from Summer's point of view — why she decides to sit with August at lunch on the very first day."
      }
    ],
    "quiz": [
      {
        "q": "What nickname does Jack give August, referencing Star Wars?",
        "answer": "“Padawan.”",
        "type": "short"
      },
      {
        "q": "What subject does Via study that links to her family?",
        "answer": "Science/genetics (“Genetics 101” and “The Punnett Square”).",
        "type": "short"
      },
      {
        "q": "What does Via discover or reflect on in her genetics class?",
        "answer": "Accept reasoned answer: the science behind genetic conditions like August's.",
        "type": "short"
      },
      {
        "q": "What does Via decide about her old best friend Miranda around this time?",
        "answer": "She has drifted apart from Miranda/feels their friendship has changed.",
        "type": "short"
      },
      {
        "q": "Who is the third narrator introduced in Part Three?",
        "answer": "Summer",
        "type": "short"
      },
      {
        "q": "What is the name of Part Three?",
        "answer": "“Summer”",
        "type": "short"
      },
      {
        "q": "Why does Summer choose to sit with August at the “summer table”?",
        "answer": "Because they share the same first name as the table; she chooses to be kind and genuine, not out of pity.",
        "type": "short"
      },
      {
        "q": "What does “The Plague” refer to?",
        "answer": "Kids avoiding/not wanting to touch anything August has touched, treating him as if he's contagious.",
        "type": "short"
      },
      {
        "q": "Who does August believe started “The Plague” rumour?",
        "answer": "Julian (or his group)",
        "type": "short"
      },
      {
        "q": "How does August feel about “The Plague”?",
        "answer": "Hurt, upset, humiliated.",
        "type": "short"
      },
      {
        "q": "Inference: Why might Via feel it's easier to start high school where nobody knows about August?",
        "answer": "Accept reasoned answer: wants her own identity, a break from being “August's sister.”",
        "type": "short"
      },
      {
        "q": "Inference: What does the fact that Summer isn't scared to be August's friend suggest about her character compared to other students?",
        "answer": "Accept reasoned answer: genuine, doesn't follow the crowd, empathetic.",
        "type": "short"
      },
      {
        "q": "Vocabulary: What does “contagious” mean, and why is it an unfair word to use about August?",
        "answer": "Able to spread disease by contact; unfair because his condition isn't contagious at all.",
        "type": "short"
      },
      {
        "q": "True or False: Summer is friends with August because a teacher told her to be.",
        "answer": "False",
        "type": "tf"
      },
      {
        "q": "Why do you think the author gave Via her own narrated section instead of only telling the story through August?",
        "answer": "Accept reasoned answer: shows the wider impact on the whole family, builds empathy.",
        "type": "short"
      },
      {
        "q": "Short answer: Explain in your own words what “The Plague” reveals about how rumours spread in a school.",
        "answer": "Open answer.",
        "type": "short"
      },
      {
        "q": "What does the title “Out with the Old” suggest is happening in Via's life?",
        "answer": "Accept reasoned answer: changing friendships, moving on from her old life/friends.",
        "type": "short"
      },
      {
        "q": "Inference: Why might August not tell his parents about “The Plague” straight away?",
        "answer": "Accept reasoned answer: doesn't want to worry them, wants to handle it himself, embarrassment.",
        "type": "short"
      },
      {
        "q": "Compare Jack Will and Summer's kindness towards August — how are they different?",
        "answer": "Open answer: Jack wavers under peer pressure, Summer stays consistently kind.",
        "type": "short"
      },
      {
        "q": "In your own words, why might real friendship (like Summer's) matter more to August than popularity?",
        "answer": "Open answer.",
        "type": "short"
      }
    ]
  },
  {
    "num": 5,
    "title": "Jack's Choice",
    "chapters": "The Call → The War",
    "LI": "We can explore how guilt and regret motivate a character's choices.",
    "SC": "I can explain why Jack feels guilty and describe what he does to try to make things right.",
    "rubricTags": [
      "R5",
      "R8",
      "R9"
    ],
    "days": {
      "mon": {
        "chapters": "The Call → Four Things",
        "subtitle": "Jack's mum makes him call August to apologise",
        "leadIn": "Have you ever done or said something you instantly regretted? What did you do next?",
        "comp1": "Why does Jack's mum make him call August?",
        "comp2": "What does Jack decide to do differently after Halloween?",
        "goAway": "Write about a time you had to apologise for something. How did you feel before and after?"
      },
      "tue": {
        "chapters": "Ex-Friends → Fortune Favors the Bold",
        "subtitle": "Jack fights Julian; ex-friends and consequences",
        "leadIn": "What would you do if your friends started treating your best friend badly — would you speak up?",
        "comp1": "What happens between Jack and Julian's group now that Jack has changed sides?",
        "comp2": "Why does Jack think “fortune favours the bold”?",
        "goAway": "Write about a time you had to choose between fitting in and doing what you believed was right."
      },
      "wed": {
        "chapters": "Private School → Detention",
        "subtitle": "Detention; was it worth it?",
        "leadIn": "What do you think it takes real courage to stand up for someone, even if it costs you something?",
        "comp1": "What happens between Jack and Julian that leads to detention?",
        "comp2": "Why might Jack feel it was worth it?",
        "goAway": "Write about a moment of real courage you've seen (in real life, a book, or a movie)."
      },
      "thu": {
        "chapters": "Season's Greetings → The War",
        "subtitle": "The “war” between friend groups; texts and sides",
        "leadIn": "What does it feel like when a whole friend group takes sides against you?",
        "comp1": "How does the “war” between groups of kids affect August and Jack at school?",
        "comp2": "What role does social media/texting play in this part of the story?",
        "goAway": "Write about the effect that unkind messages (online or on paper) can have, even if “it was just a joke.”"
      }
    },
    "projects": [
      {
        "type": "poster",
        "title": "Poster",
        "brief": "Design a “Fortune Favours the Bold” poster celebrating an act of courage/standing up for someone."
      },
      {
        "type": "comic",
        "title": "Comic strip",
        "brief": "Illustrate the moment Jack defends August against Julian — show the build-up, the action, and the consequence."
      },
      {
        "type": "drama",
        "title": "Drama scene",
        "brief": "Role-play “The Call” — Jack on the phone trying to apologise to August, showing awkwardness turning into honesty."
      },
      {
        "type": "journal",
        "title": "Journal reflection",
        "brief": "Write a letter from Jack to August, explaining why he acted the way he did and how he plans to make it right."
      }
    ],
    "quiz": [
      {
        "q": "Who narrates Part Four?",
        "answer": "Jack (Jack Will)",
        "type": "short"
      },
      {
        "q": "Why does Jack's mum make him call August?",
        "answer": "Because she finds out he was unkind about August and wants him to make it right/apologise.",
        "type": "short"
      },
      {
        "q": "How does Jack feel after Halloween, according to his own narration?",
        "answer": "Guilty, ashamed, regretful.",
        "type": "short"
      },
      {
        "q": "What does Jack decide to do once school starts again?",
        "answer": "Be a real friend to August again, stand up for him.",
        "type": "short"
      },
      {
        "q": "Who does Jack get into a physical fight with, defending August?",
        "answer": "Julian",
        "type": "short"
      },
      {
        "q": "What punishment does Jack get for the fight?",
        "answer": "Detention (suspension is also possible — accept reasoned answer).",
        "type": "short"
      },
      {
        "q": "What does “ex-friends” refer to in this part of the book?",
        "answer": "Jack and Julian's group turning against each other/Jack losing his old friends.",
        "type": "short"
      },
      {
        "q": "What does Julian's group start doing to Jack once he defends August?",
        "answer": "Excluding him, treating him as an outsider too.",
        "type": "short"
      },
      {
        "q": "What technology is used to spread unkindness in this part of the story?",
        "answer": "Texts/emails/Facebook messages.",
        "type": "short"
      },
      {
        "q": "Inference: Why might Jack feel that standing up for August was “worth it” even though he lost friends?",
        "answer": "Accept reasoned answer: values real friendship/doing the right thing over popularity.",
        "type": "short"
      },
      {
        "q": "Inference: What does Jack's willingness to fight for August suggest has changed in how he sees him?",
        "answer": "Accept reasoned answer: sees him as a true friend, not just an assignment/“the deal.”",
        "type": "short"
      },
      {
        "q": "Vocabulary: What does the saying “fortune favours the bold” mean?",
        "answer": "Being brave/taking risks often leads to good outcomes.",
        "type": "short"
      },
      {
        "q": "True or False: Jack apologises to August and their friendship is fully repaired straight away with no tension at all.",
        "answer": "False",
        "type": "tf"
      },
      {
        "q": "Why do you think the author chose to show this part of the story from Jack's perspective rather than August's?",
        "answer": "Accept reasoned answer: shows guilt/social pressure from the other side, builds empathy for Jack too.",
        "type": "short"
      },
      {
        "q": "Short answer: In your own words, why is it sometimes harder to apologise to a friend than to a stranger?",
        "answer": "Open answer.",
        "type": "short"
      },
      {
        "q": "What does “the war” suggest about how divided the students have become?",
        "answer": "Accept reasoned answer: friend groups are split into opposing sides.",
        "type": "short"
      },
      {
        "q": "Inference: What risk does Jack take by choosing to be August's friend publicly again?",
        "answer": "Accept reasoned answer: losing popularity/his old friend group.",
        "type": "short"
      },
      {
        "q": "What does Jack's mum's involvement suggest about the role adults can play in helping kids make things right?",
        "answer": "Accept reasoned answer: guidance, encouragement to take responsibility.",
        "type": "short"
      },
      {
        "q": "Compare how Jack acts around Julian's group versus how he acts with August one-on-one.",
        "answer": "Open answer.",
        "type": "short"
      },
      {
        "q": "In your own words, what lesson might Jack have learned by the end of this part?",
        "answer": "Open answer — mark for insight (e.g. real friendship matters more than fitting in).",
        "type": "short"
      }
    ]
  },
  {
    "num": 6,
    "title": "Switching Tables",
    "chapters": "Switching Tables → The Universe",
    "LI": "We can recognise how small choices (like who you sit with) can carry big social meaning.",
    "SC": "I can explain the significance of “switching tables” and describe a new character's role in the story.",
    "rubricTags": [
      "R2",
      "R6",
      "R9"
    ],
    "days": {
      "mon": {
        "chapters": "Switching Tables → Why I Didn't Sit with August the (end Part Four)",
        "subtitle": "Jack switches tables at lunch",
        "leadIn": "Why do you think where someone sits at lunch can matter so much in a school?",
        "comp1": "What does “switching tables” represent for Jack and August's friendship?",
        "comp2": "Why might it take courage to do something so small?",
        "goAway": "Write about a small action that actually made a big difference to someone."
      },
      "tue": {
        "chapters": "Olivia's Brother → Our Town",
        "subtitle": "Justin meets Via's family; Our Town rehearsals begin",
        "leadIn": "If you were about to meet your friend's sibling for the first time, what would you want to know about them beforehand?",
        "comp1": "Who is Justin, and how is he connected to Via?",
        "comp2": "What is “Our Town” and why does it matter to this part of the story?",
        "goAway": "Write about someone you've met through a friend or family member who became important to you."
      },
      "wed": {
        "chapters": "Ladybug → The Bus Stop",
        "subtitle": "The Ladybug memory; two worlds intersect",
        "leadIn": "What's something small and ordinary that has ended up being one of your happiest memories?",
        "comp1": "What does the “Ladybug” moment reveal about Via and Justin's relationship?",
        "comp2": "How does August's world intersect with Via's here?",
        "goAway": "Describe a small, ordinary moment that turned into a happy memory for you."
      },
      "thu": {
        "chapters": "Rehearsal → The Universe (end Part Five)",
        "subtitle": "Rehearsal nerves; Part Five ends",
        "leadIn": "Have you ever been part of a performance (school play, sports game, concert)? How did it feel leading up to it?",
        "comp1": "What play is Via rehearsing for, and why might it matter that August will be watching?",
        "comp2": "What does Justin come to understand about August by the end of this part?",
        "goAway": "Write about a time you were nervous before a performance or big moment — what helped you get through it?"
      }
    },
    "projects": [
      {
        "type": "poster",
        "title": "Poster",
        "brief": "Design a “Save the Date” poster for Via's school play, “Our Town.”"
      },
      {
        "type": "comic",
        "title": "Comic strip",
        "brief": "Illustrate Jack switching tables to sit with August — show the reactions of everyone around them."
      },
      {
        "type": "drama",
        "title": "Drama scene",
        "brief": "Perform a short scene from “Our Town” style theatre — simple, everyday dialogue between two characters."
      },
      {
        "type": "journal",
        "title": "Journal reflection",
        "brief": "Write as Justin, describing his first impressions of meeting August, Via's little brother."
      }
    ],
    "quiz": [
      {
        "q": "What big, small action does Jack do that surprises everyone at lunch?",
        "answer": "He switches tables to sit with August.",
        "type": "short"
      },
      {
        "q": "Who narrates Part Five?",
        "answer": "Justin",
        "type": "short"
      },
      {
        "q": "Who is Justin in relation to Via?",
        "answer": "Her boyfriend",
        "type": "short"
      },
      {
        "q": "What play is Via performing in?",
        "answer": "“Our Town.”",
        "type": "short"
      },
      {
        "q": "What does Justin start to notice about August as he gets to know the family?",
        "answer": "Accept reasoned answer: how ordinary/lovable August is once you know him, not just his appearance.",
        "type": "short"
      },
      {
        "q": "Where does the chapter “The Bus Stop” take place, and what happens there?",
        "answer": "A bus stop scene involving Justin/Via (accept reasoned detail — a small meaningful moment).",
        "type": "short"
      },
      {
        "q": "What is “Ladybug” a reference to?",
        "answer": "A tender/nostalgic memory or nickname moment between Via and Justin (accept reasoned paraphrase).",
        "type": "short"
      },
      {
        "q": "What does Justin come to understand by the end of Part Five?",
        "answer": "Accept reasoned answer: a deeper appreciation/understanding of August and Via's family life.",
        "type": "short"
      },
      {
        "q": "Inference: Why might Jack switching tables mean more than just “sitting somewhere different”?",
        "answer": "Accept reasoned answer: a public statement of loyalty and friendship.",
        "type": "short"
      },
      {
        "q": "Inference: Why might the author introduce Justin's outside perspective at this point in the story?",
        "answer": "Accept reasoned answer: shows how the family looks to someone new, reinforces the “choose kind” theme from a fresh angle.",
        "type": "short"
      },
      {
        "q": "Vocabulary: What does it mean to have “loyalty” to a friend, as Jack shows here?",
        "answer": "Being faithful/supportive, standing by someone.",
        "type": "short"
      },
      {
        "q": "True or False: Justin has known August's family for many years before this part of the book.",
        "answer": "False",
        "type": "tf"
      },
      {
        "q": "Why do you think Via chose to perform in a play at this point in the story?",
        "answer": "Accept reasoned answer: a chance to shine on her own, separate from being “August's sister.”",
        "type": "short"
      },
      {
        "q": "Short answer: In your own words, explain why “switching tables” is used as this chapter's title instead of something bigger.",
        "answer": "Open answer — small acts can have big meaning.",
        "type": "short"
      },
      {
        "q": "What risk might Jack still be taking, even now, by sitting with August?",
        "answer": "Accept reasoned answer: social judgement from former friends.",
        "type": "short"
      },
      {
        "q": "Inference: How might August feel, watching Via succeed in something that's entirely her own?",
        "answer": "Accept reasoned answer: proud, happy for her.",
        "type": "short"
      },
      {
        "q": "What does the title “Our Town” suggest about the play's themes (community, ordinary life)?",
        "answer": "Accept reasoned answer: connects to the book's themes of ordinary/extraordinary and community.",
        "type": "short"
      },
      {
        "q": "Compare how Justin sees August with how strangers at school often react to him.",
        "answer": "Open answer.",
        "type": "short"
      },
      {
        "q": "Why might it matter to the story that we now have several different narrators?",
        "answer": "Open answer: shows multiple perspectives, builds a fuller picture of events.",
        "type": "short"
      },
      {
        "q": "In your own words, what has changed about August's friendships since the start of the book?",
        "answer": "Open answer.",
        "type": "short"
      }
    ]
  },
  {
    "num": 7,
    "title": "Growing Up",
    "chapters": "North Pole → The Ending",
    "LI": "We can identify how family relationships change and deepen over the course of a story.",
    "SC": "I can explain what Via's “secret” is and describe how August reacts to change within his family.",
    "rubricTags": [
      "R1",
      "R4",
      "R10"
    ],
    "days": {
      "mon": {
        "chapters": "North Pole → Lobot",
        "subtitle": "North Pole traditions; things start to change",
        "leadIn": "What's a family tradition you have, and what would it feel like if it suddenly changed?",
        "comp1": "What does “North Pole” refer to in the family's traditions?",
        "comp2": "Why might August feel uneasy about things changing?",
        "goAway": "Write about a family tradition that means a lot to you."
      },
      "tue": {
        "chapters": "Hearing Brightly → My Cave",
        "subtitle": "Hearing Brightly; August's private “cave”",
        "leadIn": "Do you have a “cave” — a place you go to feel calm or think? Describe it.",
        "comp1": "What does the “Hearing Brightly” incident reveal about August's confidence/friendships now?",
        "comp2": "What does August's “cave” symbolise?",
        "goAway": "Draw or describe your own personal “cave” — your calm space and why it matters to you."
      },
      "wed": {
        "chapters": "Goodbye → Heaven",
        "subtitle": "Daisy dies; the family grieves together",
        "leadIn": "How do people usually cope with losing something or someone important to them (a pet, a person, a stage of life)?",
        "comp1": "What loss does August experience in this section?",
        "comp2": "How does he process his grief?",
        "goAway": "Write a kind message to someone who has experienced a loss."
      },
      "thu": {
        "chapters": "Understudy → The Ending (end Part Six)",
        "subtitle": "August becomes Via's understudy; “The Ending”",
        "leadIn": "Would you rather be the star of a show or the “understudy” who's ready just in case? Why?",
        "comp1": "What role does August end up playing in Via's school play, and why does this matter so much?",
        "comp2": "What does “The Ending” of Part Six suggest is coming next?",
        "goAway": "Write about a time you stepped up when someone unexpectedly needed you."
      }
    },
    "projects": [
      {
        "type": "poster",
        "title": "Poster",
        "brief": "Design a “Memory Wall” poster celebrating the family tradition mentioned in “North Pole.”"
      },
      {
        "type": "comic",
        "title": "Comic strip",
        "brief": "Illustrate August's “cave” — his safe, calm space — as a comic showing what he does there."
      },
      {
        "type": "drama",
        "title": "Drama scene",
        "brief": "Perform the “Understudy” moment, where August unexpectedly plays a role in Via's play."
      },
      {
        "type": "journal",
        "title": "Journal reflection",
        "brief": "Write about someone or something you have said goodbye to, and what you learned from it."
      }
    ],
    "quiz": [
      {
        "q": "Who narrates Part Six?",
        "answer": "August",
        "type": "short"
      },
      {
        "q": "What does “North Pole” refer to for August's family?",
        "answer": "A family Christmas/holiday tradition.",
        "type": "short"
      },
      {
        "q": "What incident happens in “Hearing Brightly”?",
        "answer": "Accept reasoned answer relating to August's hearing aids/an overheard comment or sound-related event.",
        "type": "short"
      },
      {
        "q": "What is August's “cave”?",
        "answer": "A quiet, safe space he retreats to (e.g. under a treehouse or a private spot).",
        "type": "short"
      },
      {
        "q": "What does August lose in “Goodbye”?",
        "answer": "His dog, Daisy.",
        "type": "short"
      },
      {
        "q": "How does August cope with this loss?",
        "answer": "Accept reasoned answer: grief, comfort from family, memories.",
        "type": "short"
      },
      {
        "q": "What does “Daisy's Toys” chapter deal with?",
        "answer": "Sorting through/remembering the pet's belongings after her death.",
        "type": "short"
      },
      {
        "q": "What surprising role does August end up playing related to Via's play?",
        "answer": "He becomes the understudy/steps in for a role.",
        "type": "short"
      },
      {
        "q": "Why is it significant that August gets involved in Via's play?",
        "answer": "Accept reasoned answer: shows him embracing new experiences, family support, growing confidence.",
        "type": "short"
      },
      {
        "q": "Inference: Why might August's “cave” be an important detail to include in the story?",
        "answer": "Accept reasoned answer: shows he still needs private space to process being different/overwhelmed.",
        "type": "short"
      },
      {
        "q": "Inference: How might losing Daisy affect August differently than it affects the rest of the family?",
        "answer": "Accept reasoned answer, open-ended.",
        "type": "short"
      },
      {
        "q": "Vocabulary: What does “understudy” mean in theatre?",
        "answer": "A person who learns a role in case the main actor cannot perform.",
        "type": "short"
      },
      {
        "q": "True or False: August refuses to get involved in Via's school play at all.",
        "answer": "False",
        "type": "tf"
      },
      {
        "q": "Why do you think the author placed a family loss (Daisy) so close to a moment of growth (the play)?",
        "answer": "Accept reasoned answer: contrast of sadness and hope/growth.",
        "type": "short"
      },
      {
        "q": "Short answer: In your own words, why might “having a cave” (a private safe space) be healthy for anyone, not just August?",
        "answer": "Open answer.",
        "type": "short"
      },
      {
        "q": "What does the chapter title “The Ending” hint about the direction of the story?",
        "answer": "Accept reasoned answer: nearing a turning point/climax.",
        "type": "short"
      },
      {
        "q": "Inference: How has August's confidence changed since Week 1 of this unit?",
        "answer": "Open answer — encourage comparison across the term.",
        "type": "short"
      },
      {
        "q": "Compare August's family traditions with your own — what's similar, what's different?",
        "answer": "Open answer.",
        "type": "short"
      },
      {
        "q": "Why might it matter that the reader sees this loss and recovery from August's own point of view rather than someone else's?",
        "answer": "Open answer.",
        "type": "short"
      },
      {
        "q": "Predict: What do you think Part Seven (narrated by Miranda) will reveal, based on what you know so far?",
        "answer": "Open predictive answer.",
        "type": "short"
      }
    ]
  },
  {
    "num": 8,
    "title": "Miranda's Secret",
    "chapters": "Camp Lies → Packing",
    "LI": "We can analyse why a character might tell a lie, and predict the consequences of that choice.",
    "SC": "I can explain Miranda's “camp lie” and describe how the setting of the nature retreat builds tension.",
    "rubricTags": [
      "R3",
      "R6",
      "R10"
    ],
    "days": {
      "mon": {
        "chapters": "Camp Lies → What I Miss Most",
        "subtitle": "Miranda's camp lie; what she misses most",
        "leadIn": "Why do people sometimes tell small lies to seem more interesting or important?",
        "comp1": "Who is Miranda, and what lie does she tell at camp?",
        "comp2": "What does she say she misses most, and why is that surprising?",
        "goAway": "Write about a time you (or someone you know) told a small lie and what happened afterwards."
      },
      "tue": {
        "chapters": "School → Extraordinary, but No One There to See",
        "subtitle": "Miranda and Via drift apart; unnoticed achievements",
        "leadIn": "Have you ever felt like you did something great but nobody was there to notice?",
        "comp1": "How has Miranda's friendship with Via changed?",
        "comp2": "Why does the chapter title suggest something “extraordinary” went unnoticed?",
        "goAway": "Write about a personal achievement that felt extraordinary to you, even if barely anyone saw it."
      },
      "wed": {
        "chapters": "The Performance → After the Show (end Part Seven)",
        "subtitle": "Via's performance; Miranda comes clean",
        "leadIn": "What do you think it means to finally be honest with someone after keeping a secret for a long time?",
        "comp1": "What happens during Via's performance?",
        "comp2": "How does Miranda's arc conclude?",
        "goAway": "Write about the value of being honest, even when it's hard."
      },
      "thu": {
        "chapters": "The Fifth-Grade Nature Retreat → Packing (start Part Eight: August)",
        "subtitle": "Packing for the Fifth-Grade Nature Retreat",
        "leadIn": "If you were going on a school camp for a week, what would you be most excited or nervous about?",
        "comp1": "What is the Nature Retreat, and why is it a big deal for August?",
        "comp2": "What does his packing list tell us about how he's feeling?",
        "goAway": "Make a packing list for your ideal school camp, and explain your top 3 must-haves."
      }
    },
    "projects": [
      {
        "type": "poster",
        "title": "Poster",
        "brief": "Design an honesty campaign poster: “The Truth About Little Lies,” inspired by Miranda's story."
      },
      {
        "type": "comic",
        "title": "Comic strip",
        "brief": "Illustrate Miranda's “camp lie” moment and its consequences."
      },
      {
        "type": "drama",
        "title": "Drama scene",
        "brief": "Role-play a conversation where a character decides to finally tell the truth after keeping a secret."
      },
      {
        "type": "journal",
        "title": "Journal reflection",
        "brief": "Write your own “packing list and worries” diary entry as if you were August, about to leave for the Nature Retreat."
      }
    ],
    "quiz": [
      {
        "q": "Who narrates Part Seven?",
        "answer": "Miranda",
        "type": "short"
      },
      {
        "q": "What lie does Miranda tell at summer camp?",
        "answer": "She pretends August is her brother / exaggerates her connection to the family (accept reasoned paraphrase).",
        "type": "short"
      },
      {
        "q": "Why might Miranda have told this lie?",
        "answer": "Accept reasoned answer: to seem more interesting, to escape her own unhappy home life.",
        "type": "short"
      },
      {
        "q": "What does Miranda say she misses most?",
        "answer": "Accept reasoned answer: her old friendship with Via/being close to the Pullman family.",
        "type": "short"
      },
      {
        "q": "How has Miranda and Via's friendship changed by this point?",
        "answer": "They have drifted apart.",
        "type": "short"
      },
      {
        "q": "What performance does Via take part in that Miranda attends?",
        "answer": "“Our Town,” the school play.",
        "type": "short"
      },
      {
        "q": "What does Miranda do at/after the performance?",
        "answer": "Accept reasoned answer: reconnects with Via, comes clean, reflects.",
        "type": "short"
      },
      {
        "q": "What is the “Fifth-Grade Nature Retreat”?",
        "answer": "A school camping trip for the fifth grade.",
        "type": "short"
      },
      {
        "q": "Why might this retreat be a significant/nerve-wracking event for August specifically?",
        "answer": "Accept reasoned answer: away from home, new environment, meeting new/other-school kids.",
        "type": "short"
      },
      {
        "q": "What does August pack, and what might this reveal about him?",
        "answer": "Accept reasoned answer, e.g. comfort items, showing nervousness/preparedness.",
        "type": "short"
      },
      {
        "q": "Inference: Why does Miranda's lie eventually make her feel worse rather than better?",
        "answer": "Accept reasoned answer: guilt, isolation, not being true to herself.",
        "type": "short"
      },
      {
        "q": "Inference: What might “Extraordinary, but No One There to See” suggest about how Miranda feels about her own life?",
        "answer": "Accept reasoned answer: feeling unseen/unappreciated.",
        "type": "short"
      },
      {
        "q": "Vocabulary: What does it mean to feel “extraordinary”?",
        "answer": "Remarkable, beyond what is usual.",
        "type": "short"
      },
      {
        "q": "True or False: Miranda's home life is shown to be simple and happy.",
        "answer": "False",
        "type": "tf"
      },
      {
        "q": "Why do you think the author included Miranda's perspective, even though she's not part of August's immediate family?",
        "answer": "Accept reasoned answer: shows how August's story touches people outside his inner circle.",
        "type": "short"
      },
      {
        "q": "Short answer: In your own words, why might telling the truth about something eventually feel like a relief?",
        "answer": "Open answer.",
        "type": "short"
      },
      {
        "q": "Predict: Based on the retreat setting and camp themes so far, what kind of event do you think might happen next?",
        "answer": "Open predictive answer.",
        "type": "short"
      },
      {
        "q": "Inference: Why might going on a retreat/camp be an important “growing up” milestone in the story?",
        "answer": "Accept reasoned answer: independence, new social situations away from home comforts.",
        "type": "short"
      },
      {
        "q": "Compare Miranda's way of coping with problems (lying) to Jack's way (owning up) from earlier weeks.",
        "answer": "Open answer.",
        "type": "short"
      },
      {
        "q": "What questions do you have heading into the final part of the book?",
        "answer": "Open answer — encourage curiosity/prediction.",
        "type": "short"
      }
    ]
  },
  {
    "num": 9,
    "title": "The Ending",
    "chapters": "Daybreak → The Walk Home (book finishes)",
    "LI": "We can identify the climax of a story and reflect on how a character has changed from the beginning to the end.",
    "SC": "I can describe the crisis at the retreat and explain how the community responds; I can summarise the key message of the book's ending.",
    "rubricTags": [
      "R3",
      "R7",
      "R10"
    ],
    "days": {
      "mon": {
        "chapters": "Daybreak → The Woods Are Alive",
        "subtitle": "Settling in at camp; the woods at night",
        "leadIn": "What's the scariest or most exciting thing that could happen on a night camp-out in the woods?",
        "comp1": "What tension is building as the kids settle in for the night at camp?",
        "comp2": "Why might unfamiliar surroundings make everyone (not just August) feel uneasy?",
        "goAway": "Write about a time you felt genuinely scared, and how you (or someone) helped calm things down."
      },
      "tue": {
        "chapters": "Alien → The Emperor's Guard",
        "subtitle": "The confrontation in the woods; friends stand together",
        "leadIn": "If your group of friends were suddenly in danger, what do you think you'd do?",
        "comp1": "What frightening event happens to August and his friends in the woods?",
        "comp2": "How do the other boys (including some who weren't his friends before) react?",
        "goAway": "Write about a moment when someone unexpected stood up for you, or you stood up for someone else."
      },
      "wed": {
        "chapters": "Sleep → The Last Precept",
        "subtitle": "The community responds; “The Last Precept”",
        "leadIn": "How do you think a scary shared experience might change how a group of people see each other afterwards?",
        "comp1": "How does the school community respond once everyone is safe?",
        "comp2": "What is “The Last Precept,” and how does it sum up the whole book's message?",
        "goAway": "Write your own “last precept” — the one big lesson you'd want people to remember from this book."
      },
      "thu": {
        "chapters": "The Drop-Off → The Walk Home (finish the book)",
        "subtitle": "Awards Day; “The Walk Home” — the book finishes",
        "leadIn": "How do you think August's very first day of school (Week 1) compares to how his year is ending now?",
        "comp1": "What happens at the Awards ceremony?",
        "comp2": "Why is it meaningful that the whole community — not just August's family — celebrates him by the end?",
        "goAway": "Write a full reflection: What is the biggest lesson “Wonder” has taught you about kindness, courage, or seeing people for who they really are?"
      }
    },
    "projects": [
      {
        "type": "poster",
        "title": "Poster",
        "brief": "Design an “Awards Day” poster celebrating a value (kindness, courage, friendship) rather than just achievement."
      },
      {
        "type": "comic",
        "title": "Comic strip",
        "brief": "Illustrate the climax in the woods — build tension across the panels, then show the moment friends stand together."
      },
      {
        "type": "drama",
        "title": "Drama scene",
        "brief": "Perform the Awards Day scene, including how the audience reacts to August receiving recognition."
      },
      {
        "type": "journal",
        "title": "Journal reflection",
        "brief": "Write a full letter to August, from you, sharing what his story has taught you."
      }
    ],
    "quiz": [
      {
        "q": "What event happens to August and his cabin-mates in the woods at night?",
        "answer": "They are confronted/threatened by older boys from another school (accept reasoned detail).",
        "type": "short"
      },
      {
        "q": "Who steps in to help/defend August during this event?",
        "answer": "A group including former outsiders/other classmates (accept “his friends,” e.g. Jack, Amos, and others).",
        "type": "short"
      },
      {
        "q": "How does this shared crisis change the way some classmates see August?",
        "answer": "Accept reasoned answer: they see his bravery and become genuine allies/friends.",
        "type": "short"
      },
      {
        "q": "What is “The Last Precept” the book ends on?",
        "answer": "Accept reasoned paraphrase relating to: if every person made it a rule to be kind, the world would be a better place (do not quote verbatim — paraphrase only).",
        "type": "short"
      },
      {
        "q": "What happens at the Awards ceremony at the end of the book?",
        "answer": "August receives special recognition/a medal for character shown throughout the year.",
        "type": "short"
      },
      {
        "q": "Who gives a speech at the Awards ceremony that especially honours August?",
        "answer": "Mr. Tushman",
        "type": "short"
      },
      {
        "q": "How does the school community as a whole treat August by the end of the book, compared to the beginning?",
        "answer": "Accept reasoned answer: with acceptance, respect, admiration.",
        "type": "short"
      },
      {
        "q": "What is the title of the very final chapter?",
        "answer": "“The Walk Home.”",
        "type": "short"
      },
      {
        "q": "Who walks home with August's family at the very end?",
        "answer": "Accept reasoned answer: friends/family, symbolising acceptance and community.",
        "type": "short"
      },
      {
        "q": "Inference: Why might the author choose a dangerous night in the woods as the story's climax?",
        "answer": "Accept reasoned answer: tests loyalty/character under pressure, brings the group together.",
        "type": "short"
      },
      {
        "q": "Inference: How has Jack's role in August's life come full circle by the end of the book?",
        "answer": "Accept reasoned answer: from unkind comment to loyal defender.",
        "type": "short"
      },
      {
        "q": "Vocabulary: What does “precept” mean, as used throughout the whole book?",
        "answer": "A rule or principle to guide behaviour.",
        "type": "short"
      },
      {
        "q": "True or False: By the end of the book, August still feels like an outsider at school.",
        "answer": "False",
        "type": "tf"
      },
      {
        "q": "Why do you think the author ends the book with a celebration/award rather than just the crisis in the woods?",
        "answer": "Accept reasoned answer: hope, resolution, reinforcing the “choose kind” message.",
        "type": "short"
      },
      {
        "q": "Short answer: In your own words, what is the single biggest lesson “Wonder” teaches about how we treat people who are different from us?",
        "answer": "Open answer.",
        "type": "short"
      },
      {
        "q": "Which character do you think changed the most across the whole book, and why?",
        "answer": "Open answer — must reference evidence.",
        "type": "short"
      },
      {
        "q": "Looking back at Week 1's quiz, how has your understanding of August changed by the end of the book?",
        "answer": "Open reflective answer.",
        "type": "short"
      },
      {
        "q": "Why might the author have used so many different narrators across the whole book?",
        "answer": "Accept reasoned answer: builds a full picture of how one person's story affects a whole community.",
        "type": "short"
      },
      {
        "q": "What does “choosing kind” actually look like in action, based on examples from the whole book?",
        "answer": "Open answer — must give at least one specific example.",
        "type": "short"
      },
      {
        "q": "If you could ask R.J. Palacio (the author) one question about the book, what would it be?",
        "answer": "Open answer.",
        "type": "short"
      }
    ]
  }
];

const WEEK10 = {
  "title": "Final Project & Celebration",
  "options": [
    {
      "title": "“Choose Kind” Campaign",
      "desc": "Design and pitch a whole-school kindness campaign (posters, a short video script, a pledge wall) inspired by the book's precepts."
    },
    {
      "title": "Wonder the Musical/Play — Extended Scene",
      "desc": "Write and perform an extended dramatic scene (5+ minutes) either continuing the story or dramatising a moment from a new narrator's point of view (e.g. Julian, told with empathy)."
    },
    {
      "title": "Character Case File",
      "desc": "Create an in-depth multimedia profile (poster + written report + comic panels) tracking one character's journey and change across the whole book, using evidence/quotes (paraphrased, not copied) from every part they appear in."
    },
    {
      "title": "“Precepts for Our Class” Book",
      "desc": "Design and illustrate an original class book of 12 precepts (one per month of the year), each with an illustration and a real-life example of how to live it out — bound into a class anthology."
    }
  ],
  "lessons": [
    {
      "day": "Monday",
      "title": "Choose & Plan",
      "desc": "Choose your project, plan (storyboard/outline), gather resources, and assign group roles."
    },
    {
      "day": "Tuesday",
      "title": "Main Production",
      "desc": "Main production time — writing, drawing, rehearsing, building."
    },
    {
      "day": "Wednesday",
      "title": "Finishing Touches",
      "desc": "Finishing touches, rehearsal/polish, prepare for presenting."
    }
  ],
  "thursday": "Students present or display their final projects. Peer feedback using simple “Glow & Grow” sticky notes (one thing that shone, one thing to consider next time).",
  "friday": "No quiz this week. Whole-class reflection circle: share one precept students will carry forward. Certificates presented. Optional: watch/discuss the book's key themes, share favourite moments from the term.",
  "rubric": [
    {
      "criteria": "Understanding of text",
      "code": "R1",
      "na": "Retells basic plot",
      "wt": "Explains character motivations with some evidence",
      "a": "Analyses themes with strong textual evidence",
      "example": "A Character Case File on August showing him change from feeling like an outsider on his first day to being honoured at the Awards ceremony, with a moment quoted from the beginning, middle and end of the book."
    },
    {
      "criteria": "Communication of ideas",
      "code": "R4 · R5",
      "na": "Ideas are unclear/underdeveloped",
      "wt": "Ideas are clear and organised",
      "a": "Ideas are compelling, well-structured, and audience-aware",
      "example": "A Choose Kind campaign poster with a memorable slogan, three persuasive reasons, and artwork that matches the message."
    },
    {
      "criteria": "Creativity & effort",
      "code": "R6",
      "na": "Minimal effort/detail",
      "wt": "Solid effort, clear care taken",
      "a": "Highly original, exceptional effort and polish",
      "example": "A drama scene that adds Julian's point of view with empathy instead of making him a simple villain, rehearsed and improved after a Glow & Grow from another group."
    },
    {
      "criteria": "Collaboration",
      "code": "R7 · R9",
      "na": "Limited teamwork",
      "wt": "Works cooperatively",
      "a": "Leads and supports others effectively",
      "example": "Each member has a clear role in the class precepts book, the group checks in with each other, and every student presents their page."
    }
  ]
};

const DAY_ORDER = ["mon","tue","wed","thu","fri"];
const DAY_LABELS = {
  "mon": "Monday — Teacher Read",
  "tue": "Tuesday — Group Read",
  "wed": "Wednesday — Teacher Read",
  "thu": "Thursday — Group Read",
  "fri": "Friday — Quiz"
};
const DAY_MODE = {
  "mon": "teacher",
  "tue": "group",
  "wed": "teacher",
  "thu": "group",
  "fri": "quiz"
};
