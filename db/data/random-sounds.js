const randomSounds = [
  {
    name: "Bee",
    slug: "bee",
    type: "random",
    loop: false,
    urls: ["bee1", "bee2", "bee3", "bee4", "bee5"]
  },
  {
    name: "Blackbird",
    slug: "blackbird",
    type: "random",
    loop: false,
    urls: [
      "blackbird1",
      "blackbird2",
      "blackbird3",
      "blackbird4",
      "blackbird5",
      "blackbird6",
      "blackbird7",
      "blackbird8",
      "blackbird9",
      "blackbird10",
      "blackbird11",
      "blackbird12",
      "blackbird13",
      "blackbird14",
      "blackbird15"
    ]
  },
  {
    name: "Bull",
    slug: "bull",
    type: "random",
    loop: false,
    urls: ["bull1", "bull2", "bull3", "bull4", "bull5", "bull6"]
  },
  {
    name: "Chaffinch",
    slug: "chaffinch",
    type: "random",
    loop: false,
    urls: [
      "chaffinch1",
      "chaffinch2",
      "chaffinch3",
      "chaffinch4",
      "chaffinch5",
      "chaffinch6"
    ]
  },
  {
    name: "Cow",
    slug: "cow",
    type: "random",
    loop: false,
    urls: [
      "cow1",
      "cow2",
      "cow3",
      "cowbell",
      "cowbell2",
      "cowbell3",
      "cowbell4",
      "cowbell5",
      "cowbell6",
      "cowbell7"
    ]
  },
  {
    name: "Cuckoo",
    slug: "cuckoo",
    type: "random",
    loop: false,
    urls: [
      "cuckoo1",
      "cuckoo2",
      "cuckoo3",
      "cuckoo4",
      "cuckoo5",
      "cuckoo6",
      "cuckoo7"
    ]
  },
  {
    name: "Cyclists",
    slug: "cyclist",
    type: "random",
    loop: false,
    urls: ["cyclistpassing", "bikebell1", "bikebell2"]
  },
  {
    name: "Deer",
    slug: "deer",
    type: "random",
    loop: false,
    urls: [
      "stag1",
      "stag2",
      "stag3",
      "stag4",
      "stag5",
      "stag6",
      "stag7",
      "stag8",
      "stag9",
      "stag10",
      "stag11",
      "stag12",
      "stag13",
      "deer1",
      "deer2",
      "deer3",
      "deersnort",
      "reddeer",
      "stagantlers1",
      "stagantlers2",
      "stagantlers3",
      "stagantlers4",
      "stagantlerslong",
      "staghooves"
    ]
  },
  {
    name: "Fire Bursts",
    slug: "fireburst",
    type: "random",
    loop: false,
    urls: ["fireburst1", "fireburst2", "fireburst3"]
  },
  {
    name: "Frog",
    slug: "frog",
    type: "random",
    loop: false,
    urls: ["frog1", "frog2", "frog3", "frog4", "frog5", "frog6", "frogcopes"]
  },
  {
    name: "Horse",
    slug: "horse",
    type: "random",
    loop: false,
    urls: [
      "horsewhinney1",
      "horsewhinney2",
      "horsewhinney3",
      "horsewhinney4",
      "horsewhinney5",
      "horsewhinney6",
      "horsepassing",
      "horsesnort",
      "horsetrotting"
    ]
  },
  {
    name: "Parrot",
    slug: "parrot",
    type: "random",
    loop: false,
    urls: ["parrot1", "parrot2", "parrot3"]
  },
  {
    name: "Sail Flapping",
    slug: "sailflapping",
    type: "random",
    loop: false,
    urls: [
      "sailflapping1",
      "sailflapping2",
      "sailflapping3",
      "sailflapping4",
      "sailflapping5"
    ]
  },
  {
    name: "Seagull",
    slug: "seagull",
    type: "random",
    loop: false,
    urls: [
      "seagull1",
      "seagull2",
      "seagull3",
      "seagull4",
      "seagull5",
      "seagull6",
      "seagull7",
      "seagull8",
      "seagull9",
      "seagull10",
      "seagull11",
      "seagull12",
      "seagull13",
      "seagull14",
      "gull1",
      "gull2",
      "gull3",
      "seagullsflap"
    ]
  },
  {
    name: "Sheep",
    slug: "sheep",
    type: "random",
    loop: false,
    urls: [
      "sheep1",
      "sheep2",
      "sheep3",
      "sheep4",
      "sheep5",
      "sheep6",
      "sheep7",
      "sheep8",
      "lamb1",
      "lamb2"
    ]
  },
  {
    name: "Song Thrush",
    slug: "songthrush",
    type: "random",
    loop: false,
    urls: [
      "songthrush1",
      "songthrush2",
      "songthrush3",
      "songthrush4",
      "songthrush5",
      "thrush1",
      "thrush2"
    ]
  },
  {
    name: "Thunder",
    slug: "thunder",
    type: "random",
    loop: false,
    urls: [
      "thunder1",
      "thunder2",
      "thunder3",
      "thunder4",
      "thunder5",
      "thunder6",
      "thunder7"
    ]
  },
  {
    name: "Traffic",
    slug: "traffic",
    type: "random",
    loop: false,
    urls: [
      "ambulancesiren",
      "backingup",
      "buspass",
      "caralarm",
      "carhorn1",
      "carhorn2",
      "carstart",
      "firetrucksiren",
      "garbagetruck",
      "moped1",
      "moped2",
      "mopedpass",
      "passingcar1",
      "passingcar2",
      "passingcar3",
      "passingmotorbike1",
      "passingmotorbike2",
      "passingmotorbike3",
      "policeradio1",
      "policeradio2",
      "policeradio3",
      "policesiren",
      "siren"
    ]
  },
  {
    name: "Tree Falling",
    slug: "treefalling",
    type: "random",
    loop: false,
    urls: ["treefalling"]
  },
  {
    name: "Water Droplets",
    slug: "waterdrops",
    type: "random",
    loop: false,
    urls: [
      "waterdrops1",
      "waterdrops2",
      "waterdrops3",
      "waterdrops4",
      "waterdrops5",
      "waterdrops6"
    ]
  },
  {
    name: "Water Splashes",
    slug: "watersplash",
    type: "random",
    loop: false,
    urls: ["watersplash"]
  },
  {
    name: "Wood Pidgeon",
    slug: "woodpidgeon",
    type: "random",
    loop: false,
    urls: [
      "woodpidgeon1",
      "woodpidgeon2",
      "woodpidgeon3",
      "woodpidgeon4",
      "woodpidgeon5"
    ]
  },
  {
    name: "Woodpecker",
    slug: "woodpecker",
    type: "random",
    loop: false,
    urls: ["woodpecker1", "woodpecker2", "woodpecker3", "woodpecker4"]
  },
  {
    name: "Construction",
    slug: "construction",
    type: "random",
    loop: false,
    urls: ["construction1", "construction2"]
  }
];

module.exports = randomSounds;