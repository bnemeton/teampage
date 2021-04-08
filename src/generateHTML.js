const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const Manager = require('../lib/manager');

var generateHTML = function(team) {
    let body = `` //cards go here

    let card = team.manager.printCard();
    body += card;

    team.engineers.forEach(engineer => {
        let card = engineer.printCard();
        body += card;
    })
    team.interns.forEach(intern => {
        let card = intern.printCard();
        body += card;
    })
    

    return `
    <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>your team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Your employee team:
      </h1>
    </div>
    <div class="container">
    <div class='tile is-ancestor'>
    <div class='tile is-parent'>
        ${body}
    </div>
    </div>
    </div>
  </section>
  </body>
</html>

    `
}



module.exports = generateHTML;