import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'novedad',
  title: 'Novedad',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'imgPort',
      title: 'Portada',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'imagenes',
      title: 'Carrete imagenes',
      type: 'array',
      of:[{type: 'image'}],
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'topics',
      title: 'Temas',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'newsDatetime',
      title: 'Fecha de publicacion',
      type: 'datetime',
    }),
    defineField({
      name: 'newsBody',
      title: 'Cuerpo de novedad',
      type: 'blockContent',
    }),
    defineField({
      name: 'status',
      title: 'Estado',
      type: 'boolean',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'imgPort',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
