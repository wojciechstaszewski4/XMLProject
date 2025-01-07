# 🎸 XML Guitars Project  

This repository contains a set of XML-based files and associated resources to create, display, and interact with structured data about **guitars** using modern web technologies. The project follows the specifications below to showcase the power of **XML**, **XSLT**, **CSS**, **DTD**, and **JavaScript**.  

---

## 📖 Project Overview  

### 1️⃣ **XML File: guitars.xml**  
A custom XML file designed around the theme of guitars, containing:  
- A root element with data for **at least 10 guitars**.  
- Each guitar includes:  
  - An attribute `type` with one of three values: `electric`, `acoustic`, or `bass`.  
  - At least **three sub-elements**, one of which is a **URL** to an accurate image of the guitar.  
  - Two sub-elements with additional attributes, such as ratings or specifications.  

---

### 2️⃣ **XSLT Stylesheet: transform.xslt**  
The XSLT stylesheet transforms the XML data into a visually appealing **HTML page** with the following features:  
- Dynamically displays images using the URLs from the XML file.  
- Assigns **different background colours** based on the value of the `type` attribute (e.g., a unique colour for electric, acoustic, and bass guitars).  

---

### 3️⃣ **CSS Stylesheet: style.css**  
The CSS file enhances the look of the generated HTML page by:  
- Adding **custom fonts**, margins, padding, and background colours.  
- Using a **background image** or subtle gradient to create a professional, polished look.  
- Ensuring the page is responsive and visually appealing.  

---

### 4️⃣ **DTD File: guitars.dtd**  
The DTD file defines and validates the structure of the XML file by:  
- Declaring all elements and their hierarchy.  
- Specifying the allowed attributes, their types, and whether they are required or optional.  
- Ensuring compliance with structured data standards.  

---

### 5️⃣ **HTML with JavaScript (XPath): index.html**  
An interactive HTML page powered by JavaScript allows users to:  
- Click a "Show All" button to display all guitars from the XML file.  
- Use **three filter buttons** to filter guitars by their `type` attribute (`electric`, `acoustic`, `bass`).  
- Perform a **full-text search** in a specific element of the XML file (e.g., search by guitar name) and display filtered results dynamically.  

---

## 🚀 Features  

- **Dynamic Transformation:** Generate an HTML page directly from XML data using XSLT.  
- **Custom Styling:** Make the generated page visually appealing with CSS.  
- **Interactive Filtering:** Use JavaScript and XPath to dynamically filter and search the XML data.  
- **Validation:** Ensure the XML file conforms to the DTD schema.  

---

## 📂 File Structure  

| File Name         | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| **guitars.xml**   | The main XML file containing guitar data and images.                        |
| **transform.xslt**| XSLT file to transform the XML into an HTML page.                           |
| **style.css**     | CSS file to style the HTML output for a polished look.                      |
| **guitars.dtd**   | DTD file to define and validate the XML structure.                          |
| **index.html**    | Interactive HTML page with filtering and search functionality.              |
| **script.js**     | JavaScript file enabling dynamic filtering and search with XPath.           |
| **favicon.png**   | Favicon for branding and visual consistency.                                |
| **transform.html**| A static HTML page generated from the XSLT transformation.                 |

---

## 🎯 How to Run  

1. **Validate XML:** Open the `guitars.xml` file and validate it against the `guitars.dtd`.  
2. **Transform XML:** Use `transform.xslt` to generate an HTML page dynamically from the XML file.  
3. **Add Styling:** Ensure the CSS file (`style.css`) is linked to the generated HTML for a professional appearance.  
4. **Interactive Page:** Open `index.html` in a browser to explore dynamic filtering and search features powered by JavaScript.  

---

## 🔍 Validation  

All files are designed to comply with the latest **W3C standards** for XML, XSLT, DTD, and CSS. This ensures the project is reliable and maintains high-quality data integrity.  

---

This project demonstrates how XML can be transformed into dynamic and user-friendly web pages with **XSLT**, styled with **CSS**, and made interactive using **JavaScript and XPath**. Dive into the project and explore the seamless integration of structured data with modern web technologies! 🎸  
