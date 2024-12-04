import { Link } from "react-router-dom"

export default function Blog() {
  return (
    <div className="blog-page">
    <div className="hero-section">
      <h1>Blog</h1>
      <p>Welcome to our blog, where we share the latest news, tips, and trends in the cannabis industry.</p>
    </div>
    <div className="blog-posts">
      <div className="blog-post">
        <h2><Link to="/blog-post-1">The Benefits of CBD</Link></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        <p>Posted on February 10, 2023</p>
      </div>
      <div className="blog-post">
        <h2><Link to="/blog-post-2">The Best Strains for Anxiety</Link></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        <p>Posted on January 20, 2023</p>
      </div>
      <div className="blog-post">
        <h2><Link to="/blog-post-3">The Science Behind THC</Link></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        <p>Posted on December 15, 2022</p>
      </div>
    </div>
  </div>
  )
}
