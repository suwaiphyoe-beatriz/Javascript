document.getElementById('search-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = document.getElementById('query').value.trim();
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  if (!query) {
    console.error('Please enter a TV show name.');
    return;
  }

  const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (data.length === 0) {
      resultsDiv.innerHTML = '<p>No results found.</p>';
      return;
    }

    data.forEach((tvShow) => {
      const { name, url, image, summary } = tvShow.show;

      const article = document.createElement('article');

      const h2 = document.createElement('h2');
      h2.textContent = name;
      article.appendChild(h2);

      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.textContent = 'Details';
      article.appendChild(link);

      if (image?.medium) {
        const img = document.createElement('img');
        img.src = image.medium;
        img.alt = name;
        article.appendChild(img);
      }

      if (summary) {
        const summaryDiv = document.createElement('div');
        summaryDiv.innerHTML = summary;
        article.appendChild(summaryDiv);
      }

      resultsDiv.appendChild(article);
    });
  } catch (error) {
    console.error('Failed to fetch TV show data:', error);
    resultsDiv.innerHTML = '<p>Something went wrong. Please try again later.</p>';
  }
});
