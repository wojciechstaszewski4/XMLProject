# 🗂️ Custom XML Project  

This repository contains a set of XML-based files and associated resources to create, display, and interact with structured data using modern web technologies. The project follows the specifications below to showcase the power of **XML**, **XSLT**, **CSS**, **DTD**, and **JavaScript**.  

---

## 📖 Project Overview  

### 1️⃣ **XML File**  
A custom XML file designed around a topic of interest, containing:  
- A root element with data for **at least 10 items**.  
- Each item includes:  
  - An attribute `type` with one of three possible values.  
  - At least **three sub-elements**, one of which is a URL to an accurate picture of the item.  
  - Two sub-elements with additional attributes.  

---

### 2️⃣ **XSLT Stylesheet**  
The XSLT stylesheet transforms the XML data into a visually appealing **HTML page** with the following features:  
- Dynamically displays images using URLs from the XML file.  
- Assigns **different background colours** based on the value of the `type` attribute.  

---

### 3️⃣ **CSS Stylesheet**  
The CSS file enhances the look of the generated HTML page by:  
- Adding **background colours**, custom fonts, margins, and padding.  
- Using a **background image** or a subtle background colour for the page.  

---

### 4️⃣ **DTD File**  
The DTD file defines and validates the structure of the XML file by:  
- Declaring all elements and their hierarchy.  
- Specifying the allowed attributes, their types, and whether they are required or optional.  

---

### 5️⃣ **HTML with JavaScript (XPath)**  
An interactive HTML file powered by JavaScript allows users to:  
- Click a "Show All" button to display the entire XML content.  
- Use **three filter buttons** to display items based on their `type` attribute.  
- Perform a **full-text search** in a specific element of the XML file and display filtered results.  

---

## 🚀 Features  

- **Dynamic Transformation:** Generate HTML directly from XML using XSLT.  
- **Custom Styling:** Make the generated page visually appealing with CSS.  
- **Interactive Filtering:** Use JavaScript and XPath for dynamic data manipulation.  
- **Validation:** Ensure the XML file conforms to the DTD schema.  

---

## 📂 File Structure  

- **XML File:** `custom_data.xml` (Custom XML with 10+ items)  
- **XSLT File:** `transform.xsl` (Transforms XML into HTML)  
- **CSS File:** `style.css` (Styles the HTML output)  
- **DTD File:** `custom_data.dtd` (Defines and validates the XML structure)  
- **HTML with JavaScript:** `interactive.html` (Interactive page to display and filter XML content)  

---

## 🎯 How to Run  

1. **Open XML File:** Validate the XML file against the provided DTD.  
2. **Transform XML:** Use the XSLT stylesheet to generate the HTML file.  
3. **Add Styling:** Ensure the CSS file is linked to the generated HTML for enhanced visuals.  
4. **Interactive Display:** Open the `interactive.html` file in a browser and explore filtering and search features powered by JavaScript.  

---

## 🔍 Validation  

All files are designed to comply with the latest **W3C standards** for XML, XSLT, DTD, and CSS.  

---

This project demonstrates the seamless integration of XML, XSLT, CSS, and JavaScript, showcasing how structured data can be transformed into dynamic, user-friendly web pages.  
