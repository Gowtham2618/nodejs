<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light" id="main-navBar">
      <div class="container-fluid ml-auto">
        <h4>MY PORTFOLIO</h4>
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
                <a class="nav-link d-inline active" id="nav-1" href="#content-1" @click="homeContent()">Home</a>
              </li>
              
              <li class="nav-item ml-4">
                <i class="bi bi-book"></i>
                <a class="nav-link d-inline" id="nav-2" href="#content-2" @click="qualificationContent()">Qualification
                </a>
              </li>

              <li class="nav-item ml-4">
                <i class="bi bi-card-heading"></i>
                <a class="nav-link d-inline" id="nav-3" href="#content-3" @click="experienceContent()">Experience
                </a>
              </li>

              <li class="nav-item ml-4">
                <i class="bi bi-paperclip"></i>
                <a class="nav-link d-inline" id="nav-4" href="#content-4" @click="resumeContent()">Resume
                </a>
              </li>

              <li class="nav-item ml-4">
                <i class="bi bi-person-hearts"></i>
                <a class="nav-link d-inline" id="nav-5" href="#content-5" @click="aboutContent()">About Us
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

  methods:{
    homeContent: function() {
      $('#nav-1').addClass('active');
      $('#nav-2').removeClass('active');
      $('#nav-3').removeClass('active');
      $('#nav-4').removeClass('active');
      $('#nav-5').removeClass('active');
      // $('#arrow').hide();
    },

    qualificationContent: function() {
      $('#nav-2').addClass('active');
      $('#nav-1').removeClass('active');
      $('#nav-3').removeClass('active');
      $('#nav-4').removeClass('active');
      $('#nav-5').removeClass('active');
    },

    experienceContent: function() {
      $('#nav-3').addClass('active');
      $('#nav-2').removeClass('active');
      $('#nav-1').removeClass('active');
      $('#nav-4').removeClass('active');
      $('#nav-5').removeClass('active');
    },

     resumeContent: function() {
      $('#nav-4').addClass('active');
      $('#nav-2').removeClass('active');
      $('#nav-3').removeClass('active');
      $('#nav-1').removeClass('active');
      $('#nav-5').removeClass('active');
    },

     aboutContent: function() {
      $('#nav-5').addClass('active');
      $('#nav-2').removeClass('active');
      $('#nav-3').removeClass('active');
      $('#nav-4').removeClass('active');
      $('#nav-1').removeClass('active');
    }
  }
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

h4 {
  font-family: "Akaya Telivigala" !important;
  font-size: 35px;
}
</style>