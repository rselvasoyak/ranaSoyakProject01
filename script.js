/* Pseudo Code */

// Hamburger Menu - JS 
    // CSS - max-width:850px;
        // Nav Bar styling (visibility: hidden)
        // Showing State Styling (.linkActive)
    // JS
        // User clicks on the Hamburger Menu
            // Select the element that will be clicked + store it in a variable 
            // Event Listener on the element that will trigger the event - .click
                // What do we want it to happen when that event happens 
        // The navigation appears in transition 
            // Select the element want to appear 
            // Original state is not appearing 
                // add a class to apear and add that class? .linkAppear 
                // if the class is present --> on click, remove the class so it dissapears
                // else, add the class 

    // Select 
    // Create a function 
    // Pass the function as an argument#2


    
    




// Comment Section - it is a form 
        // Have a section on HTML where you can display the user input. \

    // ADDING A COMMENT + PICTURE TO THE COMMENT SECTION
        //User Inputs the comment into the "Message Area"- when the user submits the form 
            // Event Listener on the "post comment" button 
                // prevent default 
                // Registering Event 
                // Target: HTML element 95%
                // addEventListener: 
                // 'event: submit
                // eventHandler: make the comment to appear below the other comments
                    // who: 
            // Slap the form input information in a variable -> userComment - stay somewhere
                // Name

                // Email 

                // Message
                
        // It is going to go in an div container with class .comment
            // create a div with <div class = "commentImageContainer"> for user photo 
                // add image with source in it
            // create a div for comment text <div class = "commentContent"></div> 
                // Have the date update to the time that it is submitted
        // add the commentImageContainer and then the commentContent section in the comment div

// target the button 
    const postCommentButton = document.querySelector('.formButton button');
    console.log(postCommentButton);
// preventdefault() for form 
// grab the user input - form 
    const blogFormElement = document.querySelector(".blogForm")
    console.log(blogFormElement);


// Add a new content to "comment3" section 
 
    // Add values in a template literal 


    // Where will the event be targeted? button





        
        // Append the stored comment value in the in the following format  
            // Comment Time Stamp 
                const commentTimeStamp = () => {
                    return Math.floor(Date.now() / 1000);
                    // addComment.timeStam?
                };
        
        // preventDefault() - for the form not to refresh 
        //         <div class="commentImageContainer">
        //             <img src="" alt=""></img>
        //         </div>
        //        <div class="commentContent">
        //              <aside> {/* ${dateOfComment} by {nameInput} */}
        //              </aside>
        //              <blockquote>
        //                   {/* ${userMessageInput} */}
        //               </blockquote>
        //         </div> 
    // Alert "Comment Added "


    // Select Items 
                // Where to add? 
                // Comment container 

    // Functions 
    const addComment = (event) => {
        event.preventDefault();
        console.log(event);

        // Grab the comment info 
            // Name
            const userName = document.querySelector('#name');
            const userNameContent = userName.value;
            
            // Email 
            const userEmail = document.querySelector('#mail');
            const userEmailContent = userEmail.value;
           
            // Comment 
            const userComment = document.querySelector('#comment');
            const userCommentContent = userComment.value;


        // Log when the information is available 
            if (userNameContent && userEmailContent && userCommentContent) {
                 // TimeStamp 
                        const timeOfPost = new Date();
                        console.log(timeOfPost);

                       console.log(timeOfPost.getTime());
                       const epochTime = new Date(timeOfPost);
                       console.log(epochTime);

                    // Get date components Ready 
                        // Year 
                        const postYear = new Date().getFullYear();
                        console.log(postYear);
                        // Month 
                        const options = {
                            weekday: "long",
                        };

                        const postDay = new Intl.DateTimeFormat("en-US", options).format(new Date());
                        console.log(postDay);

                        const options2 = {
                            month: "long",
                        }

                        const postMonth = new Intl.DateTimeFormat("en-US", options2).format(new Date());
                        console.log(postMonth);

                        // Date
                        const postDate = new Date().getDate();
                        console.log(postDate);

                        const finalPostDate = `${postDay} ${postMonth} ${postDate}, ${postYear}`;
                        console.log(finalPostDate);

                // Create a div image container 
                const commentImageElement = document.createElement('div');
                    commentImageElement.classList.add('commentImageContainer');
                    const imageElement = document.createElement('img');
                    imageElement.setAttribute('src','./assets/userCommentImage.jpg');
                    imageElement.setAttribute('alt', 'Individuals holding different coloured comment bubbles on their hand')

                    // Append the image to Image container 
                    commentImageElement.append(imageElement);

                // Create comment container 
                const commentContainer = document.createElement('div');
                commentContainer.classList.add('comment')

                // Create a div content container 
                const commentContentElement = document.createElement('div');
                    commentContentElement.classList.add('commentContent');

                    const asideElement = document.createElement('aside');
                        asideElement.append(`${finalPostDate} by ${userNameContent}`);
                        console.log(asideElement);
                        
                    const blockquoteElement = document.createElement('blockquote');
                        blockquoteElement.append(`${userCommentContent}`);

                    // Append the aside and blockquote element to comment content div 
                    commentContentElement.appendChild(asideElement);
                    commentContentElement.appendChild(blockquoteElement);
                
                // Append the image container and user input content to comment div
                commentContainer.appendChild(commentImageElement);
                commentContainer.appendChild(commentContentElement);

                // Append comment div to commentsContainer 
                const containerToAppend = document.querySelector('.commentsContainer');
                containerToAppend.appendChild(commentContainer);

            }
        // Reset The Input for the User 
            userName.value = '';
            userEmail.value = '';
            userComment.value = '';
    }/* End of addComment function */


    // Event Listeners 
    blogFormElement.addEventListener('submit', addComment) 
    
