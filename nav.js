document.addEventListener("DOMContentLoaded", function () {

  const navContainer = document.getElementById("site-nav");

  if (!navContainer) return;

  navContainer.innerHTML = `
    <nav class="main-nav" aria-label="Primary navigation">
      <ul>

        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="/makereservation.html">Reservation</a>
        </li>

        <li>
          <a href="/curbside-.html">Curbside</a>
        </li>

        <li>
          <a href="/rates.html">Airport Rates</a>
        </li>

        <li>
          <a href="/terms_and_conditions.html">Full Terms</a>
        </li>

        <li>
          <a href="/Cancel.html">Cancellation</a>
        </li>

        <li>
          <a href="/credit_card_authorization_online-b.htm">Credit Card</a>
        </li>

        <li>
          <a href="/aboutus.html">About</a>
        </li>

        <li>
          <a href="/contact-2.html">Contact</a>
        </li>

      </ul>
    </nav>
  `;

});
