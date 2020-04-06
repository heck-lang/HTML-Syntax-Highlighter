hljs.registerLanguage("heck", function() {
    return {
        case_insensitive: true, // language is case-insensitive
        keywords: {
            keyword: 'if while for return class namespace func let int string bool float char import export const friend public private operator global this',
            literal: 'true false'
        },
        contains: [
            hljs.COMMENT(
                '/\\*', // begin
                '\\*/', // end
                {
                    contains: ['self']
                }
            ),
            {
                className: 'comment',
                begin: '//', end: '$'
            },
            {
                className: 'string',
                contains: [
                    hljs.BACKSLASH_ESCAPE,
                    {
                        begin: '$', endsParent: true
                    }
                ],
                relevance: 0,
                variants: [
                    {begin: /"/, end: /"/},
                    {begin: /'/, end: /'/, relevance: 1}
                ]
            },
            {
                className: 'number',
                begin: "\\-?(\\d+(\\.\\d*)?|(\\d*\\.)?\\d+)"
            },
            {
                className: 'title',
                begin: '[_a-zA-Z][_a-zA-Z0-9]*(?=(\\s*\\())'
            }
        ]
    }
});