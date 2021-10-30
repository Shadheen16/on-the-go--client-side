import React from 'react';

const BlogPost = ({ blogPost }) => {
    const { img, title, description } = blogPost;
    return (
        <div>
            <div className="max-w-md md:max-w-2xl lg:max-w-4xl mb-10">
                <div className="w-full py-5 mb-5">
                    <img src={img} alt="" />
                </div>
                <h1 className="text-left text-3xl">
                    {title}
                </h1>
                <p className="my-5">
                    {description}
                </p>

                <strong className="my-5 text-green-400 flex items-center">
                    read more <span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg></span>
                </strong>
            </div>
        </div>
    );
};

export default BlogPost;