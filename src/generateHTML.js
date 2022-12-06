function generateHTML(data) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./style.css">
    <title>My Team</title>
  </head>
  <body>
    ${generateCards(data)}
  </body>
  </html>
  `
}

function generateCards(data) {
  data.forEach(member => {
    if (member.getRole() === 'Manager') {
      //Card HTML
    } else if (member.getRole() === 'Engineer') {
      //Card HTML
    } else if (member.getRole() === 'Intern') {
      //Card HTML
    }
  })
}

module.exports = generateHTML;