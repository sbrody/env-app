

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
        name: 'Transport',
        subtitle: 'Cars and planes are a significant and growing contributor to carbon emissions',
        description: 'In 2017, transport accounted for 27% of carbon emissions in the EU, 28% higher than 1990. International aviation was responsible for the largest percentage increase in that period - at 129% - but road transport emissions also increased by 23%.',
        value: 0,
        evidence: [
            {
                Title: "Greenhouse gas emissions from transport in Europe",
                Url: "https://www.eea.europa.eu/data-and-maps/indicators/transport-emissions-of-greenhouse-gases/transport-emissions-of-greenhouse-gases-12"
            }
        ],
        children: [
            {
                ID: 2.1,
                name: 'Committing to two flights this year',
                subtitle: 'Ditch the city breaks or go by train',
                description: 'more text here',
                value: 10,
                evidence: 'more text here too',
                selected: false
            },
            {
                ID: 2.2,
                name: 'Making your regular local trips via foot, bicycle or public transport',
                subtitle: "Ditching the car for daily commute and school run.",
                description: 'more text here',
                value: 10,
                evidence: 'more text here too',
                selected: false
            },
            {
                ID: 2.3,
                name: 'Going electric',
                subtitle: 'Replacing your petrol or diesel car with an electric vehicle',
                description: 'more text here',
                value: 15,
                evidence: 'more text here too',
                selected: false
            },
        ]
    },
    {
        ID: 3,
        name: 'Domestic/utilities',
        subtitle: "Rescuing the climate begins at home.",
        description: "A quarter of the world's CO2 emissions are associated with electricity and heat production. Some methods of energy generation, such as burning coal or natural gas, directly produce greenhouse gases. It makes sense to opt for renewable forms of energy generation such as wind power or solar energy where possible, and reduce the amount of energy you use.",
        value: 0,
        evidence: [
            {
                Title: "Global Greenhouse Gas Emissions Data",
                Url: "https://www.epa.gov/ghgemissions/global-greenhouse-gas-emissions-data"
            }
        ],
        children: [
            {
                ID: 3.1,
                name: 'Switching to an eco energy supplier',
                subtitle: 'Find a supplier that promises 100% renewable',
                description: "Find the most environmentally-friendly energy suppliers here: https://energysavingtrust.org.uk/home-energy-efficiency/switching-utilities/buying-green-electricity",
                value: 10,
                evidence: 'more text here too',
                selected: false 
            },
            {
                ID: 3.2,
                name: 'Improving your insulation',
                subtitle: 'One of the most effective ways to reduce your domestic carbon footprint.',
                description: "A third of heat escapes through the walls of hour homes. You can reduce your emissions by 20% by installing cavity wall insulation. Loft insulation is also very cost-effective. To find out more about your insulation options, you can pay about £50 for an accredited energy performance assessor - find one <a href='https://www.epcregister.com/searchAssessor.html'>here</a>",
                value: 10,
                evidence: [
                    {
                        Title: "Saving Energy At Home: Friends of the Earth",
                        Url: "https://friendsoftheearth.uk/climate-change/saving-energy-home-heating-and-insulation"
                    }
                ],
                selected: false 
            },
            
        ]
    },
    // {
    //     // Shopping choices
    // },
    {
        ID: 4,
        name: 'Political action',
        subtitle: "This is too big to tackle alone.",
        description: "'We don’t expect individuals to take the lead when it comes to other social and economic challenges, such as unemployment', says climate academic Anders Levermann. '...The same is true of the climate crisis. What we need is citizens to make adamant demands of their politicians and institutions for more urgent action.'",
        value: 0,
        evidence: [
            {
                Title: "Individuals can’t solve the climate crisis. Governments need to step up.",
                Url: "https://www.theguardian.com/commentisfree/2019/jul/10/individuals-climate-crisis-government-planet-priority"
            }
        ],
        children: [
            {
                ID: 4.1,
                name: 'Join a national campaign group',
                subtitle: 'Support groups fighting climate change and stay up to date with campaigns',
                description: "Three groups you could support include Greenpeace, Friends of the Earth and Extinction Rebellion. Any subscription fees will help the groups with their campaigns and you'll also get to find out about how to get more involved with campaigns.",
                value: 10,
                evidence: 'more text here too',
                selected: false 
            },
            {
                ID: 4.2,
                name: 'Get involved in a local campaign group',
                subtitle: 'Build action from the ground up',
                description: "Greenpeace, Friends of the Earth and Extinction Rebellion all have local groups you could get involved in, depending how radical you feel. Local groups inspire others to take climate action and pressure local councils to adopt climate action plans.",
                value: 10,
                evidence: 'more text here too',
                selected: false 
            },
            {
                ID: 4.3,
                name: 'Take action online',
                subtitle: "We can all do this, it's easy!",
                description: "Signing online petitions and writing to politicians and large companies is something you can do with little effort and is one way to start your environmental campaigning journey. Friends of the Earch lists <a href='https://friendsoftheearth.uk/latest/actions'>lots of actions</a> you can take, from writing to local councillors about tree planting to calling on the government to take urgent climate action.",
                value: 10,
                evidence: 'more text here too',
                selected: false 
            },
            {
                ID: 4.4,
                name: 'Take to the streets',
                subtitle: "Show governments and big business how much you care",
                description: "Extinction Rebellion have made the headlines when it comes to radical direct action on climate change. You could also join the school climate strikes and other local and national events to come. No-one can deny the strength of feeling inherent in mass protest - get involved to start making a real difference.",
                value: 10,
                evidence: 'more text here too',
                selected: false 
            },
        ]
    }

];

export {envChoices};