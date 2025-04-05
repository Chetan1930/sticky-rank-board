
// Generate mock user data
const generateMockUsers = (count: number) => {
  const users = [];
  const avatarSeed = 'https://i.pravatar.cc/150?img=';
  
  const randomNames = [
    "RiMaJhĪM♥️", "PRITESH", "KRISHU RAJP", "THAKUR RAN VIJAY SINGH",
    "MOKKU🔥", "⚡O¥H♻️🌱", ""ƇābĦĭī"", "MR_RAJPUT", "_PHIL_❤️", "Devil",
    "Alex", "Emma", "Sophia", "Liam", "Noah", "Jackson", "Olivia", "Aiden",
    "Isabella", "Lucas", "Mia", "Caden", "Aria", "Grayson", "Riley", "Mason",
    "Zoe", "Ethan", "Lily", "Logan", "Abigail"
  ];

  // Create top 3 users with high scores
  users.push({
    id: 1,
    rank: 1,
    name: "PRITESH",
    avatar: `${avatarSeed}3`,
    score: 1614546
  });
  
  users.push({
    id: 2,
    rank: 2,
    name: "RiMaJhĪM♥️",
    avatar: `${avatarSeed}5`,
    score: 1134590
  });
  
  users.push({
    id: 3,
    rank: 3,
    name: "KRISHU RAJP",
    avatar: `${avatarSeed}8`,
    score: 942034
  });
  
  // Create remaining users
  for (let i = 4; i <= count; i++) {
    const randomNameIndex = Math.floor(Math.random() * randomNames.length);
    const baseScore = 900000 - (i * 8000);
    const randomVariation = Math.floor(Math.random() * 5000);
    const score = Math.max(0, baseScore + randomVariation);
    
    users.push({
      id: i,
      rank: i,
      name: randomNames[randomNameIndex % randomNames.length],
      avatar: `${avatarSeed}${(i % 70) + 1}`,
      score
    });
  }
  
  // Add last place user
  const lastPlaceUser = {
    id: 999,
    rank: 999,
    name: "Devil",
    avatar: `${avatarSeed}66`,
    score: 0
  };
  
  return { users, lastPlaceUser };
};

export default generateMockUsers;
