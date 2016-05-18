#This is a new README file for the slideshow voting project.
#continued monkeying with the code...tried adding bits and pieces in different spots, making comments as to what should happen, despite not being sure what to type codewise.

#got all images to display, and basic styling (box shadow, background color and font family).  still having a problem with clicks not refreshing the images.  

#got everything working now.  next will be replacing the UL with a chart.  

#begin working on adding the chart.

# got the chart working.  however, the labels are not displaying.  Scott looked at this and determined it's a chart.js issue.  

# Got the localStorage working.  it's storing the votes.  However, I struggled with the parsing back out of the data.  Then had a problem with the votes not accumulating as 'new users' used the app.  This was solved by setting a for loop to iterate over the allImages array, and to set the new values to what was in local storage.  everything is working now.  
