# We will study advance cocepets about html and css

## HTML tags

- Meta tag contain the information about your webpage.

- First SEO optimization should be start from here you shoudl use <meta name="food-webpage" content="Welcome to world of food here you can eat anything according to your customizability">

- We have particular tags for <header>, <footer>, <aside>(not part of main page), <nav>as navbar, <img>, <audio>, <video> etc

- We should use new tags tags introduced in html5 it makes software to read the webpage easily rather than identifying it through the classes or ids

- <pre> tag is use to preserve spaces in a paragraph
    eg: <pre> here are      many spaces</pre>

- We have input tag right, so we do have many types that we don't actually use but when we see some websites using some diffrent inputs it looks like its something else but its noting but types of inputs that out html provides some of them are:
 eg: <input type="color"> - color picker
     <input type="file">    - opens file explorer to pick a file
     <input type="search">

- We have a feature to prevent displaying out website in someone's else using ifrme and that feature is setting x-frame to sameorigin - it implies that if the webpages is opening in other origin it will not be visible.


## Css concepts

 **Css specificity**: It determines which style is to be applied on which tag like if there are two tags with same name it depends upon specificity if the first tag is selected by id selector will have specificity more than the normal p tag so likewise their style will be applied on them

**Box Model** : How you display the element on the screen and its propertiels we know this.
    box-sizing:
    - border-box: More intuitive for layout design, especially when dealing with padding and borders, as it avoids unexpected size increases.
    - content-box: is beter suited for cases where the content dimensions are critical and need to remain constnat, regadless of padding or border.

**Css variables**: We can define some css valiables with particular styles that we want to use in many places
    like:
        :root or html{
            --bgcolor: red
            --primaryFont: 20px;
        }
        h1{
            font-size: var(--primaryFont)
            background-color: var(--bgcolor)
        }

**Calc function** : calc function is used to make style dynamic with calculation by change in width or height like:
  eg: body{
    font-size: calc(20px)
  }
  now it will adjust the fontsize to 20px or more according to the dimension of the webpage


**Sudo selectors** : We can use > for accessing child elements inside a tag and + to select siblings
 - if a div has more than two childs we can use **nth-child(1)** selector to access that particular element on the webpage
 - We can use sudo selector on top of a sudo selector

 **Attr attribute** :  
