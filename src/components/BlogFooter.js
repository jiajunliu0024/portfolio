import React from 'react';
import './BlogFooter.css'; // Assuming you have some CSS for styling

const BlogFooter = () => {
    return (
        <footer className="blog-footer">
            

            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Your Blog Name. All rights reserved.</p>
                <nav>
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default BlogFooter;