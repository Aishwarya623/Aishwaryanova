interface HeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export default function Head({ 
  title = "NovaAutomata - Indigenous AI Solutions",
  description = "Transforming industries through advanced AI solutions in Natural Language Processing and Computer Vision.",
  keywords = "AI, Machine Learning, NLP, Computer Vision, Indigenous AI"
}: HeadProps) {
  // Update document head
  document.title = title;
  
  // Update meta tags
  const metaTags = [
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description }
  ];

  // Update existing or create new meta tags
  metaTags.forEach(({ name, property, content }) => {
    const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
    let tag = document.querySelector(selector);
    
    if (!tag) {
      tag = document.createElement("meta");
      if (name) tag.setAttribute("name", name);
      if (property) tag.setAttribute("property", property);
      document.head.appendChild(tag);
    }
    
    tag.setAttribute("content", content);
  });

  return null;
}
