hljs.registerLanguage("heck", function() {

    let HECK_KEYWORDS = {
        keyword: 'if while for return class namespace func let int string bool float char import export const friend public private operator global this',
        literal: 'true false'
    };
    
    let HECK_NUMBERS = {
        className: 'number',
        variants: [
          {begin: hljs.C_NUMBER_RE + '[i]', relevance: 1},
          hljs.C_NUMBER_MODE
        ]
    };
    
    let HECK_STRINGS = {
        className: 'string',
        contains: [hljs.BACKSLASH_ESCAPE],
        relevance: 0,
        variants: [
            {begin: /"/, end: /("|$)/},
            {begin: /'/, end: /('|$)/, relevance: 1}
        ]
    };

    let HECK_TITLE_MODE = {
        className: 'title',
        begin: /[a-zA-Z_][a-zA-Z0-9_]*(\.[a-zA-Z_][a-zA-Z0-9_]*)*/
    };

    // similar to tile mode, but allows operator overloading
    let HECK_FUNC_TITLE_MODE = {
        begin: /[a-zA-Z_][a-zA-Z0-9_]*/,
        className: 'title',
        contains: [
            {
                className: 'title',
                begin: /\./,
                contains: [
                    {
                        beginKeywords: 'operator'
                    },
                    {
                        begin: /[a-zA-Z_][a-zA-Z0-9_]*/
                    }
                ]
            }
        ]
    }

    let HECK_LINE_COMMENT_MODE = {
        className: 'comment',
        begin: /\/\//, end: /$/,
        contains: [hljs.BACKSLASH_ESCAPE]
    };

    let HECK_BLOCK_COMMENT_MODE = hljs.COMMENT(
        /\/\*/, // begin
        /\*\//, // end
        {
            contains: ['self']
        }
    );

    return {
        case_insensitive: true, // language is case-insensitive
        keywords: HECK_KEYWORDS,
        contains: [
            HECK_STRINGS,
            HECK_NUMBERS,
            HECK_LINE_COMMENT_MODE,
            HECK_BLOCK_COMMENT_MODE,
            {
                className: 'function', // function
                beginKeywords: 'func', end: /\s*(\{|$)/, excludeEnd: true,
                contains: [
                    {
                        beginKeywords: 'operator'
                    },
                    HECK_FUNC_TITLE_MODE,
                    {
                        className: 'params',
                        begin: /\s*\(/, end: /\)/,
                        keywords: HECK_KEYWORDS,
                        relevance: 0,
                        contains: [
                            'self',
                            HECK_LINE_COMMENT_MODE,
                            HECK_BLOCK_COMMENT_MODE,
                            HECK_STRINGS,
                            HECK_NUMBERS
                        ]
                    }
                ]
            },
            {
                className: 'title',
                beginKeywords: 'class', end: /\s*(\{|$)/, excludeEnd: true,
                contains: [HECK_TITLE_MODE]
            }
        ]
    }
});