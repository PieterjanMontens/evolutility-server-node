/*
  Evolutility DB Model for Object
  https://github.com/evoluteur/evolutility-server-node
*/

module.exports = {
	"id": "object",
	"table": "evol_object",
	"titleField": "title",
	"fields": [
		{
			"id": "title",
			"type": "text",
			"label": "Title",
			"required": true,
			"maxLength": 200,
			"inMany": true,
			"column": "title"
		},
		{
			"id": "active",
			"type": "boolean",
			"label": "Active",
			"inMany": true,
			"column": "active"
		},
		{
			"id": "world",
			"type": "lov",
			"label": "World",
			"object": "world",
			"lovIcon": false,
			"inMany": true,
			"column": "world_id",
			"lovTable": "evol_world"
		},
		{
			"id": "table",
			"type": "text",
			"label": "DB Table name",
			"required": true,
			"maxLength": 100,
			"inMany": true,
			"column": "table"
		},
		{
			"id": "pKey",
			"column": "pkey",
			"label": "Primary key column",
			"type": "text",
		},
		{
			"id": "entity",
			"type": "text",
			"label": "Entity Id",
			"required": true,
			"maxLength": 100,
			"inMany": true,
			"column": "entity"
		},
		{
			"id": "name",
			"type": "text",
			"label": "Object name (singular)",
			"required": true,
			"maxLength": 50,
			"inMany": true,
			"column": "name"
		},
		{
			"id": "namePlural",
			"type": "text",
			"label": "name (plural)",
			"required": true,
			"maxLength": 50,
			"column": "nameplural"
		},
		{
			"id": "icon",
			"type": "image",
			"label": "Icon",
			"readOnly": true,
			"maxLength": "50",
			"inMany": true,
			"column": "icon"
		},
		{
			"id": "description",
			"type": "textmultiline",
			"label": "Description",
			"maxLength": 250,
			"column": "description"
		}
	],
	"collections": [
		{
			"id": "collec-fields",
			"table": "evol_field",
			"column": "object_id",
			orderby: 'position', // column but should be fieldid
			"object": "field",
			"fields": [
				{
					"id": "label",
					"type": "text",
					"label": "Label",
					"column": "label"
				},
				{
					"id": "type",
					"type": "lov",
					"label": "Type",
					"lovIcon": true,
					"column": "type_id",
					"lovTable": "evol_field_type",
				},
				{
					"id": "column",
					"label": "column",
					"column": "dbcolumn"
				},
				{
					"id": "inMany",
					"type": "boolean",
					"label": "List",
					"column": "inmany"
				},
				{
					"id": "width",
					"type": "integer",
					"label": "Width",
					"defaultValue": 100,
					"column": "width"
				},
				{
					"id": "height",
					"type": "integer",
					"label": "Height",
					"column": "height"
				},
				{
					"id": "required",
					"type": "boolean",
					"label": "Required",
					"column": "required"
				}
			]
		}
	]
}