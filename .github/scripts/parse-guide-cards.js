const fs = require('fs');
const path = require('path');

function parseGuideCards() {
  const filePath = path.join(process.cwd(), 'guides', 'guide-overview.mdx');
  
  if (!fs.existsSync(filePath)) {
    console.error('guides/guide-overview.mdx file not found');
    process.exit(1);
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Parse sections and cards
  const sections = [];
  
  // Find Game Developers section
  const gameDevelopersMatch = content.match(/## Game Developers\s*<CardGroup[^>]*>\s*([\s\S]*?)\s*<\/CardGroup>/);
  if (gameDevelopersMatch) {
    const cards = parseCardsFromSection(gameDevelopersMatch[1]);
    sections.push({
      title: 'Game Developers',
      cards: cards
    });
  }
  
  // Find Web3 section
  const web3Match = content.match(/## Web3\s*<CardGroup[^>]*>\s*([\s\S]*?)\s*<\/CardGroup>/);
  if (web3Match) {
    const cards = parseCardsFromSection(web3Match[1]);
    sections.push({
      title: 'Web3',
      cards: cards
    });
  }
  
  const result = {
    lastUpdated: new Date().toISOString(),
    totalCards: sections.reduce((sum, section) => sum + section.cards.length, 0),
    sections: sections
  };
  
  // Write to JSON file
  const outputPath = path.join(process.cwd(), 'guides', 'guide-cards.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
  
  console.log(`Successfully parsed ${result.totalCards} cards from guide-overview.mdx`);
  console.log(`Generated guide-cards.json with ${sections.length} sections`);
  
  return result;
}

function parseCardsFromSection(sectionContent) {
  const cards = [];
  
  // Regex to match Card components with their attributes and content
  const cardRegex = /<Card\s+([\s\S]*?)>\s*([\s\S]*?)\s*<\/Card>/g;
  
  let match;
  while ((match = cardRegex.exec(sectionContent)) !== null) {
    const attributesStr = match[1];
    const description = match[2].trim();
    
    const card = {
      title: '',
      img: '',
      href: '',
      description: description
    };
    
    // Parse attributes
    const titleMatch = attributesStr.match(/title="([^"]*)"/);
    if (titleMatch) {
      card.title = titleMatch[1];
    }
    
    const imgMatch = attributesStr.match(/img="([^"]*)"/);
    if (imgMatch) {
      card.img = imgMatch[1];
    }
    
    const hrefMatch = attributesStr.match(/href="([^"]*)"/);
    if (hrefMatch) {
      card.href = hrefMatch[1];
    }
    
    cards.push(card);
  }
  
  return cards;
}

// Run the parser
if (require.main === module) {
  try {
    parseGuideCards();
  } catch (error) {
    console.error('Error parsing guide cards:', error);
    process.exit(1);
  }
}

module.exports = { parseGuideCards }; 