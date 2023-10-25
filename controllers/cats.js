function fact(req, res) {
  fetch('https://catfact.ninja/fact')
    .then(res => res.json())
    .then(cat => {
      console.log(cat);
      res.render('cats/fact', {
        fact: cat.fact,
      })
    })
}

function facts(req, res) {
    fetch("https://catfact.ninja/facts")
        .then(res => res.json())
      .then(data => {
        const facts = data.data;
        const catFacts = facts.map(cat => cat.fact);
            console.log(catFacts);
            res.render("cats/facts", {
                facts: catFacts,
            })
        } )
}


module.exports = {
  fact,
  facts,
}