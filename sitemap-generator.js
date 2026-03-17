import sitemapGenerator from 'sitemap-generator';

// १. तुमच्या लाईव्ह वेबसाईटची लिंक इथे टाका
const generator = sitemapGenerator('https://inax.mechchemindia.com', {
  stripQuerystring: false,
  filepath: './public/sitemap.xml',
});

// जेव्हा काम पूर्ण होईल तेव्हा मेसेज येईल
generator.on('done', () => {
  console.log('Sitemap generated successfully!');
});

// त्रुटी (Error) आल्यास मेसेज येईल
generator.on('error', (error) => {
  console.error('Error generating sitemap:', error);
});

// जनरेशन सुरू करा
generator.start();