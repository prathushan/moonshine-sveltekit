<script lang="ts">
  let name = "";
  let email = "";
  let message = "";
  let status = "";
  let loading = false;

  function sanitizeInput(input: string): string {
    return input.trim();
  }

  function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function handleSubmit(event: Event) {
    event.preventDefault();
    loading = true;
    status = "";

    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);

    if (!isValidEmail(sanitizedEmail)) {
      status = "Please enter a valid email address.";
      loading = false;
      return;
    }

    try {
      const res = await fetch("/api/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: sanitizedName,
          email: sanitizedEmail,
          message: sanitizedMessage,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        status = "Your message has been sent successfully!";
        name = email = message = "";
      } else {
        status = data.error || "Failed to send message.";
      }
    } catch (error) {
      console.error(error);
      status = "An unexpected error occurred.";
    } finally {
      loading = false;
    }
  }
</script>

<form id="form" on:submit={handleSubmit}>
  <legend class="legend">Get In Touch</legend>

  <fieldset>
    <label for="name-input" class="icon">
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path
          d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-2a4 4 0 100-8 4 4 0 000 8z"
        />
      </svg>
    </label>
    <input
      type="text"
      placeholder="Your name..."
      id="name-input"
      bind:value={name}
      required
    />
  </fieldset>

  <fieldset>
    <label for="email-input" class="icon">
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path
          d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 
        2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
        4l-8 5-8-5V6l8 5 8-5v2z"
        />
      </svg>
    </label>
    <input
      type="email"
      placeholder="Your email..."
      id="email-input"
      bind:value={email}
      required
    />
  </fieldset>

  <fieldset>
    <label for="message-input" class="icon">
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 512 512">
        <path
          d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l96 0 0 80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0z"
        /></svg
      >
    </label>
    <textarea
      placeholder="Your Message..."
      id="message-input"
      bind:value={message}
      required
    ></textarea>
  </fieldset>

  <fieldset>
    <button type="submit" id="btn-submit" disabled={loading}>
      {loading ? "Sending..." : "Send"}
    </button>
  </fieldset>

  {#if status}
    <p class="status">{status}</p>
  {/if}
</form>

<style>
  .icon {
    position: absolute;
    right: -7%;
    top: 50%;
    transform: translateY(-50%);
    padding-left: 0.5em;
    color: #7d6962;
  }
  .icon svg {
    width: 24px;
    height: 24px;
  }

  fieldset {
    position: relative;
  }

  .legend {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 1.25rem;
    color: #ca8d6e;
    margin-bottom: 1em;
  }
  @media (max-width: 480px) {
    .legend {
      margin-top: 40px;
    }
  }
  form fieldset {
    border: none;
    margin-bottom: 0.75em;
    padding: 0.25em 0;
    position: relative;
    font-family: "Inter", serif;
  }
  input,
  textarea {
    width: 100%;
    padding: 0.5em 0;
    background: none;
    border: none;
    border-bottom: 1px solid #7d6962;
    color: #000;
    font-family: "Inter";
    font-size: 1rem;
    padding-right: 2em;
  }
  input:focus,
  textarea:focus {
    outline: none;
    border-bottom: 1px solid #ca8d6e;
  }
  textarea {
    resize: none;
  }
  button {
    color: #eeeeee;
    padding: 1em 2em;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 1rem;

    cursor: pointer;
    background-color: #ff6d2c;
    padding: 15px 30px;
    border-radius: 10px;
    border-top: 2px solid black;
    border-left: 2px solid black;
    border-right: 4px solid black;
    border-bottom: 6px solid black;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
    margin-top: 20px;
  }
  button:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.5);
    transform: translateY(-2px);
    transition: all 0.2s ease-in-out;
  }
  @keyframes swell {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  .status {
    margin-top: 1em;
    font-size: 0.875rem;
    color: #ca8d6e;
  }
</style>
