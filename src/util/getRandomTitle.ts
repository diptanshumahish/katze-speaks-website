const coolLines: string[] = [
    "Beneath dark basements",
    "A spooky whisper",
    "Ho Ho Ho",
    "Play hide and seek?",
    "Shadows in moonlight",
    "They're right behind you",
    "Mirror shows your fears",
    "Creaking floors at night",
    "Laughter in the dark",
    "Attic footsteps approach",
    "Dolls move when alone",
    "Clock strikes thirteen",
    "Fog hides the unknown",
    "Voices call your name",
    "Forest's sinister embrace",
    "Eyes glow in darkness",
    "Moon reveals hidden horrors",
    "Empty swing, child's laughter",
    "Painting's eyes follow you",
    "Door slams shut, sealed fate",
    "Footprints lead to grave",
    "Blood moon, night dread",
    "Static TV speaks tongues",
    "Whispers, ancient malevolence",
    "Abandoned well hungers",
    "Mannequins awaken when blinked",
    "Chilling breeze on windless night",
    "Cemetery gate swings open",
    "Water reflects different world",
];

export function getRandomTitle(): string {
    const randomIndex = Math.floor(Math.random() * coolLines.length);
    return coolLines[randomIndex];
}
