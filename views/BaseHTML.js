const htmlStructure = changedHTML => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="/styles.css" />
      <title>Document</title>
    </head>
    <body>
      <h1><a href = "/">Home</a></h1>

      <p><a href="/users">Users</a></p>
      ${changedHTML}
  </body>
  </html>`
}

module.exports = htmlStructure
