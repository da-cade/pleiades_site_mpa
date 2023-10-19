<template>
  <form
    @submit.prevent="handleSubmit(form)"
    class="formContainer"
    method="POST"
    target="_blank"
  >
    <div class="confirmation" v-if="submitted">
      <span>Thanks for your message!</span>
      <span>We'll get back to you right quick 🚀</span>
    </div>
    <div class="form-elems" v-if="!submitted">
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-column w-48">
          <label for="name" class="invisible">Name input</label>
          <input
            v-model.lazy="form.name"
            type="text"
            placeholder="Your name"
            name="name"
            required
          />
        </div>
        <div class="d-flex flex-column w-48">
          <label for="email" class="invisible">Email Input</label>
          <input
            v-model.lazy="form.email"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </div>
      </div>
      <label for="message" class="invisible">Message text area</label>
      <textarea
        v-model="form.message"
        class="message"
        placeholder="Your message"
        name="message"
        required
      />
    </div>
    <rainbow-button v-if="!submitted" :displayMessage="'Send Us a Message'" />
  </form>
  <!-- <div v-if="submitted">
    <h2>Thank you!</h2>
    <div>We'll be in touch soon.</div>
  </div> -->
</template>


<script>
import { reactive, ref } from "vue";
import axios from "axios";
import RainbowButton from "./RainbowButton.vue";
export default {
  components: { RainbowButton },
  setup() {
    const submitted = ref(false);
    const form = reactive({
      name: "",
      email: "",
      message: "",
    });
    const sendReady = ref(false);

    function handleSubmit(formData) {
      axios
        .post(
          "https://pleiades-website-email-gateway.azurewebsites.net/api/pleiades-site-email-gate",
          formData
        )
        .then(() => {
          submitted.value = true;
          window.history.pushState("object or string", "Title", "/#thanks");
          form.name = "";
          form.email = "";
          form.message = "";
        });
    }

    return {
      submitted,
      form,
      handleSubmit,
    };
  },
};
</script>


<style lang="scss" scoped>
.formContainer {
  width: 100%;
}

.confirmation {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.form-elems {
  // height: 100%;
}

input {
  padding: 0.5em;
  box-shadow: 0px 0px 0px 4px rgb(198, 198, 198);
  border-radius: 5px;
  border: none;
}

.w-48 {
  width: 48%;
}

label {
  visibility: hidden;
  font-size: 1px;
}

textarea {
  width: 100%;
  outline: none;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0px 0px 0px 4px rgb(198, 198, 198);
  border: none;
  height: 40vh;
  min-height: calc(50px);
  max-height: 50vh;
  margin-top: 1em;
  margin-bottom: 1em;

  @media (max-width: 480px) {
    width: 100%;
  }
}
</style>