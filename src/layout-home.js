 /**
 * Layout for home page.
 *
 */
layout.home = new Layout('home')
layout.home.html(`
<main>
  <section class="home-intro">
      <div class="home-intro-content container">
        <h2>${MULTIBAO.UVP1}<span>${MULTIBAO.UVP2}</span></h2>
        <div>
          <a href="${MULTIBAO.LINK1}">${MULTIBAO.BUTTON1}</a>
        </div>
        <div>
          <a href="${MULTIBAO.LINK2}">${MULTIBAO.BUTTON2}</a>
        </div>
      </div>
  </section>
  <section id="gh-crew-list" class="container">
    <ul data-template="crews">
    </ul>
  </section>
</main>`)
