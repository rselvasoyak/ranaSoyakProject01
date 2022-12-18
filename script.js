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


    
    




// Comment Section - ADD FORM INPUT INTO COMMEND SECTION
    // Select Items 
        // Where to add? 
            // Comment container 
            // Target the button 
            const postCommentButton = document.querySelector('.formButton button');
            console.log(postCommentButton);
            // Grab the user input - form 
            const blogFormElement = document.querySelector(".blogForm")
            console.log(blogFormElement);
        
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
    
