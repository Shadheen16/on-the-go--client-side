import React from 'react';
import OpeningHours from '../../shared/OpeningHours/OpeningHours';
import SharedBanner from '../../shared/SharedBanner/SharedBanner';
import BlogPost from './BlogPost/BlogPost';

const Blog = () => {    
    const blogPosts = [
        {
            id: "1",
            img: "https://images.unsplash.com/photo-1445384763658-0400939829cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            title: "NEW CROSSFIT CHALLENGE",
            description: "CrossFit became a super popular workout a few years ago when box gyms began popping up not only across the country, but the world. CrossFit is practiced by members of over 13,000 affiliated gyms in 120 countries. In the U.S. alone, there are over 7,000 gyms offering the program. It’s estimated that there are roughly 4 million CrossFitters, and its members are so devoted to the competitive approach to fitness that the community has even been described as cult-like."
        },
        {
            id: "2",
            title: "BEST CARDIO EXERCISE",
            img: "https://images.unsplash.com/photo-1434596922112-19c563067271?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            description: "The following are calorie-burning exercises that a person can do at home with minimal equipment.These exercises can form a cardiovascular exercise program.For example, a person could do each exercise for 45 seconds to 1 minute, rest for 30 seconds, and move on to the next set.As their fitness levels increase, people may wish to perform these exercises in circuits.To perform circuits, a person completes 30–60 second rounds of each chosen exercise in succession before resting for 30–60 seconds. They then perform the entire course again, as many times as they prefer."
        },

        {
            id: "3",
            img: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            title:"NEW BODY CORE COURSES",
            description: "Include these 10 core exercises in your next ab workout to strengthen your core and tone your abs. A strong core will keep you healthy and pain-free. Sculpt your abs while strengthening your core in the same workout!"
        }
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
                        <div className="text-green-400 cursor-pointer my-3">
                            <p className="hover:text-gray-700 my-3 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>NEW CROSSFIT COURSE</p>
                            <p className="hover:text-gray-700 my-3 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>BEST CARDIO EXERCISE</p>
                            <p className="hover:text-gray-700 my-3 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>NEW BODY CORE COURSES</p>
                        </div>

                    </div>
                    <div className="mb-5">
                        <h1 className="font-bold my-2 py-5 border-b-2 border-gray-300">CATEGORIES</h1>
                        <div className="text-green-400 cursor-pointer my-3">
                            <p className="hover:text-gray-700 my-3 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>CARDIO</p>
                            <p className="hover:text-gray-700 my-3 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>CYCLING</p>
                            <p className="hover:text-gray-700 my-3 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>DIETS</p>
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