<script lang="ts">
    let name = '';
    let email = '';
    let message = '';
    let status = '';
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
      status = '';
  
      // Sanitize inputs
      const sanitizedName = sanitizeInput(name);
      const sanitizedEmail = sanitizeInput(email);
      const sanitizedMessage = sanitizeInput(message);
  
      // Validate email
      if (!isValidEmail(sanitizedEmail)) {
        status = 'Please enter a valid email address.';
        loading = false;
        return;
      }
  
      try {
        const res = await fetch('/api/contact-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: sanitizedName,
            email: sanitizedEmail,
            message: sanitizedMessage
          })
        });
  
        const data = await res.json();
  
        if (res.ok) {
          status = 'Your message has been sent successfully!';
          name = '';
          email = '';
          message = '';
        } else {
          status = data.error || 'Failed to send message.';
        }
      } catch (error) {
        console.error(error);
        status = 'An unexpected error occurred.';
      } finally {
        loading = false;
      }
    }
  </script>
  
  <form on:submit={handleSubmit} class="contact-form">
    <div>
      <label for="name">Name</label>
      <input id="name" type="text" bind:value={name} required />
    </div>
  
    <div>
      <label for="email">Email</label>
      <input id="email" type="email" bind:value={email} required />
    </div>
  
    <div>
      <label for="message">Message</label>
      <textarea id="message" rows="5" bind:value={message} required></textarea>
    </div>
  
    <button type="submit" disabled={loading}>
      {loading ? 'Sending...' : 'Send Message'}
    </button>
  
    {#if status}
      <p class="status">{status}</p>
    {/if}
  </form>
  
  <style>
    .contact-form {
      max-width: 500px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  
    input,
    textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 1rem;
      background-color: #ffffff;
    }
  
    button {
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      font-size: 13px;
      line-height: 20px;
  
      background: #ff6d2c;
      color: white;
      padding: 1.5rem 1.4rem;
      border-radius: 6px;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 1.2px;
  
      border-top: 2px solid black;
      border-left: 2px solid black;
      border-right: 4px solid black;
      border-bottom: 6px solid black;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  
      width: 200px;
      height: 32px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  
    button:disabled {
      background-color: #ccc;
    }
  
    .status {
      margin-top: 1rem;
      font-weight: bold;
    }
  </style>
  