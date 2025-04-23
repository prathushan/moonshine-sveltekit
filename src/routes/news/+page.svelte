 <script>
  export let data;
</script>
<div class="div-with-pattern ">
<div class="steps-layout">
  {#if data.articles.length === 0}
    <p>No articles available. Please check back later.</p>
  {/if}
 
  <h2 class="pos-abs">Latest News</h2>
  {#each data.articles as article, i}
    <div class="step-card {i % 3 === 0 ? 'step-1' : ''} {i % 3 === 1 ? 'step-2' : ''} {i % 3 === 2 ? 'step-3' : ''}">
      <img src={article.image} alt={article.title} class="news-image" />
      <div class="news-content">
        <div class="news-date-container">
          <svg class="calendar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8 7V3M16 7V3M3 11h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"/>
          </svg>
          <span class="news-date">{new Date(article.date).toLocaleDateString()}</span>
        </div>
        <h2 class="news-title">{article.title}</h2>
        <p class="news-description">{(article.description ?? 'No description available').slice(0, 100)}...</p>
        <div class="dis-rig">
          <a href={`/news/${article.slug}`} class="read-more-button">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              class="arrow-icon"
            >
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  {/each}
</div>
</div>




<style>

.div-with-pattern {
  background: linear-gradient(to right, #e8f8f9 0%, #d4f1f2 50%, #ffffff 100%);
  padding:10% 20px;
}


.steps-layout {
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 3rem ;
  position: relative;
  padding-bottom:250px;
  background: #fff;
  /* background: linear-gradient(to bottom, #e8f8f9 0%, #E0C3FC 100%),
            url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6"%3E%3Ccircle cx="3" cy="3" r="1" fill="%2300FF00" opacity="0.2" /%3E%3C/svg%3E') repeat; */
            /* background-color: #e8f8f9;  */
background-image: 
  radial-gradient(circle, #e8f8f9 3px, transparent 2px);  /* Green Dots */
background-size: 20px 20px;  /* Dot size and spacing */
background-position: 0px 0px, 5px 5px; 
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
.pos-abs{
  position:absolute;
  z-index:10;
  left:10%;
  top:10%;
  font-size:30px;
  
}

/* Card base styling */
.step-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.step-1 {
  transform: translateY(220px);
}

.step-2 {
  transform: translateY(100px);
}

.step-3 {
  transform: translateY(0);
}
.news-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.news-date-container {
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.calendar-icon {
  width: 16px;
  height: 16px;
  margin-right: 6px;
  stroke: #6b7280;
}

.news-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.news-title {
  font-size: 1.2rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.news-description {
  font-size: 0.95rem;
  color: #4b5563;
  flex-grow: 1;
  margin-bottom: 1rem;
}

.news-date {
  font-size: 0.8rem;
  color: #9ca3af;
  
}
.dis-rig{
  display:flex;
  justify-content: right;
  
}

.read-more-button {
  font-size: 13px;
  line-height: 20px;
  background: #FF6D2C;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1.2px;
  border-top: 2px solid black;
  border-left: 2px solid black;
  border-right: 3px solid black;
  border-bottom: 4px solid black;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  text-align: center;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}
.arrow-icon {
  transition: transform 0.3s ease;
  transform-origin: center;
}

.read-more-button:hover .arrow-icon {
  transform: translateX(4px);
}

</style>