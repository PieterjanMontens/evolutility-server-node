module.exports =  {
    id: 'comics',
    table: 'comics',
    label: 'Graphic Novels',
    active: true,
    name: 'serie',
    namePlural: 'series',
    titleField: 'title',
    searchFields: ['title', 'authors', 'notes'],
    fields: [
        {
            id: 'title', column: 'title', type: 'text', label: 'Title', required: true, 
            maxLength: 255,
            inMany: true
        },
        {
            id: 'genre', column: 'genre_id', type: 'lov', label: 'Genre', inMany: true,
            list: [
                {id: 1, text: 'Adventure'},
                {id: 3, text: 'Erotic'},
                {id: 2, text: 'Fairy tale'},
                {id: 4, text: 'Fantastic'},
                {id: 14, text: 'Graphic novel'},
                {id: 5, text: 'Heroic Fantasy'},
                {id: 6, text: 'Historic'},
                {id: 7, text: 'Humor'},
                {id: 8, text: 'One of a kind'},
                {id: 11, text: 'Science-fiction'},
                {id: 12, text: 'Super Heros'},
                {id: 10, text: 'Thriller'},
                {id: 13, text: 'Western'},
                {id: 9, text: 'Youth'},
            ],
            lovTable: 'comics_genre'
        },
        {
            id: 'authors', column: 'authors', type: 'text', inMany: true,
            label: 'Authors'
        },
        {
            id: 'language', column: 'language_id', type: 'lov', label: 'Language', inMany: true,
            lovIcon: true,
            list: [
                {id: 2, text: 'French', icon:'comics/flags/fr.png'},
                {id: 1, text: 'American', icon:'comics/flags/us.png'}
            ],
            lovTable: 'comics_language'
        },
        {
            id: 'serie_nb', column: 'serie_nb', type: 'integer', inMany: true,
            label: 'Albums', inCharts:false 
        },
        {
            id: 'have_nb', column: 'have_nb', type: 'integer', inMany: true,
            label: 'Owned', inCharts:false 
        },
        {
            id: 'have', column: 'have', type: 'text', inMany: false,
            label: 'Have' 
        },
        {
            id: 'complete', column: 'complete', type: 'boolean', inMany: true,
            label: 'Complete', labelFalse:'Incomplete', labelTrue:'Complete'
        },
        {
            id: 'finished', column: 'finished', type: 'boolean', inMany: true,
            label: 'Finished', labelTrue:'Finished', labelFalse:'Not finished', css:'cBlue'
        },
		{
			"id": "url_bdfugue",
			"type": "url",
			"label": "BDFugue",
			"column": "url_bdfugue",
		},
		{
			"id": "url_amazon",
			"type": "url",
			"label": "Amazon",
			"column": "url_amazon",
		},
        {
            id: 'notes', column: 'notes', type: 'textmultiline', label: 'Notes', maxLength: 1000,
            inMany: false
        },
        {
            id: 'pix', column: 'pix', type: 'image', inMany: true,
            label: 'Album Cover'
        }
    ]
};
