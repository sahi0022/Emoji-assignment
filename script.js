
const AllEmojis = [
    128561, 128187, 128188, 127912,

    128515, 128516, 128517, 128518,

    128519, 128520, 128521, 128522,

    128523, 128524, 128525, 128526,

    128512, 128513, 128514, 128147,

    129315, 128553, 128527, 128562,

    128530, 128531, 128532, 128533,

    128534, 128535, 128536, 128537,

    128538, 128539, 128540, 128541,

    128552, 128544, 128526, 128555,

    128564, 128570, 128663, 128759,

    128760, 128530, 128531, 128532
];

  const emojiGrid = document.getElementById("grid-emoji");


  AllEmojis.forEach((emoji) => {

    const emojiItem = document.createElement("div");

    emojiItem.classList.add("emojiitems");

    const emojiText = document.createElement("span");

    emojiText.classList.add("emoji");

    emojiText.textContent = String.fromCodePoint(emoji);

    const emojiCode = document.createElement("p");

    emojiCode.classList.add("emojicode");

    emojiCode.textContent = emoji;

    emojiItem.appendChild(emojiText);

    emojiItem.appendChild(emojiCode);

    emojiGrid.appendChild(emojiItem);
  });
  