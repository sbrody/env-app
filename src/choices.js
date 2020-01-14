

const envChoices = [
    {
        ID: 1,
        name: 'Food',
        subtitle: 'testing here',
        description: 'more text here',
        value: 0,
        evidence: 'more text here too',
        children: [
            {
                ID: 1.1,
                name: 'Going vegetarian',
                subtitle: 'testing here',
                description: 'more text here',
                value: 5,
                evidence: 'more text here too'
            },
            {
                ID: 1.2,
                name: 'Going vegan',
                subtitle: 'testing here',
                description: 'more text here',
                value: 5,
                evidence: 'more text here too'
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
                value: 5,
                evidence: 'more text here too'
            }
        ]
    }
];

export {envChoices};