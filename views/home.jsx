const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/ramen-noodles.jpg" alt="ramen noodles"/>
                <div>
                  Photo by <a href="https://unsplash.com/@goodeats_yqr">@goodeats_yqr</a> on <a href="https://unsplash.com/">Unsplash</a>
                </div>
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }  

module.exports = home
