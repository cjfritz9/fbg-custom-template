const loadingQuips = [
  'Give your gun some love, because cleanliness is next to gunliness!',
  'Preparing for a bulletproof clean!',
  'Getting the barrel rolling on that squeaky clean gun!',
  'Cleaning guns and having barrels of fun!',
  "Guns cleanliness isn't just your hobby; it's our cleanliness!",
  "We're here to make your firearm shine, one barrel at a time!",
  'Get ready for a muzzle-ificent gun cleaning experience!',
  "Let's lock and load on that grime-fighting mission!",
  'Time to polish your piece for a shot at gun-derful cleanliness!',
  'From dust to trust - our gun cleaning magic is in the works!',
  "We're making sure your firearm is in a 'fire' condition!",
  "Let's tackle the dirt and grime, one shot at a time!",
  "Cleaning, because a well-maintained gun is 'rifling' in style!",
  "We're on target to deliver you a spotless gun in no time!"
];

export default function getRandomQuip() {
  const choices = loadingQuips.length;

  return (
    loadingQuips[Math.floor(Math.random() * choices)] ??
    loadingQuips[choices - 1]
  );
}
