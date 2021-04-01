/* 

Use Fetch API to correct this example:

*/

function loadJson(url) {
    return fetch(url)
    .then(resonse => {
        if(resonse.status == 200) {
        } else {
            throw new Error(response.status);
        }
    });
}

loadJson('no-such-user.json')
    .catch(alert); // Error 404

/* 

RESOURCES:

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
Rewriting promise code with async/await:

*/    

// Promises using async/await and try/catch:
// Async fn to get the JSON document from the url provided:
async function loadJson(url) {
    // Do a check:
    try { // check if we can get the document, await. Store the current status in the response variable.
        let response = await fetch(url);

        if (response.status !== 200) { // check status if it is ok. Status 200 means doc is found and can acess it.
            throw new Error("HTTP error status: " + response.status); // If response NOT 200 then throw an error.
        }

        let myJson = await response.json(); // if all ok, get the JSON document, await...
            return myJson;
    } catch (e) {
        console.log(e); // logout any errors to the UI for user.
    }
}
// Calling the fn and testing for document not esists:
loadJson('no-such-user.json');
// Calling the fn and testing for document that esists:
loadJson('document-exists.json');












