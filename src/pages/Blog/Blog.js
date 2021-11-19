import React from 'react';
import OpeningHours from '../../shared/OpeningHours/OpeningHours';
import SharedBanner from '../../shared/SharedBanner/SharedBanner';
import BlogPost from './BlogPost/BlogPost';

const Blog = () => {    
    const blogPosts = [
        {
            id: "1",
            img: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            title:"Charming Lisbob",
            description: "We immediately liked the feel of Lisbon and could not tell you exactly why. Could it be that Lisbon is nestled among many hills, which create natural divisions for little neighborhoods and each with plenty of personality? Or perhaps that it is next to the water, which is always a natural draw for us? Are we describing San Francisco? No....this is Lisbon and it's charm grabbed us immediately. As we drove across the bay on our way back from the lovely town of Evora, we drank in the scenery and found ourselves eager for our time in Lisbon to begin because it would be spent with friends. World Travelers Unite Our first night in town would prove to be a great one, as we were having dinner with our retired travel agent Angeline."
        },
        {
            id: "2",
            title: "Amsterdam: Windmills and Sunshine",
            img: "https://images.unsplash.com/photo-1540162012087-7ba92165d4da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80",
            description: "The windmill doesn’t care for the wind that’s gone past”- Dutch proverb We were very happy the rain stopped today! Apparently it’s not common for it to rain so much and so hard here in Amsterdam. Our B&B host Katrien said how unusual it was and how it might be related to climate change. But today was a lovely sunny (though quite windy and cool) day. We had a leisurely morning in our B&B, enjoying our breakfast, and then we"
        },
    ]
    return (
        <div className="">
            <SharedBanner
                bannerText="OUR BLOG"
            ></SharedBanner>
            <div className="py-5 px-5 md:px-10 lg:px-20 text-left sm:flex">
                <div>
                    {
                        blogPosts.map((blogPost) => <BlogPost
                            key={blogPost.id}
                            blogPost={blogPost}
                        ></BlogPost>)
                    }

                </div>

                <div className="mx-auto sm:m-0 sm:ml-5 lg:ml-16 text-left">
                    <div>
                        <label htmlFor="search">  <input className="block lg:w-72 px-3 py-2 border-2 my-5" type="text" placeholder="Search Item" /></label>

                    </div>
                    <div>

                    </div>
                    <div className="mb-5">
                        <h1 className="font-bold my-2 py-5 border-b-2 border-gray-300">RECENT POSTS</h1>
                        <div className="text-red-500 cursor-pointer my-3">
                            <p className="hover:text-gray-700 my-3 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>BEST PLACES TO VISIT THIS WINTER</p>
                            <p className="hover:text-gray-700 my-3 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>THE UNFORGETABLE TRIP</p>
                            <p className="hover:text-gray-700 my-3 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>MOUNTAIN  CAMPING IS SOMEHING ELSE</p>
                        </div>

                    </div>
                    <div className="mb-5">
                        <h1 className="font-bold my-2 py-5 border-b-2 border-gray-300">CATEGORIES</h1>
                        <div className="text-red-500 cursor-pointer my-3">
                            <p className="hover:text-gray-700 my-3 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>CAMPING</p>
                            <p className="hover:text-gray-700 my-3 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>FISHING</p>
                            <p className="hover:text-gray-700 my-3 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>HIKING</p>
                        </div>

                    </div>
                    <OpeningHours></OpeningHours>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Blog;