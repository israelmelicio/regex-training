const emails = `
 israel_melicio@yahoo.com
 israel.melicio@uol.com.br
 israel@mwg.digital
 israel-melicio@msn.com
 yala-comenc.r@yalla.com.abudhabi
`

const re = /[\w\-/.]+@[\w\-/.]+([a-zA-Z]+)/g

console.log(emails.match(re))
