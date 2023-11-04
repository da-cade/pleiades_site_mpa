<template>
  <form
    @submit.prevent="handleSubmit(form)"
    ref="contactForm"
    class="formContainer"
    method="POST"
    target="_blank"
  >
    <div class="form-elems gap-4" v-if="!submitted">
      <div class="flex justify-content-between">
        <div class="flex flex-column w-48">
          <label for="contact-name" class="invisible">Name input</label>
          <input
            v-model.lazy="form.name"
            autocomplete="name"
            type="text"
            placeholder="Your name"
            id="contact-name"
            required
          />
        </div>
        <div class="flex flex-column w-48">
          <label for="contact-email" class="invisible">Email Input</label>
          <input
            v-model.lazy="form.email"
            autocomplete="email"
            type="email"
            placeholder="Email"
            id="contact-email"
            required
          />
        </div>
      </div>
      <div class="flex flex-column w-full">
        <label for="query-dropdown" class="invisible">Select an Inquiry</label>
        <select
          v-model.lazy="form.query"
          placeholder="Which Service is This About?"
          class="contact-dropdown"
          id="query-dropdown"
          required
        >
          <option disabled value="">Select an inquiry</option>
          <option value="website-design">Website Design</option>
          <option value="seo">SEO</option>
          <option value="google-ads">Google Ads</option>
          <option value="e-commerce">E-Commerce</option>
          <option value="everything-else">Everything Else</option>
        </select>
      </div>
      <div class="textBox">
        <label for="contact-message" class="invisible">Message text area</label>
        <textarea
          v-model="form.message"
          class="message"
          placeholder="Your message"
          id="contact-message"
          required
        />
      </div>
    </div>
    <rainbow-button
      role="button"
      v-if="!submitted"
      @click="handleSubmit(form)"
      :displayMessage="'Send Us a Message'"
    />
    <div v-if="submitted">
      <div class="thanksWrapper">
        <span class="font-bold text-3xl">Thank you!</span>
        <div>We'll be in touch soon.</div>
      </div>
    </div>
  </form>
</template>


<script>
import { reactive, ref } from "vue";
import axios from "axios";
import RainbowButton from "./evergreens/RainbowButton.vue";
export default {
  components: { RainbowButton },
  setup() {
    const submitted = ref(false);
    const contactForm = ref();
    const form = reactive({
      name: "",
      email: "",
      message: "",
      query: "",
    });
    const sendReady = ref(false);

    function handleSubmit(formData) {
      // contactForm.value.preventDefault()
      console.log(formData);
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
          form.query = "";
        });
    }

    return {
      submitted,
      form,
      contactForm,
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
  display: flex;
  flex-direction: column;
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

.contact-dropdown {
  outline: none;
  border-radius: 5px;
  box-shadow: 0px 0px 0px 4px rgb(198, 198, 198);
  padding: 0.5rem;
  border: none;
  // color: #a3aab5;
}

label {
  visibility: hidden;
  font-size: 0px;
}

textarea {
  width: 100%;
  padding: 1rem;
  outline: none;
  border-radius: 5px;
  box-shadow: 0px 0px 0px 4px rgb(198, 198, 198);
  border: none;
  height: 40vh;
  min-height: calc(50px);
  max-height: 50vh;

  margin-bottom: 1em;

  @media (max-width: 480px) {
    width: 100%;
  }
}
</style>