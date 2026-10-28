export const pillars = [
  { number: '01', symbol: 'ψ', title: 'Learn together', text: 'We will run simple sessions on qubits, algorithms and the physics behind quantum technology.' },
  { number: '02', symbol: '⌘', title: 'Work on research', text: 'We want students to read papers together, find a question and turn it into proper research.' },
  { number: '03', symbol: '≋', title: 'Write and publish', text: 'We will post articles about new work in quantum and aim to publish our own papers as the society grows.' },
  { number: '04', symbol: '∴', title: 'Bring people in', text: 'Researchers and people working in the field will be invited to speak honestly about their work.' },
];

export const researchTopics = [
  { number: '01', title: 'Quantum computing', text: 'Algorithms, quantum information and the problems quantum computers may actually help us solve.' },
  { number: '02', title: 'Quantum technology', text: 'Hardware, sensing, communication and the engineering needed to make the theory useful.' },
  { number: '03', title: 'Student research', text: 'Small groups reading the literature, testing ideas and working towards papers of our own.' },
];

export const events = [
  { type: 'GUEST TALKS', title: 'Hear from researchers', text: 'We will invite people working across quantum science and technology to explain what they are doing and why it matters.', status: 'Speakers to be announced' },
  { type: 'WORKSHOPS', title: 'Learn by doing', text: 'Sessions on the basics, coding quantum circuits and understanding the tools used in the field.', status: 'Programme in development' },
  { type: 'READING GROUPS', title: 'Read papers together', text: 'A place to work through difficult papers without pretending that everyone understands everything on the first read.', status: 'Details coming soon' },
];

export const committee = [
  { name: 'Subhojith Halder', role: 'President' },
  { name: 'Omar', role: 'Vice President' },
  { name: 'Ben', role: 'Vice President' },
  { name: 'Adnan', role: 'Social Media & Treasurer' },
  { name: 'Coen', role: 'Events' },
  { name: 'To be announced', role: 'Secretary' },
];

export const teamMembers = Array.from({ length: 7 }, (_, index) => ({
  name: 'To be announced',
  role: `Team Member ${String(index + 1).padStart(2, '0')}`,
}));

export const articles = [
  {
    category: 'THE FUNDAMENTALS',
    title: 'What is actually different about a qubit?',
    summary: 'A short starting point for superposition, measurement and quantum information.',
    symbol: '|ψ〉',
    style: 'qubit',
    body: [
      'A normal bit is either 0 or 1. A qubit can be in a combination of the states |0〉 and |1〉 before we measure it. That combination is called a superposition.',
      'When we measure the qubit, we still get one result: 0 or 1. The useful part happens before measurement, when quantum operations change the amplitudes and phases of the state.',
      'Quantum algorithms are designed so that interference makes useful answers more likely and other answers less likely. This is the part that gives quantum computing its different way of processing information.',
      'This also explains why a quantum computer is not simply a faster normal computer. It works differently, and only some problems are a good fit for it.',
    ],
  },
  {
    category: 'BEYOND COMPUTING',
    title: 'Quantum is bigger than computing',
    summary: 'Sensing, communication and hardware are part of the same story.',
    symbol: 'Δ',
    style: 'technology',
    body: [
      'Quantum computing gets most of the attention, but it is only one part of quantum technology. Quantum systems can also be used to measure very small changes and to communicate information in new ways.',
      'Quantum sensors can be designed to detect magnetic fields, acceleration or changes in time with very high precision. The exact advantage depends on the system and how well it can be controlled.',
      'Quantum communication looks at how quantum states can carry information. Real systems still have to deal with loss, noise and imperfect hardware.',
      'That is why this field needs more than physicists. It needs engineers, mathematicians, computer scientists and people who can connect the theory to practical systems.',
    ],
  },
  {
    category: 'RESEARCH CULTURE',
    title: 'How to start reading a quantum paper',
    summary: 'You do not need to understand every equation before you can ask a useful question.',
    symbol: '∫',
    style: 'paper',
    body: [
      'Start with the abstract and introduction. Write down the problem the authors are trying to solve in your own words before going into the details.',
      'Then find the main result. Ask whether it is theoretical, simulated or experimental, and what assumptions it depends on. Figures and captions often show the argument more clearly than the surrounding text.',
      'Keep a list of terms you do not know, but do not stop for every one of them. Work out which ideas are essential to the result and read around those first.',
      'Reading with other people helps. You can compare what you understood, test a small example and leave with better questions even if the whole paper is not clear yet.',
    ],
  },
];
