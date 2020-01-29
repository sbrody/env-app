

const envChoices = [
    {
        ID: 1,
        name: 'Food',
        subtitle: 'Your food choices can have a big impact',
        description: 'A quarter of global carbon emissions come from food and 58% of food emissions come from animal products. Half of farmed animal emissions come from beef and lamb. The United Nations Intergovernmental Panel on Climate Change says switching to a plant-based diet can help fight climate change.',
        value: 0,
        evidence: [
            {
                Title: 'Reducing food’s environmental impacts through producers and consumers',
                Url: 'https://ora.ox.ac.uk/objects/uuid:b0b53649-5e93-4415-bf07-6b0b1227172f'
            },
            {
                Title: 'Climate Change and Land',
                Url: 'https://www.ipcc.ch/srccl/'
            }
        ],
        children: [
            {
                ID: 1.1,
                name: 'Go meat free one day a week',
                subtitle: "It's a start!",
                description: 'Very achievable - and the start of your environmental journey.',
                value: 5,
                evidence: 'more text here too',
            },
            {
                ID: 1.2,
                name: 'Go meat free three days a week',
                subtitle: "You're getting the hang of this!",
                description: "You're starting to have a real impact and probably discovering some delicious meat alternatives.",
                value: 15,
                evidence: 'more text here too',
            },
            {
                ID: 1.3,
                name: 'Make meat an occasional meal',
                subtitle: "Meat minimalism",
                description: "You can't imagine living without meat but you're still walking the walk.",
                value: 30,
                evidence: 'more text here too',
            },
            {
                ID: 1.4,
                name: 'Go vegetarian',
                subtitle: 'Major milestone reached.',
                description: 'No meat or fish - you have massively reduced your carbon footprint',
                value: 40,
                evidence: 'more text here too',
            },
            {
                ID: 1.4,
                name: 'Go vegan',
                subtitle: "Plant-based food only.",
                description: "No meat, fish, eggs or dairy. You're a climate superstar and the animals love you too!",
                value: 50,
                evidence: 'more text here too',
            }
        ]
    },
    {
        ID: 2,
        name: 'Travel',
        subtitle: 'testing here',
        description: 'more text here',
        value: 0,
        evidence: 'more text here too',
        children: [
            {
                ID: 2.1,
                name: 'Committing to one flight this year',
                subtitle: 'testing here',
                description: 'more text here',
                value: 7,
                evidence: 'more text here too',
                selected: false
            }
        ]
    },
    // {
    //     // Household.. heating, electricity etc
    // },
    // {
    //     // Shopping choices
    // },
    // {
    //     // Political campaigning - joining a group, contributing money, direct action, petition, email/tweet politician or business
    // },

];

export {envChoices};