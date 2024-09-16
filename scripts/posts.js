const posts = [
    {   id: 210605, year: 2021, month: 6, day: 5,
        menuText: "First Impressions",
        tags: [
            tags.MOVE_IN
        ],
        src: './posts/2021/210605.js'
    },
    {   id: 210619, year: 2021, month: 6, day: 19,
        menuText: "Home Inspection",
        tags: [
            tags.MOVE_IN
        ],
        src: './posts/2021/210619.js'
    },
    {   id: 210720, year: 2021, month: 7, day: 20,
        menuText: "Title Signing",
        tags: [
            tags.MOVE_IN
        ],
        src: './posts/2021/210720.js'
    },
    {   id: 210809, year: 2021, month: 8, day: 9,
        menuText: "The Keys",
        tags: [
            tags.MOVE_IN
        ],
        src: './posts/2021/210809.js'
    },
    {   id: 210813, year: 2021, month: 8, day: 13,
        menuText: "Left Behind",
        tags: [
            tags.CLEAN_UP, tags.MOVE_IN
        ],
        src: './posts/2021/210813.js'
    },
    {   id: 210814, year: 2021, month: 8, day: 14,
        menuText: "Utilities",
        tags: [
            tags.UTILITIES, tags.MOVE_IN
        ],
        src: './posts/2021/210814.js'
    },
    {   id: 210816, year: 2021, month: 8, day: 16,
        menuText: "Water Pressure",
        tags: [
            tags.BASEMENT, tags.PLUMBING, tags.REPAIRS
        ],
        src: './posts/2021/210816.js'
    },
    {   id: 210818, year: 2021, month: 8, day: 18,
        menuText: "New Lawnmower",
        tags: [
            tags.MOVE_IN, tags.YARD
        ],
        src: './posts/2021/210818.js'
    },
    {   id: 210821, year: 2021, month: 8, day: 21,
        menuText: "Back Yard Update",
        tags: [
            tags.MOVE_IN, tags.PROJECTS, tags.YARD, tags.YARD_UPDATE
        ],
        src: './posts/2021/210821.js'
    },
    {   id: 210906, year: 2021, month: 9, day: 6,
        menuText: "House Warming",
        tags: [
            tags.FRIENDS_FAMILY, tags.MOVE_IN
        ],
        src: './posts/2021/210906.js'
    },
    {   id: 210912, year: 2021, month: 9, day: 12,
        menuText: "What Feels Like Home?",
        tags: [
            tags.LITTLE_MOMENTS ,tags.MOVE_IN
        ],
        src: './posts/2021/210912.js'
    },
    {   id: 210925, year: 2021, month: 9, day: 25,
        menuText: "Test Drive",
        tags: [
            tags.MOVE_IN
        ],
        src: './posts/2021/210925.js'
    },
    {   id: 211002, year: 2021, month: 10, day: 2,
        menuText: "Pellet Stove & Lawnmower",
        tags: [
            tags.MOVE_IN, tags.UTILITIES
        ],
        src: './posts/2021/211002.js'
    },
    {   id: 211003, year: 2021, month: 10, day: 3,
        menuText: "Smoke 'em Out",
        tags: [
            tags.CLEAN_UP
        ],
        src: './posts/2021/211003.js'
    },
    {   id: 211008, year: 2021, month: 10, day: 8,
        menuText: "Pellet Deleviery",
        tags: [
            tags.UTILITIES, tags.GARAGE
        ],
        src: './posts/2021/211008.js'
    },
    {   id: 211015, year: 2021, month: 10, day: 15,
        menuText: "First Week",
        tags: [
            tags.CLEAN_UP, tags.YARD, tags.IMPROVEMENTS, tags.MOVE_IN
        ],
        src: './posts/2021/211015.js'
    },
    {   id: 211110, year: 2021, month: 11, day: 10,
        menuText: "Scenic Moments",
        tags: [
            tags.LITTLE_MOMENTS
        ],
        src: './posts/2021/211110.js'
    },
    {   id: 211111, year: 2021, month: 11, day: 11,
        menuText: "Water Treatment Install",
        tags: [
            tags.PLUMBING, tags.UTILITIES, tags.IMPROVEMENTS, tags.BASEMENT
        ],
        src: './posts/2021/211111.js'
    },
    {   id: 211116, year: 2021, month: 11, day: 16,
        menuText: "Winterizing",
        tags: [
            tags.BATHROOM, tags.BEDROOM, tags.LIVINGROOM, tags.UTILITIES
        ],
        src: './posts/2021/211116.js'
    },
    {   id: 211117, year: 2021, month: 11, day: 17,
        menuText: "Another Burn",
        tags: [
            tags.CLEAN_UP, tags.MOVE_IN
        ],
        src: './posts/2021/211117.js'
    },
    {   id: 211122, year: 2021, month: 11, day: 22,
        menuText: "Recycle Metal Items Left Behind",
        tags: [
            tags.CLEAN_UP, tags.MOVE_IN
        ],
        src: './posts/2021/211122.js'
    },
    {   id: 211123, year: 2021, month: 11, day: 23,
        menuText: "Generator",
        tags: [
            tags.ELECTRIC ,tags.UTILITIES
        ],
        src: './posts/2021/211123.js'
    },
    {   id: 211128, year: 2021, month: 11, day: 28,
        menuText: "Basement Update",
        tags: [
            tags.BASEMENT, tags.PROJECTS, tags.REPAIRS
        ],
        src: './posts/2021/211128.js'
    },
    {   id: 211205, year: 2021, month: 12, day: 5,
        menuText: "Scratching Post",
        tags: [
            tags.ANIMALS, tags.LIVINGROOM
        ],
        src: './posts/2021/211205.js'
    },
    {   id: 211212, year: 2021, month: 12, day: 12,
        menuText: "Stray Cat",
        tags: [
            tags.ANIMALS, tags.PROJECTS
        ],
        src: './posts/2021/211212.js'
    },
    {   id: 220206, year: 2022, month: 2, day: 6,
        menuText: "Recreation Fail",
        tags: [
            tags.LITTLE_MOMENTS, tags.LIVINGROOM
        ],
        src: './posts/2022/220206.js'
    },
    {   id: 220223, year: 2022, month: 2, day: 23,
        menuText: "Trapped",
        tags: [
            tags.ANIMALS, tags.YARD
        ],
        src: './posts/2022/220223.js'
    },
    {   id: 220401, year: 2022, month: 4, day: 1,
        menuText: "Burn Pile Upgrade",
        tags: [
            tags.CLEAN_UP, tags.IMPROVEMENTS, tags.YARD
        ],
        src: './posts/2022/220401.js'
    },
    {   id: 220417, year: 2022, month: 4, day: 17,
        menuText: "Cat Barrier",
        tags: [
            tags.IMPROVEMENTS
        ],
        src: './posts/2022/220417.js'
    },
    {   id: 220430, year: 2022, month: 4, day: 30,
        menuText: "Clearing The Gate",
        tags: [
            tags.CLEAN_UP, tags.IMPROVEMENTS, tags.YARD
        ],
        src: './posts/2022/220430.js'
    },
    {   id: 220503, year: 2022, month: 5, day: 3,
        menuText: "Starlink",
        tags: [
            tags.UTILITIES
        ],
        src: './posts/2022/220503.js'
    },
    {   id: 220505, year: 2022, month: 5, day: 5,
        menuText: "Fill Dirt",
        tags: [
            tags.CLEAN_UP, tags.IMPROVEMENTS, tags.YARD
        ],
        src: './posts/2022/220505.js'
    },
    {   id: 220521, year: 2022, month: 5, day: 21,
        menuText: "Fallen Tree",
        tags: [
            tags.LITTLE_MOMENTS, tags.YARD
        ],
        src: './posts/2022/220521.js'
    },
    {   id: 220522, year: 2022, month: 5, day: 22,
        menuText: "A Mouse",
        tags: [
            tags.LITTLE_MOMENTS, tags.ANIMALS
        ],
        src: './posts/2022/220522.js'
    },
    {   id: 220605, year: 2022, month: 6, day: 5,
        menuText: "Germinating Mint",
        tags: [
            tags.PROJECTS, tags.YARD
        ],
        src: './posts/2022/220605.js'
    },
    {   id: 220606, year: 2022, month: 6, day: 6,
        menuText: "Driveway",
        tags: [
            tags.CLEAN_UP, tags.PROJECTS, tags.IMPROVEMENTS
        ],
        src: './posts/2022/220606.js'
    },
    {   id: 220617, year: 2022, month: 6, day: 17,
        menuText: "Blue Skies",
        tags: [
            tags.LITTLE_MOMENTS, tags.YARD
        ],
        src: './posts/2022/220617.js'
    },
    {   id: 220621, year: 2022, month: 6, day: 21,
        menuText: "Winkle's Gate",
        tags: [
            tags.LITTLE_MOMENTS, tags.YARD, tags.ANIMALS
        ],
        src: './posts/2022/220621.js'
    },
    {   id: 220625, year: 2022, month: 6, day: 25,
        menuText: "Lego Collection",
        tags: [
            tags.MOVE_IN, tags.LITTLE_MOMENTS, tags.LIVINGROOM
        ],
        src: './posts/2022/220625.js'
    },
    {   id: 220714, year: 2022, month: 7, day: 14,
        menuText: "Reptile Egss",
        tags: [
            tags.ANIMALS, tags.YARD
        ],
        src: './posts/2022/220714.js'
    },
    {   id: 220716, year: 2022, month: 7, day: 16,
        menuText: "Hawk Perch",
        tags: [
            tags.LITTLE_MOMENTS, tags.YARD, tags.ANIMALS
        ],
        src: './posts/2022/220716.js'
    },
    {   id: 220813, year: 2022, month: 8, day: 13,
        menuText: "Watching Paint Dry",
        tags: [
            tags.GARAGE, tags.CLEAN_UP
        ],
        src: './posts/2022/220813.js'
    },
    {   id: 220815, year: 2022, month: 8, day: 15,
        menuText: "Turkey Flock",
        tags: [
            tags.ANIMALS, tags.YARD
        ],
        src: './posts/2022/220815.js'
    },
    {   id: 220820, year: 2022, month: 8, day: 20,
        menuText: "Fallen Oak Tree Removal",
        tags: [
            tags.CLEAN_UP, tags.IMPROVEMENTS, tags.PROJECTS, tags.YARD
        ],
        src: './posts/2022/220820.js'
    },
    {   id: 220916, year: 2022, month: 9, day: 16,
        menuText: "Potato Harvest",
        tags: [
            tags.PLANTS, tags.PROJECTS
        ],
        src: './posts/2022/220916.js'
    },
    {   id: 220924, year: 2022, month: 9, day: 24,
        menuText: "Septic Groundcover",
        tags: [
            tags.PLANTS, tags.PROJECTS, tags.YARD
        ],
        src: './posts/2022/220924.js'
    },
    {   id: 220926, year: 2022, month: 9, day: 26,
        menuText: "Back Yard Update",
        tags: [
            tags.PROJECTS, tags.YARD, tags.YARD_UPDATE
        ],
        src: './posts/2022/220926.js'
    },
    {   id: 221011, year: 2022, month: 10, day: 11,
        menuText: "Vinyl Fence Removal",
        tags: [
            tags.CLEAN_UP, tags.PROJECTS, tags.YARD
        ],
        src: './posts/2022/221011.js'
    },
    {   id: 221029, year: 2022, month: 10, day: 29,
        menuText: "Sick Henry",
        tags: [
            tags.ANIMALS
        ],
        src: './posts/2022/221029.js'
    },
    {   id: 221030, year: 2022, month: 10, day: 30,
        menuText: "Front Yard Update",
        tags: [
            tags.PROJECTS, tags.YARD, tags.YARD_UPDATE
        ],
        src: './posts/2022/221030.js'
    },
    {   id: 221104, year: 2022, month: 11, day: 4,
        menuText: "Last Fire",
        tags: [
            tags.LITTLE_MOMENTS, tags.YARD
        ],
        src: './posts/2022/221104.js'
    },
    {   id: 221105, year: 2022, month: 11, day: 5,
        menuText: "Cat Feeder",
        tags: [
            tags.ANIMALS, tags.PROJECTS
        ],
        src: './posts/2022/221105.js'
    },
    {   id: 221106, year: 2022, month: 11, day: 6,
        menuText: "Cat House II",
        tags: [
            tags.ANIMALS, tags.PROJECTS
        ],
        src: './posts/2022/221106.js'
    },
    {   id: 221113, year: 2022, month: 11, day: 13,
        menuText: "First Snow",
        tags: [
            tags.LITTLE_MOMENTS, tags.YARD
        ],
        src: './posts/2022/221113.js'
    },
    {   id: 230113, year: 2023, month: 1, day: 13,
        menuText: "Winter",
        tags: [
            tags.LITTLE_MOMENTS, tags.YARD
        ],
        src: './posts/2023/230113.js'
    },
    {   id: 230215, year: 2023, month: 2, day: 15,
        menuText: "NE Front Yard Cleanup",
        tags: [
            tags.PROJECTS, tags.YARD
        ],
        src: './posts/2023/230215.js'
    },
    {   id: 230303, year: 2023, month: 3, day: 3,
        menuText: "Entertainment Wall Phase 1",
        tags: [
            tags.IMPROVEMENTS, tags.LIVINGROOM, tags.PROJECTS, tags.REPAIRS
        ],
        src: './posts/2023/230303.js'
    },
    {   id: 230316, year: 2023, month: 3, day: 16,
        menuText: "Pellet Stove Breakdown",
        tags: [
            tags.LIVINGROOM, tags.REPAIRS, tags.UTILITIES
        ],
        src: './posts/2023/230316.js'
    },
    {   id: 230325, year: 2023, month: 3, day: 25,
        menuText: "Water Heater Breakdown",
        tags: [
            tags.BASEMENT, tags.REPAIRS, tags.UTILITIES
        ],
        src: './posts/2023/230325.js'
    },
    {   id: 230329, year: 2023, month: 3, day: 29,
        menuText: "Tiny Snow People",
        tags: [
            tags.LITTLE_MOMENTS
        ],
        src: './posts/2023/230329.js'
    },
    {   id: 230330, year: 2023, month: 3, day: 30,
        menuText: "First Burn",
        tags: [
            tags.CLEAN_UP, tags.LITTLE_MOMENTS, tags.YARD
        ],
        src: './posts/2023/230330.js'
    },
    {   id: 230401, year: 2023, month: 4, day: 1,
        menuText: "Snowdrop Flower",
        tags: [
            tags.PLANTS, tags.YARD
        ],
        src: './posts/2023/230401.js'
    },
    {   id: 230402, year: 2023, month: 4, day: 2,
        menuText: "Cat House & Feeder Update",
        tags: [
            tags.ANIMALS, tags.PROJECTS
        ],
        src: './posts/2023/230402.js'
    },
    {   id: 230404, year: 2023, month: 4, day: 4,
        menuText: "Chimney Fail",
        tags: [
            tags.KITCHEN, tags.REPAIRS
        ],
        src: './posts/2023/230404.js'
    },
    {   id: 230407, year: 2023, month: 4, day: 7,
        menuText: "Picture Window Treatment",
        tags: [
            tags.LIVINGROOM, tags.IMPROVEMENTS, tags.PROJECTS
        ],
        src: './posts/2023/230407.js'
    },
    {   id: 230408, year: 2023, month: 4, day: 8,
        menuText: "Seed Growing Station",
        tags: [
            tags.KITCHEN, tags.PROJECTS, tags.YARD
        ],
        src: './posts/2023/230408.js'
    },
    {   id: 230427, year: 2023, month: 4, day: 27,
        menuText: "Not The Droids...",
        tags: [
            tags.LITTLE_MOMENTS, tags.LIVINGROOM
        ],
        src: './posts/2023/230427.js'
    },
    {   id: 230607, year: 2023, month: 6, day: 7,
        menuText: "Yume!",
        tags: [
            tags.ANIMALS, tags.LITTLE_MOMENTS
        ],
        src: './posts/2023/230607.js'
    },
    {   id: 230803, year: 2023, month: 8, day: 3,
        menuText: "South Fence Cleanup",
        tags: [
            tags.CLEAN_UP, tags.PROJECTS, tags.YARD
        ],
        src: './posts/2023/230803.js'
    },
    {   id: 230828, year: 2023, month: 8, day: 28,
        menuText: "Vinyl Fence Removal (continued)",
        tags: [
            tags.CLEAN_UP, tags.PROJECTS, tags.YARD
        ],
        src: './posts/2023/230828.js'
    },
    {   id: 230830, year: 2023, month: 8, day: 30,
        menuText: "Light Posts",
        tags: [
            tags.PROJECTS, tags.IMPROVEMENTS
        ],
        src: './posts/2023/230830.js'
    },
    {   id: 230903, year: 2023, month: 9, day: 3,
        menuText: "NW Yard Cleanup",
        tags: [
            tags.PROJECTS, tags.YARD
        ],
        src: './posts/2023/230903.js'
    },
    {   id: 230909, year: 2023, month: 9, day: 9,
        menuText: "Apple Tree Cuttings",
        tags: [
            tags.PLANTS, tags.PROJECTS
        ],
        src: './posts/2023/230909.js'
    },
    {   id: 230923, year: 2023, month: 9, day: 23,
        menuText: "A Little Sip",
        tags: [
            tags.ANIMALS, tags.BATHROOM, tags.LITTLE_MOMENTS
        ],
        src: './posts/2023/230923.js'
    },
    {   id: 231012, year: 2023, month: 10, day: 12,
        menuText: "AC Replacement",
        tags: [
            tags.LIVINGROOM, tags.PROJECTS, tags.IMPROVEMENTS
        ],
        src: './posts/2023/231012.js'
    },
    {   id: 231016, year: 2023, month: 10, day: 16,
        menuText: "Basil",
        tags: [
            tags.PLANTS, tags.PROJECTS
        ],
        src: './posts/2023/231016.js'
    },
    {   id: 231018, year: 2023, month: 10, day: 18,
        menuText: "Back Yard Update",
        tags: [
            tags.PROJECTS, tags.YARD, tags.YARD_UPDATE
        ],
        src: './posts/2023/231018.js'
    },
    {   id: 231019, year: 2023, month: 10, day: 19,
        menuText: "Beaver Work",
        tags: [
            tags.ANIMALS, tags.PLANTS, tags.YARD
        ],
        src: './posts/2023/231019.js'
    },
    {   id: 231020, year: 2023, month: 10, day: 20,
        menuText: "Kitchen Updgrade",
        tags: [
            tags.KITCHEN, tags.PLUMBING, tags.PROJECTS
        ],
        src: './posts/2023/231020.js'
    },
    {   id: 231220, year: 2023, month: 12, day: 20,
        menuText: "Cat Friends",
        tags: [
            tags.ANIMALS, tags.LITTLE_MOMENTS
        ],
        src: './posts/2023/231220.js'
    }
]
