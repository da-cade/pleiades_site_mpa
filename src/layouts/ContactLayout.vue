<template>
  <div class="block mb-4">
    <div class="justify-center items-center flex w-full" v-scrollanimation>
      <div class="grid md:grid-cols-2 w-full">
        <div
          class="contact-info p-4 justify-center items-center flex flex-column w-full"
        >
          <h5>Pleiades Projectworks</h5>
          <p>
            <span class="text-white">Email: </span>
            info@pleiadesprojectworks.com
          </p>
          <p>Monday - Friday</p>
          <p>9 - 5</p>
        </div>
        <div
          class="contact-form flex justify-center items-center flex-column p-5 w-full"
        >
          <ContactForm />
        </div>
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
  color: white;
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
  // width: 50%;
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
</style>