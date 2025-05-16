import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, Tag, FileText } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';


const blogPosts = [
  {
    id: 5,
    title: "From Audio Drivers to AI Testing: My Journey into AI testing",
    summary: "A hands-on dive into testing AI models – from performance tuning to LLM evaluation and security testing, all inspired by a real-world project.",
    markdownPath: "/blog-md/LlmTesting.md", 
    coverImage: "/blog-images/LlmTesting.png",
    headerMedia: {
      type: "image",
      url: "/blog-images/LlmTesting.png",
      poster: "/blog-images/LlmTesting.png",
      caption: "From Audio Drivers to AI Testing: My Journey into AI testing"
    },
    date: "2025-05-16",
    readTime: "10 min",
    tags: ["AI Testing", "LLM", "Machine Learning",],
    author: "Kajetan Jędrych"
  },
  {
    id: 4,
    title: "How I Found the Perfect Budget-Friendly Way to Deploy My Apps",
    summary: "Discover how I deploy my apps – step-by-step instructions included.",
    markdownPath: "/blog-md/Coolify.md", 
    coverImage: "/blog-images/coolify.png",
    headerMedia: {
      type: "image",
      url: "/blog-images/coolify.png",
      poster: "/blog-images/coolify.png",
      caption: "How I Found the Perfect Budget-Friendly Way to Deploy My Apps"
    },
    date: "2025-04-29",
    readTime: "10 min",
    tags: ["Coolify", "Deployment", "Instructions"],
    author: "Kajetan Jędrych"
  },
  {
    id: 1,
    title: "Building a Website Just for Myself",
    summary: "A personal story of building and launching my first solo project — just for me, but finished and online.",
    markdownPath: "/blog-md/FirstProjectBlogPost.md", 
    coverImage: "/blog-images/KalkulatoryOrg.png",
    headerMedia: null,
    date: "2025-04-19",
    readTime: "5 min",
    tags: ["React", "Next.js", "Web Development"],
    author: "Kajetan Jędrych"
  },
  {
    id: 2,
    title: "Brilliant Idea (But Only in My Head)",
    summary: "Built an AI-powered app to analyze social media comments — it was brilliant... in my head.",
    markdownPath: "/blog-md/BriliantIdea.md",
    coverImage: "/blog-images/Gemini.png",
    headerMedia: {
      type: "video",
      url: "/blog-images/SummaryAiVideo.mp4",
      poster: "/blog-images/SummaryAiPhoto.png",
      caption: "Short clip of my application"
    },
    date: "2025-04-21",
    readTime: "6 min",
    tags: ["React", "Next.js", "Web Development", "GeminiAi"],
    author: "Kajetan Jędrych"
  },
  {
    id: 3,
    title: "The Chaos of Starting… and Never Finishing",
    summary: "Learn some of my methods to finish what you started.",
    markdownPath: "/blog-md/Productive.md", 
    coverImage: "/blog-images/Miro.png",
    headerMedia: {
      type: "image",
      url: "/blog-images/Miro.png",
      poster: "/blog-images/Miro.png",
      caption: "Short walkthrough of my productivity system"
    },
    date: "2025-04-21",
    readTime: "10 min",
    tags: ["Productivity", "Time management", "Tricks and tips"],
    author: "Kajetan Jędrych"
  }
];

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

  const renderHeaderMedia = () => {
    if (post.headerMedia) {
      if (post.headerMedia.type === 'video') {
        return (
          <div className="mb-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <video 
                className="w-full" 
                controls 
                poster={post.headerMedia.poster}
              >
                <source src={post.headerMedia.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {post.headerMedia.caption && (
              <p className="text-center text-sm text-slate-500 mt-2">{post.headerMedia.caption}</p>
            )}
          </div>
        );
      } else if (post.headerMedia.type === 'image') {
        return (
          <div className="mb-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={post.headerMedia.url} 
                alt={post.headerMedia.caption || post.title} 
                className="w-full h-auto"
              />
            </div>
            {post.headerMedia.caption && (
              <p className="text-center text-sm text-slate-500 mt-2">{post.headerMedia.caption}</p>
            )}
          </div>
        );
      }
    }
    
    if (post.coverImage) {
      return (
        <div className="mb-6">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-auto"
            />
          </div>
        </div>
      );
    }
    
    return null;
  };
  
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
          
          <div className="flex items-center justify-between text-slate-500 text-sm border-b border-slate-200 pb-4 mb-6">
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
          
          {renderHeaderMedia()}
          
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