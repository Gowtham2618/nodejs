<template>
  <div>
    <div class="main-content mt-5">
      <div class="row mt-5"></div>
      <div class="row mt-5" id="content-1">
        <div class="col-sm-12 col-md-2 p-2"></div>
        <div class="col-sm-12 col-md-4 w-100 p-2">
          <div class="card" id="img-1" style="border: none">
            <img src="/images/content-10.png" id="card-1" alt="" />
          </div>
        </div>
        <div class="col-sm-12 col-md-6 p-4" id="card-1-txt">
          <h5 class="ml-5"><i class="bi bi-telegram"></i> Hi Everyone,</h5>
          <p class="ml-5 p-2">
            I'm Gowtham from Thanjavur in Tamil Nadu and i did my Under Graduate
            in thanjavur and i have 2 years working experience in software field
            and, i am interested in learning new programming languages.
          </p>
        </div>
      </div>

      <div class="row mt-5" id="content-2">
        <div class="col-sm-12 col-md-6 p-2" id="card-2-txt">
          <h5 class="ml-5"><i class="bi bi-building"></i> EDUCATIONS,</h5>
          <p class="ml-5 p-2">
            <i class="bi bi-house"></i> Maxwell Matriculation Higher Secondary
            School. <br />
            <i class="bi bi-award-fill"></i> SSLC(79%), HSC(60%)<br />
            <i class="bi bi-geo-alt"></i> Thanjavur
          </p>

          <p class="ml-5 p-2">
            <i class="bi bi-house"></i> Bharath College of Science and
            Management. <br />
            <i class="bi bi-award-fill"></i> BSC-Information Technogly (76%).
            <br />
            <i class="bi bi-geo-alt"></i> Thanjavur
          </p>
        </div>
        <div class="col-sm-12 col-md-5 w-100 p-2">
          <div class="card" style="border: none">
            <img src="/images/content-11.jpg" id="card-2" alt="" />
          </div>
        </div>
      </div>

      <div class="row" id="content-3">
        <div class="col-sm-12 col-md-2"></div>
        <div class="col-sm-12 col-md-4 w-100 p-2">
          <div class="card" style="border: none">
            <img src="/images/content-4.jpg" id="card-3" alt="" />
          </div>
        </div>
        <div class="col-sm-12 col-md-6" id="card-3-txt">
          <h5 class="ml-5"><i class="bi bi-code-slash"></i> LANGUAGES,</h5>
          <p class="ml-5 p-2">
            <i class="bi bi-filetype-js"></i>
            HTML,CSS,JavaScript,Bootstrap<br />
            <i class="bi bi-braces-asterisk"></i> Vuejs,Nuxtjs <br />
            <i class="bi bi-star-fill"></i> NodeJs(ExpressJs) <br />
            <i class="bi bi-box-seam"></i> AWS,Shopify <br />
            <i class="bi bi-github"></i> GitEye <br />
            <i class="bi bi-apple"></i> Mac,Linux,Windows
          </p>
        </div>
      </div>

      <div class="row" id="content-4">
        <div class="col-sm-12 col-md-2 w-100"></div>
        <div class="col-sm-12 col-md-4 w-100 p-2" id="card-4-txt">
          <h5 class="ml-5"><i class="bi bi-file-code"></i> CV</h5>
          <p class="ml-5 p-4">
            <i class="bi bi-cursor-fill"></i> Click the icon to download my cv
            <a href="/downlaod"> <i class="bi bi-cloud-arrow-down-fill"></i></a>
          </p>
        </div>
        <div class="col-sm-12 col-md-4">
          <div class="card" style="border: none">
            <img src="/images/content-9.jpg" id="card-4" alt="" />
          </div>
        </div>
        <div class="col-sm-12 col-md-2 w-100"></div>
      </div>

      <div class="row" id="content-5">
        <div class="col-sm-12 col-md-4 w-100">
          <div class="card" style="border: none">
            <img src="/images/content-7.webp" id="card-5" alt="" />
          </div>
        </div>
        <div class="col-sm-12 col-md-6 p-4" id="card-5-txt">
          <h5 class="ml-5"><i class="bi bi-tags"></i> ABOUT MYSELF</h5>
          <p class="ml-5 p-4 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    content1: function () {
      $("#card-1").show(1000, "swing");
      setTimeout(() => {
        this.content1Txt();
      }, 1000);
    },

    content1Txt: function () {
      $("#card-1-txt").show(2500, "swing");
      setTimeout(() => {
        this.content2();
      }, 1000);
    },

    content2: function () {
      $("#card-2-txt").show(2500, "swing");

      setTimeout(() => {
        this.content2Txt();
      }, 1000);
    },

    content2Txt: function () {
      $("#card-2").show(1000, "swing");
      setTimeout(() => {
        this.content3();
      }, 1000);
    },

    content3: function () {
      $("#card-3-txt").show(2500, "swing");
      setTimeout(() => {
        this.content3Txt();
      }, 1000);
    },

    content3Txt: function () {
      $("#card-3").show(1000, "swing");
      setTimeout(() => {
        this.content4Txt();
      }, 1000);
    },
    content4Txt: function () {
      $("#card-4-txt").show(1000, "swing");
      setTimeout(() => {
        this.content4();
      }, 1000);
    },
    content4: function () {
      $("#card-4").show(1000, "swing");
      setTimeout(() => {
        this.content5Txt();
      }, 1000);
    },

    content5Txt: function () {
      $("#card-5").show(1000, "swing");
      setTimeout(() => {
        this.content5();
      }, 1000);
    },

    content5: function () {
      $("#card-5-txt").show(1000, "swing");
    },
  },
  mounted: function () {
    $("#card-1").hide();
    $("#card-2").hide();
    $("#card-3").hide();
    $("#card-4").hide();
    $("#card-5").hide();
    $("#card-1-txt").hide();
    $("#card-2-txt").hide();
    $("#card-3-txt").hide();
    $("#card-4-txt").hide();
    $("#card-5-txt").hide();
    setTimeout(() => {
      this.content1();
    }, 1000);
  },
};
</script>

<style>
.title {
  font-family: "Moul" !important;
}

p {
  font-family: "Itim" !important;
  font-size: 25px;
}

h5 {
  font-family: "Akaya Telivigala" !important;
  font-size: 35px;
}

nav.navbar.navbar-light.bg-light.fixed-top.p-4 {
  position: inherit !important;
}

#card-1:hover {
  transform: scale(1.2);
  transition-delay: 0.5s;
}

#card-2:hover {
  transform: scale(1.2);
  transition-delay: 0.5s;
}
#card-3:hover {
  transform: scale(1.2);
  transition-delay: 0.5s;
}
#card-4:hover {
  transform: scale(1.2);
  transition-delay: 0.5s;
}
#card-5:hover {
  transform: scale(1.2);
  transition-delay: 0.5s;
}

.bi:hover {
  transform: scale(0.5);
}
</style>