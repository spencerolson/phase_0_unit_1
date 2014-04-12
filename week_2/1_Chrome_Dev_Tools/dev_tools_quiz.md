#### Include an inline screenshot of your codeschool's points from the profile page:

![image](http://i4.minus.com/ibmUJVcFqwX9bG.png)

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
  * Javascript Debugging
  * Performance Optimization
  
  **The 'Elements' tab supports realtime editing of HTML and CSS. However, any changes made in the 'Elements' tab are *temporary*. To make permanent changes to HTML and CSS, we use the 'Sources' tab.**
  
  **In the 'Elements' tab, HTML editing can be done on the left-hand side of the window. You can edit HTML by right clicking on a line of code and selecting 'edit as HTML', or you can click and drag lines of HTML code to re-order them. CSS editing can be done on the right-hand side of the window. You can edit CSS code in-line by making changes to the element.style{} section, or you can edit CSS code for specific classes, id's, etc. Clicking on filename in the 'style' section of the 'Elements' tab will open the file in the 'Sources' tab, where permanent changes can be made.** 
  
  
  **Javascript Debugging can be done in the 'Sources' tab. On the 'Sources' tab, you can pinpoint errors and fix them directly in the code. One way to pinpoint errors is to use the 'Pause on Errors' icon (you can press the icon twice to only track *uncaught* exceptions). You can also set breakpoints and use the 'Step Over' and 'Step Into' buttons to figure out where your code is running into issues.**
  
  **The 'Network' tab is used for Performance Evaluation. This tab shows the order of network requests in a timeline format. By analyzing the timeline, you can identify where bottlenecks are occuring. You can also use the Chrome add-in 'PageSpeed' to analyze the webpage and get optimization tips.**

* What's the quick key for your OS to spawn the Dev Tools inspector?
	  
	**Option+Command+i**

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  
  	**#0b0f11**
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)
  
  ![image](http://i5.minus.com/i7DdtX79kYUx5.png)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

	**You can't tweak the color of the text because the entire background is a .gif image. That is to say, the text is part of an image file.**


* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  
  	**The largest image on the website is the lg-share-en.gif image.** 
  
  	![image](http://s7.addthis.com/static/btn/v2/lg-share-en.gif)
  
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
  
  	**You can find the largest image by going to the 'Network' tab, refreshing your page, and sorting by Size. The URL for the offending image is http://s7.addthis.com/static/btn/v2/lg-share-en.gif and the file size is 321B. **

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?

	**The 'lowest hanging fruit' is to optimize images. By doing this, we can eliminate 207.7KiB of data (14% reduction)**