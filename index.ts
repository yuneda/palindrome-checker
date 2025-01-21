function isPalindrome(input: string): boolean {
  // Normalize input: remove spaces, punctuation, and convert to lowercase
  const normalized = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
}

function extractPalindromes(text: string): string[] {
  // Split the text into potential palindrome phrases by sentence boundaries
  const sentences = text.match(/[^.!?]*[.!?]/g) || [];
  const palindromes: string[] = [];

  sentences.forEach(sentence => {
      const words = sentence.split(/\s+/);
      for (let i = 0; i < words.length; i++) {
          for (let j = i + 1; j <= words.length; j++) {
              const phrase = words.slice(i, j).join(' ');
              if (phrase.length > 1 && isPalindrome(phrase)) {
                  palindromes.push(phrase);
              }
          }
      }
  });

  return palindromes;
}

// Input text
const text = `In the forgotten forest, there lies a world unknown to many. The trees, ancient and wise, have
seen countless eras pass by, their roots deeply embedded in the earth, whispering tales of
yore. Among these tales is the story of a long-lost temple, a place where the fabric of time seems to fray, allowing those within to glimpse the past and future. Legends speak of a hidden
power, a force that could either save or doom the world as we know it.
The villagers of Eldoria often spoke in hushed tones about the temple. "It's a place where time
flows differently," they would say. "Enter the temple, and you might leave to find the world changed." Many brave souls ventured into the forest to seek this temple, but few returned. Those who did were never the same, their minds fragmented, speaking in riddles and rhymes,
much like the palindromes hidden within the fabric of the temple's reality.
"Was it a car or a cat I saw?" one traveler murmured as he sat by the village fire. His eyes, once sharp, now held a distant look. "Able was I, I saw Elba," he continued, his words weaving
a tapestry of confusion and wonder. The villagers, though they listened, could make little sense of his ramblings, but they knew better than to dismiss them entirely.
In the heart of the forest, the temple awaited those who dared to find it. Its walls, covered in
vines and moss, held the secrets of ages past. The air within was thick with the scent of ancient wood and forgotten memories. As one ventured deeper into the temple, the light dimmed, and the shadows grew longer, twisting and turning as if alive.
Within the temple, the palindromes came to life. "Madam, in Eden, I’m Adam," echoed through
the halls, the voice seemingly coming from all directions at once. It was as if the very walls spoke, recounting the tales of those who had walked within before. The palindromes, though
nonsensical to the untrained ear, held great significance. They were keys, unlocking doors to
the temple's deeper chambers.
One such chamber held a large, ornate mirror. "A man, a plan, a canal, Panama," was etched
into its frame. The mirror, unlike any other, reflected not just the present, but the past and future as well. Those who gazed into it would see their lives play out before them, decisions
made and unmade, paths taken and forsaken. It was a reminder that time, though linear to the
human mind, was much more complex than it seemed.
As the villagers of Eldoria told it, a young woman named Ashwari once entered the temple. She
was drawn to it, as if by some unseen force. Her heart was heavy with sorrow, having lost her
family to a plague that swept through the land. Ashwari sought answers, hoping the temple might provide them. As she ventured through its dark corridors, the palindromes began to speak to
her.
"Eva, can I see bees in a cave?" the walls whispered. Ashwari, though frightened, pressed on. She
knew that the temple was testing her, seeing if she was worthy of the knowledge it held. With
each step, the palindromes grew more complex, their meanings more elusive. "Evil is a name
of a foeman, as I live," one particularly menacing voice intoned. But Ashwari was not deterred. She knew that the temple held the answers she sought, and she was determined to find them.
In the deepest chamber of the temple, Ashwari found a book. Its pages were old, brittle with age, but the words written within were clear. "Sir, I demand, I am a maid named Iris," the first page
read. Ashwari, though puzzled, began to read. The book told of a time long ago, when the temple was first built. It was a place of worship, a sanctuary for those who sought wisdom and
knowledge. But over time, it became something more, a place where the very fabric of reality
was thin, allowing the past, present, and future to converge.
As Ashwari read on, she learned of the temple's true purpose. It was a place of balance, where light and dark, good and evil, were held in equilibrium. The palindromes, she realized, were not
just words but symbols of this balance. "Murder for a jar of red rum," one passage read. The
words, though strange, held a deeper meaning. They were a reminder that every action had a consequence, every choice a repercussion.
Ashwari spent days in the temple, reading and learning. The palindromes became her guide, leading her to the answers she sought. When she finally emerged from the temple, she was changed. The sorrow that had weighed her down was gone, replaced with a sense of purpose. Ashwari knew that her journey was not over, but she was no longer afraid. The temple had shown her that time, though ever-changing, was something she could navigate, something she could control.
Back in Eldoria, the villagers noticed the change in Ashwari. She no longer spoke of the past with regret but looked to the future with hope. The palindromes, once a source of confusion,
became a source of wisdom. "A Santa at NASA," Ashwari would say with a smile, knowing that the

temple had given her the strength to move forward.
Ashwari’s return to the village sparked curiosity among the villagers. They could see the lightness in her steps, the clarity in her eyes. Yet, when asked about her journey into the Enchanted
Forest, Ashwari remained cryptic. She shared only fragments of her experience, often wrapping her words in riddles and palindromes, much like the ones she encountered in the temple.
"Red roses," Ashwari would say, "saw I was a deed." The villagers, puzzled but intrigued, listened intently, trying to decipher the hidden meanings. Ashwari had become somewhat of an oracle in Bramblewood. People came to her not only for guidance but also to hear the strange, looping phrases she spoke.
"Rotator of times," she whispered one evening to a young boy who had lost his way. "Step on
no pets," she added with a wink. The boy, though initially confused, somehow felt comforted by
her words. There was a soothing quality in the rhythm of the palindromes, a sense that
everything was interconnected.
As days turned into weeks, Ashwari’s influence grew. She began to help the villagers see the hidden connections in their lives, using the palindromes as tools for introspection. "Was it
Eliot’s toilet I saw?" she asked the baker one morning. Though the question seemed
nonsensical, it led the baker to realize he had been overlooking something important in his life,something that required attention.
The forest, too, seemed to respond to Ashwari’s newfound understanding. The animals grew bolder, often approaching her without fear. One day, as she wandered near the forest's edge,
a fox with a knowing look in its emerald eyes crossed her path. "Mr. Owl ate my metal worm," Ashwari murmured, feeling a deep connection to the creature. The fox paused, as if acknowledging her words, before darting back into the underbrush.
Ashwari knew that her journey was far from over. The temple had given her the knowledge she sought, but it had also imparted a greater responsibility. The palindromes were more than just clever phrases; they were the keys to maintaining balance in the world. Ashwari realized that the temple’s magic was not confined to its walls. The power of the palindromes extended far
beyond, touching every aspect of life in Eldoria and beyond.
"Do geese see God?" Ashwari pondered aloud one day as she sat by the village well. The question was met with silence, but Ashwari didn’t mind. She knew that the answer lay not in words but in understanding the world’s deeper mysteries.
Ashwari’s thoughts often returned to the prophecy she had read in the temple. The great darkness foretold was still out there, waiting to disrupt the balance. Ashwari knew that her connection to the Enchanted Forest was part of the prophecy. She was the chosen one, the one destined to
protect the harmony between light and dark. But she also knew that she couldn’t do it alone.
As winter approached, Ashwari gathered a group of trusted villagers—those she knew had the courage to face the challenges ahead. Among them were Mira, a skilled archer; Thorne, a blacksmith with unmatched strength; and Lila, a healer with a deep understanding of herbal
lore. Together, they formed a fellowship dedicated to preserving the balance, just as the palindromes had shown Ashwari.
Their first task was to find the three sacred artifacts hidden within the forest. Ashwari knew from the temple’s teachings that the Mirror of Truth, the Sword of Light, and the Heartstone were
crucial to their mission. These artifacts, when united, would give them the power to confront
the darkness and protect Eldoria from its malevolent influence.

"Was it a rat I saw?" Mira asked one night as they camped under the stars, the flickering fire casting shadows on their faces. The question hung in the air, both a reminder of the dangers they faced and a testament to their resolve.
The journey was fraught with peril. The forest, once welcoming to Ashwari, now seemed to test their every step. Creatures they had never seen before stalked them from the shadows, and
the very trees seemed to conspire against them, twisting paths and creating obstacles. But Ashwari and her companions pressed on, guided by the palindromes and the knowledge that the balance of their world depended on their success.
"Eva, can I stack cats in a cave?" Thorne joked one morning as they made their way through a dense thicket. Despite the lighthearted tone, the truth of the palindrome wasn’t lost on them. The forest was a place of dualities, where opposites coexisted and balanced one another. Their mission was to ensure that this balance remained unbroken.
After weeks of searching, they finally found the first artifact—the Mirror of Truth. It was hidden deep within a cave, its surface polished to a reflective sheen. "No lemon, no melon," Ashwari muttered as they approached the mirror. The phrase seemed to resonate within the cave, the air growing heavy with the weight of their discovery.
The Mirror of Truth, as its name suggested, revealed the deepest truths of those who gazedinto it. Ashwari was the first to step forward. As she peered into the mirror, she saw not just her reflection but the essence of who she was—her strengths, her flaws, and her destiny. The
mirror showed her the path she must take, the decisions she must make to preserve the
balance.
Each member of the fellowship took their turn before the mirror, and each was shown
something different. For Mira, it was a vision of the battles to come; for Thorne, a reminder of
the strength within him; and for Lila, the importance of her healing powers in the days ahead.
The mirror had prepared them for what was to come, and with its guidance, they left the cave, determined to find the remaining artifacts.
The next challenge was the Sword of Light. According to the temple’s prophecy, the sword
was hidden within the tallest tree in the forest—a tree so ancient that its roots intertwined with
the very foundations of the earth. "A man, a plan, a canal, Panama," Ashwari recited as they stood before the massive trunk, its bark as tough as iron.
It took all of Thorne’s strength to climb the tree, but with the aid of the group, they eventually reached a hollow high above the ground. Inside, they found the Sword of Light, its blade
glowing with a soft, ethereal light. The sword was more than just a weapon; it was a symbol of hope, a reminder that even in the darkest of times, light would always prevail.
The final artifact, the Heartstone, proved to be the most elusive. The temple’s prophecy spoke
of a stone that beat with the rhythm of the earth itself, a source of life and energy. "Was it a bat
I saw?" Ashwari mused as they searched, the forest growing ever more treacherous with each passing day.
Their journey took them to the very heart of the forest, a place where the trees were so dense
that not even a sliver of sunlight could penetrate. It was there, in the deepest, darkest part of
the Enchanted Forest, that they found the Heartstone. The stone pulsed with a gentle, steady beat, a reminder that life, like time, was a continuous cycle of renewal.
With the three artifacts in their possession, Ashwari and her companions knew that the final battle was at hand. The sorcerer who sought to plunge the world into darkness was growing stronger,

and the balance was tipping. But they also knew that the power of the artifacts, combined with their own strength and determination, would be enough to restore harmony.
As they prepared for the final confrontation, Ashwari couldn’t help but think back to the palindromes that had guided her journey. "Evil is a name of a foeman, as I live," she whispered to herself, steeling her resolve. The words were a reminder that even the darkest of forces had their place in the balance of the world, and it was her duty to ensure that balance was maintained.
The battle was fierce, but Ashwari and her companions fought with all their might. The Sword of Light cut through the sorcerer’s dark magic, the Mirror of Truth revealed his weaknesses, and
the Heartstone provided them with the strength to keep going. In the end, it was Ashwari who dealt the final blow, her heart filled with the knowledge that she had fulfilled her destiny.
With the sorcerer defeated, the balance of the world was restored. The Enchanted Forest,
once shrouded in darkness, now blossomed with life. The trees, the animals, and even the
very air seemed to rejoice in the victory. Ashwari knew that the forest would always hold a special place in her heart, a reminder of the journey she had undertaken and the lessons she had learned.
As she and her companions made their way back to Bramblewood, Ashwari reflected on thepalindromes that had guided her path. They were more than just words; they were symbols of the delicate balance that governed their world. And as long as that balance was maintained, Ashwari knew that the future would be bright.`;

// Find and display all palindromes in the text
const foundPalindromes = extractPalindromes(text);
console.log("Palindromes found in the text:");
console.log(foundPalindromes);
