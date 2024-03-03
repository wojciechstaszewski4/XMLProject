<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()" />
        </xsl:copy>
    </xsl:template>

    <xsl:template match="guitars">
        <html lang="pl-PL">
            <head>
                <meta charset="UTF-8" />
                <meta name="author" content="Wojciech Staszewski" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="favicon.png" type="image/png" />
                <link rel="stylesheet" type="text/css" href="style.css" />
                <title>Guitar Catalog</title>
            </head>
            <body>
                <header>
                    <h1 id="guitarCatalog">Guitar Catalog</h1>
                </header>

                <div class="container">
                    <div id="guitarList" class="guitar-list">
                        <xsl:apply-templates select="guitar" />
                    </div>
                </div>

                <footer>
                    2024 Guitar Catalog by Wojciech Staszewski. All rights reserved.
                </footer>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="guitar">
        <div class="guitar" style="background-color: {@color};">
            <h2 style="color: white;">
                <xsl:value-of select="brand" />
            </h2>
            <p style="color: white;">Model: <xsl:value-of select="model" /></p>
            <p style="color: white;">Year: <xsl:value-of select="year" /></p>
            <p style="color: white;">Price: $<xsl:value-of select="price" /></p>
            <p style="color: white;">Rating: <xsl:value-of select="rating" /></p>
            <img src="{url}" alt="Guitar Image" style="max-width: 100%;" />
        </div>
    </xsl:template>

</xsl:stylesheet>