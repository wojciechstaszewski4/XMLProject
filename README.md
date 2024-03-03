## Create an original set of XML files with the following requirements: ##

 ### 1. Write an XML file on a topic of interest to you (except for businesscards, books, cars, airplanes or other topic from lesson). ###

- Obviously, it should have a root element.
- The file must contain data for at least 10 items - e.g., 10 books; 10 products, etc.
- Every item must have attribute "type" with any value. I recommend maximum three selected values for this attribute.
- Every item must have more than 3 subitems (sub-element).
- One of those sub-elements must be URL address to accurate picture of item.
- Two elements must have any attributes.

### 2. Create an XSLT stylesheet that generates, from your previous xml file, interesting HTML page. ###

- This file must be properly associated with the .xml file.
- Show accurate picture from XML URL sub-element.
- Show different colour background for each item. Background must depend on the value of "type" attribute. 

### 3. Write CSS file to add good looking design to you generated page. ###

- This file must be properly associated with xslt file.
- Use various colours, fonts, undent and margin for text elements.
- Use a page background image or a background colour.

### 4. Write a DTD file for the XML file you created. ###

- This file must be properly associated with the xml file and the .xml file must validate against the DTD.
- Define all the XML elements and what can be contained in them.
- Define the child element with the either/or values.
- Define the attributes with default or requirement values.

### 5. Create HTML page with JavaScript for read and filter (use the XPath) information from XML file. ###

- Create "Show" button to show all content of XML file.
- Create 3 buttons (values of attribute "type" will be buttons caption) to display filtered items based on values of attribute "type".
- Create a form for full-text search in values of a selected element. Select one element with text content in your XML file. The form will contain one text input only.
  The expected value in this field is the value of the selected XML element. After submitting the form, display filtered items based on the value of this field. 

The project files must focus on a consistent theme with a logical connection. All project files must by validate with actual W3C requirements.
