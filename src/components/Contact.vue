<template>
  <div id="contact" class="row g-0" v-scrollanimation>
    <div class="col-12"><h1>contact us today</h1></div>
  </div>
  <div
    class="container justify-content-center align-items-center d-flex"
    v-scrollanimation
  >
    <div class="row">
      <div
        class="col-lg-6 contact-info justify-content-center align-items-center d-flex flex-column"
        v-scrollanimation
      >
        <h5>Pleiades Projectworks LLC</h5>
        <p><b>Email: </b> info@pleiadesprojectworks.com</p>
        <p>Monday - Friday</p>
        <p>9 - 5</p>
      </div>
      <div
        class="col-lg-6 contact-form d-flex justify-content-center align-items-center d-flex flex-column p-5"
        v-scrollanimation
      >
        <contact-form />
        <!-- <div class="form-elems">
            <div class="d-flex justify-content-between">
              <div class="d-flex flex-column w-48">
                <label for="name" class="visibility-hidden"></label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  required
                />
              </div>
              <div class="d-flex flex-column w-48">
                <label for="email" class="visibility-hidden"></label>
                <input type="email" placeholder="Email" name="email" required />
              </div>
            </div>
            <label for="message" class="visibility-hidden"></label>
            <textarea
              class="message"
              placeholder="Your message"
              name="message"
              required
            />
          </div> -->
      </div>
    </div>
  </div>
</template>
  
  <script>
import ContactForm from "./ContactForm.vue";
export default {
  components: { ContactForm },
  name: "App",
};
</script>

  <style scoped lang="scss">
.before-enter {
  opacity: 0;
  transform: translateX(50%);
  transition: all 0.5s ease;
}

.enter {
  opacity: 1;
  transition-delay: 0.1s;
  transform: translateX(0);
}
.container {
  height: 65vh;
  border-radius: 25px;
  margin-bottom: 7vh;
  background-color: black;

  @media (max-width: 480px) {
    width: 90%;
  }
  @media (max-width: 1020px) {
    height: auto;
  }
}

h1 {
  margin-top: 7vh;
  margin-bottom: 30px;
  color: white;
  font-size: 8em;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 5em;
    margin-bottom: 15vh;
  }

  /* Media Query for Tablets Ipads portrait mode */
}

h5 {
  color: white;
  font-size: 2em;
}

p {
  color: white;
  font-size: 1em;
}

.contact-form {
  background-color: white;
  padding: 2em;
  width: 50%;
  height: 70vh;
  border-radius: 0px 25px 25px 0px;
  @media (max-width: 500px) {
    height: 100%;
    width: 100%;
    border-radius: 0px 0px 25px 25px;
  }
  @media (max-width: 1020px) {
    height: auto;
    width: 100%;
    border-radius: 0px 0px 25px 25px;
  }
}

.contact-info {
  background-color: black;
  height: 70vh;
  border-radius: 25px 0px 0px 25px;
  @media (max-width: 480px) {
    height: 100%;
    width: 100%;
    padding: 2em;
  }
  @media (max-width: 500px) {
    border-radius: 25px 25px 0px 0px;
  }
  @media (max-width: 1020px) {
    height: auto;
    padding: 2rem 0;
  }
}

#contact h1 {
  @media (max-width: 300px) {
    font-size: 5em;
    margin-bottom: 38.5vh;
  }
  @media (max-width: 740px) {
    margin-bottom: 3rem;
  }
}

.row {
  width: 100vw;
}

@media (max-width: 380px) {
  #contact {
    margin-bottom: 5em;
  }
}
</style>