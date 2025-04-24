<script>
    export let heading = 'Newsletter';
    let email = '';
    let message = '';
    let color='';
  
    async function subscribe() {
      const res = await fetch('/api/newsletterSubscriber', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const result = await res.json();
  
      if (res.ok) {
        message = "Thanks for subscribing!";
        color="green"
        email = '';
        
      } else {
        message = result.error || "Something went wrong.";
        color="red";
      }
    }
  </script>
  
  <section>
    <h2 class="news-letter-heading">{heading}</h2>
  
    <form on:submit|preventDefault={subscribe}>
      <input type="email" bind:value={email} required placeholder="Enter your email" />
      <button class="news-dis-block" type="submit">Submit</button>
    </form>
  
    {#if message}
      <p style="color:{color}" class="res-msg">{message}</p>
    {/if}
  </section>


  <style>
    form{
        display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 80%;
    }
    .news-dis-block{
    background-color: #FF6D2C;
    padding:13px 25px;
    border-radius:15px;
    border-top: 2px solid black;
  border-left: 2px solid black;
  border-right: 4px solid black;
  border-bottom: 6px solid black;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  color:#fff;
  cursor: pointer;
  margin-left:10px;
  text-transform: uppercase;
    }
    input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 1rem;
      background-color: #ffffff;
      margin-bottom:2%;
     

    }
    .news-letter-heading{
        width:80%;
        font-family: "Covered By Your Grace", cursive;
    color: #009387;
    text-align: left;
    }
    .res-msg{
        width:80%;
        text-align: center;
    }

    @media(max-width:480px){
      form{
    flex-direction: column;
    max-width: 100%;
    }
    .news-letter-heading{
        width:100%;
  
    }
    }
  </style>
  