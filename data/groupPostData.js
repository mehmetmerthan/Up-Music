const postData = [
  {
    username: "Alice",
    contentText: "Looking for talented musicians to join our rock-pop band. Let's create great music together!",
    musicStyles: ["Rock", "Pop"],
    musiciansNeeded: ["Guitarist", "Bassist", "Drummer"],
    musiciansExisting: [
      { username: "Bob", role: "Guitarist", musicianAvatar: "https://randomuser.me/api/portraits/men/82.jpg" },
      { username: "Charlie", role: "Bassist", musicianAvatar: "https://randomuser.me/api/portraits/men/64.jpg" },
    ],
    userAvatar: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    username: "Bob",
    contentText: "Starting a new project with a mix of rock and pop. Need a guitarist and a keyboardist. Join us now!",
    musicStyles: ["Rock", "Pop"],
    musiciansNeeded: ["Guitarist", "Keyboardist"],
    musiciansExisting: [
      { username: "Alice", role: "Keyboardist", musicianAvatar: "https://randomuser.me/api/portraits/women/91.jpg" },
      { username: "David", role: "Guitarist", musicianAvatar: "https://randomuser.me/api/portraits/men/53.jpg" },
    ],
    userAvatar: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    username: "Emily",
    contentText: "Jazz enthusiasts, we're forming a band! Need a saxophonist and a pianist. Let's jazz it up!",
    musicStyles: ["Jazz"],
    musiciansNeeded: ["Saxophonist", "Pianist"],
    musiciansExisting: [
      { username: "Daniel", role: "Pianist", musicianAvatar: "https://randomuser.me/api/portraits/men/47.jpg" },
      { username: "Olivia", role: "Saxophonist", musicianAvatar: "https://randomuser.me/api/portraits/women/76.jpg" },
    ],
    userAvatar: "https://randomuser.me/api/portraits/women/91.jpg",
  },
  {
    username: "David",
    contentText: "Indie rock vibes! Join our band as a guitarist or drummer. Auditions this weekend!",
    musicStyles: ["Rock", "Indie"],
    musiciansNeeded: ["Guitarist", "Drummer"],
    musiciansExisting: [
      { username: "Alice", role: "Drummer", musicianAvatar: "https://randomuser.me/api/portraits/men/19.jpg" },
      { username: "Bob", role: "Guitarist", musicianAvatar: "https://randomuser.me/api/portraits/women/42.jpg" },
    ],
    userAvatar: "https://randomuser.me/api/portraits/men/53.jpg",
  },
  {
    username: "Sophia",
    contentText: "Latin dance band forming! Need a percussionist and a trumpeter. Let's bring the rhythm!",
    musicStyles: ["Latin"],
    musiciansNeeded: ["Percussionist", "Trumpeter"],
    musiciansExisting: [
      { username: "Ethan", role: "Trumpeter", musicianAvatar: "https://randomuser.me/api/portraits/women/69.jpg" },
      { username: "Ava", role: "Percussionist", musicianAvatar: "https://randomuser.me/api/portraits/men/47.jpg" },
    ],
    userAvatar: "https://randomuser.me/api/portraits/women/69.jpg",
  },
  {
    username: "Daniel",
    contentText: "Country music lovers, join us! Seeking a fiddler and a banjo player. Let's make country magic!",
    musicStyles: ["Country"],
    musiciansNeeded: ["Fiddler", "Banjo Player"],
    musiciansExisting: [
      { username: "Emily", role: "Banjo Player", musicianAvatar: "https://randomuser.me/api/portraits/men/53.jpg" },
      { username: "David", role: "Fiddler", musicianAvatar: "https://randomuser.me/api/portraits/women/25.jpg" },
    ],
    userAvatar: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    username: "Olivia",
    contentText: "Calling all EDM DJs! Exciting residency opportunity. Bring your beats and light up the night!",
    musicStyles: ["EDM"],
    musiciansNeeded: ["EDM DJ"],
    musiciansExisting: [
      { username: "Ethan", role: "EDM DJ", musicianAvatar: "https://randomuser.me/api/portraits/men/34.jpg" },
      { username: "Ava", role: "EDM DJ", musicianAvatar: "https://randomuser.me/api/portraits/women/25.jpg" },
    ],
    userAvatar: "https://randomuser.me/api/portraits/women/76.jpg",
  },
  {
    username: "Ethan",
    contentText: "Acoustic duo in the making! Seeking a vocalist and a guitarist. Join us for soulful tunes!",
    musicStyles: ["Acoustic"],
    musiciansNeeded: ["Vocalist", "Guitarist"],
    musiciansExisting: [
      { username: "Ava", role: "Vocalist", musicianAvatar: "https://randomuser.me/api/portraits/women/25.jpg" },
      { username: "Bob", role: "Guitarist", musicianAvatar: "https://randomuser.me/api/portraits/men/82.jpg" },
    ],
    userAvatar: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    username: "Ava",
    contentText: "Classical music enthusiasts, let's form an orchestra! Violinists and cellists, apply now!",
    musicStyles: ["Classical"],
    musiciansNeeded: ["Violinist", "Cellist"],
    musiciansExisting: [
      { username: "Daniel", role: "Violinist", musicianAvatar: "https://randomuser.me/api/portraits/men/47.jpg" },
      { username: "Emily", role: "Cellist", musicianAvatar: "https://randomuser.me/api/portraits/women/76.jpg" },
    ],
    userAvatar: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    username: "Liam",
    contentText: "Reggae vibes needed! Seeking a keyboardist and a percussionist. Feel the Caribbean rhythm!",
    musicStyles: ["Reggae"],
    musiciansNeeded: ["Keyboardist", "Percussionist"],
    musiciansExisting: [
      { username: "Olivia", role: "Keyboardist", musicianAvatar: "https://randomuser.me/api/portraits/women/76.jpg" },
      { username: "David", role: "Percussionist", musicianAvatar: "https://randomuser.me/api/portraits/men/53.jpg" },
    ],
    userAvatar: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    username: "Emma",
    contentText: "Hip-hop heads, assemble! Looking for MCs and producers to join our new hip-hop project.",
    musicStyles: ["Hip Hop"],
    musiciansNeeded: ["MC", "Producer"],
    musiciansExisting: [
      { username: "Noah", role: "MC", musicianAvatar: "https://randomuser.me/api/portraits/women/42.jpg" },
      { username: "Ethan", role: "Producer", musicianAvatar: "https://randomuser.me/api/portraits/men/34.jpg" },
    ],
    userAvatar: "https://randomuser.me/api/portraits/women/42.jpg",
  },
  {
    username: "Noah",
    contentText: "Techno revolution! Seeking a synth wizard to join our electronic duo. Dive into the beats!",
    musicStyles: ["Techno"],
    musiciansNeeded: ["Synth Wizard"],
    musiciansExisting: [
      { username: "Daniel", role: "Synth Wizard", musicianAvatar: "https://randomuser.me/api/portraits/men/47.jpg" },
      { username: "Olivia", role: "Synth Wizard", musicianAvatar: "https://randomuser.me/api/portraits/women/76.jpg" },
    ],
    userAvatar: "https://randomuser.me/api/portraits/men/53.jpg",
  },
  {
    username: "Mia",
    contentText: "Bluegrass lovers, join our band! Looking for a banjo player and a mandolinist. Let's jam!",
    musicStyles: ["Bluegrass"],
    musiciansNeeded: ["Banjo Player", "Mandolinist"],
    musiciansExisting: [
      { username: "Liam", role: "Banjo Player", musicianAvatar: "https://randomuser.me/api/portraits/men/19.jpg" },
      { username: "Emma", role: "Mandolinist", musicianAvatar: "https://randomuser.me/api/portraits/women/42.jpg" },
    ],
    userAvatar: "https://randomuser.me/api/portraits/women/87.jpg",
  },
  {
    username: "Jackson",
    contentText: "Classical guitar elegance needed! Seeking a guitarist for weddings and events. Join us now!",
    musicStyles: ["Classical"],
    musiciansNeeded: ["Guitarist"],
    musiciansExisting: [
      { username: "Daniel", role: "Guitarist", musicianAvatar: "https://randomuser.me/api/portraits/men/47.jpg" },
      { username: "Emily", role: "Guitarist", musicianAvatar: "https://randomuser.me/api/portraits/women/76.jpg" },
    ],
    userAvatar: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    username: "Sophie",
    contentText: "Salsa dance band forming! Musicians and vocalists, join the rhythm! 💃🕺",
    musicStyles: ["Salsa"],
    musiciansNeeded: ["Percussionist", "Vocalist"],
    musiciansExisting: [
      { username: "Ethan", role: "Percussionist", musicianAvatar: "https://randomuser.me/api/portraits/men/19.jpg" },
      { username: "Ava", role: "Vocalist", musicianAvatar: "https://randomuser.me/api/portraits/women/25.jpg" },
    ],
    userAvatar: "https://randomuser.me/api/portraits/women/61.jpg",
  },
  {
    username: "Matthew",
    contentText: "Electronic duo seeking a synth wizard. Dive into the world of electronic soundscapes!",
    musicStyles: ["Electronic"],
    musiciansNeeded: ["Synth Wizard"],
    musiciansExisting: [
      { username: "Daniel", role: "Synth Wizard", musicianAvatar: "https://randomuser.me/api/portraits/men/47.jpg" },
      { username: "Olivia", role: "Synth Wizard", musicianAvatar: "https://randomuser.me/api/portraits/women/76.jpg" },
    ],
    userAvatar: "https://randomuser.me/api/portraits/men/88.jpg",
  },
  // Diğer ilanlar buraya eklenebilir
  // ...
  {
    username: "Aria",
    contentText: "Soulful blues band in the making! Seeking a harmonica player and a bassist. Let's groove!",
    musicStyles: ["Blues"],
    musiciansNeeded: ["Harmonica Player", "Bassist"],
    musiciansExisting: [
      { username: "David", role: "Harmonica Player", musicianAvatar: "https://randomuser.me/api/portraits/men/47.jpg" },
      { username: "Emily", role: "Bassist", musicianAvatar: "https://randomuser.me/api/portraits/women/76.jpg" },
    ],
    userAvatar: "https://randomuser.me/api/portraits/women/74.jpg",
  },
  {
    username: "Chloe",
    contentText: "Funky vibes needed! Join our funk band as a saxophonist or a trombonist. Let's funk it up!",
    musicStyles: ["Funk"],
    musiciansNeeded: ["Saxophonist", "Trombonist"],
    musiciansExisting: [
      { username: "Alice", role: "Saxophonist", musicianAvatar: "https://randomuser.me/api/portraits/women/91.jpg" },
      { username: "Sophia", role: "Trombonist", musicianAvatar: "https://randomuser.me/api/portraits/women/69.jpg" },
    ],
    userAvatar: "https://randomuser.me/api/portraits/women/96.jpg",
  },
  {
    username: "William",
    contentText: "Irish folk band forming! Seeking a tin whistle player and a bodhran drummer. Join us for jigs and reels!",
    musicStyles: ["Irish Folk"],
    musiciansNeeded: ["Tin Whistle Player", "Bodhran Drummer"],
    musiciansExisting: [
      { username: "Daniel", role: "Tin Whistle Player", musicianAvatar: "https://randomuser.me/api/portraits/men/47.jpg" },
      { username: "Ava", role: "Bodhran Drummer", musicianAvatar: "https://randomuser.me/api/portraits/women/76.jpg" },
    ],
    userAvatar: "https://randomuser.me/api/portraits/men/64.jpg",
  },
];


export default postData;