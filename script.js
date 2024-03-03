var xmlDoc;

function loadXML ()
{
   var xhttp = new XMLHttpRequest();

   xhttp.onreadystatechange = function ()
   {
      if ( this.readyState == 4 )
      {
         if ( this.status == 200 )
         {
            xmlDoc = this.responseXML;
            console.log("XML loaded successfully.");
         }
         else
         {
            console.error("Failed to load XML. Status code: " + this.status);
         }
      }
   };

   xhttp.open("GET", "guitars.xml", true);
   xhttp.send();
}

function showAll ()
{
   var output = document.getElementById("guitarList");

   if ( output )
   {
      output.innerHTML = "";
      var guitars = xmlDoc.getElementsByTagName( "guitar" );
      
      for ( var i = 0; i < guitars.length; i++ )
      {
         displayGuitar(guitars[i]);
      }
   }
   else
   {
      console.error("Element with id 'guitarList' not found.");
   }
}

function filterByType ( type )
{
   var output = document.getElementById("guitarList");

   if ( output )
   {
      output.innerHTML = "";
      var xpath = "//guitar[@type='" + type + "']";
      var guitars = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);
      var guitar = guitars.iterateNext();

      while ( guitar )
      {
         displayGuitar(guitar);
         guitar = guitars.iterateNext();
      }
   }
   else
   {
      console.error("Element with id 'guitarList' not found.");
   }
}

function filterByText ()
{
   var output = document.getElementById("guitarList");

   if ( output )
   {
      output.innerHTML = "";
      var searchText = document.getElementById("searchInput").value.toLowerCase();
      var xpath = "//guitar[contains(translate(brand, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), '" + searchText + "')" +
         " or contains(translate(model, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), '" + searchText + "')]";
      var guitars = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);
      var guitar = guitars.iterateNext();

      while ( guitar )
      {
         displayGuitar(guitar);
         guitar = guitars.iterateNext();
      }
   }
   else
   {
      console.error("Element with id 'guitarList' not found.");
   }
}

function displayGuitar ( guitar )
{
   var output = document.getElementById("guitarList");

   if ( output )
   {
      var div = document.createElement("div");
      div.className = "guitar";

      var brand = document.createElement("h2");
      brand.textContent = guitar.getElementsByTagName("brand")[0].textContent;

      var model = document.createElement("p");
      model.textContent = "Model: " + guitar.getElementsByTagName("model")[0].textContent;

      var year = document.createElement("p");
      year.textContent = "Year: " + guitar.getElementsByTagName("year")[0].textContent;

      var price = document.createElement("p");
      price.textContent = "Price: $" + guitar.getElementsByTagName("price")[0].textContent;

      var rating = document.createElement("p");
      rating.textContent = "Rating: " + guitar.getElementsByTagName("rating")[0].textContent;

      var img = document.createElement("img");
      img.src = guitar.getElementsByTagName("url")[0].textContent;
      img.alt = "Guitar Image";

      div.appendChild(brand);
      div.appendChild(model);
      div.appendChild(year);
      div.appendChild(price);
      div.appendChild(rating);
      div.appendChild(img);

      output.appendChild(div);
   }
   else
   {
      console.error("Element with id 'guitarList' not found.");
   }
}

loadXML();