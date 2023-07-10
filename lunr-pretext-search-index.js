var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   example.org   https:\/\/example.org   copyright  "
},
{
  "id": "section-title",
  "level": "1",
  "url": "section-title.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section title",
  "body": " Section title  Hello World!!    An example of math is .    As we saw in , math is cool.   A tikz image   This is an example image     "
},
{
  "id": "def-first-definition",
  "level": "2",
  "url": "section-title.html#def-first-definition",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  An example of math is .   "
},
{
  "id": "first-fig",
  "level": "2",
  "url": "section-title.html#first-fig",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " A tikz image   This is an example image    "
},
{
  "id": "sec-second-section",
  "level": "1",
  "url": "sec-second-section.html",
  "type": "Section",
  "number": "1.2",
  "title": "Second Section",
  "body": " Second Section  Beautiful words, many beautful words!  "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
