<script lang="ts">
  import { onMount } from "svelte";
  import { client } from "$lib/sanityClient";
  import { faqQuery } from "$lib/queries/faq";

  let title = "";
  let questions: Array<{
    question: string;
    answer: string;
    _key: string;
    extraFields?: Array<{
      fieldLabel: string;
      fieldType: string;
      value: string;
      _key: string;
    }>;
  }> = [];

  let openIndex: string | null = null;

  function toggle(key: string) {
    openIndex = openIndex === key ? null : key;
  }

  onMount(async () => {
    try {
      const res = await client.fetch(faqQuery);
      title = res?.title ?? "FAQs";
      questions = res?.questions ?? [];
    } catch (err) {
      console.error("Failed to load FAQ:", err);
    }
  });
</script>

<section class="faq-section">
  <h2 class="faq-title">{title}</h2>

  {#each questions as item (item._key)}
    <div class="accordion-item">
      <button class="accordion-question" on:click={() => toggle(item._key)}>
        {item.question}
        <span class="icon">{openIndex === item._key ? "−" : "+"}</span>
      </button>

      {#if openIndex === item._key}
        <div class="accordion-answer">
          <p>{item.answer}</p>
          {#if item.extraFields?.length}
            <ul class="extra-fields">
              {#each item.extraFields as field}
                <li><strong>{field.fieldLabel}</strong>: {field.value}</li>
              {/each}
            </ul>
          {/if}
        </div>
      {/if}
    </div>
  {/each}
</section>

<style>
  .faq-section {
    padding: 1rem 0;
    font-family: "Inter", serif;
  }
  .faq-title {
    font-size: 1.5rem;
    color: #ca8d6e;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .accordion-item {
    border-bottom: 1px solid #ddd;
    margin-bottom: 1rem;
  }
  .accordion-question {
    font-family: "Inter", serif;
    width: 100%;
    background: none;
    border: none;
    text-align: left;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    color: #333;
  }
  .icon {
    font-weight: bold;
    font-size: 1.2rem;
  }
  .accordion-answer {
    padding: 0.5rem 0 1rem 0;
    color: #555;
  }
  .extra-fields {
    list-style: none;
    padding: 0;
    margin-top: 0.5rem;
  }
  .extra-fields li {
    font-size: 0.9rem;
    color: #444;
  }
  @media (max-width: 480px) {
    .accordion-answer {
      text-align: left;
    }
  }
</style>
