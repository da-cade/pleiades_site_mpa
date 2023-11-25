<template>
  <div class="content-padding justify-center items-center flex w-full">
    <div class="grid md:grid-cols-2 w-full">
      <div
        class="contact-info text-white p-4 justify-center items-center flex flex-col w-full"
      >
        <h5 class="text-white text-4">Pleiades Projectworks</h5>
        <p class="text-1">info@pleiadesprojectworks.com</p>
        <p>Monday - Friday</p>
        <p>9 - 5</p>
      </div>
      <div
        class="contact-form flex justify-center items-center flex-col p-5 w-full"
      >
        <ContactForm />
      </div>
    </div>
  </div>
</template>
  
  <script>
import ContactForm from "../components/ContactForm.vue";
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
  text-align: center;

  @media (max-width: 480px) {
    margin-bottom: 15vh;
  }

  /* Media Query for Tablets Ipads portrait mode */
}

.contact-form {
  background-color: white;
  padding: 2em;
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
  // height: 70vh;
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

.grid {
  outline: solid 10px #343a40;
  border-radius: 24px;
}
.contact-form {
  background-color: rgba(255, 255, 255, 0.719);
}
.contact-info {
  background-color: rgba(0, 0, 0, 0.708);
}
</style>