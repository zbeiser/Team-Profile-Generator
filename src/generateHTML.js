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
    <div class="container">
      ${generateCards(data)}
    </div>
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
        <li>ID: ${member.getId()}</li>
        <li>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
        <li>Office number: ${member.getOfficeNumber()}</li>
      </ul>
    </section>`)
    } else if (member.getRole() === 'Engineer') {
      teamHTMLArray.push(`<section>
      <h2>${member.getName()}</h2>
      <p>${member.getRole()}</p>
      <ul>
        <li>ID: ${member.getId()}</li>
        <li>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
        <li>GitHub: <a href="https://github.com/${member.getGithub()}" target="_blank" rel="noopener noreferrer">${member.getGithub()}</a></li>
      </ul>
    </section>`)
    } else if (member.getRole() === 'Intern') {
      teamHTMLArray.push(`<section>
      <h2>${member.getName()}</h2>
      <p>${member.getRole()}</p>
      <ul>
        <li>ID: ${member.getId()}</li>
        <li>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
        <li>School: ${member.getSchool()}</li>
      </ul>
    </section>`)
    }
  })
  return teamHTMLArray.join('\r\n    ');
}

module.exports = generateHTML;