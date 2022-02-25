<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light" id="main-navBar">
      <div class="container-fluid ml-auto">
        <h5>MY PORTFOLIO</h5>
        <!-- <i class="bi bi-emoji-heart-eyes ml-2 text-center"></i> -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#"></a>
            </li>

            <li class="nav-item">
              <a class="nav-link disabled"></a>
            </li>
          </ul>
          <form class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"  id="navBar">
              <li class="nav-item ml-4">
                <i class="bi bi-house-fill"></i>
                <a class="nav-link d-inline " href="#content-1">Home</a>
              </li>
              
              <li class="nav-item ml-4">
                <i class="bi bi-book"></i>
                <a class="nav-link d-inline " href="#content-2"
                
                  >Qualification
                </a>
              </li>

              <li class="nav-item ml-4">
                <i class="bi bi-card-heading"></i>
                <a class="nav-link d-inline " href="#content-3"
                  >Experience
                </a>
              </li>

              <li class="nav-item ml-4">
                <i class="bi bi-paperclip"></i>
                <a class="nav-link d-inline " href="#content-4"
                  >Resume
                </a>
              </li>

              <li class="nav-item ml-4">
                <i class="bi bi-person-hearts"></i>
                <a class="nav-link d-inline " href="#content-5"
                  >About Us
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
    
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          href: "https://fonts.googleapis.com",
          rel: "preconnect",
        },
        {
          href: "https://fonts.gstatic.com",
          rel: "preconnect",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Akaya+Telivigala&family=Itim&family=Quicksand:wght@500&display=swap",
          rel: "stylesheet",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Moul&display=swap",
          rel: "stylesheet",
        },
        //
      ],
    };
  },
};
</script>

<style>
i {
  color: #a89e10;
}

#navBar {
  font-family: "Akaya Telivigala";
}

.offcanvas-header {
  font-family: "Itim";
}

nav#main-navBar {
  /* position: relative !important; */
  background-color: #e0dba7 !important;
}
</style>