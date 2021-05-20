import React from "react";

function Project() {
  return (
    <main class="d-flex flex-column bg-light p-5">
      <section class="d-flex flex-wrap">
        <div class="card p-3 mt-2 mb-2 d-flex flex-column flex-lg-row">
          <div>
            <h3 class="card-title">Bake It Til You Make It</h3>
            <p class="card-text">
              This application utilizes two third-party APIs, allowing a user to
              see upcoming holidays (from Calendarific API), select a holiday,
              see recipes for that holiday (from Edamam API), and save recipes
              to a list (local storage).
            </p>
            <ul>
              <li>
                <a
                  class="card-link"
                  href="https://github.com/julesscheil/Project-1"
                >
                  GitHub Repo
                </a>
              </li>
              <li>
                <a
                  class="card-link"
                  href="https://julesscheil.github.io/Project-1/"
                >
                  Deployed App
                </a>
              </li>
            </ul>
          </div>
          <img src="recipe-page.png" alt="Recipe Page" class="p-2" />
        </div>
      </section>
    </main>
  );
}

export default Project;
