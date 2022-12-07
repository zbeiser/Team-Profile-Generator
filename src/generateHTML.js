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
    <header>
      <h1>My Team</h1>
    </header>
    ${generateCards(data)}
  </body>
  </html>
  `
}

function generateCards(data) {
  teamHTMLArray = [];
  data.forEach(member => {
    if (member.getRole() === 'Manager') {
      teamHTMLArray.push(`<section>
      <h2>${member.getName()}</h2>
      <p>${member.getRole()}</p>
      <ul>
        <li>${member.getId()}</li>
        <li>${member.getEmail()}</li>
        <li>${member.getOfficeNumber()}</li>
      </ul>
    </section>`)
    } else if (member.getRole() === 'Engineer') {
      teamHTMLArray.push(`<section>
      <h2>${member.getName()}</h2>
      <p>${member.getRole()}</p>
      <ul>
        <li>${member.getId()}</li>
        <li>${member.getEmail()}</li>
        <li>${member.getGithub()}</li>
      </ul>
    </section>`)
    } else if (member.getRole() === 'Intern') {
      teamHTMLArray.push(`<section>
      <h2>${member.getName()}</h2>
      <p>${member.getRole()}</p>
      <ul>
        <li>${member.getId()}</li>
        <li>${member.getEmail()}</li>
        <li>${member.getSchool()}</li>
      </ul>
    </section>`)
    }
  })
  return teamHTMLArray.join('');
}

module.exports = generateHTML;