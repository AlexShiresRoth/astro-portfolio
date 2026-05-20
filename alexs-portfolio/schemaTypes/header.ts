import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'contentList',
      title: 'Content List',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
