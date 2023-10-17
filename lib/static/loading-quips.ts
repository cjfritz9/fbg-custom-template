const loadingQuips = [
  'Loading... Give your gun some love, because cleanliness is next to gunliness!',
  'Loading... Preparing for a bulletproof clean!',
  'Loading... Getting the barrel rolling on that squeaky clean gun!',
  'Loading... Cleaning guns and having barrels of fun!',
  "Loading... Guns cleanliness isn't just your hobby; it's our cleanliness!",
  "Loading... We're here to make your firearm shine, one barrel at a time!",
  'Loading... Get ready for a muzzle-ificent gun cleaning experience!',
  "Loading... Let's lock and load on that grime-fighting mission!",
  'Loading... Time to polish your piece for a shot at gun-derful cleanliness!',
  'Loading... From dust to trust - our gun cleaning magic is in the works!',
  "Loading... We're making sure your firearm is in a 'fire' condition!",
  "Loading... Let's tackle the dirt and grime, one shot at a time!",
  "Loading... Cleaning, because a well-maintained gun is 'rifling' in style!",
  "Loading... We're on target to deliver you a spotless gun in no time!"
];

export default function getRandomQuip() {
  const choices = loadingQuips.length;

  return (
    loadingQuips[Math.floor(Math.random() * choices)] ??
    loadingQuips[choices - 1]
  );
};
