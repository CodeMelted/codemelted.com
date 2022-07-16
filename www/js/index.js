/**
 * @file Provides the behavior for the SPA https://codemelted.com portal and 
 * sub-domains
 * @copyright 2022 Mark Shaffer. All Rights Reserved.
 * @license MIT
 * <br /><br />
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to 
 * deal in the Software without restriction, including without limitation the 
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or 
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * <br /><br />
 * The above copyright notice and this permission notice shall be included in 
 * all copies or substantial portions of the Software.
 * <br /><br />
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS 
 * IN THE SOFTWARE.
 */

// Setup the worker variables for this file.
const mainDomain = "https://codemelted.com";
const blogDomain = "https://blog.codemelted.com";
const socialDomain = "https://social.codemelted.com";
const projectsDomain = "https://xplat-modules.codemelted.com";
const tabPages = {
    // Top Tabs
    "Blog"      : `${blogDomain}`,
    "GitHub"    : `${socialDomain}`,
    "Instagram" : `${socialDomain}/widgets/instagram.html`,
    "Twitter"   : `${socialDomain}/widgets/twitter.html`,
    // Bottom Tabs
    "Design"    : `${projectsDomain}`,
    "Cpp"       : `${projectsDomain}/cpp/melt_the_code/docs`,
    "Flutter"   : `${projectsDomain}/flutter/melt_the_code/docs`,
    "Java"      : `${projectsDomain}/java/melt_the_code/docs`,
    "Js"        : `${projectsDomain}/js/melt_the_code/docs`,
    "Pwsh"      : `${projectsDomain}/pwsh/melt_the_code/docs`,
};

/**
 * Responsible for resize the content area of the SPA to properly fit the sub
 * domain content.
 */
function resizeContentArea() {
    let contentArea = document.getElementById("contentArea");
    const height = window.innerHeight || 
        document.documentElement.clientHeight || 
        document.body.clientHeight;
    contentArea.style.height = (height - 150) + "px";  
}

/**
 * Public function for the HTML to hook into for the tabs that open 
 * sub-domains
 * @param {MouseEvent} evt Mouse event holding the object that invoked the click.
 * @param {string} tabName Name of the tab that was clicked.
 */
function openTab(evt, tabName) {
    let i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabContent");

    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
    contentArea.src = tabPages[tabName];
}

/**
 * Main entry point of this script.
 */
function main() {
    // Get information necessary for the portal or sub-domain page.
    const href = window.location.href;
    const isWithinIFrame = window.frameElement
        ? true 
        : false;

    // If main domain, setup items for the main SPA
    if (href.includes(mainDomain) || href.includes("file://")) {
        addEventListener('resize', (event) => resizeContentArea());
        resizeContentArea();
        let btnSearch = document.getElementById("btnSearch");
        btnSearch.addEventListener("click", ()=> {
            window.alert("Currently Being Implemented");
        });
        let btnSupport = document.getElementById("btnSupport");
        btnSupport.addEventListener(
            "click", 
            () => { 
                window.open(
                    "https://www.buymeacoffee.com/codemelted", 
                    "_blank"
                );
            }
        );
    } else {
        // This is one of the sub-domains, ensure it opens within the iframe.
        if (!isWithinIFrame) {
            // TODO: Ensure we redirect to the main site
            //       1. Store in memory what the href will be
            //       2. Identify the active tab.
        }
    }
}
main();

