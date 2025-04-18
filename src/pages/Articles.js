import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, Tag, FileText } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';


// Updated blog data structure - now referencing markdown files instead of PDF files
const blogPosts = [
  {
    id: 1,
    title: "Building a Website Just for Myself",
    summary: "A personal story of building and launching my first solo project — just for me, but finished and online.",
    markdownPath: "/blog-md/FirstProjectBlogPost.md", // Path to your markdown file (same name as the PDF)
    coverImage: "/blog-images/KalkulatoryOrg.png",
    date: "2025-04-19",
    readTime: "5 min",
    tags: ["React", "Next.js", "Web Development"],
    author: "Kajetan Jędrych"
  },
  {
    id: 2,
    title: "Modern JavaScript Features Every Developer Should Know",
    summary: "Explore the essential JavaScript features that have transformed how we write code in modern web development.",
    markdownPath: "/blog-md/modern-javascript.md", // Path to your markdown file (same name as the PDF)
    coverImage: "/blog-images/javascript.jpg",
    date: "2024-01-15",
    readTime: "6 min",
    tags: ["JavaScript", "ES6", "Web Development"],
    author: "Kajetan Jędrych"
  },
  {
    id: 3,
    title: "Building a RESTful API with Node.js and Express",
    summary: "Learn how to create a robust RESTful API using Node.js and Express for your web applications.",
    markdownPath: "/blog-md/nodejs-express-api.md", // Path to your markdown file (same name as the PDF)
    coverImage: "/blog-images/nodejs-express.jpg",
    date: "2024-02-20",
    readTime: "10 min",
    tags: ["Node.js", "Express", "API", "Backend"],
    author: "Kajetan Jędrych"
  }
];

// Markdown Renderer Component
const MarkdownRenderer = ({ markdownContent }) => {
  return (
    <div className="prose prose-slate lg:prose-lg max-w-none">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-6 mt-8 text-slate-800" {...props} />,
          h2: ({node, ...props}) => <h2 className="text-2xl font-bold mb-4 mt-8 text-slate-800" {...props} />,
          h3: ({node, ...props}) => <h3 className="text-xl font-bold mb-3 mt-6 text-slate-800" {...props} />,
          p: ({node, ...props}) => <p className="mb-6 text-slate-700 leading-relaxed" {...props} />,
          a: ({node, ...props}) => <a className="text-blue-600 hover:text-blue-800 underline" {...props} />,
          ul: ({node, ...props}) => <ul className="mb-6 list-disc pl-6" {...props} />,
          ol: ({node, ...props}) => <ol className="mb-6 list-decimal pl-6" {...props} />,
          li: ({node, ...props}) => <li className="mb-2" {...props} />,
          blockquote: ({node, ...props}) => (
            <blockquote className="border-l-4 border-amber-400 pl-4 italic my-6 text-slate-600" {...props} />
          ),
          em: ({node, ...props}) => <em className="italic text-slate-700" {...props} />,
          strong: ({node, ...props}) => <strong className="font-bold text-slate-900" {...props} />,
          hr: ({node, ...props}) => <hr className="my-8 border-t border-slate-200" {...props} />,
          img: ({node, ...props}) => (
            <img 
              className="rounded-lg shadow-md my-6 max-w-full h-auto mx-auto" 
              {...props} 
              alt={props.alt || "Blog image"} 
            />
          ),
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={nord}
                language={match[1]}
                PreTag="div"
                className="rounded-md my-6"
                showLineNumbers={true}
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code 
                className={`${inline ? 'bg-slate-100 text-slate-800 px-1 py-0.5 rounded text-sm' : 
                  'block bg-slate-100 p-4 rounded-md overflow-auto my-6'}`}
                {...props}
              >
                {children}
              </code>
            );
          },
          pre({node, ...props}) {
            return (
              <pre className="bg-slate-100 p-0 rounded-md overflow-auto my-6" {...props} />
            );
          }
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};


// Blog List Component
export const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState('');
  
  // Get all unique tags
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];
  
  // Filter posts based on search term and active tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = activeTag ? post.tags.includes(activeTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <section className="bg-gradient-to-b from-amber-50 to-amber-100 py-16 px-4 min-h-screen" id="blog">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">My Blog</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development, programming, and technology.
          </p>
          <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full mt-4"></div>
        </div>
        
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white/80"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap justify-center">
            <button 
              onClick={() => setActiveTag('')}
              className={`text-sm px-3 py-1 rounded-full transition-colors duration-300 ${
                activeTag === '' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
              }`}
            >
              All
            </button>
            {allTags.map((tag, index) => (
              <button 
                key={index}
                onClick={() => setActiveTag(tag)}
                className={`text-sm px-3 py-1 rounded-full transition-colors duration-300 ${
                  activeTag === tag ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div 
              key={post.id}
              className="group relative rounded-xl"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-300 to-amber-500 opacity-0 group-hover:opacity-50 blur transition-opacity duration-300 rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 
                group-hover:shadow-xl group-hover:bg-gradient-to-br from-amber-50 to-amber-100 h-full flex flex-col">
                
                {/* Optional Cover Image */}
                {post.coverImage && (
                  <div className="h-48 rounded-t-xl overflow-hidden">
                    <div 
                      className="w-full h-full bg-slate-200"
                      style={{
                        backgroundImage: `url(${post.coverImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  </div>
                )}
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex gap-2 mb-3">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs font-medium bg-blue-100 text-blue-600 px-2 py-1 rounded-full
                        group-hover:bg-blue-200 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300 mb-3">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 group-hover:text-slate-800 transition-colors duration-300 mb-4 flex-grow">
                    {post.summary}
                  </p>
                  
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-200">
                    <div className="flex items-center text-sm text-slate-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center text-sm text-slate-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-center">
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center justify-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full
                      hover:bg-blue-600 hover:text-white transition-colors duration-300 group-hover:scale-105 transform transition-transform"
                    >
                      <FileText className="w-4 h-4" />
                      Read Article
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-slate-600">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

// Blog Post Detail Component with Markdown Content
export const BlogPostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [markdownContent, setMarkdownContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Find the post by ID
    const foundPost = blogPosts.find(post => post.id === parseInt(id));
    
    if (foundPost) {
      setPost(foundPost);
      
      // Fetch the markdown content from the file
      fetch(foundPost.markdownPath)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to load markdown file');
          }
          return response.text();
        })
        .then(content => {
          // Process markdown content to fix common issues
          // Replace double asterisks with proper bold markdown
          const processedContent = content
            .replace(/\*\*([^*]+)\*\*/g, '**$1**')
            // Fix italics
            .replace(/\*([^*]+)\*/g, '_$1_')
            // Extra spacing between paragraphs if needed
            .replace(/\n\n/g, '\n\n');
          
          setMarkdownContent(processedContent);
          setIsLoading(false);
          // Scroll to top when post loads
          window.scrollTo(0, 0);
        })
        .catch(error => {
          console.error('Error loading markdown:', error);
          setIsLoading(false);
        });
    } else {
      // Redirect if post not found
      navigate('/blog');
    }
  }, [id, navigate]);
  
  if (!post || isLoading) {
    return (
      <div className="bg-gradient-to-b from-amber-50 to-amber-100 py-16 px-4 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Loading article...</h2>
        </div>
      </div>
    );
  }
  
  return (
    <section className="bg-gradient-to-b from-amber-50 to-amber-100 py-8 px-4 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 flex items-center">
          <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:transform group-hover:-translate-x-1 transition-transform" />
            Back to all articles
          </Link>
        </div>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
          <div className="flex gap-2 mb-3">
            {post.tags.map((tag, tagIndex) => (
              <span 
                key={tagIndex}
                className="text-xs font-medium bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl font-bold text-slate-800 mb-3">
            {post.title}
          </h1>
          
          <p className="text-slate-600 mb-4">
            {post.summary}
          </p>
          
          <div className="flex items-center justify-between text-slate-500 text-sm border-b border-slate-200 pb-4 mb-8">
            <div className="flex items-center">
              <span className="font-medium text-slate-700">{post.author}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </span>
            </div>
          </div>
          
          {/* Markdown Content */}
          <article className="article-content">
            <MarkdownRenderer markdownContent={markdownContent} />
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogList;