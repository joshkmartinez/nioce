module.exports = (req, res) => {
  res.writeHead(302, {
    Location: 'https://youtu.be/h3uBr0CCm58?t=1'
  })
  res.end()
}
